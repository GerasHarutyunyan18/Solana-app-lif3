import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { WalletWrapper } from "./contexts/wallet";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { WagmiProvider } from "wagmi";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

createWeb3Modal({
  wagmiConfig: config,
  projectId,
});


root.render(
  <React.StrictMode>
    <WagmiProvider>
      <WalletWrapper>
        <App />
      </WalletWrapper>
    </WagmiProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
