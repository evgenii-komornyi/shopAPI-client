export const newAbortSignal = (
    timeoutMs: number | undefined = 0
): AbortSignal => {
    const abortController: AbortController = new AbortController();
    setTimeout(() => abortController.abort(), timeoutMs);

    return abortController.signal;
};
