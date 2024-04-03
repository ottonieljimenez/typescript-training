// Models namespace
export namespace Models {
    /**
     * Generic Item<T, U> class that represent generic items
     */
    export class Item<T, U> {
        constructor(public name: T, public price: U) {}
    }
}