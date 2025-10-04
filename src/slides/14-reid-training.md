<!--
  Bố cục slide này là 2 cột:
  - Cột trái: Sơ đồ hóa nguyên lý Triplet Loss một cách đơn giản.
  - Cột phải: Hình ảnh kết quả của quá trình huấn luyện - các cụm dữ liệu được hình thành rõ rệt.
-->
<section 
  data-background-image="/images/backgrounds/agenda-bg.png" 
  data-background-opacity="1"
  class="h-full"
>
  <div class="w-full h-full flex flex-col justify-center items-center text-white">
    <h2 class="!text-5xl mb-16 text-center font-extrabold drop-shadow-lg">Huấn luyện Re-ID: <strong class="!text-tech-highlight">Dạy Mô hình cách Phân biệt</strong></h2>
    <div class="grid grid-cols-5 gap-12 w-full max-w-7xl mx-auto items-center">
      <!-- CỘT TRÁI: NGUYÊN LÝ TRIPLET LOSS -->
      <div class="col-span-2 flex flex-col text-2xl">
        <div class="fragment" data-fragment-index="1">
          <h3 class="!text-3xl !text-tech-highlight mb-4 font-bold drop-shadow">Mục tiêu: Học Không gian Đặc trưng</h3>
          <p class="font-medium drop-shadow text-white">Không phải "phân loại" xe, mà là "học khoảng cách" giữa chúng.</p>
        </div>
        <div class="fragment mt-10" data-fragment-index="2">
          <h3 class="!text-3xl !text-tech-highlight mb-4 font-bold drop-shadow">Phương pháp: Triplet Loss</h3>
          <p class="mb-6 font-medium drop-shadow text-white">Mô hình học cùng lúc từ một bộ ba ảnh:</p>
          <!-- Sơ đồ Triplet -->
          <div class="space-y-4 font-mono">
            <!-- Anchor -->
            <div class="flex items-center">
              <div class="w-28 text-center text-xl p-3 bg-blue-800 rounded-l-lg font-bold shadow-lg">ANCHOR</div>
              <div class="border border-blue-800 p-3 rounded-r-lg flex-1 bg-blue-900/40 font-semibold shadow text-white">Ảnh xe gốc đang xét</div>
            </div>
            <!-- Positive -->
            <div class="flex items-center">
              <div class="w-28 text-center text-xl p-3 bg-green-800 rounded-l-lg font-bold shadow-lg">POSITIVE</div>
              <div class="border border-green-800 p-3 rounded-r-lg flex-1 bg-green-900/40 font-semibold shadow text-white">Ảnh khác của <strong class="!text-green-400">CÙNG</strong> chiếc xe</div>
            </div>
            <!-- Negative -->
            <div class="flex items-center">
              <div class="w-28 text-center text-xl p-3 bg-red-800 rounded-l-lg font-bold shadow-lg">NEGATIVE</div>
              <div class="border border-red-800 p-3 rounded-r-lg flex-1 bg-red-900/40 font-semibold shadow text-white">Ảnh của một chiếc xe <strong class="!text-red-400">KHÁC</strong></div>
            </div>
          </div>
        </div>
        <div class="fragment mt-10 bg-tech-card/80 p-6 rounded-lg border-l-4 border-tech-highlight shadow-xl" data-fragment-index="3">
          <p class="text-xl font-bold drop-shadow text-white">
            <strong>Mục tiêu của hàm loss:</strong> "Kéo" <span class="text-green-400">Positive</span> lại gần <span class="text-blue-400">Anchor</span> và "Đẩy" <span class="text-red-400">Negative</span> ra xa khỏi <span class="text-blue-400">Anchor</span>.
          </p>
        </div>
      </div>
      <!-- CỘT PHẢI: KẾT QUẢ TRỰC QUAN -->
      <div class="col-span-3 fragment" data-fragment-index="4">
        <h3 class="!text-3xl !text-tech-highlight text-center mb-4 font-bold drop-shadow">Kết quả: Không gian Đặc trưng được Hình thành</h3>
        <div class="bg-white/90 p-2 rounded-lg shadow-2xl">
          <img
            src="images/embedding-space-3d.png"
            alt="Biểu đồ phân tán 3D các đặc trưng"
            class="rounded-md"
          />
        </div>
        <p class="text-center text-xl italic mt-4 font-semibold drop-shadow text-white">Các ảnh của cùng một xe sẽ <strong class="!text-white">tụ lại thành một cụm</strong> trong không gian 3D.</p>
      </div>
    </div>
  </div>
</section>
