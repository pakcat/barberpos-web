import { ref, computed } from 'vue';

const messages = {
  en: {
    hero: {
      badge: 'Professional Barbershop System',
      title: 'Barbershop Management',
      titleHighlight: 'Refined.',
      subtitle: 'The all-in-one platform to manage clients, staff, and inventory. No complex setup—just pure efficiency.',
      ctaPrimary: 'Try Demo Free',
      ctaSecondary: 'Watch It in Action'
    },
    features: {
      title: 'Built for Speed & Style',
      subtitle: 'Everything you need to run a world-class barbershop.',
      items: [
        { title: 'Membership System', description: 'Track client loyalty points and history.' },
        { title: 'Dynamic Services', description: 'Manage cuts, shaves, and bundles easily.' },
        { title: 'Inventory Control', description: 'Never run out of pomade or blades again.' },
        { title: 'Staff Commissions', description: 'Automate performance tracking and payouts.' },
        { title: 'Express Checkout', description: 'Accept payments in seconds, not minutes.' },
        { title: 'Closing & Reports', description: 'End shifts with accurate cash reconciliation.' }
      ]
    },
    modules: {
      title: 'Operational Modules from the Mobile App',
      subtitle: 'What ships inside BarberPOS Mobile today.',
      items: [
        { title: 'Dashboard & Insights', description: 'Today’s revenue, transactions, customers, top services, and top staff at a glance.' },
        { title: 'Cashier & Payments', description: 'Order detail, stylist check-in, QRIS/EDC payments, and success screens ready to go.' },
        { title: 'Membership & Quota', description: 'Free + top-up monthly quota, manager-controlled top-ups, and staff-safe visibility.' },
        { title: 'Products & Stock', description: 'Categories, product CRUD, stock detail, and stock adjustments with history.' },
        { title: 'Staff & Activity Logs', description: 'Employee list/detail, roles, and audit logs to trace every critical action.' },
        { title: 'Closing & Reports', description: 'Shift summary, deposit confirmation, finance form, and closing history.' },
        { title: 'Notifications', description: 'In-app notifications to keep your team in sync.' }
      ]
    },
    quota: {
      title: 'Free Forever Plan',
      statLabel: 'Free Transactions/Month',
      description: 'Perfect for startups and independent barbers. <br> <strong>1000 Transactions</strong> reset every single month. <br><span class="top-up-note">Ran out? Top up instantly via Google Pay or Apple Pay.</span>',
      cta: 'Start Your Free Plan',
      meterText: 'FREE'
    },
    testimonials: {
      title: 'Trusted by Barbers',
      subtitle: 'Words from our Community',
      items: [
        { name: 'Alex R.', role: 'Owner, Cuts & Shaves', text: 'BarberPOS changed how I manage my shop. Inventory is always spot on!' },
        { name: 'Sarah M.', role: 'Freelance Barber', text: 'The free tier is generous and perfect for my growing client list.' },
        { name: 'David K.', role: 'Manager, The Fade Room', text: 'Incredibly easy to use. My staff learned it in minutes.' },
        { name: 'James L.', role: 'Owner, Classic Cuts', text: 'Finally, a POS that looks as good as my barbershop.' }
      ]
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Everything you need to know.',
      items: [
        { q: 'Is it really free?', a: 'Yes! Our free plan gives you 1,000 transactions every month, forever. No credit card required.' },
        { q: 'Can I use it offline?', a: 'BarberPOS works best with internet, but we have offline support for basic transactions.' },
        { q: 'Does it support thermal printers?', a: 'Absolutely. We support most Bluetooth and USB thermal printers out of the box.' },
        { q: 'Can I manage multiple staff?', a: 'Yes, you can add unlimited staff members and track their individual performance.' }
      ]
    },
    footer: {
      tagline: 'Empowering Barbers Worldwide.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      contact: 'Contact Support',
      rights: 'All rights reserved.'
    }
  },
  id: {
    hero: {
      badge: 'Sistem Barbershop Profesional',
      title: 'Kelola Barbershop',
      titleHighlight: 'Lebih Cerdas.',
      subtitle: 'Platform lengkap untuk atur pelanggan, karyawan, dan stok. Tanpa ribet, langsung jalan.',
      ctaPrimary: 'Coba Demo Gratis',
      ctaSecondary: 'Lihat Video'
    },
    features: {
      title: 'Cepat & Canggih',
      subtitle: 'Semua fitur yang Anda butuhkan untuk barbershop kelas dunia.',
      items: [
        { title: 'Sistem Member', description: 'Kelola poin loyalitas dan riwayat pelanggan.' },
        { title: 'Menu Dinamis', description: 'Atur paket potong & layanan dengan mudah.' },
        { title: 'Kontrol Stok', description: 'Nggak ada lagi cerita kehabisan pomade.' },
        { title: 'Komisi Karyawan', description: 'Hitung otomatis performa dan bagi hasil.' },
        { title: 'Kasir Kilat', description: 'Transaksi selesai dalam hitungan detik.' },
        { title: 'Closing & Laporan', description: 'Tutup shift dengan rekonsiliasi kas akurat.' }
      ]
    },
    modules: {
      title: 'Modul Operasional di Aplikasi Mobile',
      subtitle: 'Semua yang sudah siap di BarberPOS Mobile.',
      items: [
        { title: 'Dashboard & Insight', description: 'Lihat omzet hari ini, transaksi, pelanggan, layanan terlaris, dan barber teratas.' },
        { title: 'Kasir & Pembayaran', description: 'Detail order, check-in stylist, pembayaran QRIS/EDC, hingga layar sukses.' },
        { title: 'Membership & Kuota', description: 'Kuota gratis + top-up bulanan, top-up oleh manager, tampilan aman untuk staf.' },
        { title: 'Produk & Stok', description: 'Kategori, CRUD produk, detail stok, dan penyesuaian stok lengkap riwayat.' },
        { title: 'Staf & Log Aktivitas', description: 'Daftar/detail karyawan, role, dan log aktivitas untuk jejak aksi penting.' },
        { title: 'Closing & Laporan', description: 'Ringkasan shift, konfirmasi setoran, form keuangan, dan riwayat tutup buku.' },
        { title: 'Notifikasi', description: 'Notifikasi in-app supaya tim tetap sinkron.' }
      ]
    },
    quota: {
      title: 'Paket Gratis Selamanya',
      statLabel: 'Transaksi Gratis / Bulan',
      description: 'Cocok untuk rintisan dan barber mandiri. <br> <strong>1000 Transaksi</strong> reset otomatis tiap bulan. <br><span class="top-up-note">Kuota habis? Top up instan via Google Pay atau Apple Pay.</span>',
      cta: 'Mulai Paket Gratis Sekarang',
      meterText: 'GRATIS'
    },
    testimonials: {
      title: 'Dipercaya Para Barber',
      subtitle: 'Apa Kata Komunitas',
      items: [
        { name: 'Budi S.', role: 'Owner, Ganteng Maksimal', text: 'BarberPOS mengubah cara saya atur toko. Stok selalu akurat!' },
        { name: 'Sari P.', role: 'Barber Freelance', text: 'Paket gratisnya sangat membantu buat saya yang baru mulai.' },
        { name: 'Dedi K.', role: 'Manajer, Ruang Cukur', text: 'Sangat mudah dipakai. Karyawan saya langsung paham dalam hitungan menit.' },
        { name: 'Joko L.', role: 'Owner, Klasik Cukur', text: 'Akhirnya ada POS yang tampilannya sekeren barbershop saya.' }
      ]
    },
    faq: {
      title: 'Pertanyaan Umum',
      subtitle: 'Semua yang perlu Anda ketahui.',
      items: [
        { q: 'Apakah benar-benar gratis?', a: 'Ya! Paket gratis kami memberikan 1.000 transaksi setiap bulan, selamanya. Tanpa kartu kredit.' },
        { q: 'Bisa dipakai offline?', a: 'BarberPOS optimal dengan internet, tapi kami punya dukungan offline untuk transaksi dasar.' },
        { q: 'Support printer thermal?', a: 'Tentu saja. Kami mendukung sebagian besar printer thermal Bluetooth dan USB.' },
        { q: 'Bisa atur banyak karyawan?', a: 'Ya, Anda bisa tambah karyawan tanpa batas dan pantau performa mereka masing-masing.' }
      ]
    },
    footer: {
      tagline: 'Memberdayakan Barbershop Indonesia.',
      privacy: 'Kebijakan Privasi',
      terms: 'Syarat & Ketentuan',
      contact: 'Hubungi Kami',
      rights: 'Hak cipta dilindungi.'
    }
  }
};

// State
const currentLocale = ref('en');

// Auto-detect language
const detectLanguage = () => {
  const browserLang = navigator.language.split('-')[0];
  if (browserLang === 'id') {
    currentLocale.value = 'id';
  } else {
    currentLocale.value = 'en';
  }
};

// Computed translations
const t = computed(() => messages[currentLocale.value]);

// Toggle function
const toggleLanguage = () => {
  currentLocale.value = currentLocale.value === 'en' ? 'id' : 'en';
};

export function useI18n() {
  return {
    currentLocale,
    t,
    detectLanguage,
    toggleLanguage
  };
}
