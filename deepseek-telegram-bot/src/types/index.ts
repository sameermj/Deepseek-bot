export interface IncomingMessage {
    chatId: number;
    text: string;
    userId: number;
}

export interface DeepSeekResponse {
    success: boolean;
    data?: any;
    error?: string;
}

export interface BotConfig {
    token: string;
    apiUrl: string;
}