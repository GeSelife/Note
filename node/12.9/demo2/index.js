let {creatFile,removeFile,createDeepDir,rmDeepDir} = require('./fsRandom');
//创建
// creatFile(100,'./p');
//移动归类
// removeFile('./p');
//深度创建
// createDeepDir('static/js/a');
// createDeepDir('p/static/js/a/a.txt');
//深度删除
rmDeepDir('p/css')