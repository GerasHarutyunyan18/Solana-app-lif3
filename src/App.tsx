import { useWallet } from "@solana/wallet-adapter-react";
import { useSendTransaction } from "wagmi";
import logo from "./logo.svg";
import "./App.css";
import { parseEther } from "viem";

function App() {
  const { wallets, select, connected, connecting, disconnect, publicKey } =
    useWallet();
  const {
    data: hash,
    error,
    isPending,
    isSuccess,
    sendTransaction,
  } = useSendTransaction();
  const handleConnect = () => {
    console.log("wallets ==", wallets);
    select(wallets[0].adapter.name);
  };

  const handleDisconnect = () => {
    disconnect();
  };

  const handleSend = () => {
    sendTransaction({
      to: "9Xorof9a5LdNmgcBmNvX3KysQSqeVx2AGY8d8wEnYpSv" as `0x${string}`,
      value: parseEther("1"),

    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Is connected - {publicKey?.toString()}</p>
        <button onClick={handleConnect}>Connect</button>
        <button onClick={handleDisconnect}>Disconnect</button>
        <button onClick={handleSend}>Send</button>
      </header>
    </div>
  );
}

export default App;
