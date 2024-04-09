/**
 * Generic interface for order details
 */
interface OrderDetails<T extends PhysicalProduct | DigitalProduct> {
    id: number;
    product: T;
    quantity: number;
    total: number;
}

interface Product {
    name: string;
    price: number;
}

interface PhysicalProduct extends Product {
    weight: number;
    dimensions: string;
    color: string;
    material: string;
}

interface DigitalProduct extends Product {
    fileSize: number;
    fileFormat: string;
}

/**
 * Generic class representing an order manager
 */
class OrderManager<T extends PhysicalProduct | DigitalProduct> {
    private orders: OrderDetails<T>[] = [];
    private lastOrderId: number = 0;
    private totalSales: number = 0;

    /**
     * Method to add an order to the OrderManager
     * @param details of the order
     */
    addOrder(product: T, quantity: number): void {
        // update last order ID
        this.lastOrderId += 1;
        const order: OrderDetails<T> = { 
            id: this.lastOrderId, 
            product: product,
            quantity: quantity,
            total: product.price * quantity
        };
        this.orders.push(order);
        // update total sales
        this.totalSales += order.total;
    }

    /**
     * Method to return all the orders of the OrderManager
     * @returns all orders of the OrderManager
     */
    getOrders(): OrderDetails<T>[] {
        return this.orders;
    }

    /**
     * Method to retrieve the details of an order
     * @param orderId 
     * @returns the specific order by orderId
     */
    getOrder(orderId: number): OrderDetails<T> | undefined {
        return this.orders.find(order => order.id === orderId);
    }

    /**
     * Method to retrieve the total number of orders
     * @returns the total number of orders
     */
    getTotalOrders(): number {
        return this.orders.length;
    }

    /**
     * Method to retrive total sales
     * @returns total sales
     */
    getTotalSales(): number {
        return this.totalSales;
    }

    /**
     * Method to apply discount to an order
     * @param orderId of the order to apply the discount
     * @param discount to apply (from 0 to 1)
     */
    applyDiscountToOrder(orderId: number, discount: number): void {
        const order = this.getOrder(orderId);
        if (order) {
            console.log(`Current price for order ${orderId} is US$ ${order.total}.`)
            console.log(`Applying ${discount * 100}% to order ${orderId}...`)

            order.total -= order.total * discount;

            console.log(`Discount successfully applied. New price: US$ ${order.total}.\n`);
        }
    }

    /**
     * Method to apply discount to total sales
     * @param discount to apply (from 0 to 1)
     */
    applyDiscountToTotalSales(discount: number): void {
        console.log(`Current total sales: US$ ${this.totalSales}`);
        console.log(`Applying ${discount * 100}% to total sales...`);

        this.totalSales -= this.totalSales * discount;

        console.log(`Discount successfully applied. New total sales: US$ ${this.totalSales}.\n`);
    }
}

console.log("Generic Classes in Business Applications\n");

// instantiate the OrderManager class
const orderManager = new OrderManager();

// create an object of type PhysicalProduct
const physicalProduct: PhysicalProduct = {
    name: "book",
    price: 10,
    weight: 1,
    dimensions: "10x10x10",
    color: "red",
    material: "paper"
}

// add order for physical product
orderManager.addOrder(physicalProduct, 2);

// create an object of type DigitalProduct
const digitalProduct: DigitalProduct = {
    name: "eBook",
    price: 20,
    fileSize: 100,
    fileFormat: "PDF"
}

// add order for digital product
orderManager.addOrder(digitalProduct, 1);

// show orders
console.log(orderManager.getOrders(), '\n');

// get order by orderId
console.log(orderManager.getOrder(1), '\n');

// get total number of orders
console.log(`Total orders: ${orderManager.getTotalOrders()}\n`)

// get total sales
console.log(`Total sales (US$): ${orderManager.getTotalSales()}\n`);

// apply discount to order
orderManager.applyDiscountToOrder(1, 0.1); // 10% discount

// apply discount to all orders
orderManager.applyDiscountToTotalSales(0.2); // 20% discount