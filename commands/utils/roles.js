const { MessageActionRow, MessageSelectMenu } = require('discord.js');

const selectMenu = new MessageActionRow()
    .addComponents(
        new MessageSelectMenu()
            .setCustomId('roles-menu')
            .setPlaceholder('Choisir un rôle dans la liste')
            .setMinValues(1)
            .setMaxValues(3)
            .addOptions([
                {
                    label: 'Vert',
                    description: 'Choisir la couleur verte',
                    value: '987519098210627595'
                },
                {
                    label: 'Rouge',
                    description: 'Choisir la couleur orange',
                    value: '987519125377122345'
                },
                {
                    label: 'Orange',
                    description: 'Choisir la couleur orange',
                    value: '987519201948356608'
                }
            ])
    )

module.exports = {
  name: "roles",
  category: 'utils',
  permissions: ['ADMINISTRATOR'],
  ownerOnly: false,
  usage: 'roles',
  examples: ['roles'],
  description: "roles",
  async run(client, message, args) {
    await message.channel.send({ content: 'Choisir un rôle', components: [selectMenu] });
  },
  async runInteraction(client, interaction) {
    await interaction.reply({ content: 'Choisir un rôle', components: [selectMenu] });
  },
};
