
var counter = counter || 1;

// creates a new input textbox.
function addFunction() {

    // create div and textbox
    var div = document.createElement('DIV');
    var inp = document.createElement('INPUT');
    var add_button = document.createElement('BUTTON');
    var delete_button = document.createElement('BUTTON');

    // attributes
    var id_att = document.createAttribute('ID'); // id for div
    var typ = document.createAttribute('TYPE'); // type for textbox

    // add button
    var onclick_add = document.createAttribute('ONCLICK');
    var att_class_add = document.createAttribute('CLASS');

    // delete button
    var onclick_delete = document.createAttribute('ONCLICK');
    var att_class_delete = document.createAttribute('CLASS');

    // append textbox and buttons to the div
    div.appendChild(inp);
    div.appendChild(add_button);
    div.appendChild(delete_button);

    // textbox
    id_att.value = counter;
    div.setAttributeNode(id_att);
    typ.value = 'text';
    inp.setAttributeNode(typ);

    // add button
    att_class_add.value = 'addbtn';
    add_button.setAttributeNode(att_class_add);
    onclick_add.value = 'addFunction()';
    add_button.setAttributeNode(onclick_add);
    add_button.innerHTML = 'Add';

    // delete button
    att_class_delete.value = 'deleteButton';
    delete_button.setAttributeNode(att_class_delete);
    onclick_delete.value = 'deleteFunction()';
    delete_button.setAttributeNode(onclick_delete);
    delete_button.innerHTML = 'Delete';
    document.body.appendChild(div);

    // increament counter for next div id
    counter++;
}

function deleteFunction() {
    counter = counter - 1;
    console.log('counter passing: ' + counter);
    var itemDel = document.getElementById(counter.toString());
    itemDel.remove(itemDel.parentNode);
}

// function to take input and display in table
function createTable() {
    var table = document.createElement('TABLE');
    var tableHead = document.createElement('TH');
    var tableRow = document.createElement('TR');

    table.appendChild(tableRow);
    tableRow.appendChild(tableHead);
    tableHead.innerHTML = 'Subject';

    for (var i = 0; i < counter; i++) {

        var tableRow2 = document.createElement('TR');
        var tableData = document.createElement('TD');
        table.appendChild(tableRow2);
        tableRow2.appendChild(tableData);

        var item = document.getElementById(i.toString()).firstElementChild.value;
        tableData.innerHTML = item;
    }

    document.body.appendChild(table);
}
