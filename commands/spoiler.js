const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("spoiler")
    .setDescription("make your text a spoiler")
    .addStringOption(option =>
      option
        .setName('text')
	.setDescription('The text that will be a Spoiler')
	.setRequired(true)),
  async execute(interaction) {
    const string = interaction.options.getString('text');
    interaction.reply({content: `||${string}||`})
  }
}
