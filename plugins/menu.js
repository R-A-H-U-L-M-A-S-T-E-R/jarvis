/*------------------------------------------------------------------------------------------------------------------------------------------------------


Copyright (C) 2023 Loki - Xer.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Jarvis - Loki-Xer 


------------------------------------------------------------------------------------------------------------------------------------------------------*/

const plugins = require("../lib/system");
const { System, isPrivate } = require("../lib");
const { MEDIA_DATA } = require("../config");

System({
    pattern: "menu",
    fromMe: isPrivate,
    dontAddCommandList: true
}, async (message, match) => {
    if (match === "cmd") return;
    let menu = "\nمصنوع من🤍\n\n";
    let cmnd = plugins.commands.filter(command => !command.dontAddCommandList && command.pattern);
    cmnd = cmnd.map(command => ({
        cmd: command.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2],
        desc: command.desc || false
    }));
    cmnd.sort((a, b) => a.cmd.localeCompare(b.cmd));
    cmnd.forEach(({ cmd, desc }, num) => {
        menu += `*${(num + 1)}. ${cmd.trim()}*\n${desc ? `*use: ${desc}*\n\n\n` : '\n\n'}`;
    });
    if (MEDIA_DATA) {
        const [title, body, thumbnail] = MEDIA_DATA.split(";");
        await message.send(menu, { contextInfo: { externalAdReply: { title, body, thumbnailUrl: thumbnail, renderLargerThumbnail: true, mediaType: 1, mediaUrl: '', sourceUrl: "https://github.com/Loki-Xer/Jarvis-md", showAdAttribution: true } } });
    } else {
        await message.send(menu);
    }
});
