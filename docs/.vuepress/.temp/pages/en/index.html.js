import comp from "F:/my-project/vuepress/docs/.vuepress/.temp/pages/en/index.html.vue"
const data = JSON.parse("{\"path\":\"/en/\",\"title\":\"Hello VuePress\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Hello VuePress\",\"slug\":\"hello-vuepress-1\",\"link\":\"#hello-vuepress-1\",\"children\":[{\"level\":3,\"title\":\"Hello VuePress\",\"slug\":\"hello-vuepress-2\",\"link\":\"#hello-vuepress-2\",\"children\":[]}]}],\"git\":{},\"filePathRelative\":\"en/README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
