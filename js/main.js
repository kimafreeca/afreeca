const dialog = document.getElementById('contactDialog');
const dialogDescription = document.getElementById('dialog-description');

document.querySelectorAll('[data-contact]').forEach(button => {
  button.addEventListener('click', () => {
    dialogDescription.textContent = button.dataset.platform
      ? `${button.dataset.platform} 문의 · 편한 채널을 선택해 주세요.`
      : '편한 채널을 선택해 문의를 남겨주세요.';
    dialog.showModal();
  });
});
dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const bounds = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
});

// A scripted preview. The numbers and messages belong only to this demo.
const messages = document.querySelector('#demo-messages');
const count = document.querySelector('#demo-count');
const play = document.querySelector('#demo-play');
const initialChat = messages.cloneNode(true);
const sequence = [
  ['레몬', '반가워요!', 128],
  ['모카', '조명 색 예쁘네요', 135],
  ['새벽달', '첫 방문이에요 👋', 142],
  ['두부', '어서 오세요!', 146],
  ['하루', '여기 자리 잡습니다', 153],
  ['도토리', '소리 깨끗해요', 161],
  ['여름밤', '다들 반가워요', 167],
  ['바다', '오늘 방송도 기대돼요', 172],
];
let next = 0;
let timer = null;
function pausePreview() {
  clearInterval(timer);
  timer = null;
  play.textContent = next === sequence.length ? '다시 보기' : '재생';
}
function startPreview() {
  if (next === sequence.length) {
    messages.replaceChildren(...initialChat.cloneNode(true).children);
    count.textContent = '124';
    next = 0;
  }
  play.textContent = '일시정지';
  timer = setInterval(() => {
    if (document.hidden) return;
    const [name, message, viewers] = sequence[next++];
    const line = document.createElement('li');
    const author = document.createElement('b');
    const body = document.createElement('span');
    author.textContent = name;
    body.textContent = message;
    line.append(author, body);
    line.className = 'incoming';
    messages.firstElementChild.remove();
    messages.append(line);
    count.textContent = String(viewers);
    if (next === sequence.length) pausePreview();
  }, 2200);
}
play.hidden = false;
play.addEventListener('click', () => timer === null ? startPreview() : pausePreview());
if (matchMedia('(prefers-reduced-motion: reduce)').matches) pausePreview();
else startPreview();
