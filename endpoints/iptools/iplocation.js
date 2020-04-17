const request = require('../../index.js').moduleRequest;
const urlbase = 'https://api.net-tools.xyz';
module.exports = (ipAddress, callback) => {
    request.get(urlbase + '/iptools/iplocation/?ip=' + ipAddress, (error, response, body) => {
        if(error) {
            if(callback) return callback(error, null)
            else return {
                error: error
            }
        }
        try {
            if(callback) return callback(false, JSON.parse(body))
            else return JSON.parse(body)
        } catch(err) {
            if(callback) return callback(err, false)
            else return {
                error: err
            }
        }
    })
}