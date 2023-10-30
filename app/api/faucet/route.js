import nextConnect from 'next-connect';
import { ethers } from 'ethers';

const handler = nextConnect();

handler.use(express.json());

handler.post(async (req, res) => {
    try {
        const { walletAddress } = req.body;
        console.log(walletAddress)
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
        return res.status(200).json({ receipt });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'An error occurred' });
    }
});

export default handler;