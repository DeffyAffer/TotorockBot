const { Guild } = require("../../models/index");

module.exports = {
  name: "reload",
  category: "admin",
  permissions: ["ADMINISTRATOR"],
  ownerOnly: true,
  usage: "reload",
  examples: ["reload"],
  description: "Relancer le bot!",
  async run(client, message, args) {
    // const devGuild = await client.guilds.cache.get('901804598354907146');
    // devGuild.commands.set([]);
    await interaction.reply('Bot relancé!');
    return process.exit();
  },
  async runInteraction(client, interaction) {
    // const devGuild = await client.guilds.cache.get('901804598354907146');
    // devGuild.commands.set([]);
    await interaction.reply('Bot relancé!');
    return process.exit();
  },
};