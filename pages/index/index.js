var bmap = require('../../utils/bmap-wx.min.js');

Page({
  data: {
    weather_switch: true,
    ak: "qO4MVi03XG1TfNtvDZOCdVozPkynjAt3",
    weatherData: '',
    futureWeather: [],
    picUrl1: "../../images/loading.gif",
    picUrl2: "../../images/loading.gif"
  },

  onLoad: function (options) {
    var that = this;
    // 新建bmap对象 
    var BMap = new bmap.BMapWX({
      ak: that.data.ak
    });
    var fail = function (data) {
      console.log(data);
    };
    var success = function (data) {
      console.log(data);

      var weatherData = data.currentWeather[0];
      var futureWeather = data.originalData.results[0].weather_data;
      var url1 = data.originalData.results[0].weather_data[0].dayPictureUrl;
      var url2 = data.originalData.results[0].weather_data[0].nightPictureUrl;

      console.log(futureWeather);
      weatherData = '城市：' + weatherData.currentCity + '\n' + 'PM2.5：' + weatherData.pm25 + '\n' + '日期：' + weatherData.date + '\n' + '温度：' + weatherData.temperature + '\n' + '天气：' + weatherData.weatherDesc + '\n' + '风力：' + weatherData.wind + '\n';

      that.setData({
        weatherData: weatherData,
        futureWeather: futureWeather,
        picUrl1: url1,
        picUrl2: url2
      });
    }

    // 发起weather请求 
    BMap.weather({
      fail: fail,
      success: success
    });
  },

  onChange(event) {
    const detail = event.detail;
    this.setData({
      'weather_switch': detail.value
    });
  },
  
  openDoor: function() {
    wx.navigateTo({
      url: '/pages/door/door'
    })
  },

  openScoreCalc: function() {
    wx.navigateTo({
      url: '/pages/scoreCalc/scoreCalc'
    })
  },

  openTable: function() {
    wx.navigateTo({
      url: '/pages/table/table'
    })
  },

  openExperiment: function() {
    wx.navigateTo({
      url: '/pages/experiment/experiment'
    })
  },

  openBookSearch: function() {
    wx.navigateTo({
      url: '/pages/bookSearch/bookSearch'
    })
  },

  openExpress: function() {
    wx.navigateTo({
      url: '/pages/express/express'
    })
  },

  openFeedback: function() {
    wx.navigateTo({
      url: '/pages/feedback/feedback'
    })
  },

  openSupport: function() {
    wx.navigateTo({
      url: '/pages/support/support'
    })
  },

  openAbout: function() {
    wx.navigateTo({
      url: '/pages/about/about'
    })
  }
})