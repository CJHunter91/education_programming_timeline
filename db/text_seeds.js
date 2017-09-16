use program_education;

db.text.drop();

var textData = [
{
  title: "History", 
  text: "I am a brief history of programming"
}
];

db.text.insert(textData);
