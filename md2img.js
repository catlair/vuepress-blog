const fs = require('fs');
const path = require('path');

const imgReg = /!\[([\u4e00-\u9fa5\w-]+)]\((?:\.\/)?([\u4e00-\u9fa5\w-]+\.[jpeg|png|gif|jpg]+)(?:\s+['|"]([\u4e00-\u9fa5\w-]+)['|"])?\)/g;

const resolve = (...paths) => {
  return path.resolve(...paths);
};

const isDir = (path) => {
  return fs.statSync(path).isDirectory();
};

const rootPath = resolve(__dirname, 'blog');

const firstDir = fs.readdirSync(rootPath);

let dirArr = [];

//用来获取所有文件
for (const dir of firstDir) {
  const thisPath = resolve(rootPath, dir);
  if (isDir(thisPath)) {
    let subdir = fs.readdirSync(thisPath).map((el) => {
      return resolve(thisPath, el);
    });
    dirArr.push(subdir);
  }
}

dirArr = dirArr.forEach((el) => {
  el.forEach((subel) => {
    //处理md文件
    if (subel.match(/.md$/)) {
      let page = fs.readFileSync(subel).toString();
      const pageMatchAll = page.matchAll(imgReg);

      const thisPath = subel
        .split('\\')
        .pop(-1)
        .split('.')[0];

      for (const match of pageMatchAll) {
        // const img = `<img src="./${thisPath}/${match[2]}" alt="${match[1] ||
        //   ''}" title="${match[3] || ''}" />`;

        const img = `![${match[1]}](./${thisPath}/${match[2]} ${
          match[3] ? '"' + match[3] + '"' : ''
        })`;

        console.log(match[0], '--->', img);

        page = page.replace(match[0], img);
      }

      fs.writeFileSync(subel, page);
    }
  });
});
