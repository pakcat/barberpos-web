<template>
  <section class="features-section" id="features">
    <div class="container overflow-hidden">
      <!-- Section Header -->
      <div class="section-header reveal-on-scroll">
        <div class="feature-tag">Engineered for Performance</div>
        <h2 class="section-title gradient-text">{{ t.features.title }}</h2>
        <p class="section-subtitle">{{ t.features.subtitle }}</p>
      </div>

      <!-- Bento Grid -->
      <div class="bento-grid">
        <div 
          v-for="(feature, index) in t.features.items" 
          :key="feature.title" 
          class="bento-card glass-panel reveal-on-scroll"
          :class="[getBentoClass(index), `stagger-${index + 1}`]"
        >
          <!-- Illuminated Border -->
          <div class="card-border"></div>
          
          <div class="card-content">
            <div class="icon-wrapper">
              <svg viewBox="0 0 24 24" fill="currentColor" class="feature-icon">
                <path :d="getFeatureIcon(feature.title)" />
              </svg>
            </div>
            
            <div class="text-group">
              <h3 class="feature-title">{{ feature.title }}</h3>
              <p class="feature-desc">{{ feature.description }}</p>
            </div>
          </div>
          
          <!-- Interactive Micro-Visuals -->
          <div class="card-visual">
             <div v-if="index === 0" class="visual-crm">
                <div class="ping-circle" v-for="n in 3" :key="n"></div>
                <div class="indicator-glow"></div>
             </div>
             <div v-if="index === 4" class="visual-checkout">
                <div class="mini-receipt">
                   <div class="receipt-line" v-for="n in 5" :key="n"></div>
                   <div class="receipt-seal">✓</div>
                </div>
             </div>
             <div v-if="index === 5" class="visual-reports">
                <div class="data-pulse"></div>
                <div class="bar-chart">
                  <div class="bar" style="--h: 40%"></div>
                  <div class="bar" style="--h: 90%"></div>
                  <div class="bar" style="--h: 60%"></div>
                </div>
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
import { featureIcons } from '../assets/featureIcons';

const { t } = useI18n();
useScrollObserver();

const getFeatureIcon = (title) => featureIcons[title] || featureIcons['Cashier & Payments'];

const getBentoClass = (index) => {
  if (index === 0) return 'span-2-col span-2-row'; // Featured CRM
  if (index === 4) return 'span-2-col'; // Wide Checkout
  return 'span-1';
};
</script>

<style scoped>
.features-section {
  padding: 180px 0;
  position: relative;
  background: var(--bg-color);
}

.section-header {
  text-align: center;
  margin-bottom: 100px;
}

.feature-tag {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  color: var(--accent-secondary);
  margin-bottom: 1rem;
}

.section-title {
  font-size: clamp(3rem, 6vw, 4.5rem);
  margin-bottom: 1.5rem;
}

.section-subtitle {
  color: var(--text-secondary);
  font-size: 1.25rem;
  max-width: 650px;
  margin: 0 auto;
}

/* Bento Grid */
.bento-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(280px, auto);
  gap: 24px;
}

.bento-card {
  padding: 40px;
  position: relative;
  overflow: hidden;
  transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.5s;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 280px;
}

/* Illuminated Border Logic */
.card-border {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  border-radius: inherit;
  border: 1px solid rgba(255, 255, 255, 0.05);
  pointer-events: none;
  transition: border-color 0.3s;
  z-index: 2;
}

.bento-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.5);
}

.bento-card:hover .card-border {
  border-color: var(--accent-primary);
  box-shadow: inset 0 0 15px rgba(22, 118, 188, 0.2);
}

.bento-card:nth-child(even):hover .card-border {
  border-color: var(--accent-secondary);
  box-shadow: inset 0 0 15px rgba(238, 50, 43, 0.2);
}

.icon-wrapper {
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
  color: #fff;
  transition: all 0.3s;
}

.bento-card:hover .icon-wrapper {
  background: var(--accent-primary);
  border-color: transparent;
  transform: rotate(-5deg) scale(1.1);
}

.bento-card:nth-child(even):hover .icon-wrapper {
  background: var(--accent-secondary);
}

.feature-icon {
  width: 28px;
  height: 28px;
}

.feature-title {
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: #fff;
}

.feature-desc {
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.6;
  max-width: 90%;
}

/* Visual Mockups */
.card-visual {
  position: absolute;
  bottom: 0; right: 0;
  width: 100%; height: 100%;
  pointer-events: none;
  z-index: 0;
  opacity: 0.15;
  transition: opacity 0.3s;
}

.bento-card:hover .card-visual {
  opacity: 0.4;
}

/* CRM Visual */
.visual-crm {
  position: absolute;
  bottom: -40px; right: -40px;
  width: 220px; height: 220px;
}

.ping-circle {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid var(--accent-primary);
  border-radius: 50%;
  width: 100%; height: 100%;
  animation: ping 4s infinite cubic-bezier(0, 0, 0.2, 1);
}

.ping-circle:nth-child(2) { animation-delay: 1s; }
.ping-circle:nth-child(3) { animation-delay: 2s; }

@keyframes ping {
  75%, 100% {
    transform: translate(-50%, -50%) scale(1.5);
    opacity: 0;
  }
}

/* Checkout Visual */
.visual-checkout {
  position: absolute;
  bottom: 20px; right: 40px;
}

.mini-receipt {
  width: 70px; height: 100px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  transform: rotate(10deg);
}

.receipt-line {
  height: 4px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
}

.receipt-seal {
  margin-top: auto;
  align-self: flex-end;
  color: #4ade80;
  font-weight: 900;
}

/* Reports Visual */
.visual-reports {
  position: absolute;
  bottom: 30px; right: 30px;
  display: flex;
  gap: 10px;
}

.bar-chart {
  display: flex;
  gap: 6px;
  align-items: flex-end;
  height: 60px;
}

.bar {
  width: 10px;
  height: var(--h);
  background: var(--accent-secondary);
  border-radius: 3px;
  animation: grow 2s infinite alternate ease-in-out;
}

@keyframes grow {
  from { height: calc(var(--h) * 0.7); }
  to { height: var(--h); }
}

/* Layout Variants */
.span-2-col { grid-column: span 2; }
.span-2-row { grid-row: span 2; }

@media (max-width: 1280px) {
  .bento-grid { grid-template-columns: repeat(3, 1fr); }
}

@media (max-width: 1024px) {
  .bento-grid { grid-template-columns: repeat(2, 1fr); }
  .span-2-col { grid-column: span 2; }
}

@media (max-width: 768px) {
  .section-header { margin-bottom: 60px; }
  .bento-grid { display: flex; flex-direction: column; }
  .bento-card { min-height: 240px; }
  .span-2-row { grid-row: auto; }
}
</style>
