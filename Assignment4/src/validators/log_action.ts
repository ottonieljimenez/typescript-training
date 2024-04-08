/**
 * Decorator to log an action
 * @param action message
 * @returns the result of logging an action
 */
export function logAction(action: string) {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const originalMethod = descriptor.value;

        descriptor.value = function(...args: any[]) {
            // log message
            console.log(`${action}`);
            return originalMethod.apply(this, args);
        }
    }
}