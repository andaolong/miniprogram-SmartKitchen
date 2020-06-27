// pages/2_recipeRecommend/2_recipeRecommend.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		food:
		 [
			{
				foodName: "炸鸡腿",
				foodDetailPath: "../../images/recipe_ji.jpg",
			},
			{
				foodName: "清炒小芹菜",
				foodDetailPath: "../../images/recipe_qin.jpg",
			},
			{
				foodName: "韭菜鸡蛋饺子",
				foodDetailPath: "../../images/recipe_jiu.jpg",
			},
			{
				foodName: "油炸花生米",
				foodDetailPath: "../../images/recipe_mi.jpg",
			}
		]
	},
	// 增添函数
	clickToLookFoodDetail: function () {
		// 点击按钮打开食品详情时将食品详情的路径也传过去
		// 目前路径是本地路径，后续改成从服务器上下载后的临时路径
		var foodDetailPathTransfer = JSON.stringify(this.foodDetailPath);

		wx.navigateTo({
		  url: '../2-1_recipeDetail/2-1_recipeDetail?foodDetailPathTransfer='+ foodDetailPathTransfer
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