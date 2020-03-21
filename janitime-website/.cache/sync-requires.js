const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("C:\\Users\\Mike\\Desktop\\Websites\\LambdaSchool\\janitime\\janitime-website\\src\\pages\\404.js"))),
  "component---src-pages-features-list-js": hot(preferDefault(require("C:\\Users\\Mike\\Desktop\\Websites\\LambdaSchool\\janitime\\janitime-website\\src\\pages\\features-list.js"))),
  "component---src-pages-features-js": hot(preferDefault(require("C:\\Users\\Mike\\Desktop\\Websites\\LambdaSchool\\janitime\\janitime-website\\src\\pages\\features.js"))),
  "component---src-pages-getting-started-js": hot(preferDefault(require("C:\\Users\\Mike\\Desktop\\Websites\\LambdaSchool\\janitime\\janitime-website\\src\\pages\\getting-started.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\Users\\Mike\\Desktop\\Websites\\LambdaSchool\\janitime\\janitime-website\\src\\pages\\index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("C:\\Users\\Mike\\Desktop\\Websites\\LambdaSchool\\janitime\\janitime-website\\src\\pages\\page-2.js"))),
  "component---src-pages-pricing-js": hot(preferDefault(require("C:\\Users\\Mike\\Desktop\\Websites\\LambdaSchool\\janitime\\janitime-website\\src\\pages\\pricing.js"))),
  "component---src-pages-sign-up-js": hot(preferDefault(require("C:\\Users\\Mike\\Desktop\\Websites\\LambdaSchool\\janitime\\janitime-website\\src\\pages\\sign-up.js")))
}

