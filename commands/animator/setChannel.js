const { Command } = require ('discord.js-commando');


module.exports = class SetChannelCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'channel', 
            aliases: ['room', 'salon'],
            group: 'animator', 
            memberName: 'channel',
            description: 'Set the listen channel for the bot',
            ownerOnly: true,
            args: [
                {
                    key: 'room', 
                    prompt: 'Entrer ID du salon de animation',
                    type: 'string',
                },
            ],
        });
    }

    run(message, { room }){
        console.log(this.client.game.setChannelListen(room))
        return message.reply(`Salon d'écoute modifié`);
    }
}