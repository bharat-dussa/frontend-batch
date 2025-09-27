const number1 = 10;


function getSum(num, getTripe){
    let number1 = 11;
    console.log('number1', number1);

    console.log('getTripe', getTripe());
}   

function getTripe() {
    return "Tripe";
}
getSum(11, getTripe);