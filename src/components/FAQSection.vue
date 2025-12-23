<template>
  <section class="faq-section" id="faq">
    <div class="container">
      <div class="header-center">
        <h2 class="title fade-in-up">{{ t.faq.title }}</h2>
        <p class="subtitle fade-in-up delay-100">{{ t.faq.subtitle }}</p>
      </div>

      <div class="faq-grid fade-in-up delay-200">
        <div 
          v-for="(item, index) in t.faq.items" 
          :key="index"
          class="faq-item"
          :class="{ active: activeIndex === index }"
          role="button"
          :aria-expanded="activeIndex === index"
          :aria-label="`FAQ ${index + 1}: ${item.q}`"
          @click="toggle(index)"
        >
          <div class="question">
            <span>{{ item.q }}</span>
            <span class="icon">+</span>
          </div>
          <div class="answer" :style="{ maxHeight: activeIndex === index ? '200px' : '0' }">
             <div class="answer-inner">
               {{ item.a }}
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from '../composables/useI18n';
import { useScrollObserver } from '../composables/useScrollObserver';

const { t } = useI18n();
useScrollObserver();

const activeIndex = ref(0);

const toggle = (index) => {
  if (activeIndex.value === index) {
    activeIndex.value = null;
  } else {
    activeIndex.value = index;
  }
};
</script>

<style scoped>
.faq-section {
  padding: 120px 0;
  background: var(--bg-color);
}

.header-center {
  text-align: center;
  margin-bottom: 60px;
}

.title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 16px;
}

.subtitle {
  color: var(--text-secondary);
}

.faq-grid {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.faq-item {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
}

.faq-item:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.2);
}

.faq-item.active {
  background: rgba(22, 118, 188, 0.1); /* Brand blue tint */
  border-color: var(--accent-primary);
}

.question {
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  font-size: 1.1rem;
}

.icon {
  font-size: 1.5rem;
  font-weight: 300;
  transition: transform 0.3s ease;
}

.faq-item.active .icon {
  transform: rotate(45deg);
  color: var(--accent-secondary);
}

.answer {
  overflow: hidden;
  transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.answer-inner {
  padding: 0 24px 24px 24px;
  color: var(--text-secondary);
  line-height: 1.6;
}
</style>
