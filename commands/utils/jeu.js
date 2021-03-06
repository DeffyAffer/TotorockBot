const { MessageEmbed, Message } = require('discord.js');

module.exports = {
    name: 'jeu',
    category: 'utils',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: false,
    usage: 'poll [question]',
    examples: ['jeu'],
    description: 'Poster un sondage jeu!',

    async run(client, message, args) {
      const embed = new MessageEmbed()
        .setTitle('Sondage jeu')
        .setColor('#f7d1b8')
        .setDescription(`ðï¸ - Mario Kart\nð¥ - Smash\nð¨ - Splatoon 2\nð - GeoGuessr\nðï¸ - Live Discussion`)
        .setTimestamp()
        .setFooter({ text: `Nouveau sondage gÃ©nÃ©rÃ© par ${message.author.tag}` });

      const poll = await message.reply({ embeds: [embed] });
      poll.react('ðï¸')
      poll.react('ð¥')
      poll.react('ð¨')
      poll.react('ð')
      poll.react('ðï¸');
    },
     async runInteraction(client, interaction)  {
      
      const embed = new MessageEmbed()
        .setTitle('Sondage jeu du dimanche')
        .setColor('#f7d1b8')
        .setDescription(`â½ - Mario Strikers : Battle League\nð¥ - Super Smash Bros Ultimate\nð - GeoGuessr\nð¤¸ - Fall Guys`)
        .setTimestamp()
        .setFooter({ text: `Nouveau sondage gÃ©nÃ©rÃ© par ${interaction.user.tag}!` });

      const poll = await interaction.reply({ embeds: [embed], fetchReply: true});
      poll.react('â½')
      poll.react('ð¥')
      poll.react('ð')
      poll.react('ð¤¸')
    
    }
  };