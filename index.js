//requirements for bot to funciton
const Discord = require("discord.js")
const client = new Discord.Client( { intents: 32767 });


client.on("ready", () =>{//just shows in console that bot is online and working
    console.log("Bot Is Online!");
})



client.on("messageCreate", (msg) => {
    //will show in console whenever message is read
    console.log("A message got sent")
    const prefix = "-"
    if(!msg.content.startsWith(prefix)){
      //skips all the if/else statements
    }
    else if(msg.content === `${prefix}wordle`){//-wordle sends link to wordle website
       msg.reply("https://www.nytimes.com/games/wordle")
    }
   else if(msg.content === `${prefix}thieves`){//-thieves sends link to 100T website
       msg.reply("https://100thieves.com")
    }
    else if(msg.content === `${prefix}heardle`){//-heardle sends link to heardle website
       msg.reply("https://www.heardle.app/")
    }
    else if(msg.content === "-_-"){//sends an personalized discord emote from the server
       msg.reply("<:bruh:957369205752217700>")
    }
    else if(msg.content === `${prefix}youtube`){//-youtube sends link to 100T youtube website
       msg.reply("https://www.youtube.com/channel/UCnrX2_FoKieobtw19PiphDw")
    }
    else if(msg.content === `${prefix}lcs`){//-lcs sends link to LCS website
       msg.reply("https://www.twitch.tv/lcs")
    }
    else if(msg.content === `${prefix}help`){//-help sends a mesage of the commands it can be used
       msg.reply("``` Directory:\n -wordle: this command will make bot send link to the wordle website\n\n -thieves: this command will make bot send link 100T\n\n -youtube: this command will make bot send link 100T Main Youtube Channel\n\n -lcs: this command will make bot send link to the LCS stream; where you can see 100T lose!!\n\n -heardle: this command will make bot send link to the heardle website(song version of wordle)\n\n pong: if you feel bored and want to play with yourself```")
    }
  else if(msg.content === "-test"){//sends a message to an specific channel if -test is sent in the server
  const channel101 = client.channels.cache.find(channel => channel.id === "930684235935776819");
  channel101.send("Its works");
  }
    
    
   if(msg.content === "ping"){//will send a reply message if user types in ping in the server
      msg.reply("pong!")
    }
   




//next project: 1.make bot send message photos 2.make bot send a daily message

//2.Still not wokring but can send mesage every 2 hours
//function messageChannel(){
  // const channel101 = client.channels.cache.find(channel => channel.id === "930684235935776819");
  //channel101.send("https://www.nytimes.com/games/wordle");
  
//}
//setInterval(messageChannel,86400000);


//special token for the bot to be active
const token = process.env['token']
//console.log(token)
client.login(token);