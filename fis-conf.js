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
	domain:"http://7xnpkc.com2.z0.glb.qiniucdn.com"
})
fis.match('*.{css,eot,svg,ttf,woff}',{
	domain:"http://7xnpkc.com2.z0.glb.qiniucdn.com",
	useHash:true
})