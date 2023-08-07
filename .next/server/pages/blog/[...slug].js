(() => {
var exports = {};
exports.id = 94;
exports.ids = [94,195];
exports.modules = {

/***/ 9618:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./AuthorLayout": 4856,
	"./AuthorLayout.js": 4856,
	"./ListLayout": 6055,
	"./ListLayout.js": 6055,
	"./PostLayout": 5067,
	"./PostLayout.js": 5067,
	"./PostSimple": 550,
	"./PostSimple.js": 550
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 9618;

/***/ }),

/***/ 2519:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "J": () => (/* binding */ MDXLayoutRenderer)
});

// UNUSED EXPORTS: MDXComponents

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "mdx-bundler/client"
const client_namespaceObject = require("mdx-bundler/client");
// EXTERNAL MODULE: ./components/Image.js
var Image = __webpack_require__(7661);
// EXTERNAL MODULE: ./components/Link.js
var Link = __webpack_require__(7233);
;// CONCATENATED MODULE: ./components/TOCInline.js

/**
 * @typedef TocHeading
 * @prop {string} value
 * @prop {number} depth
 * @prop {string} url
 */ /**
 * Generates an inline table of contents
 * Exclude titles matching this string (new RegExp('^(' + string + ')$', 'i')).
 * If an array is passed the array gets joined with a pipe (new RegExp('^(' + array.join('|') + ')$', 'i')).
 *
 * @param {{
 *  toc: TocHeading[],
 *  indentDepth?: number,
 *  fromHeading?: number,
 *  toHeading?: number,
 *  asDisclosure?: boolean,
 *  exclude?: string|string[]
 * }} props
 *
 */ const TOCInline = ({ toc , indentDepth =3 , fromHeading =1 , toHeading =6 , asDisclosure =false , exclude ="" ,  })=>{
    const re = Array.isArray(exclude) ? new RegExp("^(" + exclude.join("|") + ")$", "i") : new RegExp("^(" + exclude + ")$", "i");
    const filteredToc = toc.filter((heading)=>heading.depth >= fromHeading && heading.depth <= toHeading && !re.test(heading.value)
    );
    const tocList = /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        children: filteredToc.map((heading)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: `${heading.depth >= indentDepth && "ml-6"}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: heading.url,
                    children: heading.value
                })
            }, heading.value)
        )
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: asDisclosure ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("details", {
            open: true,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("summary", {
                    className: "ml-6 pt-2 pb-2 text-xl font-bold",
                    children: "Table of Contents"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "ml-6",
                    children: tocList
                })
            ]
        }) : tocList
    });
};
/* harmony default export */ const components_TOCInline = (TOCInline);

;// CONCATENATED MODULE: ./components/Pre.js


const Pre = (props)=>{
    const textInput = (0,external_react_.useRef)(null);
    const { 0: hovered , 1: setHovered  } = (0,external_react_.useState)(false);
    const { 0: copied , 1: setCopied  } = (0,external_react_.useState)(false);
    const onEnter = ()=>{
        setHovered(true);
    };
    const onExit = ()=>{
        setHovered(false);
        setCopied(false);
    };
    const onCopy = ()=>{
        setCopied(true);
        navigator.clipboard.writeText(textInput.current.textContent);
        setTimeout(()=>{
            setCopied(false);
        }, 2000);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        ref: textInput,
        onMouseEnter: onEnter,
        onMouseLeave: onExit,
        className: "relative",
        children: [
            hovered && /*#__PURE__*/ jsx_runtime_.jsx("button", {
                "aria-label": "Copy code",
                type: "button",
                className: `absolute right-2 top-2 h-8 w-8 rounded border-2 bg-gray-700 p-1 dark:bg-gray-800 ${copied ? "border-green-400 focus:border-green-400 focus:outline-none" : "border-gray-300"}`,
                onClick: onCopy,
                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    fill: "none",
                    className: copied ? "text-green-400" : "text-gray-300",
                    children: copied ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                        })
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("pre", {
                children: props.children
            })
        ]
    });
};
/* harmony default export */ const components_Pre = (Pre);

// EXTERNAL MODULE: ./data/siteMetadata.js
var siteMetadata = __webpack_require__(1576);
var siteMetadata_default = /*#__PURE__*/__webpack_require__.n(siteMetadata);
;// CONCATENATED MODULE: ./components/NewsletterForm.js



const NewsletterForm = ({ title ="Subscribe to the newsletter"  })=>{
    const inputEl = (0,external_react_.useRef)(null);
    const { 0: error1 , 1: setError  } = (0,external_react_.useState)(false);
    const { 0: message , 1: setMessage  } = (0,external_react_.useState)("");
    const { 0: subscribed , 1: setSubscribed  } = (0,external_react_.useState)(false);
    const subscribe = async (e)=>{
        e.preventDefault();
        const res = await fetch(`/api/${(siteMetadata_default()).newsletter.provider}`, {
            body: JSON.stringify({
                email: inputEl.current.value
            }),
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST"
        });
        const { error  } = await res.json();
        if (error) {
            setError(true);
            setMessage("Your e-mail address is invalid or you are already subscribed!");
            return;
        }
        inputEl.current.value = "";
        setError(false);
        setSubscribed(true);
        setMessage("Successfully! \uD83C\uDF89 You are now subscribed.");
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100",
                children: title
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                className: "flex flex-col sm:flex-row",
                onSubmit: subscribe,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: "sr-only",
                                htmlFor: "email-input",
                                children: "Email address"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                autoComplete: "email",
                                className: "w-72 rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black",
                                id: "email-input",
                                name: "email",
                                placeholder: subscribed ? "You're subscribed !  \uD83C\uDF89" : "Enter your email",
                                ref: inputEl,
                                required: true,
                                type: "email",
                                disabled: subscribed
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mt-2 flex w-full rounded-md shadow-sm sm:mt-0 sm:ml-3",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: `w-full rounded-md bg-primary-500 py-2 px-4 font-medium text-white sm:py-0 ${subscribed ? "cursor-default" : "hover:bg-primary-700 dark:hover:bg-primary-400"} focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 dark:ring-offset-black`,
                            type: "submit",
                            disabled: subscribed,
                            children: subscribed ? "Thank you!" : "Sign up"
                        })
                    })
                ]
            }),
            error1 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-72 pt-2 text-sm text-red-500 dark:text-red-400 sm:w-96",
                children: message
            })
        ]
    });
};
/* harmony default export */ const components_NewsletterForm = ((/* unused pure expression or super */ null && (NewsletterForm)));
const BlogNewsletterForm = ({ title  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex items-center justify-center",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "bg-gray-100 p-6 dark:bg-gray-800 sm:px-14 sm:py-8",
            children: /*#__PURE__*/ jsx_runtime_.jsx(NewsletterForm, {
                title: title
            })
        })
    })
;

;// CONCATENATED MODULE: ./components/MDXComponents.js

/* eslint-disable react/display-name */ 






const MDXComponents = {
    Image: Image/* default */.Z,
    TOCInline: components_TOCInline,
    a: Link/* default */.Z,
    pre: components_Pre,
    BlogNewsletterForm: BlogNewsletterForm,
    wrapper: ({ components , layout , ...rest })=>{
        const Layout = __webpack_require__(9618)(`./${layout}`).default;
        return /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
            ...rest
        });
    }
};
const MDXLayoutRenderer = ({ layout , mdxSource , ...rest })=>{
    const MDXLayout = (0,external_react_.useMemo)(()=>(0,client_namespaceObject.getMDXComponent)(mdxSource)
    , [
        mdxSource
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(MDXLayout, {
        layout: layout,
        components: MDXComponents,
        ...rest
    });
};


/***/ }),

/***/ 920:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PageTitle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function PageTitle({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
        className: "text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14",
        children: children
    });
};


/***/ }),

/***/ 1205:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_ScrollTopAndComment)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./data/siteMetadata.js
var siteMetadata = __webpack_require__(1576);
var siteMetadata_default = /*#__PURE__*/__webpack_require__.n(siteMetadata);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "smoothscroll-polyfill"
const external_smoothscroll_polyfill_namespaceObject = require("smoothscroll-polyfill");
var external_smoothscroll_polyfill_default = /*#__PURE__*/__webpack_require__.n(external_smoothscroll_polyfill_namespaceObject);
;// CONCATENATED MODULE: ./components/ScrollTopAndComment.js




const ScrollTopAndComment = ()=>{
    const { 0: show , 1: setShow  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        external_smoothscroll_polyfill_default().polyfill();
        const handleWindowScroll = ()=>{
            if (window.scrollY > 50) setShow(true);
            else setShow(false);
        };
        window.addEventListener("scroll", handleWindowScroll);
        return ()=>window.removeEventListener("scroll", handleWindowScroll)
        ;
    }, []);
    const handleScrollTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    const handleScrollToComment = ()=>{
        document.getElementById("comment").scrollIntoView();
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `fixed right-8 bottom-8 hidden flex-col gap-3 ${show ? "md:flex" : "md:hidden"}`,
        children: [
            (siteMetadata_default()).comment.provider && /*#__PURE__*/ jsx_runtime_.jsx("button", {
                "aria-label": "Scroll To Comment",
                type: "button",
                onClick: handleScrollToComment,
                className: "rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600",
                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    className: "h-5 w-5",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fillRule: "evenodd",
                        d: "M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z",
                        clipRule: "evenodd"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                "aria-label": "Scroll To Top",
                type: "button",
                onClick: handleScrollTop,
                className: "rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600",
                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    className: "h-5 w-5",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fillRule: "evenodd",
                        d: "M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z",
                        clipRule: "evenodd"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const components_ScrollTopAndComment = (ScrollTopAndComment);


/***/ }),

/***/ 4856:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AuthorLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_social_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2557);
/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7661);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9831);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4094);





function AuthorLayout({ children , frontMatter  }) {
    const { name , avatar , occupation , company , email , twitter , linkedin , github  } = frontMatter;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SEO__WEBPACK_IMPORTED_MODULE_3__/* .PageSEO */ .TQ, {
                title: `About - ${name}`,
                description: `About me - ${name}`
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "space-y-2 pt-6 pb-4 md:space-y-5",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "mb-1 text-3xl font-bold tracking-tight text-zinc-800 dark:text-white md:text-5xl",
                            children: "About"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "items-start",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "darK:bg-slate-100 flex flex-col items-center rounded-lg bg-slate-700 bg-opacity-10 p-2 text-center md:flex-row",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        src: "/static/images/avatar.jpg",
                                        alt: "avatar",
                                        width: "150px",
                                        height: "150px",
                                        className: "rounded-full"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "py-2 text-2xl font-bold leading-8 tracking-tight",
                                    children: name
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "text-gray-500 dark:text-gray-400",
                                    children: occupation
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "text-gray-500 dark:text-gray-400",
                                    children: company
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex space-x-3 py-6 px-4 md:py-0 md:px-6",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_social_icons__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                            kind: "mail",
                                            href: `mailto:${email}`,
                                            size: 5
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_social_icons__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                            kind: "github",
                                            href: github,
                                            size: 5
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_social_icons__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                            kind: "linkedin",
                                            href: linkedin,
                                            size: 5
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_social_icons__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                            kind: "twitter",
                                            href: twitter,
                                            size: 5
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "space-y-4 text-zinc-500 dark:text-slate-300",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "my-4 leading-loose",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "prose max-w-none pt-8 pb-8 text-zinc-500 dark:prose-dark xl:col-span-2",
                                children: children
                            })
                        })
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 5067:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PostLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7233);
/* harmony import */ var _components_PageTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(920);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9831);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1576);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_utils_formatDate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6232);
/* harmony import */ var _components_ScrollTopAndComment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1205);
/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7661);








function PostLayout({ frontMatter , authorDetails , next , prev , children  }) {
    const { date , title , slug: slug1 , fileName: fileName1 , readingTime  } = frontMatter;
    const editUrl = (fileName)=>`${(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_4___default().siteRepo)}/blob/master/data/blog/${fileName}`
    ;
    const discussUrl = (slug)=>`https://mobile.twitter.com/search?q=${encodeURIComponent(`${(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_4___default().siteUrl)}/blog/${slug}`)}`
    ;
    const pageViews = undefined;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SEO__WEBPACK_IMPORTED_MODULE_3__/* .BlogSEO */ .Uy, {
                url: `${(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_4___default().siteUrl)}/blog/${frontMatter.slug}`,
                ...frontMatter
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ScrollTopAndComment__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("article", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                            className: "pb-10",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mt-4 space-y-1 text-left",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dl", {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                                                        className: "sr-only",
                                                        children: "Published on"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                                                        className: "text-base font-medium leading-6 text-gray-500 dark:text-gray-400",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("time", {
                                                            dateTime: date,
                                                            children: (0,_lib_utils_formatDate__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(date)
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PageTitle__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                children: title
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: authorDetails.map((author)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                    href: author.twitter,
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "mb-1 flex items-center space-x-2",
                                                        children: [
                                                            author.avatar && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Image__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                                src: author.avatar,
                                                                width: "24px",
                                                                height: "24px",
                                                                alt: "avatar",
                                                                className: "h-10 w-10 rounded-full"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("dl", {
                                                                className: "whitespace-nowrap text-sm font-medium leading-5",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                                                                        className: "sr-only",
                                                                        children: "Name"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                                                                        className: "text-gray-900 dark:text-gray-100",
                                                                        children: author.name
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                                                                        className: "sr-only",
                                                                        children: "Twitter"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                }, author.name)
                                            )
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-center space-x-2 ",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "text-gray-500 dark:text-gray-400",
                                                    children: readingTime.text
                                                }),
                                                pageViews && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: "Page Views"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "pb-8 ",
                            style: {
                                gridTemplateRows: "auto 1fr"
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: " xl:col-span-3 xl:row-span-2 xl:pb-0",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "prose max-w-none pb-4 dark:prose-dark",
                                            children: children
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex justify-between pt-6 text-sm text-gray-700 dark:text-gray-300",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                    href: editUrl(fileName1),
                                                    children: "Have a nice day \uD83C\uDF1E"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                    href: discussUrl(slug1),
                                                    rel: "nofollow",
                                                    children: "Discuss on Twitter"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base",
                                        children: [
                                            prev && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "pt-2 xl:pt-8",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                    href: `/blog/${prev.slug}`,
                                                    className: "text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",
                                                    children: [
                                                        "\u2190 ",
                                                        prev.title
                                                    ]
                                                })
                                            }),
                                            next && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "pt-4 xl:pt-8",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                    href: `/blog/${next.slug}`,
                                                    className: "text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",
                                                    children: [
                                                        next.title,
                                                        " \u2192"
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};


/***/ }),

/***/ 550:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ PostLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/Link.js
var Link = __webpack_require__(7233);
// EXTERNAL MODULE: ./components/PageTitle.js
var PageTitle = __webpack_require__(920);
// EXTERNAL MODULE: ./components/SectionContainer.js
var SectionContainer = __webpack_require__(890);
// EXTERNAL MODULE: ./components/SEO.js
var SEO = __webpack_require__(9831);
// EXTERNAL MODULE: ./data/siteMetadata.js
var siteMetadata = __webpack_require__(1576);
var siteMetadata_default = /*#__PURE__*/__webpack_require__.n(siteMetadata);
// EXTERNAL MODULE: ./lib/utils/formatDate.js
var formatDate = __webpack_require__(6232);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
;// CONCATENATED MODULE: ./components/comments/index.js



const UtterancesComponent = (0,dynamic["default"])(null, {
    loadableGenerated: {
        modules: [
            "../components/comments/index.js -> " + "@/components/comments/Utterances"
        ]
    },
    ssr: false
});
const GiscusComponent = (0,dynamic["default"])(null, {
    loadableGenerated: {
        modules: [
            "../components/comments/index.js -> " + "@/components/comments/Giscus"
        ]
    },
    ssr: false
});
const DisqusComponent = (0,dynamic["default"])(null, {
    loadableGenerated: {
        modules: [
            "../components/comments/index.js -> " + "@/components/comments/Disqus"
        ]
    },
    ssr: false
});
const Comments = ({ frontMatter  })=>{
    let term;
    const comment = (siteMetadata_default()) === null || (siteMetadata_default()) === void 0 ? void 0 : (siteMetadata_default()).comment;
    if (!comment || Object.keys(comment).length === 0) return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
    switch((siteMetadata_default()).comment.giscusConfig.mapping || (siteMetadata_default()).comment.utterancesConfig.issueTerm){
        case "pathname":
            term = frontMatter.slug;
            break;
        case "url":
            term = window.location.href;
            break;
        case "title":
            term = frontMatter.title;
            break;
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        id: "comment",
        children: [
            (siteMetadata_default()).comment && (siteMetadata_default()).comment.provider === "giscus" && /*#__PURE__*/ jsx_runtime_.jsx(GiscusComponent, {
                mapping: term
            }),
            (siteMetadata_default()).comment && (siteMetadata_default()).comment.provider === "utterances" && /*#__PURE__*/ jsx_runtime_.jsx(UtterancesComponent, {
                issueTerm: term
            }),
            (siteMetadata_default()).comment && (siteMetadata_default()).comment.provider === "disqus" && /*#__PURE__*/ jsx_runtime_.jsx(DisqusComponent, {
                frontMatter: frontMatter
            })
        ]
    });
};
/* harmony default export */ const comments = (Comments);

// EXTERNAL MODULE: ./components/ScrollTopAndComment.js + 1 modules
var ScrollTopAndComment = __webpack_require__(1205);
;// CONCATENATED MODULE: ./layouts/PostSimple.js









function PostLayout({ frontMatter , authorDetails , next , prev , children  }) {
    const { date , title  } = frontMatter;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SectionContainer/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SEO/* BlogSEO */.Uy, {
                url: `${(siteMetadata_default()).siteUrl}/blog/${frontMatter.slug}`,
                ...frontMatter
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ScrollTopAndComment/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("article", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("header", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "space-y-1 border-b border-gray-200 pb-10 text-center dark:border-gray-700",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("dl", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("dt", {
                                                    className: "sr-only",
                                                    children: "Published on"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("dd", {
                                                    className: "text-base font-medium leading-6 text-gray-500 dark:text-gray-400",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("time", {
                                                        dateTime: date,
                                                        children: (0,formatDate/* default */.Z)(date)
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(PageTitle/* default */.Z, {
                                            children: title
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0 ",
                            style: {
                                gridTemplateRows: "auto 1fr"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "prose max-w-none pt-10 pb-8 dark:prose-dark",
                                        children: children
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(comments, {
                                    frontMatter: frontMatter
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("footer", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base",
                                        children: [
                                            prev && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "pt-4 xl:pt-8",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Link/* default */.Z, {
                                                    href: `/blog/${prev.slug}`,
                                                    className: "text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",
                                                    children: [
                                                        "\u2190 ",
                                                        prev.title
                                                    ]
                                                })
                                            }),
                                            next && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "pt-4 xl:pt-8",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Link/* default */.Z, {
                                                    href: `/blog/${next.slug}`,
                                                    className: "text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",
                                                    children: [
                                                        next.title,
                                                        " \u2192"
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};


/***/ }),

/***/ 9662:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (/* binding */ Blog)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_PageTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(920);
/* harmony import */ var _lib_generate_rss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(642);
/* harmony import */ var _components_MDXComponents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2519);
/* harmony import */ var _lib_mdx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9882);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_mdx__WEBPACK_IMPORTED_MODULE_5__]);
_lib_mdx__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const DEFAULT_LAYOUT = "PostLayout";
async function getStaticPaths() {
    const posts = (0,_lib_mdx__WEBPACK_IMPORTED_MODULE_5__/* .getFiles */ .bE)("blog");
    return {
        paths: posts.map((p)=>({
                params: {
                    slug: (0,_lib_mdx__WEBPACK_IMPORTED_MODULE_5__/* .formatSlug */ .gf)(p).split("/")
                }
            })
        ),
        fallback: false
    };
}
async function getStaticProps({ params  }) {
    const allPosts = await (0,_lib_mdx__WEBPACK_IMPORTED_MODULE_5__/* .getAllFilesFrontMatter */ .sj)("blog");
    const postIndex = allPosts.findIndex((post)=>(0,_lib_mdx__WEBPACK_IMPORTED_MODULE_5__/* .formatSlug */ .gf)(post.slug) === params.slug.join("/")
    );
    const prev = allPosts[postIndex + 1] || null;
    const next = allPosts[postIndex - 1] || null;
    const post1 = await (0,_lib_mdx__WEBPACK_IMPORTED_MODULE_5__/* .getFileBySlug */ .x7)("blog", params.slug.join("/"));
    const authorList = post1.frontMatter.authors || [
        "default"
    ];
    const authorPromise = authorList.map(async (author)=>{
        const authorResults = await (0,_lib_mdx__WEBPACK_IMPORTED_MODULE_5__/* .getFileBySlug */ .x7)("authors", [
            author
        ]);
        return authorResults.frontMatter;
    });
    const authorDetails = await Promise.all(authorPromise);
    // rss
    if (allPosts.length > 0) {
        const rss = (0,_lib_generate_rss__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(allPosts);
        fs__WEBPACK_IMPORTED_MODULE_1___default().writeFileSync("./public/feed.xml", rss);
    }
    return {
        props: {
            post: post1,
            authorDetails,
            prev,
            next
        }
    };
}
function Blog({ post , authorDetails , prev , next  }) {
    const { mdxSource , toc , frontMatter  } = post;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: frontMatter.draft !== true ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MDXComponents__WEBPACK_IMPORTED_MODULE_4__/* .MDXLayoutRenderer */ .J, {
            layout: frontMatter.layout || DEFAULT_LAYOUT,
            toc: toc,
            mdxSource: mdxSource,
            frontMatter: frontMatter,
            authorDetails: authorDetails,
            prev: prev,
            next: next
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "mt-24 text-center",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_PageTitle__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                children: [
                    "Under Construction",
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        role: "img",
                        "aria-label": "roadwork sign",
                        children: "\uD83D\uDEA7"
                    })
                ]
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8904:
/***/ ((module) => {

"use strict";
module.exports = require("github-slugger");

/***/ }),

/***/ 8076:
/***/ ((module) => {

"use strict";
module.exports = require("gray-matter");

/***/ }),

/***/ 7219:
/***/ ((module) => {

"use strict";
module.exports = require("image-size");

/***/ }),

/***/ 9793:
/***/ ((module) => {

"use strict";
module.exports = require("js-yaml");

/***/ }),

/***/ 8214:
/***/ ((module) => {

"use strict";
module.exports = require("mdx-bundler");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 4241:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/routing-items.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4956:
/***/ ((module) => {

"use strict";
module.exports = require("reading-time");

/***/ }),

/***/ 3614:
/***/ ((module) => {

"use strict";
module.exports = import("mdast-util-to-string");;

/***/ }),

/***/ 9847:
/***/ ((module) => {

"use strict";
module.exports = import("rehype-autolink-headings");;

/***/ }),

/***/ 1380:
/***/ ((module) => {

"use strict";
module.exports = import("rehype-citation");;

/***/ }),

/***/ 9521:
/***/ ((module) => {

"use strict";
module.exports = import("rehype-katex");;

/***/ }),

/***/ 6370:
/***/ ((module) => {

"use strict";
module.exports = import("rehype-preset-minify");;

/***/ }),

/***/ 483:
/***/ ((module) => {

"use strict";
module.exports = import("rehype-prism-plus");;

/***/ }),

/***/ 7752:
/***/ ((module) => {

"use strict";
module.exports = import("rehype-slug");;

/***/ }),

/***/ 1083:
/***/ ((module) => {

"use strict";
module.exports = import("remark-footnotes");;

/***/ }),

/***/ 6809:
/***/ ((module) => {

"use strict";
module.exports = import("remark-gfm");;

/***/ }),

/***/ 9832:
/***/ ((module) => {

"use strict";
module.exports = import("remark-math");;

/***/ }),

/***/ 6016:
/***/ ((module) => {

"use strict";
module.exports = import("unist-util-visit");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [895,664,152,233,576,831,397,55,271,548,642], () => (__webpack_exec__(9662)));
module.exports = __webpack_exports__;

})();