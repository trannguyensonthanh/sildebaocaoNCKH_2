<!--
  Bố cục slide 2 cột:
  - Cột trái: Phân tích về nhiệm vụ, công nghệ và lý do lựa chọn.
  - Cột phải: Dữ liệu trực quan - biểu đồ so sánh hiệu năng để chứng minh lựa chọn là đúng đắn.
-->
<section 
  data-background-image="/images/backgrounds/agenda-bg.png" 
  data-background-opacity="1"
  class="h-full"
>
  <div class="w-full h-full flex flex-col justify-center items-center text-white">
    <h2 class="!text-5xl md:!text-6xl mb-16 text-center font-bold drop-shadow-lg">
      Module 1: Phát hiện Phương tiện - <strong class="!text-tech-highlight">"Đôi mắt" của Hệ thống</strong>
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-7xl mx-auto items-stretch">
      <!-- CỘT TRÁI: PHÂN TÍCH -->
      <div class="bg-gradient-to-br from-tech-dark via-gray-900 to-tech-dark/80 rounded-xl shadow-xl p-8 flex flex-col justify-center space-y-8 text-2xl md:text-3xl border border-tech-highlight/30">
        <div class="fragment" data-fragment-index="1">
          <h3 class="!text-3xl md:!text-4xl !text-tech-highlight mb-3 font-bold drop-shadow">Nhiệm vụ</h3>
          <p class="text-white drop-shadow font-medium">Xác định vị trí (bounding box) của tất cả phương tiện (ô tô, xe tải, xe buýt) trong mỗi khung hình video.</p>
        </div>
        <div class="fragment" data-fragment-index="2">
          <h3 class="!text-3xl md:!text-4xl !text-tech-highlight mb-3 font-bold drop-shadow">Công nghệ</h3>
          <div class="flex items-center space-x-4">
            <img src="images/logos/ultralytics-logo.png" class="h-20 md:h-24 drop-shadow-lg" alt="YOLO Logo"/>
            <p class="font-bold text-4xl md:text-5xl !text-tech-highlight drop-shadow">YOLOv12</p>
          </div>
        </div>
        <div class="fragment" data-fragment-index="3">
          <h3 class="!text-3xl md:!text-4xl !text-tech-highlight mb-3 font-bold drop-shadow">Tại sao chọn YOLOv12?</h3>
          <ul class="space-y-4">
            <li class="flex items-start">
              <span class="text-tech-highlight font-bold mr-3 mt-1">&#10148;</span>
              <span class="drop-shadow text-white font-medium"><strong>Tốc độ vượt trội:</strong> Là kiến trúc <strong class="!text-white">Single-Shot Detector</strong>, xử lý ảnh chỉ trong một lượt, lý tưởng cho ứng dụng thời gian thực.</span>
            </li>
            <li class="flex items-start">
              <span class="text-tech-highlight font-bold mr-3 mt-1">&#10148;</span>
              <span class="drop-shadow text-white font-medium"><strong>Độ chính xác cao:</strong> Đạt sự <strong class="!text-white">cân bằng tối ưu</strong> giữa tốc độ (Latency) và độ chính xác (mAP) so với các thế hệ trước và các đối thủ cạnh tranh.</span>
            </li>
          </ul>
        </div>
      </div>
      <!-- CỘT PHẢI: BIỂU ĐỒ MINH HỌA -->
      <div class="flex flex-col justify-center items-center fragment" data-fragment-index="4">
        <div class="bg-white/90 p-6 rounded-xl shadow-2xl border border-tech-highlight/20 flex flex-col items-center">
          <img
            src="images/yolo-performance-chart.png"
            alt="Biểu đồ so sánh hiệu năng các phiên bản YOLO"
            class="rounded-md drop-shadow-lg max-w-full h-full object-contain"
          />
        </div>
        <p class="text-center text-base italic text-white mt-4 drop-shadow font-medium">Nguồn: Biểu đồ hiệu năng các mô hình YOLO trên tập dữ liệu MS COCO.</p>
      </div>
    </div>
  </div>
