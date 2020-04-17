const request = require('../../index.js').request;
const urlbase = 'https://api.net-tools.xyz';
module.exports = async (length, callback) => {
    if(callback) {
        request.get(urlbase+'/crypto/generatepassword'+length!=null?"?length="+length:"", (error, response, body) => {
            if(error) return callback(error, null)
            try {
                return callback(false, JSON.parse(body))
            } catch(err) {
                return callback(err, null)
            }
        })
    } else {
        request.get(urlbase+'/crypto/generatepassword'+length!=null?"?length="+length:"", (error, response, body) => {
            return new Promise((resolve, reject) => {
                if(error) reject(error, null)
                else try {
                    resolve(false, JSON.parse(body))
                } catch(err) {
                    reject(err, null)
                }
            });
        })
    }
}