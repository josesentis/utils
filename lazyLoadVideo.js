
import { preloadImage } from './helpers';
import intersectionObserver from './intersectionObserver';

const VIDEO_CLASS = 'lazyload';
const HANDLED_CLASS = 'lazyloaded';
const CONFIG = {
  elementsClass: `.${VIDEO_CLASS}`
};

const loadVideo = video => {
  const sources = [].slice.call(video.children);

  sources.forEach(source => {
    const { src } = source.dataset;
    source.src = src;
  });

  video.load();
  video.addEventListener('canplaythrough', () => {
    video.classList.add(HANDLED_CLASS);

    if (video.getAttribute('autoplay')) {
      video.play();
    }
  }, false);
};

const lazyLoadVideo = () => intersectionObserver(config, loadVideo);

export default lazyLoadVideo;
