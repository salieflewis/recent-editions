import { useAccount, useBalance } from 'wagmi';

export function useConnectedBalance() {
  const { address, isConnecting, isDisconnected } =
    useAccount();
  const { data, isError, isLoading } = useBalance({
    addressOrName: address,
  });

  const balance = data?.formatted;

  return balance;
}
