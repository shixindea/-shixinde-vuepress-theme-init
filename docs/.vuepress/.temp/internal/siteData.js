export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"zh-CN\",\"title\":\"Guoguo-utils\",\"description\":\"袁果锅开发工具类\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/favicon.ico\"}]],\"locales\":{\"/\":{\"selectLanguageName\":\"简体中文\",\"title\":\"Guoguo-utils\",\"description\":\"繁星似海 熠熠生辉\"},\"/en/\":{\"selectLanguageName\":\"English\",\"title\":\"Guoguo-utils\",\"description\":\"my book\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
