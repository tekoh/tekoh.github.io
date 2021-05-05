let copyNotificationShowing = false

function copyDiscord() {
    const el = document.createElement('textarea');
    el.value = "max#0777";
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}