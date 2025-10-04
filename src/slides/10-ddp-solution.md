<!--
  Slide này là một bản trình bày trực quan về cách DDP hoạt động.
  - Mỗi bước của quy trình DDP sẽ xuất hiện tuần tự dưới dạng fragment.
  - Sử dụng các icon và đường nét để tạo ra một flowchart sống động.
-->
<section 
  data-background-image="/images/backgrounds/agenda-bg.png" 
  data-background-opacity="1"
  class="h-full"
>
  <div class="w-full h-full flex flex-col justify-center items-center">
    <h2 class="!text-3xl md:!text-4xl mb-4 text-center text-white font-extrabold drop-shadow-lg">Giải pháp Kỹ thuật: <strong class="!text-tech-highlight drop-shadow-lg">Huấn luyện Phân tán</strong></h2>
    <p class="text-xl md:text-2xl mb-10 text-center text-white font-semibold drop-shadow-lg">"Chia để trị" - Huy động sức mạnh của nhiều GPU cùng lúc với PyTorch DDP.</p>
    <div class="w-full max-w-7xl mx-auto flex flex-col items-center">
      <!-- Sơ đồ DDP -->
      <div class="w-full relative flex flex-col items-center">
      <!-- 1. Model & Data Ban đầu -->
      <div class="flex items-center space-x-8 mb-6">
      <div class="text-center fragment" data-fragment-index="1">
      <img src="images/icons/icon-model.png" class="h-20 w-20 drop-shadow-xl" alt="Main Model"/>
      <p class="mt-2 text-base md:text-lg text-white font-bold">Main Model</p>
      </div>
      <div class="text-center fragment" data-fragment-index="2">
      <img src="images/icons/icon-database.png" class="h-20 w-20 drop-shadow-xl" alt="Big Dataset"/>
      <p class="mt-2 text-base md:text-lg text-white font-bold">Big Dataset Batch</p>
      </div>
      </div>
      <!-- 2. Replicate & Scatter -->
      <div class="w-full grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
      <!-- GPU 0 -->
      <div class="fragment" data-fragment-index="3">
      <div class="bg-gray-800/90 p-3 rounded-lg border border-gray-600 flex flex-col items-center shadow-lg">
        <img src="images/icons/icon-gpu.png" class="h-12 w-12 drop-shadow" alt="GPU"/>
        <p class="font-bold text-yellow-400 text-lg">GPU 0</p>
        <div class="mt-3 p-2 bg-gray-900 rounded w-full text-center">
        <p class="text-sm text-white font-semibold">Model Replica</p>
        <p class="text-xs text-blue-400 mt-2 font-bold">Mini-Batch 1</p>
        </div>
      </div>
      </div>
      <!-- GPU 1 -->
      <div class="fragment" data-fragment-index="3">
      <div class="bg-gray-800/90 p-3 rounded-lg border border-gray-600 flex flex-col items-center shadow-lg">
        <img src="images/icons/icon-gpu.png" class="h-12 w-12 drop-shadow" alt="GPU"/>
        <p class="font-bold text-green-400 text-lg">GPU 1</p>
        <div class="mt-3 p-2 bg-gray-900 rounded w-full text-center">
        <p class="text-sm text-white font-semibold">Model Replica</p>
        <p class="text-xs text-green-400 mt-2 font-bold">Mini-Batch 2</p>
        </div>
      </div>
      </div>
      <!-- GPU 2 -->
      <div class="fragment" data-fragment-index="3">
      <div class="bg-gray-800/90 p-3 rounded-lg border border-gray-600 flex flex-col items-center shadow-lg">
        <img src="images/icons/icon-gpu.png" class="h-12 w-12 drop-shadow" alt="GPU"/>
        <p class="font-bold text-yellow-400 text-lg">GPU 2</p>
        <div class="mt-3 p-2 bg-gray-900 rounded w-full text-center">
        <p class="text-sm text-white font-semibold">Model Replica</p>
        <p class="text-xs text-yellow-400 mt-2 font-bold">Mini-Batch 3</p>
        </div>
      </div>
      </div>
      <!-- GPU 3 -->
      <div class="fragment" data-fragment-index="3">
      <div class="bg-gray-800/90 p-3 rounded-lg border border-gray-600 flex flex-col items-center shadow-lg">
        <img src="images/icons/icon-gpu.png" class="h-12 w-12 drop-shadow" alt="GPU"/>
        <p class="font-bold text-red-400 text-lg">GPU 3</p>
        <div class="mt-3 p-2 bg-gray-900 rounded w-full text-center">
        <p class="text-sm text-white font-semibold">Model Replica</p>
        <p class="text-xs text-red-400 mt-2 font-bold">Mini-Batch 4</p>
        </div>
      </div>
      </div>
      </div>
      <!-- Chú thích cho bước 2 -->
      <p class="fragment text-center italic mt-4 text-white font-semibold text-base md:text-lg" data-fragment-index="3">
      <strong>1. Replicate & Scatter:</strong> Model được nhân bản, Batch dữ liệu lớn được chia nhỏ cho từng GPU.
      </p>
      <!-- 3. Forward/Backward Pass -->
      <div class="fragment my-8" data-fragment-index="4">
      <p class="text-xl md:text-2xl text-center">
      <span class="text-tech-highlight font-mono text-yellow-400 drop-shadow">&darr; Forward & Backward Pass (Tính toán song song) &darr;</span>
      </p>
      <p class="text-center italic mt-3 text-white font-semibold text-base md:text-lg">
      <strong>2. Parallel Processing:</strong> Mỗi GPU tính toán gradient (kết quả học được) trên phần dữ liệu của riêng mình.
      </p>
      </div>
      <!-- 4. All-Reduce -->
      <div class="fragment w-full flex flex-col items-center" data-fragment-index="5">
      <img src="images/icons/icon-sync.png" class="h-20 w-20 drop-shadow-xl" alt="Sync Icon"/>
      <p class="text-center italic mt-3 text-white font-semibold text-base md:text-lg">
      <strong>3. All-Reduce:</strong> Gradient từ tất cả GPU được tổng hợp và đồng bộ hóa với nhau.
      </p>
      </div>
      </div>
      <!-- KẾT QUẢ -->
      <div class="fragment mt-10 bg-green-900/90 border-l-4 border-green-400 text-white p-6 rounded-r-lg w-full md:w-2/3 shadow-2xl" data-fragment-index="6">
      <h3 class="font-bold text-xl md:text-2xl mb-3 text-green-300 drop-shadow">KẾT QUẢ ĐẠT ĐƯỢC</h3>
      <p class="text-lg md:text-xl font-semibold">Giảm thời gian huấn luyện từ <strong class="!text-red-400 line-through">HÀNG THÁNG</strong> xuống chỉ còn <strong class="!text-green-300">VÀI NGÀY</strong>, giúp đẩy nhanh quá trình nghiên cứu và tối ưu hóa mô hình.</p>
      </div>
    </div>
    </div>
    </section>
