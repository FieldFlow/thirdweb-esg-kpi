# FiledFlow - ESG KPI Reporting System

The deployed website [https://thirdweb-esg-kpi.vercel.app/](https://thirdweb-esg-kpi.vercel.app/)

The deployed contract [https://testnet.explorer.etherlink.com/address/0x33c06A3610D58df2D6c3A8F24063b9b4DEEdB283](https://testnet.explorer.etherlink.com/address/0x33c06A3610D58df2D6c3A8F24063b9b4DEEdB283)

## Overview
FiledFlow is a web-based solution designed to help companies streamline their ESG (Environmental, Social, and Governance) KPI reporting process. This project uses blockchain technology to ensure transparency, data integrity, and reliability for corporate ESG disclosures.

FiledFlow is ideal for organizations aiming to comply with ESG reporting requirements and enhance their sustainability practices by providing easy submission and validation of ESG data.

It is also ideal for investors making decisions regarding responsible investments.

In the future, it will be possible for people to assess comprehensive ESG metrics with the help of explainable AI.

## Features
- **Web3 Wallet Integration**: Securely connect and verify company identities using Web3 wallet integration (e.g., MetaMask, WalletConnect, Coinbase, etc.).
- **ESG Data Submission**: Submit various ESG KPIs related to GHG emissions, hazardous waste, energy consumption, water consumption, and more. We rely on the classification of environmental KPIs in the ESG report guide issued by HKEX from the 96th percentile journal of Computers & Industrial Engineering: [link](https://www.sciencedirect.com/science/article/pii/S0360835222004909).
- **Blockchain Storage**: Store submitted data on the Tezos L2 (Etherlink) testnet blockchain, ensuring transparency and immutability. It can be deployed on any EVM-compatible blockchain, ensuring interoperability.
- **User-Friendly UI**: User-friendly forms to submit and track ESG data, accessible via intuitive categories.
- **Feedback Mechanism**: Feedback from users and clients through built-in feedback tools of Vercel, where the MVP is deployed.

## Technology Stack
- **Next.js**: React framework for server-side rendering and building web interfaces.
- **Thirdweb**: Integration with Thirdweb for Web3 interactions.
- **Blockchain**: Smart contracts for decentralized storage and validation of ESG data.
- **ethers.js**: Library for interacting with the Ethereum blockchain.

## Installation
To run the frontend of the project locally, you'll need Node.js and npm/yarn installed.

1. Clone the repository:
   ```sh
   git clone https://github.com/ermolaev1337/thirdweb-esg-kpi
   ```

2. Navigate to the project directory:
   ```sh
   cd frontend
   ```

3. Install the dependencies:
   ```sh
   npm install
   # or
   yarn
   ```

4. Update the `.env` file to store NEXT_PUBLIC_TEMPLATE_CLIENT_ID environment variable, provided by the project team, or create your own if you consider deploying your own smart contract.

5. Start the development server:
   ```sh
   npm run dev
   ```

6. Open your browser and navigate to `http://localhost:3000` to view the app.

For contract interaction details, refer to the README.

1. Navigate to the contract directory from the project directory:
   ```sh
   cd esg-kpi
   ```

For more detailed information, check out the tutorial: [https://youtu.be/qDqJZl32oN4](https://youtu.be/qDqJZl32oN4)

## Usage
1. **Connect Wallet**: Click on the **Connect Wallet** button at the top right corner of the page to connect your Web3 wallet.
2. **Submit ESG Data**: Enter the required information in the provided forms for each ESG category, including GHG Emission, Hazardous Waste, and more.
3. **Track Submissions**: Upon successful submission, track the submitted ESG data and navigate to the investor page.

## Blockchain Data Verification
To verify the data in the blockchain, we open a separate contract transaction and continue from there.

When using the `stringToUint256` function, which converts a string to `bytes32` and then casts it to `BigNumber`, let's break down the given value:

```
0xf860f66d000000000000000000000000cbf7e1043ca0aa9a5d9c7d67e53dfd5a7839f87268617a6172646f75735761737465413136000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000d903
```

- **Function selector**: `0xf860f66d` - This selector indicates the function being called, identified by its ABI.
- **Parameter 1** (address): `000000000000000000000000cbf7e1043ca0aa9a5d9c7d67e53dfd5a7839f872` - After removing leading zeros, it becomes `0xcbf7e1043ca0aa9a5d9c7d67e53dfd5a7839f872`.
- **Parameter 2** (string represented as `bytes32`): `68617a6172646f7573576173746541313600000000000000000000000000000000` - This is a 32-byte value, which can be recognized as a UTF-8 string, resulting in `"hazardousWasteA16"`.
- **Parameter 3** (`uint256`): `000000000000000000000000000000000000000000000000000000000000d903` - This value in hexadecimal is `0xd903`, equivalent to `55555` in decimal.

In summary:
- **Parameter 1** - Address: `0xcbf7e1043ca0aa9a5d9c7d67e53dfd5a7839f872`
- **Parameter 2** - String: `"hazardousWasteA16"`
- **Parameter 3** - Uint256: `55555`

This function call passes the string `"hazardousWasteA16"`, which was converted to `bytes32` using your new function and then cast to `BigNumber`.

## Folder Structure
- `pages/` - Next.js pages including:
    - **for-investors**
    - **for-companies**
    - **main page**

## License
This project is licensed under the MIT License.

## Contact
For further questions or information, please contact us via email at [egor@filedflow.lu](mailto:egor@filedflow.lu) or visit our website [https://filedflow.lu](https://filedflow.lu).

To obtain test tokens for submitting data as a company, visit: [https://faucet.etherlink.com/](https://faucet.etherlink.com/)
