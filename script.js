function beforeSubmit()
{
    let outputDate = document.querySelector('.outputDate');
    let inputDate = document.querySelector('.inputDate');
    console.log(typeof inputDate.value);//string --> date (en_US)
    let formattedDate = new Date(inputDate.value).toLocaleDateString("en-US");
    outputDate.value = formattedDate;
}   