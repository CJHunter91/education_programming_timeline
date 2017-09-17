//use collection name
use program_education;

db.languages.drop();

var languageData = [
{
  id: 1,
  language: "Ruby",
  author: "matz",
  description: "Lorem Ipsum",
  year: "1993",
  usedBy: "FreeAgent",
  usedFor: "Web applications",
  exampleCode: "puts 'hello world' ",
  pros: ["easy to use and learn"],
  cons: ["not as efficent"],
  popularity: {
    1996: 100
  },
  documentation: ["https://ruby-doc.org/core-2.4.1/"],
  links: ["lorem"],
  icon: "https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg"
},
{
  id: 2,
  language: "PHP",
  author: "Rasmus Ledorf",
  description: "PHP is a widely-used open source general-purpose scripting language that is especially suited for web development and can be embedded into HTML",
  year: "1995",
  usedBy: "Facebook, Wikipedia, Digg and Wordpress",
  usedFor: "Creating/Maintaining dynamic webpages and server-side development",
  exampleCode: "echo 'hello world'",
  pros: ["Open source (free to use), relatively efficent and works on most platforms."],
  cons: ["Security due to being open-source anyone can view the source code and find weaknesses, Not suitable for larger applications due to lack of modularity."],
  popularity: {
    1996: 100
  },
  documentation: ["http://php.net/docs.php"],
  links: [""],
  icon: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg"
},
{
  id: 3,
  language: "C",
  author: "Dennis Ritchie",
  description: "General-purpose low level language that a lot of current languages are derivatives of, created for UNIX systems",
  year: "1972",
  usedBy: "UNIX, embedded systems",
  usedFor: "Cross-platform programming, system programming, UNIX programming",
  exampleCode: "#include<stdio.h>main(){printf('Hello World');}",
  pros: ["Small clean language, very powerful, can be used in C++ programs"],
  cons: ["Difficult to learn, code can get messy quickly, needs to be compiled"],
  popularity: {
    1996: 100
  },
  documentation: ["http://devdocs.io/c/"],
  links: [""],
  icon: "https://upload.wikimedia.org/wikipedia/commons/3/35/The_C_Programming_Language_logo.svg"
},
{
  id: 4,
  language: "",
  author: "",
  description: "",
  year: "",
  usedBy: "",
  usedFor: "",
  exampleCode: " ",
  pros: [""],
  cons: [""],
  popularity: {
    1996: 100
  },
  documentation: [""],
  links: [""],
  icon: ""
},
{
  id: 5,
  language: "",
  author: "",
  description: "",
  year: "",
  usedBy: "",
  usedFor: "",
  exampleCode: " ",
  pros: [""],
  cons: [""],
  popularity: {
    1996: 100
  },
  documentation: [""],
  links: [""],
  icon: ""
},
{
  id: 6,
  language: "",
  author: "",
  description: "",
  year: "",
  usedBy: "",
  usedFor: "",
  exampleCode: " ",
  pros: [""],
  cons: [""],
  popularity: {
    1996: 100
  },
  documentation: [""],
  links: [""],
  icon: ""
},
{
  id: 7,
  language: "C#",
  author: "Anders Hejlsberg (Microsoft)",
  description: "C# is a general-purpose, object-oriented programming language developed by Microsoft.",
  year: "2000",
  usedBy: "VisualStudio, Stack Overflow",
  usedFor: "Can be used with Microsofts .NET framework and is felxible enough to be used in most areas of software development",
  exampleCode: " ",
  pros: ["Can be statically or dynamically typed, similiar syntax to other c languages, fully integrated with the .NET library."],
  cons: ["Less efficent as it is interpreted"],
  popularity: {
    1996: 100
  },
  documentation: ["https://docs.microsoft.com/en-us/dotnet/csharp/"],
  links: [""],
  icon: "https://upload.wikimedia.org/wikipedia/commons/0/0d/C_Sharp_wordmark.svg"
},
{
  id: 8,
  language: "",
  author: "",
  description: "",
  year: "",
  usedBy: "",
  usedFor: "",
  exampleCode: " ",
  pros: [""],
  cons: [""],
  popularity: {
    1996: 100
  },
  documentation: [""],
  links: [""],
  icon: ""
},
{
  id: 9,
  language: "",
  author: "",
  description: "",
  year: "",
  usedBy: "",
  usedFor: "",
  exampleCode: " ",
  pros: [""],
  cons: [""],
  popularity: {
    1996: 100
  },
  documentation: [""],
  links: [""],
  icon: ""
},
{
  id: 10,
  language: "Python",
  author: "Guido van Rossum (DropBox)",
  description: "Python is a widely used high-level programming language for general-purpose programming",
  year: "1991",
  usedBy: "NASA, Google, Wikipedia, Yahoo",
  usedFor: "Python can serve as a scripting language for web applications and with web frameworks support developers in the design and maintenance of complex applications.",
  exampleCode: "print('Hello World')",
  pros: ["says Pierre Carbonnelle:This has benefits to you and to others.It helps you think more clearly when writing programs, and it helps the others who will maintain or enhance your program.In both cases, it requires less effort to write a Python program than to write one in another language like C++ or Java. "],
  cons: ["Because it is an interpreted language, it is often many times slower than compiled languages."],
  popularity: {
    2004: 2.1,
    2005: 2.5,
    2006: 3.8,
    2007: 3.9,
    2008: 5.3,
    2009: 5.7,
    2010: 6.0,
    2011: 7.0,
    2012: 7.7,
    2013: 9.3,
    2014: 10.0,
    2015: 11.9,
    2016: 13.8,
    2017: 17.0,
  },
  documentation: ["https://www.python.org/"],
  links: ["https://en.wikipedia.org/wiki/Python_(programming_language)#Uses"],
  icon: "https://www.python.org/static/opengraph-icon-200x200.png"
},
{
  id: 11,
  language: "C++",
  author: "Bjarne Stroustrup",
  description: "C++ is a general-purpose programming language. It has imperative, object-oriented and generic programming features, while also providing facilities for low-level memory manipulation.",
  year: "1983",
  usedBy: "Adobe System, Mozilla, Google",
  usedFor: "Google Chromium, Adobe Illustrator",
  exampleCode: " ",
  pros: ["Combines the low level power of C with several layers of abstraction."],
  cons: ["C++ is extremely huge and its various features interact in horribly complex ways."],
  popularity: {
    2004: 13.6,
    2005: 12.7,
    2006: 11.3,
    2007: 10.7,
    2008: 10.6,
    2009: 10.8,
    2010: 9.0,
    2011: 8.8,
    2012: 8.6,
    2013: 8.5,
    2014: 8.0,
    2015: 7.5,
    2016: 6.9,
    2017: 6.8,
  },
  documentation: ["https://isocpp.org/"],
  links: ["https://en.wikipedia.org/wiki/C%2B%2B"],
  icon: "http://www.freeiconspng.com/uploads/c--logo-icon-0.png"
},
{
  id: 12,
  language: "JavaScript",
  author: "Brendan Eich Mozilla",
  description: "JavaScriptis a high-level, dynamic, weakly typed, object-based, multi-paradigm, and interpreted programming language",
  year: "1995",
  usedBy: "Google, Twitter, FaceBook",
  usedFor: "Uber, Slack",
  exampleCode: " console.log('Hello World')",
  pros: ["Speed, Simplicity, Versatility, Server load"],
  cons: ["Security, Reliance on End User."],
  popularity: {
    2004: 7.7,
    2005: 7.4,
    2006: 7.9,
    2007: 7.6,
    2008: 7.3,
    2009: 7.0,
    2010: 6.2,
    2011: 6.7,
    2012: 6.5,
    2013: 6.9,
    2014: 7.1,
    2015: 7.2,
    2016: 7.7,
    2017: 8.0,
  },
  documentation: ["https://developer.mozilla.org/en-US/docs/Web/JavaScript"],
  links: ["https://en.wikipedia.org/wiki/JavaScript"],
  icon: "https://cdn2.iconfinder.com/data/icons/nodejs-1/512/nodejs-512.png"
},
{
  id: 13,
  language: "",
  author: "",
  description: "",
  year: "",
  usedBy: "",
  usedFor: "",
  exampleCode: " ",
  pros: [""],
  cons: [""],
  popularity: {
    1996: 100
  },
  documentation: [""],
  links: [""],
  icon: ""
},
{
  id: 14,
  language: "",
  author: "",
  description: "",
  year: "",
  usedBy: "",
  usedFor: "",
  exampleCode: " ",
  pros: [""],
  cons: [""],
  popularity: {
    1996: 100
  },
  documentation: [""],
  links: [""],
  icon: ""
},
{
  id: 15,
  language: "",
  author: "",
  description: "",
  year: "",
  usedBy: "",
  usedFor: "",
  exampleCode: " ",
  pros: [""],
  cons: [""],
  popularity: {
    1996: 100
  },
  documentation: [""],
  links: [""],
  icon: ""
}
];

//insert 
db.languages.insert(languageData);