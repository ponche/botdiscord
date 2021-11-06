const { Command } = require ('discord.js-commando');


module.exports = class InitCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'init', 
            aliases: ['reset'],
            group: 'animator', 
            memberName: 'init',
            description: 'init a new code',
            ownerOnly: true,
            
        });
    }

    run(message){
        this.client.game.init();
        return message.reply(`INIT`);
    }
}