(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[94],{9618:function(e,t,r){var n={"./AuthorLayout":4856,"./AuthorLayout.js":4856,"./ListLayout":6055,"./ListLayout.js":6055,"./PostLayout":5067,"./PostLayout.js":5067,"./PostSimple":550,"./PostSimple.js":550};function a(e){var t=i(e);return r(t)}function i(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=i,e.exports=a,a.id=9618},6082:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[...slug]",function(){return r(4172)}])},4094:function(e,t,r){"use strict";var n=r(7320),a=r(8100),i=r(7233);t.Z=function(e){var t=e.title,r=e.description,l=e.imgSrc,o=e.href;return(0,n.tZ)("div",{className:"md p-4 md:w-1/2",style:{maxWidth:"544px"},children:(0,n.BX)("div",{className:"".concat(l&&"h-full","  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700"),children:[l&&(o?(0,n.tZ)(i.Z,{href:o,"aria-label":"Link to ".concat(t),children:(0,n.tZ)(a.Z,{alt:t,src:l,className:"object-cover object-center md:h-36 lg:h-48",width:544,height:306})}):(0,n.tZ)(a.Z,{alt:t,src:l,className:"object-cover object-center md:h-36 lg:h-48",width:544,height:306})),(0,n.BX)("div",{className:"p-6",children:[(0,n.tZ)("h2",{className:"mb-3 text-2xl font-bold leading-8 tracking-tight",children:o?(0,n.tZ)(i.Z,{href:o,"aria-label":"Link to ".concat(t),children:t}):t}),(0,n.tZ)("p",{className:"prose mb-3 max-w-none text-gray-500 dark:text-gray-400",children:r}),o&&(0,n.tZ)(i.Z,{href:o,className:"text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400","aria-label":"Link to ".concat(t),children:"Learn more \u2192"})]})]})})}},8100:function(e,t,r){"use strict";var n=r(7320);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}t.Z=function(e){var t=i({},e);return(0,n.tZ)("img",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},t))}},920:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(7320);function a(e){var t=e.children;return(0,n.tZ)("h1",{className:"text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14",children:t})}},9831:function(e,t,r){"use strict";r.d(t,{TQ:function(){return s},$t:function(){return d},Uy:function(){return u}});var n=r(7320),a=r(9008),i=r(1163),l=r(1576),o=r.n(l),c=function(e){var t=e.title,r=e.description,l=e.ogType,c=e.ogImage,s=e.twImage,d=e.canonicalUrl,u=(0,i.useRouter)();return(0,n.BX)(a.default,{children:[(0,n.tZ)("title",{children:t}),(0,n.tZ)("meta",{name:"robots",content:"follow, index"}),(0,n.tZ)("meta",{name:"description",content:r}),(0,n.tZ)("meta",{property:"og:url",content:"".concat(o().siteUrl).concat(u.asPath)}),(0,n.tZ)("meta",{property:"og:type",content:l}),(0,n.tZ)("meta",{property:"og:site_name",content:o().title}),(0,n.tZ)("meta",{property:"og:description",content:r}),(0,n.tZ)("meta",{property:"og:title",content:t}),"Array"===c.constructor.name?c.map((function(e){var t=e.url;return(0,n.tZ)("meta",{property:"og:image",content:t},t)})):(0,n.tZ)("meta",{property:"og:image",content:c},c),(0,n.tZ)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.tZ)("meta",{name:"twitter:site",content:o().twitter}),(0,n.tZ)("meta",{name:"twitter:title",content:t}),(0,n.tZ)("meta",{name:"twitter:description",content:r}),(0,n.tZ)("meta",{name:"twitter:image",content:s}),(0,n.tZ)("link",{rel:"canonical",href:d||"".concat(o().siteUrl).concat(u.asPath)})]})},s=function(e){var t=e.title,r=e.description,a=o().siteUrl+o().socialBanner,i=o().siteUrl+o().socialBanner;return(0,n.tZ)(c,{title:t,description:r,ogType:"website",ogImage:a,twImage:i})},d=function(e){var t=e.title,r=e.description,l=o().siteUrl+o().socialBanner,s=o().siteUrl+o().socialBanner,d=(0,i.useRouter)();return(0,n.BX)(n.HY,{children:[(0,n.tZ)(c,{title:t,description:r,ogType:"website",ogImage:l,twImage:s}),(0,n.tZ)(a.default,{children:(0,n.tZ)("link",{rel:"alternate",type:"application/rss+xml",title:"".concat(r," - RSS feed"),href:"".concat(o().siteUrl).concat(d.asPath,"/feed.xml")})})]})},u=function(e){var t=e.authorDetails,r=e.title,l=e.summary,s=e.date,d=e.lastmod,u=e.url,m=e.images,h=void 0===m?[]:m,p=e.canonicalUrl,f=((0,i.useRouter)(),new Date(s).toISOString()),g=new Date(d||s).toISOString(),y=(0===h.length?[o().socialBanner]:"string"===typeof h?[h]:h).map((function(e){return{"@type":"ImageObject",url:"".concat(o().siteUrl).concat(e)}})),b={"@context":"https://schema.org","@type":"Article",mainEntityOfPage:{"@type":"WebPage","@id":u},headline:r,image:y,datePublished:f,dateModified:g,author:t?t.map((function(e){return{"@type":"Person",name:e.name}})):{"@type":"Person",name:o().author},publisher:{"@type":"Organization",name:o().author,logo:{"@type":"ImageObject",url:"".concat(o().siteUrl).concat(o().siteLogo)}},description:l},v=y[0].url;return(0,n.BX)(n.HY,{children:[(0,n.tZ)(c,{title:r,description:l,ogType:"article",ogImage:y,twImage:v,canonicalUrl:p}),(0,n.BX)(a.default,{children:[s&&(0,n.tZ)("meta",{property:"article:published_time",content:f}),d&&(0,n.tZ)("meta",{property:"article:modified_time",content:g}),(0,n.tZ)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(b,null,2)}})]})]})}},7175:function(e,t,r){"use strict";var n=r(7320),a=r(1576),i=r.n(a),l=r(1720),o=r(523),c=r.n(o);t.Z=function(){var e=(0,l.useState)(!1),t=e[0],r=e[1];(0,l.useEffect)((function(){c().polyfill();var e=function(){window.scrollY>50?r(!0):r(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]);return(0,n.BX)("div",{className:"fixed right-8 bottom-8 hidden flex-col gap-3 ".concat(t?"md:flex":"md:hidden"),children:[i().comment.provider&&(0,n.tZ)("button",{"aria-label":"Scroll To Comment",type:"button",onClick:function(){document.getElementById("comment").scrollIntoView()},className:"rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600",children:(0,n.tZ)("svg",{className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:(0,n.tZ)("path",{fillRule:"evenodd",d:"M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z",clipRule:"evenodd"})})}),(0,n.tZ)("button",{"aria-label":"Scroll To Top",type:"button",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},className:"rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600",children:(0,n.tZ)("svg",{className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:(0,n.tZ)("path",{fillRule:"evenodd",d:"M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z",clipRule:"evenodd"})})})]})}},9019:function(e,t,r){"use strict";var n=r(7320),a=r(1664),i=r(4871);t.Z=function(e){var t=e.text;return(0,n.tZ)(a.default,{href:"/tags/".concat((0,i.Z)(t)),children:(0,n.tZ)("a",{className:"mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:t.split(" ").join("-")})})}},4856:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o}});var n=r(7320),a=r(2557),i=r(8100),l=r(9831);r(4094);function o(e){var t=e.children,r=e.frontMatter,o=r.name,c=(r.avatar,r.occupation),s=r.company,d=r.email,u=r.twitter,m=r.linkedin,h=r.github;return(0,n.BX)(n.HY,{children:[(0,n.tZ)(l.TQ,{title:"About - ".concat(o),description:"About me - ".concat(o)}),(0,n.BX)("div",{className:"",children:[(0,n.tZ)("div",{className:"space-y-2 pt-6 pb-4 md:space-y-5",children:(0,n.tZ)("h1",{className:"mb-1 text-3xl font-bold tracking-tight text-zinc-800 dark:text-white md:text-5xl",children:"About"})}),(0,n.tZ)("div",{className:"items-start",children:(0,n.BX)("div",{className:"darK:bg-slate-100 flex flex-col items-center rounded-lg bg-slate-700 bg-opacity-10 p-2 text-center md:flex-row",children:[(0,n.tZ)("div",{children:(0,n.tZ)(i.Z,{src:"/static/images/avatar.jpg",alt:"avatar",width:"150px",height:"150px",className:"rounded-full"})}),(0,n.tZ)("h3",{className:"py-2 text-2xl font-bold leading-8 tracking-tight",children:o}),(0,n.tZ)("div",{className:"text-gray-500 dark:text-gray-400",children:c}),(0,n.tZ)("div",{className:"text-gray-500 dark:text-gray-400",children:s}),(0,n.BX)("div",{className:"flex space-x-3 py-6 px-4 md:py-0 md:px-6",children:[(0,n.tZ)(a.Z,{kind:"mail",href:"mailto:".concat(d),size:5}),(0,n.tZ)(a.Z,{kind:"github",href:h,size:5}),(0,n.tZ)(a.Z,{kind:"linkedin",href:m,size:5}),(0,n.tZ)(a.Z,{kind:"twitter",href:u,size:5})]})]})}),(0,n.tZ)("p",{className:"space-y-4 text-zinc-500 dark:text-slate-300",children:(0,n.tZ)("p",{className:"my-4 leading-loose",children:(0,n.tZ)("div",{className:"prose max-w-none pt-8 pb-8 text-zinc-500 dark:prose-dark xl:col-span-2",children:t})})})]})]})}},6055:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}});var n=r(7320),a=r(7233),i=r(9019),l=(r(1576),r(1720));function o(e){var t=e.totalPages,r=e.currentPage,i=parseInt(r)-1>0,l=parseInt(r)+1<=parseInt(t);return(0,n.tZ)("div",{className:"space-y-2 pt-6 pb-8 md:space-y-5",children:(0,n.BX)("nav",{className:"flex justify-between",children:[!i&&(0,n.tZ)("button",{rel:"previous",className:"cursor-auto disabled:opacity-50",disabled:!i,children:"Previous"}),i&&(0,n.tZ)(a.Z,{href:r-1===1?"/blog/":"/blog/page/".concat(r-1),children:(0,n.tZ)("button",{rel:"previous",children:"Previous"})}),(0,n.BX)("span",{children:[r," of ",t]}),!l&&(0,n.tZ)("button",{rel:"next",className:"cursor-auto disabled:opacity-50",disabled:!l,children:"Next"}),l&&(0,n.tZ)(a.Z,{href:"/blog/page/".concat(r+1),children:(0,n.tZ)("button",{rel:"next",children:"Next"})})]})})}var c=r(6232);function s(e){var t=e.posts,r=e.title,s=e.initialDisplayPosts,d=void 0===s?[]:s,u=e.pagination,m=(0,l.useState)(""),h=m[0],p=m[1],f=t.filter((function(e){return(e.title+e.summary+e.tags.join(" ")).toLowerCase().includes(h.toLowerCase())})),g=d.length>0&&!h?d:f;return(0,n.BX)(n.HY,{children:[(0,n.BX)("div",{className:"space-y-2 pt-6 pb-8 md:space-y-5",children:[(0,n.tZ)("h1",{className:"mb-1 text-3xl font-bold tracking-tight text-zinc-800 dark:text-white md:text-5xl",children:r}),(0,n.BX)("div",{className:"relative max-w-lg",children:[(0,n.tZ)("input",{"aria-label":"Search articles",type:"text",onChange:function(e){return p(e.target.value)},placeholder:"Search articles",className:"block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"}),(0,n.tZ)("svg",{className:"absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,n.tZ)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})]})]}),(0,n.BX)("ul",{children:[!f.length&&"No posts found.",g.map((function(e){var t=e.slug,r=e.date,l=e.title,o=e.summary,s=e.tags;return(0,n.tZ)("li",{className:"py-4",children:(0,n.BX)("article",{className:"space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0",children:[(0,n.BX)("dl",{children:[(0,n.tZ)("dt",{className:"sr-only",children:"Published on"}),(0,n.tZ)("dd",{className:"text-base font-medium leading-6 text-gray-500 dark:text-gray-400",children:(0,n.tZ)("time",{dateTime:r,children:(0,c.Z)(r)})})]}),(0,n.BX)("div",{className:"space-y-3 xl:col-span-3",children:[(0,n.BX)("div",{children:[(0,n.tZ)("h3",{className:"text-2xl font-bold leading-8 tracking-tight",children:(0,n.tZ)(a.Z,{href:"/blog/".concat(t),className:"text-gray-900 dark:text-gray-100",children:l})}),(0,n.tZ)("div",{className:"flex flex-wrap",children:s.map((function(e){return(0,n.tZ)(i.Z,{text:e},e)}))})]}),(0,n.tZ)("div",{className:"prose max-w-none text-gray-500 dark:text-gray-400",children:o})]})]})},t)}))]}),u&&u.totalPages>1&&!h&&(0,n.tZ)(o,{currentPage:u.currentPage,totalPages:u.totalPages})]})}},5067:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return h}});var n=r(7320),a=r(7233),i=r(920),l=r(9831),o=r(1576),c=r.n(o),s=r(6232),d=r(7175);r(8100);function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){u(e,t,r[t])}))}return e}function h(e){var t=e.frontMatter,r=e.authorDetails,o=e.next,u=e.prev,h=e.children,p=t.date,f=t.title,g=(t.slug,t.fileName,t.readingTime);return(0,n.BX)(n.HY,{children:[(0,n.tZ)(l.Uy,m({url:"".concat(c().siteUrl,"/blog/").concat(t.slug)},t)),(0,n.tZ)(d.Z,{}),(0,n.tZ)("article",{children:(0,n.BX)("div",{children:[(0,n.BX)("header",{className:"pb-10",children:[(0,n.BX)("div",{className:"mt-4 space-y-1 text-left",children:[(0,n.tZ)("dl",{children:(0,n.BX)("div",{children:[(0,n.tZ)("dt",{className:"sr-only",children:"Published on"}),(0,n.tZ)("dd",{className:"text-base font-medium leading-6 text-gray-500 dark:text-gray-400",children:(0,n.tZ)("time",{dateTime:p,children:(0,s.Z)(p)})})]})}),(0,n.tZ)("div",{children:(0,n.tZ)(i.Z,{children:f})})]}),(0,n.BX)("div",{className:"flex items-center justify-between",children:[(0,n.tZ)("div",{children:r.map((function(e){return(0,n.tZ)(a.Z,{href:e.twitter,children:(0,n.tZ)("div",{className:"mb-1 flex items-center space-x-2",children:(0,n.BX)("dl",{className:"whitespace-nowrap text-sm font-medium leading-5",children:[(0,n.tZ)("dt",{className:"sr-only",children:"Name"}),(0,n.tZ)("dd",{className:"text-gray-900 dark:text-gray-100",children:e.name}),(0,n.tZ)("dt",{className:"sr-only",children:"Twitter"})]})})},e.name)}))}),(0,n.BX)("div",{className:"flex items-center space-x-2 ",children:[(0,n.tZ)("div",{className:"text-gray-500 dark:text-gray-400",children:g.text}),undefined]})]})]}),(0,n.BX)("div",{className:"pb-8 ",style:{gridTemplateRows:"auto 1fr"},children:[(0,n.tZ)("div",{className:" xl:col-span-3 xl:row-span-2 xl:pb-0",children:(0,n.tZ)("div",{className:"prose max-w-none pb-4 dark:prose-dark",children:h})}),(0,n.tZ)("footer",{children:(0,n.BX)("div",{className:"flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base",children:[u&&(0,n.tZ)("div",{className:"pt-2 xl:pt-8",children:(0,n.BX)(a.Z,{href:"/blog/".concat(u.slug),className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:["\u2190 ",u.title]})}),o&&(0,n.tZ)("div",{className:"pt-4 xl:pt-8",children:(0,n.BX)(a.Z,{href:"/blog/".concat(o.slug),className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:[o.title," \u2192"]})})]})})]})]})})]})}},550:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return v}});var n=r(7320),a=r(7233),i=r(920),l=r(890),o=r(9831),c=r(1576),s=r.n(c),d=r(6232),u=r(5152),m=(0,u.default)((function(){return r.e(806).then(r.bind(r,8806))}),{loadableGenerated:{webpack:function(){return[8806]}},ssr:!1}),h=(0,u.default)((function(){return r.e(732).then(r.bind(r,732))}),{loadableGenerated:{webpack:function(){return[732]}},ssr:!1}),p=(0,u.default)((function(){return r.e(257).then(r.bind(r,257))}),{loadableGenerated:{webpack:function(){return[257]}},ssr:!1}),f=function(e){var t,r=e.frontMatter,a=null===s()||void 0===s()?void 0:s().comment;if(!a||0===Object.keys(a).length)return(0,n.tZ)(n.HY,{});switch(s().comment.giscusConfig.mapping||s().comment.utterancesConfig.issueTerm){case"pathname":t=r.slug;break;case"url":t=window.location.href;break;case"title":t=r.title}return(0,n.BX)("div",{id:"comment",children:[s().comment&&"giscus"===s().comment.provider&&(0,n.tZ)(h,{mapping:t}),s().comment&&"utterances"===s().comment.provider&&(0,n.tZ)(m,{issueTerm:t}),s().comment&&"disqus"===s().comment.provider&&(0,n.tZ)(p,{frontMatter:r})]})},g=r(7175);function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){y(e,t,r[t])}))}return e}function v(e){var t=e.frontMatter,r=(e.authorDetails,e.next),c=e.prev,u=e.children,m=t.date,h=t.title;return(0,n.BX)(l.Z,{children:[(0,n.tZ)(o.Uy,b({url:"".concat(s().siteUrl,"/blog/").concat(t.slug)},t)),(0,n.tZ)(g.Z,{}),(0,n.tZ)("article",{children:(0,n.BX)("div",{children:[u,(0,n.tZ)("header",{children:(0,n.BX)("div",{className:"space-y-1 border-b border-gray-200 pb-10 text-center dark:border-gray-700",children:[(0,n.tZ)("dl",{children:(0,n.BX)("div",{children:[(0,n.tZ)("dt",{className:"sr-only",children:"Published on"}),(0,n.tZ)("dd",{className:"text-base font-medium leading-6 text-gray-500 dark:text-gray-400",children:(0,n.tZ)("time",{dateTime:m,children:(0,d.Z)(m)})})]})}),(0,n.tZ)("div",{children:(0,n.tZ)(i.Z,{children:h})})]})}),(0,n.BX)("div",{className:"divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0 ",style:{gridTemplateRows:"auto 1fr"},children:[(0,n.tZ)("div",{className:"divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0",children:(0,n.tZ)("div",{className:"prose max-w-none pt-10 pb-8 dark:prose-dark",children:u})}),(0,n.tZ)(f,{frontMatter:t}),(0,n.tZ)("footer",{children:(0,n.BX)("div",{className:"flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base",children:[c&&(0,n.tZ)("div",{className:"pt-4 xl:pt-8",children:(0,n.BX)(a.Z,{href:"/blog/".concat(c.slug),className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:["\u2190 ",c.title]})}),r&&(0,n.tZ)("div",{className:"pt-4 xl:pt-8",children:(0,n.BX)(a.Z,{href:"/blog/".concat(r.slug),className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:[r.title," \u2192"]})})]})})]})]})})]})}},6232:function(e,t,r){"use strict";var n=r(1576),a=r.n(n);t.Z=function(e){return new Date(e).toLocaleDateString(a().locale,{year:"numeric",month:"long",day:"numeric"})}},4871:function(e,t,r){"use strict";var n=r(9671);t.Z=function(e){return(0,n.slug)(e)}},4172:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return w},default:function(){return N}});var n=r(7320),a=r(920),i=r(1720),l=r(3194),o=r(8100),c=r(7233),s=function(e){var t=e.toc,r=e.indentDepth,a=void 0===r?3:r,i=e.fromHeading,l=void 0===i?1:i,o=e.toHeading,c=void 0===o?6:o,s=e.asDisclosure,d=void 0!==s&&s,u=e.exclude,m=void 0===u?"":u,h=Array.isArray(m)?new RegExp("^("+m.join("|")+")$","i"):new RegExp("^("+m+")$","i"),p=t.filter((function(e){return e.depth>=l&&e.depth<=c&&!h.test(e.value)})),f=(0,n.tZ)("ul",{children:p.map((function(e){return(0,n.tZ)("li",{className:"".concat(e.depth>=a&&"ml-6"),children:(0,n.tZ)("a",{href:e.url,children:e.value})},e.value)}))});return(0,n.tZ)(n.HY,{children:d?(0,n.BX)("details",{open:!0,children:[(0,n.tZ)("summary",{className:"ml-6 pt-2 pb-2 text-xl font-bold",children:"Table of Contents"}),(0,n.tZ)("div",{className:"ml-6",children:f})]}):f})},d=function(e){var t=(0,i.useRef)(null),r=(0,i.useState)(!1),a=r[0],l=r[1],o=(0,i.useState)(!1),c=o[0],s=o[1];return(0,n.BX)("div",{ref:t,onMouseEnter:function(){l(!0)},onMouseLeave:function(){l(!1),s(!1)},className:"relative",children:[a&&(0,n.tZ)("button",{"aria-label":"Copy code",type:"button",className:"absolute right-2 top-2 h-8 w-8 rounded border-2 bg-gray-700 p-1 dark:bg-gray-800 ".concat(c?"border-green-400 focus:border-green-400 focus:outline-none":"border-gray-300"),onClick:function(){s(!0),navigator.clipboard.writeText(t.current.textContent),setTimeout((function(){s(!1)}),2e3)},children:(0,n.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",stroke:"currentColor",fill:"none",className:c?"text-green-400":"text-gray-300",children:c?(0,n.tZ)(n.HY,{children:(0,n.tZ)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"})}):(0,n.tZ)(n.HY,{children:(0,n.tZ)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"})})})}),(0,n.tZ)("pre",{children:e.children})]})},u=r(4051),m=r.n(u),h=r(1576),p=r.n(h);function f(e,t,r,n,a,i,l){try{var o=e[i](l),c=o.value}catch(s){return void r(s)}o.done?t(c):Promise.resolve(c).then(n,a)}var g=function(e){var t=e.title,r=void 0===t?"Subscribe to the newsletter":t,a=(0,i.useRef)(null),l=(0,i.useState)(!1),o=l[0],c=l[1],s=(0,i.useState)(""),d=s[0],u=s[1],h=(0,i.useState)(!1),g=h[0],y=h[1],b=function(){var e,t=(e=m().mark((function e(t){var r;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("/api/".concat(p().newsletter.provider),{body:JSON.stringify({email:a.current.value}),headers:{"Content-Type":"application/json"},method:"POST"});case 3:return r=e.sent,e.next=6,r.json();case 6:if(!e.sent.error){e.next=11;break}return c(!0),u("Your e-mail address is invalid or you are already subscribed!"),e.abrupt("return");case 11:a.current.value="",c(!1),y(!0),u("Successfully! \ud83c\udf89 You are now subscribed.");case 15:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,a){var i=e.apply(t,r);function l(e){f(i,n,a,l,o,"next",e)}function o(e){f(i,n,a,l,o,"throw",e)}l(void 0)}))});return function(e){return t.apply(this,arguments)}}();return(0,n.BX)("div",{children:[(0,n.tZ)("div",{className:"pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100",children:r}),(0,n.BX)("form",{className:"flex flex-col sm:flex-row",onSubmit:b,children:[(0,n.BX)("div",{children:[(0,n.tZ)("label",{className:"sr-only",htmlFor:"email-input",children:"Email address"}),(0,n.tZ)("input",{autoComplete:"email",className:"w-72 rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black",id:"email-input",name:"email",placeholder:g?"You're subscribed !  \ud83c\udf89":"Enter your email",ref:a,required:!0,type:"email",disabled:g})]}),(0,n.tZ)("div",{className:"mt-2 flex w-full rounded-md shadow-sm sm:mt-0 sm:ml-3",children:(0,n.tZ)("button",{className:"w-full rounded-md bg-primary-500 py-2 px-4 font-medium text-white sm:py-0 ".concat(g?"cursor-default":"hover:bg-primary-700 dark:hover:bg-primary-400"," focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 dark:ring-offset-black"),type:"submit",disabled:g,children:g?"Thank you!":"Sign up"})})]}),o&&(0,n.tZ)("div",{className:"w-72 pt-2 text-sm text-red-500 dark:text-red-400 sm:w-96",children:d})]})};function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){y(e,t,r[t])}))}return e}function v(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var x={Image:o.Z,TOCInline:s,a:c.Z,pre:d,BlogNewsletterForm:function(e){var t=e.title;return(0,n.tZ)("div",{className:"flex items-center justify-center",children:(0,n.tZ)("div",{className:"bg-gray-100 p-6 dark:bg-gray-800 sm:px-14 sm:py-8",children:(0,n.tZ)(g,{title:t})})})},wrapper:function(e){e.components;var t=e.layout,a=v(e,["components","layout"]),i=r(9618)("./".concat(t)).default;return(0,n.tZ)(i,b({},a))}},Z=function(e){var t=e.layout,r=e.mdxSource,a=v(e,["layout","mdxSource"]),o=(0,i.useMemo)((function(){return(0,l.getMDXComponent)(r)}),[r]);return(0,n.tZ)(o,b({layout:t,components:x},a))},w=!0;function N(e){var t=e.post,r=e.authorDetails,i=e.prev,l=e.next,o=t.mdxSource,c=t.toc,s=t.frontMatter;return(0,n.tZ)(n.HY,{children:!0!==s.draft?(0,n.tZ)(Z,{layout:s.layout||"PostLayout",toc:c,mdxSource:o,frontMatter:s,authorDetails:r,prev:i,next:l}):(0,n.tZ)("div",{className:"mt-24 text-center",children:(0,n.BX)(a.Z,{children:["Under Construction"," ",(0,n.tZ)("span",{role:"img","aria-label":"roadwork sign",children:"\ud83d\udea7"})]})})})}}},function(e){e.O(0,[146,888,179],(function(){return t=6082,e(e.s=t);var t}));var t=e.O();_N_E=t}]);