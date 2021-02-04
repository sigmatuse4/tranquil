require('dotenv').config();
const Client = require('../structures/Client');
const client = new Client({
    clientOptions: {
        shardCount: 2,
        disableMentions: 'everyone'
    },
    token: process.env.TOKEN
});

client.on('ready', () => console.log(`${client.user.tag} is now online!`));
client.on('message', async (message) => {
    if (message.author.bot && !message.guild.available) return undefined;

    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
});

client.login(client.config.token);