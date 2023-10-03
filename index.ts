import natural from "natural";
import fs from "fs";

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

export default function isNews(headline: string): boolean {
    return classifier.classify(headline) === "news";
}
