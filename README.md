# FRED Block Explorer
Block explorer for FRED (FRED) CryptoNote based cryptocurrency, forked from UltraNote-BE, with code originating from the great Karbovanets/Karbowanec-Blockchain-Explorer.

#### Installation

1) It takes data from daemon FREDdaemon. It should be accessible from the Internet. Run FREDdaemon with open port as follows:
```bash
./FREDdaemon --enable-cors="*" --enable_blockexplorer --rpc-bind-ip=0.0.0.0 --rpc-bind-port=31807
```
2) Just upload to your website and change 'api' variable in config.js and other files to point to your daemon (replace 127.0.0.1 with daemon ip or hostname).
