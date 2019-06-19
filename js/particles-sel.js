particlesJS("particles-js", {
"particles": {
"number": {
"value": 15,
"density": {
"enable": true,
"value_area": 50
}
},
"color": {
"value": "#51dad0"
},
"shape": {
"type": "edge",
"stroke": {
"width": 5,
"color": "#51dad0"
},
"polygon": {
"nb_sides": 5
},
"image": {
"src": " ",
"width": 10,
"height": 10
}
},
"opacity": {
"value": 1,
"random": false,
"anim": {
"enable": false,
"speed": 10,
"opacity_min": 0.1,
"sync": true
}
},
"size": {
"value": 9.5,
"random": true,
"anim": {
"enable": true,
"speed": 15,
"size_min": 0.5,
"sync": true
}
},
"line_linked": {
"enable": true,
"distance": 60,
"color": "#51dad0",
"opacity": .5,
"width": 1
},
"move": {
"enable": true,
"speed": 9,
"direction": "bottom",
"random": true,
"straight": false,
"out_mode": "bounce",
"bounce": true,
"attract": {
"enable": true,
"rotateX": 1120,
"rotateY": 1700
}
}
},
"interactivity": {
"detect_on": "canvas",
"events": {
"onhover": {
"enable": true,
"mode": "grab"
},
"onclick": {
"enable": false,
"mode": "push"
},
"resize": false
},
"modes": {
"grab": {
"distance": 40,
"line_linked": {
"opacity": 1
}
},
"grab": {
"distance": 400,
"size": 4,
"duration": 2,
"opacity": 4,
"speed": 3
},
"grab": {
"distance": 200,
"duration": 0.4
},
"push": {
"particles_nb": 4
},
"remove": {
"particles_nb": 2
}
}
},
"retina_detect": true
});
var update;
update = function () {
if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {}
requestAnimationFrame(update);
};
requestAnimationFrame(update);