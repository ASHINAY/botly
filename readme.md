#  Botly

This Node.js  botly is built using the [@slack/bolt](https://github.com/slackapi/bolt) library and provides various fun features to interact with users in a Slack workspace. The bot responds to specific commands and provides relevant information like greetings, current date and time, random jokes, and more.

## Features

The bot supports the following commands:

- `/hello`: Greet the bot. It responds with "Hello there!" along with the user's mention.

- `/help`: Show the help message. It provides a list of available commands with a brief description.

- `/time`: Show the current date and time. It responds with the current date and time along with the user's mention.

- `/joke`: Show a random joke. The bot fetches a random joke from the "https://official-joke-api.appspot.com" API and responds with the setup and punchline.

- `/hi`: Welcome the User. It responds with "Welcome!" along with the user's mention.

## Prerequisites

To run the bot, you'll need the following:

- Node.js (version 12 or higher)
- NPM (Node Package Manager)

## Installation

1. Clone the repository or download the code.

2. Open a terminal or command prompt and navigate to the project directory.

3. Install the required dependencies:

   ```bash
   npm install

4. Create a .env file in the project root directory and add your Slack bot token and signing secret:
   ```bash
   SLACK_BOT_TOKEN=your_slack_bot_token_here
   SLACK_SIGNING_SECRET=your_slack_signing_secret_here

Replace your_slack_bot_token_here and your_slack_signing_secret_here with your actual bot token and signing secret obtained from your Slack app's settings.

5. Running the Bot
   To start the bot, use the following command in the terminal:
   ```bash
   node index.js   
