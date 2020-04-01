Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: '你好小程序',
    firstname: 'rull',
    lastname: 'westbroke',
    age: 12,
    nowTime: new Date().toLocaleString(),
    isActive: false
  },
  onLoad() {
    setInterval(() => {
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    }, 1000)
  },
  handleSwitchColor() {
    this.setData({
      isActive: !this.data.isActive
    })
  }
})