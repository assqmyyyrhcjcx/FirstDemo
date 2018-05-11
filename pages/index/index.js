//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../../static/lunbo/1526020130220.jpg',
      '../../static/lunbo/1526020198869.jpg',
      '../../static/lunbo/1526020238433.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    icons: [
      { icon: '../../static/images/生活用品.png', name: "生活用品"},
      { icon: '../../static/images/分类-服饰鞋包.png', name: "服饰鞋包"},
      { icon:"../../static/images/进口生鲜美食.png", name: "生鲜美食"},
      { icon: "../../static/images/首饰.png", name: "珠宝首饰"}
    ],
    activityItem: [
      "../../static/images/5aed5037Nb622cda1.jpg",
      "../../static/images/5af10fe5N4a50337c.jpg",
      "../../static/images/5aefedf3Nd95c2dee.jpg",
      "../../static/images/5af10fe5N4a50337c.jpg"
    ]
  },

  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
