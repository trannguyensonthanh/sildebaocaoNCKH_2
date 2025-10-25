<!--
  Bố cục slide này sử dụng các thẻ (cards) để nhóm các nguồn dữ liệu theo mục đích.
  Mỗi thẻ có hiệu ứng riêng và hình ảnh minh họa.
-->
<section 
  data-background-image="/images/backgrounds/agenda-bg.png" 
  data-background-opacity="1"
  class="h-full" >
<div class="w-full h-full flex flex-col justify-center items-center text-white drop-shadow-2xl">
  <h2 class="text-7xl mb-4 text-center font-extrabold !text-tech-highlight">Xây dựng Nền tảng Dữ liệu</h2>
  <p class="text-3xl mb-12 text-center font-semibold text-blue-200">"Nhiên liệu" cho các Mô hình AI</p>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-9xl mx-auto">
    <!-- CỘT 1: DỮ LIỆU HUẤN LUYỆN RE-ID -->
    <div class="fragment bg-gray-900/95 backdrop-blur-xl p-8 rounded-2xl border border-blue-700 shadow-2xl" data-fragment-index="1">
      <h3 class="text-4xl text-blue-400 text-center mb-6 font-bold">Dữ liệu Re-Identification</h3>
      <p class="text-center mb-8 text-2xl text-blue-100">Cung cấp sự đa dạng về chủng loại xe, góc chụp, và điều kiện ánh sáng.</p>
      <div class="space-y-8">
        <div class="flex items-center">
          <img src="images/logos/dataset-vehicle1m.png" class="h-20 w-20 mr-5" alt="Vehicle-1M Logo"/>
          <div>
            <h4 class="text-2xl font-bold text-white">Vehicle-1M</h4>
            <p class="text-blue-100 text-xl">Hơn 1 triệu ảnh, ~50,000 ID → Nền tảng cho mô hình tổng quát.</p>
          </div>
        </div>
        <div class="flex items-center">
          <img src="images/logos/dataset-vric.png" class="h-20 w-20 mr-5" alt="VRIC Logo"/>
          <div>
            <h4 class="text-2xl font-bold text-white">VRIC & VehicleID</h4>
            <p class="text-blue-100 text-xl">Dữ liệu từ camera thực tế → Tăng khả năng chống chịu với điều kiện môi trường.</p>
          </div>
        </div>
      </div>
    </div>
    <!-- CỘT 2: DỮ LIỆU HUẤN LUYỆN LPR -->
    <div class="fragment bg-gray-900/95 backdrop-blur-xl p-8 rounded-2xl border border-blue-700 shadow-2xl" data-fragment-index="2">
      <h3 class="text-4xl text-blue-400 text-center mb-6 font-bold">Dữ liệu License Plate</h3>
      <p class="text-center mb-8 text-2xl text-blue-100">Tập trung vào các ảnh đã được chú thích biển số chi tiết.</p>
      <div class="space-y-8">
        <div class="flex items-center">
          <img src="images/logos/roboflow-logo.png" class="h-20 w-20 mr-5" alt="Roboflow Logo"/>
          <div>
            <h4 class="text-2xl font-bold text-white">Roboflow Universe</h4>
            <p class="text-blue-100 text-xl">Tổng hợp nhiều bộ dữ liệu chuyên biệt về biển số từ cộng đồng.</p>
          </div>
        </div>
        <img src="images/lp-dataset-collage.png" class="rounded-xl mt-6 shadow-2xl" alt="License Plate Dataset Collage"/>
      </div>
    </div>
    <!-- CỘT 3: DỮ LIỆU KIỂM THỬ & TINH CHỈNH -->
    <div class="fragment bg-gray-900/95 backdrop-blur-xl p-8 rounded-2xl border border-blue-700 shadow-2xl" data-fragment-index="3">
      <h3 class="text-4xl text-blue-400 text-center mb-6 font-bold">Dữ liệu Thực tế</h3>
      <p class="text-center mb-8 text-2xl text-blue-100">Đảm bảo mô hình hoạt động hiệu quả trong môi trường triển khai thực tế.</p>
      <div class="space-y-8">
        <div class="flex items-center">
          <img src="images/logos/hcmc-logo.png" class="h-20 w-20 mr-5" alt="HCMC Logo"/>
          <div>
            <h4 class="text-2xl font-bold text-white">Mạng lưới Camera TP.HCM</h4>
            <p class="text-blue-100 text-xl">Thu thập tự động từ ~200 camera, cung cấp dữ liệu "sống" để kiểm thử và tinh chỉnh.</p>
          </div>
        </div>
        <img src="images/hcmc-camera-map.png" class="rounded-xl mt-6 shadow-2xl" alt="HCMC Camera Network Map"/>
      </div>
    </div>
  </div>
</div>
</section>
