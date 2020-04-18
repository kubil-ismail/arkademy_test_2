$(document).ready(function () {
    let url = $('.urlRest').val();

    // Search Function
    $('.dataTables_filter').keyup(function () {
        $.ajax({
            url: url + 'search',
            data: {
                query: $('.dataTables_filter').val()
            },
            dataType: 'json',
            cache: false,
            success: function (res) {
                $('#tbody').html('');
                if (res.length > 0) {
                    setData(res);
                } else {
                    $('#tbody').append(`
                        <tr>
                            <td style="width:50%">Data tidak tersedia...</td>
                        <tr>
                    `);
                }
            }
        });
    });

    // Add Function
    $('.btn-add').click(function () {
        let cashier_id = $('#addCashier').val();
        let category_id = $('#addCategory').val();
        let product = $('#addProduk').val();
        let price = $('#addPrice').val();

        addData(product, price, cashier_id, category_id);
        $('#addModal').modal('hide');
    });

    // Edit Function
    $('#editModal').on('show.bs.modal', function (event) {
        let button = $(event.relatedTarget) // Button that triggered the modal
        let id = button.data('id') // Extract info from data-* attributes
        let productShow = button.data('product') // Extract info from data-* attributes
        let priceShow = button.data('price') // Extract info from data-* attributes
        let modal = $(this)


        modal.find('#produkInput').val(productShow)
        modal.find('#priceInput').val(`${priceShow}`)

        $('.btn-edit').click(function () {
            let cashier_id = $('#cashierInput').val();
            let category_id = $('#categoryInput').val();
            let product = $('#produkInput').val();
            let price = $('#priceInput').val();

            editData(id, product, price, cashier_id, category_id);
        })
    })

    // Delete Function
    $('#deleteModal').on('show.bs.modal', function (event) {
        let button = $(event.relatedTarget) // Button that triggered the modal
        let id = button.data('id') // Extract info from data-* attributes
        
        $('.btn-delete').click(function() {
            deleteData(id)
        });
    })


    // Set data
    function setData(data) {
        $('#tbody').html(' ');
        data.map((val, key) => {
            $('#tbody').append(`
                <tr>
                    <td>${++key}</td>
                    <td>${val.cashier_name}</td>
                    <td>${val.product_name}</td>
                    <td>${val.category_name}</td>
                    <td>${val.product_price}</td>
                    <td>
                        <div class="btn-group" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-link" data-toggle="modal" data-target="#editModal" data-product="${val.product_name}" data-price="${val.product_price}" data-id="${val.id}">
                                <i class="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i>
                            </button>
                            <button type="button" class="btn btn-link delete-btn" data-toggle="modal" data-target="#deleteModal" data-id="${val.id}">
                                <i class="fa fa-trash-o fa-2x" aria-hidden="true"></i>
                            </button>
                        </div>
                    </td>
                </tr>
            `);
        })
    }

    // Add New Data
    function addData(product, price, cashier_id, category_id) {
        $.ajax({
            url: url + 'insert',
            data: {
                name: product,
                price: price,
                id_category: category_id,
                id_cashier: cashier_id
            },
            dataType: 'json',
            cache: false,
            success: function (res) {
                if (res.status === true) {
                    Swal.fire({
                        title: "Berhasil ditambah",
                        icon: 'success',
                        text: "Data berhasil ditambah",
                        timer: "2000",
                        onClose: () => {
                            setData(res.data)
                        }
                    });
                } else {
                    Swal.fire({
                        title: "Gagal ditambah",
                        icon: 'error',
                        text: "Data Gagal ditambah",
                        timer: "2000"
                    });
                }
            }
        })
    }

    // Send edit
    function editData(id, product, price, cashier_id, category_id) {
        $.ajax({
            url: url + 'update',
            data: {
                id: id,
                name: product,
                price: price,
                id_category: category_id,
                id_cashier: cashier_id
            },
            dataType: 'json',
            cache: false,
            success: function (res) {
                if (res.status === true) {
                    Swal.fire({
                        title: "Berhasil diubah",
                        icon: 'success',
                        text: "Data berhasil Diubah",
                        timer: "2000",
                        onClose: () => {
                            window.location.replace(url);
                        }
                    });
                } else {
                    Swal.fire({
                        title: "Gagal diubah",
                        icon: 'error',
                        text: "Data Gagal Diubah",
                        timer: "2000"
                    });
                }
            }
        })
    }

    // Delete data
    function deleteData(id) {
        $.ajax({
            url: url + 'delete',
            data: {
                id: id
            },
            dataType: 'json',
            cache: false,
            success: function (res) {
                if (res.status === true) {
                    Swal.fire({
                        title: "Berhasil dihapus",
                        icon: 'success',
                        text: "Data Berhsail Di Hapus",
                        timer: "2000",
                        onClose: () => {
                            setData(res.data)
                        }
                    });
                } else {
                    Swal.fire({
                        title: "Gagal dihapus",
                        icon: 'error',
                        text: "Data Gagal Di Hapus",
                        timer: "2000"
                    });
                }
                $('#deleteModal').modal('hide');
            }
        });
    }
})