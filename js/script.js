let copyNotificationShowing = false

function copyDiscord() {
    if (copyNotificationShowing) return
    const el = document.createElement('textarea');
    el.value = "max#0777";
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    copyNotificationShowing = true

    $("#discord-notification").addClass("notification-in")

    setTimeout(() => {
        $("#discord-notification").addClass("notification-out")
    }, 1400)

    setTimeout(() => {
        $("#discord-notification").removeClass("notification-in")
        $("#discord-notification").removeClass("notification-out")
        copyNotificationShowing = false
    }, 1800)
}