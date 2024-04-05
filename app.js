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
    update_total();

});

// Item 2 Value
var Item_2_Enter = document.getElementById('Item_2_Enter');
Item_2_Enter.addEventListener('click', function(){
    var item_2_price = 49;
    var Item_2_quantity = document.querySelector('#Item_2_quantity').value;
    var total_price_quantity = item_2_price * Item_2_quantity;
    var item_2_object = {
        item_2_item: 'ROCKY ROAD',
        item_2_price: 49,
        Item_2_quantity: Item_2_quantity,
        total_price_quantity: total_price_quantity
    };
    item_orders.push(item_2_object);

    
    item_orders.push(item_2_object);
    const Ordered_Items = document.getElementById('Ordered_Items');
    var cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    var cardBodyDiv = document.createElement('div');
    cardBodyDiv.classList.add('card-body');
    var cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = item_2_object.item_2_item;
    var cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = "QTY: "+ item_2_object.Item_2_quantity;
    var cardText_total = document.createElement('p');
    cardText_total.classList.add('card-text');
    cardText_total.textContent = "PHP: "+ item_2_object.total_price_quantity;
    cardBodyDiv.appendChild(cardTitle);
    cardBodyDiv.appendChild(cardText);
    cardBodyDiv.appendChild(cardText_total);
    cardDiv.appendChild(cardBodyDiv);
    Ordered_Items.appendChild(cardDiv);
    update_total();


});

// Item 3 Value
var Item_3_Enter = document.getElementById('Item_3_Enter');
Item_3_Enter.addEventListener('click', function(){
    var item_3_price = 39;
    var Item_3_quantity = document.querySelector('#Item_3_quantity').value;
    var total_price_quantity = item_3_price * Item_3_quantity;
    var item_3_object = {
        item_3_item: 'BUBBLE GUM',
        item_3_price: 39,
        Item_3_quantity: Item_3_quantity,
        total_price_quantity: total_price_quantity
    };
    item_orders.push(item_3_object);
    const Ordered_Items = document.getElementById('Ordered_Items');
    var cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    var cardBodyDiv = document.createElement('div');
    cardBodyDiv.classList.add('card-body');
    var cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = item_3_object.item_3_item;
    var cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = "QTY: "+ item_3_object.Item_3_quantity;
    var cardText_total = document.createElement('p');
    cardText_total.classList.add('card-text');
    cardText_total.textContent = "PHP: "+ item_3_object.total_price_quantity;
    cardBodyDiv.appendChild(cardTitle);
    cardBodyDiv.appendChild(cardText);
    cardBodyDiv.appendChild(cardText_total);
    cardDiv.appendChild(cardBodyDiv);
    Ordered_Items.appendChild(cardDiv);
    update_total();

});


// Item 4 Value
var Item_4_Enter = document.getElementById('Item_4_Enter');
Item_4_Enter.addEventListener('click', function(){
    var item_4_price = 29;
    var Item_4_quantity = document.querySelector('#Item_4_quantity').value;
    var total_price_quantity = item_4_price * Item_4_quantity;
    var item_4_object = {
        item_4_item: 'COKE',
        item_4_price: 29,
        Item_4_quantity: Item_4_quantity,
        total_price_quantity: total_price_quantity
    };
    item_orders.push(item_4_object);
    const Ordered_Items = document.getElementById('Ordered_Items');
    var cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    var cardBodyDiv = document.createElement('div');
    cardBodyDiv.classList.add('card-body');
    var cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = item_4_object.item_4_item;
    var cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = "QTY: "+ item_4_object.Item_4_quantity;
    var cardText_total = document.createElement('p');
    cardText_total.classList.add('card-text');
    cardText_total.textContent = "PHP: "+ item_4_object.total_price_quantity;
    cardBodyDiv.appendChild(cardTitle);
    cardBodyDiv.appendChild(cardText);
    cardBodyDiv.appendChild(cardText_total);
    cardDiv.appendChild(cardBodyDiv);
    Ordered_Items.appendChild(cardDiv);
    update_total();
});





//ORDERS//
var total_orders = document.getElementById('total_amount');

function update_total() {
    var totalOrderPrice = 0;
    for (var i = 0; i < item_orders.length; i++) {
        totalOrderPrice += item_orders[i].total_price_quantity;
    }
    total_orders.textContent = totalOrderPrice;
}

var payment = document.getElementById('payment_button');
payment.addEventListener('click', function() {
    var payment_price = parseFloat(document.getElementById('payment_price').value);

    if (payment_price < total_orders.textContent) {
        alert("MAGBAYAD KA NAMAN NG TAMA TOL!");
        
    } else {
        var change = payment_price - parseFloat(total_orders.textContent);
        alert("SALAMAT SA BAYAD Your change is PHP: " + change.toFixed(2));
    }
});
