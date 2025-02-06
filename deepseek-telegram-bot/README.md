# DeepSeek Telegram Bot

This project is a Telegram bot that integrates with the DeepSeek AI API. It allows users to interact with the AI through Telegram messages.

## Features

- Responds to user commands
- Sends queries to the DeepSeek AI API
- Processes and returns responses to users

## Project Structure

```
deepseek-telegram-bot
├── src
│   ├── bot.ts               # Entry point for the Telegram bot
│   ├── config.ts            # Configuration settings
│   ├── controllers           # Contains command handling logic
│   │   └── index.ts
│   ├── services              # Interacts with the DeepSeek AI API
│   │   └── deepseek.ts
│   └── types                 # Type definitions
│       └── index.ts
├── package.json              # NPM configuration
├── tsconfig.json             # TypeScript configuration
└── README.md                 # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/deepseek-telegram-bot.git
   ```
2. Navigate to the project directory:
   ```
   cd deepseek-telegram-bot
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Configuration

Before running the bot, you need to set up your configuration. Create a `.env` file in the root directory and add your Telegram bot token:

```
TELEGRAM_BOT_TOKEN=your_telegram_bot_token
```

## Usage

To start the bot, run the following command:

```
npm start
```

The bot will listen for incoming messages and respond based on the commands defined in the `controllers`.

## Contributing

Feel free to submit issues or pull requests to improve the bot's functionality.