/**
 * This class creates the data sturcture for an item object
 */
var Item = /** @class */ (function () {
    function Item(itemName, itemPrice) {
        this.name = itemName;
        this.price = itemPrice;
    }
    return Item;
}());
/**
 * This class creates the data sturcture for an cart object
 */
var Cart = /** @class */ (function () {
    function Cart() {
        this.total = 0;
        this.shoppingCart = []; //the list of items in the cart
    }
    /**
     * This function works in conjunction with the addToCart() function
     * and is used to add the item from the item list at
     * @param i the index from the item list given from the helper function
     */
    Cart.prototype.add = function (i) {
        this.total += itemList[i].price;
        this.shoppingCart.push(itemList[i]);
        localStorage.setItem("key", JSON.stringify(this.shoppingCart));
        localStorage.setItem("sizeKey", JSON.stringify(this.getSize()));
        console.log("ADDED TO CART: " + itemList[i].name);
        console.log("CURRENTLY IN CART: ");
        console.log(JSON.stringify(this.shoppingCart));
        console.log("TOTAL: " + this.total);
        console.log("TOTAL SIZE: " + this.getSize());
    };
    Cart.prototype.getSize = function () {
        return this.shoppingCart.length;
    };
    Cart.prototype.getTotal = function () {
        return this.total;
    };
    return Cart;
}());
/**
 * This function creates a list of item cards from a list of items object
 * @param itemList the list of item objects
 */
function addItemCard(itemList) {
    var shoppingCart;
    for (var i = 0; i < itemList.length; i++) {
        var div = document.createElement("div"); //create item card
        div.setAttribute("class", "card");
        div.setAttribute("style", "width: 12rem; height:6rem");
        div.innerText = "Name: " + itemList[i].name +
            "\nPrice: " + itemList[i].price;
        var button = document.createElement("input"); //create button       
        button.setAttribute("type", "button");
        button.setAttribute("style", "width: 3rem");
        button.setAttribute("value", "Add");
        button.setAttribute("onclick", "addToCart(" + i + ")"); //onclick calls a helper function that accesses the  cart class
        div.appendChild(button);
        document.body.appendChild(div);
    }
}
/**
 * This function is a helper function used to access the cart class'
 * add function
 * @param i the index of the item in the list added to the cart
 */
var obj = new Cart(); //one cart obj!
function addToCart(i) {
    obj.add(i);
} //helper function
var itemToCart = []; //initalizes the different item objects
var itemList = [new Item("Apple", 2),
    new Item("Banana", 1),
    new Item("Carrot", 5),
    new Item("Donut", 4),
    new Item("Egg", 6),
    new Item("Grapes", 1)];
addItemCard(itemList); //create item cards
