var audio = new Audio('audio_file.mp3');

function chBackcolor(color) {
    document.body.style.background = color;
}

function chFontFam(fontFam) {
    document.body.style.fontFamily  = fontFam;
}

function chAnimateTitle(animate) {
    if(document.getElementById("masthead-brand").style.animation != '') {
        document.getElementById("masthead-brand").style.animation = '';
    } else {
        document.getElementById("masthead-brand").style.animation = animate;
    }
}

function chAnimateText(animate) {
    if(document.getElementById("cover-heading").style.animation != '') {
        document.getElementById("cover-heading").style.animation = '';
    } else {
        document.getElementById("cover-heading").style.animation = animate;
    }
}

function chAnimateBounce(animate) {
    if(document.getElementById("bounce").style.animation != '') {
        document.getElementById("bounce").style.animation = '';
    } else {
        document.getElementById("bounce").style.animation = animate;
    }
}

function chAnimateShake(animate) {
    if(document.getElementById("shake").style.animation != '') {
        document.getElementById("shake").style.animation = '';
    } else {
        document.getElementById("shake").style.animation = animate;
    }
}

function chAnimateGrow(animate) {
    if(document.getElementById("grow").style.animation != '') {
        document.getElementById("grow").style.animation = '';
    } else {
        document.getElementById("grow").style.animation = animate;
    }
}

function colors() {
    let colorArray = [];    
  
    for(let i =0; i < 3 ; i++){
      colorArray.push(Math.floor(Math.random() * (255 - 0) + 0));
    }
    // rgb -> hex
    let color = colorArray
      .map( x => x.toString(16))
      .join('');
  
    return `#${color}`;
}
function colorPicker() {
    elements = document.getElementsByClassName('btn-light');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor= colors();
    }
}

function colorReset(){
    elements = document.getElementsByClassName('btn-light');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor= '#f8f9fa';
    }
}

function chAnimateDance() {
    audio.play();

    document.getElementById("stopBtn").style.display = 'inline-block';

    colorPicker();
    
    document.getElementById("masthead-brand").style.animation = 'spin 2s 5000';
    document.getElementById("cover-heading").style.animation = 'rainbow 5s 5000';
    document.getElementById("bounce").style.animation = 'bounce 5s 5000';
    document.getElementById("shake").style.animation = 'shake 1s 5000';
    document.getElementById("grow").style.animation = 'grow 1s 5000';
    document.body.style.animation = 'backgroundDance 1s 5000';
}

function stop() {
    document.getElementById("stopBtn").style.display = 'none';
    
    document.getElementById("masthead-brand").style.animation = 'none';
    document.getElementById("cover-heading").style.animation = 'none';
    document.getElementById("bounce").style.animation = 'none';
    document.getElementById("shake").style.animation = 'none';
    document.getElementById("grow").style.animation = 'none';
    document.body.style.animation = 'none';

    colorReset();

    audio.pause();
    audio.currentTime = 0;
}


