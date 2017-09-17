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
  pros: ["easy to use and learn", "object-oriented"],
  cons: ["not as efficent as other languages"],
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
  pros: ["Open source (free to use)", "Relatively efficent", "Works on most platforms."],
  cons: ["Security due to being open-source anyone can view the source code and find weaknesses", "Not suitable for larger applications due to lack of modularity."],
  popularity: [{
    1996: 100
  }],
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
  pros: ["Small clean language", "Very powerful", "Can be used in C++ programs"],
  cons: ["Difficult to learn", "Code can get messy quickly", "Needs to be compiled"],
  popularity: {
    1996: 100
  },
  documentation: ["http://devdocs.io/c/"],
  links: [""],
  icon: "https://upload.wikimedia.org/wikipedia/commons/3/35/The_C_Programming_Language_logo.svg"
},
{
  id: 4,
  language: "Java",
  author: "James Gosling",
  description: "Java is a general-purpose computer programming language that is concurrent, class-based, object-oriented,[14] and specifically designed to have as few implementation dependencies as possible. It is intended to let application developers 'write once, run anywhere' (WORA), meaning that compiled Java code can run on all platforms that support Java without the need for recompilation. Java is one of the most popular programming language used worldwide. The Java language is a key pillar in Android, an open source mobile operating system.",
  year: "1995",
  usedBy: "Android OS/apps",
  usedFor: "Network Programming ,web application development, software development, Graphical User Interface development",
  exampleCode: "public class HelloWorld {\n\n         public static void main(String[] args) {\n            // Prints 'Hello, World' to the terminal window.\n             System.out.println('Hello, World');\n         }\n     }",
  pros: ["Currently most used language", "Used for Android app development", "Object Oriented", "Comprehensive Documentation"],
  cons: ["Can't use multiple inheritence" ,"Though garbage collection is automatic, it’s sometimes poorly or inefficiently done in Java." ,"Primitive types don't inherit from Object."],
  popularity: {
    1996: 100
  },
  documentation: ["http://docs.oracle.com/javase/8/docs/", 'http://docs.oracle.com/javase/8/docs/api/'],
  links: ["https://www.tutorialspoint.com/java/java_basic_syntax.htm", "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/index.html"],
  icon: "http://www.nictsolutions.com/assets/images/ja.png"
},
{
  id: 5,
  language: "Swift",
  author: "Chris Lattner and Apple Inc.",
  description: "Swift is a general-purpose, multi-paradigm, compiled programming language developed by Apple Inc. for iOS, macOS, watchOS, tvOS, and Linux. Swift is designed to work with Apple's Cocoa and Cocoa Touch frameworks and the large body of existing Objective-C (ObjC) code written for Apple products. Initially a proprietary language, version 2.2 was made open-source software under the Apache License 2.0 on December 3, 2015, for Apple's platforms and Linux.",
  year: "2014",
  usedBy: "Apple",
  usedFor: "iOS apps",
  exampleCode: "print('Hello, World!')",
  pros: ["If you know Objective C, it should be easier to pick up", "Can build iOS apps","Swift has a 'playground' that allows programmers to instantly see the result of code", "Open Source","Easier to learn than many other languages"],
  cons: ["Still in it's infancy so still has many issues that need to be addressed","Few IDEs available","Lack of support for apps less that iOS7"],
  popularity: {
    1996: 100
  },
  documentation: ["https://swift.org/documentation/", "https://developer.apple.com/library/content/documentation/Swift/Conceptual/Swift_Programming_Language/index.html#//apple_ref/doc/uid/TP40014097-CH3-ID0"],
  links: ["https://www.raywenderlich.com/143771/swift-tutorial-part-1-expressions-variables-constants", "http://www.skilledup.com/articles/6-best-free-swift-tutorials-programming-new-language"],
  icon: "https://developer.apple.com/swift/images/swift-og.png"
},
{
  id: 6,
  language: "Objective C",
  author: "Brad Cox and Tom Love",
  description: "Objective-C is a general-purpose, object-oriented programming language that adds Smalltalk-style messaging to the C programming language. It was the main programming language used by Apple for the OS X and iOS operating systems, and their respective application programming interfaces (APIs) Cocoa and Cocoa Touch prior to the introduction of Swift.",
  year: "1983",
  usedBy: "Apple",
  usedFor: "Apple Programming",
  exampleCode: "// First program example \n #import <Foundation/Foundation.h> \n \n int main (int argc, const char * argv[]) \n  { \n           NSAutoreleasePool *pool = [[NSAutoreleasePool alloc] init]; \n           NSLog (@'Hello, World!');\n           [pool drain];\n           return 0;\n  }",
  pros: ["Object Oriented Language", "Objective-C incorporates C so you get all the benefits of C when working within Objective-C", "You can program for Mac and iOS" ],
  cons: ["There will be aspects of learning C at the same time.", "Big learning curve", ],
  popularity: {
    1996: 100
  },
  documentation: ["https://developer.apple.com/documentation/objectivec?language=objc"],
  links: ["https://gist.github.com/imagin4ry/7024758", "https://www.tutorialspoint.com/objective_c/objective_c_useful_resources.htm"],
  icon: "http://sankeysolutions.com/wp-content/uploads/2017/02/Objective-C.png"
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
  pros: ["Can be statically or dynamically typed", "Similiar syntax to other C languages", "Fully integrated with the .NET library."],
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
  popularity: [
    {2004: 7.7},
    {2005: 7.4},
    {2006: 7.9},
    {2007: 7.6},
    {2008: 7.3},
    {2009: 7.0},
    {2010: 6.2},
    {2011: 6.7},
    {2012: 6.5},
    {2013: 6.9},
    {2014: 7.1},
    {2015: 7.2},
    {2016: 7.7},
    {2017: 8.0},
  ],
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