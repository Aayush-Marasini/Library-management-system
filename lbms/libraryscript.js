function uploadImage() {
  // Get the file input element and the image element
  var fileInput = document.getElementById("fileInput");
  var profilePic = document.getElementById("profilePic");

  // Get the selected file and create a URL for it
  var file = fileInput.files[0];
  var url = URL.createObjectURL(file);

  // Set the profile picture image to the URL
  profilePic.src = url;
}
//profile pic ma dabda kheri popup aauni

function openPopup() {
  document.getElementById("myModal").style.display = "block";
}

function closePopup() {
  document.getElementById("myModal").style.display = "none";
}
// Set the ID number, name, and email values
var idNo = "001";
var name = "John Doe";
var email = "johndoe@example.com";
document.getElementById("idNo").innerHTML = idNo;
document.getElementById("name").innerHTML = name;
document.getElementById("email").innerHTML = email;

// Set the ID number, name, and email values
var idNo = "7897";
var name = "namename";
var email = "namename@gmail.com";
document.getElementById("idNo").innerHTML = idNo;
document.getElementById("name").innerHTML = name;
document.getElementById("email").innerHTML = email;

function addBook() {
  // input lini
  var bookInput = document.getElementById("book");
  var authorInput = document.getElementById("author");
  var typeInput = document.getElementById("type");
  var idInput = document.getElementById("ID");
  var bookValue = bookInput.value;
  var authorValue = authorInput.value;
  var typeValue = typeInput.value;
  var idValue= idInput.value;

  // row banauni table ma
  var table = document.getElementById("booksTable");
  var row = table.insertRow();

  // row ma insert garni data
  var bookCell = row.insertCell();
  var authorCell = row.insertCell();
  var typeCell = row.insertCell();
  bookCell.innerHTML = bookValue;
  authorCell.innerHTML = authorValue;
  typeCell.innerHTML = typeValue;

  // input lai feri khali garni
  bookInput.value = "";
  authorInput.value = "";
  typeInput.value = "";
}


//add book garni option dekauni
function addbookwindow(){
  var addddd = document.getElementById("addbook");
  addddd.style.display = "block";
}
function closepop(){
  var addddd = document.getElementById("addbook");
  addddd.style.display = "none";
}
//rent book garni option dekauni
function rentabook(){
  var rent = document.getElementById("rentBookForm")
  rent.style.display = "block";
}
function rentabookclose(){
  var rent = document.getElementById("rentBookForm")
  rent.style.display = "none";
}
// rent a book ko data


function submitrentabook() {


  // get input values
  const bookTitle = document.getElementById("bookTitle").value;
  const bookId = document.getElementById("bookId").value;
  const renterName = document.getElementById("renterName").value;
  const renterId = document.getElementById("renterId").value;

  // add rented book to database
  // code here to add the rented book to the database

  // clear form fields
  document.getElementById("bookTitle").value = "";
  document.getElementById("bookId").value = "";
  document.getElementById("renterName").value = "";
  document.getElementById("renterId").value = "";
}
//renew form dekauni nadekauni
function renewbook(){
  var renew = document.getElementById("renewbookform");
  renew.style.display = "block";
}
function renewbookclose(){
  var renew = document.getElementById("renewbookform");
  renew.style.display = "none";
}
function renewdata(){
  document.getElementById("renewForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    var bookId = document.getElementById("bookId").value;
    var bookName = document.getElementById("bookName").value;
    var studentId = document.getElementById("studentId").value;
    var studentName = document.getElementById("studentName").value;
    
    // Send the form data to the server using an AJAX request or some other method
  });
  
}