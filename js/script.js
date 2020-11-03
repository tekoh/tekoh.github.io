$(window).on("load", function() {
    $("body").removeClass("preload")
})

function randomVideo() {
    const vid = Math.floor(Math.random() * 10) + 1
    return "content/" + vid + ".mp4"
}

function copyTag() {

    const tag = document.getElementsByClassName("discord")[0]

    if (tag.innerText != "max#0777") return

    const el = document.createElement('textarea');
    el.value = "max#0777";
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el); 

    tag.innerText = "copied to clipboard"

    setTimeout(() => {
        tag.innerText = "max#0777"
    }, 1000);
}

const timeout = 1000
let clicks = 0
let lastClick, started

function cpsCount() {
    const now = new Date().getTime()

    if (lastClick && now - lastClick >= timeout)  {
        clicks = 0
        started = now
        return lastClick = now
    }

    clicks++

    const tag = document.getElementsByClassName("discord")[0]

    if (started) {
        lastClick = now

        let text = `CPS: ${calcCps()} (${clicks} clicks)`

        return tag.innerText = text
    } else {
        if (clicks > 2) {
            started = now
            lastClick = now
            clicks = 1

            let text = `CPS: ${calcCps()} (${clicks} clicks)`

            return tag.innerText = text
        }
    }
}

function calcCps() {
    const time = lastClick - started
    const cps = (clicks / (time / 1000)).toFixed(1)

    if (cps == "Infinity") return 1

    if (clicks < 4) return (cps / 2).toFixed(1)

    return cps
}