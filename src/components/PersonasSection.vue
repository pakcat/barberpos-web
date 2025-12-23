<template>
  <section class="personas-section">
    <div class="container">
      <div class="section-header reveal-on-scroll">
        <h2 class="section-title">{{ t.personas.title }}</h2>
        <p class="section-subtitle">{{ t.personas.subtitle }}</p>
      </div>

      <div class="persona-grid">
        <div class="persona-card glass-panel reveal-on-scroll stagger-1">
          <h3>{{ t.personas.owner.title }}</h3>
          <p>{{ t.personas.owner.body }}</p>
        </div>
        <div class="persona-card glass-panel reveal-on-scroll stagger-2">
          <h3>{{ t.personas.barber.title }}</h3>
          <p>{{ t.personas.barber.body }}</p>
        </div>
        <div class="persona-card glass-panel reveal-on-scroll stagger-3">
          <h3>{{ t.personas.client.title }}</h3>
          <p>{{ t.personas.client.body }}</p>
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
.personas-section {
  padding: 110px 0;
}

.section-header {
  text-align: center;
  margin-bottom: 40px;
}

.section-title {
  font-size: clamp(2.2rem, 3.5vw, 3rem);
}

.section-subtitle {
  color: var(--text-secondary);
}

.persona-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
}

.persona-card {
  padding: 24px;
  min-height: 170px;
}

.persona-card h3 {
  color: white;
  margin-bottom: 10px;
}

.persona-card p {
  color: var(--text-secondary);
  line-height: 1.6;
}

@media (max-width: 600px) {
  .personas-section { padding: 90px 0; }
}
</style>
