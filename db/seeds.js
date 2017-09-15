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
  links: ["lorem"]
}
];

//insert 
db.languages.insert(languageData);