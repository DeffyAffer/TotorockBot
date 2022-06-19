const { MessageEmbed, Message } = require('discord.js');

module.exports = {
    name: 'youtube',
    category: 'socials',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    usage: 'youtube',
    examples: ['youtube'],
    description: 'Renvoie les liens des chaînes YouTube de Totorock',
    async run(client, message, args) {

      const embed1 = new MessageEmbed()
      .setTitle('📹¹ : Totorock1 (Clique ici)')
      .setURL('https://www.youtube.com/channel/UCvS67IdVWMwjxTC2QEfMUsQ')
      .setImage(client.user.displayAvatarURL())

      const embed2 = new MessageEmbed()
      .setTitle('📹¹ : Totorock2 (Clique ici)')
      .setURL('https://www.youtube.com/channel/UC3hvQjwuXSSgnebAf3yrI-g')
      .setImage(client.user.displayAvatarURL())
      .setTimestamp()
      .setFooter({ text: message.author.username, iconURL: message.author.displayAvatarURL() });

      const youtube = await message.reply({ embeds: [embed1, embed2] });
    },
     async runInteraction(client, interaction)  {
        const embed1 = new MessageEmbed()
      .setTitle('📹¹ : Totorock1 (Clique ici)')
      .setURL('https://www.youtube.com/channel/UCvS67IdVWMwjxTC2QEfMUsQ')
      .setImage(client.user.displayAvatarURL())

        const embed2 = new MessageEmbed()
      .setTitle('📹¹ : Totorock2 (Clique ici)')
      .setURL('https://www.youtube.com/channel/UC3hvQjwuXSSgnebAf3yrI-g')
      .setImage(client.user.displayAvatarURL())
      .setTimestamp()
      .setFooter({ text: message.author.username, iconURL: message.author.displayAvatarURL() });

      const youtube = await interaction.reply({ embeds: [embed1, embed2], fetchReply: true});
    
    }
  };