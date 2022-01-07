const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const fs = require('fs');
const path = require('path');

const genHash = (openid) => {
  return bcrypt.hash(openid, 10);
}

const campare = () => {
  return bcrypt.compare(password, hash)
}

/**
 * jwt加密/解密
 */
 const Token = {
    encrypt:function(data,time){ //data加密数据，time过期时间
      const privateKey = fs.readFileSync(path.resolve(__dirname, '../cert/rsa_private_key.pem'));
      return jwt.sign(data, privateKey, { algorithm: 'RS256', expiresIn:time})
    },
    decrypt:function(token){
      try {
        if (token) {
          const publicKey = fs.readFileSync(path.resolve(__dirname, '../cert/rsa_public_key.pem'));
          const decode = jwt.verify(token, publicKey); 
          // return {
          //   token:true,
          //   id:data.iat
          // };
          return decode;
        } else {
          return false;
        }
      } catch (e) {
        // return {
        //   token:false,
        //   data:e
        // }
        console.log(e)
      }
    }
  }
  module.exports = {
    Token
  };