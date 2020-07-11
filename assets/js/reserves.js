// 1ère date => format string issu du input
var dates = document.querySelectorAll('.reserves');
dates.forEach(date => {
var dateString = date.innerHTML;
// console.log(dateString);
var dateParts = dateString.split("/");
// month is 0-based, that's why we need dataParts[1] - 1
var dateObject = new Date(+ dateParts[2], dateParts[1] - 1, + dateParts[0]);
var date1 = new Date(dateObject.toString());
// console.log(date1);
// 2ème date => date du jour
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;
// console.log(today);
var date2 = new Date(today);
// console.log(date2);
// To calculate the time difference of two dates
var Difference_In_Time = date1.getTime() - date2.getTime();
// To calculate the no. of days between two dates
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
// To display the final no. of days (result)
// console.log("Total number of days between dates  <br>" + date1 + "<br> and <br>" + date2 + " is: <br> " + Difference_In_Days);
if (Difference_In_Days <= 30) {
// console.log("oooh va jeter ton produit");
// for (let i = 0; i < lignes.length; i++) {
date.parentNode.classList.toggle("trash");
// }
} else { 
    // console.log("Tout est bon");
// for (let i = 0; i < lignes.length; i++) {
date.parentNode.classList.remove("trash");
// }
}
});