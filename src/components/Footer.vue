<template>
  <footer class="footer">
    <div class="container footer-content">
      <div class="brand">
        <h2>BarberPOS</h2>
        <p>{{ t.footer.tagline }}</p>
      </div>
      
      <form class="contact-form" @submit.prevent="submitContact">
        <input 
          v-model="contactEmail"
          type="email" 
          name="email" 
          autocomplete="email" 
          required 
          placeholder="Your email"
          aria-label="Your email"
        />
        <button type="submit">Contact Support</button>
      </form>

      <div class="links">
        <RouterLink to="/privacy">{{ t.footer.privacy }}</RouterLink>
        <RouterLink to="/terms">{{ t.footer.terms }}</RouterLink>
        <a href="mailto:support@barberpos.app">{{ t.footer.contact }}</a>
      </div>
      <div class="copy">
        &copy; 2024 BarberPOS. {{ t.footer.rights }}
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useI18n } from '../composables/useI18n';

const { t } = useI18n();
const contactEmail = ref('');

const submitContact = () => {
  const email = encodeURIComponent(contactEmail.value.trim());
  const subject = encodeURIComponent('Support request');
  const body = encodeURIComponent('Hi BarberPOS team,\n\nSaya butuh bantuan terkait: ');
  window.location.href = `mailto:support@barberpos.app?subject=${subject}${email ? `&cc=${email}` : ''}&body=${body}`;
};
</script>

<style scoped>
.footer {
  padding: 60px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  background: black;
  color: #888;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 24px;
}

.brand h2 {
  color: white;
  margin-bottom: 8px;
}

.contact-form {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 420px;
}

.contact-form input {
  flex: 1;
  min-width: 220px;
  padding: 12px 14px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  color: white;
}

.contact-form button {
  padding: 12px 16px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  color: white;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.contact-form button:hover {
  transform: translateY(-2px);
}

.links {
  display: flex;
  gap: 24px;
}

.links a:hover {
  color: white;
}
</style>
