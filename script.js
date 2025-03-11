document.addEventListener("DOMContentLoaded", function () {
    // Event listener untuk tombol "Beli Sekarang"
    const buttons = document.querySelectorAll(".buy-btn");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            alert("Produk telah ditambahkan ke keranjang!");
        });
    });

    // Menjalankan slideshow
    showSlides();
});

// Variabel index slide
let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll(".slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Ganti slide setiap 3 detik
}

// Event listener untuk filter produk berdasarkan kategori
document.addEventListener("change", function (event) {
    let selectedCategory = event.target.value;
    let products = document.querySelectorAll(".product");

    products.forEach(product => {
        if (selectedCategory === "all" || product.getAttribute("data-category") === selectedCategory) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
});

