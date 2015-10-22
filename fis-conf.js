fis.match('*.png', {
  optimizer: fis.plugin('png-compressor')
});
// fis.match('*.{png,js,css,eot,svg,ttf,woff}', {
//   release: '/static/$0',
//   // domain:"http://res.lja.so",
//   // url:"/hel$0"
// });
fis.match('all.js',{
	useHash:true,
	domain:"http://res.wx.idrv.com.cn"
})
fis.match('*.{css,eot,svg,ttf,woff}',{
	domain:"http://res.wx.idrv.com.cn",
	useHash:true
})