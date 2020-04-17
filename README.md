## NET-TOOLS.XYZ API Wrapper

### `npm install --save net-tools-node`

For further informations visit our [API Docs](https://apidocs.net-tools.xyz) ( UNDER DEVELOPMENT )

Some USAGE examples will be found later in the package folder.

More tools will be added when theyre implemented in out API.

---

### Available Tools:
___

- Minecraft API Tools 
  - read serverQuery
  - ping server
  - get the servers favicon as imageURL (base64 encoded)

- IP Information gathering tools
  - MyIP Information
  - IP GeoLocation
  - Whois Lookup
  - WhoisV2 Lookup (get a better version of JSON data)

- Crypto Tools
  - Password Generator API

---


### Small Disclaimer
```
The provided Tools are just for the private USAGE. The Developers of net-tools.xyz do NOT assume any responsibility for improper handling of the tools.
```

#### LINKS:
- [API-Docs](https://apidocs.net-tools.xyz)
- [Website](https://net-tools.xyz)
- [DiscordBot](https://net-tools.xyz/discordbot)
- [DiscordServer](https://net-tools.xyz/discord)

---

## Some Examples

```js
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
```