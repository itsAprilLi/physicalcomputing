
  const titles = [
    { id: "subtitle1", x: 0, speed: 0.7, direction: 1 },
    { id: "subtitle2", x: 0, speed: 0.5, direction: -1 },
    { id: "subtitle3", x: 0, speed: 0.7, direction: 1 }
  ]
  ;


function animateTitles() {
  titles.forEach(obj => {
    const el = document.getElementById(obj.id);
    if (!el) return; // 防止页面没这个 id 出错
    obj.x += obj.speed * obj.direction;
    el.style.transform = `translateX(${obj.x}px)`;

    const rect = el.getBoundingClientRect();
    if (rect.left <= 0 || rect.right >= window.innerWidth) {
      obj.direction *= -1;
    }
  });
  requestAnimationFrame(animateTitles);
}
animateTitles();

let currentDrag = null;
let offsetX = 0;
let offsetY = 0;

document.querySelectorAll('.draggable-window').forEach(window => {
  const titleBar = window.querySelector('.window-title');

  titleBar.addEventListener('mousedown', (e) => {
    currentDrag = window;
    offsetX = e.clientX - currentDrag.offsetLeft;
    offsetY = e.clientY - currentDrag.offsetTop;
    window.style.zIndex = 999;
    e.preventDefault();
  });
});

document.addEventListener('mousemove', (e) => {
  if (currentDrag) {
    currentDrag.style.left = `${e.clientX - offsetX}px`;
    currentDrag.style.top = `${e.clientY - offsetY}px`;
  }
});

document.addEventListener('mouseup', () => {
  currentDrag = null;
});

