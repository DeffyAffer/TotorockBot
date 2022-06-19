const { MessageEmbed, Message } = require('discord.js');

module.exports = {
    name: 'twitch',
    category: 'socials',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    usage: 'twitch',
    examples: ['twitch'],
    description: 'Renvoie le lien vers la chaîne Twitch de Totorock',
    async run(client, message, args) {
      const embed = new MessageEmbed()
      .setTitle('🎥 : totorock1 (Clique ici)')
      .setURL('https://twitch.tv/totorock1')
      .setImage(client.user.displayAvatarURL())
      .setTimestamp()
      .setColor('#f7d1b8')

      const twitch = await message.reply({ embeds: [embed], ephemeral: true });
    },
     async runInteraction(client, interaction)  {
      const embed = new MessageEmbed()
      .setTitle('🎥 : totorock1 (Clique ici)')
      .setURL('https://twitch.tv/totorock1')
      .setImage(client.user.displayAvatarURL())
      .setTimestamp()
      .setColor('#f7d1b8')

      const twitch = await interaction.reply({ embeds: [embed], fetchReply: true, ephemeral: true });
    
    }
  };