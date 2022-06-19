const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

const buttons = new MessageActionRow()
    .addComponents(
        new MessageButton()
            .setCustomId('accept-button')
            .setLabel('Accepter')
            .setStyle('SUCCESS'),
            
        new MessageButton()
            .setCustomId('decline-button')
            .setLabel('Refuser')
            .setStyle('DANGER'),
    )

const welcomeEmbed = new MessageEmbed()
    .setTitle('Charte du serveur')
    .setDescription('Règles ...')
    .setFooter({ text: 'Bienvenue sur le serveur' })
    .setTimestamp()

module.exports = {
  name: 'welcome',
  category: 'utils',
  permissions: ['KICK_MEMBERS'],
  ownerOnly: false,
  usage: 'welcome',
  examples: ['welcome'],
  description: "La commande welcome permet d'envoyer l'embed des règles",
  async run(client, message, args) {
    await message.channel.send({ embeds: [welcomeEmbed], components: [buttons] });
  },
  async runInteraction(client, interaction) {
    await interaction.reply({ embeds: [welcomeEmbed], components: [buttons] });
  },
};
