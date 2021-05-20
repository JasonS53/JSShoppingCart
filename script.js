let items = [];

let counter = 0;
function AddToCart()
{
    counter ++;
    console.log(counter);
}

function Tourtiere()
{
   let itemName = "Tourtiere"
   let itemPrice = 7.95
   let newItems = {
       item: itemName,
       price: itemPrice
    }
    items.push(newItems);
}

function Soondubu()
{
   let itemName = "Soondubu"
   let itemPrice = 12.00
   let newItems = {
       item: itemName,
       price: itemPrice
    }
    items.push(newItems);
}

function PalakPaneer()
{
   let itemName = "Palak Paneer"
   let itemPrice = 9.99
   let newItems = {
       item: itemName,
       price: itemPrice
    }
    items.push(newItems);
}

function PanangCurry()
{
   let itemName = "Panang Curry"
   let itemPrice = 8.00
   let newItems = {
       item: itemName,
       price: itemPrice
    }
    items.push(newItems);
}

function PatatasBravas()
{
   let itemName = "Patatas Bravas"
   let itemPrice = 6.50
   let newItems = {
       item: itemName,
       price: itemPrice
    }
    items.push(newItems);
}

let sum = 0
function DisplayCart()
{
    for(let i = 0; i<items.length;i++)
    {
        console.log(items[i].item);
        console.log(items[i].price);
        sum += items[i].price
    }
    console.log(`subtotal: $${sum}`);
    total = sum * 1.06;
    totalround = total.toFixed(2)
    console.log(`total with tax: $${totalround}`)
}


