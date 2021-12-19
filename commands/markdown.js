const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("markdown")
    .setDescription("use MarkDown on your text")
    .addStringOption(option =>
      option
        .setName('text')
        .setDescription('The text that will be MarkDown')
	.setRequired(true)),
  async execute(interaction) {
    const string = interaction.options.getString('text');
  interaction.reply({content: `\`${string.replace("`", "")}\``})
  }
}
