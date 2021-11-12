import marked from "marked";
import hljs from "highlight.js";
import 'highlight.js/scss/atom-one-dark.scss';

function farmatDate (date) {
  date = new Date(date)
  let year = date.getFullYear(),
      month = date.getMonth() + 1,
      day = date.getDate()
  return `${year}-${month}-${day}`
}

function markdown_it (content) {
  let count = 0;
  const headstemp = [],
        paragraphs = []

  // marked设置
  const rendererMD = new marked.Renderer();

  // 调整标题内容
  rendererMD.heading = (text, level) => {
    headstemp.push({ text, level });
    count++
    return `<h${level} id="heading-${count}"><span class="h-text">${text}</span></h${level}>`;;
  };

  rendererMD.paragraph = (text) => {
    paragraphs.push({ text })
    return `<p>${text}</p>`
  }

  // 设置图片内容，统一显示一张缓存图，用于懒加载~
  rendererMD.image = (href, _, text) =>
    `<img data-src="${href}" src="/cos/2020/1211175603.png" alt="${text}" >`;

  marked.setOptions({
    highlight(code) {
      return hljs.highlightAuto(code).value
    },
    renderer: rendererMD
  });
  // 这里的html就是插入到页面的元素文本了
  const html = marked(content);

  let res = {
    html,
    headstemp,
    paragraphs
  }
  return res
}
export {
  farmatDate,
  markdown_it
}