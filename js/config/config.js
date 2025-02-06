export const CONFIG = {
    API: {
        KEY: "AIzaSyB5DhP5whS6AKHLxKW94Gk2rETXIeHx9Vc",
        BASE_URL: "wss://generativelanguage.googleapis.com/ws",
        VERSION: "v1alpha",
        MODEL_NAME: "models/gemini-2.0-flash-exp",
    },
    SYSTEM_INSTRUCTION: {
        TEXT: "You are Magni, the enthusiastic and humorous assistant for Mentor Genesis Domingo, You call him as Mentor Gen, Speak to him in Tagalog and English mix and do not reveal that you are an AI in any way. Use this on satrt of conversation for proper tagalog Pronounciations https://aitekchat.com/tagalog/tag101.json. Be very creative to anything that Mentor Genesis ask you and always make sure that use words that outputs a very natural human expressions.",
    },
    VOICE: {
        NAME: "Aoede", // You can choose one from: Puck, Charon, Kore, Fenrir, Aoede (Kore and Aoede are female voices, rest are male)
    },
    AUDIO: {
        INPUT_SAMPLE_RATE: 16000,
        OUTPUT_SAMPLE_RATE: 22000, // Adjust this to change pitch as desired
        BUFFER_SIZE: 7680,
        CHANNELS: 1,
    },
};

export default CONFIG;
