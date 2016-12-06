/**
 * Created by tudip on 06/12/16.
 */

function myFunction() {
    var xmlhttp ;
    var url = "Ajax.html";
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            if(validate()) {
                document.getElementById("val_id_age").style.visibility = 'hidden';
                var id = document.getElementById("id").value;
                var name = document.getElementById("name").value;
                var age = document.getElementById("age").value;
                var table = document.getElementById("myTable");
                var row = table.insertRow(1);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                cell1.innerHTML = id;
                cell2.innerHTML = name;
                cell3.innerHTML = age;
            }
            else {
                document.getElementById("val_id_age").style.visibility = 'visible';
                document.getElementById("val_id_age").innerHTML = "<b style='color: darkred;'> Please give proper Info";
            }
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
function validate(){
    if(document.getElementById("id").value > 0){
        if(parseInt(document.getElementById("age").value)){
            return 1;
        }
    }
    return 0;
}