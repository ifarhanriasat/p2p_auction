const hypercore = require('hypercore');
const ram = require('random-access-memory');

const feed = hypercore(ram, { valueEncoding: 'json' }); // Initialize Hypercore feed
const auctions = []; // Local array to hold auction details

module.exports = {
  feed,
  auctions
};
