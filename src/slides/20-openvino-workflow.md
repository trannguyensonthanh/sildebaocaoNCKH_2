<!--
  Slide này là một flowchart động giải thích quy trình chuyển đổi 2 bước.
  Nó sử dụng các icon logo và một khối code để làm cho quy trình trở nên cụ thể và dễ hiểu.
-->
<section 
  data-background-image="/images/backgrounds/agenda-bg.png" 
  data-background-opacity="1"
  class="h-full"
>
  <div class="w-full h-full flex flex-col justify-center items-center">
    <h2 class="!text-7xl mb-16 text-center font-extrabold text-white drop-shadow-2xl">
      Giải pháp Tối ưu: <strong class="text-blue-400">Quy trình 2 bước với Intel® OpenVINO™</strong>
    </h2>
    <div class="w-full max-w-9xl mx-auto flex flex-col md:flex-row items-center justify-center md:space-x-12 space-y-8 md:space-y-0">
      <!-- BƯỚC 1: PYTORCH -> ONNX -->
      <div class="fragment w-full md:w-1/3 text-center" data-fragment-index="1">
        <div class="bg-gray-900/95 p-8 rounded-2xl border border-blue-400/60 h-full shadow-2xl shadow-blue-400/40">
          <p class="text-blue-400 font-extrabold text-5xl drop-shadow-lg">BƯỚC 1</p>
          <h3 class="!text-4xl mt-2 mb-6 font-bold text-white drop-shadow-lg">Export sang ONNX</h3>
          <img src="images/logos/pytorch-logo.png" class="h-24 w-24 mx-auto mb-4 drop-shadow-2xl" alt="PyTorch Logo"/>
          <p class="text-2xl mt-4 font-mono font-bold text-white drop-shadow-lg">Model.pt</p>
          <p class="mt-6 text-3xl font-semibold text-white drop-shadow-lg">
            Chuyển đổi mô hình PyTorch gốc thành định dạng trung gian tiêu chuẩn <strong class="!text-white">ONNX (Open Neural Network Exchange)</strong>.
          </p>
          <p class="text-xl text-gray-200 italic mt-4 drop-shadow">(Thực hiện tự động sau khi huấn luyện với cờ --export-onnx)</p>
        </div>
      </div>
      <!-- Mũi tên chỉ sang phải -->
      <div class="fragment text-8xl md:text-9xl text-blue-400 drop-shadow-2xl mx-0 md:mx-8" data-fragment-index="2">&rarr;</div>
      <!-- BƯỚC 2: ONNX -> OPENVINO IR -->
      <div class="fragment w-full md:w-2/5 text-center" data-fragment-index="3">
        <div class="bg-gray-900/95 p-8 rounded-2xl border-2 border-blue-400 h-full shadow-2xl shadow-blue-400/40">
          <p class="text-blue-400 font-extrabold text-5xl drop-shadow-lg">BƯỚC 2</p>
          <h3 class="!text-4xl mt-2 mb-6 font-bold text-white drop-shadow-lg">Model Optimizer (mo)</h3>
          <img src="images/logos/openvino-logo.png" class="h-24 w-auto mx-auto mb-4 drop-shadow-2xl" alt="OpenVINO Logo"/>
          <p class="text-2xl mt-4 font-mono font-bold text-white drop-shadow-lg">model.xml + model.bin</p>
          <p class="mt-6 text-3xl font-semibold text-white drop-shadow-lg">
            Sử dụng công cụ <strong class="!text-white">`mo`</strong> để phân tích, <strong class="!text-white">tối ưu hóa đồ thị (Graph Fusion)</strong>, và chuyển đổi mô hình ONNX thành định dạng <strong class="!text-white">Intermediate Representation (IR)</strong> hiệu năng cao.
          </p>
          <div class="text-left font-mono text-base bg-black/80 p-4 rounded-lg mt-6 text-green-200 drop-shadow-lg">
            <span class="text-green-400">$</span> mo --input_model best.onnx \<br>
            &nbsp;&nbsp; --output_dir openvino_models/FP32 \<br>
            &nbsp;&nbsp; --data_type FP32 \<br>
            &nbsp;&nbsp; --model_name yolov12_vehicle
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
