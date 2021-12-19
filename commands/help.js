const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription ("shows commands & major informations"),
  async execute(interaction) {
    await interaction.reply({embeds: [
      new MessageEmbed()
        .setTitle(`<:styleSuccess:920305910335823882> Help Panel - ${interaction.client.user.tag}`)
        .setDescription("all commands have their description, under `/` name.\n\n**Command List**\n`ping, embed, markdown, spoiler, italic, bold, code`\n**Infos**\n**Developer:** Lua.#2672\n**Add Me:** [click](https://discord.com/oauth2/authorize?client_id=882713749620932669&scope=applications.commands%20bot&permissions=2147552256)")
        .setImage("https://media.discordapp.net/attachments/895326911545372682/920715002057457744/standard.gif")
        .setColor("#3da777")
      ],
    });
  },
};
