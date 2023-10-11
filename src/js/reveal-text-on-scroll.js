import SplitType from 'split-type';

if (!gsap || !SplitType) {
  return console.error('Gsap or SplitType were not loaded');
}

const matchesMobile = window?.matchMedia('(max-width: 1243px)')?.matches;

new SplitType('.split-text', {
  types: 'words, chars',
  tagName: 'span',
});

const textRevealTimeline = gsap.timeline();
const imagesTimeline = gsap.timeline();

/*
 * triggers animation when #white-bevelled-box element
 * is in viewport on 30% of it's size from bottom
 * this animations pulls container with images from bottom to top
 */
imagesTimeline.to('.scroll-up', {
  scrollTrigger: {
    trigger: '#white-bevelled-box',
    start: 'top 0%',
    // start: 'bottom 30%',
    scrub: 0.2,
    end: '+=2200',
  },
  y: '-300%',
  ease: 'none', // !IMPORTANT
});

/*
 * triggers animation when #white-bevelled-box element
 * is in viewport on 30% of it's size from bottom
 * this animations puls makes opacity grow on scroll
 */
imagesTimeline.to('.scroll-up', {
  scrollTrigger: {
    trigger: '#white-bevelled-box',
    start: 'top 0%',
    scrub: 2,
    end: '+=500', // some thin like speed or velocity
  },
  ease: 'none', // !IMPORTANT
  opacity: 1,
});

/*
 * reveal text animation
 */
textRevealTimeline.to('#white-bevelled-box', {
  scrollTrigger: {
    trigger: '.is--animated_text',
    start: matchesMobile ? 'top 30%' : 'top 10%',
    scrub: 0.3,
    pin: true,
    containerAnimation: imagesTimeline,
  },
  // scale: 1.3,
});

textRevealTimeline.from('.is--animated_text .char', {
  scrollTrigger: {
    trigger: '.is--animated_text',
    start: matchesMobile ? 'top 30%' : 'top 10%',
    end: '+=2000',
    scrub: 1,
    pin: true,
  },
  opacity: 0.05,
  // scale: 1.35,
  ease: 'back.out(2)',
  stagger: { amount: 10, from: 'start' },
});

gsap.to('.certificated-by', {
  opacity: 1,
  duration: 0.5,
  scrollTrigger: {
    trigger: '.certificated-by',
    start: '60% bottom',
    scrub: true,
    once: true,
  },
});
