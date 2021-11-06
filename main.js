'use strict';

const fs = require('fs');
const config = require('./config.json');
const { prefix } = require('./config.json');


let listCode = require('./listCode.json');
console.log(listCode);

const GameBoyard = require('./codeBoyard'); 
console.log(GameBoyard);
const game = new GameBoyard(listCode);
console.log(game);

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
    console.log('I am ready!');
    // création d'un channel

});

// Create an event listener for messages
client.on('message', message => {
    // If the message is "ping"


    // Les divers commande et action :

    // init le mot code 
    if (message.content === `${config.prefix}init`)
    {
        game.init();
        message.channel.send('Mot code initialisé'); 
    }
    else if (message.content === `${config.prefix}getIndice`)
    {
        message.channel.send(`L'indice numéro ${game.indexIndice} est  : ${game.getIndice()}`);
    }
    else
    {
        if (game.checkCode(message.content)){
            message.channel.send('Bravo, vous avez trouvez le mot code');
        }
        else
        {
            message.channel.send('Perdu');
        }
    }


}
);

// Log our bot in using the token from https://discord.com/developers/applications
client.login(config.token);