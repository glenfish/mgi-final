// USAGE - uncomment the URL required below:

// posts to Form-Data APMGoldIRA list
// const formPostURL = 'https://api.form-data.com/f/6n9bwus4a5vhsex03mjym';

// posts to SendSMS list
const SMSPostURL = 'https://api.form-data.com/f/1pd5lep14spq6wv9gewxks';

// Zapier webhook
// const formPostURL = 'https://hooks.zapier.com/hooks/catch/13179157/bp9o3fl/';

// posts to test form
// const formPostURL = 'https://api.form-data.com/f/a5pbtwu6tt501nmfgff5o3g';

// posts to HeadlessForms
const formPostURL = 'https://app.headlessforms.cloud/api/v1/form-submission/OLFfTrwhT1';


var firstname = '';
var lastname = '';
var email = '';
var phone = '';
var leadSource = '';
var myIRA = '';
var ihaveira = '';
var my401 = '';
var ihave401 = '';
var form = document.getElementById('myForm');
var submitButton = document.getElementById('mySubmit');
var submitButton2 = document.getElementById('mySubmit2');
var checkBoxes = document.getElementById('checkboxes');
var smsBox = document.getElementById('sms-box');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Disable the submit button
    submitButton.setAttribute('disabled', 'disabled');

    // Change the "Submit" text
    // submitButton.style.display = "none";
    // submitButton.style.backgroundColor = '#333';
    
    alert('A code was sent to your mobile phone for verification. Please enter it and click the button ENTER CODE.');
    
    checkBoxes.classList.add('hide');
    smsBox.classList.remove('hide');
    //hide old button
    submitButton.classList.add('hide');
    //show new button
    submitButton2.classList.remove('hide');
    document.getElementById("smscode").focus();
    document.getElementById('smscode').setAttribute('required', '');
    if (document.getElementById('email').value) {
        email = document.getElementById('email').value
    };
    if (document.getElementById('phone').value) {
        phone = document.getElementById('phone').value
    };
    if (email && phone) {
        
    postSMS(email, phone)
    } else {
        alert('Please try again.');
    }
}, false);

//Validation script here

const inputs = document.querySelectorAll("input");

const patterns = {
    firstname: /.+/,
    lastname: /.+/,
    email: /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    phone: /^(?!.*911.*\d{4})((\+?1[\/ ]?)?(?![\(\. -]?555.*)\( ?[2-9][0-9]{2} ?\) ?|(\+?1[\.\/ -])?[2-9][0-9]{2}[\.\/ -]?)(?!555.?01..)([2-9][0-9]{2})[\.\/ -]?([0-9]{4})$/,
    smscode: /\d{4}$/
};

// validation function
function validate(field, regex) {
    if (regex.test(field.value)) {
        field.classList.add('valid');
        field.classList.remove('invalid');
        return true;
    } else {
        field.classList.add('invalid');
        return false;
    }
}

inputs.forEach(input => {
    input.addEventListener("keyup", e => {

        let isvalid = validate(e.target, patterns[e.target.attributes.name.value]);
        if (!isvalid) {
            e.target.setCustomValidity("please correct");
        } else {
            e.target.setCustomValidity("");
        }
        if (e.target.attributes.name.value == 'phone') {
            const label = document.getElementById('phone');
            if (e.target.value.length < 10) {
                e.target.classList.remove('valid');
                e.target.classList.add('invalid');
            };
        }
        if (e.target.attributes.name.value == 'email') {
            const label = document.getElementById('email');
            if (e.target.value.length < 8) {
                e.target.classList.remove('valid');
                e.target.classList.add('invalid');
            };
        }
        if (e.target.attributes.name.value == 'firstname') {
            const label = document.getElementById('firstname');
            if (e.target.value.length <= 1) {
                e.target.classList.remove('valid');
                e.target.classList.add('invalid');
            };
        }
        if (e.target.attributes.name.value == 'lastname') {
            const label = document.getElementById('lastname');
            if (e.target.value.length <= 1) {
                e.target.classList.remove('valid');
                e.target.classList.add('invalid');
            };
        }
    });
});




function getParams() {
    const queryString = window.location.search;
    //   console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    firstname = urlParams.get('firstname');
    lastname = urlParams.get('lastname');
    email = urlParams.get('email');
    phone = urlParams.get('phone');
    myIRA = urlParams.get('myIRA');
    my401 = urlParams.get('my401');
    document.getElementById('firstname').value = firstname;
    document.getElementById('lastname').value = lastname;
    document.getElementById('email').value = email;
    document.getElementById('phone').value = phone;
    if (urlParams.get('ls')) {
        leadSource = urlParams.get('ls');
    } else {
        leadSource = 'homepage'
    }
    console.log(leadSource);
    if (myIRA == 'yes') {
        document.getElementById('i-have-ira').checked = true;
    } else {
        document.getElementById('i-have-ira').checked = false;
    }

    if (my401 == 'yes') {
        document.getElementById('i-have-401').checked = true;
    } else {
        document.getElementById('i-have-401').checked = false;

    }
}
function postSMS(email, phone) {
    
    var xhr = new XMLHttpRequest();
    const yourUrl = SMSPostURL;

    // ------- post mechanism to send to SendSMS list
        xhr.open("POST", yourUrl, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({
        email: email,
        phone: phone
        }));
    // ------- end post mechanism to send to SendSMS list



};

    function postToForm(firstname, lastname, email, phone, leadSource, myIRA, my401) {
        // set url params for thankyou page
        var thankyouPage = 'https://mygoldira.us/confirmation/';
        // var thankyouPage = 'https://mygoldira.netlify.app/confirmation/';
        var thankyouPageLink = thankyouPage + '?ls=' + leadSource + '&firstname=' + firstname + '&lastname=' + lastname + '&email=' + email + '&phone=' + phone + '&myIRA=' + myIRA + '&my401=' + my401;
        // send data to form handler
        var xhr = new XMLHttpRequest();
        const yourUrl = formPostURL;

        // ------- post mechanism to send to SendSMS list
        // xhr.open("POST", yourUrl, true);
        // xhr.setRequestHeader('Content-Type', 'application/json');
        // xhr.send(JSON.stringify({
        //    email: email,
        //    phone: phone
        // }));
        // ------- end post mechanism to send to SendSMS list

        // ------- post mechanism to send to APMGoldIRA list

        xhr.open("POST", yourUrl, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({
            email: email,
            phone: phone,
            firstname: firstname,
            lastname: lastname,
            myIRA: myIRA,
            my401: my401,
            leadSource: leadSource

        }));

        xhr.onreadystatechange = function() {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                // setTimeout(function() {window.location.href = "https://MyGoldIRA.us/confirmation"}, 1000);
                window.location.href = thankyouPageLink;
            }
        }

    };



function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function sendTheFormData() {

            // setTimeout(function() {window.location.href = "https://MyGoldIRA.us/confirmation"}, 1000);
            // display the popover form to collect the code 5190
            // var smsCode = prompt("We sent you a code to your mobile phone. Please enter it below to proceed ...");
            
            
                // send the main form data
                if (document.getElementById('firstname').value) {
                    firstname = document.getElementById('firstname').value
                };
                if (document.getElementById('lastname').value) {
                    lastname = document.getElementById('lastname').value
                };
                if (document.getElementById('email').value) {
                    email = document.getElementById('email').value
                };
                if (document.getElementById('phone').value) {
                    phone = document.getElementById('phone').value
                };
                if (document.getElementById('i-have-ira').checked) {
                    ihaveira = 'on';
                    myIRA = 'yes';
                } else {
                    ihaveira = 'off';
                    myIRA = 'no';
                }
            
                if (document.getElementById('i-have-401').checked) {
                    ihave401 = 'on';
                    my401 = 'yes';
                } else {
                    ihave401 = 'off';
                    my401 = 'no';
                }
                submitButton.innerHTML = 'Success! Please Wait ...';
                postToForm(capitalizeFirstLetter(firstname), capitalizeFirstLetter(lastname), email, phone, leadSource, myIRA, my401);



}




function validateSMS() {
    let smsCode = document.getElementById('smscode').value;
    if (smsCode == '5190') {

        // if the value is correct, send form data
        // update message on submit button
        submitButton.innerHTML = 'Success! Please Wait ...';
        sendTheFormData();
    } else {
    // submitButton.innerHTML = 'ERROR!';
    alert('Please try again.')
    }
 
}





    
