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
        .setDescription(`🏎️ - Mario Kart\n🥊 - Smash\n🎨 - Splatoon 2\n🌍 - GeoGuessr\n🎙️ - Live Discussion`)
        .setTimestamp()
        .setFooter({ text: `Nouveau sondage généré par ${message.author.tag}` });

      const poll = await message.reply({ embeds: [embed] });
      poll.react('🏎️')
      poll.react('🥊')
      poll.react('🎨')
      poll.react('🌍')
      poll.react('🎙️');
    },
     async runInteraction(client, interaction)  {
      
      const embed = new MessageEmbed()
        .setTitle('Sondage jeu du dimanche')
        .setColor('#f7d1b8')
        .setDescription(`⚽ - Mario Strikers : Battle League\n🥊 - Super Smash Bros Ultimate\n🌍 - GeoGuessr\n🤸 - Fall Guys`)
        .setTimestamp()
        .setFooter({ text: `Nouveau sondage généré par ${interaction.user.tag}!` });

      const poll = await interaction.reply({ content: '<&987853422499868693>', embeds: [embed], fetchReply: true});
      poll.react('⚽')
      poll.react('🥊')
      poll.react('🌍')
      poll.react('🤸')
    
    }
  };