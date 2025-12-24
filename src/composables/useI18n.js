import { ref, computed } from 'vue';

const messages = {
  en: {
    hero: {
      badge: 'BarberPOS Mobile',
      title: 'Barbershop POS',
      titleHighlight: 'Fast & Neat.',
      subtitle:
        'A practical POS app for barbershops: cashier, inventory, memberships, staff, closing, and reports. Works offline for cash sales and syncs automatically when online.',
      ctaPrimary: 'Chat on WhatsApp',
      ctaSecondary: 'Email us',
      ctaTertiary: 'See modules',
    },
    features: {
      title: 'Built for Daily Ops',
      subtitle: 'The core features your barbershop actually needs.',
      items: [
        { title: 'Cashier & Payments', description: 'Cashier flow with cash, QRIS, and card workflows.' },
        { title: 'Offline Sync', description: 'Queue cash orders offline and sync later without duplicates.' },
        { title: 'Inventory Control', description: 'Track stock, adjustments, and history. Keep products in sync.' },
        { title: 'Refund & Audit Logs', description: 'Refund flow with notes and auditability for key actions.' },
        { title: 'Closing & Reports', description: 'Shift closing and finance reports. Export CSV/XLSX when needed.' },
        { title: 'Thermal Printing', description: 'ESC/POS printing via LAN or Bluetooth (Android). PDF printing is available too.' },
      ],
    },
    modules: {
      title: 'Modules Inside the App',
      subtitle: 'What BarberPOS Mobile ships with today.',
      items: [
        { title: 'Dashboard & Insights', description: 'Today’s summary: revenue, transactions, top services, and top staff.' },
        { title: 'Cashier & Payments', description: 'Checkout flow with receipt printing and offline queue for cash.' },
        { title: 'Membership & Quota', description: 'Membership state, monthly quota reset, and manager-controlled top-ups.' },
        { title: 'Products & Stock', description: 'Product CRUD, categories, stock overview, and stock adjustments.' },
        { title: 'Staff & Activity Logs', description: 'Employee management and activity logs to trace important changes.' },
        { title: 'Closing & Reports', description: 'Closing summary, finance entries, and export (CSV/XLSX).' },
        { title: 'Notifications', description: 'In-app notifications to keep the team informed.' },
      ],
    },
    valueProps: {
      title: 'Designed to Stay Reliable',
      subtitle: 'Online when you can, offline when you must.',
      items: [
        { title: 'Offline-first Storage', description: 'Core data is stored locally on-device for speed and resilience.' },
        { title: 'Idempotent Sync', description: 'Safe retries using a client reference to avoid duplicate orders.' },
        { title: 'Role-based Access', description: 'Manager/admin vs staff capabilities to reduce operational risk.' },
        { title: 'Clean API Envelope', description: 'Consistent API response format for reliable integration and debugging.' },
        { title: 'CSV/XLSX Export', description: 'Export finance data to share with your accountant or team.' },
        { title: 'Thermal Printer Ready', description: 'Print receipts directly to ESC/POS printers (LAN/Bluetooth on Android).' },
        { title: 'Refund + Trace', description: 'Refund notes and tracking to support audits and troubleshooting.' },
        { title: 'Stock History', description: 'See why stock changed with adjustment history and notes.' },
      ],
    },
    personas: {
      title: 'Fits Real Roles',
      subtitle: 'Owner, manager, and staff work smoother together.',
      owner: {
        title: 'Owner / Manager',
        body: 'See reports, control settings, and manage quota/top-ups and staff access.',
      },
      barber: {
        title: 'Staff',
        body: 'Fast cashier flow, clear tasks, and fewer mistakes during busy hours.',
      },
      client: {
        title: 'Customer',
        body: 'Quick checkout, clear receipts, and consistent membership tracking.',
      },
    },
    pricing: {
      title: 'Get Started',
      subtitle: 'We can help you set up the app and connect it to your workflow.',
      plans: [
        {
          name: 'Mobile App',
          price: 'Free',
          period: 'beta',
          description: 'Use the cashier, products, stock, closing, and reports modules.',
          features: ['Cashier flow', 'Inventory & stock history', 'Closing & finance report', 'Thermal + PDF printing'],
          cta: 'Chat for demo',
        },
        {
          name: 'Cloud / Setup Help',
          price: 'Contact',
          period: 'custom',
          description: 'Deployment, training, and operational guidance for your team.',
          features: ['Cloud backend', 'Data migration help', 'Training & SOP', 'Priority support (by agreement)'],
          cta: 'Talk to us',
        },
      ],
    },
    security: {
      title: 'Security & Privacy',
      subtitle: 'This is a marketing site only. No login and no tracking cookies.',
      items: [
        { title: 'HTTPS', description: 'Served over TLS to protect visitors.' },
        { title: 'No lead tracking', description: 'We do not store personal data from this site.' },
        { title: 'Device-first data', description: 'Most POS data lives on your device; sync is optional.' },
        { title: 'Access controls', description: 'RBAC and audit logs help keep operations safe.' },
      ],
    },
    quota: {
      title: 'Membership Quota',
      statLabel: 'Free quota / month',
      description:
        'Get <strong>1,000 free membership quota</strong> each month (auto reset).<br><span class="top-up-note">Need more? Managers can top up quota in the app.</span>',
      cta: 'Chat on WhatsApp',
      meterText: 'FREE',
    },
    testimonials: {
      title: 'Loved by Barbershops',
      subtitle: 'Community notes',
      items: [
        { name: 'Budi S.', role: 'Owner', text: 'Checkout is fast and the stock history is super helpful.' },
        { name: 'Sari P.', role: 'Staff', text: 'The UI is clean. Closing is easier at the end of the day.' },
        { name: 'Dedi K.', role: 'Manager', text: 'Audit logs help us track changes when things go wrong.' },
        { name: 'Joko L.', role: 'Owner', text: 'Thermal printing saves time during busy hours.' },
      ],
    },
    faq: {
      title: 'FAQ',
      subtitle: 'Quick answers to common questions.',
      items: [
        {
          q: 'Is it really free?',
          a: 'The mobile app is in beta and can be used without a subscription. For setup/deployment help, contact us.',
        },
        {
          q: 'Can it run offline?',
          a: 'Yes for cash sales: orders can be queued offline and synced automatically when online. Non-cash needs internet.',
        },
        {
          q: 'Thermal printer support?',
          a: 'Yes: ESC/POS via LAN or Bluetooth on Android. PDF/system printing is also available.',
        },
        {
          q: 'Can I manage multiple staff?',
          a: 'Yes. You can add staff, manage roles, and review activity logs.',
        },
      ],
    },
    footer: {
      tagline: 'Helping barbershops run cleaner operations.',
      privacy: 'Privacy Policy',
      terms: 'Terms',
      contact: 'Contact',
      rights: 'All rights reserved.',
      email: 'Email',
      emailShort: 'Support',
      emailPlaceholder: 'Your email (optional)',
      contactButton: 'Contact support',
      pricingLink: 'Get started',
    },
  },
  id: {
    hero: {
      badge: 'BarberPOS Mobile',
      title: 'POS Barbershop',
      titleHighlight: 'Cepat & Rapi.',
      subtitle:
        'Aplikasi kasir barbershop: transaksi, stok, membership, karyawan, closing, dan laporan. Bisa offline untuk transaksi tunai dan akan sinkron otomatis saat online.',
      ctaPrimary: 'Chat WhatsApp',
      ctaSecondary: 'Email kami',
      ctaTertiary: 'Lihat modul',
    },
    features: {
      title: 'Fokus Operasional Harian',
      subtitle: 'Fitur inti yang relevan untuk barbershop.',
      items: [
        { title: 'Kasir & Pembayaran', description: 'Alur kasir untuk tunai, QRIS, dan kartu.' },
        { title: 'Offline Sync', description: 'Simpan transaksi tunai saat offline, sync aman tanpa duplikasi.' },
        { title: 'Kontrol Stok', description: 'Stok, penyesuaian, dan riwayat perubahan yang jelas.' },
        { title: 'Refund & Audit Log', description: 'Refund dengan catatan + jejak aktivitas untuk aksi penting.' },
        { title: 'Closing & Laporan', description: 'Closing shift dan laporan keuangan. Bisa export CSV/XLSX.' },
        { title: 'Print Thermal', description: 'ESC/POS via LAN atau Bluetooth (Android). Ada juga print PDF.' },
      ],
    },
    modules: {
      title: 'Modul di Aplikasi',
      subtitle: 'Yang sudah siap di BarberPOS Mobile saat ini.',
      items: [
        { title: 'Dashboard & Insights', description: 'Ringkasan hari ini: omzet, transaksi, layanan & staf teratas.' },
        { title: 'Cashier & Payments', description: 'Checkout lengkap dengan struk + offline queue untuk tunai.' },
        { title: 'Membership & Quota', description: 'State membership, reset kuota bulanan, top-up oleh manager.' },
        { title: 'Products & Stock', description: 'CRUD produk, kategori, stok, dan penyesuaian stok.' },
        { title: 'Staff & Activity Logs', description: 'Manajemen karyawan dan log aktivitas untuk audit.' },
        { title: 'Closing & Reports', description: 'Closing, entry keuangan, dan export (CSV/XLSX).' },
        { title: 'Notifications', description: 'Notifikasi in-app untuk tim.' },
      ],
    },
    valueProps: {
      title: 'Dirancang Agar Tetap Stabil',
      subtitle: 'Online jika bisa, offline jika perlu.',
      items: [
        { title: 'Data Lokal', description: 'Data inti tersimpan di device agar cepat dan tahan gangguan.' },
        { title: 'Sync Aman', description: 'Retry aman pakai client reference untuk mencegah transaksi dobel.' },
        { title: 'Role & Akses', description: 'Pembagian akses manager/admin vs staf untuk mengurangi risiko.' },
        { title: 'API Standar', description: 'Format response API konsisten untuk integrasi dan debug.' },
        { title: 'Export CSV/XLSX', description: 'Ekspor laporan finance untuk akuntan atau tim.' },
        { title: 'Siap Thermal Printer', description: 'Print struk langsung ke printer ESC/POS (Android LAN/Bluetooth).' },
        { title: 'Refund + Catatan', description: 'Refund dengan catatan dan jejak agar mudah ditelusuri.' },
        { title: 'Riwayat Stok', description: 'Lihat kenapa stok berubah melalui riwayat penyesuaian.' },
      ],
    },
    personas: {
      title: 'Cocok untuk Peran Nyata',
      subtitle: 'Owner, manager, dan staf bekerja lebih rapi.',
      owner: {
        title: 'Owner / Manager',
        body: 'Pantau laporan, atur setting, dan kontrol kuota/top-up serta akses staf.',
      },
      barber: {
        title: 'Staf',
        body: 'Kasir cepat, jelas, dan mengurangi salah input saat ramai.',
      },
      client: {
        title: 'Pelanggan',
        body: 'Checkout cepat, struk jelas, dan membership tercatat rapi.',
      },
    },
    pricing: {
      title: 'Mulai Pakai',
      subtitle: 'Kami bisa bantu demo, setup, dan penyesuaian operasional.',
      plans: [
        {
          name: 'Aplikasi Mobile',
          price: 'Gratis',
          period: 'beta',
          description: 'Kasir, produk, stok, closing, dan laporan.',
          features: ['Alur kasir', 'Stok + riwayat', 'Closing + finance', 'Print thermal + PDF'],
          cta: 'Chat untuk demo',
        },
        {
          name: 'Cloud / Bantuan Setup',
          price: 'Hubungi',
          period: 'custom',
          description: 'Deployment, training, dan SOP untuk tim.',
          features: ['Backend cloud', 'Bantuan migrasi data', 'Training & SOP', 'Support prioritas (sesuai kesepakatan)'],
          cta: 'Diskusi',
        },
      ],
    },
    security: {
      title: 'Keamanan & Privasi',
      subtitle: 'Ini situs marketing. Tidak ada login dan tanpa cookie pelacak.',
      items: [
        { title: 'HTTPS', description: 'Disajikan via TLS untuk melindungi pengunjung.' },
        { title: 'Tanpa tracking', description: 'Kami tidak menyimpan data pribadi dari situs ini.' },
        { title: 'Data di device', description: 'Sebagian besar data POS ada di device; sync opsional.' },
        { title: 'Kontrol akses', description: 'RBAC dan audit log membantu operasional tetap aman.' },
      ],
    },
    quota: {
      title: 'Kuota Membership',
      statLabel: 'Kuota gratis / bulan',
      description:
        'Dapat <strong>1.000 kuota membership gratis</strong> tiap bulan (reset otomatis).<br><span class="top-up-note">Jika butuh lebih, manager bisa top-up kuota di aplikasi.</span>',
      cta: 'Chat WhatsApp',
      meterText: 'GRATIS',
    },
    testimonials: {
      title: 'Dipakai di Barbershop',
      subtitle: 'Catatan dari pengguna',
      items: [
        { name: 'Budi S.', role: 'Owner', text: 'Kasirnya cepat, dan riwayat stok sangat membantu.' },
        { name: 'Sari P.', role: 'Staf', text: 'UI-nya enak. Closing jadi lebih rapi setiap hari.' },
        { name: 'Dedi K.', role: 'Manager', text: 'Ada audit log, jadi gampang melacak perubahan.' },
        { name: 'Joko L.', role: 'Owner', text: 'Print thermal bikin proses checkout jauh lebih cepat.' },
      ],
    },
    faq: {
      title: 'Pertanyaan Umum',
      subtitle: 'Jawaban singkat untuk pertanyaan yang sering muncul.',
      items: [
        {
          q: 'Apakah benar-benar gratis?',
          a: 'Aplikasi mobile masih beta dan bisa dipakai tanpa subscription. Untuk bantuan setup/deployment, hubungi kami.',
        },
        {
          q: 'Bisa dipakai offline?',
          a: 'Bisa untuk transaksi tunai: order disimpan offline lalu sync otomatis saat online. Pembayaran non-tunai butuh internet.',
        },
        {
          q: 'Support printer thermal?',
          a: 'Ya: ESC/POS via LAN atau Bluetooth di Android. Ada juga opsi print PDF/system.',
        },
        {
          q: 'Bisa atur banyak karyawan?',
          a: 'Bisa. Tambah karyawan, atur role, dan lihat activity log.',
        },
      ],
    },
    footer: {
      tagline: 'Bantu barbershop operasional lebih rapi.',
      privacy: 'Kebijakan Privasi',
      terms: 'Syarat & Ketentuan',
      contact: 'Kontak',
      rights: 'Hak cipta dilindungi.',
      email: 'Email',
      emailShort: 'Support',
      emailPlaceholder: 'Email kamu (opsional)',
      contactButton: 'Hubungi support',
      pricingLink: 'Mulai pakai',
    },
  },
};

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

const detectLanguage = () => {
  const fromQuery = getQueryLocale();
  const saved = typeof localStorage !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
  const browserLangRaw =
    typeof navigator !== 'undefined'
      ? navigator.language || (navigator.languages && navigator.languages[0]) || ''
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

const t = computed(() => messages[currentLocale.value]);

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
    toggleLanguage,
  };
}

