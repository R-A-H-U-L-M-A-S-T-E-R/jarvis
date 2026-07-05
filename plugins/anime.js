/*------------------------------------------------------------------------------------------------------------------------------------------------------


Copyright (C) 2023 Loki - Xer.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Jarvis - Loki-Xer 


------------------------------------------------------------------------------------------------------------------------------------------------------*/


const { System, isPrivate } = require("../lib/");
const { getJson } = require('./client/');
    
System({
    pattern: "waifu",
    fromMe: isPrivate,
    desc: "Send a waifu image",
    type: "anime"
}, async (message) => {
    let response = await getJson(api + "random/pics?query=waifu");
    if (!response.status || !response.result?.url) return await message.send("_*Failed to fetch image*_");

    await message.send(
        response.result.url,
        {
            caption: "*Here is your waifu*",
            quoted: message.data
        },
        "image"
    );
});

System({
    pattern: "neko",
    fromMe: isPrivate,
    desc: "Send a neko image",
    type: "anime"
}, async (message) => {
    let response = await getJson(api + "random/pics?query=neko");
    if (!response.status || !response.result?.url) return await message.send("_*Failed to fetch image*_");

    await message.send(
        response.result.url,
        {
            caption: "*Here is your neko*",
            quoted: message.data
        },
        "image"
    );
});