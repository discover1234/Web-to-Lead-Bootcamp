let captchachecked = false;
function beforeSubmit(event)
{
    if(captchachecked)
    {
    let outputDate = document.querySelector('.outputDate');
    let inputDate = document.querySelector('.inputDate');
    console.log(typeof inputDate.value);//string --> date (en_US)
    let formattedDate = new Date(inputDate.value).toLocaleDateString("en-US");
    outputDate.value = formattedDate;
    }
    else
    {
        alert("PLease check the recaptcha box to submit the lead");
        event.preventDefault();
        console.log('Form submission prevented.');
        return false;
        
    }

}   

function timestamp() { var response = document.getElementById("g-recaptcha-response"); if (response == null || response.value.trim() == "") {var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);elems["ts"] = JSON.stringify(new Date().getTime());document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); } } setInterval(timestamp, 500); 

function captchasuccess()
{
    captchachecked = true;
}