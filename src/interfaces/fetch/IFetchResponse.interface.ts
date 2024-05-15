export interface IFetchResponse<T> {
    data: T | undefined;
    isLoaded: boolean;
    exception: string;
}
