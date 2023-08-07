"use strict";
exports.id = 576;
exports.ids = [576];
exports.modules = {

/***/ 1576:
/***/ ((module) => {


const siteMetadata = {
    title: "Riyan Ahmed - Software Developer",
    author: "Riyan Ahmed",
    headerTitle: "Riyan Ahmed",
    description: "Software Developer",
    language: "en-us",
    theme: "system",
    siteUrl: "https://www.riyanahmed.com/",
    siteRepo: "https://github.com/riyanahmed/riyan_www",
    siteLogo: "/static/images/riyan-logo.png",
    image: "/static/images/avatar.jpg",
    socialBanner: "/static/images/twitter-card.png",
    email: "riyan.ahmed@outlook.com",
    github: "https://github.com/riyanah",
    twitter: "https://twitter.com/",
    linkedin: "https://www.linkedin.com/in/riyanahmed",
    locale: "en-US",
    analytics: {
        // If you want to use an analytics provider you have to add it to the
        // content security policy in the `next.config.js` file.
        // supports plausible, simpleAnalytics, umami or googleAnalytics
        plausibleDataDomain: "",
        simpleAnalytics: false,
        umamiWebsiteId: "",
        googleAnalyticsId: "G-YBS6CTTW3S"
    },
    newsletter: {
        // supports mailchimp, buttondown, convertkit, klaviyo, revue
        // Please add your .env file and modify it according to your selection
        provider: "buttondown"
    },
    comment: {
        // If you want to use a commenting system other than giscus you have to add it to the
        // content security policy in the `next.config.js` file.
        // Select a provider and use the environment variables associated to it
        // https://vercel.com/docs/environment-variables
        provider: "",
        giscusConfig: {
            // Visit the link below, and follow the steps in the 'configuration' section
            // https://giscus.app/
            repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
            repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
            category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
            categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
            mapping: "pathname",
            reactions: "1",
            // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
            metadata: "0",
            // theme example: light, dark, dark_dimmed, dark_high_contrast
            // transparent_dark, preferred_color_scheme, custom
            theme: "light",
            // Place the comment box above the comments. options: bottom, top
            inputPosition: "bottom",
            // Choose the language giscus will be displayed in. options: en, es, zh-CN, zh-TW, ko, ja etc
            lang: "en",
            // theme when dark mode
            darkTheme: "transparent_dark",
            // If the theme option above is set to 'custom`
            // please provide a link below to your custom theme css file.
            // example: https://giscus.app/themes/custom_example.css
            themeURL: ""
        },
        utterancesConfig: {
            // Visit the link below, and follow the steps in the 'configuration' section
            // https://utteranc.es/
            repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO,
            issueTerm: "",
            label: "",
            // theme example: github-light, github-dark, preferred-color-scheme
            // github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light
            theme: "",
            // theme when dark mode
            darkTheme: ""
        },
        disqusConfig: {
            // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
            shortname: process.env.NEXT_PUBLIC_DISQUS_SHORTNAME
        }
    }
};
module.exports = siteMetadata;


/***/ })

};
;