// pages/home/home.js
// getApp() 获取App()产生的示例对象
// const app = new getApp()
// console.log(app.globalData.name)
// console.log(app.globalData.age)

// 注册一个页面
// 页面也有自己的生命周期
Page({
  // ---------------------2.初始化一些数据-------------------------
  data: {
    message: '哈哈哈'
  },
  
  // ---------------------1.监听页面的生命周期函数-------------------------
  // 监听页面的生命周期
  // onLoad: function() {

  // },
  // es6对象的增强写法
  // 页面被加载时
  onLoad () {
    console.log('onload')
    wx.request({
      url: 'http://123.207.32.32:8000/recommend',
      success: (res) => {
        console.log(res)
      }
    })
  },

  // ---------------------3.监听wxhml中相关的事件-------------------------
  handleGetUserInfo(event) {
    console.log(event)
  },

  // ---------------------3.监听wxhml中相关的事件-------------------------
  // 监听页面的滚动
  onPageScroll (obj) {
    console.log(obj)
  },
  // 监听页面滚动到底部
  onReachBottom () {
    console.log('页面滚动到底部')
  },
  // 下拉刷新
  onPullDownRefresh () {
    console.log('页面下拉刷新')
  },
  // 当前是tab页面时,点击tab触发
  onTabItemTap () {
    console.log('点击了tab')
  },

  // 页面显示出来时
  onShow() {
    console.log('onShow')
  },
  // 页面初次渲染完成时
  onReady () {
    console.log('onReady')
  },
  // 页面隐藏时
  onHide () {
    console.log('onHide')
  },
  onUnload () {
    console.log('onUnload')
  }
})