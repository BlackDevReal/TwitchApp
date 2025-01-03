const unzip = require("unzip-crx");
unzip("extensions/7tv/7tv.crx", "extensions/7tv", (err) => {
    console.log("Successfully unzipped your crx file..");
});