<?php
defined('BASEPATH') or exit('No direct script access allowed');

class CashierModel extends CI_Model
{
    public function getCashier()
    {
        $result = $this->db->get('cashier')->result_array();
        return $result;
    }
}
