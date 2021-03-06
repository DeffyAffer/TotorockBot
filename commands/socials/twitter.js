const { MessageEmbed, Message } = require('discord.js');

module.exports = {
    name: 'twitter',
    category: 'socials',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    usage: 'twitter',
    examples: ['twitter'],
    description: 'Renvoie le lien du compte Twitter de Totorock',
    async run(client, message, args) {
        const embed = new MessageEmbed()
      .setTitle('🐤¹ : @Totorock131 (Clique ici)')
      .setURL('https://twitter.com/Totorock131')
      .setImage(client.user.displayAvatarURL())
      .setTimestamp()
      .setColor('#f7d1b8')

      const twitter = await message.reply({ embeds: [embed], ephemeral: true });
    },
     async runInteraction(client, interaction) {
        const embed = new MessageEmbed()
      .setTitle('🐤¹ : @Totorock131 (Clique ici)')
      .setURL('https://twitter.com/Totorock131')
      .setImage(client.user.displayAvatarURL())
      .setTimestamp()
      .setColor('#f7d1b8')

      const twitter = await interaction.reply({ embeds: [embed], fetchReply: true, ephemeral: true });
    
    }
  };