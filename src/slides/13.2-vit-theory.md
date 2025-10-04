<!-- SLIDE 13.2: GIẢI THÍCH LÝ THUYẾT VỀ MODULE RE-ID -->
<section 
  data-background-image="images/backgrounds/agenda-bg.png" 
  data-background-opacity="1"
  class="h-full"
>
  <div class="w-full h-full flex flex-col justify-center items-center text-white drop-shadow-xl px-16">
    <h2 class="!text-5xl md:text-6xl text-center font-extrabold tracking-tight text-tech-highlight/90 bg-black/80 px-8 py-6 rounded-2xl mb-12">
      Module 2: Tái định danh - <strong class="text-tech-highlight">Trái tim của Hệ thống</strong>
    </h2>
    <div class="w-full max-w-5xl mx-auto space-y-12">
      <!-- Nhiệm vụ -->
      <div class="fragment" data-fragment-index="1">
        <h3 class="text-3xl md:text-4xl text-tech-highlight mb-4 font-bold bg-black/70 px-4 py-3 rounded-xl inline-block">Nhiệm vụ</h3>
        <div class="bg-black/60 p-6 rounded-lg text-2xl md:text-3xl font-medium">
          <p>
          Với mỗi ảnh xe, tạo ra một <strong class="text-white">vector đặc trưng 512 chiều</strong>.
          </p>
          <p class="mt-2 text-tech-subtle text-2xl">
          Đây là một "dấu vân tay hình ảnh" - một chuỗi số duy nhất đại diện cho đặc điểm nhận dạng của xe đó.
          </p>
        </div>
      </div>
      <!-- Công nghệ -->
      <div class="fragment" data-fragment-index="2">
        <h3 class="text-3xl md:text-4xl text-tech-highlight mb-4 font-bold bg-black/70 px-4 py-3 rounded-xl inline-block">Công nghệ & Nguyên lý</h3>
         <div class="bg-black/60 p-6 rounded-lg text-2xl md:text-3xl font-medium">
          <p>
          Sử dụng <strong class="text-white">Vision Transformer (ViT)</strong> với cơ chế <strong class="text-white">Self-Attention</strong>.
          </p>
          <p class="mt-4 text-tech-subtle text-2xl">
          Nguyên lý này cho phép mô hình tự "cân đo đong đếm" và quyết định vùng nào trên ảnh là quan trọng nhất để tạo ra một "dấu vân tay" không thể nhầm lẫn, thay vì nhìn toàn bộ chiếc xe một cách đồng đều.
          </p>
        </div>
      </div>
      <div class="fragment bg-black/80 p-8 rounded-xl border border-white/20">
        <p class="text-xl md:text-2xl text-white font-normal">
        Thay vì nhìn toàn bộ chiếc xe một cách đồng đều, ViT sẽ tập trung vào các chi tiết đặc biệt như <strong class="text-tech-highlight">đèn xe, logo, sticker, hình dáng mui xe, hoặc thậm chí là vết xước</strong> để tạo ra "dấu vân tay" không thể nhầm lẫn.
        </p>
      </div>
    </div>
    </div>
</section>
