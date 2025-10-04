<!--
  Đây là slide quan trọng nhất về mặt kết quả. Bố cục được chia làm 2 phần chính:
  - Bảng so sánh chi tiết ở trên cùng.
  - Hai biểu đồ cột trực quan hóa sự khác biệt ở dưới.
-->
<section 
  data-background-image="/images/backgrounds/agenda-bg.png" 
  data-background-opacity="1"
  class="h-full"
>
  <div class="w-full h-full flex flex-col justify-center items-center text-white drop-shadow-lg">
    <h2 class="!text-5xl mb-12 text-center font-extrabold text-tech-highlight">
      Kết quả Định lượng: <strong class="!text-tech-highlight">Một Bước Đột phá về Hiệu năng</strong>
    </h2>
    <!-- BẢNG SO SÁNH KẾT QUẢ -->
    <div class="w-full max-w-5xl mx-auto fragment bg-gradient-to-br from-tech-bg-dark via-tech-bg to-tech-bg-dark/80 rounded-xl shadow-2xl border border-tech-highlight/40" data-fragment-index="1">
      <table class="w-full text-2xl border-collapse">
        <thead>
          <tr class="border-b-4 border-tech-highlight text-tech-highlight">
            <th class="p-4 text-left font-bold">Metric</th>
            <th class="p-4 text-center font-bold">🐢 PyTorch CPU (Baseline)</th>
            <th class="p-4 text-center font-bold">🚀 OpenVINO™ CPU (Optimized)</th>
            <th class="p-4 text-center font-bold text-tech-highlight">📈 Cải thiện</th>
          </tr>
        </thead>
        <tbody class="text-tech-subtle">
          <tr class="border-b border-tech-subtle/20">
            <td class="p-6 font-bold text-tech-text">Throughput (FPS)</td>
            <td class="p-6 text-center font-mono text-4xl text-red-400 bg-black/30 rounded">0.17</td>
            <td class="p-6 text-center font-mono text-4xl text-green-400 bg-black/30 rounded">15.23</td>
            <td class="p-6 text-center font-mono text-4xl text-tech-highlight font-bold bg-black/30 rounded">~8858% (x89)</td>
          </tr>
          <tr>
            <td class="p-6 font-bold text-tech-text">Latency (ms)</td>
            <td class="p-6 text-center font-mono text-4xl text-red-400 bg-black/30 rounded">5720.48</td>
            <td class="p-6 text-center font-mono text-4xl text-green-400 bg-black/30 rounded">327.33</td>
            <td class="p-6 text-center font-mono text-4xl text-tech-highlight font-bold bg-black/30 rounded">-94.3%</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- BIỂU ĐỒ CỘT TRỰC QUAN HÓA -->
    <div class="w-full max-w-7xl mx-auto grid grid-cols-2 gap-12 mt-16">
      <!-- BIỂU ĐỒ THROUGHPUT (FPS) -->
      <div class="fragment" data-fragment-index="2">
        <h3 class="!text-2xl text-center text-tech-highlight mb-4 font-semibold drop-shadow">So sánh Throughput (FPS) - Càng cao càng tốt</h3>
        <div class="bg-gradient-to-br from-tech-bg-dark via-tech-bg to-tech-bg-dark/80 p-4 rounded-lg shadow-2xl border border-tech-highlight/30">
          <img src="images/chart-fps-comparison.png" alt="Biểu đồ so sánh Throughput (FPS)" class="rounded-md shadow-lg"/>
        </div>
      </div>
      <!-- BIỂU ĐỒ LATENCY (ms) -->
      <div class="fragment" data-fragment-index="3">
        <h3 class="!text-2xl text-center text-tech-highlight mb-4 font-semibold drop-shadow">So sánh Latency (ms) - Càng thấp càng tốt</h3>
        <div class="bg-gradient-to-br from-tech-bg-dark via-tech-bg to-tech-bg-dark/80 p-4 rounded-lg shadow-2xl border border-tech-highlight/30">
          <img src="images/chart-latency-comparison.png" alt="Biểu đồ so sánh Latency (ms)" class="rounded-md shadow-lg"/>
        </div>
      </div>
    </div>
  </div>
</section>
