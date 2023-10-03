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
newsHeadlines.forEach((headline: string) => {
    classifier.addDocument(headline, "news");
});

nonNewsHeadlines.forEach((headline: string) => {
    classifier.addDocument(headline, "not-news");
});

classifier.train();

function isNews(headline: string): boolean {
    return classifier.classify(headline) === "news";
}

module.exports = { isNews };
