// Calcul date du jour

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;

var date2 = new Date(today);


// Dates des produits rayons
        var dates = document.querySelectorAll('.rayons');
        dates.forEach(date => {

        // Calcul date de l'input

    var dateString = date.innerHTML;

    var dateParts = dateString.split("/");
    // month is 0-based, that's why we need dataParts[1] - 1
    var dateObject = new Date(+ dateParts[2], dateParts[1] - 1, + dateParts[0]);
    var date1 = new Date(dateObject.toString());
    
    
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
        } 
        else { 
            // console.log("Tout est bon");
        // for (let i = 0; i < lignes.length; i++) {
        date.parentNode.classList.remove("trash");
        // }
        }
        });


// Dates des produits réserves
        var reserves = document.querySelectorAll('.reserves');
        reserves.forEach(date => {


        var dateString = date.innerHTML;
        // console.log(dateString);
        var dateParts = dateString.split("/");
        // month is 0-based, that's why we need dataParts[1] - 1
        var dateObject = new Date(+ dateParts[2], dateParts[1] - 1, + dateParts[0]);
        var date1 = new Date(dateObject.toString());


        // To calculate the time difference of two dates
        var Difference_In_Time = date1.getTime() - date2.getTime();
        // To calculate the no. of days between two dates
        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        // To display the final no. of days (result)

        if (Difference_In_Days <= 30) {
        // console.log("oooh va jeter ton produit");
        // for (let i = 0; i < lignes.length; i++) {
        date.parentNode.classList.toggle("trash");
        // }
        } 
        else if (Difference_In_Days > 30 && Difference_In_Days <= 60){
            date.parentNode.classList.toggle("alert");
        }
        else { 
            // console.log("Tout est bon");
        // for (let i = 0; i < lignes.length; i++) {
        date.parentNode.classList.remove("trash");
        // }
        }
        });