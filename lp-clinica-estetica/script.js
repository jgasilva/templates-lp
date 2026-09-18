document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.accordion-item');
  accordions.forEach(item => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        accordions.forEach(otherItem => {
          if (otherItem !== item && otherItem.open) {
            otherItem.open = false;
          }
        });
      }
    });
  });
});
