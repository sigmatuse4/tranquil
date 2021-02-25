require('dotenv').config();
const Client = require('../structures/Client');
const client = new Client({
    clientOptions: {
        shardCount: 2,
        disableMentions: 'everyone'
    },
    token: process.env.TOKEN,
    prefix: 't+'
});

client.on('ready', () => {
    console.log(`${client.user.tag} is now online!`);
    client.user.setActivity(`${client.guilds.cache.size} server(s)`, { type: 'WATCHING' })
        .catch(console.error);
});
client.on('message', async (message) => {
    if (message.author.bot && !message.guild.available) return undefined;

    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
});

client.login(client.config.token);