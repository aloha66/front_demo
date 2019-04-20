function isImageFileType({ type }) {
  return type.includes("image/");
}

function fileToUrl(file, isBlob) {
  if (isBlob) {
    // 记得要释放对象
    return URL.createObjectURL(file);
  } else {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    return new Promise(reslove => {
      reader.onload = function() {
        reslove(reader.result);
      };
    });
  }
}

async function previewImg(files, isBlob) {
  for (let file of files) {
    // 判断是否是图片类型，是执行预览
    if (isImageFileType(file)) {
      file.thumbUrl = await fileToUrl(file, isBlob);
    }
  }
  return files;
}

async function showImgs(files, isBlob = true) {
  const imgs = await previewImg(files, isBlob);
  for (let file of imgs) {
    const preview = document.querySelector("#preview");
    const img = new Image();
    img.className = "img";
    img.src = file.thumbUrl;
    if (isBlob) {
      img.onload = function(e) {
        // 释放createObjectURL创建的对象
        URL.revokeObjectURL(file.thumbUrl);
      };
    }
    preview.appendChild(img);
  }
}

async function upload(files) {
  showImgs(files);
  let formData = new FormData();
  formData.append("files", files);
  axios({
    method: "post",
    url: "/upload",
    data: formData
  })
    .then(res => {})
    .catch(e => e);
}
