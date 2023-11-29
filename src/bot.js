const { Client, Events, GatewayIntentBits } = require('discord.js')
const config = require('../config.json');

let intents = [];
for(let x in GatewayIntentBits) {
  if(isNaN(x)) {
    intents.push(GatewayIntentBits[x]);
  }
}

const client = new Client({ intents: intents });

client.once(Events.ClientReady, (c) => {
  client.guilds.cache.each((guild) => {
    guild.members.cache.each((member) => {
      console.log(member.user.username + (member.user.discriminator == '0'?'':'#' + member.user.discriminator));
    });
  });
});

client.login(config.token);
