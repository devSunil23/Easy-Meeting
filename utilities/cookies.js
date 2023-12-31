function getCookie(cname) {
    let name = cname + '=';
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return '';
}

function setCookie(cname, cvalue, options = {}) {
    const { expires = 24 * 60 * 60, path = '/', domain } = options;
    let cookie = `${cname}=${cvalue};`;
    if (expires) {
        const d = new Date();
        d.setTime(d.getTime() + expires * 1000);
        cookie += `expires=${d.toUTCString()};`;
    }
    if (path) cookie += `path=${path};`;
    if (domain) cookie += `domain=${domain};`;
    document.cookie = cookie;
}

function clearCookie(cname, path = '/') {
    let cookie = `${cname}=;`;
    const d = new Date();
    d.setTime(d.getTime() - 50 * 1000);
    cookie += `expires=${d.toUTCString()};`;
    cookie += `path=${path};`;
    document.cookie = cookie;
}

export { getCookie, setCookie, clearCookie };
