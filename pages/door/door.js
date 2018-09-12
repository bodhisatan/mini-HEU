// pages/door/door.js
var inputs = {}

Page({
  data: {
    inputs: {}
  },

  inputChange: function (e) {
    inputs[e.currentTarget.id] = e.detail.value
  },

  formSubmit: function () {
    var page = this
    if (inputs['username'] == null || inputs['username'] == '') {
      page.showModal('请输入学号')
      return
    }
    if (inputs['password'] == null || inputs['password'] == '') {
      page.showModal('请输入密码')
      return
    }
    wx.setStorageSync('username', inputs['username'])
    wx.setStorageSync('password', inputs['password'])
  },

  formReset: function () {
    inputs = {}
    wx.setStorageSync('username', '')
    wx.setStorageSync('password', '')
  },

  onLoad: function () {
    // 调用应用实例的方法获取全局数据
    var that = this
    inputs['username'] = wx.getStorageSync('username')
    inputs['password'] = wx.getStorageSync('password') // 这里没有加密安全性较低
    this.setData({
      inputs: inputs
    })
  },

  switchChange: function (e) {
    inputs[e.currentTarget.id] = e.detail.value
  },

  tapnav: function () {
    wx.navigateTo({
      url: '/pages/door/door_introduce'
    })
  }
})