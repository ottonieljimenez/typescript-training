/**
 * 
 * @param minLength of string to validate length of
 * @param maxLength of string to validate length of
 * @returns 
 */
export function validateStringLength(
    minLength: number,
    maxLength: number
) {
    return function (target: any, propertyKey: string | symbol){
        let value: string;

        const getter = function() {
            return value;
        };

        const setter = function(newValue: string) {
            if (newValue.length < minLength || newValue.length > maxLength) {
                throw new Error(`String length must be between ${minLength} and ${maxLength}.`);
            }
            value = newValue;
        };

        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    }
}