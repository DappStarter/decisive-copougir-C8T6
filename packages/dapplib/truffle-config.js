require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb surge traffic number crater remain hospital idea knife flush spring'; 
let testAccounts = [
"0xa2bb37c8ae00cf1bcfd844c857f3240a5610d6cd4545e26a1eea53f3119f72b4",
"0x3f683dcd1b768579ffa7b73745f4f0a34b208358ca1d9145f5835094e5234c51",
"0xa9583a84907fa6128c798842980bf3f6e9ca80b7b5ac462c846f44e20e9b70be",
"0x19c54a1a34409134807d777cd9778fd2baa21b075fb017498a87ff8e1ba56feb",
"0xf16ad25e071816530358713a1f65a0455ab928b0c23c2ff215582690ae627387",
"0xc0cb3a49e8476afe408e04ccfc1c25418b6124d52ad61dedd68ac9eb3a172f28",
"0x2df757df0ca1d06f9b591cc4995229fa025045216e81db9dc1f9b9abd312106b",
"0x5b312bfdf6427fc904dae09de55b13aa6587e2c510be98d21a0d475b70da82c8",
"0x504128e655bc9cf9be47f87ab188aae8ab57784f5b3fd87c3712d1b38e94b8b1",
"0xa525af52a3dbd2b35a78c2b306016000882a1e3885391d6d6056a0ca4f65a3be"
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

