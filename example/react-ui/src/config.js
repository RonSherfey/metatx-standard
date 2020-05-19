let config = {};
config.contract = {
    address: "0x015Caa45B496C45fee46b9FDfEB095B92C80f89e",
    abi: [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"userAddress","type":"address"},{"indexed":false,"internalType":"address payable","name":"relayerAddress","type":"address"},{"indexed":false,"internalType":"bytes","name":"functionSignature","type":"bytes"}],"name":"MetaTransactionExecuted","type":"event","signature":"0x5845892132946850460bff5a0083f71031bc5bf9aadcd40f1de79423eac9b10b"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"constant":false,"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"bytes","name":"functionSignature","type":"bytes"},{"internalType":"string","name":"message","type":"string"},{"internalType":"string","name":"length","type":"string"},{"internalType":"bytes32","name":"sigR","type":"bytes32"},{"internalType":"bytes32","name":"sigS","type":"bytes32"},{"internalType":"uint8","name":"sigV","type":"uint8"}],"name":"executeMetaTransaction","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"payable":true,"stateMutability":"payable","type":"function","signature":"0xd039fca1"},{"constant":true,"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getNonce","outputs":[{"internalType":"uint256","name":"nonce","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x2d0335ab"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x8da5cb5b"},{"constant":true,"inputs":[],"name":"quote","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x999b93af"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"string","name":"message","type":"string"},{"internalType":"string","name":"length","type":"string"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"bytes32","name":"sigR","type":"bytes32"},{"internalType":"bytes32","name":"sigS","type":"bytes32"},{"internalType":"uint8","name":"sigV","type":"uint8"}],"name":"verify","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x7c9f0e64"},{"constant":false,"inputs":[{"internalType":"string","name":"newQuote","type":"string"}],"name":"setQuote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xe3de1703"},{"constant":true,"inputs":[],"name":"getQuote","outputs":[{"internalType":"string","name":"currentQuote","type":"string"},{"internalType":"address","name":"currentOwner","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x171755b1"}]
}


module.exports = {config}
