const { MessageEmbed, Message } = require('discord.js');

module.exports = {
    name: 'jeu',
    category: 'utils',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: false,
    usage: 'poll [question]',
    examples: ['jeu'],
    description: 'Poster un sondage jeu!',
    options: [
      {
        name: "mk",
        description: "Sélectionner 🏎️ - Mario Kart",
        type: "STRING",
        required: false,
      },
      {
        name: "smash",
        description: "Sélectionner 🥊 - Smash",
        type: "STRING",
        required: false,
      },
      {
        name: "sp2",
        description: "Sélectionner 🎨 - Splatoon 2",
        type: "STRING",
        required: false,
      },
      {
        name: "geoguessr",
        description: "Sélectionner 🌍 - GeoGuessr",
        type: "STRING",
        required: false,
      },
      {
        name: "discussion",
        description: "Sélectionner 🎙️ - Live Discussion",
        type: "USER",
        required: false,
      }
    ],
     async runInteraction(client, interaction)  {
      
      const mk = jeu.react('🏎️')
      const smash = jeu.react('🥊')
      const sp2 = jeu.react('🎨')
      const geoguessr = jeu.react('🌍')
      const discussion = jeu.react('🎙️')
      
      const embed = new MessageEmbed()
        .setTitle('Sondage jeu')
        .setColor('#f7d1b8')
        .setDescription(`🏎️ - Mario Kart\n🥊 - Smash\n🎨 - Splatoon 2\n🌍 - GeoGuessr\n🎙️ - Live Discussion`)
        .setTimestamp()
        .setFooter({ text: `Nouveau sondage généré par ${interaction.user.tag}!` });

      const jeu = await interaction.reply({ embeds: [embed], fetchReply: true});
      jeu.react('🏎️')
      jeu.react('🥊')
      jeu.react('🎨')
      jeu.react('🌍')
      jeu.react('🎙️')
    
    }
  };