particlesJS("particles-js", {
"particles": {
"number": {
"value": 50,
"density": {
"enable": false,
"value_area": 50
}
},
"color": {
"value": "#51dad0"
},
"shape": {
"type": "edge",
"stroke": {
"width": 0,
"color": "#51dad0"
},
"polygon": {
"nb_sides": 5
},
"image": {
"src": " ",
"width": 100,
"height": 100
}
},
"opacity": {
"value": 1,
"random": false,
"anim": {
"enable": false,
"speed": 5,
"opacity_min": 0.1,
"sync": false
}
},
"size": {
"value": 7.5,
"random": true,
"anim": {
"enable": false,
"speed": 150,
"size_min": 0.1,
"sync": true
}
},
"line_linked": {
"enable": true,
"distance": 200,
"color": "#51dad0",
"opacity": .5,
"width": 1
},
"move": {
"enable": true,
"speed": 10,
"direction": "none",
"random": true,
"straight": false,
"out_mode": "out",
"bounce": true,
"attract": {
"enable": true,
"rotateX": 1700,
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
"size": 40,
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