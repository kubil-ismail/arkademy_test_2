<?php
defined('BASEPATH') or exit('No direct script access allowed');

class CategoryModel extends CI_Model
{
    public function getCategory()
    {
        $result = $this->db->get('category')->result_array();
        return $result;
    }
}
