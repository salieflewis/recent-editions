import { ConnectKitButton } from 'connectkit';
import { Box, Button, Eyebrow } from '@zoralabs/zord';
import { connectButtonStyle } from 'styles/styles.css';

export const CustomConnect = ({ title }) => {
  return (
    <ConnectKitButton.Custom>
      {({
        isConnected,
        isConnecting,
        show,
        hide,
        address,
        truncatedAddress,
        ensName,
      }) => {
        return (
          <Box
            onClick={show}
            className={connectButtonStyle}
          >
            <Eyebrow>
              {isConnected
                ? ensName ?? truncatedAddress
                : title}
            </Eyebrow>
          </Box>
        );
      }}
    </ConnectKitButton.Custom>
  );
};
