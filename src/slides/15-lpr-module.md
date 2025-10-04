<!--
  Slide này trình bày pipeline LPR theo một luồng ngang từ trái qua phải.
  Sử dụng icon mũi tên lớn và các card để biểu diễn từng bước.
  Hình ảnh minh họa thực tế cho thấy kết quả ở mỗi giai đoạn.
-->
<section 
  data-background-image="/images/backgrounds/agenda-bg.png" 
  data-background-opacity="1"
  class="h-full"
>
  <div class="w-full h-full flex flex-col justify-center items-center">
    <h2 class="text-5xl font-bold mb-4 text-center text-white">Module 3: Nhận dạng Biển số (LPR)</h2>
    <p class="text-2xl mb-16 text-center text-gray-200">Trích xuất "Chứng minh thư" của Phương tiện</p>
    <div class="w-full max-w-7xl mx-auto flex items-center justify-center space-x-8">
      <!-- BƯỚC 1: PHÁT HIỆN BIỂN SỐ -->
      <div class="fragment w-3/5 h-full" data-fragment-index="1">
        <div class="bg-tech-card/80 p-6 rounded-lg border border-tech-subtle/20 h-full">
          <h3 class="text-4xl font-bold text-tech-highlight text-center">Bước 1: Phát hiện Vị trí</h3>
          <p class="text-center mt-2 mb-6 text-xl text-gray-100">Sử dụng mô hình <strong class="text-white">YOLOv12-nano</strong> đã được tinh chỉnh (fine-tuned) để xác định chính xác vùng chứa biển số.</p>
          <img src="images/lpr-step1-detection.png" alt="Phát hiện biển số" class="rounded-md shadow-lg w-2/3 h-3/5 object-contain mx-auto"/>
        </div>
      </div>
      <!-- Mũi tên chỉ sang phải -->
      <div class="fragment text-8xl text-tech-highlight" data-fragment-index="2">&rarr;</div>
      <!-- BƯỚC 2: NHẬN DẠNG KÝ TỰ -->
      <div class="fragment w-1/3" data-fragment-index="3">
        <div class="bg-tech-card/80 p-6 rounded-lg border border-tech-subtle/20 h-full">
          <h3 class="text-4xl font-bold text-tech-highlight text-center">Bước 2: Nhận dạng Ký tự</h3>
          <p class="text-center mt-2 mb-6 text-xl text-gray-100">Ảnh biển số đã crop được đưa vào mô hình <strong class="text-white">Compact Convolutional Transformer (CCT)</strong> để đọc chuỗi ký tự.</p>
          <img src="images/lpr-step2-crop.png" alt="Crop biển số" class="rounded-md shadow-lg w-96 h-64 object-contain mx-auto"/>
          <div class="mt-6 text-center">
            <p class="text-lg text-gray-100">Kết quả nhận dạng:</p>
            <p class="font-mono text-5xl bg-black/50 text-yellow-300 py-2 px-4 rounded-md inline-block tracking-widest mt-2">
              49A20516
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</section>
