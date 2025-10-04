import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import Notes from 'reveal.js/plugin/notes/notes.esm.js';
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js';

// Import CSS (không thay đổi)
import 'reveal.js/dist/reveal.css';

// Dòng này cực kỳ quan trọng. Nó nạp file CSS đã được xử lý bởi Tailwind.
import '../css/custom.css';

import 'reveal.js/plugin/highlight/monokai.css';

// BƯỚC 1: LẤY RA PHẦN TỬ HTML CHỨA CÁC SLIDES
// Đây là bước quan trọng mà chúng ta đã bỏ qua.
const revealEl = document.querySelector('.reveal');

if (!revealEl) {
  // Nếu không tìm thấy .reveal thì dừng và log lỗi rõ ràng
  console.error(
    'Could not find .reveal element in the page. Reveal will not initialize.'
  );
} else {
  // BƯỚC 2: KHỞI TẠO REVEAL BẰNG CÁCH TRUYỀN CẢ PHẦN TỬ GỐC VÀ CẤU HÌNH
  let deck = new Reveal(revealEl, {
    plugins: [Markdown, Highlight, Notes],

    // Các cấu hình khác
    width: 1920,
    height: 1080,
    margin: 0.04,
    transition: 'slide',
    history: true,
    center: true,
    progress: true,
    slideNumber: 'c/t',
  });

  // BƯỚC 3: GỌI initialize() ĐỂ BẮT ĐẦU
  deck
    .initialize({
      assetPath: '.',
    })
    .then(() => {
      console.log('Reveal initialized successfully');
      // Đăng ký sự kiện thông qua API của Reveal
      deck.on('ready', (event) => {
        console.log('Reveal.js ready event fired', event);
      });
    })
    .catch((err) => {
      console.error('Failed to initialize Reveal:', err);
    });
}
