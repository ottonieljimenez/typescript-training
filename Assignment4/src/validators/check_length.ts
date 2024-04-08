/**
 * Decorator to validate the length of a class property
 * @param minLength 
 * @param maxLength 
 */
export function checkLength(minLength: number, maxLength: number) {
    // return the actual decorator function
    return function (target: any, key: string) {
        let value: string;

        // getter function to retrieve the property value
        const getter = function() {
            return value;
        };

        // setter function to set the property value and perform validation
        const setter = function(newValue: string) {
            // check if the new value meets the length criteria
            if (newValue.length >= minLength && newValue.length <= maxLength) {
                console.log(newValue);
                value = newValue;
            } else {
                // if the length criteria is not met, throw an error
                throw new Error(`Property ${key} must have between ${minLength} and ${maxLength} characters.`);
            }
        };

        // define the property using the getter and setter functions
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    };
}