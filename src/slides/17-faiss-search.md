<!--
  Slide này sử dụng phép ẩn dụ mạnh mẽ và một sơ đồ đơn giản để giải thích Faiss.
  - Bố cục tập trung vào một sơ đồ 3 bước: Vector mới -> Faiss Index -> Kết quả.
  - Hiệu ứng động sẽ xây dựng sơ đồ này từng bước.
-->
<section 
  data-background-image="/images/backgrounds/agenda-bg.png" 
  data-background-opacity="1"
  class="h-full"
>
  <div class="w-full h-full flex flex-col justify-center items-center">
    <h2 class="text-5xl font-extrabold mb-4 text-center text-white drop-shadow-lg">Giải quyết Vấn đề Tốc độ Tra cứu</h2>
    <p class="text-3xl text-blue-400 mb-16 text-center font-bold drop-shadow-md">"Google" cho Dấu vân tay Hình ảnh</p>
    <div class="w-full max-w-7xl mx-auto flex flex-col items-center">
      <!-- VẤN ĐỀ -->
      <div class="fragment bg-gradient-to-r from-red-900 via-red-800 to-red-700/80 border-l-4 border-yellow-400 text-white p-6 rounded-r-xl w-2/3 text-center mb-16 shadow-xl" data-fragment-index="1">
        <h3 class="font-extrabold text-2xl mb-2 text-yellow-300 drop-shadow">VẤN ĐỀ</h3>
        <p class="text-xl font-semibold">Làm sao so sánh "dấu vân tay" của 1 xe mới với <strong class="!text-yellow-300">hàng triệu</strong> "dấu vân tay" đã lưu trong database chỉ trong vài mili giây?</p>
        <p class="text-base text-gray-100 italic mt-2">(So sánh tuần tự sẽ mất hàng phút, không thể dùng cho thời gian thực)</p>
      </div>
      <!-- SƠ ĐỒ GIẢI PHÁP VỚI FAISS -->
      <div class="w-full flex items-center justify-around">
        <!-- 1. Vector mới (Query) -->
        <div class="fragment text-center w-1/4" data-fragment-index="2">
          <img src="images/icons/icon-vector.png" class="h-32 w-32 mx-auto drop-shadow-lg" alt="Query Vector"/>
          <h3 class="!text-2xl mt-4 text-white font-bold drop-shadow">Vector Đặc trưng Mới</h3>
          <p class="text-base text-white">Từ xe vừa xuất hiện</p>
        </div>
        <!-- Mũi tên -->
        <div class="fragment text-8xl text-yellow-400 drop-shadow-lg" data-fragment-index="3">&rarr;</div>
        <!-- 2. Faiss Index -->
        <div class="fragment text-center w-1/3" data-fragment-index="4">
          <img src="images/logos/faiss-logo-box.png" class="h-48 w-auto mx-auto drop-shadow-xl" alt="Faiss Index"/>
          <h3 class="!text-2xl mt-4 text-white font-bold drop-shadow">Faiss Index</h3>
          <p class="text-base text-white">Một "thư viện" được tối ưu hóa, chứa hàng triệu vector đã được chỉ mục hóa.</p>
        </div>
        <!-- Mũi tên -->
        <div class="fragment text-8xl text-yellow-400 drop-shadow-lg" data-fragment-index="5">&rarr;</div>
        <!-- 3. Kết quả -->
        <div class="fragment text-center w-1/4" data-fragment-index="6">
          <img src="images/icons/icon-top-k.png" class="h-32 w-32 mx-auto drop-shadow-lg" alt="Top-K Results"/>
          <h3 class="!text-2xl mt-4 text-white font-bold drop-shadow">Top-K Kết quả Gần nhất</h3>
          <p class="text-base text-white">Trả về các "dấu vân tay" giống nhất trong vài mili giây.</p>
        </div>
      </div>
      <p class="fragment text-xl italic text-white mt-16 w-2/3 text-center drop-shadow" data-fragment-index="7">
        <strong class="text-white">Faiss (Facebook AI Similarity Search)</strong> là công nghệ then chốt giúp hệ thống có khả năng <strong class="!text-yellow-300">mở rộng (scalable)</strong>, sẵn sàng cho các bài toán quy mô lớn.
      </p>
    </div>
  </div>
</section>
