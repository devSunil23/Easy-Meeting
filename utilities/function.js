const link = (path) => process.env.REACT_APP_MAIN_SITE + path;

const env = (name) => {
    const nodeENV = process.env.NODE_ENV.toUpperCase();

    return (
        process.env[`REACT_APP_${nodeENV}_${name}`] ||
        process.env[`REACT_APP_${name}`]
    );
};

let b64DecodeUnicode = (str) =>
    decodeURIComponent(
        Array.prototype.map
            .call(
                atob(str),
                (c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
            )
            .join('')
    );

let parseJwt = (token) => {
    console.log({ token });
    return JSON.parse(
        b64DecodeUnicode(
            token.split('.')[1].replace('-', '+').replace('_', '/')
        )
    );
};

const handleAxiosError = (e, showError) => {
    if (e?.response?.data) {
        const errors = e.response.data?.errors || ['Something went wrong'];
        showError(errors.pop());
    } else {
        showError('Our server encountered an error, Please try again later');
    }
};

function escapeDanger(content) {
    const regex = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gim;

    if (regex.test(content)) return null;
    return content;
}
function dirname(filePath) {
    if (typeof filePath !== 'string') {
        throw new TypeError('Path must be a string');
    }

    const separator = '/';
    const lastIndex = filePath.lastIndexOf(separator);
    if (lastIndex === -1) {
        return '.';
    }

    return filePath.slice(0, lastIndex);
}

function basename(filePath, ext = '') {
    if (typeof filePath !== 'string') {
        throw new TypeError('Path must be a string');
    }

    const separator = '/';
    const lastIndex = filePath.lastIndexOf(separator);
    let baseName = filePath.slice(lastIndex + 1);

    if (ext && baseName.endsWith(ext)) {
        baseName = baseName.slice(0, -ext.length);
    }

    return baseName;
}
export {
    link,
    env,
    parseJwt,
    handleAxiosError,
    escapeDanger,
    basename,
    dirname,
};
