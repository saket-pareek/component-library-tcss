export default function videoTrailerPopup(el) {
  const ctaEl = el.querySelector('.video-trailer-popup__cta');
  const infoEl = el.querySelector('.video-trailer-popup__info');
  const playerEl = el.querySelector('.video-trailer-popup__player');
  const closeEl = el.querySelector('.video-trailer-popup__close');
  const videoEl = el.querySelector('.video-trailer-popup__video');

  const renderPlayer = () => {
    infoEl.classList.add('hidden');
    playerEl.classList.remove('hidden');
  };

  const renderInfo = () => {
    videoEl.currentTime = 0;
    videoEl.pause();
    infoEl.classList.remove('hidden');
    playerEl.classList.add('hidden');
  };

  closeEl.addEventListener('click', renderInfo);
  ctaEl.addEventListener('click', renderPlayer);
}
