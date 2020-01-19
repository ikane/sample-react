
let cachedData = [];

const loadData = function () {

    $.ajax({
        url: "data.txt",
        success: function (data) {
            data = data.split('\n');
            //alert(cachedData.length);
            lines = data.map(line => `<li>${line}</li>`).join('');
            $("#contents").html(`<ul>${lines}</ul>`);
        }
    })
}


const change = function () {
    const element = $('#contents').children().first().children()[5];
    const value = parseInt($(element).text());

    $(element).text(value * 10);
}