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
  id: 11,
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
  id: 12,
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