import natural from "natural";

const classifier = new natural.BayesClassifier();

const newsHeadlines = [
    ...[
        "Developer Speak provides the latest developer news and trends.",
        "Check out the most popular available software for downloads.",
        "Read more about java. Latest update about java – TechGig.",
        "Read more about android. Latest update about android – TechGig.",
        "TechGig coding challenges and contests are to assess your programming skills. Register solve challenges to get hired win big prizes.",
        "Tech Webinars - TechGig provides live knowledge sharing sessions on latest trending skills and technologies by IT industry experts through webinars.",
        "Find all kinds of latest job opportunities at Techgig's jobs section. Explore latest job opportunities in India's top companies by your job title and location. It jobs, it jobs in India, it jobs India, apply it jobs online, techgig jobs, technical jobs in India, tech jobs India, tech jobs in India, techgig job alert, software Jobs, software development jobs, software testing jobs.",
        "Code Gladiators is our annual coding competition to identify top programmers in the world. It is the largest coding contest as certified by the Guinness Book of World Records.",
        "Geek Goddess is a coding contest exclusively for women in technology and helps in identifying top women developers in India.",
        "Code Wizards is India's biggest inter-college competition designed to identify and encourage aspiring coders so that they succeed in their respective careers.",
        "Find jobs in the top startup companies hiring in India. Explore detailed startup company profiles, which talk about culture, office, jobs, and careers. Register Free to apply.",
        "TechGig Campus Ambassador is a leader with a keen interest in starting and building a community of students who are passionate about programming in their college.",
    ],
    ...[
        "Read more about Code Gladiators 2022. Latest update about Code Gladiators 2022 – TechGig.",
        "In this article, we explore several highly sought-after career options that are appealing to skilled Indian workers who are living abroad.",
        "The specific skills needed may vary depending on the position you are applying for. However, here are some general skills that are often valued at Intel:",
        "Before the Flipkart Big Billion Days Sale begins, here's some awesome news. The Apple iPhone 14 is already available at an unbelievable price on Flipkart.",
        "In this article, we'll explore the various IT positions available at Apple, giving you a glimpse into the incredible opportunities that await you at this tech.",
    ],
    ...[
        "Noida. India's Largest Tech Community | Guinness World Record Holder | 4.9 Million+ Developers",
        "| 123,593 followers on LinkedIn. India's Largest Tech Community | Guinness World Record Holder | Limca Book of Records Holder | 4.9 Million+ Developers | is a young and enthusiastic technology company, offering cutting-edge solutions to its clients using innovative technologies. We help our business partners realize their true talent and business potential using our specialized skill assessment, community engagement, and recruitment solutions.",
    ],
];

const nonNewsHeadlines = [
    ...[
        "Deep dive into some online exclusive tech read that keeps you updated on the go.",
        "Learn Practice Programming with Coding Tutorials and Practice Problems. Learn to code and master your skills.",
        "Login : Largest Tech Community | Hackathons, Programming & Coding Challenges | TechGig.com",
    ],
    ...[
        "As a member of the team, you'll be part of either the Development group or the FSD/Data Analytics team, tasked with the responsibility of delivering technical.",
        "This article shows a rundown of how to choose the best dev platform if you wish to become a software developer.",
        "There are numerous free resources available for those looking to master the Python programming language. You can find free Python books online that cover a.",
        "The extreme versatility enables Java development services to create a variety of different projects. Here are just a few of the numerous applications to be aware of.",
        "If you want to work with Facebook, here are the most frequently used programming languages that the social media giant employs. Using these coding languages, Facebook developers are working to improve the platform's services.",
        "In this web story, we will review five of the most commonly used programming languages in security and highlight the main benefits of each.",
        "Datastax's 2022 State of the Data Race report reveals that developers, particularly those who consider themselves as early adopters and knowledge sources within.",
        "One of the most promising applications for LLMs is assisting programmers. In March 2023, GitHub announced the launch of Copilot X, leveraging OpenAI APIs to.",
        "Start building on Google Cloud with $300 in free credits and free usage of 20+ products like Compute Engine and Cloud Storage, up to monthly limits.",
    ],
    ...[
        "Your privacy is utmost important to us. Our privacy statement explains a legal requirement to protect our client's privacy to trust us when they use our services.",
        "Our terms and conditions include, a license specifying how the website may be used, a disclaimer of liability, copyright, and rules on user-contributed content.",
        "Participate in skill tests and code challenges, improve your score & ace the leaderboard",
        "Explore TechGig Institution now, learn programming and prepare yourself for interviews with vast collection of interview questions & skill tests from top companies.",
        "Create Your Tech Profile to get the benefits of connecting with top developers & get employer's recognition. Get shortlisted on the merit of your tech profile.",
        "Perfect practice is the only way to get you closer to expert status, participate in skill tests and code challenges, and improve your score to have a successful career.",
        "A coding environment is the platform or software that developers use to write and test their code. Coding editors are simple text editors that have features specifically designed for coding, such as syntax highlighting and code completion. Some popular code editors include Sublime Text, Atom, and Notepad++.",
        "The easiest way to try your hand at programming for any platform is to start with a scripting or macro program. Register yourself at TechGig as it is free and simple.",
    ],
];

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
