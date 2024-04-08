/**
 * Decorator to validate that a class property contains an email format
 * @param target 
 * @param key 
 */
export function validateEmailFormat(target: any, key: string) {
    let value: string;

    const getter = function() {
        return value;
    }

    // setter function to set the property value and perform validation
    const setter = function (newValue: string) {
        // Regex to validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // check if the new value matches the email format
        if (emailRegex.test(newValue)) {
            value = newValue;
        } else {
            // if the email format is not match, throw an error
            throw new Error(`Invalid email format for property '${key}'`);
        }
    };

    // define the property using the getter and setter functions
    Object.defineProperty(target, key, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    });
}