const { startAuctionSystem } = require('./lib/auction');

async function main() {
  try {
    await startAuctionSystem();
  } catch (error) {
    console.error('Error starting auction system:', error);
  }
}

main();
