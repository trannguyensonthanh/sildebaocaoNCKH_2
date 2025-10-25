<!--
  Slide này sử dụng bố cục 3 cột để giải thích 3 lý do kỹ thuật chính.
  Mỗi cột là một "card" với icon, tiêu đề và giải thích ngắn gọn.
-->
<section 
  data-background-image="/images/backgrounds/agenda-bg.png" 
  data-background-opacity="1"
  class="h-full"
>
  <div class="w-full h-full flex flex-col justify-center items-center">
    <h2 class="!text-7xl mb-16 text-center text-white">"Bí mật" đằng sau Tốc độ: <strong class="!text-tech-highlight">Tại sao OpenVINO™ Nhanh hơn?</strong></h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-9xl mx-auto">
      <!-- CỘT 1: TỐI ƯU HÓA KERNEL & VECTORIZATION -->
      <div class="fragment bg-tech-card/80 backdrop-blur-sm p-8 rounded-lg border border-tech-subtle/20 h-full" data-fragment-index="1">
        <!-- Icon -->
        <img src="images/icons/icon-vectorization.png" class="h-24 w-24 mx-auto mb-6" alt="Vectorization Icon"/>
        <h3 class="!text-5xl !text-tech-highlight text-center">1. Tối ưu hóa Cấp thấp & Vectorization</h3>
        <p class="mt-6 text-2xl text-white">
          OpenVINO không dùng các lớp thực thi chung chung của PyTorch. Thay vào đó, nó giao tiếp <strong class="!text-white">trực tiếp với phần cứng</strong>.
        </p>
        <p class="mt-4 text-2xl text-white">
          Nó tận dụng triệt để các tập lệnh <strong class="!text-tech-highlight">AVX2/AVX512 (SIMD)</strong> của CPU, cho phép thực hiện hàng loạt phép tính song song chỉ trong một chu kỳ xung nhịp.
        </p>
      </div>
      <!-- CỘT 2: TỐI ƯU HÓA ĐỒ THỊ (GRAPH FUSION) -->
      <div class="fragment bg-tech-card/80 backdrop-blur-sm p-8 rounded-lg border border-tech-subtle/20 h-full" data-fragment-index="2">
        <!-- Icon -->
        <img src="images/icons/icon-graph-fusion.png" class="h-24 w-24 mx-auto mb-6" alt="Graph Fusion Icon"/>
        <h3 class="!text-5xl !text-tech-highlight text-center">2. Tối ưu hóa Đồ thị (Graph Fusion)</h3>
        <p class="mt-6 text-2xl text-white">
          <strong class="!text-white">Trước khi tối ưu:</strong> Một chuỗi lệnh có thể là <code class="bg-black/50 px-2 py-1 rounded">Conv</code> &rarr; <code class="bg-black/50 px-2 py-1 rounded">Bias</code> &rarr; <code class="bg-black/50 px-2 py-1 rounded">ReLU</code>, đòi hỏi 3 lần gọi hàm riêng biệt.
        </p>
        <p class="mt-4 text-2xl text-white">
          <strong class="!text-white">Sau khi tối ưu:</strong> OpenVINO "hợp nhất" chúng thành một lớp duy nhất, hiệu quả hơn là <code class="bg-black/50 px-2 py-1 rounded text-tech-highlight">FusedConvBiasReLU</code>. Điều này giảm overhead và tối ưu hóa việc sử dụng cache.
        </p>
      </div>
      <!-- CỘT 3: GIẢM OVERHEAD & THỰC THI BẤT ĐỒNG BỘ -->
      <div class="fragment bg-tech-card/80 backdrop-blur-sm p-8 rounded-lg border border-tech-subtle/20 h-full" data-fragment-index="3">
        <!-- Icon -->
        <img src="images/icons/icon-async.png" class="h-24 w-24 mx-auto mb-6" alt="Async Execution Icon"/>
        <h3 class="!text-5xl !text-tech-highlight text-center">3. Runtime Nhẹ & Bất đồng bộ</h3>
        <p class="mt-6 text-2xl text-white">
          Inference Engine là một runtime C++ <strong class="!text-white">nhẹ và chuyên biệt cho suy luận</strong>, loại bỏ các thành phần thừa của framework training.
        </p>
        <p class="mt-4 text-2xl text-white">
          Hỗ trợ <strong class="!text-white">thực thi bất đồng bộ</strong>, cho phép CPU xử lý song song việc chuẩn bị dữ liệu và suy luận, tận dụng tối đa thời gian chờ.
        </p>
      </div>
    </div>
  </div>
</section>
