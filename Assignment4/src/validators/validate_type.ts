import "reflect-metadata";

/**
 * Decorator to validate the type of a class property
 * @param expectedType
 * @returns 
 */
export function validateType(expectedType: string) {
    return function(target: any, key: string) {
        const type = Reflect.getMetadata('design:type', target, key).name;

        // validate type
        if (type !== expectedType) {
            throw new Error(`Property '${key}' must be of type '${expectedType}'`);
        }
    };
}