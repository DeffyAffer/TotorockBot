module.exports = {
  name: "accept-button",
  async runInteraction(client, interaction) {
    interaction.member.roles.add('987508074778595378');
    interaction.reply({ content: 'Vous avez accepté les règles! Vous pouvez maintenant accéder au serveur', ephemeral: true });
  },
};
