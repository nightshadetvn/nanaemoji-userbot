require('dotenv').config();
const Discord = require("discord-user-bots");
const client = new Discord.Client(process.env.TOKEN);

client.on.ready = function () {
    console.log("Client online!");
};


client.on.message_create = function (message) {
       const guild = client.info.guilds.filter((guild) => guild.id == message.guild_id)[0];
      

       if (message.guild_id == process.env.GULID_ID)
        if(message.channel_id == process.env.CHANNEL_READ_ID)
            console.log(`[${guild.name}] [#${message.channel_id}] ${message.author.username}: ${message.content}`);
            
            
       if (message.guild_id == process.env.GULID_ID)
        if(message.channel_id == process.env.CHANNEL_READ_ID) 
         if(message.author.id !== process.env.BOT_ID) {
            const decodedContent = message.content 
            .replace(/<:NanaAdmire:589062916272029696>/g, 'A')
            .replace(/<:NanaBlush:1070562322352971826>/g, 'B')
            .replace(/<:NanaCry:588367439964930069>/g, 'C')
            .replace(/<:NanaDabbing:605850124912033805>/g, 'D')
            .replace(/<:NanaEgao:599526725981962240>/g, 'E')
            .replace(/<:nanaFire:1036508385534812231>/g, 'F')
            .replace(/<:NanaGrrrr:688462263577083956>/g, 'G')
            .replace(/<:NanaHug:688462310116950054>/g, 'H')
            .replace(/<:Nana4:736429838423949402>/g, 'I')
            .replace(/<:NanaJudge:840111833411354625>/g, 'J')
            .replace(/<:NanaKiss:590806160421027840>/g, 'K')
            .replace(/<:NanaFleeL:589402216503443466>/g, 'L')
            .replace(/<:NanaBTC:812768383954976768>/g, 'M')
            .replace(/<:NAAAAAAAAAAAAA:646343437473546270>/g, 'N')
            .replace(/<:NanaOK:588360989053943818>/g, 'O')
            .replace(/<:NanaPout:589065230785445891>/g, 'P')
            .replace(/<:NanaQuarantinedR:687909731670556682>/g, 'Q')
            .replace(/<:nanaRamen:1036508388777021440>/g, 'R')
            .replace(/<:NanaSmirk:688462443542085678>/g, 'S')
            .replace(/<:NanaThink:589398206610276354>/g, 'T')
            .replace(/<:NanaUoh:885944968315801611>/g, 'U')
            .replace(/<:NanaWahaha:598225127947370538>/g, 'V')
            .replace(/<:NanaWave:692832409162350692>/g, 'W')
            .replace(/<:NanaXD:589412479788908544>/g, 'X')
            .replace(/<:NanaYum:589328461320159242>/g, 'Y')
            .replace(/<:NanaTired:589063081372549120>/g, 'Z');
            const tosend = `${message.author.username} said  ${decodedContent}`
            client.send(process.env.CHANNEL_SEND_ID, { content: tosend});        
        }
        };




