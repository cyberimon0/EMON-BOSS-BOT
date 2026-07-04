const axios = require("axios");
const fs = require("fs-extra");
const request = require("request");

module.exports.config = {
 name: "girl pp",
 version: "1.0.2",
 hasPermssion: 0,
 credits: "Islamick Chat (Modified by Shahadat SAHU)",
 description: "Random Facebook Islamic Girl Profile Picture",
 commandCategory: "Random-IMG",
 usages: "girl pp",
 cooldowns: 2,
 dependencies: {
 "request": "",
 "fs-extra": "",
 "axios": ""
 }
};

module.exports.run = async ({ api, event }) => {
 const links = [
 "https://imgur.com/a/EAvZX5F",
 "",
 "",
 "",
 "",
 "",
 "",
 "",
 "",
 "",
 "",
 "",
 "",
 "",
 "",
 "",
 "",
 "",
 "",
 ""
 ];

 const imgURL = links[Math.floor(Math.random() * links.length)];
 const imgPath = __dirname + "/cache/girl_pp.jpg";

 const callback = () => {
 api.sendMessage({
 body: "🌸 𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆 𝙂𝙄𝙍𝙇'𝙎 𝙋𝙍𝙊𝙁𝙄𝙇𝙀 𝙋𝙄𝘾 🧕",
 attachment: fs.createReadStream(imgPath)
 }, event.threadID, () => fs.unlinkSync(imgPath));
 };

 request(encodeURI(imgURL)).pipe(fs.createWriteStream(imgPath)).on("close", callback);
};
