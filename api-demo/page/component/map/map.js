const markers = [
  {
    id: 10,
    latitude: 30.279383,
    longitude: 120.131441,
    width: 19,
    height: 31,
    iconPath: '/image/mark_bs.png',
    callout: {
      content: 'callout',
    },
  },
];

const includePoints = [
  {
    latitude: 30.279383,
    longitude: 120.141461,
  },
];

Page({
  data: {
    scale: 14,
    longitude: 120.131441,
    latitude: 30.279383,
    markers,
    includePoints,
    polyline: [
      {
        points: [
          {
            longitude: 120.131441,
            latitude: 30.279383,
          },
          {
            longitude: 120.128821,
            latitude: 30.2782,
          },
          {
            longitude: 120.131618,
            latitude: 30.2776,
          },
          {
            longitude: 120.13252,
            latitude: 30.279393,
          },
          {
            longitude: 120.137517,
            latitude: 30.279383,
          },
        ],
        color: '#FF0000DD',
        width: 5,
        dottedLine: false,
      },
    ],
    circles: [
      {
        latitude: 30.279383,
        longitude: 120.131441,
        color: '#0076FF88',
        fillColor: '#0076FF33',
        radius: 80,
      },
    ],
    controls: [
      {
        id: 5,
        position: {
          left: 0,
          top: 300 - 50,
          width: 50,
          height: 50,
        },
        clickable: true,
      },
    ],
    polygon: [
      {
        points: [
          {
            longitude: 120.131441,
            latitude: 30.279383,
          },
          {
            longitude: 120.128821,
            latitude: 30.2782,
          },
          {
            longitude: 120.131618,
            latitude: 30.2776,
          },
          {
            longitude: 120.13252,
            latitude: 30.279393,
          },
          {
            longitude: 120.137517,
            latitude: 30.279383,
          },
        ],
        fillColor: '#BB0000DD',
        width: 5,
      },
    ],
  },
  onReady() {
    // 使用 my.createMapContext 获取 map 上下文
    this.mapCtx = my.createMapContext('map');
  },
  getCenterLocation() {
    this.mapCtx.getCenterLocation({
      success: res => {
        my.alert({
          content: 'longitude:' + res.longitude + '\nlatitude:' + res.latitude,
        });
        console.log(res.longitude);
        console.log(res.latitude);
      },
    });
  },
  moveToLocation() {
    this.mapCtx.moveToLocation();
  },
  regionchange(e) {
    console.log('regionchange', e);
  },
  markertap(e) {
    console.log('marker tap', e);
  },
  controltap(e) {
    console.log('control tap', e);
  },
  tap() {
    console.log('tap:');
  },
  callouttap(e) {
    console.log('callout tap', e);
  },
  changeScale() {
    this.setData({
      scale: 8,
    });
  },
  restoreMarkers() {
    this.setData({
      markers,
      includePoints,
    });
  },
  changeCenter() {
    this.setData({
      longitude: 113.32452,
      latitude: 23.199994,
    });
  },
  setHeight() {
    this.setData({
      heightStyle: 'height:30px',
    });
  },
  changeMarkers() {
    this.setData({
      markers: [
        {
          id: 10,
          latitude: 30.538285,
          longitude: 104.074074,
          iconPath: '/image/mark_bs.png',
          width: 19,
          height: 31,
        },
      ],
      includePoints: [
        {
          latitude: 30.538285,
          longitude: 104.074074,
        },
      ],
    });
  },
});
