let myFullName = "Samantha Kamal"; 

// 1 Change the content of the div with class "header" to "[Your name]'s Lab 4"
// 2 Insert two paragraphs into the div with the class "content"
//  Label each paragraph with a distinct class name

  const MyHeading = document.querySelector(".header");
  myHeading.textContent= myFullName + "\'s Lab 4.\n";

  let newParagraphOne = document.createElement("p1");
  let newParagraphTwo = document.createElement("p2");

  newParagraphOne.className = "content1";
  newParagraphTwo.className = "content2";

  newParagraphOne.appendChild(newParagraphOneText);
  newParagraphTwo.appendChild(newParagraphTwoText);

  let newContentParagraphs = document.querySelector(".content");

  newContentParagraphs.appendChild(newParagraphOne);
  newContentParagraphs.appendChild(newParagraphTwo);

// 3 Into the first paragraph, insert the phrase "my name has " length of your name " characters"
  let MyNameHas = "My name has" +myFullName.length + "characters.";
  newParagraphOne.append(MyNameHas);

// 4 & 5 Into the second paragraph tag, return the 3rd character in your first name
// 6 Add a new line to your second paragraph
// 7 Return the final three characters of your last name to that new line
  let thirdCharacter = "The third character of my name is" +myFullName.charAt(2).toUpperCase();
  newParagraphTwo.append(thirdCharacter);

  newParagraphTwo.append("\n");
  let LastThree = "The last three characters in my name are" + myFullName.substring(myFullName.length - 3, myFullName.length);
  newParagraphTwo.append(LastThree);

// 8 Substring your first and last name into two separate variables
  let FName = myFullName.substring(0 , 7);
  let LName = myFullName.substring(8 , 12);
// 9 Add the total length of your first and last names together
   let NameL = FName.length + LName.length;
// 10 Display that total next to your name in your header
   document.querySelector("header").append("the length of my first and last name is:" +NameL);
