
# P2P Auction

P2P Auction is a decentralized auction solution built using Hyperswarm RPC and Hypercores, enabling peer-to-peer auction functionalities without a central server.

## Features

- Open and manage auctions
- Submit bids for items
- Close auctions and determine winners

## Prerequisites

Ensure you have Node.js and npm installed on your machine.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ifarhanriasat/p2p_auction.git
   ```
2. Navigate to the project directory:
   ```bash
   cd p2p_auction
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

### Running the P2P Server

To start the P2P server, run:
```bash
node server.js
```

### Client Commands

#### Open an Auction

To open an auction, use the following command:
```bash
node client.js open server_public_key "item description" starting_price
```
- `server_public_key`: The public key of the server.
- `item description`: A brief description of the item being auctioned.
- `starting_price`: The starting price of the auction.

#### Submit a Bid

To submit a bid for an auction, use:
```bash
node client.js bid server_public_key auction_id bid_amount
```
- `server_public_key`: The public key of the server.
- `auction_id`: The ID of the auction you are bidding on.
- `bid_amount`: The amount you are bidding.

#### Close an Auction

To close an auction and determine the winner, use:
```bash
node client.js close server_public_key auction_id
```
- `server_public_key`: The public key of the server.
- `auction_id`: The ID of the auction you want to close.

## Example

1. **Open an Auction**:
   ```bash
   node client.js open server_public_key "Vintage Watch" 100
   ```

2. **Submit a Bid**:
   ```bash
   node client.js bid server_public_key auction_id 150
   ```

3. **Close an Auction**:
   ```bash
   node client.js close server_public_key auction_id
   ```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with your changes.

## Contact

For questions or support, please open an issue in the repository or contact the maintainer.


