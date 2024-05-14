import{_ as s,c as n,o as a,Q as l}from"./chunks/framework.2714b541.js";const m=JSON.parse('{"title":"介绍","description":"","frontmatter":{},"headers":[],"relativePath":"sidebar/introduce/index.md","filePath":"sidebar/introduce/index.md","lastUpdated":1715682762000}'),p={name:"sidebar/introduce/index.md"},e=l(`<h1 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h1><p>@gw0420/hooks 是一款开源免费且开箱即用的组件库示例，封装了通用的业务行组件、功能函数 hooks 及常用的工具函数 utils。</p><h2 id="版本" tabindex="-1">版本 <a class="header-anchor" href="#版本" aria-label="Permalink to &quot;版本&quot;">​</a></h2><ul><li>Version: 1.0.49</li><li>@gw0420/hooks 目前还处于开发迭代中。</li></ul><h2 id="主要功能" tabindex="-1">主要功能 <a class="header-anchor" href="#主要功能" aria-label="Permalink to &quot;主要功能&quot;">​</a></h2><ul><li>通用表单组件</li><li>提交表单组件</li><li>多功能表格组件</li><li>5000+图标库选择</li><li>自定义水印</li><li>图片上传</li><li>路由标签组件</li><li>打印</li><li>导入导出</li><li>条形码</li><li>PDF 预览</li><li>...</li></ul><h2 id="目录结构" tabindex="-1">目录结构 <a class="header-anchor" href="#目录结构" aria-label="Permalink to &quot;目录结构&quot;">​</a></h2><div class="language-markdown vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">└─docs</span></span>
<span class="line"><span style="color:#E1E4E8;">├─.vitepress // TODO:文档配置</span></span>
<span class="line"><span style="color:#E1E4E8;">│ ├─cache</span></span>
<span class="line"><span style="color:#E1E4E8;">│ │ └─deps</span></span>
<span class="line"><span style="color:#E1E4E8;">│ └─theme  </span></span>
<span class="line"><span style="color:#E1E4E8;">├─components // TODO: 组件展示 demo</span></span>
<span class="line"><span style="color:#E1E4E8;">│ ├─sunButton</span></span>
<span class="line"><span style="color:#E1E4E8;">│ ├─sunCopyText</span></span>
<span class="line"><span style="color:#E1E4E8;">│ ├─sunDrag</span></span>
<span class="line"><span style="color:#E1E4E8;">│ ├─sunFormatAmount</span></span>
<span class="line"><span style="color:#E1E4E8;">│ ├─sunIcon</span></span>
<span class="line"><span style="color:#E1E4E8;">│ ├─sunJsontoTree</span></span>
<span class="line"><span style="color:#E1E4E8;">│ ├─sunPreviewImg</span></span>
<span class="line"><span style="color:#E1E4E8;">│ ├─sunRandomColor</span></span>
<span class="line"><span style="color:#E1E4E8;">│ ├─sunRandomGradienColor</span></span>
<span class="line"><span style="color:#E1E4E8;">│ ├─sunRotate</span></span>
<span class="line"><span style="color:#E1E4E8;">│ ├─sunRouterTabs</span></span>
<span class="line"><span style="color:#E1E4E8;">│ ├─sunScale</span></span>
<span class="line"><span style="color:#E1E4E8;">│ ├─sunSearchform</span></span>
<span class="line"><span style="color:#E1E4E8;">│ ├─sunSpecialButton</span></span>
<span class="line"><span style="color:#E1E4E8;">│ ├─sunTabs</span></span>
<span class="line"><span style="color:#E1E4E8;">│ └─sunWaterMark</span></span>
<span class="line"><span style="color:#E1E4E8;">├─public // TODO: 静态资源</span></span>
<span class="line"><span style="color:#E1E4E8;">└─sidebar // TODO: 文档菜单</span></span>
<span class="line"><span style="color:#E1E4E8;">├─hooks</span></span>
<span class="line"><span style="color:#E1E4E8;">├─introduce</span></span>
<span class="line"><span style="color:#E1E4E8;">├─ui</span></span>
<span class="line"><span style="color:#E1E4E8;">└─util</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">└─docs</span></span>
<span class="line"><span style="color:#24292E;">├─.vitepress // TODO:文档配置</span></span>
<span class="line"><span style="color:#24292E;">│ ├─cache</span></span>
<span class="line"><span style="color:#24292E;">│ │ └─deps</span></span>
<span class="line"><span style="color:#24292E;">│ └─theme  </span></span>
<span class="line"><span style="color:#24292E;">├─components // TODO: 组件展示 demo</span></span>
<span class="line"><span style="color:#24292E;">│ ├─sunButton</span></span>
<span class="line"><span style="color:#24292E;">│ ├─sunCopyText</span></span>
<span class="line"><span style="color:#24292E;">│ ├─sunDrag</span></span>
<span class="line"><span style="color:#24292E;">│ ├─sunFormatAmount</span></span>
<span class="line"><span style="color:#24292E;">│ ├─sunIcon</span></span>
<span class="line"><span style="color:#24292E;">│ ├─sunJsontoTree</span></span>
<span class="line"><span style="color:#24292E;">│ ├─sunPreviewImg</span></span>
<span class="line"><span style="color:#24292E;">│ ├─sunRandomColor</span></span>
<span class="line"><span style="color:#24292E;">│ ├─sunRandomGradienColor</span></span>
<span class="line"><span style="color:#24292E;">│ ├─sunRotate</span></span>
<span class="line"><span style="color:#24292E;">│ ├─sunRouterTabs</span></span>
<span class="line"><span style="color:#24292E;">│ ├─sunScale</span></span>
<span class="line"><span style="color:#24292E;">│ ├─sunSearchform</span></span>
<span class="line"><span style="color:#24292E;">│ ├─sunSpecialButton</span></span>
<span class="line"><span style="color:#24292E;">│ ├─sunTabs</span></span>
<span class="line"><span style="color:#24292E;">│ └─sunWaterMark</span></span>
<span class="line"><span style="color:#24292E;">├─public // TODO: 静态资源</span></span>
<span class="line"><span style="color:#24292E;">└─sidebar // TODO: 文档菜单</span></span>
<span class="line"><span style="color:#24292E;">├─hooks</span></span>
<span class="line"><span style="color:#24292E;">├─introduce</span></span>
<span class="line"><span style="color:#24292E;">├─ui</span></span>
<span class="line"><span style="color:#24292E;">└─util</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div>`,8),o=[e];function c(r,i,t,E,u,b){return a(),n("div",null,o)}const y=s(p,[["render",c]]);export{m as __pageData,y as default};
