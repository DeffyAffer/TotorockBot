const { MessageEmbed, Message } = require('discord.js');

module.exports = {
    name: 'instagram',
    category: 'socials',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    usage: 'instagram',
    examples: ['instagram'],
    description: 'Renvoie les liens vers les comptes Instagram de Totorock',
    async run(client, message, args) {

      const embed1 = new MessageEmbed()
      .setTitle('📷¹ : @totorock1 (Clique ici)')
      .setURL('https://instagram.com/totorock1')
      .setImage(client.user.displayAvatarURL())
      .setColor('#f7d1b8')

      const embed2 = new MessageEmbed()
      .setTitle('📷¹ : @totorock1 (Clique ici)')
      .setURL('https://instagram.com/totorock1')
      .setImage(client.user.displayAvatarURL())
      .setTimestamp()
      .setColor('#f7d1b8')

      const instagram = await message.reply({ embeds: [embed1, embed2] });
    },
     async runInteraction(client, interaction)  {
        const embed1 = new MessageEmbed()
        .setTitle('📷¹ : @totorock1 (Clique ici)')
        .setURL('https://instagram.com/totorock1')
        .setImage(client.user.displayAvatarURL())
        .setColor('#f7d1b8')
  
        const embed2 = new MessageEmbed()
        .setTitle('📷² : @totorockphotos (Clique ici)')
        .setURL('https://instagram.com/totorockphotos')
        .setImage(client.user.displayAvatarURL())
        .setTimestamp()
        .setColor('#f7d1b8')

      const instagram = await interaction.reply({ embeds: [embed1, embed2], fetchReply: true});
    
    }
  };