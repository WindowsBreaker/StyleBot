const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("code")
    .setDescription("create your own code block")
    .addStringOption(option =>
      option
        .setName('text')
	.setDescription('text into the code block')
	.setRequired(true))
    .addStringOption(option =>
      option
        .setName('language')
	.setDescription('the language of the text')
	.setRequired(false)),
  async execute(interaction) {
    const string = interaction.options.getString('text');
    const lang = interaction.options.getString('language');
    interaction.reply({content: `\`\`\`${lang}\n${string}\n\`\`\``})
  }
}
