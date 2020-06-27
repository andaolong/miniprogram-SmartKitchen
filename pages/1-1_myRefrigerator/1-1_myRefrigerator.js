// pages/1-1_myRefrigerator/1-1_myRefrigerator.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		foodNumber: 8,
		food:
		 [
			{
				foodName: "鸡腿",
				foodDetail:"6个"
			},
			{
				foodName: "小芹菜",
				foodDetail:"3把"
			},
			{
				foodName: "虾仁",
				foodDetail:"300g"
			},
			{
				foodName: "韭菜",
				foodDetail:"500g"
			},
			{
				foodName: "鸡蛋",
				foodDetail:"12个"
			},
			{
				foodName: "干花生米",
				foodDetail:"600g"
			},
			{
				foodName: "小白菜",
				foodDetail:"700g"
			},
			{
				foodName: "猪肉",
				foodDetail:"600g"
			},
			{
				foodName: "生菜",
				foodDetail:"700g"
			},
			{
				foodName: "玉米粒",
				foodDetail:"600g"
			}
		]
	},
	// 增添函数
	//注意一个问题：当一个页面中已经用了某一个跳转链接的话那么就不能再在其他的按钮或者点击事件上绑定这个跳转链接了
	//我这里因为tabBar已经绑定了那个跳转到recipeRecommend页面，所以这页的按钮就不能通过wx.navigateTo()函数跳转了，可以用wx.switchTab
	clickGenerateRecommendationMenuButton: function () {
		wx.switchTab({
		  url: '../2_recipeRecommend/2_recipeRecommend',
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