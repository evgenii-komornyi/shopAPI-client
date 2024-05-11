export const setCookie = (
    cookieName: string,
    cookieValue: string,
    expiresDays: number
): void => {
    const expiresDate = new Date();
    expiresDate.setTime(
        expiresDate.getTime() + expiresDays * 24 * 60 * 60 * 1000
    );

    document.cookie = `${cookieName}=${cookieValue};expires=${expiresDate.toUTCString()};path=/`;
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
