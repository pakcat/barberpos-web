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
        1000 {{ currentLocale === 'id' ? 'transaksi gratis / bulan (reset otomatis)' : 'free transactions / month (auto reset)' }}
      </div>
      
      <h1 class="hero-title fade-in-up delay-200">
        {{ t.hero.title }} <br />
        <span class="gradient-text glitch" :data-text="t.hero.titleHighlight">{{ t.hero.titleHighlight }}</span>
      </h1>
      
      <p class="hero-subtitle fade-in-up delay-300">
        {{ t.hero.subtitle }}
      </p>

      <div class="trust-pill fade-in-up delay-300">
        {{ currentLocale === 'id' ? 'Tanpa kartu kredit' : 'No credit card needed' }}
      </div>
      
      <div class="cta-group fade-in-up delay-300">
        <!-- Google Play -->
        <a 
          href="https://play.google.com/store" 
          class="store-btn google-play"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download BarberPOS on Google Play"
        >
          <svg class="store-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.609 1.84C3.205 2.15 3.003 2.76 3 3.39v17.228c.003.63.205 1.24.609 1.55.15.115.326.195.511.232l10.84-10.84-10.84-10.88c-.183.037-.36.117-.511.26z" fill="#00D2FF"/>
            <path d="M15.485 11.028l5.8-5.8c.24-.24.36-.6.315-.885-.06-.39-.375-.69-.765-.75-.36-.045-.735.075-.99.315l-4.36 4.36-2.76 2.76 2.76 2.76 4.36 4.34c.255.255.63.36.99.315.39-.06.705-.36.765-.75.045-.285-.09-.645-.315-.885l-5.8-5.78z" fill="#00D2FF"/>
            <path d="M14.97 11.56L4.12 22.408c.555.225 1.29.075 1.77-.375l10.08-10.08-1-1.005-.985-.975-.015.586z" fill="#FF3A44"/>
            <path d="M14.97 12.42l.015.585.985-.99 1-1.005L6.89.938c-.48-.45-1.215-.6-1.77-.375L14.97 11.415v1.005z" fill="#00E676"/>
          </svg>
          <div class="store-text">
            <span class="small-text">{{ currentLocale === 'id' ? 'Temukan di' : 'Get it on' }}</span>
            <span class="big-text">Google Play</span>
          </div>
        </a>

        <!-- App Store -->
        <a 
          href="https://apps.apple.com/app" 
          class="store-btn app-store"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download BarberPOS on the App Store"
        >
          <svg class="store-icon" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
             <path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z"/>
          </svg>
          <div class="store-text">
            <span class="small-text">{{ currentLocale === 'id' ? 'Download di' : 'Download on the' }}</span>
            <span class="big-text">App Store</span>
          </div>
        </a>

        <a 
          href="#modules" 
          class="ghost-btn"
          aria-label="Jump to modules"
        >
          {{ currentLocale === 'id' ? 'Lihat modul' : 'See modules' }}
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
