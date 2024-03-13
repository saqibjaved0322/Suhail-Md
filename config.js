const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""  // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Saqi:Saqi@cluster0.0whcjui.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"


global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  = process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website= process.env.GURL|| "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923229502380" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923229502380";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false", // disable bot in pm when public mode
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text", // set IMAGE/VIDEO links here
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923229502380,+923707121500";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923229502380";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923229502380,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_51_03_13_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiVUZadFlHZFRPUmN0dS90ejVwMG15amdUSS9PV1B1NlIzdWJlaHQ0RG9WND1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkg2emxhN3FQT0thbWVDWENPZ2l2ZnplMENZNnlsTXk4SlpOZkR5ZTlrbEE9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwic01va2czZXljQzE0WkFPcnE3ZlhLdmFHY2dEcGQzaFk1OUxHdmswSmZrTT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImJOYlR0U1N3T3UvN0tpZjRpalBWYTlDTldFVUVhS3pRRmxzaUQweUQwbWc9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiNlAvMEpZMUprRGx6eklsSGJpeG9hYzVqbkZLT29STk5QV1hjTGY5N1hGND1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIk9sZlZQbldkQlFmbERSZ1NTbTJONyt3ZEtoRU1BODBwZHFKMEFSa2VrbDQ9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJ1RHZKY3JEdkhvZXVBSTNoY3M4Y04wMTZZbzF3MXh5NVlCSXJLckI0RVdjPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQnJxUk9IRjN5cjdqWmd2Q0ZtMWRjZlBVVEFtT28zSHZHN3dBZEE3d2NHZz1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJiMUJZNWFTN0g1ZHVkUXNvTGt5RzM3SUpETjRwdnpUSUtPcUNiNCtONjZ2MmZyR0owVGRST2NZTXkrRlQxSUduZytaT1Q5L2tTeVoyWTFadjNTRW9nUT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6NTQsXCJhZHZTZWNyZXRLZXlcIjpcInBqcks3d0JJdktEaE5ickZveE9ISnZOc1Z5MkFVa1h2UFZoZ0xWQm5HeU09XCIsXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjpbe1wia2V5XCI6e1wicmVtb3RlSmlkXCI6XCI5MjMyMjk1MDIzODBAcy53aGF0c2FwcC5uZXRcIixcImZyb21NZVwiOnRydWUsXCJpZFwiOlwiM0YwQkI1NDNDOURCQTBFQjM0RjU2Q0QzM0ZBMzQ1NkRcIn0sXCJtZXNzYWdlVGltZXN0YW1wXCI6MTcxMDI5MTEwNH0se1wia2V5XCI6e1wicmVtb3RlSmlkXCI6XCI5MjMyMjk1MDIzODBAcy53aGF0c2FwcC5uZXRcIixcImZyb21NZVwiOnRydWUsXCJpZFwiOlwiQzVCRjRDRUFCMzgzNkZGMEM2N0M0REU2RERGREY1NzNcIn0sXCJtZXNzYWdlVGltZXN0YW1wXCI6MTcxMDI5MTEwNX1dLFwibmV4dFByZUtleUlkXCI6MzEsXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOjMxLFwiYWNjb3VudFN5bmNDb3VudGVyXCI6MSxcImFjY291bnRTZXR0aW5nc1wiOntcInVuYXJjaGl2ZUNoYXRzXCI6ZmFsc2V9LFwiZGV2aWNlSWRcIjpcIjMtZzY0WEZ0U2hlcU8wSk9KNTZSQXdcIixcInBob25lSWRcIjpcIjNjMzg5N2RjLTUwYjYtNDhiNi05YTQ0LTQ2ODcxNzA4MTM5NVwiLFwiaWRlbnRpdHlJZFwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQVdvb2doeUFoV3FMc1hoU0hYUFdJaDl5VnRJPVwifSxcInJlZ2lzdGVyZWRcIjp0cnVlLFwiYmFja3VwVG9rZW5cIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjFtRlBuUVErcW5yQmN2eVEyZTBzeTRDNkdpYz1cIn0sXCJyZWdpc3RyYXRpb25cIjp7fSxcInBhaXJpbmdDb2RlXCI6XCJaQldWNlA3S1wiLFwibWVcIjp7XCJpZFwiOlwiOTIzMjI5NTAyMzgwOjE2QHMud2hhdHNhcHAubmV0XCIsXCJsaWRcIjpcIjgyNDAzNjc4Nzk3OTQ1OjE2QGxpZFwiLFwibmFtZVwiOlwiQUJCQSBNT0hUUkFNXCJ9LFwiYWNjb3VudFwiOntcImRldGFpbHNcIjpcIkNPR3h4cjBDRUpmeHc2OEdHQUlnQUNnQVwiLFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOlwickNjaUUxb1hmUm00NnNDTTkxRzM2cWtDTlMrcEpoNWVtNmtjL3hvQkRFUT1cIixcImFjY291bnRTaWduYXR1cmVcIjpcIno3cEwrRXl3SnpVZE9PalpQcnNoNjRjNDBsL2x3TU9QT3duRmMrQTFUZmNJV3BoRHVSSEsrdExmMVUxMmZTSmxqZVVZSy9xaDFGNXRiMTdHMFNwaUF3PT1cIixcImRldmljZVNpZ25hdHVyZVwiOlwiTStYSC9ORExyZVQ4dXR6bElWT00vQlU0cFJtZyt1dm1ESndqY2VqNDUzQ2o0YTFPK3UzdEk3SUJVUTBSeDQvV0JLT1ZZVHRuZGtMUlFEQW9EbGZNZ3c9PVwifSxcInNpZ25hbElkZW50aXRpZXNcIjpbe1wiaWRlbnRpZmllclwiOntcIm5hbWVcIjpcIjkyMzIyOTUwMjM4MDoxNkBzLndoYXRzYXBwLm5ldFwiLFwiZGV2aWNlSWRcIjowfSxcImlkZW50aWZpZXJLZXlcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkJhd25JaE5hRjMwWnVPckFqUGRSdCtxcEFqVXZxU1llWHB1cEhQOGFBUXhFXCJ9fV0sXCJwbGF0Zm9ybVwiOlwiYW5kcm9pZFwiLFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6MTcxMDI5MTA5OSxcIm15QXBwU3RhdGVLZXlJZFwiOlwiQUFBQUFNVEFcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNVEEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJyQ1BFZ2lYOUdYWkIvc3lJeWVnMXBiTlJKTks4b2UvRWFkQXJaQm1OcXprPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY2NTk1MDQyNCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.0",
  caption : process.env.CAPTION || "ONE-MAN-ARMY" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "ONE-MAN-ARMY",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "MIRU-KI-JAAN",
  ownername:process.env.OWNER_NAME|| "ONE-MAN-ARMY",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};

























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
 
