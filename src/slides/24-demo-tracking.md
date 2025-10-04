<!--
  Slide này gần như toàn bộ không gian sẽ dành cho một video/ảnh demo lớn.
  Phần nội dung phân tích sẽ được đặt ở bên cạnh dưới dạng các gạch đầu dòng ngắn gọn,
  đóng vai trò như chú thích cho những gì đang diễn ra trong video.
-->
<section 
  data-background-image="/images/backgrounds/agenda-bg.png" 
  data-background-opacity="1"
  class="h-full"
>
  <div class="w-full h-full flex flex-col justify-center items-center">
    <h2 class="!text-5xl mb-12 text-center text-white font-bold drop-shadow-lg">
      Demo 1: Tracking & LPR trong <strong class="!text-tech-highlight">Môi trường Thực tế (TP.HCM)</strong>
    </h2>
    <div class="grid grid-cols-5 gap-12 w-full max-w-7xl mx-auto items-center">
      <!-- CỘT TRÁI: VIDEO/ẢNH DEMO LỚN -->
      <div class="col-span-3">
        <video 
          src="videos/demo-hcmc-tracking.mp4" 
          autoplay 
          loop 
          muted 
          playsinline
          class="rounded-lg shadow-2xl shadow-tech-card w-full h-[32rem] object-cover"
        />
      </div>
      <!-- CỘT PHẢI: PHÂN TÍCH NHANH CÁC TÍNH NĂNG -->
      <div class="col-span-2 flex flex-col space-y-8 text-2xl">
        <!-- Feature 1: High Density -->
        <div class="fragment bg-tech-card/80 p-6 rounded-lg border-l-4 border-tech-highlight" data-fragment-index="1">
          <h3 class="!text-2xl !text-tech-highlight mb-2 font-semibold">Xử lý Mật độ Cao</h3>
          <p class="text-white text-xl font-normal">Hệ thống phát hiện và theo dõi ổn định hàng chục phương tiện (cả ô tô và xe máy) cùng lúc trong một khung hình phức tạp.</p>
        </div>
        <!-- Feature 2: Stable Tracking -->
        <div class="fragment bg-tech-card/80 p-6 rounded-lg border-l-4 border-tech-highlight" data-fragment-index="2">
          <h3 class="!text-2xl !text-tech-highlight mb-2 font-semibold">Tracking ID Ổn định</h3>
          <p class="text-white text-xl font-normal">Mỗi phương tiện được gán một ID cục bộ (ví dụ: <code class="text-white bg-black/30 px-2 rounded">ID:9</code>) và được duy trì nhất quán khi di chuyển qua khung hình.</p>
        </div>
        <!-- Feature 3: Integrated LPR -->
        <div class="fragment bg-tech-card/80 p-6 rounded-lg border-l-4 border-tech-highlight" data-fragment-index="3">
          <h3 class="!text-2xl !text-tech-highlight mb-2 font-semibold">Tích hợp Nhận dạng Biển số</h3>
          <p class="text-white text-xl font-normal">Tự động nhận dạng và gán biển số vào ID tương ứng (ví dụ: <code class="text-white bg-black/30 px-2 rounded">ID:9 LP:59XT00142</code>), hoặc trả về <code class="text-white bg-black/30 px-2 rounded">N/A</code> nếu không đọc được.</p>
        </div>
      </div>
    </div>
  </div>
</section>
