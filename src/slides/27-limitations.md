<!--
  Slide này trình bày các hạn chế một cách có cấu trúc, cho thấy tư duy phản biện.
  Sử dụng bố cục lưới và icon để phân loại các thách thức.
-->
<section 
  data-background-image="/images/backgrounds/agenda-bg.png" 
  data-background-opacity="1"
  class="h-full"
>
  <div class="w-full h-full flex flex-col justify-center items-center">
    <h2 class="!text-5xl mb-16 text-center text-white">Thảo luận: <strong class="!text-tech-highlight">Hạn chế & Thách thức Thực tế</strong></h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 w-full max-w-6xl mx-auto">
      <!-- THÁCH THỨC 1: CHẤT LƯỢNG DỮ LIỆU -->
      <div class="fragment bg-tech-card/80 p-6 rounded-lg flex items-center space-x-6 border border-tech-subtle/20" data-fragment-index="1">
        <!-- Icon -->
        <div class="flex-shrink-0">
          <img src="images/icons/icon-data-quality.png" class="h-20 w-20" alt="Data Quality Icon"/>
        </div>
        <div>
          <h3 class="!text-2xl !text-tech-highlight">Chất lượng Dữ liệu Thay đổi</h3>
          <p class="mt-2 text-lg text-white">Phụ thuộc vào camera công cộng: độ phân giải thấp, bị nén, nhiễu và đôi khi bị che khuất bởi thời tiết (mưa, bụi bẩn).</p>
        </div>
      </div>
      <!-- THÁCH THỨC 2: ĐIỀU KIỆN MÔI TRƯỜNG -->
      <div class="fragment bg-tech-card/80 p-6 rounded-lg flex items-center space-x-6 border border-tech-subtle/20" data-fragment-index="2">
        <!-- Icon -->
        <div class="flex-shrink-0">
          <img src="images/icons/icon-environment.png" class="h-20 w-20" alt="Environment Icon"/>
        </div>
        <div>
          <h3 class="!text-2xl !text-tech-highlight">Điều kiện Môi trường Khắc nghiệt</h3>
          <p class="mt-2 text-lg text-white">Hiệu năng bị ảnh hưởng bởi ánh sáng yếu (bình minh/hoàng hôn), ngược sáng, lóa đèn xe vào ban đêm.</p>
        </div>
      </div>
      <!-- THÁCH THỨC 3: CHE KHUẤT NẶNG -->
      <div class="fragment bg-tech-card/80 p-6 rounded-lg flex items-center space-x-6 border border-tech-subtle/20" data-fragment-index="3">
        <!-- Icon -->
        <div class="flex-shrink-0">
          <img src="images/icons/icon-occlusion.png" class="h-20 w-20" alt="Occlusion Icon"/>
        </div>
        <div>
          <h3 class="!text-2xl !text-tech-highlight">Tình trạng Che khuất Nặng</h3>
          <p class="mt-2 text-lg text-white">Mật độ giao thông cao, đặc biệt là xe máy, thường xuyên che khuất một phần hoặc toàn bộ phương tiện, gây khó khăn cho việc duy trì tracking ID ổn định.</p>
        </div>
      </div>
      <!-- THÁCH THỨC 4: ĐA DẠNG BIỂN SỐ -->
      <div class="fragment bg-tech-card/80 p-6 rounded-lg flex items-center space-x-6 border border-tech-subtle/20" data-fragment-index="4">
        <!-- Icon -->
        <div class="flex-shrink-0">
          <img src="images/icons/icon-license-plate.png" class="h-20 w-20" alt="License Plate Icon"/>
        </div>
        <div>
          <h3 class="!text-2xl !text-tech-highlight">Tình trạng & Đa dạng Biển số</h3>
          <p class="mt-2 text-lg text-white">Các biển số không theo chuẩn, bị bẩn, mờ, cong vênh hoặc phai màu là nguồn gây lỗi chính cho module OCR.</p>
        </div>
      </div>
    </div>
    <p class="fragment text-xl italic text-white mt-16 w-2/3 text-center" data-fragment-index="5">
      Những hạn chế này không phải là thất bại của thiết kế, mà là những thách thức cố hữu của việc áp dụng Computer Vision vào <strong class="!text-white">môi trường thực tế không kiểm soát được</strong>.
    </p>
  </div>
</section>
