表单`enctype`常用两种类型

- `application/x-www-form-urlencoded` 默认表单类型
- `multipart/form-data`包含文件（多媒体）自动切换成这个类型

## 上传方式

### 拖拽上传

基于`DataTransfer`

- 需要在`dragover`配合`drop`事件，取消默认事件，获取文件列表，否则页面会定向到拖曳的图片

### 粘贴上传

`clipboardData`,基于`DataTransfer`。依截图形式，目测只能上传一张图片

`clipboardData.items`的`kind`和`type`能获取粘贴的相关内容

```js
if (items[i].kind === "string" && items[i].type === "text/plain") {
  // 用户粘贴的文字
}

if (items[i].kind === "file") {
  // 用户截图的图片
  // ps: 一开始我以为是可以把本地文件复制粘贴，目前发现只是通过截图的形式,items数组才有内容
}
```

#### 兼容性问题

- 存在地方

  - ie ： `window.clipboardData`
  - 非 ie ： 在对应的`event.clipboardData`

- 对应方法

  - `getData(params)`从剪切板获取数据，成功返回`true`，失败返回`false`

    - ie : 接收`text`或`url`
    - 非 ie ： 接收`MIME`类型，可用`text`表示`text/plain`

  - setData(type,content)设置内容,成功返回`true`，失败返回`false`
    - `type`数据类型
      - ie ：与`getData`相同
      - 非 ie ：参数一样是`MIME`类型，但不能识别`text`类型
    - `content`内容

## 文件转换

### 文件类型

### Blob

简述：不可变的类文件对象，二进制编码格式数据，`File`的父类对象。

```js
// 需要在图片加载完成时，把生成的objectURL清除，达到性能优化目的
objectURL = URL.createObjectURL(blob);
window.URL.revokeObjectURL(objectURL);
```

### FileReader

异步读取文件。

1. 配合`reader.readAsDataURL(file);`把图片文件转成`base64`。
2. 通过`reader.onload`方法，得出结果`reader.result`

## TODO

- ~~预览图片（图片的几种转换）~~
  - `URL.revokeObjectURL`可在`Web Worker`使用
  - 文件转换方式
- 界面重新布局
- 压缩图片
- 进度显示
- 旋转图片
- 多媒体分片上传
