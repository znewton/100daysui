var daysCompleted = 4;
var currentDay = 0;

document.addEventListener('DOMContentLoaded', function (e) {
    var i = 0;
    while (i <= daysCompleted) {
        var option = document.createElement('option');
        option.setAttribute('value', i);
        option.innerHTML = i;
        document.getElementById('view-select').appendChild(option);
        i++;
    }

    if(!window.location.hash) {
        setView(0);
        changeView(0);
    } else {
        changeView(parseInt(window.location.hash.replace('#', '')));
    }
});

window.addEventListener('hashchange', function(){
    var hashVal = parseInt(window.location.hash.replace('#',''));
    changeView(hashVal);
});

function includeHTML(element,file) {
    element.innerHTML = '<div class="loading"></div>';
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            element.innerHTML = this.responseText;
            var script;
            if(script = document.getElementById('daily-script')){
                xhttp2 = new XMLHttpRequest();
                xhttp2.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        eval(this.responseText);
                    }
                };
                xhttp2.open("GET", 'scripts/day'+currentDay+'.js', true);
                xhttp2.send();
            }
        }
    };
    xhttp.open("GET", file, true);
    xhttp.send();
}

function incdecView(incdec) {
    if(incdec < 0 && currentDay > 0){
        currentDay--;
    } else if (incdec > 0 && currentDay < daysCompleted) {
        currentDay++;
    }
    window.location.hash = currentDay;
    // changeView(currentDay);
}
function setView(val) {
    currentDay = val;
    window.location.hash = currentDay;
    // changeView(currentDay);
}

function changeView(val) {
    currentDay = val != undefined ? val : currentDay;
    var view = document.getElementById('view');
    includeHTML(view, 'views/day'+currentDay+'.html');
    document.getElementById('current-style').setAttribute('href', 'styles/day'+currentDay+'.css');
    if(currentDay == 0) {
        document.getElementById('reference-image-btn').setAttribute('disabled','disabled');
        document.getElementById('dec-view').setAttribute('disabled','disabled');
    } else {
        document.getElementById('reference-image-btn').removeAttribute('disabled');
        document.getElementById('dec-view').removeAttribute('disabled');
        document.getElementById('reference-image').setAttribute('src', 'refs/day'+currentDay+'.jpg');
    }
    if (currentDay == daysCompleted) {
        document.getElementById('inc-view').setAttribute('disabled','disabled');
    } else {
        document.getElementById('inc-view').removeAttribute('disabled');
    }
    document.getElementById('view-select').value = currentDay;
}

function refImgDisp(e, disp) {
    var image_wrapper = document.getElementById('reference-image-wrapper');
    if(disp){
        image_wrapper.style = 'transform-origin: '+e.clientX/window.innerWidth*100+'% '+e.clientY/window.innerHeight*100+'% ';
        image_wrapper.classList.add('open');
        document.body.classList.add('hidden-overflow');
    } else {
        image_wrapper.classList.remove('open');
        document.body.classList.remove('hidden-overflow');
    }
}