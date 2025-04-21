/** @format */
let parasText = [
  "Please come visit us, we miss you so much! I know, the last time you were here we were preparing for that big get-together meal.It would be so nice to have you and your family here again.",
  "The weather has been so nice here over the past few weeks, you would love it, and we have that spare room that you helped us build a few years ago.",
  "Foil, Arms and Hogg are coming to the Schraud center for the Arts next month - maybe you could book a flight and I can get us tickets to go see some comedy. Let me know - the tickets are selling out fast.",
  "Indiana is growing bigger, with somany nice places to visit this time of year. You would love the Indianapolis Art Museum and the indianapolis Zoo. It would be great to take you on a tour of Indy.",
  "A new winery and a new brewery just opened up close by our house. We have been walking there on evenings during the week - it is very European here now. They have a wine bar and a beer garden, as well as a test kitchen - it is so enjoyable, you would love it.",
];

// Uses:
// the jQuery function, $
// .text, .html, .val,
// .append, .appendTo, .prependTo
// .before, .after



const addSmiley = (before) => {
  let paraNum = before
    ? $("#id_smileybefore").val()
    : $("#id_smileyafter").val();// addSmiley illustrates appending to the inside of an element,
  paraNum -= 1;
  let wantedParagraph = $("#letter p:eq(" + paraNum + ")");
  console.log("XXX", wantedParagraph.text());
  if (before) $("<span>&#128540;</span>").prependTo(wantedParagraph);
  else $("<span>&#128540;</span>").appendTo(wantedParagraph);// append adds to the end, prepend adds to the beginning
};



const randomfillParagraph = () => {// randomFillParagraph takes a random value from the seed array
  let rnd = Math.floor(Math.random() * parasText.length);
  let newPara = parasText[rnd];
  $("#id_freeform").val(newPara);// and uses .val to set the content of the text area
};



// Note - the entire content of the div is overridden
const titleLetter = () => {// titleLetter, see example of val, html
  // Add HTML content with selector to be added to
  // Try all techniques, uncomment and observe with inspector
  let title = $("#id_titles").val();
  let letterName = $("#id_receiverName").val();
  console.log(letterName)
  let titleStr = `${title} ${letterName}`;
  // .html(...) fills the container with the content
  $("#letter").html("<h3>" + titleStr + "</h3>");
  // .append adds to the end of the container
  // $("#letter").append("<h3>" + titleStr + "</h3>");
  // .appendTo also adds to the end of the container
  // $("<h3>" + titleStr + "</h3>").appendTo($("#letter"));
};

// Note how to get the matched set within a containing element.

function createParagraph() {
  // Make sure to insert in correct place
  let matchedSetParagraphs = $("#letter p");
  let paragraphNumber = parseInt($("#id_paragraphNumToCreate").val());
  //
 
  // get text from text area
  let paragraphContent = $("#id_freeform").val(); // Use jQuery to create a jQuery HTML object, a paragraph
  let para = $(`<p>${paragraphContent}</p>`);// create the new element with the text area content
  
  // append the new jQuery object to the selector,
  // in this case, #letter
  // note, the matched set is zero-based
  let lastPara = matchedSetParagraphs.eq(paragraphNumber - 1);
 //$("p.answer").hide()

  // add at end with appendTo,could use after last paragraph
  if (
    matchedSetParagraphs.length == 0 || // If the number is greater than the number of paragraphs,
    paragraphNumber > matchedSetParagraphs.length
  )
  
    para.appendTo($("#letter"));
    // Note that the append method adds to the inside,
    // and at the end of the matched element.
  else {
  
    lastPara.before(para); // add the new paragraph in the position indicated by the number
    //
  }
}
//creating a function to hide the paragraph //$("p.answer").hide()

function signOff() {
 
  let signoff = $("#id_signoffs").val(); // set the text content of the signoff last paragraph
  let senderName = $("#id_senderName").val();

  let lastPara = $(`<p> ${signoff}, <br>${senderName}</p>`);
  // the function Filters that last paragraph and add the new para signoff
  $("#letter p:last").after(lastPara);
}
console.log(lastPara)

//Q1: in function createparagraph what if I wanted to remove or hide an output, that I did not want, after a paragraph
//was append to the web page to display?
//Can create a function that would hide the paragraph after the selcted paragraph is appened to the webpage //$("p.paragraphName").hide(). 
//paragraphName is not a real name for the paragraph
//but an example.


 //Q2: How does the user name's append to the webpage in the title letter?
//function titleLetter contains 
//let letterName = $("#id_receiverName").val(); 
// //which is grabbing the id label of the recieverName from the html. 

//Q#3: Why is lastPara not defined when debugging with console.log?
//After lastPara is established as the entry of signoff and senderName. 
// It will be called AFTER the last paragraph in the letter is appened to the lastPara.

//Q4: How does the smiley faces append before the paragraph?
//there is a ternary operator ? $("#id_smileybefore").val()
//                         : $("#id_smileyafter").val(); 
//that the id is pulling the smileybefore value, and will only appear if that value is true.
//paraNum is created as a numerical value to help associate the number with the wantedparagraph 
//let wantedParagraph = $("#letter p:eq(" + paraNum + ")");, then the if else statment pprends the smiley face

//Q5:how does p:last target the last paragraph p element? 
// it is a filter that targets the last item of the matched set. With applied it will only target that element. 


