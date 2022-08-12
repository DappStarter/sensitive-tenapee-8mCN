require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict clock orphan spray educate robot net purse grace indoor foster skin'; 
let testAccounts = [
"0xa25b9471b97ee783de58d6bd9e8c143c2342f1e22be47ce2681ed407ca5e0ddf",
"0x33d0c28fd5b54b87c12f26fc44cbd74a821934d09848236d3e1fa70e61343904",
"0x58829d67dd575cbabe96bc7fb57d9cf34918ea4b8cbfa33e7cddce11ba6bd532",
"0x29f413d5cc9a848783cc3290672bf3da167a176fad3450ac0ecdcf7d88d40355",
"0xd066a1f5c0bcd19f6cd313b32ab84ec2f224c4f6b92657b8125df6b59d517734",
"0xfd322ac6cc2b816dcc88e27327d13a936300718c799b6b45fccc28e05f21cf8b",
"0x872c86b5b668b3246056d80e54dc4c878e40ea896f1e41e8b3133525bdbfa073",
"0xf44b743e248ab8a32e764dc6587f8ec505701bcd105f08e1480bb2d729ea8fce",
"0x832cd4e34f37aaa05f8122b0df63502f236bb4bd688b88a16ad2fcd4edda7c9d",
"0x815da2cd57f5b132be455b8d298cbe2785a44e4557b28b123b81b95d33739119"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

