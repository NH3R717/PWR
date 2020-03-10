/*
   • Umholtz, Tommy
   • Full Sail University
   • Web Design and Development, Bachelors of Science – Online
   • Programming for Web Applications (PWA)
   
   */

//add taco button even click listener
//This can be written in jQuery. You are switching between jQuery and vanilla JS
document.querySelector("#addBtn").addEventListener("click", function() { submitForm(); });

//array to hold local storage data
let tacoList = [];
//check if the local storage is null or empty
if (JSON.parse(localStorage.getItem('keyTaco')) != null) {
    //if it does not, save the variable to the storage values
    tacoList = JSON.parse(localStorage.getItem('keyTaco'));
}
//populate data from local storage (if any) to page upon loading
window.onload = function() {
    //save the local storage data to a new variable
    let data = JSON.parse(this.localStorage.getItem('keyTaco'));
    //loop through each item within my storage (using jQuery)
    $.each(data, function(i, item) {
        //You can use template literals here. It is a new ES6 method.
        $("#localStorageTacos").append("<article id=" +
            item.id +
            "><h4>" +
            item.name +
            "</h4><p>" +
            item.desc +
            "</p><p>" +
            item.cat +
            "<span class='gg-trash' onclick='deleteTaco(this); deleteTacoNotification();'></span>" +
            "</p></article>"
        );
    });
};

//function that captures and saves data entered for display and entry into local storage
function localStorageTacos() {
    var arrayFromStorage = JSON.parse(localStorage.getItem('keyTaco'));
    var arrayLength;
    if (arrayFromStorage == null) {
        arrayLength = 1;
    } else {
        arrayLength = arrayFromStorage.length + 1;
    }

    // add taco to page section "New Tacos"
    //You can use a template literal here also.
    $("#localStorageTacos").append("<article id=" + arrayLength + "><h4>" +
        $("#recName").val() +
        "</h4><p>" +
        $("#recDesc").val() +
        "</p><p>" +
        $("#recCat").val() +
        "<span id='trash' class='gg-trash' onclick='deleteTaco(this); deleteTacoNotification();'></span>" +
        "</p></article>"
    );

    //updated local storage data object
    let entry = {};
    entry.id = arrayLength;
    entry.name = $("#recName").val();
    entry.desc = $("#recDesc").val();
    entry.cat = $("#recCat").val();
    //add the new item to my array
    tacoList.push(entry);
    //add array to local storage as a data object
    localStorage.setItem('keyTaco', JSON.stringify(tacoList));
}

//validate that all form fields are not null or empty prior to submitting values
function submitForm() {
    if ($("#recName").val() == null || $("#recName").val() == '') {
        alert('Add Taco Name');
    } else if ($("#recDesc").val() == null || $("#recDesc").val() == '') {
        alert('Add Taco Description');
    } else if ($("#recCat").val() == null || $("#recCat").val() == '') {
        alert('Add Taco Type');
    } else {
        localStorageTacos();
        clearForm();
        addTacoNotification();
    }
}

//clear form after submitting values
//If the value is in the form you can use e.target.reset() to reset the form.
function clearForm() {
    $("#recName").val("");
    $("#recDesc").val("");
    $("#recCat").val("");
}

//delete related item from the page as well as from local storage
function deleteTaco(entry) {
    $(entry).parents('#localStorageTacos article').remove();
    let removeID = $(entry).parents('#localStorageTacos article').attr("id");
    let removedItem = JSON.parse(localStorage.getItem('keyTaco'))[removeID - 1];
    let list = JSON.parse(localStorage.getItem('keyTaco'));
    list.splice(removedItem, 1);
    localStorage.setItem('keyTaco', JSON.stringify(list));
}
//When I add a taco I do not see the notification. You would have to add this to the add function
//noty Plugin
addTacoNotification = () => {
    console.log("Taco added!")
    new Noty({
        theme: 'relax',
        type: 'success',
        text: 'Taco Added!',
    }).show();
}
//When I delete the taco I can not see the notification. You would have to add this to the delete function.
deleteTacoNotification = () => {
    console.log("button")
    new Noty({
        theme: 'relax',
        type: 'success',
        text: 'Taco Deleted!',
    }).show();
}