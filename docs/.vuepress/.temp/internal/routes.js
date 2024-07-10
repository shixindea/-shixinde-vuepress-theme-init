export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"F:/my-project/vuepress/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Hello VuePress"} }],
  ["/en/", { loader: () => import(/* webpackChunkName: "en_index.html" */"F:/my-project/vuepress/docs/.vuepress/.temp/pages/en/index.html.js"), meta: {"title":"Hello VuePress"} }],
  ["/theme-reco/api%20copy%202.html", { loader: () => import(/* webpackChunkName: "theme-reco_api copy 2.html" */"F:/my-project/vuepress/docs/.vuepress/.temp/pages/theme-reco/api copy 2.html.js"), meta: {"title":"api"} }],
  ["/theme-reco/api%20copy%203.html", { loader: () => import(/* webpackChunkName: "theme-reco_api copy 3.html" */"F:/my-project/vuepress/docs/.vuepress/.temp/pages/theme-reco/api copy 3.html.js"), meta: {"title":"api"} }],
  ["/theme-reco/api%20copy%204.html", { loader: () => import(/* webpackChunkName: "theme-reco_api copy 4.html" */"F:/my-project/vuepress/docs/.vuepress/.temp/pages/theme-reco/api copy 4.html.js"), meta: {"title":"api"} }],
  ["/theme-reco/api%20copy%205.html", { loader: () => import(/* webpackChunkName: "theme-reco_api copy 5.html" */"F:/my-project/vuepress/docs/.vuepress/.temp/pages/theme-reco/api copy 5.html.js"), meta: {"title":"api"} }],
  ["/theme-reco/api%20copy.html", { loader: () => import(/* webpackChunkName: "theme-reco_api copy.html" */"F:/my-project/vuepress/docs/.vuepress/.temp/pages/theme-reco/api copy.html.js"), meta: {"title":"api"} }],
  ["/theme-reco/api.html", { loader: () => import(/* webpackChunkName: "theme-reco_api.html" */"F:/my-project/vuepress/docs/.vuepress/.temp/pages/theme-reco/api.html.js"), meta: {"title":"api"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"F:/my-project/vuepress/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
