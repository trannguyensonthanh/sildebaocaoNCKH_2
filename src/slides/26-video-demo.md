<!--
  Slide này chuyên dụng để trình chiếu video từ YouTube.
  - data-src: Dùng để lazy-load video, chỉ tải khi slide được mở, giúp tăng tốc độ tải ban đầu.
  - Các tham số URL của YouTube được thêm vào để tối ưu trải nghiệm trình chiếu:
    - autoplay=1: Tự động phát.
    - mute=1: Tắt tiếng (nhiều trình duyệt yêu cầu tắt tiếng mới cho tự động phát).
    - rel=0: Không hiển thị video liên quan khi kết thúc.
    - controls=0: Ẩn các nút điều khiển của YouTube.
    - showinfo=0: Ẩn tiêu đề và thông tin video.
  - Tailwind aspect-video: Giữ đúng tỷ lệ 16:9 cho video.
-->
<section 
  data-background-image="/images/backgrounds/agenda-bg.png" 
  data-background-opacity="1"
  class="h-full"
>
  <div class="w-full h-full flex flex-col justify-center items-center">
    <h2 class="text-7xl font-bold mb-8 text-center text-white drop-shadow-lg">
      Video Demo: <strong class="text-tech-highlight">Hệ thống Hoạt động Toàn diện</strong>
    </h2>
    <!-- Video Container -->
    <div class="w-full max-w-screen-2xl mx-auto aspect-video rounded-lg shadow-2xl shadow-tech-highlight/20 overflow-hidden border-4 border-tech-highlight/70" style="height: 700px;">
      <iframe 
        class="w-full h-full"
        data-src="https://www.youtube.com/embed/fJZQ7YMWx00?autoplay=1&mute=1&rel=0&controls=0&showinfo=0&loop=1&playlist=fJZQ7YMWx00"
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
    <p class="text-2xl mt-4 text-white text-center font-medium drop-shadow">
      Demo trình diễn khả năng tracking và tái định danh trên nhiều luồng camera.
    </p>
  </div>
</section>
