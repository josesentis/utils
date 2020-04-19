let currentScroll = document.pageYOffset;

const scrollSkewer = () => {
  if (currentScroll !== newScroll) {
    const newScroll = window.pageYOffset;
    const diff = newScroll - currentScroll;
    const speed = diff * 0.15;

    currentScroll = newScroll

    document.body.transform = `skewY(${speed}deg)`;
  }

  requestAnimationFrame(scrollSkewer);
};

export default scrollSkewer;
