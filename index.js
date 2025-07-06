// Hi Skidders!
// Welcome to Editable RPC!!!
// Written with ðŸ§  by GhoSty | Publiced By Tejvz
// Feel free to edit this RPC! But Give Credits
const Discord = require('discord.js-selfbot-v13');
const fs = require('fs');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});
// Editable RPC concept by GhoSty || Brutality
const keepAlive = require('./server.js');
keepAlive();
// Editable RPC concept by GhoSty || Brutality
let r;
let startTimestamp = Date.now();
let buttonName = 'Github ⛦';
let buttonUrl = 'https://github.com/tejvz';
let rpcURL = 'https://dsc.gg/tejvz';
let rpcType = 'PLAYING'; // COMPETING, WATCHING, PLAYING, STREAMING
let rpcName = 'Tejv ⛦';
let rpcDetails = 'dsc.gg/tejvz';
let assetsSmallText = 'on Top!';
let assetsLargeText = 'dsc.gg/tejvz';
let assetsLargeImage = 'https://cdn.discordapp.com/attachments/1211178935405248513/1390681078985134172/standard.gif?ex=686b1e6e&is=6869ccee&hm=61aaf88d0afa0dbcb886c2ced262f0802f9a28674819dc15989f377dc87699a7&';
let assetsSmallImage = 'https://cdn.discordapp.com/attachments/1211178935405248513/1390656444126462073/bl-cp.gif?ex=686b077d&is=6869b5fd&hm=833c477f69d8bf9e9a53ff1bd7732563d8c164ec8ddb0d90bf051221df75000e&';
// Editable RPC concept by GhoSty || Brutality
client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);
  // Editable RPC concept by GhoSty || Brutality
  const timestamps = fs.readFileSync('tejvz.txt', 'utf8').split('\n');
  const randomTimestamp = timestamps[Math.floor(Math.random() * timestamps.length)];
  const [hours, minutes, seconds] = randomTimestamp.split(':');
  startTimestamp = Date.now() - (hours * 3600000 + minutes * 60000 + seconds * 1000);
  // Editable RPC concept by GhoSty || Brutality
  updateRichPresence();
  // Editable RPC concept by GhoSty || Brutality
  client.user.setPresence({ status: "dnd" });
});
// Editable RPC concept by GhoSty || Brutality
client.on('message', message => {
  if (message.author.id === client.user.id) {
    const args = message.content.split(' ');
    const command = args[0];
    // Editable RPC concept by GhoSty || Brutality
    if (command === '>simg' && args.length === 2) {
      const imgUrl = args[1];
      r.setAssetsSmallImage(imgUrl);
      client.user.setActivity(r);
      message.delete();
    } else if (command === '>time' && args.length === 2) {
      const newTime = args[1];
      // Editable RPC concept by GhoSty || Brutality
      if (isValidTimestamp(newTime)) {
        const [hours, minutes, seconds] = newTime.split(':');
        startTimestamp = Date.now() - (hours * 3600000 + minutes * 60000 + seconds * 1000);
        // Editable RPC concept by GhoSty || Brutality
        updateRichPresence();
        message.delete();
      } else {
        message.edit('Invalid timestamp format. Use HH:MM:SS.');
      }// Editable RPC concept by GhoSty || Brutality
    } else if (command === '>bname' && args.length === 2) {
      buttonName = args[1];
      updateRichPresence();
      message.delete();
    } else if (command === '>burl' && args.length === 2) {
      buttonUrl = args[1];
      updateRichPresence();
      message.delete();
    } else if (command === '>rpcurl' && args.length === 2) {
      rpcURL = args[1];
      updateRichPresence();
      message.delete();
    } else if (command === '>rpctype' && args.length === 2) {
      rpcType = args[1];
      updateRichPresence();
      message.delete();
    } else if (command === '>rpcname' && args.length === 2) {
      rpcName = args[1];
      updateRichPresence();
      message.delete();
    } else if (command === '>rpcd' && args.length === 2) {
      rpcDetails = args.slice(1).join(' ');
      updateRichPresence();
      message.delete();
    } else if (command === '>stext' && args.length === 2) {
      assetsSmallText = args[1];
      updateRichPresence();
      message.delete();
    } else if (command === '>ltext' && args.length === 2) {
      assetsLargeText = args[1];
      updateRichPresence();
      message.delete();
    } else if (command === '>limg' && args.length === 2) {
      assetsLargeImage = args[1];
      updateRichPresence();
      message.delete();
    }
    
    // Editable RPC concept by GhoSty || Brutality
  }
});
// Editable RPC concept by GhoSty || Brutality
function isValidTimestamp(timestamp) {
  const regex = /^\d{2}:\d{2}:\d{2}$/;
  return regex.test(timestamp);
}// Editable RPC concept by GhoSty || Brutality
// Editable RPC concept by GhoSty || Brutality
function updateRichPresence() {
  r = new Discord.RichPresence()
    .setApplicationId('1113183256343482519')
    .setType(rpcType)
    .setURL(rpcURL)
    .setName(rpcName)
    .setDetails(rpcDetails)
    .setStartTimestamp(startTimestamp)
    .setAssetsLargeImage(assetsLargeImage) 
    .setAssetsLargeText(assetsLargeText) 
    .setAssetsSmallImage(assetsSmallImage)
    .setAssetsSmallText(assetsSmallText)
    .setButtons([
      { name: buttonName, url: buttonUrl }
    ]);// Editable RPC concept by GhoSty || Brutality
  // Editable RPC concept by GhoSty || Brutality
  client.user.setActivity(r);
}

client.login(process.env.TOKEN);

// Editable RPC concept by GhoSty || Brutality
// Editable RPC concept by GhoSty || Brutality
// Editable RPC concept by GhoSty || Brutality
// Editable RPC concept by GhoSty || Brutality
// Editable RPC concept by GhoSty || Brutality
// Editable RPC concept by GhoSty || Brutality
// Editable RPC concept by GhoSty || Brutality
// Editable RPC concept by GhoSty || Brutality
// Editable RPC concept by GhoSty || Brutality
