<?php table_url(); ?>

<table class="table table-borderless shadow-sm rounded-table" id="<?= $table_title ?>" width="100%" cellspacing="0">
    <thead>
        <tr class="table-warning">
            <?php foreach ($table_key as $res) : ?>
                <th scope="col"><?= $res ?></th>
            <?php endforeach; ?>
        </tr>
    </thead>
    <tbody id="tbody">
        <?php foreach ($table_data as $res => $value) : ?>
            <tr>
                <td><?= ++$res; ?></td>
                <td><?= $value['cashier_name'] ?></td>
                <td><?= $value['product_name'] ?></td>
                <td><?= $value['category_name'] ?></td>
                <td><?= $value['product_price'] ?></td>
                <td>
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-link" data-toggle="modal" data-target="#editModal">
                            <i class="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i>
                        </button>
                        <button type="button" class="btn btn-link delete-btn" data-id="<?= $value['id'] ?>">
                            <i class="fa fa-trash-o fa-2x" aria-hidden="true"></i>
                        </button>
                    </div>
                </td>
            </tr>
        <?php endforeach; ?>
    </tbody>
</table>

<script>
    // Call the dataTables jQuery plugin
    $(document).ready(function() {
        $('#<?= $table_title ?>').DataTable();
    });
</script>