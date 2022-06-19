const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "instagram",
  category: 'socials',
  permissions: ['SEND_MESSAGES'], // ²
  ownerOnly: false,
  usage: 'instagram',
  examples: ['instagram'],
  description: "Renvoie les liens des comptes Instagram de Totorock!",
  async run(client, message, args) {  
    const embed1 = new MessageEmbed()
      .setTitle('📷¹')
      .setURL('https://www.instagram.com/totorock1/')
      .setTimestamp()
      .setFooter({ text: message.author.username, iconURL: message.author.displayAvatarURL() });

      const embed2 = new MessageEmbed()
      .setTitle('📷²')
      .setURL('https://www.instagram.com/totorockphotos/')
      .setTimestamp()
      .setFooter({ text: message.author.username, iconURL: message.author.displayAvatarURL() });
    
    message.edit({ content: ' ',embeds: [embed1, embed2] });
  },
  async runInteraction(client, interaction) {
    const embed1 = new MessageEmbed()
      .setTitle('📷¹')
      .setURL('https://www.instagram.com/totorock1/')
      .setTimestamp()
      .setFooter({ text: message.author.username, iconURL: message.author.displayAvatarURL() });

      const embed2 = new MessageEmbed()
      .setTitle('📷²')
      .setURL('https://www.instagram.com/totorockphotos/')
      .setTimestamp()
      .setFooter({ text: message.author.username, iconURL: message.author.displayAvatarURL() });
    
      interaction.editReply({ content: ' ', embeds: [embed1, embed2] })
  }
};
