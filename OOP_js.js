class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }    
    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}


class ShoppingCart {
    constructor() {
        this.items = [];
    }
        
    addItem(product, quantity) {
        
        const existingItem = this.items.find(item => item.product.id == product.id);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push(new ShoppingCartItem(product, quantity));
        }
    }
    
    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id != productId);
    }
    
    getTotal() {
        let total = 0;
        for(let i = 0; i < this.items.length; i++){
            total += this.items[i].getTotalPrice() * this.items[i].quantity;
        }
        return total;
    }

    
    displayCart() {
        if (this.items.length == 0) {
            console.log('The shopping cart is empty.');
        } else {
            console.log('Shopping Cart Items:');
            this.items.forEach(item => {
                console.log(`- ${item.product.name} (x${item.quantity}): $${item.getTotalPrice()}`);
            });
            console.log(`Total: $${this.getTotal()}`);
        }
    }
}

const product_1 = new Product(1, 'product_1', 120);
const product_2 = new Product(2, 'product_2', 60);
const product_3 = new Product(3, 'product_3', 85);


const cart = new ShoppingCart();


cart.addItem(product_1, 3);
cart.addItem(product_2, 2);
cart.addItem(product_3, 1);


cart.displayCart();

cart.removeItem(2);

cart.displayCart();

