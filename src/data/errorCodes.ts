type ErrorResponse = Record<number, string>;

export const errorCodes: ErrorResponse = {
    401: 'Access is denied due to invalid credentials.',
    403: 'You do not have permission to access this resource.',
    404: 'The requested resource could not be found.',
    500: 'Something went wrong on the server.',
};
