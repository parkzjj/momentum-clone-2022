const quotes = [
    {
        quote: "最灵繁的人也看不见自己的背脊。",
        author: "非洲",
    },
    {
        quote: "最困难的事情就是认识自己。",
        author: "希腊",
    },
    {
        quote: "有勇气承担命运这才是英雄好汉。",
        author: "黑塞",
    },
    {
        quote: "与肝胆人共事，无字句处读书。",
        author: "周恩来",
    },
    {
        quote: "阅读使人充实，会谈使人敏捷，写作使人精确。",
        author: "斯宾诺莎",
    },
    {
        quote: "自知之明是最难得的知识。",
        author: "西班牙",
    },
    {
        quote: "勇气通往天堂，怯懦通往地狱。",
        author: "塞内加",
    },
    {
        quote: "有时候读书是一种巧妙地避开思考的方法。",
        author: "赫尔普斯",
    },
    {
        quote: "阅读一切好书如同和过去最杰出的人谈话。",
        author: "笛卡儿",
    },
    {
        quote: "越是没有本领的就越加自命不凡。",
        author: "邓拓",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;