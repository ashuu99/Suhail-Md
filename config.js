const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_35_07_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA1NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDg3LFxuICAgICAgICAxMCxcbiAgICAgICAgMjE2LFxuICAgICAgICA4LFxuICAgICAgICA4MixcbiAgICAgICAgMjI3LFxuICAgICAgICAzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDU5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjM1LFxuICAgICAgICA0MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzLFxuICAgICAgICA4MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTIxLFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MSxcbiAgICAgICAgOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTksXG4gICAgICAgIDUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMixcbiAgICAgICAgNzEsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxLFxuICAgICAgICAzMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDExLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDQxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjExLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMixcbiAgICAgICAgNDgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDg0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMCxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOSxcbiAgICAgICAgODIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTg0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTY3LFxuICAgICAgICA0MSxcbiAgICAgICAgNixcbiAgICAgICAgOTQsXG4gICAgICAgIDksXG4gICAgICAgIDMyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDk5LFxuICAgICAgICA1MixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDYxLFxuICAgICAgICA4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgNTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTEyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTY4LFxuICAgICAgICA0NixcbiAgICAgICAgMTYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMixcbiAgICAgICAgMTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDMyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTEzLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODksXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQ1LFxuICAgICAgICA2NixcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDkzLFxuICAgICAgICA4NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDksXG4gICAgICAgIDEwLFxuICAgICAgICAyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjIyLFxuICAgICAgICA4MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDY5LFxuICAgICAgICAxNixcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDQ5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzksXG4gICAgICAgIDE4MixcbiAgICAgICAgMjUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDMxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDU2LFxuICAgICAgICA4NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDgzLFxuICAgICAgICA5OSxcbiAgICAgICAgOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDExMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDExLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTksXG4gICAgICAgIDg1LFxuICAgICAgICAyMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTUyLFxuICAgICAgICA4NixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDksXG4gICAgICAgIDI3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDYyLFxuICBcImFkdlNlY3JldEtleVwiOiBcInhVWTJudzRMMWRZK3JkYmdpZ09lbjczLzFqTkUzck80WU9hZWQxMkRVdFU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDgxNjYwNDQ3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGQUZFMTIzNzYyREZGQkNBRTYzQTM5NEJCQzY3MzUyNlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE4OTY1MTZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNnk5NUZJU0JTaC1LT1lBMjR1YUZKQVwiLFxuICBcInBob25lSWRcIjogXCJhNzk1ZjRjMy1iY2FiLTRhZDUtYTg1Ni00MmNiZDVlMTU3M2NcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM4LFxuICAgICAgMTMzLFxuICAgICAgNDgsXG4gICAgICAxNDIsXG4gICAgICAxMjYsXG4gICAgICAxMjEsXG4gICAgICAzLFxuICAgICAgMTQ2LFxuICAgICAgMTY1LFxuICAgICAgMjksXG4gICAgICA4MCxcbiAgICAgIDE3OSxcbiAgICAgIDcwLFxuICAgICAgMjM4LFxuICAgICAgMTE4LFxuICAgICAgOTgsXG4gICAgICAxMTMsXG4gICAgICAyMjAsXG4gICAgICAyMzUsXG4gICAgICAyNDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzYsXG4gICAgICA3MyxcbiAgICAgIDEwMyxcbiAgICAgIDEwNSxcbiAgICAgIDE2MSxcbiAgICAgIDE4MSxcbiAgICAgIDIwNCxcbiAgICAgIDI1MixcbiAgICAgIDE3MyxcbiAgICAgIDEzMixcbiAgICAgIDIxNyxcbiAgICAgIDEwNSxcbiAgICAgIDEzMCxcbiAgICAgIDE5MSxcbiAgICAgIDIwMixcbiAgICAgIDgwLFxuICAgICAgMTkzLFxuICAgICAgMTAxLFxuICAgICAgMjE3LFxuICAgICAgMTAxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlI4SzlETlpCXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwODE2NjA0NDc6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNDMwOTYxNTQ4Nzc5Nzg6NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLRFA5TXNCRUtxY2lMVUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInRscHdPWVlaZURLd1JLOHdxWmYrL3JHQ3RDUkhGdmYwTDlNbldjcmU1RTg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNWFubnAwMGJ0N2ZwOXZzdUx4V3FncXVrMnYyTTFMTUQrTDRrSXpsbnc4aVJ0VlcvczAxNEEzQ2JnL09odTAzQ2JvQTA1SnlPVGw1d1NKOWFHcWZHQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZFowRk8wTHFIYlZMZjhPUVlQZTV1bVIxZzhabTJaVDdnVGxGL2Q4OExwV1g1VU4zMlE5WFFxWlU2VklrZkFYOHl6NVE4eVBKYVlVaDdTZTFXTU1YRHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDgxNjYwNDQ3OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNzlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTg5NjUxMCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJHb1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQkdvLmpzb24iOiAie1wia2V5RGF0YVwiOlwiV1pybU5oOWs3TU1NOU9naVRCcFFuL1RSWElQNHRVZk5yUFRVWUt1dGs3WT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0Mjc2MzI1NDQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTg3NTY3MzMyNVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
