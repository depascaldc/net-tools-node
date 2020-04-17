const request = require('../../index.js').moduleRequest;
const urlbase = 'https://api.net-tools.xyz';

module.exports.run = (address, port, callback) => {
    request.get(urlbase + '/mcapi/favicon/?server=' + address + "&port=" + port, (error, response, body) => {
        if (error) {
            if (callback) return callback(error, null)
            else return {
                error: error
            }
        }
        try {
            if (callback) return callback(false, JSON.parse(body))
            else return JSON.parse(body)
        } catch (err) {
            if (callback) return callback(err, false)
            else return {
                error: err
            }
        }
    })
}

module.exports.runAsync = async (address, port) => {
    return new Promise((resolve, reject) => {
        this.run(address, port, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        })
    });
}