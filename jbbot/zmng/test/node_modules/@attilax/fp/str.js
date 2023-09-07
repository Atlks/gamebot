function strpos(string, find, start) {
    return string.indexOf(find, start);

}
global["startwith"] = startwith;
function startwith(str, wz) {
    return str.startsWith(wz);

}

function strlen(str) {
    return str.length;
}

function strtolower(str) {
    return str.toLowerCase();
}