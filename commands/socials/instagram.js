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
      .setImage('https://cdn.discordapp.com/attachments/988066098865926215/988143344892907600/Capture_decran_2022-06-19_200548.png')

      const embed2 = new MessageEmbed()
      .setTitle('📷¹ : @totorock1 (Clique ici)')
      .setURL('https://instagram.com/totorock1')
      .setImage(client.user.displayAvatarURL())
      .setTimestamp()

      const instagram = await message.reply({ embeds: [embed1, embed2] });
    },
     async runInteraction(client, interaction)  {
        const embed1 = new MessageEmbed()
        .setTitle('📷¹ : @totorock1 (Clique ici)')
        .setURL('https://instagram.com/totorock1')
        .setImage(client.user.displayAvatarURL())
  
        const embed2 = new MessageEmbed()
        .setTitle('📷² : @totorockphotos (Clique ici)')
        .setURL('https://instagram.com/totorockphotos')
        .setImage(client.user.displayAvatarURL())
        .setTimestamp()

      const instagram = await interaction.reply({ embeds: [embed1, embed2], fetchReply: true});
    
    }
  };