fis.match('*.png', {
  optimizer: fis.plugin('png-compressor')
});
// fis.match('*.{png,js,css,eot,svg,ttf,woff}', {
//   release: '/static/$0',
//   // domain:"http://res.lja.so",
//   // url:"/hel$0"
// });
fis.match('all.js',{
	useHash:true
})
fis.match('*.{css,eot,svg,ttf,woff}',{
	useHash:true
})