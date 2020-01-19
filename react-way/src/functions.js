
let cachedData = [];

const loadData = function () {

    $.ajax({
        url: "data.txt",
        success: function (data) {
            cachedData = data.split('\n');
            //alert(cachedData.length);
            updateView();
        }
    })
}

const updateView = function () {
    const lines = cachedData.map(line => `<li>${line}</li>`).join('');
    $("#contents").html(`<ul>${lines}</ul>`);
}

const change = function () {
    cachedData[5] *= 10;
    updateView();
}

window.loadData = loadData;
window.change = change;