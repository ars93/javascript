function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

const handleResize = debounce(() => {
  console.log('Resized!');
}, 200);

window.addEventListener('resize', handleResize);

// A function is called after a certain delay, and if it's triggered again within the delay, the timer resets.
