const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let input = [];

function checkCode() {
  for (let i = 0; i < code.length; i++) {
    if (code[i] !== input[i]) {
      return false;
    }
  }
}

function init() {
  document.body.addEventListener('keydown', function(e) {
    const key = parseInt(e.detail || e.which);

    if (input.length >= 10) {
       input.shift();
       input.push(key);
    }
    else {
      input.push(key);
    }

    if ( checkCode() !== false) {
      alert('99 Lives!');
    }

  });
}
