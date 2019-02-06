export const openFullscreen = () => {
  const elem = document.documentElement;

  if (elem.requestFullscreen) {
    elem.requestFullscreen().catch(error => console.error(error));
  } else if (elem.mozRequestFullScreen) {
    /* Firefox */
    elem.mozRequestFullScreen().catch(error => console.error(error));
  } else if (elem.webkitRequestFullscreen) {
    /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen().catch(error => console.error(error));
  } else if (elem.msRequestFullscreen) {
    /* IE/Edge */
    elem.msRequestFullscreen().catch(error => console.error(error));
  }
};

export const isFullscreenMode = () => Math.abs(window.screen.width - window.innerWidth) < 10;

/* Close fullscreen */
export const closeFullscreen = () => {
  const elem = document.documentElement;

  if (elem.exitFullscreen) {
    elem.exitFullscreen().catch(error => console.error(error));
  } else if (elem.mozCancelFullScreen) {
    /* Firefox */
    elem.mozCancelFullScreen().catch(error => console.error(error));
  } else if (elem.webkitExitFullscreen) {
    /* Chrome, Safari and Opera */
    elem.webkitExitFullscreen().catch(error => console.error(error));
  } else if (elem.msExitFullscreen) {
    /* IE/Edge */
    elem.msExitFullscreen().catch(error => console.error(error));
  }
};
