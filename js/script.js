function hitungluas() {
  var PanjangSisi = document.getElementById("sisi-luas").value;
  var luas = PanjangSisi * PanjangSisi;
  document.getElementById("luas").innerHTML = "Luas Persegi = " + luas;
}
function resetluas() {
  document.getElementById("sisi-luas").value = "";
  document.getElementById("luas").innerHTML = "";
}
function hitungkeliling() {
  var PanjangSisi = document.getElementById("sisi-keliling").value;
  var keliling = 4 * PanjangSisi;
  document.getElementById("keliling").innerHTML =
    "Keliling Persegi = " + keliling;
}
function resetkeliling() {
  document.getElementById("sisi-keliling").value = "";
  document.getElementById("keliling").innerHTML = "";
}
