<!--
  Bố cục slide này là 2 cột, mỗi cột dành cho một mô hình AI cốt lõi.
  - Cột trái: Phân tích độ chính xác của mô hình Detector (YOLOv12-LP).
  - Cột phải: Phân tích độ chính xác của mô hình Re-ID (ViT).
-->
<section 
  data-background-image="/images/backgrounds/agenda-bg.png" 
  data-background-opacity="1"
  class="h-full"
>
  <div class="w-full h-full flex flex-col justify-center items-center">
    <h2 class="text-5xl font-bold mb-12 text-center text-white">
      Phân tích Độ chính xác: <strong class="text-tech-highlight">Nhanh nhưng vẫn Chính xác</strong>
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-7xl mx-auto">
      <!-- CỘT 1: ĐỘ CHÍNH XÁC CỦA DETECTOR -->
      <div class="fragment bg-tech-card/80 backdrop-blur-sm p-8 rounded-lg border border-tech-subtle/20" data-fragment-index="1">
        <h3 class="text-3xl text-tech-highlight text-center mb-6 font-semibold">Mô hình Phát hiện Biển số (YOLOv12n)</h3>
        <!-- Các chỉ số chính -->
        <div class="flex justify-around text-center mb-6">
          <div>
            <p class="text-lg text-white">mAP@0.5</p>
            <p class="font-bold text-5xl text-green-400">0.991</p>
          </div>
          <div>
            <p class="text-lg text-white">Peak F1-Score</p>
            <p class="font-bold text-5xl text-green-400">0.98</p>
          </div>
        </div>
        <div class="bg-white/90 p-2 rounded-lg shadow-lg">
          <img
            src="images/charts-detector-accuracy.png"
            alt="Biểu đồ độ chính xác của YOLOv12n"
            class="rounded-md"
          />
        </div>
        <p class="text-xl text-white mt-6 text-center">
          Kết quả cho thấy khả năng <strong class="text-tech-highlight">khoanh vùng vị trí</strong> biển số gần như hoàn hảo.
        </p>
      </div>
      <!-- CỘT 2: ĐỘ CHÍNH XÁC CỦA RE-ID -->
      <div class="fragment bg-tech-card/80 backdrop-blur-sm p-8 rounded-lg border border-tech-subtle/20" data-fragment-index="2">
        <h3 class="text-3xl text-tech-highlight text-center mb-6 font-semibold">Mô hình Re-Identification </br> (ViT)</h3>
        <!-- Chỉ số chính -->
        <div class="flex justify-around text-center mb-6">
          <div>
            <p class="text-lg text-white">Training Loss</p>
            <p class="font-bold text-5xl text-green-400">&searr; Converged</p>
          </div>
          <div>
            <p class="text-lg text-white">Validation Accuracy</p>
            <p class="font-bold text-5xl text-green-400">95.4%</p>
          </div>
        </div>
        <div class="bg-white/90 p-2 rounded-lg shadow-lg">
          <img
            src="images/chart-reid-accuracy.png"
            alt="Biểu đồ độ chính xác của mô hình Re-ID"
            class="rounded-md"
          />
        </div>
        <p class="text-xl text-white mt-6 text-center">
          Mô hình hội tụ tốt, cho thấy khả năng <strong class="text-tech-highlight">phân biệt và nhận dạng</strong> phương tiện một cách hiệu quả.
        </p>
      </div>
    </div>
  </div>
  </div>
</section>
