// isNews.test.ts

const isNewsTest = require("./index.js");

describe("isNews function", () => {
    it("Javascript launched new features", () => {
        const newsString = "Javascript launched new features";
        const result = isNewsTest.isNews(newsString);
        expect(result).toBe(true);
    });

    it("Learn about new technology that just sells itself in the name of AI", () => {
        const nonNewsString =
            "Learn about new technology that just sells itself in the name of AI";
        const result = isNewsTest.isNews(nonNewsString);
        expect(result).toBe(false);
    });
});
