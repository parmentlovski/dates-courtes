// Calcul date du jour

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;
var date2 = new Date(today);

// Dates des produits
        var rayons = document.querySelectorAll('.rayons');
        var reserves = document.querySelectorAll('.reserves');

        // Pour éviter l'erreur .concat is not function 
        var array1 = [...rayons];
        var array2 = [...reserves];

        // Additionne les deux tableaux 
        var dates = array1.concat(array2);

        dates.forEach(date =>{
        
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
        date.parentNode.classList.toggle("trash");
        } 
        
        else if (Difference_In_Days > 30 && Difference_In_Days <= 60 && date.className === "reserves"){
            date.parentNode.classList.toggle("alert");
        }

        else { 
            date.parentNode.classList.remove("trash");
        }
    });