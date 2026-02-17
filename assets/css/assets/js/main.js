// Website Loaded Confirmation
document.addEventListener("DOMContentLoaded", function () {
    console.log("Website Loaded Successfully ✅");
});


// Mobile Navbar Toggle (Future use ready)
function toggleMenu() {
    const nav = document.querySelector(".navbar nav");
    nav.classList.toggle("active");
}


// Simple Coupon Preview Logic (Future use)
function applyCoupon() {
    const couponInput = document.getElementById("coupon");
    const priceElement = document.getElementById("finalPrice");

    if (!couponInput || !priceElement) return;

    let price = parseInt(priceElement.dataset.original);

    if (couponInput.value === "WELCOME10") {
        price = price * 0.9;
    }

    priceElement.innerText = "₹" + Math.round(price);
}
