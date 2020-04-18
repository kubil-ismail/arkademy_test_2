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

    public function insertProduct($val)
    {
        $data = [
            'name' => $val['name'],
            'price' => $val['price'],
            'id_cashier' => $val['id_cashier'],
            'id_category' => $val['id_category']
        ];

        $this->db->insert('product', $data);

        $result['status'] = true;
        $result['data'] = $this->getProduct();
        return $result;
    }

    public function updateProduct($val) {
        $data = [
            'name' => $val['name'],
            'price' => $val['price'], 
            'id_cashier' => $val['id_cashier'], 
            'id_category' => $val['id_category'] 
        ];

        $this->db->where('id',$val['id']);
        $this->db->update('product', $data);

        $result['status'] = true;
        $result['data'] = $this->getProduct();
        return $result;
    }

    public function deleteProduct(INT $id)
    {
        $this->db->where('id', $id);
        $this->db->delete('product');

        $result['status'] = true;
        $result['data'] = $this->getProduct();        
        return $result;
    }
}
