var main = new Vue({
    el: '#main',
    data: {
        title: "",
        desc: "",
        keywords: "",
        author: "",
        viewport: false,
        charset: false,
        styleFrameworks: []
    },
    created() {

    },
    methods: {

    },
    computed: {
        htmlCode: function() {
            var hr = "";
            hr += "<html>\n";

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
                hr += `\t\t<meta name="viewport" content="width=device-width, initial-scale=1.0">\n`;
            }
            hr += "\t</head>\n\n";

            // Body Area
            hr += "\t<body>\n";
            hr += " \n";
            hr += "\t</body>\n\n";

            // Footer Area
            hr += "\t<footer>\n";
            hr += "\t</footer>\n";

            hr += "</html>";
            return hr;
        }
    }
})