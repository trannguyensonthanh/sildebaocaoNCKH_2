<!--
  Bố cục slide này được thiết kế để trực quan hóa khái niệm "Attention".
  - Phần trên giải thích nhiệm vụ và công nghệ.
  - Phần dưới là showcase các hình ảnh Attention Map, là bằng chứng trực quan mạnh mẽ nhất.
-->
<section 
  data-background-image="/images/backgrounds/agenda-bg.png" 
  data-background-opacity="1"
  class="h-full"
>
  <div class="w-full h-full flex flex-col justify-center items-center text-white drop-shadow-xl">
    <h2 class="text-5xl md:text-6xl text-center font-extrabold tracking-tight text-tech-highlight/90 bg-black/80 px-8 py-6 rounded-2xl">
      Module 2: Tái định danh - <strong class="text-tech-highlight">Trái tim của Hệ thống</strong>
    </h2>
    <p class="text-2xl md:text-3xl mt-6 mb-14 text-center font-semibold bg-black/60 px-6 py-4 rounded-xl text-white">
      Tạo ra "Dấu vân tay Hình ảnh" độc nhất cho mỗi phương tiện
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-7xl mx-auto">
      <!-- CỘT TRÁI: GIẢI THÍCH NGUYÊN LÝ -->
      <div class="flex flex-col justify-center space-y-10 text-2xl md:text-3xl">
        <div class="fragment" data-fragment-index="1">
          <h3 class="text-3xl md:text-4xl text-tech-highlight mb-4 font-bold bg-black/70 px-4 py-3 rounded-xl">Nhiệm vụ</h3>
          <p class="bg-black/50 px-4 py-3 rounded-lg text-white font-medium">
            Với mỗi ảnh xe, tạo ra một <strong class="text-white">vector đặc trưng 512 chiều</strong> - một chuỗi số duy nhất đại diện cho đặc điểm nhận dạng của xe đó.
          </p>
        </div>
        <div class="fragment" data-fragment-index="2">
          <h3 class="text-3xl md:text-4xl text-tech-highlight mb-4 font-bold bg-black/70 px-4 py-3 rounded-xl">Công nghệ: Vision Transformer (ViT)</h3>
          <p class="bg-black/50 px-4 py-3 rounded-lg text-white font-medium">
            Sử dụng cơ chế <strong class="text-white">Self-Attention</strong>, mô hình tự học cách "chú ý" vào những vùng thông tin quan trọng nhất trên ảnh.
          </p>
        </div>
        <div class="fragment bg-black/80 p-8 rounded-xl border border-white/20">
          <p class="text-xl md:text-2xl text-white font-normal">
            Thay vì nhìn toàn bộ chiếc xe một cách đồng đều, ViT sẽ tập trung vào các chi tiết đặc biệt như <strong class="text-tech-highlight">đèn xe, logo, sticker, hình dáng mui xe, hoặc thậm chí là vết xước</strong> để tạo ra "dấu vân tay" không thể nhầm lẫn.
          </p>
        </div>
      </div>
      <!-- CỘT PHẢI: MINH HỌA ATTENTION MAP -->
      <div class="fragment flex flex-col items-center" data-fragment-index="4">
        <h3 class="text-3xl md:text-4xl text-tech-highlight text-center mb-6 font-bold bg-black/70 px-4 py-3 rounded-xl">Mô hình "Nhìn" vào đâu?</h3>
        <div class="bg-white/20 p-6 rounded-xl">
          <img src="images/attention-map-showcase.png" alt="Attention Map Visualization" class="rounded-lg shadow-2xl w-full max-w-md"/>
        </div>
        <p class="text-center text-base italic text-white mt-3 bg-black/50 px-3 py-2 rounded-lg">
          Các vùng sáng màu cho thấy khu vực mô hình tập trung chú ý nhất.
        </p>
        <div class="bg-white/20 p-6 rounded-xl mt-8">
          <img src="images/model-vit.png" alt="Kiến trúc Vision Transformer" class="rounded-lg shadow-2xl w-full max-w-md"/>
        </div>
        <p class="text-center text-base italic text-white mt-3 bg-black/50 px-3 py-2 rounded-lg">
          Sơ đồ kiến trúc tổng quan của mô hình Vision Transformer (ViT).
        </p>
      </div>
    </div>
  </div>
</section>
