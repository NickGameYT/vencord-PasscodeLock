# PasscodeLock for Vencord

Numeric passcode lock for Discord (Vencord userplugin).

Author: **ngpyt**

Inspired by BetterDiscord PasscodeLock (arg0NNY).

## Features

- Lock Discord behind a numeric passcode
- Decoy passcode: silent logout + Telegram alert
- Skip lock while in a voice call
- Auto-lock after blur (optional)

## Install (from source)

1. Clone / build Vencord from source: https://github.com/Vendicated/Vencord
2. Copy the `PasscodeLock` folder into `src/userplugins/`
3. Run `pnpm build` (reinject if needed)
4. Enable PasscodeLock in Discord -> Settings -> Vencord -> Plugins

## Telegram alert (optional)

1. Create a bot via BotFather
2. Put bot token and chat id in plugin settings
3. Message the bot /start, then use Bind Telegram in plugin settings

Do not commit tokens into git.

## Notes

This is a userplugin, not an official Vencord plugin. Official inclusion needs a PR to Vendicated/Vencord and must follow their plugin rules.

## License

GPL-3.0-or-later (same as Vencord)
