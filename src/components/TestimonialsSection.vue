<template>
  <section class="testimonials-section">
    <div class="container container-center">
       <span class="badge fade-in-up">{{ t.testimonials.subtitle }}</span>
       <h2 class="title fade-in-up delay-100">{{ t.testimonials.title }}</h2>
    </div>

    <div class="marquee-container fade-in-up delay-200">
      <div class="marquee-track">
         <!-- Duplicate content for seamless loop -->
         <div class="review-card" v-for="(item, index) in t.testimonials.items" :key="'a-'+index" :aria-label="`Testimonial ${index + 1}`">
            <div class="card-content">
               <div class="stars">★★★★★</div>
               <p class="review-text">"{{ item.text }}"</p>
               <div class="reviewer">
                  <div class="avatar-placeholder">{{ item.name.charAt(0) }}</div>
                  <div class="info">
                     <span class="name">{{ item.name }}</span>
                     <span class="role">{{ item.role }}</span>
                  </div>
               </div>
            </div>
         </div>
         <!-- Second set -->
         <div class="review-card" v-for="(item, index) in t.testimonials.items" :key="'b-'+index" :aria-label="`Testimonial ${index + 1}`">
            <div class="card-content">
               <div class="stars">★★★★★</div>
               <p class="review-text">"{{ item.text }}"</p>
               <div class="reviewer">
                  <div class="avatar-placeholder">{{ item.name.charAt(0) }}</div>
                  <div class="info">
                     <span class="name">{{ item.name }}</span>
                     <span class="role">{{ item.role }}</span>
                  </div>
               </div>
            </div>
         </div>
         <!-- Third set for wide screens -->
         <div class="review-card" v-for="(item, index) in t.testimonials.items" :key="'c-'+index" :aria-label="`Testimonial ${index + 1}`">
            <div class="card-content">
               <div class="stars">★★★★★</div>
               <p class="review-text">"{{ item.text }}"</p>
               <div class="reviewer">
                  <div class="avatar-placeholder">{{ item.name.charAt(0) }}</div>
                  <div class="info">
                     <span class="name">{{ item.name }}</span>
                     <span class="role">{{ item.role }}</span>
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

const { t } = useI18n();
useScrollObserver();
</script>

<style scoped>
.testimonials-section {
  padding: 100px 0;
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, transparent 0%, rgba(22, 118, 188, 0.05) 50%, transparent 100%);
}

.container-center {
  text-align: center;
  margin-bottom: 60px;
}

.badge {
  display: inline-block;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 100px;
  font-size: 0.85rem;
  color: var(--accent-primary);
  margin-bottom: 16px;
}

.title {
  font-size: 2.5rem;
  font-weight: 700;
}

.marquee-container {
  width: 100%;
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
}

.marquee-track {
  display: flex;
  gap: 24px;
  width: max-content;
  animation: scroll 40s linear infinite;
}

/* Pause on hover for readability */
.marquee-track:hover {
  animation-play-state: paused;
}

.review-card {
  width: 350px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 32px;
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease;
}

.review-card:hover {
  background: rgba(255, 255, 255, 0.06);
  transform: translateY(-5px);
  border-color: var(--accent-primary);
}

.stars {
  color: #FFD700;
  margin-bottom: 16px;
  font-size: 1.2rem;
}

.review-text {
  font-size: 1rem;
  line-height: 1.6;
  color: #ccc;
  margin-bottom: 24px;
  font-style: italic;
}

.reviewer {
  display: flex;
  align-items: center;
  gap: 12px;
}

.avatar-placeholder {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: white;
}

.info {
  display: flex;
  flex-direction: column;
}

.name {
  font-weight: 600;
  color: white;
  font-size: 0.95rem;
}

.role {
  font-size: 0.8rem;
  color: var(--text-secondary);
}

@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-100% / 3)); } /* Move by 1/3 since we have 3 sets */
}

@media (prefers-reduced-motion: reduce) {
  .marquee-track {
    animation: none;
    transform: none;
  }
}
</style>
