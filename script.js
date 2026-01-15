function hitungIntegral() {
    let fungsi = document.getElementById("fungsi").value;
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let n = parseInt(document.getElementById("n").value);

    if (!fungsi || isNaN(a) || isNaN(b) || isNaN(n)) {
        alert("Semua input harus diisi!");
        return;
    }

    if (n <= 0) {
        alert("Jumlah pias (n) harus lebih dari 0");
        return;
    }

    if (a >= b) {
        alert("Batas bawah harus lebih kecil dari batas atas");
        return;
    }

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
        hasil.toFixed(6);
}

