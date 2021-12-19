const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("bold")
    .setDescription("add Bold to your text")
    .addStringOption(option =>
      option
        .setName('text')
	.setDescription('The text that will be Bold')
	.setRequired(true)),
  async execute(interaction) {
    const string = interaction.options.getString('text');
    interaction.reply({content: `**${string}**`})
  }
}
