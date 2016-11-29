var des = require('./index.js');

var key = 'f';
var str = 'abc123';
var encryptedStr = '4223AA73D512356E729AB9F6564A70FB';

if(des.e(str, key) == encryptedStr && des.d(encryptedStr, key) == str){
    console.log('ok');
}else{
    console.log('error');
}
