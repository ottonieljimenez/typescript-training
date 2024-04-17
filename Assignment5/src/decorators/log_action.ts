export function logAction(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (this: any, ...args: any[]) {
        const action = `${propertyKey} action performed.\n`;
        console.log(action);
        return originalMethod.apply(this, args);
    }

    return descriptor;
}