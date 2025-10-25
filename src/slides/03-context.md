<!--
  Slide này sử dụng bố cục 2 cột kinh điển:
  - Cột trái (40% chiều rộng): Một hình ảnh lớn, gây ấn tượng mạnh về sự hỗn loạn của giao thông.
  - Cột phải (60% chiều rộng): Phân tích chi tiết về vấn đề.
  - Mỗi gạch đầu dòng là một fragment, xuất hiện lần lượt để bạn dẫn dắt câu chuyện.
-->
<section 
  data-background-image="/images/backgrounds/agenda-bg.png" 
  data-background-opacity="1"
  class="h-full"
>
  <div class="w-full h-full flex flex-col justify-center">
    <h2 class="text-center !text-7xl mb-12">Bối cảnh Thực tiễn: <strong class="!text-tech-highlight">Thách thức Giao thông Đô thị</strong></h2>
    <div class="grid grid-cols-5 gap-12 items-center">
      <div class="col-span-2">
        <!-- 
          Chú thích hình ảnh:
          Ảnh này nên là một trong những ảnh ấn tượng nhất bạn có về giao thông tại TP.HCM.
          Lý tưởng nhất là ảnh chụp từ trên cao, cho thấy rõ mật độ xe cộ dày đặc và hỗn loạn.
          Đây chính là ảnh mà bạn đã cung cấp (demo/images/Screenshot 2025-07-29 100652.png).
        -->
        <img 
          src="images/hcmc-traffic-overview.png" 
          alt="Giao thông đông đúc tại TP.HCM"
          class="rounded-lg shadow-2xl shadow-tech-card"
        />
        <p class="text-center text-xl italic text-white mt-4">Mạng lưới giao thông phức tạp tại TP. Hồ Chí Minh</p>
      </div>
      <div class="col-span-3 text-4xl">
        <ul>
          <!-- Hậu quả -->
          <li class="fragment" data-fragment-index="1">
            <span class="text-tech-highlight font-bold">Hậu quả:</span> 
            <span class="text-white">Ùn tắc, tai nạn, khó khăn trong quản lý & thực thi pháp luật.</span
          </li>
          <li class="fragment mt-6" data-fragment-index="2">
            <span class="text-tech-highlight font-bold">Hạn chế:</span> <span class="text-white">Giám sát thủ công qua CCTV không hiệu quả, không thể mở rộng quy mô toàn thành phố. </span>
          </li>
          <li class="fragment mt-6" data-fragment-index="3">
             <span class="text-tech-highlight font-bold">Vấn đề cốt lõi:</span> 
             <span class="text-white">Mạng lưới camera</span>
              <strong class="text-tech-highlight font-bold">không giao nhau (Non-Overlapping)</strong><span class="text-white">, một phương tiện biến mất ở camera này và xuất hiện ở camera khác. </span>
          </li>
          <li class="fragment mt-12 bg-tech-card/70 border-l-4 border-tech-highlight p-6 rounded-r-lg" data-fragment-index="4">
            <span class="font-bold text-white">Nhu cầu cấp thiết:</span>  <span class="text-white"> Một hệ thống giám sát </span> <strong class="!text-tech-highlight">Tự động - Thông minh - Quy mô lớn</strong>.
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
