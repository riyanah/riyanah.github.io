(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{8947:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return r(3846)}])},4094:function(t,e,r){"use strict";var n=r(7320),a=r(8100),i=r(7233);e.Z=function(t){var e=t.title,r=t.description,o=t.imgSrc,c=t.href;return(0,n.tZ)("div",{className:"md p-4 md:w-1/2",style:{maxWidth:"544px"},children:(0,n.BX)("div",{className:"".concat(o&&"h-full","  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700"),children:[o&&(c?(0,n.tZ)(i.Z,{href:c,"aria-label":"Link to ".concat(e),children:(0,n.tZ)(a.Z,{alt:e,src:o,className:"object-cover object-center md:h-36 lg:h-48",width:544,height:306})}):(0,n.tZ)(a.Z,{alt:e,src:o,className:"object-cover object-center md:h-36 lg:h-48",width:544,height:306})),(0,n.BX)("div",{className:"p-6",children:[(0,n.tZ)("h2",{className:"mb-3 text-2xl font-bold leading-8 tracking-tight",children:c?(0,n.tZ)(i.Z,{href:c,"aria-label":"Link to ".concat(e),children:e}):e}),(0,n.tZ)("p",{className:"prose mb-3 max-w-none text-gray-500 dark:text-gray-400",children:r}),c&&(0,n.tZ)(i.Z,{href:c,className:"text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400","aria-label":"Link to ".concat(e),children:"Learn more \u2192"})]})]})})}},8100:function(t,e,r){"use strict";var n=r(7320);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},i.apply(this,arguments)}e.Z=function(t){var e=i({},t);return(0,n.tZ)("img",function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),n.forEach((function(e){a(t,e,r[e])}))}return t}({},e))}},9831:function(t,e,r){"use strict";r.d(e,{TQ:function(){return s},$t:function(){return m},Uy:function(){return d}});var n=r(7320),a=r(9008),i=r(1163),o=r(1576),c=r.n(o),l=function(t){var e=t.title,r=t.description,o=t.ogType,l=t.ogImage,s=t.twImage,m=t.canonicalUrl,d=(0,i.useRouter)();return(0,n.BX)(a.default,{children:[(0,n.tZ)("title",{children:e}),(0,n.tZ)("meta",{name:"robots",content:"follow, index"}),(0,n.tZ)("meta",{name:"description",content:r}),(0,n.tZ)("meta",{property:"og:url",content:"".concat(c().siteUrl).concat(d.asPath)}),(0,n.tZ)("meta",{property:"og:type",content:o}),(0,n.tZ)("meta",{property:"og:site_name",content:c().title}),(0,n.tZ)("meta",{property:"og:description",content:r}),(0,n.tZ)("meta",{property:"og:title",content:e}),"Array"===l.constructor.name?l.map((function(t){var e=t.url;return(0,n.tZ)("meta",{property:"og:image",content:e},e)})):(0,n.tZ)("meta",{property:"og:image",content:l},l),(0,n.tZ)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.tZ)("meta",{name:"twitter:site",content:c().twitter}),(0,n.tZ)("meta",{name:"twitter:title",content:e}),(0,n.tZ)("meta",{name:"twitter:description",content:r}),(0,n.tZ)("meta",{name:"twitter:image",content:s}),(0,n.tZ)("link",{rel:"canonical",href:m||"".concat(c().siteUrl).concat(d.asPath)})]})},s=function(t){var e=t.title,r=t.description,a=c().siteUrl+c().socialBanner,i=c().siteUrl+c().socialBanner;return(0,n.tZ)(l,{title:e,description:r,ogType:"website",ogImage:a,twImage:i})},m=function(t){var e=t.title,r=t.description,o=c().siteUrl+c().socialBanner,s=c().siteUrl+c().socialBanner,m=(0,i.useRouter)();return(0,n.BX)(n.HY,{children:[(0,n.tZ)(l,{title:e,description:r,ogType:"website",ogImage:o,twImage:s}),(0,n.tZ)(a.default,{children:(0,n.tZ)("link",{rel:"alternate",type:"application/rss+xml",title:"".concat(r," - RSS feed"),href:"".concat(c().siteUrl).concat(m.asPath,"/feed.xml")})})]})},d=function(t){var e=t.authorDetails,r=t.title,o=t.summary,s=t.date,m=t.lastmod,d=t.url,p=t.images,u=void 0===p?[]:p,g=t.canonicalUrl,f=((0,i.useRouter)(),new Date(s).toISOString()),h=new Date(m||s).toISOString(),y=(0===u.length?[c().socialBanner]:"string"===typeof u?[u]:u).map((function(t){return{"@type":"ImageObject",url:"".concat(c().siteUrl).concat(t)}})),b={"@context":"https://schema.org","@type":"Article",mainEntityOfPage:{"@type":"WebPage","@id":d},headline:r,image:y,datePublished:f,dateModified:h,author:e?e.map((function(t){return{"@type":"Person",name:t.name}})):{"@type":"Person",name:c().author},publisher:{"@type":"Organization",name:c().author,logo:{"@type":"ImageObject",url:"".concat(c().siteUrl).concat(c().siteLogo)}},description:o},Z=y[0].url;return(0,n.BX)(n.HY,{children:[(0,n.tZ)(l,{title:r,description:o,ogType:"article",ogImage:y,twImage:Z,canonicalUrl:g}),(0,n.BX)(a.default,{children:[s&&(0,n.tZ)("meta",{property:"article:published_time",content:f}),m&&(0,n.tZ)("meta",{property:"article:modified_time",content:h}),(0,n.tZ)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(b,null,2)}})]})]})}},8281:function(t,e){"use strict";e.Z=[{title:"Fabrilab",description:"Creation of a web design agency.",imgSrc:"/static/images/projects/fabrilab.png",href:"/blog/projects/fabrilab-web-agency"},{title:"Toy Surfboards",description:"Creation & developpement of a e-commerce website.",imgSrc:"/static/images/projects/browser_toy.png",href:"/blog/projects/toy-surfboards"}]},3846:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return s}});var n=r(7320),a=r(1576),i=r.n(a),o=r(8281),c=r(4094),l=r(9831);function s(){return(0,n.BX)(n.HY,{children:[(0,n.tZ)(l.TQ,{title:"Projects - ".concat(i().author),description:i().description}),(0,n.BX)("div",{className:"",children:[(0,n.BX)("div",{className:"space-y-2 pt-6 pb-4 md:space-y-5",children:[(0,n.tZ)("h1",{className:"mb-1 text-3xl font-bold tracking-tight text-zinc-800 dark:text-white md:text-5xl",children:"Projects"}),(0,n.tZ)("p",{className:"text-lg leading-7 text-gray-500 dark:text-gray-400",children:"A selection of projects I worked on in the past few years."})]}),(0,n.tZ)("div",{className:"container py-12",children:(0,n.tZ)("div",{className:"-m-4 flex flex-wrap",children:o.Z.map((function(t){return(0,n.tZ)(c.Z,{title:t.title,description:t.description,imgSrc:t.imgSrc,href:t.href},t.title)}))})})]})]})}}},function(t){t.O(0,[888,179],(function(){return e=8947,t(t.s=e);var e}));var e=t.O();_N_E=e}]);