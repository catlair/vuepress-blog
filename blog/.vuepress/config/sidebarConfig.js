const fs = require('fs');
const path = require('path');

//需要得到这样的对象
// {
//   '/css/': ['CSS-第一节-引入方式', 'CSS-第二节-基础选择器'],
// },

const rootDir = 'blog';

const rootDirPath = path.resolve(process.cwd(), `./${rootDir}/note/`);

//获取到的是md文件所在目录名

const blogDir = getDirArr(rootDirPath, 'dir');

// const noteIndex = blogDir.indexOf('note');

// blogDir.splice(noteIndex, 1);

let sidebarConfig = {};

blogDir.forEach((dirPath) => {
  //文件数组
  let dirArr = getDirArr(path.resolve(rootDirPath, dirPath), 'file');

  dirArr = sortArr(dirArr);

  Object.defineProperty(sidebarConfig, `/note/${dirPath}/`, {
    value: getBasenameArr(dirArr),
    enumerable: true,
  });
});

/**
 *
 * @param {String} path_ 路径
 * @param {String} type_ 获取类型 all | file | dir
 * @returns {Array} 过滤后的数组
 */
function getDirArr(path_, type_) {
  return fs.readdirSync(path_).filter((el) => {
    //过滤掉.开头的
    if (el.match(/^\./)) {
      return false;
    }

    //获取到除.开头的所有文件或文件夹名
    const all = fs.statSync(path.resolve(path_, el));

    //根据参数返回值
    if (type_ === 'dir') {
      return all.isDirectory();
    } else if (type_ === 'file') {
      return all.isFile();
    } else {
      return all;
    }
  });
}

/**
 *
 * @param {Array<string>} arr
 * @param {String} ext
 */
function getBasenameArr(arr, ext) {
  return arr.map((el) => {
    return path.basename(el, ext);
  });
}

//自己的排序
function sortArr(arr) {
  return arr.sort((i, j) => {
    i = Number(i.split('-')[0]);
    j = Number(j.split('-')[0]);
    if (Number.isNaN(i) && !Number.isNaN(j)) {
      return 1;
    }
    return i > j ? 1 : -1;
  });
}

module.exports = sidebarConfig;
