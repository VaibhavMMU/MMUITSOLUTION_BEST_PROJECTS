function form_validation() {

    // define all variables which store form data
    const error = [];
    returnval = true;
    let hobby = false;

    // checkbox is checked or not
    for (k = 0; k < document.getElementsByName("hobby[]").length; k++) {
        if (document.getElementsByName("hobby[]")[k].checked) {
            hobby = true;
            break;
        }
    }

    // check Validation for form
    if (document.forms.empForm.ename.value == "" || document.forms.empForm.ename.value == null) {
        error.push("This employee name is empty please insert some data.");
        document.getElementById("ename").style.border = "1px solid red";
        returnval = false;
    } else if (!/^[A-Za-z\s]+$/.test(document.forms.empForm.ename.value)) {
        error.push("Only alphabets and whitespace are allowed in employee field.");
        returnval = false;
    }else{
        document.getElementById("ename").style.border = "1px solid rgb(168, 166, 166);";
    }

    if (document.forms.empForm.email.value == "" || document.forms.empForm.email.value == null) {
        error.push("This employee email is empty please insert some data.");
        returnval = false;
    } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(document.forms.empForm.email.value)) {
        error.push("Email is not valid please enter valid email.");
        returnval = false;
    }

    if (document.forms.empForm.salary.value == "" || document.forms.empForm.salary.value==null) {
        error.push("This employee salary is empty please insert some data.");
        returnval = false;
    } else if (!/^[0-9]+$/.test(document.forms.empForm.salary.value)) {
        error.push("Only numeric value is allowed in salary.");
        returnval = false;
    } else if ((document.forms.empForm.salary.value.length) >= 7) {
        error.push("Enter Salary value is less then 6 character.");
        returnval = false;
    }

    if (document.forms.empForm.department.value == "" || document.forms.empForm.department.value == null) {
        error.push("This employee department is empty please select any one.");
        returnval = false;
    }

    if (document.forms.empForm.lang.value == "" || document.forms.empForm.lang.value == null) {
        error.push("Please select any language.");
        returnval = false;
    }


    if ((document.forms.empForm.uploadfile.value == "" || document.forms.empForm.uploadfile.value == null) && document.forms.empForm.eid.value == "") {
        error.push("Please select your profile picture.");
        returnval = false;
    } else if (document.forms.empForm.uploadfile.value) {
        if (!/(\.jpg|\.jpeg|\.png|\.gif)$/i.test(document.forms.empForm.uploadfile.value)) {
            error.push("Only jpeg,jpg,png,gif,bmp types files allowed");
            returnval = false;
        }
    }

    if (document.forms.empForm.description.value == "" || document.forms.empForm.description.value == null) {
        error.push("Please enter some description.");
        returnval = false;
    }

    if (document.forms.empForm.joiningdate.value == "" || document.forms.empForm.joiningdate.value == null) {
        error.push("Please select joining date.");
        returnval = false;
    }

    if (!hobby) {
        error.push("Please select atleast one hobby.");
        returnval = false;
    }

    if (error != '' && returnval == false) {
        let list = "";
        for (let i = 0; i < error.length; i++) {
            list += "<li>" + error[i] + "</li>";
        }
        document.getElementById("formerror").innerHTML = list;
        document.documentElement.scrollTop = 0;
    }
    return returnval;
}