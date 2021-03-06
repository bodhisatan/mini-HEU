var app = getApp()
var Util = require('../../utils/util.js');
Page({
  data: {
    motto: '欢迎使用mini-HEU！',

    expressList: [],

    tabbar: {}
  },

  onLoad: function () {
    app.editTabBar();
    wx.showLoading({
      title: '加载中',
    })
  },

  onShow: function () {
    setTimeout(function () {
      wx.hideLoading()
    }, 100);
    this.setData({
      expressList: []
    })
    this.showMyExpress();
  },

  showMyExpress: function () {
    var self = this;
    try {
      let list = wx.getStorageSync('historySearchList')
      if (list.length > 0) {
        for (let i = 0; i < list.length; i++) {
          wx.getStorage({
            key: list[i].order,
            success: function (res) {
              let resobj = res.data;
              resobj.order = list[i].order;
              resobj.name = list[i].name;
              resobj.code = list[i].code;
              resobj.logosrc = Util.mapLogo(list[i].code);
              let l = self.data.expressList.slice(0);
              l.push(resobj);
              self.setData({
                expressList: l
              })
            }
          })
        }
      }
    } catch (e) {
      console.warn(e)
    }
  },

  showDetail: function (event) {
    wx.navigateTo({
      url: '../detail/detail?LogisticCode=' + event.currentTarget.dataset.order + '&ShipperCode=' + event.currentTarget.dataset.code + '&ShipperName=' + event.currentTarget.dataset.name
    })
  },

})