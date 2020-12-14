//获取文件类型
function getMime(fileName) {
    let reg = /\.[a-z]{2,}$/;
    //判断文件类型是否符合正则
    if(!reg.test(fileName)){
        return '文件名错误';
    }
    //获取文件后缀
    let extname = RegExp.$1;
    let mime = 'text/html';
    switch (extname) {
        case 'html':
            mime = 'text/html';
            break;
        case 'js':
            mime = 'application/javascript';
            break;
        case 'css':
            mime = 'text/css';
            break;
        case 'png':
            mime = 'image/png';
            break;
        default:
            mime = 'text/html';
    }
    return mime;
}

exports.getMime = getMime;