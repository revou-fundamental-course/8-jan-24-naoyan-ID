function hitungluas() {
  var PanjangSisi = document.getElementById("sisi-luas").value;
  var luas = PanjangSisi * PanjangSisi;
  document.getElementById("luas").innerHTML =
    "LUAS PERSEGI = SISI x SISI <br>" +
    "LUAS PERSEGI = " +
    PanjangSisi +
    " x " +
    PanjangSisi +
    "<br>" +
    "LUAS PERSEGI = " +
    luas;
}
function resetluas() {
  document.getElementById("sisi-luas").value = "";
  document.getElementById("luas").innerHTML = "";
}
function hitungkeliling() {
  var PanjangSisi = document.getElementById("sisi-keliling").value;
  var keliling = 4 * PanjangSisi;
  document.getElementById("keliling").innerHTML =
    "KELILING PERSEGI = 4 x SISI <br>" +
    "KELILING PERSEGI = 4 x " +
    PanjangSisi +
    "<br>" +
    "KELILING PERSEGI = " +
    keliling;
}
function resetkeliling() {
  document.getElementById("sisi-keliling").value = "";
  document.getElementById("keliling").innerHTML = "";
}
