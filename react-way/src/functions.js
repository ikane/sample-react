
import React, { createElement } from 'react';
import ReactDOM from 'react-dom';

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
    //const lines = cachedData.map(line => `<li>${line}</li>`).join('');
    //$("#contents").html(`<ul>${lines}</ul>`);

    const lines = cachedData.map(line => createElement('li', null, line));
    const what = createElement('ul', null, lines);
    const where = document.getElementById('contents');

    ReactDOM.render(what, where);
}

const change = function () {
    cachedData[5] *= 10;
    updateView();
}

window.loadData = loadData;
window.change = change;