const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription ('Pong!'),
  async execute(interaction) {
    await interaction.reply({embeds: [
      new MessageEmbed()
        .setTitle(`<:styleSuccess:920305910335823882> ${interaction.client.ws.ping}ms`)
        .setColor("#3da777")
      ],
    });
  },
};
