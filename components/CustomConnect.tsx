import { ConnectKitButton } from "connectkit";
import { Box, Button, Eyebrow } from '@zoralabs/zord'
import { connectButtonStyle } from "styles/styles.css";

export const CustomConnect = ({title}) => {
    return (
        <ConnectKitButton.Custom>
           {({ isConnected, isConnecting, show, hide, address, truncatedAddress, ensName }) => {
             return (
               <Box as={Button} variant='ghost' onClick={show} className={connectButtonStyle}>
                 {isConnected ? <Eyebrow>{ensName}</Eyebrow> ?? <Eyebrow>{truncatedAddress}</Eyebrow> : <Eyebrow>{title}</Eyebrow>}
               </Box>
             );
           }}
         </ConnectKitButton.Custom>
    )
}