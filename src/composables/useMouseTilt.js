import { ref } from 'vue';

export function useMouseTilt(targetRef, intensity = 15) {
  const transform = ref('rotateX(0deg) rotateY(0deg)');
  const transition = ref('transform 0.1s ease-out');
  const isTouchOrReduced = typeof window !== 'undefined' && (
    'ontouchstart' in window ||
    (navigator && (navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0)) ||
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  );

  const handleMouseMove = (e) => {
    if (!targetRef.value || isTouchOrReduced) return;

    const { left, top, width, height } = targetRef.value.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / (width / 2);
    const y = (e.clientY - top - height / 2) / (height / 2);

    // RotateX is constrained by Y axis movement, RotateY by X axis
    const rotateX = -y * intensity; 
    const rotateY = x * intensity;

    // Use a simpler transform string without perspective (handled in CSS parent)
    transform.value = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    if (isTouchOrReduced) return;
    transform.value = 'rotateX(0deg) rotateY(0deg)';
    transition.value = 'transform 0.5s ease-out';
  };

  const handleMouseEnter = () => {
    if (isTouchOrReduced) return;
     transition.value = 'transform 0.1s ease-out';
  }

  return {
    transform,
    transition,
    handleMouseMove,
    handleMouseLeave,
    handleMouseEnter
  };
}
