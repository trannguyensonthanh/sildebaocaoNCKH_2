<!--
  Bố cục slide này là 2 cột:
  - Cột trái: Trình bày nhiệm vụ, công nghệ và các cải tiến chính.
  - Cột phải: Một sơ đồ pipeline động của BoT-SORT và một video demo ngắn.
-->
<section 
  data-background-image="/images/backgrounds/agenda-bg.png" 
  data-background-opacity="1"
  class="h-full"
>
  <div class="w-full h-full flex flex-col justify-center items-center text-white">
    <h2 class="text-5xl md:text-6xl mb-16 text-center font-bold drop-shadow-lg">Module 1: Theo dõi Phương tiện - <strong class="text-tech-highlight">"Trí nhớ" Ngắn hạn</strong></h2>
    <div class="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 w-full max-w-7xl mx-auto items-start">
      <!-- CỘT TRÁI: PHÂN TÍCH -->
      <div class="md:col-span-2 flex flex-col space-y-8 text-2xl md:text-3xl bg-gray-900/80 p-8 rounded-xl shadow-xl border border-gray-700">
        <div class="fragment" data-fragment-index="1">
          <h3 class="text-3xl text-tech-highlight mb-3 font-semibold drop-shadow">Nhiệm vụ</h3>
          <p class="font-medium drop-shadow text-white">Gán và duy trì một <strong class="text-white">ID cục bộ (local ID)</strong> ổn định cho mỗi phương tiện khi nó di chuyển trong tầm nhìn của <strong class="text-white">một camera duy nhất</strong>.</p>
        </div>
        <div class="fragment" data-fragment-index="2">
          <h3 class="text-3xl text-tech-highlight mb-3 font-semibold drop-shadow">Công nghệ: BoT-SORT</h3>
          <p class="font-medium drop-shadow text-white">Một "Bag of Tricks" - tập hợp các cải tiến dựa trên nền tảng SORT.</p>
        </div>
        <div class="fragment" data-fragment-index="4">
          <h3 class="text-3xl text-tech-highlight mb-3 font-semibold drop-shadow">Những Cải tiến Chính</h3>
          <ul class="space-y-4 text-xl md:text-2xl">
            <li class="flex items-start">
              <span class="text-tech-highlight font-bold mr-3 mt-1">&#10148;</span>
              <span><strong>Kalman Filter Nâng cao:</strong> Không chỉ dự đoán chuyển động của xe mà còn bù trừ cho sự <strong class="text-white">rung lắc của camera (CMC)</strong>.</span>
            </li>
            <li class="flex items-start">
              <span class="text-tech-highlight font-bold mr-3 mt-1">&#10148;</span>
              <span><strong>Liên kết Kép (Dual Matching):</strong> Kết hợp thông minh giữa <strong class="text-white">Ngoại hình (Re-ID)</strong> cho các trường hợp khó và <strong class="text-white">Vị trí (IoU)</strong> cho các trường hợp thông thường.</span>
            </li>
          </ul>
        </div>
      </div>
      <!-- CỘT PHẢI: SƠ ĐỒ VÀ DEMO -->
      <div class="md:col-span-3 flex flex-col gap-8">
        <div class="fragment bg-gray-800/90 p-6 rounded-lg border border-gray-700 shadow-2xl" data-fragment-index="3">
          <h3 class="text-2xl md:text-3xl text-center text-tech-highlight mb-4 font-semibold drop-shadow">Luồng Hoạt động của BoT-SORT</h3>
          <img 
            src="images/botsort-pipeline.png" 
            alt="Sơ đồ pipeline của BoT-SORT"
            class="rounded-md shadow-lg border border-gray-700"
          />
        </div>
        <div class="fragment mt-8" data-fragment-index="5">
          <video src="videos/single-camera-tracking-demo.mp4" autoplay loop muted class="rounded-lg shadow-2xl border border-gray-700"></video>
          <p class="text-center text-base italic text-gray-200 mt-2 drop-shadow">Demo: Tracking ID ổn định ngay cả khi có che khuất.</p>
        </div>
      </div>
    </div>
  </div>
</section>
