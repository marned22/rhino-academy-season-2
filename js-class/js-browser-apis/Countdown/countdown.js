let myBirthday = new Date("2025-05-09T00:00:00").getTime()

function countdown(time){
    const interval = setInterval(() => {
        const timeNow = new Date().getTime()
        let remaining = time - timeNow

        if(remaining <= 0){
            clearInterval(interval)
            document.getElementById("timer").innerHTML = "Happy Birthday"
            return
        }

        const days = Math.floor(remaining / (1000 * 60 * 60 * 24))
        const hours = Math.floor(remaining % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
        const minutes = Math.floor(remaining % (1000 * 60 * 60) / (1000 * 60))
        const seconds = Math.floor(remaining % (1000 * 60) / 1000)

        document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s to my birthday`
    }, 1000)
}

countdown(myBirthday)