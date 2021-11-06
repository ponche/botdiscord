const { Command } = require('discord.js-commando');

module.exports = class MeowCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'meow', 
            aliases: ['kitty-cat'], 
            group: 'animator', 
            memberName: 'meow', 
            description: 'Replies whit a meow, kitty cat.', 
            throttling: {
                usages: 2, 
                duration: 10,
            },
            guildOnly: true,
            ownerOnly: true,
        });
    }

    run(message) {
        return message.say('Meow!'); 
    }
};

