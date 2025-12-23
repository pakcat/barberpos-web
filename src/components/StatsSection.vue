<template>
  <section class="stats-section">
    <div class="container">
      <div class="section-header reveal-on-scroll">
        <h2 class="section-title">{{ t.stats.title }}</h2>
        <p class="section-subtitle">{{ t.stats.subtitle }}</p>
      </div>

      <div class="stats-grid">
        <div 
          v-for="(item, index) in t.stats.items" 
          :key="item.label" 
          class="stat-card glass-panel reveal-on-scroll"
          :class="`stagger-${index + 1}`"
        >
          <div class="value gradient-text">{{ item.value }}</div>
          <div class="label">{{ item.label }}</div>
          <div class="caption">{{ item.caption }}</div>
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
.stats-section {
  padding: 120px 0;
}

.section-header {
  text-align: center;
  margin-bottom: 48px;
}

.section-title {
  font-size: clamp(2.2rem, 3.5vw, 3rem);
}

.section-subtitle {
  color: var(--text-secondary);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}

.stat-card {
  padding: 24px;
  text-align: center;
}

.value {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 8px;
}

.label {
  color: white;
  font-weight: 600;
}

.caption {
  color: var(--text-secondary);
  margin-top: 4px;
  font-size: 0.95rem;
}

@media (max-width: 600px) {
  .stats-section { padding: 90px 0; }
}
</style>
