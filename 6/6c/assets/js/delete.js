$(document).ready(function () {
    let url = $('.urlRest').val();

    $('.delete-btn').click(function () {
        let id = $(this).data('id');
        $.ajax({
            url: url + 'delete',
            data: {
                id: id
            },
            dataType: 'json',
            cache: false,
            success: function (res) {
                if(res === true) {
                    Swal.fire({
                        title: "Data Dihapus",
                        icon: 'success',
                        text: "Data Berhsail Di Hapus",
                        timer: "2000",
                        onClose: () => {
                            window.location.replace(url);
                        }
                    });
                } else {
                    Swal.fire({
                        title: "Hapus Gagal",
                        icon: 'error',
                        text: "Data Gagal Di Hapus",
                        timer: "2000"
                    });
                }
            }
        });
    });
})