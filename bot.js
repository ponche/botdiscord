const config = require('./config.json');
const GameBoyard = require('./codeBoyard.js');
const listCode = require('./listCode.json');
const { CommandoClient } = require('discord.js-commando'); 
const path = require('path'); 
const { Message } = require('discord.js');

const game = new GameBoyard(listCode);

const client = new CommandoClient({
    commandPrefix: config.prefix, 
    owner: '334683726854488064'
});

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['admin', 'command for the admin'], 
        ['animator', 'command for the animators'],
    ])
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'commands'));

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}! (${client.user.id})`);
    client.user.setActivity('plusieurs avec les tigres');
    client.game = game; 
});

client.on('message', message => {

    // on vérifie si on est dans le bon salon 
    if ( message.channel.id == game.getChannelListen()){
        // on est dans le bon salon 
        
        // on vérifie si c'est pas un message du bot 
        if (!message.author.bot){
            //ce n'est pas un message du bot on peut continuer

            // on vérifie le mot code 
            if (game.checkCode(message.content)){
                // bon mot code trouver WINNER
                message.channel.send('Bravo, vous avez trouver le bon mot code');
            }
            else {
                // mauvais mot code LOSSER
                message.channel.send('Perdu')
            }
        }
      
    }
    
})

client.on('error', console.error);

client.login(config.token);




    