<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
import { useI18n } from './composables/useI18n';

const { detectLanguage, toggleLanguage, currentLocale } = useI18n();
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
}

.back-to-top:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 34px rgba(0, 0, 0, 0.45);
}

@media (max-width: 768px) {
  .back-to-top { display: none; }
}
</style>
