<template>
  <section class="security-section" id="security">
    <div class="container">
      <div class="section-header reveal-on-scroll">
        <h2 class="section-title">{{ t.security.title }}</h2>
        <p class="section-subtitle">{{ t.security.subtitle }}</p>
      </div>

      <div class="security-grid">
        <div 
          v-for="(item, index) in t.security.items" 
          :key="item.title" 
          class="security-card glass-panel reveal-on-scroll"
          :class="`stagger-${(index % 6) + 1}`"
        >
          <div class="card-title">{{ item.title }}</div>
          <p class="card-desc">{{ item.description }}</p>
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
.security-section {
  padding: 110px 0;
}

.section-header {
  text-align: center;
  margin-bottom: 48px;
}

.section-title {
  font-size: clamp(2.1rem, 3.6vw, 3rem);
}

.section-subtitle {
  color: var(--text-secondary);
}

.security-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
}

.security-card {
  padding: 22px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.card-title {
  color: white;
  font-weight: 700;
  font-size: 1.05rem;
}

.card-desc {
  color: var(--text-secondary);
  line-height: 1.6;
}

@media (max-width: 600px) {
  .security-section { padding: 90px 0; }
}
</style>
