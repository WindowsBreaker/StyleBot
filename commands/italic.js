const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("italic")
    .setDescription("add Italic to your text")
    .addStringOption(option =>
      option
        .setName('text')
	.setDescription('The text that will be Italic')
	.setRequired(true)),
  async execute(interaction) {
    const string = interaction.options.getString('text');
    interaction.reply({content: `*${string}*`})
  }
}
