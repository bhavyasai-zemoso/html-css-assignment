function openPage(pageName,element){
    var i,tabcontent,tablinks;
    tabcontent=document.getElementsByClassName("tabcontent");
    for(i=0;i<tabcontent.length;i++){
        tabcontent[i].style.display="none";
    }
    tablinks=document.getElementsByClassName("tablink");
    for(i=0;i<tablinks.length;i++){
        tablinks[i].style.backgroundColor="lightgreen";
        tablinks[i].style.color="black";
        tablinks[i].style.borderStyle="solid";
        tablinks[i].style.borderColor="black";
        tablinks[i].style.outline="none";


    }
    document.getElementById(pageName).style.display="block";
    element.style.backgroundColor= "white";
    element.style.color="black";
    element.style.outline="none";
}


function alertFunction() {
    var name=document.getElementById('fname').value;
  alert("Dear "+name+" your details are saved");
  form.reset();
}
