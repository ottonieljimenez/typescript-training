// Utilities namespace
export namespace Utilities {
    /**
     * Function to clamp a value (i.e., limit it to a particular range)
     * @param value of the number to be clamped
     * @param minimum value that the number can be clamped to
     * @param maximum value that the number can be clamped to
     * @returns clamped value
     */
    export function clamp<T extends number>(value: T, minimum: T, maximum: T): any {
        return Math.min(Math.max(value, minimum), maximum);
    }

    /**
     * Function that shuffles an array using the Fisher-Yates shuffle algorithm
     * @param array 
     * @returns the shuffled array
     */
    export function shuffleArray<T>(array: T[]): T[] {
        // copy of the array to avoid mutation of the original array
        const shuffledArray = array.slice();

        // Fisher-Yates shuffle algorithm
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        
        return shuffledArray;
    }

    /**
     * Method to calculate the average of an array of numbers
     * (i.e., the sum of all numbers divided by the number of elements in the array)
     * @param array of numbers
     * @returns the average of all numbers in the array
     */
    export function average<T extends number>(array: T[]): number {
        // sum of all elements divided by number of elements in the array
        return array.reduce((a, b) => a + b, 0) / array.length;
    }
}