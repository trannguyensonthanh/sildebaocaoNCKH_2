<!--
  Slide này có thiết kế tối giản, tập trung vào việc làm nổi bật các con số hiệu năng "tệ".
  - Một hình ảnh ẩn dụ về tốc độ chậm.
  - Các thẻ kết quả được trình bày to, rõ ràng với màu sắc cảnh báo.
-->
<section 
  data-background-image="/images/backgrounds/agenda-bg.png" 
  data-background-opacity="1"
  class="h-full"
>
  <div class="w-full h-full flex flex-col justify-center items-center">
    <h2 class="!text-7xl text-center text-tech-highlight font-bold">Phần 3: Tối ưu hóa & Kết quả Thực nghiệm</h2>
    <p class="text-4xl text-blue-400 mt-4 mb-16 text-center font-semibold">"From Prototype to Real-Time"</p>
    <div class="w-full max-w-9xl mx-auto flex flex-col md:flex-row items-center justify-center gap-16">
      <!-- CỘT TRÁI: HÌNH ẢNH ẨN DỤ -->
      <div class="fragment w-full md:w-1/3" data-fragment-index="1">
        <img src="images/bottleneck-analogy.png" alt="Performance Bottleneck" class="w-full h-auto">
      </div>
      <!-- CỘT PHẢI: KẾT QUẢ BASELINE -->
      <div class="w-full md:w-2/3">
        <div class="fragment" data-fragment-index="2">
          <h3 class="!text-5xl text-left text-white font-bold">Thí nghiệm Baseline: PyTorch trên CPU</h3>
          <p class="text-2xl text-gray-200 text-left mt-2 font-medium">Thực thi toàn bộ pipeline (Detection, Tracking, LPR, Re-ID) trên phần cứng CPU Intel® Core™ i9 mà không có bất kỳ tối ưu hóa đặc biệt nào.</p>
        </div>
        <div class="grid grid-cols-2 gap-8 mt-12">
          <!-- Kết quả Throughput -->
          <div class="fragment bg-red-900/40 border-2 border-red-500 p-8 rounded-lg text-center" data-fragment-index="3">
            <p class="text-3xl text-red-300 font-semibold">Throughput (Tốc độ xử lý)</p>
            <p class="!text-8xl font-black text-white my-4">0.17</p>
            <p class="text-4xl text-red-300 font-semibold">FPS</p>
            <p class="text-xl text-gray-300 mt-4">(Frames Per Second)</p>
          </div>
          <!-- Kết quả Latency -->
          <div class="fragment bg-red-900/40 border-2 border-red-500 p-8 rounded-lg text-center" data-fragment-index="3">
            <p class="text-3xl text-red-300 font-semibold">Latency (Độ trễ mỗi khung hình)</p>
            <p class="!text-8xl font-black text-white my-4">5720</p>
            <p class="text-4xl text-red-300 font-semibold">ms</p>
            <p class="text-xl text-gray-300 mt-4">(~6 giây để xử lý 1 ảnh)</p>
          </div>
        </div>
        <div class="fragment text-center mt-12 bg-yellow-800/50 p-4 rounded-lg" data-fragment-index="4">
          <p class="text-3xl text-yellow-300 font-bold">
            <span class="font-bold">KẾT LUẬN:</span> Hoàn toàn <strong class="!text-white">không khả thi</strong> cho bất kỳ ứng dụng thời gian thực nào.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
