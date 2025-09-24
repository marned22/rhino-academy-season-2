class User {
    constructor(username, email){
        this.username = username;
        this.email = email;
    }
    login(){
        console.log(`${this.username} has logged in`)
    }
    logout(){
        console.log(`${this.username} has logged out`)
    }
}

class Customer extends User {
    constructor(username, email, cart = []){
        super(username, email);
        this.cart = cart;
    }
    addToCart(item){
        this.cart.push(item)
    }
    removeFromCart(item){
        const index = this.cart.indexOf(item);
        if (index > -1) {
            this.cart.splice(index, 1); 
        }
    }
    viewCart(){
        console.log(`${this.username} cart: ${this.cart.join(' ,')}`);
    }
    renderCartToHtml(){
        const cartList = this.cart.map(item => `<li>${item}</li>`).join('');
        return `<h2>Customer's Cart</h2><ul>${cartList}</ul>`;
    }
}
class Admin extends User {
    constructor(username, email, roles = []){
        super(username, email);
        this.roles = roles;
    }
    addRoles(role){
        this.roles.push(role)
    }
    viewRoles(){
        console.log(`Roles: ${this.roles.join(' ,')}`);
    }
}

const james = new Customer('james99', 'james@gmail.com')

james.login();
james.addToCart('New balance trainers');
james.addToCart('Apple watch');
james.addToCart('Laptop');
james.viewCart();
james.removeFromCart('Laptop');
james.viewCart();
james.renderCartToHtml();

document.getElementById('cart-container').innerHTML = james.renderCartToHtml();

james.logout();

const admin = new Admin('admin01', 'admin@gmail.com');

admin.login();
admin.addRoles('Manager');
admin.addRoles('Moderator');
admin.viewRoles();
admin.logout();