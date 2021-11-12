// ONE WAY
// document.querySelector('#color').addEventListener('click', function() { alert('orange')})

// ANOTHER WAY
const btn = document.querySelector('#color').onclick = function() { alert('orange')}