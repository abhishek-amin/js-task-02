
let counter = this.counter || 1;

let deletedIndex = [];

// check buttons onload
function checkButton() {
    let inputCount = document.getElementsByTagName('INPUT');
    if (inputCount.length < 5) {
        document.getElementById('sb').disabled = true;
    }
    else {
        document.getElementById('sb').disabled = false;
    }
}

// creates a new input textbox.
function addFunction() {
    
    // create div and textbox
    let div = document.createElement('DIV');
    let inp = document.createElement('INPUT');
    let add_button = document.createElement('BUTTON');
    let delete_button = document.createElement('BUTTON');

    // div attributes
    let id_div = document.createAttribute('ID'); // id for div

    // input attributes
    let type_input = document.createAttribute('TYPE'); // type for input
    let id_input = document.createAttribute('ID'); // id for input
    let att_onInput = document.createAttribute('ONINPUT'); // oninput for input

    // add button attributes
    let onclick_add = document.createAttribute('ONCLICK');
    let att_class_add = document.createAttribute('CLASS');

    // delete button attributes
    let onclick_delete = document.createAttribute('ONCLICK');
    let att_class_delete = document.createAttribute('CLASS');
    let id_delete = document.createAttribute('ID');

    att_onInput.value = 'tableInput(this)';

    if (deletedIndex.length > 0) {
        deletedIndex.sort();
        id_div.value = deletedIndex[0];
        id_delete.value = 'DEL' + deletedIndex[0];
        id_input.value = 'INP' + deletedIndex[0];

        deletedIndex.shift()
    }

    else {
        id_div.value = counter;
        id_delete.value = 'DEL' + counter;
        id_input.value = 'INP' + counter;
    }

    div.setAttributeNode(id_div);
    type_input.value = 'text';
    inp.setAttributeNode(type_input);
    inp.setAttributeNode(id_input);
    inp.setAttributeNode(att_onInput);

    // append textbox and buttons to the div
    div.appendChild(inp);
    div.appendChild(add_button);
    div.appendChild(delete_button);

    // add button
    att_class_add.value = 'addbtn';
    add_button.setAttributeNode(att_class_add);
    onclick_add.value = 'addFunction()';
    add_button.setAttributeNode(onclick_add);
    add_button.innerHTML = 'Add';

    // delete button
    att_class_delete.value = 'deleteButton';
    delete_button.setAttributeNode(att_class_delete);
    onclick_delete.value = 'deleteFunction(this)';
    delete_button.setAttributeNode(onclick_delete);
    delete_button.innerHTML = 'Delete';
    document.body.appendChild(div);
    delete_button.setAttributeNode(id_delete);
    // increament counter for next div id
    counter++;

    // enable submit button if input >= 5
    checkButton();
}

// delete button functionality
function deleteFunction(deleteButtonId) {

    checkButton();
    counter = counter - 1;
    let itemDel = document.getElementById(deleteButtonId.id);
    itemDel.parentNode.parentNode.removeChild(itemDel.parentNode);
    deletedIndex.push(deleteButtonId.id.slice(3));
}

// function to take input and display in table
function createTable() {

    let tableExists = document.getElementById('myTable');
    
    if (tableExists) {
        tableExists.remove(tableExists); 
    }

    let table = document.createElement('TABLE');
    let tableHead = document.createElement('TH');
    let tableRow = document.createElement('TR');

    let tableId = document.createAttribute('ID');

    tableId.value = 'myTable';

    table.setAttributeNode(tableId);

    table.appendChild(tableRow);
    tableRow.appendChild(tableHead);
    tableHead.innerHTML = 'Subject';

    for (let i = 0; i < counter; i++) {

        let tableRow2 = document.createElement('TR');
        let tableData = document.createElement('TD');
        table.appendChild(tableRow2);
        tableRow2.appendChild(tableData);

        let id_td = document.createAttribute('ID');
        let tdOnClick = document.createAttribute('ONCLICk');

        thisDiv = document.getElementById(i.toString());
        thisDivId = thisDiv.id;

        if (thisDiv) {
            id_td.value = 'TD' + thisDivId;
            tableData.setAttributeNode(id_td);
        }

        tdOnClick.value = "changeTd(this)";
        tableData.setAttributeNode(tdOnClick);
        tableData.setAttribute('placeholder', 'please enter something.');

        let item = document.getElementById(i.toString()).firstElementChild.value;
        tableData.innerHTML = item;
    }
    document.body.appendChild(table);
}

let text;

// alters tabledata according to input
function tableInput (inputElement) {
    let tableExists = document.getElementById('myTable');

    if (tableExists) {
        let changeInText = document.getElementById(inputElement.id).value;
        id_targetTD = 'TD' + inputElement.id.slice(3);
        document.getElementById(id_targetTD).innerHTML = changeInText;
    }
}

// function to change td to texbox and reverse
function changeTd (tempTd) {
    console.log('clicked');
    if (tempTd.firstElementChild) {
        tempTd.textContent = text;
    }
    else {
        this.text = tempTd.textContent;
        let tdInput = document.createElement('INPUT');
        tdInput.setAttribute('oninput', 'reverseInputChange(this)');
        tdInput.setAttribute('id', 'reverseInp');
        tdInput.setAttribute('onclick', 'event.stopPropagation()');
        tdInput.value = tempTd.textContent;
        tempTd.innerHTML = '';
        tempTd.appendChild(tdInput);
        tdInput.focus();

        tdInput.onblur = function () {
            console.log('blur');
            tempTd.removeChild(tdInput);
            tempTd.textContent = text || tdInput.value;
            console.log('TD value: ' + tempTd.textContent);
        };
    }
    // checkEmpty();
}

// alter inputdiv from tabledata input
function reverseInputChange(inputTemp) {
    tempID = inputTemp.parentNode.id;
    let changeInText = document.getElementById(inputTemp.id).value;
    targetInp = 'INP' + tempID.slice(2);
    document.getElementById(targetInp).value = changeInText;
}

// function checkEmpty() {
//     let temp = document.getElementsByTagName('TD');
//     if (temp.textContent == '') {
//         temp.innerHTML = this.text;
//     }
// }
