const hyperswarm = require('hyperswarm');
const hyperswarmRPC = require('@hyperswarm/rpc');
const { feed } = require('./hypercore');

const swarm = hyperswarm(); // Create Hyperswarm swarm

// RPC server setup
const rpcServer = hyperswarmRPC.createServer({
  swarm,
  publicKey: feed.key.toString('hex'), // Public key of the Hypercore feed
  stream: (peer) => handleRPCStream(peer)
});

rpcServer.listen(() => {
  console.log('RPC server is listening');
});

// RPC client setup
const rpcClient = hyperswarmRPC({
  swarm
});

async function handleRPCStream(peer) {
  // Handle incoming RPC streams here
}

module.exports = {
  rpcClient
};
