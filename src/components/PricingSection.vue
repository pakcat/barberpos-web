<template>
  <section class="pricing-section" id="pricing">
    <div class="container">
      <div class="section-header reveal-on-scroll">
        <h2 class="section-title">{{ t.pricing.title }}</h2>
        <p class="section-subtitle">{{ t.pricing.subtitle }}</p>
      </div>

      <div class="pricing-grid">
        <div 
          v-for="(plan, index) in t.pricing.plans" 
          :key="plan.name" 
          class="pricing-card glass-panel reveal-on-scroll"
          :class="['stagger-' + (index + 1), { featured: index === 1 }]"
        >
          <div class="plan-name">{{ plan.name }}</div>
          <div class="price">
            <span class="amount">{{ plan.price }}</span>
            <span class="period">{{ plan.period }}</span>
          </div>
          <p class="description">{{ plan.description }}</p>
          <ul class="feature-list">
            <li v-for="feature in plan.features" :key="feature">{{ feature }}</li>
          </ul>
          <span class="plan-note">{{ plan.cta }}</span>
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
.pricing-section {
  padding: 130px 0;
}

.section-header {
  text-align: center;
  margin-bottom: 56px;
}

.section-title {
  font-size: clamp(2.3rem, 3.8vw, 3.2rem);
}

.section-subtitle {
  color: var(--text-secondary);
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.pricing-card {
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
}

.pricing-card.featured {
  border: 1px solid rgba(22, 118, 188, 0.5);
  box-shadow: 0 20px 40px rgba(22, 118, 188, 0.25);
}

.plan-name {
  color: white;
  font-weight: 800;
  font-size: 1.2rem;
}

.price {
  display: flex;
  align-items: baseline;
  gap: 8px;
}

.amount {
  font-size: 2.4rem;
  font-weight: 800;
}

.period {
  color: var(--text-secondary);
  font-size: 0.95rem;
}

.description {
  color: var(--text-secondary);
  line-height: 1.5;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #d9d9d9;
}

.feature-list li {
  position: relative;
  padding-left: 18px;
}

.feature-list li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--accent-primary);
}

.plan-cta {
  margin-top: auto;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  color: white;
  text-decoration: none;
  font-weight: 700;
  transition: transform 0.2s ease;
}

.plan-cta:hover {
  transform: translateY(-2px);
}

.plan-note {
  margin-top: auto;
  display: inline-block;
  color: var(--text-secondary);
  font-weight: 600;
}

@media (max-width: 600px) {
  .pricing-section { padding: 100px 0; }
}
</style>
