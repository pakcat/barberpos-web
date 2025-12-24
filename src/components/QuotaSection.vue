<template>
  <section class="quota-section">
    <div class="container">
      <div class="quota-card glass-panel reveal-scale">
        <div class="content">
          <h2 class="title">{{ t.quota.title }}</h2>
          <div class="stat-highlight">
            <span class="number gradient-text infinite-float">1,000</span>
            <span class="label">{{ t.quota.statLabel }}</span>
          </div>
          <p class="description" v-html="t.quota.description"></p>
          <a
            class="btn btn-primary pulse-btn hover-elevate quota-btn"
            href="https://wa.me/6282234534016"
            target="_blank"
            rel="noopener noreferrer"
          >{{ t.quota.cta }}</a>
        </div>
        
        <div class="visual">
           <div class="hud-container">
             <!-- Outer Ring -->
             <svg class="hud-ring outer" viewBox="0 0 100 100">
               <circle cx="50" cy="50" r="48" stroke="rgba(255,255,255,0.1)" stroke-width="1" fill="none" stroke-dasharray="4 4" />
             </svg>
             <!-- Middle Ring -->
             <svg class="hud-ring middle" viewBox="0 0 100 100">
               <circle cx="50" cy="50" r="40" stroke="rgba(22, 118, 188, 0.2)" stroke-width="2" fill="none" />
             </svg>
             <!-- Progress Ring -->
             <svg class="hud-ring progress-ring" viewBox="0 0 100 100">
               <defs>
                 <linearGradient id="hudGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                   <stop offset="0%" stop-color="#1676BC" />
                   <stop offset="100%" stop-color="#EE322B" />
                 </linearGradient>
               </defs>
               <circle cx="50" cy="50" r="40" stroke="url(#hudGradient)" stroke-width="4" fill="none" stroke-linecap="round" stroke-dasharray="251" stroke-dashoffset="251" class="fill-anim" />
             </svg>
             
             <div class="hud-text">
               <span class="glitch-text">{{ t.quota.meterText }}</span>
             </div>
           </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '../composables/useI18n';
import { useScrollObserver } from '../composables/useScrollObserver';

const { t } = useI18n();
useScrollObserver();
</script>

<style scoped>
.quota-section {
  padding: clamp(120px, 18vw, 160px) 0;
  perspective: 1000px;
}

.quota-card {
  padding: clamp(48px, 8vw, 80px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  background: rgba(10, 10, 10, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.quota-btn {
  white-space: nowrap;
  padding: 18px 48px;
  font-size: 1.1rem;
}

/* Background Highlight */
.quota-card::before {
  content: '';
  position: absolute;
  top: -50%; right: -50%;
  width: 100%; height: 100%;
  background: radial-gradient(circle, rgba(22, 118, 188, 0.15), transparent 70%);
  filter: blur(60px);
}

.content {
  flex: 1;
  z-index: 2;
}

.title {
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: 32px;
}

.stat-highlight {
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
}

.number {
  font-size: clamp(3.5rem, 8vw, 6rem);
  font-weight: 900;
  line-height: 1;
  display: inline-block;
  text-shadow: 0 0 30px rgba(22, 118, 188, 0.3);
}

.infinite-float {
  animation: float 6s ease-in-out infinite;
}

.label {
  font-size: 1.5rem;
  color: var(--text-secondary);
  margin-top: 8px;
}

.description {
  color: #ccc;
  margin-bottom: 40px;
  font-size: 1.1rem;
  font-size: 1.1rem;
  max-width: 500px;
}

:deep(.top-up-note) {
  display: block;
  margin-top: 12px;
  font-size: 0.9rem;
  color: var(--accent-primary);
  font-weight: 600;
  opacity: 0.9;
  line-height: 1.5;
}

.hover-elevate {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.hover-elevate:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(22, 118, 188, 0.3);
}

/* HUD Visual */
.visual {
  flex: 1;
  display: flex;
  justify-content: center;
  z-index: 2;
}

.hud-container {
  width: 300px;
  height: 300px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hud-ring {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  transform: rotate(-90deg);
}

.outer {
  animation: spin 20s linear infinite;
}

.fill-anim {
  animation: fillProgress 2s 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}

@keyframes fillProgress {
  to { stroke-dashoffset: 40; }
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.hud-text {
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  color: white;
  text-shadow: 0 0 20px var(--accent-secondary);
}

@media (max-width: 900px) {
  .quota-card {
    flex-direction: column;
    text-align: center;
    padding: 40px 24px;
  }
  .visual {
    margin-top: 60px;
  }
}

@media (max-width: 600px) {
  .quota-section {
    padding: 100px 0 80px;
  }
  .quota-card {
    padding: 32px 20px;
  }
  .description {
    margin-bottom: 32px;
  }
}
</style>
