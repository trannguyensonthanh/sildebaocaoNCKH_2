<!--
  Slide này sử dụng bố cục "4 góc" (Quadrant Layout) để trình bày các hướng phát triển.
  Một hình ảnh trung tâm biểu thị sự phát triển, tỏa ra 4 hướng.
-->
<section 
  data-background-image="/images/backgrounds/agenda-bg.png" 
  data-background-opacity="1"
  class="h-full"
>
  <div class="w-full h-full flex flex-col justify-center items-center">
    <h2 class="text-7xl font-bold mb-16 text-center text-white drop-shadow-lg">Hướng Phát triển <strong class="text-tech-highlight">Tương lai</strong></h2>
    <div class="w-full max-w-9xl mx-auto relative">
      <!-- HÌNH ẢNH TRUNG TÂM -->
      <div class="absolute inset-0 flex items-center justify-center">
        <img src="/images/icons/icon-growth.png" class="h-48 w-48 opacity-80" alt="Future Growth"/>
      </div>
      <!-- LƯỚI 2X2 CHO 4 HƯỚNG PHÁT TRIỂN -->
      <div class="grid grid-cols-2 gap-x-24 gap-y-16 relative">
        <!-- 1. Nâng cấp Mô hình & Dữ liệu -->
        <div class="fragment bg-tech-card/90 p-8 rounded-xl border-l-4 border-tech-highlight shadow-xl" data-fragment-index="1">
          <h3 class="text-5xl font-semibold text-tech-highlight mb-4">1. Nâng cấp Mô hình & Dữ liệu</h3>
          <ul class="text-3xl text-white font-medium space-y-3">
            <li>&rarr; Thu thập thêm dữ liệu ở các điều kiện khó (đêm, mưa lớn, góc quay hẹp).</li>
            <li>&rarr; Nghiên cứu và tích hợp các kiến trúc Re-ID thế hệ mới (Transformer-based).</li>
          </ul>
        </div>
        <!-- 2. Mở rộng Chức năng -->
        <div class="fragment bg-tech-card/90 p-8 rounded-xl border-l-4 border-tech-highlight shadow-xl" data-fragment-index="2">
          <h3 class="text-5xl font-semibold text-tech-highlight mb-4">2. Mở rộng Chức năng</h3>
          <ul class="text-3xl text-white font-medium space-y-3">
            <li>&rarr; <strong class="text-white">Nhận dạng Thuộc tính:</strong> Loại xe, màu sắc, hãng xe.</li>
            <li>&rarr; <strong class="text-white">Phân tích Hành vi:</strong> Ước tính tốc độ, phát hiện lấn làn, dừng đỗ sai quy định.</li>
          </ul>
        </div>
        <!-- 3. Triển khai Edge Computing -->
        <div class="fragment bg-tech-card/90 p-8 rounded-xl border-l-4 border-tech-highlight shadow-xl" data-fragment-index="3">
          <h3 class="text-5xl font-semibold text-tech-highlight mb-4">3. Triển khai Edge Computing</h3>
          <ul class="text-3xl text-white font-medium space-y-3">
            <li>&rarr; Tối ưu và triển khai pipeline lên các thiết bị Edge chuyên dụng (e.g., Intel Movidius VPU).</li>
            <li>&rarr; Xây dựng các "camera thông minh" có khả năng xử lý AI tại chỗ, giảm tải cho máy chủ trung tâm.</li>
          </ul>
        </div>
        <!-- 4. Tích hợp Giao diện Người dùng -->
        <div class="fragment bg-tech-card/90 p-8 rounded-xl border-l-4 border-tech-highlight shadow-xl" data-fragment-index="4">
          <h3 class="text-5xl font-semibold text-tech-highlight mb-4">4. Tích hợp Giao diện (GUI)</h3>
          <ul class="text-3xl text-white font-medium space-y-3">
            <li>&rarr; Xây dựng một ứng dụng hoàn chỉnh cho phép người vận hành:</li>
            <li class="ml-8">&bull; <span class="text-blue-300 font-semibold">Xem camera feed trực tiếp với annotation.</span></li>
            <li class="ml-8">&bull; <span class="text-green-300 font-semibold">Truy vấn, tìm kiếm xe theo biển số hoặc hình ảnh.</span></li>
            <li class="ml-8">&bull; <span class="text-yellow-300 font-semibold">Trực quan hóa quỹ đạo xe trên bản đồ tương tác.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  </div>
</section>
