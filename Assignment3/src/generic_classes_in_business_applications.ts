/**
 * Generic interface for order details
 */
interface OrderDetails<T> {
    orderId: number;
    orderType: string;
    saleAmount: number;
    details: T;
}

/**
 * Generic class representing an order manager
 */
class OrderManager<T> {
    private orderType: string;
    private orders: OrderDetails<T>[] = [];
    private lastOrderId: number = 0;
    private totalSales: number = 0;
    
    constructor(orderType: string) {
        this.orderType = orderType;
    }

    /**
     * Method to add an order to the OrderManager
     * @param details of the order
     */
    addOrder(details: T, amount: number): void {
        // update last order ID
        this.lastOrderId += 1;
        const order: OrderDetails<T> = { 
            orderId: this.lastOrderId, 
            orderType: this.orderType, 
            saleAmount: amount, 
            details: details 
        };
        this.orders.push(order);
        // update total sales
        this.totalSales += amount;
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
        return this.orders.find(order => order.orderId === orderId);
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
}

// example type for order details
type OrderDetailType = object;

// create an instance of the OrderManager class for physical products
const physicalProductsOrderManager = new OrderManager("Physical Products");

// add orders for physical products
physicalProductsOrderManager.addOrder({ products: ["book", "notebook"], totalQuantity: 2}, 100)
physicalProductsOrderManager.addOrder({ products: ["bracelet", "shoes"], totalQuantity: 4}, 200)
physicalProductsOrderManager.addOrder({ products: ["cellphone", "case"], totalQuantity: 3}, 200)

// show orders
console.log(physicalProductsOrderManager.getOrders(), '\n');

// get order by orderId
console.log(physicalProductsOrderManager.getOrder(2), '\n');

// get total number of orders
console.log(`Total orders: ${physicalProductsOrderManager.getTotalOrders()}\n`);

// get total sales
console.log(`Total sales (US$): ${physicalProductsOrderManager.getTotalSales()}\n`);

// create an instance of the OrderManager class for digital products
const digitalProductsOrderManager = new OrderManager("Digital Products");

// add orders for physical products
digitalProductsOrderManager.addOrder({ products: ["eBook", "Netflix subscription"], totalAmount: 2}, 50)
digitalProductsOrderManager.addOrder({ products: ["wallpaper", "ChatGPT subscription"], totalAmount: 4}, 30)
digitalProductsOrderManager.addOrder({ products: ["storage", "cloud service"], totalAmount: 3}, 100)
digitalProductsOrderManager.addOrder({ products: ["Youtube Premium", "Google services"], totalAmount: 2}, 45)

// show orders
console.log(digitalProductsOrderManager.getOrders(), '\n');

// get order by orderId
console.log(digitalProductsOrderManager.getOrder(3), '\n');

// get total number of orders
console.log(`Total orders: ${digitalProductsOrderManager.getTotalOrders()}\n`);

// get total sales
console.log(`Total sales (US$): ${digitalProductsOrderManager.getTotalSales()}\n`);