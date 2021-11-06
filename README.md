# Bot CodeBoyard

ce bot tire aléatoirement un mot code dans un list. 
il écoupte un salon si le mot est bon, il félicite, sinon, il dit : Perdu 

## Installation

### prérequis 

- [Node.js](Nodejs.org/)

### procédure installation 

1. crée un fichier config.json à la racine du dossier et inclure ce code : 

```json
{
    "token": "Your TOKEN",
    "prefix": "£"
}
```
remplacer la chaine "Your TOKEN" par votre **token** de votre bot
(éventuellemnt, vous pouvez changer le préfix)

2. taper la commande `npm install` afin d'installer les dépendances
3. lancer Node sur le fichier _bot.js_ (ex : `node bot.js` pour la version la plus simple)

quand le bot est en ligne, vous pouvez taper la commande sur discord pour modifié le salon d'écoute du bot. 



