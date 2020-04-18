$(document).ready(function () {
    let url = $('.urlRest').val();
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
                    res.map((val, key) => {
                        $('#tbody').append(`
                                <tr>
                                    <td>${++key}</td>
                                    <td>${val.cashier_name}</td>
                                    <td>${val.product_name}</td>
                                    <td>${val.category_name}</td>
                                    <td>${val.product_price}</td>
                                    <td>
                                        <div class="btn-group" role="group" aria-label="Basic example">
                                            <button type="button" class="btn btn-link" data-toggle="modal" data-target="#editModal" >
                                                <i class="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i>
                                            </button>
                                            <button type="button" class="btn btn-link" data-toggle="modal" data-target="#deleteModal">
                                                <i class="fa fa-trash-o fa-2x" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            `);
                    })
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
});