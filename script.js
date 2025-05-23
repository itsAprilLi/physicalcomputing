// 动画标题
const titles = [
  { id: "t1", x: 0, speed: 1.2, direction: 1 },
  { id: "t2", x: 0, speed: 0.9, direction: -1 },
  { id: "t3", x: 0, speed: 1.0, direction: 1 },
];

function animateTitles() {
  titles.forEach(obj => {
    const el = document.getElementById(obj.id);
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

