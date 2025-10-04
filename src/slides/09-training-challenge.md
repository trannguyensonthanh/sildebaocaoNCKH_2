<!--
  Slide này có bố cục tối giản nhưng tập trung vào các con số và hình ảnh ẩn dụ.
  - data-background-transition="zoom": Tạo hiệu ứng zoom vào khi chuyển đến slide này, tạo cảm giác "đi sâu" vào vấn đề.
  - Các con số được làm nổi bật với hiệu ứng "counter" để gây ấn tượng.
-->
<section 
  data-background-image="/images/backgrounds/agenda-bg.png" 
  data-background-opacity="1"
  class="h-full"
>
  <div class="w-full h-full flex flex-col justify-center items-center text-white drop-shadow-lg">
    <h2 class="text-5xl md:text-6xl font-extrabold text-tech-highlight bg-black/70 px-8 py-4 rounded-lg shadow-lg">
      Thách thức Huấn luyện: <strong class="text-tech-highlight">Bài toán Dữ liệu "Khổng lồ"</strong>
    </h2>
    <p class="text-2xl md:text-3xl font-semibold mt-6 mb-12 bg-black/60 px-6 py-3 rounded-lg shadow">
      Để mô hình Re-ID có khả năng tổng quát hóa, nó phải "học" từ một lượng dữ liệu cực lớn.
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-6xl mx-auto items-center">
      <!-- CỘT TRÁI: CÁC CON SỐ ẤN TƯỢNG -->
      <div class="flex flex-col space-y-12">
        <!-- Số lượng ảnh -->
        <div class="fragment" data-fragment-index="1">
          <p class="text-2xl md:text-3xl font-bold">Tổng số lượng ảnh huấn luyện</p>
          <p class="text-7xl md:text-8xl text-tech-highlight font-black bg-black/80 px-6 py-4 rounded-lg shadow-lg">
            <span class="count-up" data-from="0" data-to="2000000" data-decimals="0" data-duration="2">2,000,000</span>+
          </p>
          <p class="text-2xl md:text-3xl font-medium">hình ảnh</p>
        </div>
        <!-- Số lượng ID -->
        <div class="fragment" data-fragment-index="2">
          <p class="text-2xl md:text-3xl font-bold">Số lượng phương tiện duy nhất</p>
          <p class="text-7xl md:text-8xl text-tech-highlight font-black bg-black/80 px-6 py-4 rounded-lg shadow-lg">
            <span class="count-up" data-from="0" data-to="70000" data-decimals="0" data-duration="2">70,000</span>+
          </p>
          <p class="text-2xl md:text-3xl font-medium">định danh (IDs)</p>
        </div>
        <!-- Dung lượng -->
        <div class="fragment" data-fragment-index="3">
          <p class="text-2xl md:text-3xl font-bold">Tổng dung lượng dữ liệu</p>
          <p class="text-7xl md:text-8xl text-tech-highlight font-black bg-black/80 px-6 py-4 rounded-lg shadow-lg">
            <span class="count-up" data-from="0" data-to="1.5" data-decimals="1" data-duration="2">1.5</span>
          </p>
          <p class="text-2xl md:text-3xl font-medium">Terabytes</p>
        </div>
      </div>
      <!-- CỘT PHẢI: HÌNH ẢNH ẨN DỤ & VẤN ĐỀ -->
      <div class="fragment" data-fragment-index="4">
        <img src="images/big-data-gpu-crush.png" alt="Big Data Challenge" class="mx-auto w-3/4 rounded-lg shadow-xl border-4 border-tech-highlight">
        <div class="bg-red-900/90 border-l-4 border-red-500 text-white p-8 rounded-r-lg mt-12 shadow-lg">
          <h3 class="font-bold text-3xl mb-4">VẤN ĐỀ NAN GIẢI</h3>
          <p class="text-2xl md:text-2xl font-semibold">
            Với một GPU đơn lẻ (NVIDIA RTX 4090), thời gian huấn luyện có thể kéo dài <strong class="text-yellow-300">hàng tuần đến hàng tháng</strong>, khiến việc nghiên cứu và tinh chỉnh trở nên bất khả thi.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- Đoạn script nhỏ để kích hoạt hiệu ứng số đếm -->
<script>
  // Hàm này sẽ được gọi khi slide này hiện ra
  function startCountUp() {
    const countUpElements = document.querySelectorAll('.count-up');
    countUpElements.forEach(el => {
      const from = parseFloat(el.dataset.from);
      const to = parseFloat(el.dataset.to);
      const duration = parseInt(el.dataset.duration) * 1000;
      const decimals = parseInt(el.dataset.decimals);
      let start = null;
      function step(timestamp) {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        const current = from + progress * (to - from);
        el.textContent = current.toLocaleString(undefined, {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals
        });
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      }
      window.requestAnimationFrame(step);
    });
  }
  // Lắng nghe sự kiện khi slide hiện ra
  Reveal.addEventListener('slidechanged', event => {
    // event.currentSlide là slide đang hiển thị
    if (event.currentSlide.querySelector('.count-up')) {
      startCountUp();
    }
  });
</script>
