export const capitalizeFirstLetterOfEachWordInString = (
    stringToCapitalize: string
): string =>
    stringToCapitalize
        .trim()
        .toLowerCase()
        .replace(/\b\w/g, char => char.toUpperCase());

export const cleanString = (
    stringToClean: string,
    partToClean: string
): string => stringToClean.replace(new RegExp(partToClean, 'i'), '');
