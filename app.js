var item_orders = [];

// Item 1 Value
var Item_1_Enter = document.getElementById('Item_1_Enter');
Item_1_Enter.addEventListener('click', function(){
    var item_1_price = 59;
    var Item_1_quantity = document.querySelector('#Item_1_quantity').value;
    var total_price_quantity = item_1_price * Item_1_quantity;
    var item_1_object = {
        item_1_item: 'COOKIES CREAM',
        item_1_price: 59,
        Item_1_quantity: Item_1_quantity,
        total_price_quantity: total_price_quantity
    };
    item_orders.push(item_1_object);




    const Ordered_Items = document.getElementById('Ordered_Items');
   
    var cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    var cardBodyDiv = document.createElement('div');
    cardBodyDiv.classList.add('card-body');

    var cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = item_1_object.item_1_item;

    var cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = "QTY: "+ item_1_object.Item_1_quantity;

    var cardText_total = document.createElement('p');
    cardText_total.classList.add('card-text');
    cardText_total.textContent = "PHP: "+ item_1_object.total_price_quantity;

    
    cardBodyDiv.appendChild(cardTitle);
    cardBodyDiv.appendChild(cardText);
    cardBodyDiv.appendChild(cardText_total);

    cardDiv.appendChild(cardBodyDiv);
    Ordered_Items.appendChild(cardDiv);

    


});

// Item 2 Value
var Item_2_Enter = document.getElementById('Item_2_Enter');
Item_2_Enter.addEventListener('click', function(){
    var item_2_price = 49;
    var Item_2_quantity = document.querySelector('#Item_2_quantity').value;
    var total_price_quantity = item_2_price * Item_2_quantity;
    var item_2_object = {
        item_2_price: 49,
        total_price_quantity: total_price_quantity
    };
    item_orders.push(item_2_object);
    // console.log(item_orders[0].total_price_quantity);
});

// Item 3 Value
var Item_3_Enter = document.getElementById('Item_3_Enter');
Item_3_Enter.addEventListener('click', function(){
    var item_3_price = 39;
    var Item_3_quantity = document.querySelector('#Item_3_quantity').value;
    var total_price_quantity = item_3_price * Item_3_quantity;
    var item_3_object = {
        item_3_price: 39,
        total_price_quantity: total_price_quantity
    };
    item_orders.push(item_3_object);
    // console.log(item_orders[0].total_price_quantity);
});


// Item 4 Value
var Item_4_Enter = document.getElementById('Item_4_Enter');
Item_4_Enter.addEventListener('click', function(){
    var item_4_price = 29;
    var Item_4_quantity = document.querySelector('#Item_4_quantity').value;
    var total_price_quantity = item_4_price * Item_4_quantity;
    var item_4_object = {
        item_4_price: 29,
        total_price_quantity: total_price_quantity
    };
    item_orders.push(item_4_object);
    console.log(item_orders[0].total_price_quantity);
});





//ORDERS//



