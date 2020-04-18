<?php
defined('BASEPATH') or exit('No direct script access allowed');

class ProductModel extends CI_Model
{
    public function getProduct($query = null)
    {
        if(is_null($query)) {
            $this->db->select('product.id, product.name AS product_name, product.price AS product_price');
            $this->db->select('category.name AS category_name, cashier.name AS cashier_name');
            $this->db->join('category', 'product.id_category = category.id');
            $this->db->join('cashier', 'product.id_cashier = cashier.id');
            $result = $this->db->get('product')->result_array();
        } else {
            $this->db->select('product.id, product.name AS product_name, product.price AS product_price');
            $this->db->select('category.name AS category_name, cashier.name AS cashier_name');
            $this->db->join('category', 'product.id_category = category.id');
            $this->db->join('cashier', 'product.id_cashier = cashier.id');
            $this->db->like('product.name', $query);
            $this->db->or_like('cashier.name', $query);
            $result = $this->db->get('product')->result_array();
        }

        return $result;
    }

    public function deleteProduct(INT $id)
    {
        $this->db->where('id', $id);
        $result = $this->db->delete('product');
        
        return $result;
    }
}
