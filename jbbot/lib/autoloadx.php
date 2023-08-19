<?php
function InIncFiles(string $searchFile)
{
    $get_included_files553 = get_included_files();
    foreach ($get_included_files553 as $f1) {
        $basename2 = strtolower(basename($searchFile));
        $basename = strtolower(basename($f1));
        if ($basename2 == $basename) {

            return true;
        }

    }
    return false;
}