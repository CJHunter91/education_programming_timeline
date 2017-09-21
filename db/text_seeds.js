use program_education;

db.text.drop();

var textData = [
{
  title: "Programming Lauguages Through The Ages", 
  text: "The history of computer programming contains many types of programming languages and some of the best computer programming languages of today have evolved from them.\n"+
  "As there are a couple thousand computer programming languages, below is a basic programming language history so you have a general idea of its evolution.\n\n"+
  "Computer Programming History: Where It All Started\n\n"+
  "FORTRAN\n"+
  "One cannot successfully discuss computer programming history without mentioning the grandfather of all programming languages: FORTRAN. It stands for FORmula TRANslation and was developed by IBM in 1957, lead by John Backus. FORTRAN was mainly used for scientific purposes. Strangely enough, it is still widely used in scientific and industrial programming, despite being over 40 years old.\n\n"+
  "Computer Programming History: The Next Generation\n\n"+
  "COBOL\n"+
  "In the history years from 1959 to 1964, second generation computers were built based on transistors and printed circuits as opposed to vacuum tubes as in the prior generation. As a result, computers were much smaller and more powerful and could handle such new languages as COBOL (COmmon Business-Oriented Language). COBOL was developed by Grace Murray Hopper and its primary used was for business, finance, administrative systems and governments.\n\n"+
  "ALGOL\n"+
  "At about this time, ALGOL (ALGOrithmic Language) also hit the scene and was designed specifically for programming scientific computations. Although its development started in the 1950’s, it was formalized in the early 1960’s. ALGOLs claim to fame was that is was a more structured programming language, giving the ability to program in blocks or segments of code. Additionally, it was the first programming language to be machine independent (at this time, programming languages were tightly coupled (highly dependent) on the computer being programmed.)\n\n"+
  "Computer Programming History: The Third Generation\n\n"+
  "PASCAL\n"+
  "Around 1970, came the introduction of PASCAL. It was developed by Nicklaus Wirth and has its roots in ALGOL. Aside from being a very efficient language, PASCAL was to used teach good programming practices using structured programming and data structuring.\n\n"+
  "C\n"+
  "One of the most significant periods in computer programming history was the development of ‘C’. Its purpose was to implement the new machine-independent UNIX operating system.\n\n"+
  "BASIC\n"+
  "Around the mid-1970’s, we arrive at a language called BASIC, (Beginners All-purpose Symbolic Instruction Code.\n"+
  "The purpose of BASIC was to provide a simple general-purpose programming language that was easy for beginners to use and yet advanced enough for experts.\n\n"+
  "Computer Programming History: Object-Oriented Programming\n\n"+
  "In the early 1980’s, one of the most significant advances in programming is the introduction of Object-Oriented Programming (OOP). Up to this point, programming languages have been procedural-type programming. In very simple terms, procedural programming has one segment of data and one segment of code (instructions) that operate on that data. Object-Oriented Programming is a way of programming that deals with “Objects”. An Object contains its own data and code segment. There can be many Objects in an Object-Oriented program, each having its own function. This style compartments various tasks and makes programming very simple, flexible and maintainable.\n\n"+
  "C++\n"+
  "A major incorporation of the Object-Oriented programming style was the development of C++, an extension of the C language.\n\n"+
  "Java\n"+
  "About a decade later, Java was developed. Much of its format was derived from C and C++ but had a more simple approach.\n\n"+
  "C#\n"+
  "C# (pronounced C Sharp), was originally named Cool, which stood for “C-Like Object Oriented Language.” However, in 2000, when Microsoft made the project public, it was renamed to C# for trademark reasons. C# is intended to be a simple, modern, general-purpose, object-oriented programming language.\n\n\n"+
  "Below is a graph showing the popularity of the more commonly used languages since 2004 :"
}
];

db.text.insert(textData);
