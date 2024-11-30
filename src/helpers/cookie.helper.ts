export const setCookie = (
    cookieName: string,
    cookieValue: string,
    expiresIn: number
): void => {
    const expiresDate = new Date();
    expiresDate.setTime(expiresDate.getTime() + expiresIn);

    document.cookie = `${cookieName}=${encodeURIComponent(cookieValue)};expires=${expiresDate.toUTCString()};path=/`;
};

export const getCookie = (cookieName: string): string => {
    const name = `${cookieName}=`;
    const cookies = document.cookie.split(';');

    for (const cookie of cookies) {
        const trimmedCookie = cookie.trim();
        if (trimmedCookie.startsWith(name)) {
            return trimmedCookie.substring(name.length);
        }
    }

    return '';
};

export const removeCookie = (cookieName: string): void => {
    setCookie(cookieName, '', 1);
};
