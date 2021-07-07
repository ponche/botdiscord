const { Command } = require ('discord.js-commando');


module.exports = class IndiceCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'indice', 
            aliases: [],
            group: 'animator', 
            memberName: 'indice',
            description: 'Donne un indice pour la salle au trésor',
            ownerOnly: true,
           
        });
    }

    run(message){
        let indice = this.client.game.getIndice(); 
        let numeroIndice = this.client.game.indexIndice
        return message.say(`L'indice numéro ${numeroIndice} est : ${indice}`);
    }
}