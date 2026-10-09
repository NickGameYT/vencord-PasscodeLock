# PasscodeLock for Vencord

Numeric passcode lock for Discord as a **Vencord userplugin**.

**Author:** ngpyt

Inspired by BetterDiscord [PasscodeLock](https://betterdiscord.app/plugin/PasscodeLock) (arg0NNY).

## Features

- Lock Discord behind a numeric passcode
- Decoy passcode: silent logout + optional Telegram alert
- Skip locking while you are in a voice call
- Optional auto-lock after the window loses focus
- UI language: **English** (default) or Russian

## Install

1. Build [Vencord](https://github.com/Vendicated/Vencord) from source
2. Copy the `PasscodeLock` folder into `src/userplugins/`
3. Run `pnpm build` (reinject if needed)
4. Enable **PasscodeLock** in Discord → Settings → Vencord → Plugins

## Setup

1. Open plugin settings and set your **main** passcode
2. (Optional) Set a **decoy** passcode — it logs you out and can notify Telegram
3. (Optional) Add your Telegram bot token and chat id, message the bot `/start`, then use **Bind Telegram**

Do **not** commit tokens or chat ids to git. Leave those fields empty in the repo; each user configures them locally.

## Telegram alerts (optional)

1. Create a bot with [@BotFather](https://t.me/BotFather)
2. Paste the bot token and your Telegram user/chat id into the plugin settings
3. Send `/start` to the bot, then click **Bind Telegram** / **Test Telegram**

## Notes

This is a **userplugin**, not an official built-in Vencord plugin. A PR to [Vendicated/Vencord](https://github.com/Vendicated/Vencord) must follow their [plugin rules](https://github.com/Vendicated/Vencord/blob/main/CONTRIBUTING.md) (API keys / niche features may be rejected).

## License

GPL-3.0-or-later (same as Vencord)
