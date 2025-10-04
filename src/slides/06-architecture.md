<!--
  Slide này tái tạo sơ đồ kiến trúc bằng HTML/CSS để có thể thêm hiệu ứng động.
  Mỗi thành phần chính của pipeline là một fragment, xuất hiện tuần tự.
  Các mũi tên cũng là fragment, xuất hiện sau các box để chỉ rõ luồng dữ liệu.
-->
<section 
  data-background-image="/images/backgrounds/agenda-bg.png" 
  data-background-opacity="1"
  class="h-full"
>
  <div class="w-full h-full flex flex-col justify-center items-center">
    <h2 class="!text-5xl mb-12 text-white drop-shadow-lg">Kiến trúc Hệ thống <strong class="!text-tech-highlight">End-to-End</strong></h2>
    <div class="w-full max-w-7xl flex flex-col items-center space-y-4 font-mono">
      <!-- 1. Data Ingestion -->
      <div class="fragment bg-gradient-to-r from-tech-highlight to-gray-700 text-white font-bold p-4 rounded-lg shadow-2xl w-1/3 text-center border-2 border-tech-highlight">
        Data Ingestion (Video/Image Stream)
      </div>
      <!-- Mũi tên xuống -->
      <div class="fragment text-3xl text-tech-highlight drop-shadow-lg" data-fragment-index="2">▼</div>
      <p class="fragment text-white font-bold text-xl -mt-2" data-fragment-index="2">Video Frames</p>
      <!-- 2. Vùng Pipeline chính được tối ưu hóa -->
      <div class="fragment w-full bg-gradient-to-br from-gray-900 via-tech-card/80 to-gray-800 border-2 border-tech-highlight rounded-xl p-8 shadow-2xl" data-fragment-index="3">
        <p class="text-center text-tech-highlight font-bold text-xl mb-6 drop-shadow-lg">Optimized Inference Pipeline powered by Intel® OpenVINO™</p>
        <div class="flex flex-col items-center">
          <!-- Detection & Tracking -->
          <div class="bg-blue-900 text-white font-bold p-6 rounded-lg shadow-2xl w-1/2 text-center border-2 border-blue-400">
            <h4 class="font-bold text-lg">Vehicle Detection & Tracking</h4>
            <span class="text-sm text-blue-300">(YOLOv12 + BoT-SORT)</span>
          </div>
          <!-- Mũi tên phân nhánh -->
          <div class="w-full flex justify-center items-center my-4 relative h-16">
            <div class="fragment absolute top-0 w-px h-full bg-tech-highlight" data-fragment-index="4"></div>
            <div class="fragment absolute top-full w-3/4 h-px bg-tech-highlight -translate-y-4" data-fragment-index="4"></div>
            <div class="fragment absolute top-full left-1/4 w-px h-4 bg-tech-highlight -translate-y-4" data-fragment-index="4"></div>
            <div class="fragment absolute top-full right-1/4 w-px h-4 bg-tech-highlight -translate-y-4" data-fragment-index="4"></div>
            <div class="fragment absolute top-full left-[24%] text-2xl text-tech-highlight drop-shadow-lg" data-fragment-index="5">▼</div>
            <div class="fragment absolute top-full right-[24%] text-2xl text-tech-highlight drop-shadow-lg" data-fragment-index="5">▼</div>
            <p class="fragment text-white font-bold text-xs absolute top-full left-[28%] mt-4" data-fragment-index="5">Cropped Vehicle Images<br>& Tracking IDs</p>
            <p class="fragment text-white font-bold text-xs absolute top-full right-[28%] mt-4" data-fragment-index="5">Cropped Vehicle Images<br>& Tracking IDs</p>
          </div>
          <!-- Hai module song song -->
          <div class="w-full flex justify-around mt-12">
            <!-- LPR -->
            <div class="fragment bg-gradient-to-r from-green-700 to-green-900 text-white font-bold p-4 rounded-lg shadow-2xl w-2/5 text-center border-2 border-green-400" data-fragment-index="6">
              <h4 class="font-bold">License Plate Recognition</h4>
              <span class="text-sm text-green-300">(YOLOv12-LP -> CCT)</span>
            </div>
            <!-- Re-ID -->
            <div class="fragment bg-gradient-to-r from-purple-700 to-purple-900 text-white font-bold p-4 rounded-lg shadow-2xl w-2/5 text-center border-2 border-purple-400" data-fragment-index="6">
              <h4 class="font-bold">Vehicle Re-Identification</h4>
              <span class="text-sm text-purple-300">(Multi-Branch Model)</span>
            </div>
          </div>
        </div>
      </div>
      <!-- Mũi tên xuống -->
      <div class="w-full flex justify-center items-center my-4 relative h-16">
        <div class="fragment absolute top-0 left-1/4 w-px h-4 bg-tech-highlight" data-fragment-index="7"></div>
        <div class="fragment absolute top-0 right-1/4 w-px h-4 bg-tech-highlight" data-fragment-index="7"></div>
        <div class="fragment absolute top-4 w-1/2 h-px bg-tech-highlight" data-fragment-index="7"></div>
        <div class="fragment absolute top-4 w-px h-full bg-tech-highlight" data-fragment-index="7"></div>
      </div>
      <div class="fragment text-3xl text-tech-highlight -mt-8 drop-shadow-lg" data-fragment-index="8">▼</div>
      <p class="fragment text-white font-bold text-xl -mt-2" data-fragment-index="8">Enriched Vehicle Data</p>
      <!-- 3. Output Data Stream -->
      <div class="fragment bg-gradient-to-r from-tech-highlight to-gray-700 text-white font-bold p-4 rounded-lg shadow-2xl w-1/2 text-center border-2 border-tech-highlight" data-fragment-index="9">
        Output Data Stream (Vehicle Track, Global ID, License Plate)
      </div>
    </div>
  </div>
</section>
