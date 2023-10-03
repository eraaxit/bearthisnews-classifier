"use strict";
const natural = require("natural");
const fs = require("fs");
const classifier = new natural.BayesClassifier();
const newsHeadlines = fs
    .readFileSync("./dataset/news.txt", "utf-8")
    .split("\n");
const nonNewsHeadlines = fs
    .readFileSync("./dataset/notnews.txt", "utf-8")
    .split("\n");
// Train the classifier
newsHeadlines.forEach((headline) => {
    classifier.addDocument(headline, "news");
});
nonNewsHeadlines.forEach((headline) => {
    classifier.addDocument(headline, "not-news");
});
classifier.train();
function isNews(headline) {
    return classifier.classify(headline) === "news";
}
module.exports = { isNews };
