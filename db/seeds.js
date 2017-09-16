//use collection name
use program_education;

db.languages.drop();

var languageData = [
{
  id: 1,
  language: "Ruby",
  author: "matz",
  description: "Lorem Ipsum",
  year: "1995",
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
  icon: ""
},
{
  id: 2,
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
  id: 3,
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