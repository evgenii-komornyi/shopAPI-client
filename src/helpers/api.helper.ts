import { IErrorResponse } from '../interfaces/fetch/IErrorResponse.interface';

export const newAbortSignal = (
    timeoutMs: number | undefined = 0
): AbortSignal => {
    const abortController: AbortController = new AbortController();
    setTimeout(() => abortController.abort(), timeoutMs);

    return abortController.signal;
};

export const handleError = (err: Error): void => {
    const axiosError = err as { response?: IErrorResponse };

    if (axiosError.response) {
        const { data } = axiosError.response;

        alert(data.error);
    } else {
        alert('An unexpected error occurred.');
    }
};
