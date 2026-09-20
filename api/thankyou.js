export default function handler(req, res) {
  const { name, phone, total } = req.query;

  const msg = `नमस्कार ${name || 'Laturkar'} 🙏 Thank You!

MH 24 Basket Order Confirm झाला!
Total: ₹${total || '99'} (0% Margin)
Delivery: उद्या सकाळी 7-9 AM
Link: https://mh-24-basket-latur.vercel.app

- MH 24 Basket Team`;

  // Customer ला Auto WhatsApp वर घेऊन जाईल
  const waLink = `https://wa.me/91${phone}?text=${encodeURIComponent(msg)}`;
  
  res.redirect(302, waLink);
}
