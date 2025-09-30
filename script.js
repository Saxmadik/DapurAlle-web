// Set minimum date for pickup (tomorrow)
document.addEventListener('DOMContentLoaded', function() {
    const deliveryDateInput = document.getElementById('deliveryDate');
    if (deliveryDateInput) {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        deliveryDateInput.min = tomorrow.toISOString().split('T')[0];
    }
});

// Handle form submission
const orderForm = document.getElementById('orderForm');
if (orderForm) {
    orderForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Create WhatsApp message
        const message = `Halo! Saya ingin memesan kue:

Nama: ${data.name}
No. HP: ${data.phone}
Jenis Kue: ${data.cakeType}
Ukuran: ${data.size}
Tanggal Pengambilan: ${data.deliveryDate}
Pesan Tambahan: ${data.message || 'Tidak ada'}`;
        
        // Open WhatsApp
        const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    });
}

// General WhatsApp function
function openWhatsApp() {
    const message = "Halo! Saya tertarik dengan kue-kue Anda. Bisakah Anda memberikan informasi lebih lanjut?";
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}
