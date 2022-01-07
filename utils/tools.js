const jwt = require('jsonwebtoken');

/**
 * jwt加密/解密
 */
 const Token = {
    encrypt:function(data,time){ //data加密数据，time过期时间
      return jwt.sign(data, 'violet', {expiresIn:time})
    },
    decrypt:function(token){
      try {
        let data = jwt.verify(token, 'violet'); 
        console.log(data, 'data')
        return {
          token:true,
          id:data.iat
        };
      } catch (e) {
        return {
          token:false,
          data:e
        }
      }
    }
  }
  module.exports = {
    Token
  };