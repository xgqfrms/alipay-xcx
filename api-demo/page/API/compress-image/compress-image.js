Page({
  data: {
    src: 'https://img.alicdn.com/tps/TB1sXGYIFXXXXc5XpXXXXXXXXXX.jpg',
    compressedSrc: '',
  },
  compressImage() {
    my.compressImage({
      apFilePaths: [this.data.src],
      level: 0,
      success: res => {
        this.setData({
          compressedSrc: res.apFilePaths[0],
        });
      },
    });
  },
});
