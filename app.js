//app.js
App({
  // 生命周期函数:后台存货2个小时
  // 小程序初始化完成时会执行的生命周期函数
  onLaunch: function (options) {
    console.log('初始化完成了')
    console.log(options)
    // wx.getUserInfo({
      // 数据拿到之后再回调
    //   success: function(res) {
    //     console.log(res)
    //   }
    // })
    // setTimeout(function() {
    //   const err = new Error()
    //   throw err
    // })
  },
  // 小程序界面显示出来的时候会执行的生命周期函数
  onShow: function (options) {
    // 1.判断小程序的进入场景
    console.log(options)
    switch(options.scene) {
      case 1001:
        break
      case 1005:
        break
    }
    
    // 2.获取用户信息,并且获取用户信息之后,将用户的信息传递给服务器
    wx.getUserInfo({
      success: function(res) {
        console.log(res)
      }
    })
  },
  onHide: function () {
    console.log('界面被隐藏了')
  },
  onError: function () {
    console.log('小程序发生错误时')
  },
  globalData: {
    name: 'coderwxy',
    age: 18
  }
})
