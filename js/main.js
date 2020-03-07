/*
   • Umholtz, Tommy
   • Full Sail University
   • Web Design and Development, Bachelors of Science – Online
   • Programming for Web Applications (PWA)
   
   */

//add taco button even click listener

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
        $("#localStorageTacos").append("<article id=" +
            item.id +
            "><h4>" +
            item.name +
            "</h4><p>" +
            item.desc +
            "</p><p>" +
            item.cat +
            "<span class='gg-trash' onclick='deleteTaco(this);'></span>" +
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
    $("#localStorageTacos").append("<article id=" + arrayLength + "><h4>" +
        $("#recName").val() +
        "</h4><p>" +
        $("#recDesc").val() +
        "</p><p>" +
        $("#recCat").val() +
        "<span id='trash' class='gg-trash' onclick='deleteTaco(this);'></span>" +
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
    }
}

//clear form after submitting values
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

// Noty Plugin

new Noty({
    text: 'NOTY - a dependency-free notification library!',
    animation: {
        open: 'animated bounceInRight', // Animate.css class names
        close: 'animated bounceOutRight' // Animate.css class names
    }
}).show();


// new Noty({
//     text: "Notification text"
// }).show();

// window.onload = function() {
//     $('#funkyImageContainer').noty({ text: 'NOTY - a jquery notification library!' }).show();

//     $(entry).parents('#localStorageTacos article').remove();
// };

// $('#addBtn').on('click', function (e) {
//    var n = $('.custom-container').noty({ text: 'NOTY - a jquery notification library!' });
// }

//   window.onload = $('.custom-container').noty({ text: 'NOTY - a jquery notification library!' });

// window.onload = function() {
//     $('.custom-container').noty({ text: 'NOTY - a jquery notification library!' });
//     // this.alert("let's go!");
// };

// document.querySelector("#addBtn").addEventListener("click", function() { submitForm(); });

// new Noty({
//     text: 'NOTY - a dependency-free notification library!',
//     animation: {
//         open: 'animated bounceInRight', // Animate.css class names
//         close: 'animated bounceOutRight' // Animate.css class names
//     }
// }).show();