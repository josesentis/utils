let currentScroll = document.pageYOffset;
let animationFrame = null;

const scrollSkewer = () => {
  const newScroll = window.pageYOffset;
  
  if (currentScroll !== newScroll) {
    const diff = newScroll - currentScroll;
    const speed = diff * 0.15;

    currentScroll = newScroll;
    document.body.transform = `skewY(${speed}deg)`;
  }
};

const init = () => {
  scrollSkewer();
  animationFrame = requestAnimationFrame(scrollSkewer);
};

const destroy = () => {
  if (animationFrame) cancelAnimationFrame(animationFrame);
};


export default { init, destroy };
