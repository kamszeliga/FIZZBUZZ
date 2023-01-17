function getValues(){
    //get values from the page
    let fizzValue = document.getElementById('fizzValue').value;
    let buzzValue = document.getElementById('buzzValue').value;
    let endValue = document.getElementById('stopValue').value;

    //parse the input (string) into numbers
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);
    endValue = parseInt(endValue);

    // verify that inputs are numbers
    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)){
        //IF YES -  generate numbers 
        let numbersArray = generateNumbers(fizzValue, buzzValue);
        //& display on page
        displayNumbers(numbersArray);
    } else {
        //IF NO - tell user they goofed, numbers only 
        Swal.fire(
            {
                icon: 'error',
                title: 'You goofed it...',
                text: 'Only integers are allowed for this input.',
            }
        );
    }
       
}

//generate the numbers within the specified value, stopping at the stop value
function generateNumbers(start, end){
    let numbers = [];

    for(let value = start; value<= end; value++){
        numbers.push(value);
    }

    return numbers; 
}

//Turns the table appearance into fizz, buzz and fizz buzz
function displayNumbers(numbersArray){
    let tableBody = document.getElementById('results');

    let tableHtml = "";

    for(let index = 0; index < numbersArray.length; index++){
        let value = numbersArray[index];
        let className = '';
        if (value % fizzValue == 0){
            className = 'fizz';
        }

        if (index % buzzValue == 0){
            className = 'buzz';
        }

        if (index % buzzValue == 0 && value % fizzValue == 0){
            className = 'fizzbuzz';
        }

        let tableRow = `<td class="${className}">${value}</td>`;

        tableHtml = tableHtml + tableRow;

        if ((index + 1) % 5 == 0) {
            tableHtml += '</tr>';
        }
    }

    tableBody.innerHTML = tableHtml;
}