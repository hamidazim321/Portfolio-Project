let Navlinks;
let target;
let observer;
const largestratio = {};
function buildThresholdList() {
  const thresholds = [];
  const numSteps = 100;

  for (let i = 1.0; i <= numSteps; i += 1) {
    const ratio = i / numSteps;
    thresholds.push(ratio);
  }

  thresholds.push(0);
  return thresholds;
}

function ScrollSpy() {
  if (window.innerWidth > 767) {
    Navlinks = document.querySelectorAll('.nav-link a');

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const intersecting = entry.isIntersecting;
        largestratio[entry.target.id] = entry.intersectionRatio;
        if (intersecting && entry.intersectionRatio === Math.max(...Object.values(largestratio))) {
          Navlinks.forEach((link) => {
            if (link.getAttribute('href').slice(1) === entry.target.getAttribute('id')) {
              link.style.textDecoration = 'Underline';
            } else if (link.getAttribute('href').slice(1) !== entry.target.getAttribute('id')) {
              link.style.textDecoration = 'none';
            }
          });
        } else {
          Navlinks.forEach((link) => {
            link.style.textDecoration = 'none';
          });
        }
      });
    }, { threshold: buildThresholdList(), rootMargin: '0px', root: null });

    Navlinks.forEach((links) => {
      const id = links.getAttribute('href');
      target = document.querySelector(id);
      observer.observe(target);
    });
  }
}

export default ScrollSpy;