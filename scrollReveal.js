const TARGET_CLASS = 'js-anim';
const HANDLED_CLASS = 'animated';
const OFFSET = 50;

const scrollReveal = () => {
  const items = [].slice.call(document.querySelectorAll(`.${TARGET_CLASS`));

  items.forEach(item => {
    if (window.innerHeight - OFFSET > item.getBoundingClientRect().top) {
      item.classList.add(HANDLED_CLASS);
    }
  });
}

const init = () => {
  scrollReveal();

  window.addEventListener('scroll', scrollReveal);
};

const destroy = () => {
  window.removeEventListener('scroll', scrollReveal);
};

export default { init, destroy };
