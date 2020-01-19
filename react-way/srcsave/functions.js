import React, { createElement } from 'react';
import ReactDOM from 'react-dom';

let cachedData = [];

const loadData = function() {
  $.ajax({
    url: 'data.txt',
    success: function(data) {
      cachedData = data.split('\n');
      
      updateView();
    }
  });
}                  

const updateView = function() {   
  //old, easy way
  //const lines = cachedData.map(line => `<li>${line}</li>`).join('');
  //$('#contents').html(`<ul>${lines}</ul>`);

  //the react way  
  //const where = document.getElementById('contents');
  const where = document.getElementById('contents');
  
  const lines = cachedData.map(line => createElement('li', null, line));
  const what = createElement('ul', null, lines);
  
  ReactDOM.render(what, where);  
}

const change = function() {
  cachedData[5] *= 10;
  updateView();
}

window.loadData = loadData;
window.change = change;