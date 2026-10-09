/*
 * PasscodeLock native helpers — Telegram from main process (bypasses Discord CSP)
 */
import { ConnectSrc, CspPolicies } from "../../main/csp";
import type { IpcMainInvokeEvent } from "electron";

CspPolicies["api.telegram.org"] = ConnectSrc;

export async function sendTelegramMessage(
    _: IpcMainInvokeEvent,
    token: string,
    chatId: string,
    text: string
) {
    try {
        const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ chat_id: chatId, text }),
        });
        const data = await res.json().catch(() => ({}));
        return {
            ok: !!data?.ok,
            description: String(data?.description || ""),
            status: res.status,
        };
    } catch (e) {
        return { ok: false, description: String(e), status: -1 };
    }
}

export async function fetchTelegramUpdates(_: IpcMainInvokeEvent, token: string) {
    try {
        const res = await fetch(`https://api.telegram.org/bot${token}/getUpdates?limit=30`);
        return await res.json();
    } catch (e) {
        return { ok: false, description: String(e), result: [] };
    }
}
