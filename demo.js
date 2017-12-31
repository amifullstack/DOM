// console.dir(document);
// console.log(`URL: ${document.URL}`);
//
// // Get the domain
// console.log(`Domain:  ${document.domain}`);
//
// // title
// console.log(`Title:  ${document.title}`);
//
// // Set/Update title
// document.title = "JS-DOM";
//
// console.log(`Title Updated:  ${document.title}`);
//
// // DOCTYPE
// console.log(document.doctype);
//
// console.log(document.body);
//
// // Get All
//
// console.log(document.all);
//
// // Get all the forms
// console.log(document.forms);
//
// // Get specific from from an array
// console.log(document.forms[0]);
//
// // Get all the links
// console.log(document.links);
//
// // Get an Images
// console.log(document.images);

// ############## SELECTORS ##################

// // GetElementById
// let headerTitle = document.getElementById("header-title");
// console.log(headerTitle);
// console.log(headerTitle.textContent);
//
// const upDateTitle = () => {
//   const upDatedTitle = (headerTitle.textContent = "New Item Listener");
//   return upDatedTitle;
// };
//
// console.log(upDateTitle());

// Insert HTML tag
// let headerTitle = document.getElementById("header-title");
// headerTitle.innerHTML = '<h3>This is by innerHTML</h3>'
// let span = document.getElementsByClassName("header-span-title")
// console.log(span[0]);
// let specificSpan = span[0]
// // specificSpan.textContent = "This is by span inner textContent"
// specificSpan.innerHTML = '<h1>H1 inside span by innerHTML</h1>'

// Apply style
// headerTitle.style.backgroundColor = '#ddd';

// // get main headre applay border
//
// let mainHeader = document.getElementById("main-header")
//
// mainHeader.style.borderBottom = 'solid 3px rgb(56, 207, 134)'

// // getElementByClassName
// let items = document.getElementsByClassName("list-group-item");
//
// for (var i = 0; i < items.length; i++) {
//   console.log(items[i]);
//
//   // Get only li(item value)
//   // console.log(items[i].textContent)
//
//   // // Change the items value
//   items[i].textContent = "New Item" + i;
// }


// QuerySelector
let submitButton = document.querySelector('btn')

//Will not work
// console.log(submitButton.value)

// For that
let sbmtButton = document.querySelector('input[type="submit"]');
console.log(`Value : ${sbmtButton.value}`)

// Lets Change this
