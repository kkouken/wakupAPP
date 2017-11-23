const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['最近三天','最近五天'],
    objectArray: [
      {
        id: 0,
        name: '最近三天'
      },
      {
        id: 1,
        name: '最近五天'
      }
    ],
    index: 0,
    showUserinfo: true,
    showPrivacy: true,
    showEarlierBtn: true,
    showEarlierTimeLine: false,
    showFoldBtn: false
  },

  goSetSign: function (e){
    console.log("你点击了签名")
    wx.navigateTo({
      url: '../settingSign/settingSign',
    })
  },

  bindShowEarlier: function (){
    const me = this
    me.setData({
      showEarlierBtn: false,
      showPrivacy: false,
      showEarlierTimeLine: true,
      showFoldBtn: true
    })
  },

  bindFold: function(){
    const me = this
    me.setData({
      showEarlierBtn: true,
      showPrivacy: true,
      showEarlierTimeLine: false,
      showFoldBtn: false
    })
  },

  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },

  switch1Change: function (e) {
    console.log('switch1 发生 change 事件，携带值为', e.detail.value)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})