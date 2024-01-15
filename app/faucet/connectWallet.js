import {
    ConnectWallet,
    lightTheme,
    useChainId,
    useAddress,
    useConnectionStatus
} from "@thirdweb-dev/react";

const customTheme = lightTheme({
    colors: {
        primaryText: 'black',
        primaryButtonBg: '#b6feda',
        primaryButtonText: 'black',
        secondaryButtonBg: '#59ad8c',
        connectedButtonBgHover: '#59ad8c',
        borderColor: '#59ad8c'
    },
});


