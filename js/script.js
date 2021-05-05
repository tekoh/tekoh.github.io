let copyNotificationShowing = false
$(window).on("load", () => {
    $("body").removeClass("preload")
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
        console.log("boobies")
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