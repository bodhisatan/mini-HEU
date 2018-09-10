
Page({
  data: {
    switch1: true
  },
  onChange(event) {
    const detail = event.detail;
    this.setData({
      'switch1': detail.value
    })
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