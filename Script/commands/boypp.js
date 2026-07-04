const fs = require("fs-extra");
const request = require("request");

module.exports.config = {
 name: "boy pp",
 version: "1.0.1",
 hasPermssion: 0,
 credits: "𝗘𝗠𝗢𝗡 𝗕𝗢𝗦𝗦",
 description: "Send a random Facebook boy profile picture",
 commandCategory: "Random-IMG",
 usages: "boy pp",
 cooldowns: 2,
 dependencies: {
 "request": "",
 "fs-extra": ""
 }
};

module.exports.run = async ({ api, event }) => {
 const imgLinks = [
 "https://imgur.com/a/EAvZX5F",
 "https://imgur.com/a/EAvZX5F",
 "https://imgur.com/a/EAvZX5F",
 "https://imgur.com/a/EAvZX5F",
 "https://imgur.com/a/EAvZX5F",
 "https://imgur.com/a/EAvZX5F",
 "https://imgur.com/a/EAvZX5F",
 "https://imgur.com/a/EAvZX5F",
 "https://imgur.com/a/EAvZX5F",
 "https://imgur.com/a/EAvZX5F",
 "https://imgur.com/a/EAvZX5F",
 "https://imgur.com/a/EAvZX5F",
 "https://imgur.com/a/EAvZX5F",
 "https://imgur.com/a/EAvZX5F",
 "https://imgur.com/a/EAvZX5F",
 "https://imgur.com/a/EAvZX5F",
 "https://imgur.com/a/EAvZX5F",
 "https://imgur.com/a/EAvZX5F",
 "https://imgur.com/a/EAvZX5F",
 "https://imgur.com/a/EAvZX5F",
 "https://imgur.com/a/EAvZX5F",
 "https://imgur.com/a/EAvZX5F",
 "https://imgur.com/a/EAvZX5F",
 "https://imgur.com/a/EAvZX5F",
 "https://imgur.com/a/EAvZX5F",
 "https://imgur.com/a/EAvZX5F",
 "https://imgur.com/a/EAvZX5F",
 "https://imgur.com/a/EAvZX5F"
 ];

 const selectedImage = imgLinks[Math.floor(Math.random() * imgLinks.length)];
 const filePath = `${__dirname}/cache/fb_boy.jpg`;

 const callback = () => {
 api.sendMessage({
 body: " Facebook Boy Profile 🤌",
 attachment: fs.createReadStream(filePath)
 }, event.threadID, () => fs.unlinkSync(filePath));
 };

 request(encodeURI(selectedImage)).pipe(fs.createWriteStream(filePath)).on("close", callback);
};
