<?php
function get_variable_name(&$var333, $scopeVarArr = NULL) {
    if (NULL == $scopeVarArr) {
        $scopeVarArr = $GLOBALS;
    }
    $tmp  = $var333;
     $var   = "tmp_exists_" . mt_rand();
   // $name = array_search($var, $scope, TRUE);
    $name = array_search($var333, $scopeVarArr);
    $var333   = $tmp;
    return $name;
}

$var11=11;
//var_dump(get_variable_name( $var11,get_defined_vars()));

