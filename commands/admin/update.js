const { Guild } = require('../../models/index');

module.exports = {
    name: 'update',
    category: 'admin',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: true,
    usage: 'update',
    examples: ['update'],
    description: 'Mettre à jour les nouvelles données',
    async run(client, message, args) {
      await  Guild.updateMany({}, { "$set": { "testChannel": "987509460052344842" }, upsert: true });
      message.reply('Nouvelles données ajoutées!');
    },
    async runInteraction(client, interaction) {
      await  Guild.updateMany({}, { "$set": { "testChannel": "987509460052344842" }, upsert: true });
      interaction.reply('Nouvelles données ajoutées!');
    }
  };