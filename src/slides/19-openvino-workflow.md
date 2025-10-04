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
    <h2 class="!text-5xl mb-16 text-center font-extrabold text-white drop-shadow-lg">
      Giải pháp Tối ưu: <strong class="text-blue-400">Quy trình 2 bước với Intel® OpenVINO™</strong>
    </h2>
    <div class="w-full max-w-7xl mx-auto flex items-center justify-center space-x-8">
      <!-- BƯỚC 1: PYTORCH -> ONNX -->
      <div class="fragment w-1/3 text-center" data-fragment-index="1">
        <div class="bg-gray-900/90 p-8 rounded-xl border border-blue-400/40 h-full shadow-xl shadow-blue-400/30">
          <p class="text-blue-400 font-extrabold text-2xl drop-shadow">BƯỚC 1</p>
          <h3 class="!text-3xl mt-2 mb-6 font-bold text-white drop-shadow">Export sang ONNX</h3>
          <img src="images/logos/pytorch-logo.png" class="h-24 w-24 mx-auto mb-2 drop-shadow-xl" alt="PyTorch Logo"/>
          <p class="text-xl mt-4 font-mono font-bold text-white drop-shadow">Model.pt</p>
          <p class="mt-6 text-lg font-semibold text-white drop-shadow">
            Chuyển đổi mô hình PyTorch gốc thành định dạng trung gian tiêu chuẩn <strong class="!text-white">ONNX (Open Neural Network Exchange)</strong>.
          </p>
          <p class="text-sm text-gray-300 italic mt-4 drop-shadow">(Thực hiện tự động sau khi huấn luyện với cờ --export-onnx)</p>
        </div>
      </div>
      <!-- Mũi tên chỉ sang phải -->
      <div class="fragment text-8xl text-blue-400 drop-shadow-xl" data-fragment-index="2">&rarr;</div>
      <!-- BƯỚC 2: ONNX -> OPENVINO IR -->
      <div class="fragment w-2/5 text-center" data-fragment-index="3">
        <div class="bg-gray-900/90 p-8 rounded-xl border-2 border-blue-400 h-full shadow-xl shadow-blue-400/30">
          <p class="text-blue-400 font-extrabold text-2xl drop-shadow">BƯỚC 2</p>
          <h3 class="!text-3xl mt-2 mb-6 font-bold text-white drop-shadow">Model Optimizer (mo)</h3>
          <img src="images/logos/openvino-logo.png" class="h-24 w-auto mx-auto mb-2 drop-shadow-xl" alt="OpenVINO Logo"/>
          <p class="text-xl mt-4 font-mono font-bold text-white drop-shadow">model.xml + model.bin</p>
          <p class="mt-6 text-lg font-semibold text-white drop-shadow">
            Sử dụng công cụ <strong class="!text-white">`mo`</strong> để phân tích, <strong class="!text-white">tối ưu hóa đồ thị (Graph Fusion)</strong>, và chuyển đổi mô hình ONNX thành định dạng <strong class="!text-white">Intermediate Representation (IR)</strong> hiệu năng cao.
          </p>
          <div class="text-left font-mono text-sm bg-black/70 p-4 rounded-md mt-6 text-green-200 drop-shadow">
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
