/**
 * Decorator to validate that class properties
 * @param target 
 * @param key 
 */
export function required(target: any, key: string) {
    let value: any;

    // getter to retrieve the property value
    const getter = function () {
        return value;
    };

    // setter function to set the property value and perform validation
    const setter = function (newValue: any) {
        // check if the new value is not undefined or null
        if (newValue !== undefined && newValue !== null) {
            value = newValue;
        } else {
            // if the new value is undefined or null, throw an error
            throw new Error(`Property ${key} is required.`);
        }
    };

    // define the property with the getter and setter functions
    Object.defineProperty(target, key, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true,
    });
}