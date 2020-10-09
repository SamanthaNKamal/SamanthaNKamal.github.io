let myFullName = "Samantha Kamal"; 

// 1 Change the content of the div with class "header" to "[Your name]'s Lab 4"
// 2 Insert two paragraphs into the div with the class "content"
//  Label each paragraph with a distinct class name

  document.querySelector("header").innerHTML = myFullName + "\'s Lab 4.\n";

  var newParagraphOne = document.createElement("p1");
  var newParagraphTwo = document.createElement("p2");

  newParagraphOne.className = "content1";
  newParagraphTwo.className = "content2";

  newParagraphOne.appendChild(newParagraphOneText);
  newParagraphTwo.appendChild(newParagraphTwoText);

  var newContentParagraphs = document.querySelector(".content");

  newContentParagraphs.appendChild(newParagraphOne);
  newContentParagraphs.appendChild(newParagraphTwo);

// 3 Into the first paragraph, insert the phrase "my name has " length of your name " characters"
  var MyNameHas = "My name has" +myFullName.length + "characters.";
  newParagraphOne.append(MyNameHas);

// 4 & 5 Into the second paragraph tag, return the 3rd character in your first name
// 6 Add a new line to your second paragraph
// 7 Return the final three characters of your last name to that new line
  var thirdCharacter = "The third character of my name is" +myFullName.charAt(2).toUpperCase();
  newParagraphTwo.append(thirdCharacter);

  newParagraphTwo.append("\n");
  var LastThree = "The last three characters in my name are" + myFullName.substring(myFullName.length - 3, myFullName.length);
  newParagraphTwo.append(LastThree);

// 8 Substring your first and last name into two separate variables
  var FName = myFullName.substring(0 , 7);
  var LName = myFullName.substring(8 , 12);
// 9 Add the total length of your first and last names together
   var NameL = FName.length + LName.length;
// 10 Display that total next to your name in your header
   document.querySelector("header").append("the length of my first and last name is:" +NameL);
