/**
 * This will do a deep clone
 * This was needed as cloning like this [...arr] or arr.slice(0)
 * will not do a deep clone of an array of objects.
 * @param arr -(array)
 */
export const deepClone = arr => JSON.parse(JSON.stringify(arr));

/**
 * This is a shortcut to write a console.log();
 * @param logMsg - (string)
 */
export const logger = logMsg => console.log(logMsg);
