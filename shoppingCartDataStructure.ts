/**
 * This class creates the data sturcture for an item object
 */
class Item{
    name:string;
    price:number;

    constructor(itemName:string, itemPrice:number)
    {
        this.name = itemName;
        this.price = itemPrice;
    }
}

/**
 * This class creates the data sturcture for an cart object
 */
class Cart{
    total:number = 0;
    shoppingCart:Array<Item> =[];                                               //the list of items in the cart

    /**
     * This function works in conjunction with the addToCart() function
     * and is used to add the item from the item list at 
     * @param i the index from the item list given from the helper function
     */
    add(i:number):void{                     
        this.total += itemList[i].price;
        this.shoppingCart.push(itemList[i]);

        localStorage.setItem("key", JSON.stringify(this.shoppingCart));
        localStorage.setItem("sizeKey", JSON.stringify(this.getSize()));
        console.log("ADDED TO CART: " + itemList[i].name);
        console.log("CURRENTLY IN CART: ");
        console.log(JSON.stringify(this.shoppingCart));
        console.log("TOTAL: " + this.total);
        console.log("TOTAL SIZE: " + this.getSize());
    }
    getSize():number{
        return this.shoppingCart.length;
    }
    getTotal():number{
        return this.total;
    }
    
}
/**
 * This function creates a list of item cards from a list of items object
 * @param itemList the list of item objects
 */
function addItemCard(itemList:Item[]){
    let shoppingCart:Cart;                                              

    for(var i = 0; i < itemList.length; i++){
        let div = document.createElement("div");                        //create item card
        div.setAttribute("class", "card");
        div.setAttribute("style", "width: 12rem; height:6rem");
        div.innerText = "Name: " + itemList[i].name +
                        "\nPrice: " + itemList[i].price;
    
        let button = document.createElement("input");                   //create button       
        button.setAttribute("type","button");
        button.setAttribute("style", "width: 3rem");
        button.setAttribute("value", "Add");
        button.setAttribute("onclick", "addToCart(" + i + ")");         //onclick calls a helper function that accesses the  cart class
        div.appendChild(button);
        document.body.appendChild(div);
    }
}


/**
 * This function is a helper function used to access the cart class'
 * add function
 * @param i the index of the item in the list added to the cart
 */
const obj = new Cart();                                                 //one cart obj!
function addToCart(i:number) 
{ 
    
    obj.add(i); 
}                                                                       //helper function

var itemToCart = [];                                                    //initalizes the different item objects
let itemList:Item[] = [ new Item("Apple", 2),
                        new Item("Banana", 1),
                        new Item("Carrot", 5),
                        new Item("Donut", 4),
                        new Item("Egg", 6),
                        new Item("Grapes", 1) ];
addItemCard(itemList);                                                  //create item cards