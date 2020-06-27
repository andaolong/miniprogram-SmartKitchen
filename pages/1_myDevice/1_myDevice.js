// pages/1_myDevice/1_myDevice.js
Page({
	/**
	 * 页面的初始数据
	 */
	data: {

	},
	// 增添函数
	clickMyRefrigeratorButton: function () {
		wx.navigateTo({
			url: '../1-1_myRefrigerator/1-1_myRefrigerator'
		})
	},
	clickMyPotButton: function () {
		wx.navigateTo({
			url: '../1-2_myPot/1-2_myPot'
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