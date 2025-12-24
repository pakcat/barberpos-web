<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue';
import { RouterView } from 'vue-router';
import Footer from './components/Footer.vue';
import { useI18n } from './composables/useI18n';

const { detectLanguage, toggleLanguage, currentLocale, t } = useI18n();
const showBackToTop = ref(false);

const handleScroll = () => {
  showBackToTop.value = window.scrollY > 400;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
  detectLanguage();
  window.addEventListener('scroll', handleScroll, { passive: true });

  const html = document.documentElement;
  if (html) {
    html.setAttribute('lang', currentLocale.value === 'id' ? 'id' : 'en');
  }
});

watch(currentLocale, (val) => {
  const html = document.documentElement;
  if (html) {
    html.setAttribute('lang', val === 'id' ? 'id' : 'en');
  }
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <main>
    <div class="mesh-bg"></div>
    <button
      type="button"
      class="language-switcher"
      @click="toggleLanguage"
      :aria-label="`Switch language. Current ${currentLocale === 'en' ? 'English' : 'Bahasa Indonesia'}`"
    >
      <span :class="{ active: currentLocale === 'en' }">EN</span>
      <span class="divider">/</span>
      <span :class="{ active: currentLocale === 'id' }">ID</span>
    </button>

    <RouterView />
    <Footer />

    <button
      v-if="showBackToTop"
      class="back-to-top"
      type="button"
      @click="scrollToTop"
      aria-label="Back to top"
    >
      ↑
    </button>

    <div class="mobile-sticky-cta">
      <a class="cta-item" href="tel:+6282234534016" aria-label="Call BarberPOS">
        {{ currentLocale === 'id' ? 'Telepon' : 'Call' }}
        <span>+62 822 3453 4016</span>
      </a>
      <a class="cta-item" href="mailto:kurniafakhrul@gmail.com" aria-label="Email BarberPOS">
        {{ t.footer.email }}
        <span>{{ t.footer.emailShort }}</span>
      </a>
    </div>
  </main>
</template>

<style>
/* Resetting some Vite defaults if they linger */
#app {
  width: 100%;
  max-width: 100%;
  padding: 0;
  margin: 0;
}

.language-switcher {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 8px 16px;
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.language-switcher:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.05);
}

.language-switcher span {
  opacity: 0.5;
  transition: opacity 0.3s;
}

.language-switcher span.active {
  opacity: 1;
  color: white;
}

.divider {
  opacity: 0.3 !important;
}

.back-to-top {
  position: fixed;
  right: 20px;
  bottom: 24px;
  z-index: 900;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(22, 118, 188, 0.9);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  font-size: 18px;
  line-height: 1;
}

.back-to-top:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 34px rgba(0, 0, 0, 0.45);
}

@media (max-width: 768px) {
  .back-to-top {
    display: none;
  }
}

.mobile-sticky-cta {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: none;
  padding: 10px 16px;
  gap: 10px;
  background: linear-gradient(180deg, rgba(5, 5, 5, 0.5), rgba(5, 5, 5, 0.9));
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  z-index: 950;
}

.mobile-sticky-cta .cta-item {
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 12px;
  border-radius: 12px;
  background: rgba(22, 118, 188, 0.15);
  border: 1px solid rgba(22, 118, 188, 0.4);
  color: white;
  font-weight: 700;
  text-decoration: none;
}

.mobile-sticky-cta .cta-item span {
  opacity: 0.85;
  font-weight: 600;
}

@media (max-width: 768px) {
  .mobile-sticky-cta {
    display: flex;
  }
}
</style>
