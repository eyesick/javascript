function validation(){
    var x = document.forms["myform"]["Fname"].value;
    if ( x == "" ) {
    alert("field cant be empty");
    return false;
    }
}

