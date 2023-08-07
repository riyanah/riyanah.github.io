"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,195];
exports.modules = {

/***/ 8281:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const projectsData = [
    {
        title: "Fabrilab",
        description: `Creation of a web design agency.`,
        imgSrc: "/static/images/projects/fabrilab.png",
        href: "/blog/projects/fabrilab-web-agency"
    },
    {
        title: "Toy Surfboards",
        description: `Creation & developpement of a e-commerce website.`,
        imgSrc: "/static/images/projects/browser_toy.png",
        href: "/blog/projects/toy-surfboards"
    }, 
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectsData);


/***/ }),

/***/ 6232:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1576);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_0__);

const formatDate = (date)=>{
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric"
    };
    const now = new Date(date).toLocaleDateString((_data_siteMetadata__WEBPACK_IMPORTED_MODULE_0___default().locale), options);
    return now;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDate);


/***/ }),

/***/ 4369:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7233);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9831);
/* harmony import */ var _components_Tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9019);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1576);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_mdx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9882);
/* harmony import */ var _lib_utils_formatDate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6232);
/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7661);
/* harmony import */ var _data_projectsData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8281);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4094);
/* harmony import */ var _components_ThemeSwitch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7020);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_mdx__WEBPACK_IMPORTED_MODULE_5__]);
_lib_mdx__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const MAX_DISPLAY = 5;
async function getStaticProps() {
    const posts = await (0,_lib_mdx__WEBPACK_IMPORTED_MODULE_5__/* .getAllFilesFrontMatter */ .sj)("blog");
    return {
        props: {
            posts
        }
    };
}
function Home({ posts  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SEO__WEBPACK_IMPORTED_MODULE_2__/* .PageSEO */ .TQ, {
                title: (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_4___default().title),
                description: (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_4___default().description)
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "space-y-2 pb-4 pt-6 md:space-y-5",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex flex-col-reverse items-start sm:flex-row",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col pr-8",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "mb-1 text-xl font-bold tracking-tight text-zinc-600 dark:text-white md:text-2xl",
                                    children: "\uD83E\uDD17 Hi, I'm"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "mb-1 text-3xl font-bold tracking-tight text-zinc-800 dark:text-white md:text-5xl",
                                    children: "Riyan Ahmed"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "space-y-4 text-zinc-500 dark:text-slate-300",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: "my-4 leading-loose",
                            children: [
                                "I'm a 3rd-year Computer Science student at",
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "focusable rounded-sm font-medium text-zinc-800 underline decoration-blue-500 decoration-2 underline-offset-2 transition duration-100 hover:text-blue-500 hover:decoration-sky-500/30 focus:text-blue-500 focus:ring-sky-500/40 dark:text-white dark:decoration-sky-400 dark:hover:text-sky-400 dark:hover:decoration-sky-400/30 dark:focus:text-sky-400 dark:focus:ring-sky-400/40",
                                    href: "https://www.excelia-group.com/",
                                    rel: "noreferrer",
                                    target: "_blank",
                                    children: "Carleton University"
                                }),
                                ", with a passion for backend engineering. I am moved by the positive impact tech can bring about. I'm VP of Events at",
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "focusable rounded-sm font-medium text-zinc-800 underline decoration-blue-800 decoration-2 underline-offset-2 transition duration-100 hover:text-blue-800 hover:decoration-blue-800/30 focus:text-blue-500 focus:ring-blue-500/40 dark:text-white dark:decoration-sky-400 dark:hover:text-sky-400 dark:hover:decoration-sky-400/30 dark:focus:text-sky-400 dark:focus:ring-sky-400/40",
                                    href: "https://www.pernod-ricard.com/",
                                    rel: "noreferrer",
                                    target: "_blank",
                                    children: "CU Blueprint"
                                }),
                                ", a student-run club that builds open-source software for non-profits. Previously, I have done Software Development Internships at",
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "focusable rounded-sm font-medium text-zinc-800 underline decoration-blue-800 decoration-2 underline-offset-2 transition duration-100 hover:text-blue-800 hover:decoration-blue-800/30 focus:text-blue-500 focus:ring-blue-500/40 dark:text-white dark:decoration-sky-400 dark:hover:text-sky-400 dark:hover:decoration-sky-400/30 dark:focus:text-sky-400 dark:focus:ring-sky-400/40",
                                    href: "https://www.pernod-ricard.com/",
                                    rel: "noreferrer",
                                    target: "_blank",
                                    children: "Lockheed Martin"
                                }),
                                ", and at",
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "focusable rounded-sm font-medium text-zinc-800 underline decoration-green-500 decoration-2 underline-offset-2 transition duration-100 hover:text-green-500 hover:decoration-green-500/30 focus:text-lime-500 focus:ring-lime-500/40 dark:text-white dark:decoration-lime-400 dark:hover:text-lime-400 dark:hover:decoration-lime-400/30 dark:focus:text-lime-400 dark:focus:ring-lime-400/40",
                                    href: "https://www.microsoft.com/",
                                    rel: "noreferrer",
                                    target: "_blank",
                                    children: "Public Services and Procurement Canada"
                                }),
                                ". Please feel free to connect with me and chat on",
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "focusable rounded-sm font-medium text-zinc-800 underline decoration-green-500 decoration-2 underline-offset-2 transition duration-100 hover:text-green-500 hover:decoration-green-500/30 focus:text-lime-500 focus:ring-lime-500/40 dark:text-white dark:decoration-lime-400 dark:hover:text-lime-400 dark:hover:decoration-lime-400/30 dark:focus:text-lime-400 dark:focus:ring-lime-400/40",
                                    href: "https://www.microsoft.com/",
                                    rel: "noreferrer",
                                    target: "_blank",
                                    children: "LinkedIn"
                                }),
                                " ",
                                "or",
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "focusable rounded-sm font-medium text-zinc-800 underline decoration-green-500 decoration-2 underline-offset-2 transition duration-100 hover:text-green-500 hover:decoration-green-500/30 focus:text-lime-500 focus:ring-lime-500/40 dark:text-white dark:decoration-lime-400 dark:hover:text-lime-400 dark:hover:decoration-lime-400/30 dark:focus:text-lime-400 dark:focus:ring-lime-400/40",
                                    href: "mailto:riyan.ahmed@outlook.com",
                                    rel: "noreferrer",
                                    target: "_blank",
                                    children: "Email"
                                }),
                                "."
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mt-8 flex flex-wrap gap-4 text-center",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                className: "focusable flex flex-none cursor-pointer items-center justify-center gap-2 rounded-md bg-blue-500 px-2.5 py-2 font-medium text-white shadow-lg shadow-blue-500/10 transition selection:bg-white/30 hover:bg-blue-500/80 hover:shadow-blue-500/5 focus:ring-blue-500/40 dark:bg-blue-400 dark:text-zinc-900 dark:shadow-blue-400/10 dark:selection:bg-zinc-900/30 dark:hover:bg-blue-400/80 dark:hover:shadow-blue-400/5 dark:focus:ring-blue-400/40 sm:w-auto sm:px-3 sm:pl-2.5",
                                href: "https://www.linkedin.com/in/raphaelchelly",
                                rel: "noreferrer",
                                target: "_blank",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                        height: "24",
                                        role: "presentation",
                                        width: "24",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            clipRule: "evenodd",
                                            d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
                                            fill: "currentColor",
                                            fillRule: "evenodd"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "hidden sm:inline",
                                        children: "LinkedIn"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                className: "focusable flex flex-none cursor-pointer items-center justify-center gap-2 rounded-md bg-indigo-500 px-2.5 py-2 font-medium text-white shadow-lg shadow-indigo-500/10 transition selection:bg-white/30 hover:bg-indigo-500/80 hover:shadow-indigo-500/5 focus:ring-indigo-500/40 dark:bg-indigo-400 dark:text-zinc-900 dark:shadow-indigo-400/10 dark:selection:bg-zinc-900/30 dark:hover:bg-indigo-400/80 dark:hover:shadow-indigo-400/5 dark:focus:ring-indigo-400/40 sm:w-auto sm:px-3 sm:pl-2.5",
                                href: "https://github.com/raphaelchelly",
                                rel: "noreferrer",
                                target: "_blank",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                        height: "24",
                                        role: "presentation",
                                        width: "24",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            clipRule: "evenodd",
                                            d: "M12 2C6.475 2 2 6.47 2 11.988c0 4.42 2.862 8.153 6.838 9.476.5.087.687-.212.687-.474 0-.238-.013-1.024-.013-1.86C7 19.59 6.35 18.517 6.15 17.955c-.113-.287-.6-1.174-1.025-1.411-.35-.187-.85-.65-.013-.662.788-.012 1.35.724 1.538 1.024.9 1.51 2.338 1.086 2.912.824.088-.65.35-1.086.638-1.336-2.225-.25-4.55-1.111-4.55-4.931 0-1.087.387-1.986 1.025-2.685-.1-.25-.45-1.273.1-2.646 0 0 .837-.263 2.75 1.023a9.29 9.29 0 0 1 2.5-.337c.85 0 1.7.113 2.5.337 1.912-1.298 2.75-1.023 2.75-1.023.55 1.373.2 2.397.1 2.646.637.7 1.025 1.586 1.025 2.685 0 3.832-2.337 4.681-4.562 4.931.362.312.675.912.675 1.848 0 1.336-.013 2.41-.013 2.747 0 .262.188.574.688.474C19.137 20.141 22 16.395 22 11.988 22 6.47 17.525 2 12 2Z",
                                            fill: "currentColor",
                                            fillRule: "evenodd"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "hidden sm:inline",
                                        children: "GitHub"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                className: "focusable flex flex-none cursor-pointer items-center justify-center gap-2 rounded-md bg-lime-500 px-2.5 py-2 font-medium text-white shadow-lg shadow-lime-500/10 transition selection:bg-white/30 hover:bg-lime-500/80 hover:shadow-lime-500/5 focus:ring-lime-500/40 dark:bg-lime-400 dark:text-zinc-900 dark:shadow-lime-400/10 dark:selection:bg-zinc-900/30 dark:hover:bg-lime-400/80 dark:hover:shadow-lime-400/5 dark:focus:ring-lime-400/40 sm:w-auto sm:px-3 sm:pl-2.5",
                                href: "mailto:hi@raphaelchelly.com",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                        height: "24",
                                        role: "presentation",
                                        width: "24",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            clipRule: "evenodd",
                                            d: "M7.727 2.959A10 10 0 0 1 22 11.999v.9a3.7 3.7 0 0 1-6.642 2.244 4.6 4.6 0 1 1-.741-6.928A1 1 0 0 1 16.6 8.4v4.5a1.7 1.7 0 1 0 3.4 0V12a8 8 0 1 0-3.136 6.353 1 1 0 1 1 1.216 1.587A10 10 0 1 1 7.727 2.96Zm6.873 9.04a2.6 2.6 0 1 0-5.2 0 2.6 2.6 0 0 0 5.2 0Z",
                                            fill: "currentColor",
                                            fillRule: "evenodd"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "hidden sm:inline",
                                        children: "Email"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                className: "focusable flex flex-none cursor-pointer items-center justify-center gap-2 rounded-md bg-indigo-500 px-2.5 py-2 font-medium text-white shadow-lg shadow-indigo-500/10 transition selection:bg-white/30 hover:bg-indigo-500/80 hover:shadow-indigo-500/5 focus:ring-indigo-500/40 dark:bg-indigo-400 dark:text-zinc-900 dark:shadow-indigo-400/10 dark:selection:bg-zinc-900/30 dark:hover:bg-indigo-400/80 dark:hover:shadow-indigo-400/5 dark:focus:ring-indigo-400/40 sm:w-auto sm:px-3 sm:pl-2.5",
                                href: "https://github.com/raphaelchelly",
                                rel: "noreferrer",
                                target: "_blank",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                        height: "24",
                                        role: "presentation",
                                        width: "24",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            clipRule: "evenodd",
                                            d: "M12 2C6.475 2 2 6.47 2 11.988c0 4.42 2.862 8.153 6.838 9.476.5.087.687-.212.687-.474 0-.238-.013-1.024-.013-1.86C7 19.59 6.35 18.517 6.15 17.955c-.113-.287-.6-1.174-1.025-1.411-.35-.187-.85-.65-.013-.662.788-.012 1.35.724 1.538 1.024.9 1.51 2.338 1.086 2.912.824.088-.65.35-1.086.638-1.336-2.225-.25-4.55-1.111-4.55-4.931 0-1.087.387-1.986 1.025-2.685-.1-.25-.45-1.273.1-2.646 0 0 .837-.263 2.75 1.023a9.29 9.29 0 0 1 2.5-.337c.85 0 1.7.113 2.5.337 1.912-1.298 2.75-1.023 2.75-1.023.55 1.373.2 2.397.1 2.646.637.7 1.025 1.586 1.025 2.685 0 3.832-2.337 4.681-4.562 4.931.362.312.675.912.675 1.848 0 1.336-.013 2.41-.013 2.747 0 .262.188.574.688.474C19.137 20.141 22 16.395 22 11.988 22 6.47 17.525 2 12 2Z",
                                            fill: "currentColor",
                                            fillRule: "evenodd"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "hidden sm:inline",
                                        children: "GitHub"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ThemeSwitch__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex w-full justify-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mt-2 justify-center"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "content mt-12 sm:mt-24",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "mb-2 text-xl font-bold text-zinc-800 dark:text-white",
                                children: "Experiences"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                className: "mt-8",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        className: "dark:text-zinc-350 my-5 flex items-center gap-4 text-zinc-500",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                className: "link focusable font-medium text-zinc-800 dark:text-white",
                                                href: "https://www.fabrilab.net/",
                                                rel: "noreferrer",
                                                target: "_blank",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Image__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                    src: "/static/images/workxp/lockheed.jpg",
                                                    alt: "Octopia",
                                                    width: "50px",
                                                    height: "50px",
                                                    className: "rounded-md"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex min-w-0 flex-col justify-center",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                        className: "mb-1 flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "truncate font-semibold text-zinc-700 dark:text-zinc-100",
                                                                children: "Lockheed Martin"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                className: "ml-1.5 inline-block flex-none translate-y-px rounded bg-zinc-100 p-1 text-xs font-medium leading-none text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400",
                                                                children: [
                                                                    "2023",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "text-zinc-350 dark:text-zinc-550 mx-0.5",
                                                                        children: "\u2014"
                                                                    }),
                                                                    "2023"
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "flex items-center truncate",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "flex-1 truncate text-zinc-500 dark:text-zinc-400",
                                                            children: "Software Developer Intern"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        className: "dark:text-zinc-350 my-5 flex items-center gap-4 text-zinc-500",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                className: "link focusable font-medium text-zinc-800 dark:text-white",
                                                href: "https://www.linkedin.com/company/cublueprint/",
                                                rel: "noreferrer",
                                                target: "_blank",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Image__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                    src: "/static/images/workxp/cub.jpg",
                                                    alt: "Octopia",
                                                    width: "50px",
                                                    height: "50px",
                                                    className: "rounded-md"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex min-w-0 flex-col justify-center",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                        className: "mb-1 flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "truncate font-semibold text-zinc-700 dark:text-zinc-100",
                                                                children: "CU Blueprint"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                className: "ml-1.5 inline-block flex-none translate-y-px rounded bg-zinc-100 p-1 text-xs font-medium leading-none text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400",
                                                                children: [
                                                                    "2022",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "text-zinc-350 dark:text-zinc-550 mx-0.5",
                                                                        children: "\u2014"
                                                                    }),
                                                                    "2023"
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "flex items-center truncate",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "flex-1 truncate text-zinc-500 dark:text-zinc-400",
                                                            children: "Frontend Developer on the Urban Minds team"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        className: "dark:text-zinc-350 my-5 flex items-center gap-4 text-zinc-500",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                className: "link focusable font-medium text-zinc-800 dark:text-white",
                                                href: "https://www.canada.ca/en/public-services-procurement.html",
                                                rel: "noreferrer",
                                                target: "_blank",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Image__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                    src: "/static/images/workxp/pspc.jpg",
                                                    alt: "Octopia",
                                                    width: "50px",
                                                    height: "50px",
                                                    className: "rounded-md"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex min-w-0 flex-col justify-center",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                        className: "mb-1 flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "truncate font-semibold text-zinc-700 dark:text-zinc-100",
                                                                children: "Public Services and Procurement Canada"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                className: "ml-1.5 inline-block flex-none translate-y-px rounded bg-zinc-100 p-1 text-xs font-medium leading-none text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400",
                                                                children: [
                                                                    "2022",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "text-zinc-350 dark:text-zinc-550 mx-0.5",
                                                                        children: "\u2014"
                                                                    }),
                                                                    "20223"
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "flex items-center truncate",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "flex-1 truncate text-zinc-500 dark:text-zinc-400",
                                                            children: "Software Developer Intern"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8904:
/***/ ((module) => {

module.exports = require("github-slugger");

/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 7219:
/***/ ((module) => {

module.exports = require("image-size");

/***/ }),

/***/ 9793:
/***/ ((module) => {

module.exports = require("js-yaml");

/***/ }),

/***/ 8214:
/***/ ((module) => {

module.exports = require("mdx-bundler");

/***/ }),

/***/ 1162:
/***/ ((module) => {

module.exports = require("next-themes");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 4241:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/routing-items.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4956:
/***/ ((module) => {

module.exports = require("reading-time");

/***/ }),

/***/ 3614:
/***/ ((module) => {

module.exports = import("mdast-util-to-string");;

/***/ }),

/***/ 9847:
/***/ ((module) => {

module.exports = import("rehype-autolink-headings");;

/***/ }),

/***/ 1380:
/***/ ((module) => {

module.exports = import("rehype-citation");;

/***/ }),

/***/ 9521:
/***/ ((module) => {

module.exports = import("rehype-katex");;

/***/ }),

/***/ 6370:
/***/ ((module) => {

module.exports = import("rehype-preset-minify");;

/***/ }),

/***/ 483:
/***/ ((module) => {

module.exports = import("rehype-prism-plus");;

/***/ }),

/***/ 7752:
/***/ ((module) => {

module.exports = import("rehype-slug");;

/***/ }),

/***/ 1083:
/***/ ((module) => {

module.exports = import("remark-footnotes");;

/***/ }),

/***/ 6809:
/***/ ((module) => {

module.exports = import("remark-gfm");;

/***/ }),

/***/ 9832:
/***/ ((module) => {

module.exports = import("remark-math");;

/***/ }),

/***/ 6016:
/***/ ((module) => {

module.exports = import("unist-util-visit");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [895,664,233,576,831,397,271,20], () => (__webpack_exec__(4369)));
module.exports = __webpack_exports__;

})();