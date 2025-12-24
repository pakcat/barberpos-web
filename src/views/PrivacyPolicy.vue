<template>
  <div class="legal-page container">
    <h1 class="fade-in-up">Privacy Policy</h1>
    <p class="last-updated fade-in-up delay-100">Last Updated: December 2025</p>
    
    <div class="legal-content fade-in-up delay-200">
      <section>
        <h2>1. Introduction</h2>
        <p>BarberPOS ("we," "our," or "us") respects your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use our mobile application and related services.</p>
      </section>

      <section>
        <h2>2. Information We Collect</h2>
        <p>We believe in data minimization. BarberPOS is designed to work reliably with local storage on your device, with optional sync when online.</p>
        <ul>
          <li><strong>Local Data:</strong> Transaction history, customer lists, and inventory data are stored locally on your device.</li>
          <li><strong>Membership Data:</strong> If you use the Membership module, customer details (name, phone number, points) are stored locally to facilitate loyalty programs.</li>
          <li><strong>Activity Logs:</strong> The app maintains a local audit log of critical actions (e.g., voiding transactions, editing stock) for security purposes.</li>
          <li><strong>Staff Performance:</strong> Employment data and performance metrics tracked in the Staff module remain on your device.</li>
          <li><strong>Device Permissions:</strong> We may request access to:
            <ul>
              <li><strong>Bluetooth:</strong> To connect with thermal printers.</li>
              <li><strong>Storage:</strong> To save backups and reports.</li>
            </ul>
          </li>
        </ul>
      </section>

      <section>
        <h2>3. Data Security</h2>
        <p>We implement industry-standard security measures to protect your local data. However, since data is stored on your device, you are responsible for maintaining the security of your physical device.</p>
      </section>

      <section>
        <h2>4. Third-Party Services</h2>
        <p>BarberPOS may integrate with third-party services depending on your deployment (for example, notification providers). We do not sell your personal data.</p>
      </section>

      <section>
        <h2>5. Changes to This Policy</h2>
        <p>We may update this policy from time to time. Continued use of the app signifies your acceptance of any changes.</p>
      </section>

      <section>
        <h2>6. Contact Us</h2>
        <p>If you have questions about this policy, please contact us at kurniafakhrul@gmail.com.</p>
      </section>
    </div>
  </div>
</template>

<style scoped>
.legal-page {
  padding-top: 120px;
  padding-bottom: 80px;
  max-width: 800px;
}

h1 {
  font-size: 3rem;
  margin-bottom: 16px;
  color: white;
}

.last-updated {
  color: var(--text-secondary);
  font-style: italic;
  margin-bottom: 60px;
}

.legal-content section {
  margin-bottom: 40px;
}

h2 {
  font-size: 1.5rem;
  color: var(--accent-primary);
  margin-bottom: 16px;
}

p, li {
  color: #ccc;
  line-height: 1.8;
  font-size: 1.05rem;
  margin-bottom: 16px;
}

ul {
  padding-left: 24px;
  margin-bottom: 16px;
}

li {
  margin-bottom: 8px;
}
</style>
