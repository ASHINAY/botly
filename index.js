require('dotenv').config();

const { App } = require('@slack/bolt');
const axios = require('axios');
const signingSecret = process.env['SLACK_SIGNING_SECRET']
const botToken = process.env['SLACK_BOT_TOKEN']
const app = new App({
  signingSecret: signingSecret,
  token: botToken,
});

(async () => {
  await app.start(process.env.PORT || 12000);

  app.message('hello', async ({ message, say }) => {
    say(`Hello there!, <@${message.user}>`);
  });
  app.message('help', ({ message, say }) => {
    say(`
    Here are the available commands:
    - "hello": Greet the bot
    - "help": Show the help message
    - "time": Show the current date and time
    - "joke": Show the random joke
    - "hi" : Welcome the User
  `);
  });
  
app.message('time',async ({ message, say }) => {
  let datetime = new Date().toLocaleString();
    say(`Hi <@${message.user}> Current date and time ${datetime}`);
  });

  app.message('joke', async ({ message, say }) => {
    const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
    const joke = response.data;
    
    say(`${joke.setup} ${joke.punchline}`);
  });
  
  app.message('hi', async ({ message, say }) => {
    say(` Welcome!, <@${message.user}>`);
  });
  console.log(` Botly app is running!`);
})();