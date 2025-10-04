<!--
  Slide này sử dụng bố cục 3 cột để trình bày Mục tiêu, Phạm vi, và Đóng góp.
  Mỗi cột được nhấn mạnh bằng một icon lớn và tiêu đề rõ ràng.
  Màu sắc và font chữ tiếp tục tuân thủ theme công nghệ đã định.
-->
<section 
  data-background-image="/images/backgrounds/agenda-bg.png" 
  data-background-opacity="1"
  class="h-full"
>
  <div class="w-full h-full flex flex-col justify-center">
    <h2 class="text-center !text-5xl mb-16">Mục tiêu, Phạm vi & Đóng góp</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-7xl mx-auto">
      <!-- CỘT 1: MỤC TIÊU CHÍNH (OBJECTIVES) -->
      <div class="fragment" data-fragment-index="1">
        <div class="bg-tech-card/50 p-8 rounded-lg h-full border border-tech-subtle/20">
          <!-- Icon -->
          <img src="images/agenda-icons/icon-problem.png" class="h-20 w-20 mx-auto mb-6" alt="Objectives Icon"/>
          <h3 class="!text-3xl text-center !text-tech-highlight">Mục tiêu Chính</h3>
          <ul class="text-xl space-y-4 mt-6">
            <li class="flex items-start text-white font-semibold">
              <span class="text-tech-highlight font-bold mr-3 mt-1">&#10003;</span>
              <span>Xây dựng một pipeline MC-MOT <strong class="!text-tech-highlight">hoàn chỉnh, end-to-end</strong> với độ chính xác cao.</span>
            </li>
            <li class="flex items-start text-white font-semibold">
              <span class="text-tech-highlight font-bold mr-3 mt-1">&#10003;</span>
              <span>Đạt hiệu năng <strong class="!text-tech-highlight">thời gian thực (&gt;15 FPS) trên CPU</strong> thông qua tối ưu hóa bằng Intel® OpenVINO™.</span>
            </li>        </ul>
        </div>
      </div>
      <!-- CỘT 2: PHẠM VI NGHIÊN CỨU (SCOPE) -->
      <div class="fragment" data-fragment-index="2">
        <div class="bg-tech-card/50 p-8 rounded-lg h-full border border-tech-subtle/20">
          <!-- Icon -->
          <img src="images/icons/icon-scope.png" class="h-20 w-20 mx-auto mb-6" alt="Scope Icon"/>
          <h3 class="!text-3xl text-center !text-tech-highlight">Phạm vi Nghiên cứu</h3>
          <ul class="text-xl space-y-4 mt-6">
            <li class="flex items-start text-white font-semibold">
              <span class="text-tech-highlight font-bold mr-3 mt-1">&rarr;</span>
              <span><strong class="!text-tech-highlight">Công nghệ:</strong> YOLOv12, BoT-SORT, Vision Transformer, Faiss, OpenVINO™.</span>
            </li>
            <li class="flex items-start text-white font-semibold">
              <span class="text-tech-highlight font-bold mr-3 mt-1">&rarr;</span>
              <span><strong class="!text-tech-highlight">Dữ liệu:</strong> Vehicle-1M, AI City, VRIC, Roboflow & Dữ liệu thực tế.</span>
            </li>        </ul>
        </div>
      </div>
      <!-- CỘT 3: ĐÓNG GÓP (CONTRIBUTIONS) -->
      <div class="fragment" data-fragment-index="3">
        <div class="bg-tech-card/50 p-8 rounded-lg h-full border border-tech-subtle/20">
          <!-- Icon -->
          <img src="images/icons/icon-contribution.png" class="h-20 w-20 mx-auto mb-6" alt="Contributions Icon"/>
          <h3 class="!text-3xl text-center !text-tech-highlight">Đóng góp Chính</h3>
          <ul class="text-xl space-y-4 mt-6">
            <li class="flex items-start text-white font-bold">
              <span class="text-tech-highlight font-bold mr-3 mt-1">&#10022;</span>
              <span>Cung cấp một <strong class="!text-tech-highlight">case study định lượng chi tiết</strong> về hiệu quả của OpenVINO trên pipeline AI phức tạp.</span>
            </li>
            <li class="flex items-start text-white font-bold">
              <span class="text-tech-highlight font-bold mr-3 mt-1">&#10022;</span>
              <span>Đưa ra một <strong class="!text-tech-highlight">giải pháp khả thi về chi phí</strong> cho việc triển khai Hệ thống Giao thông Thông minh (ITS).</span>
            </li>        </ul>
        </div>
      </div>
    </div>
  </div>
</section>
