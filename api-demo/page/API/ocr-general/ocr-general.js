Page({
  data: {
    textArry: [],
    imgUrl: '/image/ocr/ocr_general.jpg',
  },
  onLoad() {
    this.callFn(this.data.imgUrl);
  },
  callFn(url) {
    this.data.textArry = [];
    my.call('ocr', {
      ocrType: 'ocr_general',
      path: url,
      success: res => {
        let data = res.result.text;
        for (var i = 0; i < data.length; i++) {
          this.data.textArry.push({ title: i + 1, message: data[i] });
        }
        this.setData({
          imgUrl: url,
          textArry: this.data.textArry,
        });
        my.hideLoading();
      },
      fail: res => {
        my.hideLoading();
        my.alert({
          title: 'fail',
          content: JSON.stringify(res),
        });
      },
    });
  },
  photoSubmit() {
    //点击上传
    my.chooseImage({
      count: 1,
      success: res => {
        this.callFn(res.apFilePaths[0]);
      },
    });
  },
  imageLoad(e) {},
  imageError(e) {},
});
