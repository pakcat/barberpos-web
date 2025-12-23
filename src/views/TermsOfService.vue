<template>
  <div class="legal-page container">
    <h1 class="fade-in-up">Terms of Service</h1>
    <p class="last-updated fade-in-up delay-100">Last Updated: December 2025</p>
    
    <div class="legal-content fade-in-up delay-200">
      <section>
        <h2>1. Acceptance of Terms</h2>
        <p>By downloading or using BarberPOS, you agree to be bound by these Terms of Service. If you do not agree, please do not use the application.</p>
      </section>

      <section>
        <h2>2. License</h2>
        <p>We grant you a limited, non-exclusive, non-transferable license to use BarberPOS for your internal business operations (managing your barbershop). You may not resell or redistribute the software.</p>
      </section>

      <section>
        <h2>3. Free & Premium Tiers</h2>
        <p><strong>Free Tier:</strong> Includes limited monthly transactions (1,000/month). This quota resets automatically.</p>
        <p><strong>Premium Features:</strong> We may offer premium features which are subject to separate pricing and subscription terms.</p>
      </section>

      <section>
        <h2>4. Financial Accountability & Reporting</h2>
        <p><strong>Shift Closing:</strong> The "Closing" module provides a summary of cash flow. You are responsible for verifying physical cash matches the app's calculation.</p>
        <p><strong>Reports:</strong> While we strive for accuracy, you should verify critical financial reports before using them for tax or accounting purposes.</p>
      </section>

      <section>
        <h2>5. User Responsibilities</h2>
        <p>You are responsible for:</p>
        <ul>
          <li>Maintaining the confidentiality of your device and data.</li>
          <li>Ensuring your use of the app complies with local laws.</li>
          <li>Creating regular backups of your transaction data.</li>
        </ul>
      </section>

      <section>
        <h2>5. Disclaimer of Warranties</h2>
        <p>BarberPOS is provided "as is" without warranties of any kind. We do not guarantee that the app will be error-free or uninterrupted.</p>
      </section>

      <section>
        <h2>6. Limitation of Liability</h2>
        <p>To the fullest extent permitted by law, BarberPOS shall not be liable for any indirect, incidental, or consequential damages (including loss of data or profits) arising from your use of the app.</p>
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
