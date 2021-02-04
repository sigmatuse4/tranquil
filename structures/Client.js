// referenced from https://github.com/iCrawl/discord-music-bot/
// referenced from MenuDocs

const { Client, Collection } = require('discord.js');
const Music = require('./Music');

module.exports = class extends Client {
    constructor(config) {

        const clientOptions = 
            typeof config.clientOptions === 'object' ? config.clientOptions : {
                disableMentions: 'everyone'
            };
        super(clientOptions);

        this.commands = new Collection();
        this.aliases = new Collection();
        this.music = new Music(this);
        this.config = config;

    }
}