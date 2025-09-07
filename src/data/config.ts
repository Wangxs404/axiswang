const config = {
  title: "Axis Wang | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Axis Wang, a full-stack developer and AI application specialist creating innovative web applications and SaaS products. Discover my latest projects including AI4Papers, Video2PPT, View-Pair, SupaSubmit, XiaoZiShu, and Fabu. Let's build something amazing together!",
    short:
      "Discover the portfolio of Axis Wang, a full-stack developer creating AI-powered web applications and innovative SaaS products.",
  },
  keywords: [
    "Axis Wang",
    "portfolio",
    "full-stack developer",
    "AI developer",
    "web development",
    "SaaS products",
    "AI applications",
    "AI4Papers",
    "Video2PPT",
    "View-Pair",
    "SupaSubmit",
    "XiaoZiShu",
    "Fabu",
    "Next.js",
    "Python",
    "AI agent",
    "React",
    "TypeScript",
  ],
  author: "Axis Wang",
  email: "wang-xs24@mails.tsinghua.edu.cn",
  site: "https://axiswang.vercel.app",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://twitter.com/WangxsNB",
    linkedin: "https://www.linkedin.com/in/axis-wang-35708127a/",
    instagram: "https://www.instagram.com/axiswang",
    facebook: "https://www.facebook.com/profile.php?id=100067192795747",
    github: "https://github.com/axiswang",
  },
};
export { config };
