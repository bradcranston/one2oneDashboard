//Here we're importing items we'll need. You can add other imports here.
import { data } from "./data.js";

const infoData = data.infoJSON;
const contactData = data.contactJSON;
const errorData = data.errorJSON;
const noteData = data.noteJSON;
const payData = data.payJSON;
const planData = data.planJSON;

let btn = document.getElementById("planButton")
btn.addEventListener("click", newPlan)

function newPlan() {
  // Perform the FileMaker script using the JavaScript API provided by FileMaker
window.FileMaker.PerformScript("processWebViewer", "newPlan"); 
}

function triggerFileMakerScript(rowData) {
  // Perform the FileMaker script using the JavaScript API provided by FileMaker
  if (window.FileMaker.PerformScript) {
      var scriptName = "processWebViewer"; // Replace with your script name
      var parameter = rowData; // Pass data as a parameter to your script

      window.FileMaker.PerformScript(scriptName, parameter); // Use window.FileMaker.PerformScript
  } else {
      console.error("performFileMakerScript() is not available.");
  }
}

//INFO FUNCTIONS
function createListItemsInfo() {
  var list = document.getElementById("infoList");


const dobLi = document.createElement("li");

const dobLabelSpan = document.createElement("span");
dobLabelSpan.innerHTML = infoData[0].type;;
dobLabelSpan.classList.add("labelLi");
const dobSpan = document.createElement("span");
dobSpan.classList.add("dataLi");
dobSpan.innerHTML = infoData[0].value;

const sexLabelSpan = document.createElement("span");
sexLabelSpan.innerHTML = infoData[7].type;;
sexLabelSpan.classList.add("labelLi2");
const sexSpan = document.createElement("span");
sexSpan.classList.add("dataLi2");
sexSpan.innerHTML = infoData[7].value;


dobLi.appendChild(dobLabelSpan);
dobLi.appendChild(dobSpan);
dobLi.appendChild(sexLabelSpan);
dobLi.appendChild(sexSpan);
list.appendChild(dobLi);



const MedicareLi = document.createElement("li");

const medLabelSpan = document.createElement("span");
medLabelSpan.innerHTML = infoData[1].type;;
medLabelSpan.classList.add("labelLi");
const medSpan = document.createElement("span");
medSpan.classList.add("dataLi");
medSpan.classList.add("fixedLi");
medSpan.innerHTML = infoData[1].value;

const medAltLabelSpan = document.createElement("span");
medAltLabelSpan.innerHTML = infoData[8].type;;
medAltLabelSpan.classList.add("labelLi2");
const medAltSpan = document.createElement("span");
medAltSpan.classList.add("dataLi2");
medAltSpan.classList.add("fixedLi");
medAltSpan.innerHTML = infoData[8].value;

MedicareLi.appendChild(medLabelSpan);
MedicareLi.appendChild(medSpan);
MedicareLi.appendChild(medAltLabelSpan);
MedicareLi.appendChild(medAltSpan);
list.appendChild(MedicareLi);



const PartLi = document.createElement("li");

const partALabelSpan = document.createElement("span");
partALabelSpan.innerHTML = infoData[2].type;;
partALabelSpan.classList.add("labelLi");
const partASpan = document.createElement("span");
partASpan.classList.add("dataLi");
partASpan.classList.add("fixedLi");
partASpan.innerHTML = infoData[2].value;

const partBLabelSpan = document.createElement("span");
partBLabelSpan.innerHTML = infoData[3].type;;
partBLabelSpan.classList.add("labelLi2");
const partBSpan = document.createElement("span");
partBSpan.classList.add("dataLi2");
partBSpan.classList.add("fixedLi");
partBSpan.innerHTML = infoData[3].value;


PartLi.appendChild(partALabelSpan);
PartLi.appendChild(partASpan);
PartLi.appendChild(partBLabelSpan);
PartLi.appendChild(partBSpan);
list.appendChild(PartLi);



const SpouseLi = document.createElement("li");

const spouseLabelSpan = document.createElement("span");
spouseLabelSpan.innerHTML = infoData[4].type;;
spouseLabelSpan.classList.add("labelLi");
const spouseSpan = document.createElement("span");
spouseSpan.innerHTML = infoData[4].value;
SpouseLi.onclick = function() {
    handleClick('spouse');
    event.stopPropagation();
};

SpouseLi.appendChild(spouseLabelSpan);
SpouseLi.appendChild(spouseSpan);

list.appendChild(SpouseLi);

const POALi = document.createElement("li");

const POALabelSpan = document.createElement("span");
POALabelSpan.innerHTML = infoData[5].type;;
POALabelSpan.classList.add("labelLi");
const POASpan = document.createElement("span");
POASpan.innerHTML = infoData[5].value;

POALi.appendChild(POALabelSpan);
POALi.appendChild(POASpan);

list.appendChild(POALi);


const statusLi = document.createElement("li");

const statusLabelSpan = document.createElement("span");
statusLabelSpan.innerHTML = infoData[6].type;;
statusLabelSpan.classList.add("labelLi");
const statusSpan = document.createElement("span");
statusSpan.innerHTML = infoData[6].value;

statusLi.appendChild(statusLabelSpan);
statusLi.appendChild(statusSpan);

list.appendChild(statusLi);


list.onclick = function() {
    handleClick('info', 'nav');
};


}
    // Create the list items when the page loads
    document.addEventListener("DOMContentLoaded", createListItemsInfo);





    //CONTACT FUNCTIONS
    function createListItemsContact() {
        var list = document.getElementById("contactList");

        contactData.forEach(function(item) {
            var symbol;
            switch (item.type) {
                case "Phone":
                    symbol = "<i style=color:#707070 class='fas fa-phone'></i>";
                    break;
                case "Email":
                    symbol = "<i style=color:#707070 class='fas fa-envelope'></i>";
                    break;
                case "Address":
                    // Use Font Awesome icon for a house
                    symbol = "<i style=color:#707070 class='fas fa-house'></i>";
                    break;
                default:
                    symbol = "•"; // Default symbol for unknown types
            }

            var li = document.createElement("li");
            var strong = document.createElement("strong");
            var contactValue = document.createElement("div");
            contactValue.classList.add("contact-value");

            strong.innerHTML = symbol;
            strong.onclick = function() {
                handleClick(item, 'act');
            };
            contactValue.onclick = function() {
                handleClick(item, 'nav');
            };

            contactValue.innerHTML = item.value;

            // Create a right-aligned text element
            var additionalText = document.createElement("span");
            additionalText.style.textAlign = "right";
            additionalText.style.paddingRight = "25px";      
            additionalText.style.flexGrow = 1; // Allow it to take up remaining space
            additionalText.innerHTML = item.additionalText || ""; // Use additionalText from the object
            additionalText.onclick = function() {
                handleClick(item, 'nav');
            };

            li.appendChild(strong);
            li.appendChild(contactValue);
            li.appendChild(additionalText);

            list.appendChild(li);
        });
    }
    // Create the list items when the page loads
    document.addEventListener("DOMContentLoaded", createListItemsContact);


    //ERROR FUNCTION
    function createListItemsError() {
      var list = document.getElementById("errorList");

      errorData.forEach(function(item) {
          var symbol;
          switch (item.type) {
              case "Error":
                  symbol = "<i style=color:#707070 class='fas fa-exclamation-triangle'></i>";
                  break;
              case "Email":
                  symbol = "<i style=color:#707070 class='fas fa-envelope'></i>";
                  break;
              case "Address":
                  // Use Font Awesome icon for a house
                  symbol = "<i style=color:#707070 class='fas fa-house'></i>";
                  break;
              default:
                  symbol = "•"; // Default symbol for unknown types
          }

          var li = document.createElement("li");
          var strong = document.createElement("strong");
          var contactValue = document.createElement("div");
          contactValue.classList.add("contact-value");

          strong.innerHTML = symbol;
          strong.onclick = function() {
              handleClick(item, 'act');
          };
          contactValue.onclick = function() {
              handleClick(item, 'nav');
          };

          contactValue.innerHTML = item.value;

          // Create a right-aligned text element
          var additionalText = document.createElement("span");
          additionalText.style.textAlign = "right";
          additionalText.style.paddingRight = "25px";      
          additionalText.style.flexGrow = 1; // Allow it to take up remaining space
          additionalText.innerHTML = item.additionalText || ""; // Use additionalText from the object
          additionalText.onclick = function() {
              handleClick(item, 'nav');
          };

          li.appendChild(strong);
          li.appendChild(contactValue);
          li.appendChild(additionalText);

          list.appendChild(li);
      });
  }


  // Create the list items when the page loads
  document.addEventListener("DOMContentLoaded", createListItemsError);




  //PLAN FUNCTION
  function createListItemsPlan() {
    var list = document.getElementById("planList");

    planData.forEach(function(item) {
        var symbol;
        switch (item.type) {
            case "PlanActive":
                symbol = "<i style=color:#88d8b0 class='fas fa-shield'></i>";
                break;
            case "PlanInactive":
              symbol = "<i style=color:#ff6f69 class='fas fa-shield'></i>";
              break;
            case "Note":
                symbol = "<i style=color:#707070 class='fas fa-note-sticky'></i>";
                break;
            default:
                symbol = "•"; // Default symbol for unknown types
        }

        var li = document.createElement("li");
        var strong = document.createElement("strong");
        var planValue = document.createElement("div");
        planValue.classList.add("plan-value");

        strong.innerHTML = symbol;
        li.onclick = function() {
            handleClick(item, 'nav');
        };

        planValue.innerHTML = item.value;

        // Create a right-aligned text element
        var additionalText = document.createElement("span");
        additionalText.style.textAlign = "right";
        additionalText.style.paddingRight = "25px";  
        additionalText.style.flexGrow = 1; // Allow it to take up remaining space
        additionalText.innerHTML = item.additionalText || ""; // Use additionalText from the object

        li.appendChild(strong);
        li.appendChild(planValue);
        li.appendChild(additionalText);

        list.appendChild(li);
    });
}

// Create the list items when the page loads
document.addEventListener("DOMContentLoaded", createListItemsPlan);


  //PAY FUNCTION
  function createListItemsPay() {
    var list = document.getElementById("payList");

    payData.forEach(function(item) {
        var symbol;
        switch (item.type) {
            case "Plan":
                symbol = "<i style=color:#707070 class='fas fa-shield'></i>";
                break;
            case "Payment":
                symbol = "<i style=color:#707070 class='fas fa-dollar-sign'></i>";
                break;
            case "Note":
                symbol = "<i style=color:#707070 class='fas fa-note-sticky'></i>";
                break;
            default:
                symbol = "•"; // Default symbol for unknown types
        }

        var li = document.createElement("li");
        var strong = document.createElement("strong");
        var planValue = document.createElement("div");
        planValue.classList.add("plan-value");

        strong.innerHTML = symbol;
        li.onclick = function() {
            handleClick(item, 'nav');
        };

        planValue.innerHTML = item.value;

        // Create a right-aligned text element
        var additionalText = document.createElement("span");
        additionalText.style.textAlign = "right";
        additionalText.style.paddingRight = "25px";  
        additionalText.style.flexGrow = 1; // Allow it to take up remaining space
        additionalText.innerHTML = item.additionalText || ""; // Use additionalText from the object

        li.appendChild(strong);
        li.appendChild(planValue);
        li.appendChild(additionalText);

        list.appendChild(li);
    });
}

// Create the list items when the page loads
document.addEventListener("DOMContentLoaded", createListItemsPay);


  //LAST CONTACT
  function createListItemsNote() {
    var list = document.getElementById("noteList");

    noteData.forEach(function(item) {
        var symbol;
        switch (item.type) {
            case "Contact":
                symbol = "<i style=color:#707070 class='fas fa-address-book'></i>";
                break;
            case "Note":
                symbol = "<i style=color:#707070 class='fas fa-note-sticky'></i>";
                break;
            default:
                symbol = "•"; // Default symbol for unknown types
        }

        var li = document.createElement("li");
        var strong = document.createElement("strong");
        var noteValue = document.createElement("div");
        noteValue.classList.add("note-value");

        strong.innerHTML = symbol;
        li.onclick = function() {
            handleClick(item, 'nav');
        };

        noteValue.innerHTML = item.value;

        // Create a right-aligned text element
        var additionalText = document.createElement("span");
        additionalText.style.textAlign = "right";
        additionalText.style.paddingRight = "25px";  
        additionalText.style.flexGrow = 1; // Allow it to take up remaining space
        additionalText.innerHTML = item.additionalText || ""; // Use additionalText from the object

        li.appendChild(strong);
        li.appendChild(noteValue);
        li.appendChild(additionalText);

        list.appendChild(li);
    });
}
// Create the list items when the page loads
document.addEventListener("DOMContentLoaded", createListItemsNote);    

// Function to handle symbol click
function handleClick(item,type) {
    let param = item;
    param.doThis = type
    triggerFileMakerScript(JSON.stringify(param)); // Call the triggerFileMakerScript function
    //console.log(item.value); // Call the triggerFileMakerScript function
};

setInterval(function () { window.FileMaker.PerformScript("OnRecordLoad_Contact",'');}, 30000);