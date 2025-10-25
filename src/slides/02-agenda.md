<!--
  Slide này có bố cục phức tạp hơn:
  - data-background-image: Sử dụng một ảnh nền tĩnh, mờ ảo mang phong cách công nghệ.
  - data-background-opacity: Giảm độ sáng của ảnh nền.
  - Bố cục được chia làm 2 phần: Lời mở đầu và Lưới Agenda 3x2.
  - Mỗi thẻ trong lưới là một fragment, sẽ xuất hiện tuần tự.
-->
<section 
  data-background-image="/images/backgrounds/agenda-bg.png" 
  data-background-opacity="1"
  class="h-full"
>
  <div class="w-full h-full flex flex-col justify-center items-center px-8 md:px-16">
    <blockquote class="fragment fade-up-then-semi-out border-l-4 border-tech-highlight pl-6 mb-12">
      <p class="text-4xl italic text-white font-semibold leading-snug drop-shadow-lg">
        "Mang công nghệ AI giám sát giao thông tiên tiến đến gần hơn với thực tiễn, bằng cách tối ưu hóa hiệu năng trên chính phần cứng phổ thông của các đô thị thông minh."
      </p>
    </blockquote>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-9xl">
      <div class="fragment fade-up bg-tech-card/80 backdrop-blur-sm rounded-lg p-6 text-center border border-tech-subtle/20 hover:border-tech-highlight transition-all duration-300">
        <img src="/images/agenda-icons/icon-problem.png" class="h-16 w-16 mx-auto mb-4" alt="Problem Icon" />
        <h3 class="!text-tech-highlight !text-4xl font-bold">01. Đặt Vấn Đề & Mục Tiêu</h3>
        <p class="text-white text-2xl mt-2 font-medium">Bài toán thực tiễn và các thách thức khoa học cần giải quyết.</p>
      </div>
      <div class="fragment fade-up bg-tech-card/80 backdrop-blur-sm rounded-lg p-6 text-center border border-tech-subtle/20 hover:border-tech-highlight transition-all duration-300">
        <img src="/images/agenda-icons/icon-tech.png" class="h-16 w-16 mx-auto mb-4" alt="Technology Icon" />
        <h3 class="!text-tech-highlight !text-4xl font-bold">02. Công Nghệ Lõi</h3>
        <p class="text-white text-2xl mt-2 font-medium">Các lý thuyết nền tảng và công nghệ AI được lựa chọn.</p>
      </div>
      <div class="fragment fade-up bg-tech-card/80 backdrop-blur-sm rounded-lg p-6 text-center border border-tech-subtle/20 hover:border-tech-highlight transition-all duration-300">
        <img src="/images/agenda-icons/icon-design.png" class="h-16 w-16 mx-auto mb-4" alt="Design Icon" />
        <h3 class="!text-tech-highlight !text-4xl md:!text-3xl font-bold">03. Thiết Kế Hệ Thống</h3>
        <p class="text-white text-2xl mt-2 font-medium">Phân tích, thiết kế kiến trúc và luồng hoạt động chi tiết.</p>
      </div>
      <div class="fragment fade-up bg-tech-card/80 backdrop-blur-sm rounded-lg p-6 text-center border border-tech-subtle/20 hover:border-tech-highlight transition-all duration-300">
        <img src="/images/agenda-icons/icon-optimization.png" class="h-16 w-16 mx-auto mb-4" alt="Optimization Icon" />
        <h3 class="!text-tech-highlight !text-4xl font-bold">04. Tối Ưu Hóa Đột Phá</h3>
        <p class="text-white text-2xl mt-2 font-medium">Sức mạnh của Intel® OpenVINO™ trong việc bứt phá hiệu năng.</p>
      </div>
      <div class="fragment fade-up bg-tech-card/80 backdrop-blur-sm rounded-lg p-6 text-center border border-tech-subtle/20 hover:border-tech-highlight transition-all duration-300">
        <img src="/images/agenda-icons/icon-results.png" class="h-16 w-16 mx-auto mb-4" alt="Results Icon" />
        <h3 class="!text-tech-highlight !text-4xl font-bold">05. Kết Quả & Thảo Luận</h3>
        <p class="text-white text-2xl mt-2 font-medium">Các minh chứng định lượng, định tính và phân tích chuyên sâu.</p>
      </div>
      <div class="fragment fade-up bg-tech-card/80 backdrop-blur-sm rounded-lg p-6 text-center border border-tech-subtle/20 hover:border-tech-highlight transition-all duration-300">
        <img src="/images/agenda-icons/icon-future.png" class="h-16 w-16 mx-auto mb-4" alt="Future Icon" />
        <h3 class="!text-tech-highlight !text-4xl font-bold">06. Kết Luận & Tương Lai</h3>
        <p class="text-white text-2xl mt-2 font-medium">Tổng kết các đóng góp và định hướng phát triển tiếp theo.</p>
      </div>
    </div>
  </div>
</section>
