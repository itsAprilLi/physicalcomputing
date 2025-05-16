// 初始化每个元素的速度和方向
const elements = document.querySelectorAll('.title');
const speeds = [];
const directions = [];

elements.forEach((el, i) => {
  el.style.left = `${50 + i * 20}px`; // 初始位置不同
  speeds[i] = 1 + Math.random() * 1.5; // 每行速度不一样
  directions[i] = Math.random() < 0.5 ? 1 : -1; // 初始方向随机
});

function animate() {
  elements.forEach((el, i) => {
    let left = parseFloat(el.style.left);
    left += speeds[i] * directions[i];
    el.style.left = `${left}px`;

    // 如果碰到左右边界，就反弹
    if (left < 0 || left + el.offsetWidth > window.innerWidth) {
      directions[i] *= -1;
    }
  });

  requestAnimationFrame(animate);
}

animate();