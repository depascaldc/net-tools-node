const netTools = require('net-tools-node')

// sync get password
netTools.cryptoAPI.passwordGenerator.run(150, (error, data) => {
    if (error) console.log(error)
    console.log(data)
})
// async get password
netTools.cryptoAPI.passwordGenerator.runAsync(150).then(data => {
    console.log(data)
}).catch(error => {
    console.log(error)
})

// sync resolve uuid
netTools.minecraftAPI.uuidResolver.run("depascaldc", (error, data) => {
    if (error) console.log(error)
    console.log(data)
})
// async resolve uuid
netTools.minecraftAPI.uuidResolver.runAsync("depascaldc").then(data => {
    console.log(data)
}).catch(error => {
    console.log(error)
})

// sync whoisV2 resolve
netTools.ipToolsAPI.whoisV2.run("net-tools.xyz", (error, data) => {
    if (error) console.log(error)
    console.log(data)
})
// async whoisV2 resolve
netTools.ipToolsAPI.whoisV2.runAsync("net-tools.xyz").then(data => {
    console.log(data)
}).catch(error => {
    console.log(error)
})