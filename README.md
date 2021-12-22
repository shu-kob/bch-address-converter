# bch-address-converter

## How to use

https://qiita.com/shu-kob/items/6922c689e38e6f4283d5

```bash
node bchAddressConverter.js bitcoincash:qph5kuz78czq00e3t85ugpgd7xmer5kr7c5f6jdpwk
```

```
1B9UNtBfkkpgt8kVbwLN9ktE62QKnMbDzR
```

Cash AddressをLegacy Addressに変換できました。

```bash
node bchAddressConverter.js qph5kuz78czq00e3t85ugpgd7xmer5kr7c5f6jdpwk    
```

```
1B9UNtBfkkpgt8kVbwLN9ktE62QKnMbDzR
```

Cash Addressの「bitcoincash:」がなくてもLegacy Addressに変換できます。


```bash
node bchAddressConverter.js 1B9UNtBfkkpgt8kVbwLN9ktE62QKnMbDzR 
```

```
bitcoincash:qph5kuz78czq00e3t85ugpgd7xmer5kr7c5f6jdpwk
```

逆にLegacy AddressをCash Addressにできました。

↓もっと色々やってみたい方は「bchaddrjs」のREADMEを読んでみましょう！

https://github.com/ealmansi/bchaddrjs
