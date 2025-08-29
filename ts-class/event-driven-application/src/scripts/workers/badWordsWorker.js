const badwords = [
    "fuck",
    "shit",
    "bitch",
    "nigga", 
]

self.onmessage = (event) => {
    const payload = event.data;
    const messageText = typeof payload === 'string' ? payload : (payload && payload.content) ? String(payload.content) : '';

    const filteredMessage = badwords.reduce((msg, word) => {
        const regex = new RegExp(`\\b${word}\\b`, "gi")
        return msg.replace(regex, "****")
    }, messageText)

    self.postMessage(filteredMessage)
}