const jwt = require('jsonwebtoken');

/**
 * jwt加密/解密
 */
 const Token = {
    encrypt:function(data,time){ //data加密数据，time过期时间
      return jwt.sign(data, 'token', {expiresIn:time})
    },
    decrypt:function(token){
      try {
        let data = jwt.verify(token, 'token');
        console.log(data, 'data')
        return {
          token:true,
          id:data.id
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