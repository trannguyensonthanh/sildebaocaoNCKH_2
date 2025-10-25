<!--
  Bố cục slide này là 2 cột song song để trình bày 2 thách thức chính.
  Mỗi cột có hình ảnh minh họa riêng và nội dung phân tích.
  Hiệu ứng fragment được sử dụng để giới thiệu từng thách thức một.
-->
<section 
  data-background-image="/images/backgrounds/agenda-bg.png" 
  data-background-opacity="1"
  class="h-full"
>
  <div class="w-full h-full flex flex-col justify-center">
    <h2 class="text-center !text-7xl mb-12">Hai Thách thức <strong class="!text-tech-highlight">Cốt lõi</strong></h2>
    <div class="grid grid-cols-2 gap-12 w-full max-w-9xl mx-auto">
      <!-- CỘT 1: THÁCH THỨC TÁI ĐỊNH DANH (RE-ID) -->
      <div class="fragment" data-fragment-index="1">
        <div class="bg-tech-card/70 border border-tech-subtle/20 rounded-lg p-8 h-full">
          <h3 class="!text-5xl text-center !text-tech-highlight">Thách thức #1: Tái định danh (Re-ID)</h3>
          <p class="text-center text-xl text-white italic mt-2">"Làm sao biết chúng là một?"</p>
          <!-- Chú thích hình ảnh:
               Đây là nơi bạn sử dụng bản đồ thể hiện quỹ đạo của một chiếc xe qua nhiều camera khác nhau.
               Lấy từ hình ảnh bản đồ với các điểm C10 -> C36 của bạn.
               Hãy crop lại chỉ lấy phần bản đồ, không cần các ảnh chụp từ camera.
          -->
          <img 
            src="images/reid-challenge-map.png" 
            alt="Bản đồ minh họa Re-ID qua các camera không giao nhau"
            class="rounded-lg my-6"
          />
          <ul class="text-xl space-y-4">
            <li>
              <span class="text-tech-highlight font-bold mr-2">&rarr;</span>
              <strong class="!text-white text-2xl !bg-tech-highlight/30 px-2 py-1 rounded">
                Mạng lưới camera không giao nhau, phương tiện <span class="!text-tech-highlight">"biến mất"</span> và <span class="!text-tech-highlight">"tái xuất hiện"</span>.
              </strong>
            </li>
            <li>
              <span class="text-tech-highlight font-bold mr-2">&rarr;</span>
              <strong class="!text-white text-2xl !bg-tech-highlight/30 px-2 py-1 rounded">
                Ngoại hình xe thay đổi hoàn toàn do <span class="!text-tech-highlight">góc quay</span>, <span class="!text-tech-highlight">ánh sáng</span>, và <span class="!text-tech-highlight">khoảng cách</span>.
              </strong>
            </li>        </ul>
        </div>
      </div>
      <div class="fragment" data-fragment-index="2">
        <div class="bg-tech-card/70 border border-tech-subtle/20 rounded-lg p-8 h-full">
          <h3 class="!text-5xl text-center !text-tech-highlight">Thách thức #2: Hiệu năng & Chi phí</h3>
          <p class="text-center text-xl text-white italic mt-2">"Làm sao để chạy được trong thực tế?"</p>
          <!-- Chú thích hình ảnh:
               Sử dụng một hình ảnh đồ họa, biểu tượng.
               Ví dụ: Một bên là hình icon GPU đắt đỏ với biểu tượng tia sét (tốc độ cao) và biểu tượng đô la ($$$).
               Bên còn lại là hình icon CPU phổ thông với biểu tượng con rùa (tốc độ chậm) và 1 biểu tượng đô la ($).
               Câu hỏi lớn ở giữa: "Làm sao để CPU nhanh như GPU?"
          -->
          <img
            src="images/cpu-vs-gpu-cost.png"
            alt="So sánh chi phí và hiệu năng giữa CPU và GPU"
            class="rounded-lg my-6"
          />
          <ul class="text-xl space-y-4">
            <li>
              <span class="text-tech-highlight font-bold mr-2">&rarr;</span>
              <strong class="!text-white text-2xl !bg-tech-highlight/30 px-2 py-1 rounded">Các mô hình AI hiện đại (YOLOv12, ViT) đòi hỏi năng lực tính toán <span class="!text-tech-highlight">khổng lồ</span>.</strong>
            </li>
            <li>
              <span class="text-tech-highlight font-bold mr-2">&rarr;</span>
              <strong class="!text-white text-2xl !bg-tech-highlight/30 px-2 py-1 rounded">Phụ thuộc vào phần cứng <span class="!text-tech-highlight">GPU chuyên dụng</span>: đắt đỏ, tiêu thụ nhiều năng lượng, khó bảo trì.</strong>
            </li>        </ul>
        </div>
      </div>
    </div>
  </div>
</section>
