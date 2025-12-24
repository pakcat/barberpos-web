<template>
  <section class="modules-section" id="modules">
    <div class="container overflow-hidden">
      <!-- Section Header -->
      <div class="section-header reveal-on-scroll">
        <div class="module-tag">System Modules</div>
        <h2 class="section-title gradient-text">{{ t.modules.title }}</h2>
        <p class="section-subtitle">{{ t.modules.subtitle }}</p>
      </div>

      <div class="modules-explorer reveal-on-scroll delay-200">
        <!-- Sidebar Navigation -->
        <nav class="module-nav" aria-label="Module selection">
          <button 
            v-for="(item, index) in t.modules.items" 
            :key="item.title"
            class="module-selector"
            :class="{ active: activeModuleIndex === index }"
            @click="activeModuleIndex = index"
            type="button"
          >
            <div class="selector-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path :d="getModuleIcon(item.title)" />
              </svg>
            </div>
            <div class="selector-text">
              <span class="selector-title">{{ item.title }}</span>
              <span class="selector-dot"></span>
            </div>
          </button>
        </nav>

        <!-- Dynamic Visualization Display -->
        <div class="module-display">
          <div class="display-glow" :style="glowStyle"></div>
          
          <Transition name="slide-fade" mode="out-in">
            <div :key="activeModuleIndex" class="module-content">
              <div class="content-text">
                <h3 class="active-title">{{ activeModule.title }}</h3>
                <p class="active-desc">{{ activeModule.description }}</p>
                
                <div class="module-features">
                  <div class="feature-item" v-for="f in getQuickFeatures(activeModule.title)" :key="f">
                    <span class="feature-check">✓</span> {{ f }}
                  </div>
                </div>
              </div>

              <!-- Module Mockup Visual -->
              <div class="content-visual">
                <div class="visual-card">
                  <div class="visual-header">
                    <div class="dots"><span></span><span></span><span></span></div>
                    <div class="address-bar">{{ activeModule.title.split(' ')[0] }}.barberpos.app</div>
                  </div>
                  <div class="visual-body">
                    <!-- Dynamic Component based on module -->
                    <div :class="['mockup-scene', activeModuleClass]">
                      <div class="mockup-element el-1"></div>
                      <div class="mockup-element el-2"></div>
                      <div class="mockup-element el-3"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useI18n } from '../composables/useI18n';
import { useScrollObserver } from '../composables/useScrollObserver';
import { moduleIcons } from '../assets/moduleIcons';

const { t } = useI18n();
useScrollObserver();

const activeModuleIndex = ref(0);

const activeModule = computed(() => t.value.modules.items[activeModuleIndex.value]);

const getModuleIcon = (title) => moduleIcons[title] || moduleIcons['Dashboard & Insights'];

const getQuickFeatures = (title) => {
  const features = {
    'Dashboard & Insights': ['Daily summary', 'Top services', 'Top staff'],
    'Cashier & Payments': ['Cash sale', 'Receipt printing', 'Offline queue (cash)'],
    'Membership & Quota': ['Monthly quota reset', 'Top-up by manager', 'Customer history'],
    'Products & Stock': ['Stock tracking', 'Adjustments history', 'Stock overview'],
    'Staff & Activity Logs': ['Roles & access', 'Attendance', 'Activity logs'],
    'Closing & Reports': ['Closing summary', 'Finance entries', 'CSV/XLSX export'],
    'Notifications': ['In-app notifications', 'Delivery token', 'History']
  };
  return features[title] || ['Fast', 'Secure', 'Intuitive'];
};

const activeModuleClass = computed(() => {
  return activeModule.value.title.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');
});

const glowStyle = computed(() => {
  const colors = [
    'rgba(22, 118, 188, 0.4)', // Blue
    'rgba(238, 50, 43, 0.4)',   // Red
    'rgba(22, 188, 118, 0.4)',  // Greenish
    'rgba(188, 22, 188, 0.4)',  // Purple
  ];
  return {
    background: `radial-gradient(circle, ${colors[activeModuleIndex.value % colors.length]}, transparent 70%)`
  };
});
</script>

<style scoped>
.modules-section {
  padding: 160px 0;
  position: relative;
  background: var(--bg-color);
}

.section-header {
  text-align: center;
  margin-bottom: 80px;
}

.module-tag {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  color: var(--accent-primary);
  margin-bottom: 1rem;
}

.section-title {
  font-size: clamp(2.8rem, 5vw, 4rem);
  margin-bottom: 1.5rem;
}

.section-subtitle {
  color: var(--text-secondary);
  font-size: 1.25rem;
  max-width: 650px;
  margin: 0 auto;
}

.modules-explorer {
  display: flex;
  gap: 40px;
  min-height: 520px;
}

/* Sidebar Nav */
.module-nav {
  width: 320px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.module-selector {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  text-align: left;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  cursor: pointer;
  color: var(--text-secondary);
}

.module-selector:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(255, 255, 255, 0.1);
  transform: translateX(8px);
}

.module-selector.active {
  background: rgba(22, 118, 188, 0.1);
  border-color: var(--accent-primary);
  color: white;
  box-shadow: 0 10px 20px -5px rgba(22, 118, 188, 0.2);
}

.selector-icon {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.3s;
}

.selector-icon svg {
  width: 24px;
  height: 24px;
}

.active .selector-icon {
  background: var(--accent-primary);
  color: white;
}

.selector-text {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.selector-title {
  font-weight: 600;
  font-size: 1.1rem;
}

.selector-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent-primary);
  opacity: 0;
  transition: opacity 0.3s;
}

.active .selector-dot {
  opacity: 1;
}

/* Display Area */
.module-display {
  flex: 1;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 32px;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(20px);
}

.display-glow {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 100%; height: 100%;
  pointer-events: none;
  z-index: 0;
  transition: background 1s ease;
}

.module-content {
  position: relative;
  z-index: 1;
  padding: 60px;
  display: flex;
  align-items: center;
  gap: 60px;
  height: 100%;
}

.content-text {
  flex: 1;
}

.active-title {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.active-desc {
  font-size: 1.15rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 32px;
}

.module-features {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
}

.feature-check {
  color: var(--accent-primary);
  font-weight: 800;
}

/* Visual Mockup */
.content-visual {
  flex: 1.2;
}

.visual-card {
  background: #0a0a0a;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  box-shadow: 0 40px 80px -20px rgba(0,0,0,0.8);
  height: 380px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.visual-header {
  height: 40px;
  background: #1a1a1a;
  display: flex;
  align-items: center;
  padding: 0 16px;
  gap: 12px;
}

.dots { display: flex; gap: 6px; }
.dots span { width: 8px; height: 8px; border-radius: 50%; background: #333; }

.address-bar {
  background: #050505;
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 0.7rem;
  color: #666;
  flex: 1;
  text-align: center;
}

.visual-body {
  flex: 1;
  padding: 20px;
  position: relative;
}

.mockup-scene {
  width: 100%; height: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.mockup-element {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
}

/* Specific Mockups Patterns */
.dashboard-insights .el-1 { width: 100%; height: 60px; background: rgba(22, 118, 188, 0.2); }
.dashboard-insights .el-2 { width: 60%; height: 120px; }
.dashboard-insights .el-3 { width: 35%; height: 120px; position: absolute; right: 20px; top: 95px; }

.cashier-payments .el-1 { width: 40%; height: 180px; }
.cashier-payments .el-2 { width: 55%; height: 40px; position: absolute; right: 20px; top: 20px; background: rgba(238, 50, 43, 0.1); }
.cashier-payments .el-3 { width: 55%; height: 120px; position: absolute; right: 20px; top: 75px; }

/* Transitions */
.slide-fade-enter-active {
  transition: all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.slide-fade-enter-from {
  transform: translateY(20px);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

@media (max-width: 1100px) {
  .modules-explorer { flex-direction: column; }
  .module-nav { width: 100%; flex-direction: row; overflow-x: auto; padding-bottom: 10px; }
  .module-selector { flex-shrink: 0; width: 280px; }
}

@media (max-width: 768px) {
  .module-content { flex-direction: column; padding: 40px; gap: 40px; text-align: center; }
  .active-title { font-size: 1.8rem; }
  .module-features { justify-content: center; display: flex; flex-wrap: wrap; }
  .content-visual { width: 100%; }
}
</style>
