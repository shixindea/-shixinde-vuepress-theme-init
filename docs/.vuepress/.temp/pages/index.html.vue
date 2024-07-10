<template><div><h1 id="hello-vuepress" tabindex="-1"><a class="header-anchor" href="#hello-vuepress"><span>Hello VuePress</span></a></h1>
<h2 id="hello-vuepress-1" tabindex="-1"><a class="header-anchor" href="#hello-vuepress-1"><span>Hello VuePress</span></a></h2>
<h5 id="hello-vuepress-2" tabindex="-1"><a class="header-anchor" href="#hello-vuepress-2"><span>Hello VuePress</span></a></h5>
<h3 id="hello-vuepress-3" tabindex="-1"><a class="header-anchor" href="#hello-vuepress-3"><span>Hello VuePress</span></a></h3>
<h2 id="hello-vuepress-4" tabindex="-1"><a class="header-anchor" href="#hello-vuepress-4"><span>Hello VuePress</span></a></h2>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title=".vuepress/config.ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 复制</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">const</span> <span class="token function-variable function">copy</span><span class="token operator">:</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">boolean</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 邮箱校验</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">const</span> <span class="token function-variable function">emailCheck</span><span class="token operator">:</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">boolean</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 身份证校验</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">const</span> <span class="token function-variable function">idCardCheck</span><span class="token operator">:</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">boolean</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 类型判断字符是不是  空对象</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token parameter">value</span></span>
<span class="line"> * <span class="token keyword">@returns</span></span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">isNullObject</span><span class="token punctuation">(</span>value<span class="token operator">:</span> Object<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 类型判断字符是不是纯数值</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token parameter">value</span></span>
<span class="line"> * <span class="token keyword">@returns</span></span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">isNumber</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 手机号校验</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">const</span> <span class="token function-variable function">mobileCheck</span><span class="token operator">:</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">boolean</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


