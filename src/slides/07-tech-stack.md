<!--
  Bố cục slide này được chia thành các cột rõ ràng cho từng tầng công nghệ.
  Sử dụng logo giúp slide trở nên trực quan và chuyên nghiệp.
-->
<section 
  data-background-image="/images/backgrounds/agenda-bg.png" 
  data-background-opacity="1"
  class="h-full"
>
  <div class="w-full h-full flex flex-col justify-center items-center">
    <h2 class="!text-5xl mb-16 text-white drop-shadow-lg">Môi trường & Công nghệ <strong class="!text-tech-highlight">Sử dụng</strong></h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-7xl mx-auto">
      <!-- CỘT 1: PHẦN CỨNG & HỆ ĐIỀU HÀNH -->
      <div class="fragment bg-tech-card/90 backdrop-blur-lg p-8 rounded-xl border border-tech-subtle/40 text-center shadow-2xl" data-fragment-index="1">
        <h3 class="!text-3xl !text-tech-highlight mb-8 text-white drop-shadow">Hardware & OS</h3>
        <div class="flex flex-col items-center space-y-6">
          <div class="flex items-center space-x-4">
            <img src="images/logos/nvidia-logo.png" class="h-12 drop-shadow-lg" alt="NVIDIA Logo"/>
            <p class="text-2xl text-left text-white">NVIDIA GPU<br><span class="text-lg text-tech-subtle">(Model Training)</span></p>
          </div>
          <div class="flex items-center space-x-4">
            <img src="images/logos/intel-logo.png" class="h-12 drop-shadow-lg" alt="Intel Logo"/>
            <p class="text-2xl text-left text-white">Intel CPU<br><span class="text-lg text-tech-subtle">(Benchmark & Deployment)</span></p>
          </div>
          <div class="flex items-center space-x-4">
            <img src="images/logos/ubuntu-logo.png" class="h-12 drop-shadow-lg" alt="Ubuntu Logo"/>
            <p class="text-2xl text-left text-white">Ubuntu 22.04 LTS<br><span class="text-lg text-tech-subtle">(Operating System)</span></p>
          </div>
        </div>
      </div>
      <!-- CỘT 2: FRAMEWORKS -->
      <div class="fragment bg-tech-card/90 backdrop-blur-lg p-8 rounded-xl border border-tech-subtle/40 text-center shadow-2xl" data-fragment-index="2">
        <h3 class="!text-3xl !text-tech-highlight mb-8 text-white drop-shadow">AI Frameworks</h3>
        <div class="flex flex-col items-center space-y-6">
          <div class="flex items-center space-x-4">
            <img src="images/logos/pytorch-logo.png" class="h-12 drop-shadow-lg" alt="PyTorch Logo"/>
            <p class="text-2xl text-white">PyTorch 2.1</p>
          </div>
          <div class="flex items-center space-x-4">
            <img src="images/logos/ultralytics-logo.png" class="h-12 drop-shadow-lg" alt="Ultralytics Logo"/>
            <p class="text-2xl text-white">Ultralytics 8.0</p>
          </div>
          <div class="flex items-center space-x-4">
            <img src="images/logos/openvino-logo.png" class="h-16 drop-shadow-lg" alt="OpenVINO Logo"/>
            <p class="text-2xl text-white">Intel® OpenVINO™</p>
          </div>
        </div>
      </div>
      <!-- CỘT 3: THƯ VIỆN CHÍNH -->
      <div class="fragment bg-tech-card/90 backdrop-blur-lg p-8 rounded-xl border border-tech-subtle/40 text-center shadow-2xl" data-fragment-index="3">
        <h3 class="!text-3xl !text-tech-highlight mb-8 text-white drop-shadow">Key Libraries</h3>
        <div class="flex flex-col items-center space-y-6">
          <div class="flex items-center space-x-4">
            <img src="images/logos/supervision-logo.png" class="h-12 drop-shadow-lg" alt="Supervision Logo"/>
            <p class="text-2xl text-white">Supervision</p>
          </div>
          <div class="flex items-center space-x-4">
            <img src="images/logos/faiss-logo.png" class="h-12 drop-shadow-lg" alt="Faiss Logo"/>
            <p class="text-2xl text-white">Faiss</p>
          </div>
          <div class="flex items-center space-x-4">
            <img src="images/logos/fast-plate-ocr-logo.png" class="h-12 drop-shadow-lg" alt="fast-plate-ocr Logo"/>
            <p class="text-2xl text-white">fast-plate-ocr</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
