$(document).ready(function () {
    $('#deleteModal').on('show.bs.modal', function (event) {
        let button = $(event.relatedTarget) // Button that triggered the modal
        let id = button.data('id') // Extract info from data-* attributes
        let cashier = button.data('cashier') // Extract info from data-* attributes
        let modal = $(this)

        modal.find('.delete-cashier').text(cashier);
        modal.find('.delete-id').text(id)
    });

    $('#editModal').on('show.bs.modal', function (event) {
        let button = $(event.relatedTarget) // Button that triggered the modal
        let product = button.data('product') // Extract info from data-* attributes
        let cashier = button.data('cashier') // Extract info from data-* attributes
        let category = button.data('category') // Extract info from data-* attributes
        let price = button.data('price') // Extract info from data-* attributes
        let modal = $(this)


        modal.find('#cashierInput').append(
            $("<option selected></option>")
                .text(cashier)
        )
        modal.find('#categoryInput').append(
            $("<option selected></option>")
                .text(category)
        )
        modal.find('#produkInput').val(product)
        modal.find('#priceInput').val(`Rp ${price}`)
    });
})