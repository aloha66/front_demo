import "./utils";

// // 普通上传开始
// function commomUpload() {
//   const files = document.querySelector("#commonUpload").files;
//   upload(files);
// }
// // 普通上传结束

// // 拖拽上传开始
// const drag = document.querySelector("#drag");
// drag.addEventListener("dragover", function(e) {
//   e.preventDefault();
// });
// drag.addEventListener("drop", function(e) {
//   e.preventDefault();
//   // 没有文件上传
//   if (!e.dataTransfer.files.length) return;
//   const files = e.dataTransfer.files;
//   upload(files);
// });
// // 拖拽上传结束

// // 粘贴上传开始
// const textarea = document.querySelector("#textarea");
// textarea.addEventListener("paste", function(e) {
//   const items = e.clipboardData.items;
//   let arr = [];
//   for (let i = 0, len = items.length; i < len; i++) {
//     if (items[i].kind === "string" && items[i].type === "text/plain") {
//       items[i].getAsString(function(str) {
//         arr.push(str);
//       });
//     } else if (items[i].kind === "file") {
//       // 或用item.getAsFile();获取文件
//       const file = e.clipboardData.files[0];
//       upload(files);
//     }
//   }
// });
// // 粘贴上传结束
