let copyNotificationShowing = false

$(window).on("load", () => {
    $("body").removeClass("preload")

    const countdown =  () => {
        const now = new Date()

        let year = now.getFullYear()
        const month = now.getMonth() + 1
        const day = now.getDate()

        let targetDate, target, birthday, birthdayThing

        console.log(month > 5 && month != 12, month == 12 && day < 25, month == 5 && day >= 25)

        if ((month > 5 && month != 12) || (month == 12 && day < 25) || (month == 5 && day >= 25)) {
            targetDate = new Date(Date.parse(`12/25/${year}`))
            target = "christmas"
        } else {
            if (month == 12) year++
            targetDate = new Date(Date.parse(`5/25/${year}`))
            target = "birthday"
            birthday = year - 2003
            birthdayThing = birthday.toString().endsWith("1")
                ? "st"
                : birthday.toString().endsWith("2")
                ? "nd"
                : birthday.toString().endsWith("3")
                ? "rd"
                : "th"
        }

        $("#countdown-text")[0].innerText = `${MStoTime(
            targetDate.getTime() - now.getTime()
        )} until ${target == "christmas" ? "christmas" : `${birthday}${birthdayThing} birthday`}`
    }

    countdown()
    
    setInterval(countdown, 1000);
})

const stages = ["max#0777", "cax#077!", "cox#07!!", "cop#0d!!", "copied!!"]

function copyDiscord() {
    if (copyNotificationShowing) return
    const el = document.createElement('textarea');
    el.value = "max#0777";
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    copyNotificationShowing = true

    let i = 1

    const interval1 = setInterval(() => {
        if (!stages[i]) {
            i = stages.length - 1
            return clearInterval(interval1)
        }
        $("#discord")[0].innerText = stages[i]
        i++
    }, 50);

    setTimeout(() => {
        const interval2 = setInterval(() => {
            if (!stages[i]) {
                i = 1
                copyNotificationShowing = false
                return clearInterval(interval2)
            }
            $("#discord")[0].innerText = stages[i]
            i--
        }, 75)
    }, 50 * stages.length + 3000)

    // // $("#discord")[0].innerText = "copied!!"

    // setTimeout(() => {
    //     copyNotificationShowing = false
    //     $("#discord")[0].innerText = "max#0777"
    // }, 4000)
}

function MStoTime(ms) {
    const days = Math.floor(ms / (24 * 60 * 60 * 1000))
    const daysms = ms % (24 * 60 * 60 * 1000)
    const hours = Math.floor(daysms / (60 * 60 * 1000))
    const hoursms = ms % (60 * 60 * 1000)
    const minutes = Math.floor(hoursms / (60 * 1000))
    const minutesms = ms % (60 * 1000)
    const sec = Math.floor(minutesms / 1000)

    let output = ""

    if (days > 0) {
        output += `${days} day${days > 1 ? "s" : ""} `
    }

    if (hours > 0) {
        output += `${hours} hour${hours > 1 ? "s" : ""} `
    }

    if (minutes > 0) {
        output += `${minutes} minute${minutes > 1 ? "s" : ""} `
    }

    output += `${sec} second${sec > 1 ? "s" : ""}`

    return output
}