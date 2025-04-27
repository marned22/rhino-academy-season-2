const badwords = [
    "fuck",
    "shit",
    "bitch",
    "nigga", 
]

self.onmessage = (event) => {
    const message = event.data
    const filteredMessage = badwords.reduce((msg, word) => {
        const regex = new RegExp(`\\b${word}\\b`, "gi")
        return msg.replace(regex, "****")
    }, message)

    self.postMessage(filteredMessage)
}