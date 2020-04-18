<script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>
</head>

<body>
    <header>
        <nav class="navbar navbar-expand-lg navbar-white bg-shite shadow-sm">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img src="<?= asset_url() . 'img/logo.png' ?>" alt="Logo" width="100">
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fa fa-bars fa-lg" aria-hidden="true"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <form class="form-inline my-2 mx-auto">
                        <input class="form-control mr-sm-2 w-100 nav-form dataTables_filter" type="search" placeholder="Search..." aria-label="Search">
                    </form>
                    <button class="btn btn-warning my-2 my-sm-0 shadow-sm" type="submit" data-toggle="modal" data-target="#addModal">ADD</button>
                </div>
            </div>
        </nav>
    </header>

    <main>
        <section class="content my-5">
            <div class="container table-responsive">
                <!-- Use table -->
                <?php
                table($table_title, $table_key, $table_data);
                ?>
            </div>
        </section>
    </main>

    <!-- ADD MODAL -->
    <div class="modal fade" id="addModal" tabindex="-1" role="dialog" aria-labelledby="addModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header border-0">
                    <h5 class="modal-title font-weight-bold" id="addModalLabel">ADD</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true" class="text-danger">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <select class="form-control" id="addCashier">
                                <option disabled>-- Pilih Kasir --</option>
                                <?php foreach ($cashier as $key => $value) : ?>
                                    <option value="<?= $value['id'] ?>"><?= $value['name'] ?></option>
                                <?php endforeach; ?>
                            </select>
                        </div>
                        <div class="form-group">
                            <select class="form-control" id="addCategory">
                                <option disabled>-- Pilih Kategori --</option>
                                <?php foreach ($category as $key => $value) : ?>
                                    <option value="<?= $value['id'] ?>"><?= $value['name'] ?></option>
                                <?php endforeach; ?>
                            </select>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" id="addProduk" placeholder="Nama Produk ..." required>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" id="addPrice" placeholder="Harga Produk ..." required>
                        </div>
                        <button type="button" class="btn btn-warning shadow-sm float-right btn-add">Add</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- Edit MODAL -->
    <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="editModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header border-0">
                    <h5 class="modal-title font-weight-bold" id="editModalLabel">Edit</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true" class="text-danger">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <select class="form-control" id="cashierInput">
                                <option disabled>-- Pilih Kasir --</option>
                                <?php foreach ($cashier as $key => $value) : ?>
                                    <option value="<?= $value['id'] ?>"><?= $value['name'] ?></option>
                                <?php endforeach; ?>
                            </select>
                        </div>
                        <div class="form-group">
                            <select class="form-control" id="categoryInput">
                                <option disabled>-- Pilih Kategori --</option>
                                <?php foreach ($category as $key => $value) : ?>
                                    <option value="<?= $value['id'] ?>"><?= $value['name'] ?></option>
                                <?php endforeach; ?>
                            </select>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" id="produkInput" placeholder="Nama Produk ...">
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" id="priceInput" placeholder="Harga Produk ...">
                        </div>
                        <button type="button" class="btn btn-warning shadow-sm float-right btn-edit">Edit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- Delete Modal -->
    <div class="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="deleteModal" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header border-0">
                    <h5 class="modal-title font-weight-bold" id="deleteModal">Delete</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true" class="text-danger">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p>Data akan di hapus permanen ?</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-danger btn-delete">Delete</button>
                </div>
            </div>
        </div>
    </div>