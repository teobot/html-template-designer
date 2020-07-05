var main = new Vue({
    el: '#main',
    data: {
        title: "",
        desc: "",
        keywords: "",
        author: "",
        langAttribute: "",
        viewport: false,
        charset: false,
        HTML5doctype: false,
        comments: false,
        styleFrameworks: [{
                title: "Materialize",
                cssComment: `<!-- Compiled and minified CSS -->`,
                cssLink: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">`,
                jsComment: `<!-- Compiled and minified JavaScript -->`,
                jsLink: `<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>`
            },
            {
                title: "Bootstrap",
                cssComment: `<!-- Compiled and minified CSS -->`,
                cssLink: `<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">`,
                jsComment: `<!-- Compiled and minified JavaScript -->`,
                jsLink: `<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>`
            }
        ],
        selectedStyling: null,
        jsScripts: [{
            title: "Jquery",
            link: `<script src="https://code.jquery.com/jquery-3.5.1.js"></script>`
        }, {
            title: "Vuejs",
            link: `<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>`
        }, {
            title: "Popper Js",
            link: `<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>`
        }],
        selectedJavascript: [],
    },
    created() {

    },
    methods: {

    },
    computed: {
        htmlCode: function() {
            var hr = "";
            if (this.HTML5doctype) {
                hr += "<!doctype html>\n";
            }
            if (this.langAttribute) {
                hr += `<html lang="${this.langAttribute}">\n`;
            } else {
                hr += "<html>\n";
            }

            // Header Area
            hr += "\t<head>\n";
            if (this.charset) {
                hr += `\t\t<meta charset="UTF-8">\n`;
            }
            hr += `\t\t<title>${this.title}</title>\n`;
            hr += `\t\t<meta name="description" content="${this.desc}">\n`;
            hr += `\t\t<meta name="keywords" content="${this.keywords}">\n`;
            hr += `\t\t<meta name="author" content="${this.author}">\n`;
            if (this.viewport) {
                hr += `\t\t<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">\n`;
            }
            if (this.selectedStyling) {
                if (this.comments) {
                    hr += `\t\t${this.selectedStyling.cssComment}\n`;
                }
                hr += `\t\t${this.selectedStyling.cssLink}\n`;
            }
            hr += "\t</head>\n\n";

            // Body Area
            hr += "\t<body>\n";
            hr += " \n";
            if (this.selectedStyling) {
                if (this.comments) {
                    hr += `\t\t${this.selectedStyling.jsComment}\n`;
                }
                hr += `\t\t${this.selectedStyling.jsLink}\n`;
            }
            if (this.selectedJavascript) {
                this.selectedJavascript.forEach(element => {
                    hr += `\t\t${element.link}\n`;
                });
            }
            hr += "\t</body>\n\n";

            // Footer Area
            hr += "\t<footer>\n";
            hr += " \n";
            hr += "\t</footer>\n";

            hr += "</html>";
            return hr;
        }
    }
});


$(document).ready(function() {
    $('select').formSelect();
});