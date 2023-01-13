let catalog = [
    {
        'id' : 1,
        'name' : 1,
        'description' : 1,
        'sizes' : 1,
        'price' : 1,
        'available' : 1,
    }, 
    {
        'id' : 2,
        'name' : 2,
        'description' : 2,
        'sizes' : 2,
        'price' : 2,
        'available' : 2,
    },
    {
        'id' : 3,
        'name' : 3,
        'description' : 3,
        'sizes' : 3,
        'price' : 3,
        'available' : 3,
    }, 
    {
        'id' : 4,
        'name' : 4,
        'description' : 4,
        'sizes' : 4,
        'price' : 4,
        'available' : 4,
    }, 
    {
        'id' : 5,
        'name' : 5,
        'description' : 5,
        'sizes' : 5,
        'price' : 5,
        'available' : 5,
    }, 
];

let basket = [
    {
        'good' : catalog[0],
        'amount' : 2,
    },
    {
        'good' : catalog[3],
        'amount' : 1,
    },
    {
        'good' : catalog[2],
        'amount' : 3,
    },
    {
        'good' : catalog[1],
        'amount' : 2,
    },
]
const add_to_basket = function(id, amount) {
for (let i = 0; i < catalog.length; i++) {        
if (catalog[i].id == undefined) {
return console.log("Такого товара нет")
}
if (catalog[i].id == id) {
new_basket_good = {
'good' : catalog[id],
'amount' : amount,
}
basket.push(new_basket_good)
return /* console.log("Товар добавлен в корзину") */
}
}
return /* console.log("Такого товара нет") */ 
}
const delete_from_basket = function(id) {
for (let i=0; i < basket.length; i++) {
if (basket[i].good.id == id) {
basket.splice(i,1)
return /* console.log("Товар удален") */
}
}
return /* console.log("Товара с таким ID в корзине нет") */ 
}
const delete_all_from_basket = function() {
basket.length = 0
}
const counter = function() {
    totalAmount = 0
    totalSumm = 0

    for (let i=0; i < basket.length; i++) {
        totalAmount += basket[i].amount
        totalSumm += basket[i].amount * basket[i].good.price
    }
    totalObject = {
        'totalAmount' : totalAmount, 
        'totalSumm': totalSumm,
    }
    return console.log(totalObject)
}

// Исполнение
delete_from_basket(0)
delete_from_basket(0)
delete_all_from_basket(0)
add_to_basket(1, 5)
add_to_basket(2, 3)
counter()