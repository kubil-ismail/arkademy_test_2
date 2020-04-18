<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Controller extends CI_Controller
{
    /**
     * Default controller
     *
     */

    public function __construct()
    {
        parent::__construct();

        $this->load->model('ProductModel');
        $this->load->model('CategoryModel');
        $this->load->model('CashierModel');
    }


    //  Index Page
    public function index()
    {
        // Data for send to view
        $data['title'] = 'Home | Kubi Code';
        $data['category'] = $this->CategoryModel->getCategory();
        $data['cashier'] = $this->CashierModel->getCashier();  

        // Use table function
        $data['table_title'] = 'data_table';
        $data['table_key'] = ['No', 'Cashier', 'Product', 'Category', 'Price', 'Action'];
        $data['table_data'] = $this->ProductModel->getProduct();

        // Load view
        $this->load->view('layouts/header', $data);
        $this->load->view('home/index');
        $this->load->view('layouts/footer');
    }

    // Return search value
    public function search()
    {
        header('Content-Type: application/json');
        echo json_encode($this->ProductModel->getProduct($_GET['query']));
    }

    // Add Data
    public function insert()
    {
        header('Content-Type: application/json');
        echo json_encode($this->ProductModel->insertProduct($_GET));
    }

    // Edit Data
    public function update()
    {
        header('Content-Type: application/json');
        echo json_encode($this->ProductModel->updateProduct($_GET));
    }

    // Delete Data
    public function delete()
    {
        header('Content-Type: application/json');
        echo json_encode($this->ProductModel->deleteProduct($_GET['id']));
    }

    // 404 Not Found
    public function page_not_found()
    {
        $this->load->view('errors/404');
    }
}
