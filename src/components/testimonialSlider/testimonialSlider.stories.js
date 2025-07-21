import html from './testimonial-slider.html?raw';
import './testimonial-slider.scss';

export default {
  title: 'components/TestimonialSlider',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  render: () => {
    const container = document.createElement('section');
    container.innerHTML = html;
    import('./testimonialSlider.js').then((module) => {
      if (typeof module.default === 'function') {
        module.default(container.firstChild);
      }
    });
    return container;
  },
};

export const testimonialSlider = {};
