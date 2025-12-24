<template>
  <section class="hero-section" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave" @mouseenter="handleMouseEnter">
    <!-- Floating Background Particles -->
    <div class="particles">
      <div v-for="n in 5" :key="n" class="particle" :style="getParticleStyle(n)"></div>
    </div>
    
    <div class="container hero-content">
      <div class="logo-wrapper fade-in-up">
        <img src="/logo.png" alt="BarberPOS brand logo" class="brand-logo" loading="lazy" decoding="async" />
      </div>

      <div class="badge fade-in-up delay-100">
        <span>{{ t.hero.badge }}</span>
      </div>
      <div class="quota-pill fade-in-up delay-150">
        1,000 {{ currentLocale === 'id' ? 'kuota membership / bulan (reset otomatis)' : 'membership quota / month (auto reset)' }}
      </div>
      
      <h1 class="hero-title fade-in-up delay-200">
        {{ t.hero.title }} <br />
        <span class="gradient-text glitch" :data-text="t.hero.titleHighlight">{{ t.hero.titleHighlight }}</span>
      </h1>
      
      <p class="hero-subtitle fade-in-up delay-300">
        {{ t.hero.subtitle }}
      </p>

      <div class="trust-pill fade-in-up delay-300">
        {{ currentLocale === 'id' ? 'Offline untuk transaksi tunai • Sync otomatis saat online' : 'Offline for cash sales • Auto sync when online' }}
      </div>
      
      <div class="cta-group fade-in-up delay-300">
        <a
          href="https://wa.me/6282234534016"
          class="store-btn whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat BarberPOS on WhatsApp"
        >
          <svg class="store-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path fill="currentColor" d="M12 2a10 10 0 0 0-8.47 15.34L2 22l4.79-1.47A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.13l-.29-.17-2.84.87.9-2.76-.19-.3A8 8 0 1 1 12 20zm4.46-5.28c-.24-.12-1.4-.69-1.62-.77-.22-.08-.38-.12-.54.12-.16.24-.62.77-.76.93-.14.16-.28.18-.52.06a6.55 6.55 0 0 1-1.93-1.19 7.26 7.26 0 0 1-1.34-1.67c-.14-.24 0-.38.1-.5.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.11.16 1.53.1.47-.07 1.4-.57 1.6-1.12.2-.55.2-1.02.14-1.12-.06-.1-.22-.16-.46-.28z"/>
          </svg>
          <div class="store-text">
            <span class="small-text">{{ currentLocale === 'id' ? 'Chat via' : 'Chat on' }}</span>
            <span class="big-text">{{ t.hero.ctaPrimary }}</span>
          </div>
        </a>

        <a
          href="mailto:kurniafakhrul@gmail.com"
          class="store-btn email"
          aria-label="Email BarberPOS"
        >
          <svg class="store-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
          <div class="store-text">
            <span class="small-text">{{ currentLocale === 'id' ? 'Atau' : 'Or' }}</span>
            <span class="big-text">{{ t.hero.ctaSecondary }}</span>
          </div>
        </a>

        <a href="#modules" class="ghost-btn" aria-label="Jump to modules">
          {{ t.hero.ctaTertiary }}
        </a>
      </div>
      
      <!-- Wrapper for Entrance Animation -->
      <div class="hero-visual-wrapper reveal-scale delay-500">
        <div class="ambient-glow"></div>
        
        <!-- Inner Container for 3D Tilt -->
        <div 
          class="hero-image-placeholder"
          ref="cardRef"
          :style="{ transform: cardTransform, transition: cardTransition }"
        >
          <div class="device-composition">
             <!-- Tablet (Background) -->
             <div class="device tablet-mockup">
               <div class="screen">
                 <picture>
                   <source srcset="/tablet-screenshot.webp" type="image/webp" />
                   <img src="/tablet-screenshot.png" alt="BarberPOS tablet point-of-sale interface" loading="lazy" decoding="async" />
                 </picture>
               </div>
               <div class="reflection"></div>
             </div>
 
             <!-- Mobile (Foreground) -->
             <div class="device mobile-mockup">
               <div class="screen">
                 <picture>
                   <source srcset="/mobile-screenshot.webp" type="image/webp" />
                   <img src="/mobile-screenshot.png" alt="BarberPOS mobile cashier interface" loading="lazy" decoding="async" />
                 </picture>
               </div>
               <div class="reflection"></div>
             </div>
          </div>
        </div>
      </div>

      <a href="#features" class="scroll-link fade-in-up delay-400">
        {{ currentLocale === 'id' ? 'Lihat fitur' : 'See features' }} ↓
      </a>
      <a href="#quota" class="scroll-link fade-in-up delay-400 secondary-link">
        {{ currentLocale === 'id' ? 'Lihat paket' : 'See pricing' }} ↓
      </a>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from '../composables/useI18n';
import { useMouseTilt } from '../composables/useMouseTilt';
import { useScrollObserver } from '../composables/useScrollObserver';

const { t, currentLocale } = useI18n();
useScrollObserver('reveal-scale');

const cardRef = ref(null);
const { 
  transform: cardTransform, 
  transition: cardTransition,
  handleMouseMove, 
  handleMouseLeave, 
  handleMouseEnter
} = useMouseTilt(cardRef, 25); // Increased intensity for obvious tilt

const getParticleStyle = (n) => ({
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  animationDelay: `${n * 2}s`,
  opacity: Math.random() * 0.5
});
</script>

<style scoped>
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 120px 0 80px;
}

.particles {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  pointer-events: none;
}

.brand-logo {
  height: 80px;
  margin-bottom: 24px;
  filter: drop-shadow(0 0 20px rgba(22, 118, 188, 0.5));
}

.particle {
  position: absolute;
  width: 4px; height: 4px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 0 10px white;
  animation: float 10s infinite ease-in-out;
}

.hero-content {
  text-align: center;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.badge {
  display: inline-block;
  padding: 8px 0;
  font-size: 0.95rem;
  letter-spacing: 0.05em;
  font-weight: 500;
  text-transform: uppercase;
  color: var(--accent-primary);
  margin-bottom: 24px;
  position: relative;
}

.badge::after {
  content: '';
  display: block;
  width: 40px;
  height: 2px;
  background: var(--accent-secondary);
  margin: 8px auto 0;
  border-radius: 2px;
}

.quota-pill {
  display: inline-block;
  padding: 8px 14px;
  background: rgba(22, 118, 188, 0.15);
  border: 1px solid rgba(22, 118, 188, 0.5);
  border-radius: 999px;
  color: white;
  font-weight: 600;
  margin-bottom: 16px;
}

.hero-title {
  font-size: clamp(2.2rem, 8vw, 5rem);
  font-weight: 800;
  line-height: 1;
  margin-bottom: 24px;
  letter-spacing: -0.04em;
}

.hero-subtitle {
  font-size: clamp(0.95rem, 3vw, 1.25rem);
  color: var(--text-secondary);
  margin-bottom: 48px;
  max-width: 600px;
}

.trust-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: var(--text-secondary);
  font-weight: 600;
  margin-bottom: 16px;
}

.cta-group {
  display: flex;
  gap: 16px;
  margin-bottom: 80px;
  flex-wrap: wrap;
  justify-content: center;
}

.scroll-link {
  display: inline-block;
  margin-top: -40px;
  color: var(--text-secondary);
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s ease, transform 0.2s ease;
}

.scroll-link:hover {
  color: white;
  transform: translateY(-2px);
}

.secondary-link {
  display: inline-block;
  margin-left: 12px;
  color: var(--accent-primary);
}

/* Store Buttons with Glassmorphism & Cyber Shine */
.store-btn {
  display: flex;
  align-items: center;
  background: rgba(15, 15, 15, 0.5);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 12px 24px;
  text-decoration: none;
  color: white;
  transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
  min-width: 180px;
  overflow: hidden;
  position: relative;
}

.store-btn::before {
  content: '';
  position: absolute;
  top: -50%; left: -150%;
  width: 100%; height: 200%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
  transform: rotate(25deg);
  transition: 0.6s;
}

.store-btn:hover::before {
  left: 150%;
}

.store-btn:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(22, 118, 188, 0.5);
  box-shadow: 0 10px 30px rgba(22, 118, 188, 0.2);
}

.store-icon {
  width: 32px;
  height: 32px;
  margin-right: 12px;
}

.store-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}

.small-text {
  font-size: 0.7rem;
  text-transform: uppercase;
  opacity: 0.7;
  line-height: 1.2;
}

.big-text {
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: 0.02em;
}

.ghost-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: white;
  background: rgba(255, 255, 255, 0.04);
  transition: all 0.2s ease;
  min-width: 140px;
}

.ghost-btn:hover {
  border-color: rgba(22, 118, 188, 0.5);
  background: rgba(22, 118, 188, 0.08);
  transform: translateY(-3px);
}

/* 3D Composition */
.hero-visual-wrapper {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  perspective: 2500px;
  transform-style: preserve-3d;
}

.hero-image-placeholder {
  transform-style: preserve-3d;
  will-change: transform;
  width: 800px;
  height: 500px;
  display: flex;
  justify-content: center;
  position: relative;
}

.device-composition {
  position: relative;
  width: 800px;
  height: 500px;
  transform-style: preserve-3d;
}

.device {
  position: absolute;
  background: #111;
  border-radius: 20px;
  box-shadow: 0 50px 100px -20px rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  transform-style: preserve-3d;
}

.screen img {
  width: 100%;
  height: auto;
  display: block;
}

.tablet-mockup {
  width: 800px;
  height: 500px;
  top: 0; left: 0;
  transform: translateZ(0);
}

.mobile-mockup {
  width: 280px;
  height: 580px;
  bottom: -40px;
  right: -20px;
  transform: translateZ(80px) rotateY(-10deg);
  border: 4px solid #111;
  border-radius: 32px;
}

.ambient-glow {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%) translateZ(-100px);
  width: 700px; height: 700px;
  background: radial-gradient(circle, rgba(22, 118, 188, 0.2), transparent 70%);
  filter: blur(80px);
  pointer-events: none;
  animation: pulseGlow 8s infinite alternate ease-in-out;
}

@keyframes pulseGlow {
  from { opacity: 0.3; scale: 0.8; }
  to { opacity: 0.6; scale: 1.1; }
}

@media (max-width: 900px) {
  .device-composition, .hero-image-placeholder { width: 600px; height: 400px; }
  .tablet-mockup { width: 600px; height: 375px; }
  .mobile-mockup { width: 220px; height: 460px; }
}

@media (max-width: 768px) {
  .hero-section { padding: 100px 0 60px; }
  .device-composition { transform: none !important; height: auto; }
  .mobile-mockup { display: none; }
  .tablet-mockup { position: relative; width: 100%; height: auto; }
}

@media (max-width: 540px) {
  .cta-group { gap: 12px; }
  .store-btn { width: 100%; justify-content: center; }
  .scroll-link { margin-top: -20px; }
  .ghost-btn { width: 100%; }
}

@media (max-width: 480px) {
  .hero-section {
    padding: 80px 0 48px;
  }
  .particles { display: none; }
  .hero-title {
    font-size: clamp(1.9rem, 9vw, 3rem);
  }
  .hero-subtitle {
    margin-bottom: 32px;
  }
  .hero-image-placeholder,
  .device-composition,
  .tablet-mockup {
    width: 100% !important;
    height: auto !important;
  }
  .hero-visual-wrapper {
    display: none;
  }
  .scroll-link {
    margin-top: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .particles .particle,
  .ambient-glow {
    animation: none !important;
  }
  .hero-visual-wrapper,
  .hero-image-placeholder,
  .store-btn,
  .scroll-link {
    transition: none !important;
  }
}
</style>
