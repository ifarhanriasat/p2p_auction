const { feed, auctions } = require('./hypercore');
const { rpcClient } = require('./rpc');
const crypto = require('crypto');

// Function to generate unique auction IDs
function generateAuctionId() {
  return crypto.randomBytes(8).toString('hex');
}

// Function to open a new auction
async function openAuction(auctionDetails, originPublicKey) {
  auctions.push({
    id: generateAuctionId(),
    seller: originPublicKey,
    details: auctionDetails,
    bids: []
  });

  const message = {
    type: 'newAuction',
    auctionId: auctionDetails.id,
    auctionDetails
  };

  await rpcClient.broadcast(message); // Broadcast the new auction to all nodes
}

// Function to submit a bid on an auction
async function submitBid(auctionId, bidDetails, originPublicKey) {
  const auction = auctions.find(a => a.id === auctionId);

  if (auction) {
    auction.bids.push({
      bidder: originPublicKey,
      details: bidDetails
    });

    const message = {
      type: 'newBid',
      auctionId,
      bidDetails
    };

    await rpcClient.broadcast(message); // Broadcast the new bid to all nodes
  }
}

// Function to close an auction
async function closeAuction(auctionId, winningBid) {
  const auctionIndex = auctions.findIndex(a => a.id === auctionId);

  if (auctionIndex !== -1) {
    const auction = auctions[auctionIndex];

    const message = {
      type: 'auctionClosed',
      auctionId,
      winningBid
    };

    rpcClient.broadcast(message); // Notify all nodes about the auction result

    auctions.splice(auctionIndex, 1); // Remove closed auction from local storage
  }
}

// Function to start the auction system
async function startAuctionSystem() {
  // Additional initialization or setup if needed
  console.log('Auction system started.');

  // Example: Open an auction
  const auctionDetails = {
    id: generateAuctionId(),
    item: 'Pic#1',
    startingPrice: 75,
    currency: 'USDt'
  };

  const originPublicKey = feed.key.toString('hex');
  await openAuction(auctionDetails, originPublicKey);

  // Example: Submit a bid
  const bidDetails = {
    amount: 80,
    currency: 'USDt'
  };

  const auctionId = auctions[0].id;
  await submitBid(auctionId, bidDetails, originPublicKey);

  // Example: Close an auction
  const winningBid = {
    bidder: originPublicKey,
    amount: 80,
    currency: 'USDt'
  };

  await closeAuction(auctionId, winningBid);

  // Additional logic or event handling can be added here
}

module.exports = {
  startAuctionSystem
};
