import bchaddr from 'bchaddrjs';

var address = process.argv[2];

var isCashAddress = bchaddr.isCashAddress;
var isLegacyAddress = bchaddr.isLegacyAddress;
var toLegacyAddress = bchaddr.toLegacyAddress;
var toCashAddress  = bchaddr.toCashAddress;

if (isCashAddress(address)) {
  var legacy_address = toLegacyAddress(address);
  console.log(legacy_address);
} else if (isLegacyAddress(address)) {
  var cash_address = toCashAddress(address);
  console.log(cash_address);
}