function hitungIntegral() {
    let fungsi = document.getElementById("fungsi").value;
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let n = parseInt(document.getElementById("n").value);

    let h = (b - a) / n;
    let jumlah = 0;

    function f(x) {
        return eval(fungsi);
    }

    jumlah = f(a) + f(b);

    for (let i = 1; i < n; i++) {
        let x = a + i * h;
        jumlah += 2 * f(x);
    }

    let hasil = (h / 2) * jumlah;

    document.getElementById("output").innerText =
        "Hasil integral ≈ " + hasil.toFixed(6);
}
