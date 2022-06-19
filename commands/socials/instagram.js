const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "instagram",
  category: 'socials',
  permissions: ['SEND_MESSAGES'],
  ownerOnly: false,
  usage: 'instagram',
  examples: ['instagram'],
  description: "Renvoie les liens des comptes Instagram de Totorock!",
  async run(client, message, args) {  
    await message.reply('📷¹ : https://www.instagram.com/totorock1/\n📷² : https://www.instagram.com/totorockphotos/')
  },
  async runInteraction(client, interaction) {
    await interaction.reply('📷¹ : https://www.instagram.com/totorock1/\n📷² : https://www.instagram.com/totorockphotos/')
  }
};
