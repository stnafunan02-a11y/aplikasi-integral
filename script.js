function hitungIntegral() {
    // Ambil input
    let fungsi = document.getElementById("fungsi").value.trim();
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let n = parseInt(document.getElementById("n").value);

    // Validasi input kosong
    if (fungsi === "" || isNaN(a) || isNaN(b) || isNaN(n)) {
        document.getElementById("output").innerText =
            "❌ Semua input harus diisi dengan benar";
        return;
    }

    // Cegah penggunaan ^
    if (fungsi.includes("^")) {
        document.getElementById("output").innerText =
            "❌ Jangan gunakan ^ , pakai x*x atau Math.pow(x,n)";
        return;
    }

    // Validasi n
    if (n <= 0) {
        document.getElementById("output").innerText =
            "❌ Jumlah pias (n) harus lebih dari 0";
        return;
    }

    // Validasi batas
    if (a >= b) {
        document.getElementById("output").innerText =
            "❌ Batas bawah (a) harus lebih kecil dari batas atas (b)";
        return;
    }

    // Lebar pias
    let h = (b - a) / n;
    let jumlah = 0;

    // Definisi fungsi
    function f(x) {
        return eval(fungsi);
    }

    try {
        // Rumus Trapesium
        jumlah = f(a) + f(b);

        for (let i = 1; i < n; i++) {
            let x = a + i * h;
            jumlah += 2 * f(x);
        }

        let hasil = (h / 2) * jumlah;

        // Tampilkan hasil
        document.getElementById("output").innerText =
            "≈ " + hasil.toFixed(6);

    } catch (error) {
        document.getElementById("output").innerText =
            "❌ Fungsi tidak valid. Gunakan contoh: x*x atau Math.pow(x,2)";
    }
}
