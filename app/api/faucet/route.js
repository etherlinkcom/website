import { NextResponse } from 'next/server';
import { ethers } from 'ethers';

export async function POST(request) {
    try {
        const { walletAddress } = request.body;
        const privateKey = process.env.PRIVATE_KEY;
        const provider = new ethers.providers.JsonRpcProvider(process.env.JSON_RPC_URL);
        const wallet = new ethers.Wallet(privateKey, provider);
        const transaction = {
            to: walletAddress,
            value: ethers.utils.parseEther("1.0"),
            gasPrice: await wallet.provider.getGasPrice(),
        };

        const txResponse = await wallet.sendTransaction(transaction);
        const receipt = await txResponse.wait();
        return NextResponse.json(
            {
                body: { receipt },
            },
            {
                status: 200,
            },
        );
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {
                body: "error",
            },
            {
                status: 500,
            },
        );
    }
};