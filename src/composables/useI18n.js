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
    valueProps: {
      title: 'Built to Outpace Any Barbershop OS',
      subtitle: 'Everything you expect from booking to payments, plus automation and loyalty baked in.',
      items: [
        { title: 'Online Booking', description: 'Custom booking page, reminders, and zero missed slots.' },
        { title: 'Integrated Payments', description: 'QRIS/EDC in one flow. Faster checkout and fewer clicks.' },
        { title: 'Optimized Hardware', description: 'Runs on any device. Optional POS kit for pro setups.' },
        { title: 'Campaigns & Blast', description: 'Send segmented SMS/WA/email to win back clients.' },
        { title: 'Automations', description: 'Engage clients automatically—birthdays, churn alerts, upsells.' },
        { title: 'Loyalty Program', description: 'Points, tiers, and perks to keep clients returning.' },
        { title: 'Lightning-Fast POS', description: 'Process payments in seconds. Fair tips and transparent splits.' },
        { title: 'Inventory in Real Time', description: 'Live stock, purchase orders, and retail tracking in one place.' }
      ]
    },
    stats: {
      title: 'Trusted at Scale',
      subtitle: 'Proven usage that keeps growing.',
      items: [
        { label: 'Barbers on BarberPOS', value: '800+', caption: 'Oct 2025' },
        { label: 'Services Completed', value: '250,000+', caption: 'Oct 2025' },
        { label: 'Transaction Volume', value: '$5,100,000+', caption: 'Oct 2025' }
      ]
    },
    personas: {
      title: 'Fits Every Role',
      subtitle: 'Owner, barber, or client—everyone wins.',
      owner: {
        title: 'Run the Show',
        body: '0% human error, 100% peace of mind. Multi-location control, reports, and audits in one dashboard.'
      },
      barber: {
        title: 'Empowered Barbers',
        body: 'Fair tip splitting, transparent payroll, and clear scheduling keep the team motivated.'
      },
      client: {
        title: 'Delight Clients',
        body: 'Online booking, loyalty perks, and fast checkout—no waiting, no friction.'
      }
    },
    pricing: {
      title: 'Quota Packs that Fit Your Flow',
      subtitle: '1,000 free transactions reset every month. Top up when you need more.',
      plans: [
        {
          name: 'Starter (Free)',
          price: 'FREE',
          period: '1000 trx / month',
          description: 'Included monthly quota. Resets automatically.',
          features: [
            'Appointment scheduling & online booking',
            'POS + QRIS/EDC payments',
            'Product sales & inventory management',
            'Reports & insights',
            'Blast & loyalty basics',
            'Email & chat support'
          ],
          cta: 'Start Free'
        },
        {
          name: 'Top-up Pack',
          price: 'IDR 100K',
          period: 'per 1000 trx',
          description: 'Add quota anytime via Google Pay / Apple Pay. Required when free quota runs out.',
          features: [
            'Includes all Starter features',
            'Manager-controlled quota top-ups',
            'Unlimited staff & roles',
            'Advanced automations & loyalty tiers',
            'Priority support'
          ],
          cta: 'Top up inside the app'
        }
      ]
    },
    security: {
      title: 'Security & Privacy',
      subtitle: 'Marketing site only. No login—just safe, minimal contact.',
      items: [
        { title: 'HTTPS Everywhere', description: 'Served over TLS. No inline scripts that can be tampered with.' },
        { title: 'No Data Stored Here', description: 'Contact buttons open your email/phone. No lead capture forms or tracking cookies.' },
        { title: 'Payment Safety', description: 'Top-ups handled by Google Pay / Apple Pay. We never store card data.' },
        { title: 'App Controls', description: 'Role-based access, audit logs, and controlled top-ups keep your shop protected.' }
      ]
    },
    quota: {
      title: 'Quota Built for Growth',
      statLabel: 'Free Transactions / Month',
      description: 'You get <strong>1000 free transactions</strong> every month, auto-reset. <br><span class="top-up-note">When it runs out, top up 1000 more via Google Pay or Apple Pay—transactions pause until you refill.</span>',
      cta: 'Start Free',
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
    valueProps: {
      title: 'Dirancang Lebih Unggul dari Barber OS',
      subtitle: 'Dari booking sampai pembayaran, plus otomatisasi & loyalty langsung tersedia.',
      items: [
        { title: 'Online Booking', description: 'Halaman booking custom dengan reminder, anti slot kosong.' },
        { title: 'Pembayaran Terintegrasi', description: 'QRIS/EDC dalam satu alur. Checkout lebih cepat, klik lebih sedikit.' },
        { title: 'Hardware Siap Pakai', description: 'Jalan di device apa pun. Ada paket POS opsional untuk setup pro.' },
        { title: 'Campaign & Blast', description: 'SMS/WA/email tersegmentasi untuk winback & promo.' },
        { title: 'Automations', description: 'Engage otomatis—ulang tahun, churn alert, upsell cerdas.' },
        { title: 'Loyalty Program', description: 'Poin, tier, dan benefit untuk bikin pelanggan balik lagi.' },
        { title: 'POS Ngebut', description: 'Proses bayar dalam hitungan detik. Tip adil, split transparan.' },
        { title: 'Stok Real-Time', description: 'Stok live, purchase order, dan penjualan retail dalam satu dashboard.' }
      ]
    },
    stats: {
      title: 'Dipercaya di Skala Besar',
      subtitle: 'Angka pemakaian yang terus bertumbuh.',
      items: [
        { label: 'Barber memakai BarberPOS', value: '800+', caption: 'Okt 2025' },
        { label: 'Layanan terselesaikan', value: '250.000+', caption: 'Okt 2025' },
        { label: 'Volume transaksi', value: '$5.100.000+', caption: 'Okt 2025' }
      ]
    },
    personas: {
      title: 'Cocok untuk Semua Peran',
      subtitle: 'Owner, barber, dan klien sama-sama diuntungkan.',
      owner: {
        title: 'Atur Bisnis',
        body: '0% kesalahan manusia, tenang 100%. Multi-cabang, laporan, dan audit dalam satu dashboard.'
      },
      barber: {
        title: 'Empower Barber',
        body: 'Tip adil, payroll transparan, jadwal jelas—tim makin semangat.'
      },
      client: {
        title: 'Puas untuk Klien',
        body: 'Booking online, loyalty, dan bayar kilat—tanpa antri, tanpa ribet.'
      }
    },
    pricing: {
      title: 'Paket Kuota Sesuai Kebutuhan',
      subtitle: '1.000 transaksi gratis reset tiap bulan. Top up saat habis.',
      plans: [
        {
          name: 'Starter (Gratis)',
          price: 'GRATIS',
          period: '1000 trx / bulan',
          description: 'Kuota bulanan gratis. Reset otomatis.',
          features: [
            'Booking & penjadwalan online',
            'POS + pembayaran QRIS/EDC',
            'Penjualan produk & manajemen stok',
            'Laporan & insight',
            'Blast marketing & loyalty dasar',
            'Support email & chat'
          ],
          cta: 'Mulai Gratis'
        },
        {
          name: 'Paket Top-up',
          price: 'IDR 100K',
          period: 'per 1000 trx',
          description: 'Isi kuota via Google Pay / Apple Pay saat kuota gratis habis.',
          features: [
            'Semua fitur Starter',
            'Top-up kuota dikendalikan manager',
            'Staf & role tak terbatas',
            'Automasi lanjut & loyalty bertingkat',
            'Prioritas support'
          ],
          cta: 'Top up di dalam app'
        }
      ]
    },
    security: {
      title: 'Keamanan & Privasi',
      subtitle: 'Ini situs marketing. Tidak ada login—hanya kontak yang aman & minim data.',
      items: [
        { title: 'HTTPS Sepenuhnya', description: 'Disajikan via TLS. Tidak ada inline script yang mudah diubah.' },
        { title: 'Tanpa Simpan Data', description: 'Tombol kontak langsung ke email/telepon. Tidak ada form lead atau cookies pelacak.' },
        { title: 'Pembayaran Aman', description: 'Top-up lewat Google Pay / Apple Pay. Kami tidak menyimpan data kartu.' },
        { title: 'Kontrol di Aplikasi', description: 'RBAC, audit log, dan top-up terkendali menjaga operasional tetap aman.' }
      ]
    },
    quota: {
      title: 'Kuota untuk Bertumbuh',
      statLabel: 'Transaksi Gratis / Bulan',
      description: 'Dapat <strong>1000 transaksi gratis</strong> tiap bulan, reset otomatis. <br><span class="top-up-note">Jika habis, isi lagi 1000 via Google Pay / Apple Pay—transaksi berhenti sampai kuota diisi.</span>',
      cta: 'Mulai Gratis',
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
const DEFAULT_LOCALE = 'id';
const currentLocale = ref(DEFAULT_LOCALE);
const STORAGE_KEY = 'barberpos-locale';

const getQueryLocale = () => {
  if (typeof window === 'undefined') return null;
  const params = new URLSearchParams(window.location.search);
  const q = params.get('lang');
  if (q === 'en' || q === 'id') return q;
  return null;
};

// Auto-detect language
const detectLanguage = () => {
  const fromQuery = getQueryLocale();
  const saved = typeof localStorage !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
  const browserLangRaw = typeof navigator !== 'undefined'
    ? (navigator.language || (navigator.languages && navigator.languages[0]) || '')
    : '';
  const browserLang = browserLangRaw ? browserLangRaw.toLowerCase().split('-')[0] : '';

  let resolved = DEFAULT_LOCALE;

  if (fromQuery === 'en' || fromQuery === 'id') {
    resolved = fromQuery;
  } else if (saved === 'en' || saved === 'id') {
    resolved = saved;
  } else if (browserLang && browserLang !== 'id') {
    resolved = 'en';
  }

  currentLocale.value = resolved;

  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, currentLocale.value);
  }
};

// Computed translations
const t = computed(() => messages[currentLocale.value]);

// Toggle function
const toggleLanguage = () => {
  currentLocale.value = currentLocale.value === 'en' ? 'id' : 'en';
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, currentLocale.value);
  }
};

export function useI18n() {
  return {
    currentLocale,
    t,
    detectLanguage,
    toggleLanguage
  };
}
