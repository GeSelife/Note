let fs = require('fs');
//创建随机条数的随机后缀的文件
function creatFile(num,filename) {
    let arr=['txt','js','css','html','php','json','doc','xlsx','ppt'];
    let src = '';
    for(let i=0;i<num;i++){
        let rand = Math.floor(Math.random()*i)+1;
        let index= Math.floor(Math.random()*arr.length);
        src = rand + "."+arr[index];
        fs.writeFileSync(filename+'/'+src,src);
    }
}

//整理文件
//  mkdir rmdir exitsSync判断目录是否存在   renameSync--重命名/移动文件
//读目录文件  有内容---读文件后缀 -- 判断后缀对应的目录是否存在 --- 不存在创建目录 将文件移入对应的目录中
function removeFile(fileName){
    let arr=fs.readdirSync(fileName);
    //读文件目录下的文件
    if(arr.length>0){
        arr.forEach(ele=>{
            //后缀名正则
            let reg = /\.[a-z]{2,}$/;
            //获取到文件后缀---.XXX
            let name = ele.match(reg);
            // 截取.后面的内容
            let nameFile = name[0].slice(1);
            //判断后缀对应的目录是否存在---不存在就创建
            !fs.existsSync(fileName+'/'+nameFile) && fs.mkdirSync(fileName+'/'+nameFile);
            //目录存在 将文件移入对应名字的文件夹内
            fs.renameSync(fileName+'/'+ele,fileName+'/'+nameFile+'/'+ele);
        })
    }else{
        return '文件目录下为空';
    }
}

//创建深层次目录
function createDeepDir(fileName){
    let path = fileName.split('/');
    let pathNow='';
    //for循环可以添加流程控制  forEach不能写流程控制
    for(let i=0;i<path.length;i++){
        let reg = /\.[a-z]{2,}$/;
        if(!reg.test(path[i])){
            if(i!==path.length-1){
                pathNow+=path[i]+'/';
                !fs.existsSync(pathNow) && fs.mkdirSync(pathNow)
            }else{
                pathNow+=path[i];
                !fs.existsSync(pathNow) && fs.mkdirSync(pathNow)
            }
        }else{
            fs.writeFileSync(pathNow+path[i],'123');
        }
    }
}

//删除深层次目录
function rmDeepDir(dirname){

    if(!fs.existsSync(dirname)){
        return "目录或文件不存在"
    }
    let fsStatus = fs.statSync(dirname);
    if(!fsStatus.isDirectory()){
        return dirname + "不是一个目录"
    }

    let files = fs.readdirSync(dirname);
    if(files.length){
        for(let i = 0,len=files.length;i<len;i++){
            let cfile = files[i];
            let p = dirname+'/'+cfile
            let cFileStatus = fs.statSync(p);
            if(cFileStatus.isFile()){
                fs.unlinkSync(p);
            }else{
                rmDeepDir(p)
            }
        }
    }
    fs.rmdirSync(dirname);

}

module.exports={
    creatFile,
    removeFile,
    createDeepDir,
    rmDeepDir
}