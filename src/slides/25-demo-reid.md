<!--
  Đây là slide kể chuyện bằng hình ảnh.
  - Phần trên: Hiển thị 4 ảnh chụp của cùng một chiếc xe từ 4 camera khác nhau.
  - Phần dưới: Bản đồ lớn cho thấy các vị trí camera đó và quỹ đạo được tái hiện.
-->
<section 
  data-background-image="/images/backgrounds/agenda-bg.png" 
  data-background-opacity="1"
  class="h-full"
>
  <div class="w-full h-full flex flex-col justify-center items-center">
    <h2 class="!text-6xl mb-12 text-center text-white">
      Demo 2: Tái định danh Đa camera & <strong class="!text-tech-highlight">Tái hiện Hành trình</strong>
    </h2>
    <div class="w-full max-w-7xl mx-auto">
      <!-- PHẦN 1: CÁC ẢNH CHỤP RIÊNG LẺ -->
      <div>
        <p class="text-2xl text-center mb-6 fragment text-white" data-fragment-index="1">
          Hệ thống ghi nhận cùng một chiếc xe tải tại 4 vị trí camera khác nhau:
        </p>
        <div class="grid grid-cols-4 gap-6">
          <div class="text-center fragment" data-fragment-index="2">
            <img src="/images/demo-reid-c43.png" alt="Xe tại Camera C43" class="rounded-lg shadow-lg border-2 border-tech-subtle/30"/>
            <p class="mt-2 font-mono text-xl text-white">Camera C43</p>
          </div>
          <div class="text-center fragment" data-fragment-index="3">
            <img src="/images/demo-reid-c41.png" alt="Xe tại Camera C41" class="rounded-lg shadow-lg border-2 border-tech-subtle/30"/>
            <p class="mt-2 font-mono text-xl text-white">Camera C41</p>
          </div>
          <div class="text-center fragment" data-fragment-index="4">
            <img src="/images/demo-reid-c44.png" alt="Xe tại Camera C44" class="rounded-lg shadow-lg border-2 border-tech-subtle/30"/>
            <p class="mt-2 font-mono text-xl text-white">Camera C44</p>
          </div>
          <div class="text-center fragment" data-fragment-index="5">
            <img src="/images/demo-reid-c42.png" alt="Xe tại Camera C42" class="rounded-lg shadow-lg border-2 border-tech-subtle/30"/>
            <p class="mt-2 font-mono text-xl text-white">Camera C42</p>
          </div>
        </div>
      </div>
      <!-- PHẦN 2: BẢN ĐỒ TÁI HIỆN HÀNH TRÌNH -->
      <div class="fragment mt-10 relative" data-fragment-index="6">
        <p class="text-3xl text-center mb-6 text-white">
          Mặc dù ngoại hình thay đổi, hệ thống đã <strong class="!text-tech-highlight">gán thành công cùng một Global ID</strong> và tái hiện lại được quỹ đạo di chuyển:
        </p>
        <img src="/images/demo-reid-map-trajectory.png" alt="Bản đồ quỹ đạo xe" class="rounded-lg shadow-2xl shadow-tech-card w-full"/>
        <!-- Chú thích thêm để nhấn mạnh -->
        <div class="absolute top-1/4 left-1/4 bg-black/70 p-3 rounded-md text-xl fragment" data-fragment-index="7">
          <p class="text-tech-highlight">&#10003; Góc quay & ánh sáng khác nhau</p>
        </div>
        <div class="absolute top-1/2 right-1/4 bg-black/70 p-3 rounded-md text-xl fragment" data-fragment-index="8">
          <p class="text-tech-highlight">&#10003; Vector đặc trưng tương đồng</p>
        </div>
        <div class="absolute bottom-1/4 left-1/2 bg-black/70 p-3 rounded-md text-xl fragment" data-fragment-index="9">
          <p class="text-green-400 text-xl font-bold">&#10004; Tái định danh thành công!</p>
        </div>
      </div>
    </div>
  </div>
</section>
