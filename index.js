const Discord = require('discord.js');
const bot = new Discord.Client();




bot.on('message', message => {
  if (message.content === 'lay') {
   // message.reply('pong');
    message.channel.sendMessage('I was born in the year of the sheep!');
  }
});

bot.on('message', message => {
  if (message.content === 'jks') {
   // message.reply('pong');
    message.channel.sendMessage('shimmy shimmy ko ko bop I like that....');
  }
});

bot.on('message', message => {
  if (message.content === 'bts or exo?') {
   // message.reply('pong');
    message.channel.sendMessage('I like sheep');
  }
});

bot.on("ready", () => {
  bot.user.setPresence({game: {name:"DRINKING WITH JACKSON BOT AND DONGHAE BOT"}})
  console.log('I have jackoo: {SERVERNAME}')
})

bot.on('ready', ()=>{
  console.log(`Logged in as ${bot.user.tag}!`);
  voiceChannel = bot.guilds.find('name', 'DREAMENERG3T1CER').channels.find('name', 'LAY');
  voiceChannel.join().then(()=>{
      console.log(`Connected to ${voiceChannel.name}!`);
  });
});

// Create an event listener for new guild members
bot.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('name', 'general');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
});



bot.login('NDA3NzgxNzk1NjAyNjI4NjE5.DVGf6Q.WkI-l4ZJ7ifiS10dpGeU2vZBuAE');
