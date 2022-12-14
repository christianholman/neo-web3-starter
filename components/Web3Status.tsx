import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useConnect } from "wagmi";

interface Web3StatusProps {}

export default function Web3Status() {
  return (
    <div>
      <ConnectButton />
    </div>
  );
}
