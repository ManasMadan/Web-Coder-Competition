function submitClick( ){ 
    if (document.myform.MyName.value=="") {
        alert("Please Fill Out Your Name First")
    }
    else if (document.myform.MyEmail.value=="") {
        alert("Please Fill Out Your Email First")
    }
    else if(document.myform.MyMessage.value=""){
        alert("Please Fill The Message First")
    }
    else{
        alert("Thank you for your time! Your details have been submitted!,If You have a query our team will contact you soon!!!");
    }
}
