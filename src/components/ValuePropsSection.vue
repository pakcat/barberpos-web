<template>
  <section class="value-section" id="value">
    <div class="container">
      <div class="section-header reveal-on-scroll">
        <h2 class="section-title">{{ t.valueProps.title }}</h2>
        <p class="section-subtitle">{{ t.valueProps.subtitle }}</p>
      </div>

      <div class="grid">
        <div
          v-for="(item, index) in t.valueProps.items"
          :key="item.title"
          class="card glass-panel reveal-on-scroll"
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
.value-section {
  padding: 140px 0 120px;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-title {
  font-size: clamp(2.4rem, 4vw, 3.2rem);
  margin-bottom: 12px;
}

.section-subtitle {
  color: var(--text-secondary);
  font-size: 1.1rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
}

.card {
  padding: 24px;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.card-title {
  color: white;
  font-weight: 700;
  font-size: 1.1rem;
}

.card-desc {
  color: var(--text-secondary);
  line-height: 1.6;
}

@media (max-width: 600px) {
  .value-section {
    padding: 100px 0 90px;
  }
}
</style>
