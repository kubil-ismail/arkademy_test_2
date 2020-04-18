const data = [
    {
        cashier: 'Pevita Pearce',
        product: 'Latte',
        category: 'Drink',
        price: '10,000'
    },
    {
        cashier: 'Raisa Andriana',
        product: 'Cake',
        category: 'Food',
        price: '15,000'
    },
    {
        cashier: 'Raisa Andriana',
        product: 'Fried Rice',
        category: 'Food',
        price: '30,000'
    },
    {
        cashier: 'Pevita Pearce',
        product: 'Gudeg',
        category: 'Food',
        price: '35,000'
    },
    {
        cashier: 'Joko Purwadhi',
        product: 'Ice Tea',
        category: 'Drink',
        price: '55,0000'
    },
    {
        cashier: 'Bilkis Ismail',
        product: 'Takoyaki',
        category: 'Food',
        price: '10,000'
    },

]

data.map((val, key) => {
    $('#tbody').append(`
        <tr>
            <th scope="row">${++key}</th>
            <td>${val.cashier}</td>
            <td>${val.product}</td>
            <td>${val.category}</td>
            <td>Rp ${val.price}</td>
            <td>
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-link" data-toggle="modal" data-target="#editModal" data-product="${val.product}" data-cashier="${val.cashier}" data-category="${val.category}" data-price="${val.price}">
                        <i class="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i>
                    </button>
                    <button type="button" class="btn btn-link" data-toggle="modal" data-target="#deleteModal" data-id="#${key}" data-cashier="${val.cashier}">
                        <i class="fa fa-trash-o fa-2x" aria-hidden="true"></i>
                    </button>
                </div>
            </td>
        </tr>
    `);
});