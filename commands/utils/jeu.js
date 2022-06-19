const { MessageEmbed, Message } = require('discord.js');

module.exports = {
    name: 'jeu',
    category: 'utils',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: false,
    usage: 'poll [question]',
    examples: ['poll', 'poll Quelle heure est-il?'],
    description: 'Poster un sondage jeu!',
    async run(client, message, args) {
      const embed = new MessageEmbed()
        .setTitle('Sondage jeu')
        .setColor('#00a3b5')
        .setDescription(`🏎️ - Mario Kart\n🥊 - Smash\n🎨 - Splatoon 2\n🌍 - GeoGuessr\n🎙️ - Live Discussion`)
        .setTimestamp()
        .setFooter({ text: `Nouveau sondage généré par ${message.author.tag}!` });

      const poll = await message.reply({ embeds: [embed] });
      poll.react('🏎️')
      poll.react('🥊')
      poll.react('🎨')
      poll.react('🌍')
      poll.react('🎙️');
    },
     async runInteraction(client, interaction)  {
      
      const embed = new MessageEmbed()
        .setTitle('Sondage jeu')
        .setColor('#00a3b5')
        .setDescription(`🏎️ - Mario Kart\n🥊 - Smash\n🎨 - Splatoon 2\n🌍 - GeoGuessr\n🎙️ - Live Discussion`)
        .setTimestamp()
        .setFooter({ text: `Nouveau sondage généré par ${interaction.user.tag}!` });

      const poll = await interaction.reply({ embeds: [embed], fetchReply: true});
      poll.react('🏎️')
      poll.react('🥊')
      poll.react('🎨')
      poll.react('🌍')
      poll.react('🎙️')
    
    }
  };