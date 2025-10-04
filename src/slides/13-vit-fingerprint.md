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
  <div class="w-full h-full flex flex-col justify-center items-center text-white drop-shadow-lg">
    <h2 class="!text-5xl text-center font-bold tracking-tight text-tech-highlight/90 bg-black/60 px-6 py-4 rounded-xl">
      Module 2: Tái định danh - <strong class="!text-tech-highlight">Trái tim của Hệ thống</strong>
    </h2>
    <p class="text-2xl mt-4 mb-12 text-center font-medium bg-black/40 px-4 py-2 rounded-lg text-white">
      Tạo ra "Dấu vân tay Hình ảnh" độc nhất cho mỗi phương tiện
    </p>
    <div class="grid grid-cols-2 gap-8 w-full max-w-7xl mx-auto">
      <!-- CỘT TRÁI: GIẢI THÍCH NGUYÊN LÝ -->
      <div class="flex flex-col justify-center space-y-8 text-2xl">
        <div class="fragment" data-fragment-index="1">
          <h3 class="!text-3xl !text-tech-highlight mb-3 font-semibold bg-black/40 px-3 py-2 rounded-lg">Nhiệm vụ</h3>
          <p class="bg-black/30 px-3 py-2 rounded-md text-white">
            Với mỗi ảnh xe, tạo ra một <strong class="!text-white">vector đặc trưng 512 chiều</strong> - một chuỗi số duy nhất đại diện cho đặc điểm nhận dạng của xe đó.
          </p>
        </div>
        <div class="fragment" data-fragment-index="2">
          <h3 class="!text-3xl !text-tech-highlight mb-3 font-semibold bg-black/40 px-3 py-2 rounded-lg">Công nghệ: Vision Transformer (ViT)</h3>
          <p class="bg-black/30 px-3 py-2 rounded-md text-white">
            Sử dụng cơ chế <strong class="!text-white">Self-Attention</strong>, mô hình tự học cách "chú ý" vào những vùng thông tin quan trọng nhất trên ảnh.
          </p>
        </div>
        <div class="fragment bg-tech-card/90 p-6 rounded-lg border border-tech-subtle/20">
          <p class="text-xl text-white">
            Thay vì nhìn toàn bộ chiếc xe một cách đồng đều, ViT sẽ tập trung vào các chi tiết đặc biệt như <strong class="!text-tech-highlight">đèn xe, logo, sticker, hình dáng mui xe, hoặc thậm chí là vết xước</strong> để tạo ra "dấu vân tay" không thể nhầm lẫn.
          </p>
        </div>
      </div>
      <!-- CỘT PHẢI: MINH HỌA ATTENTION MAP -->
      <div class="fragment" data-fragment-index="4">
        <h3 class="!text-3xl !text-tech-highlight text-center mb-4 font-semibold bg-black/40 px-3 py-2 rounded-lg">Mô hình "Nhìn" vào đâu?</h3>
        <div class="bg-white/10 p-4 rounded-lg">
          <img src="images/attention-map-showcase.png" alt="Attention Map Visualization" class="rounded-md shadow-2xl"/>
        </div>
        <p class="text-center text-sm italic text-white mt-2 bg-black/30 px-2 py-1 rounded">
          Các vùng sáng màu cho thấy khu vực mô hình tập trung chú ý nhất.
        </p>
        <div class="bg-white/10 p-4 rounded-lg mt-6">
          <img src="images/model-vit.png" alt="Kiến trúc Vision Transformer" class="rounded-md shadow-2xl"/>
        </div>
        <p class="text-center text-sm italic text-white mt-2 bg-black/30 px-2 py-1 rounded">
          Sơ đồ kiến trúc tổng quan của mô hình Vision Transformer (ViT).
        </p>
      </div>
    </div>
  </div>
</section>
