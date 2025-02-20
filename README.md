# P2P Wallet Prototype

![](https://cdn.discordapp.com/attachments/737610668726812763/777332772540645376/wallets_web2x.png)

A Open Source Browser Based Solana Wallet. Version "0.1a Wormhole Hackathon"
Built on top of [Solana](https://github.com/solana-labs), [ProjectSerum](https://github.com/project-serum)

Live demo available at [github-pages](https://p2p-org.github.io/p2p-wallet-web/)

P2P Wallet Prototype supports a number features such as:

- Create/Access Wallet with seed. Your private keys are only stored on your current computer or device.
- Create Wrapped tokens addresses
- Displaying balances of SOL token and Wrapped tokens
- Displaying the value of assets in dollars.
- Send and receive SOL token and Wrapped tokens
- Transaction history
- Transaction details
- HD (BIP32,BIP39) support
- QR code generation
- Nice UI

### Further development:

- One-tap access to swap assets
- Improving security
- Wallet Connect integration
- Send/Receive Wrapped tokens to/from Ethereum Blockchain
- DeFi support

## Build it yourself

If you'd rather build the application yourself, please ensure you have nodejs/npm/yarn already installed locally.

```
git clone https://github.com/p2p-org/p2p-wallet-web.git
cd p2p-wallet-web
yarn
yarn start // to start a development
yarn build // to create a production build
yarn deploy // to deploy a production build
```

# Development

Install the following extensions in your code editor for linting and ease of work with the code:

- eslint
- prettier
- stylint
- linaria

# Contributing

The best way to submit feedback and report bugs is to open a GitHub issue. Please be sure to include your operating system, device, version number, and steps to reproduce reported bugs. Keep in mind that all participants will be expected to follow our code of conduct.
