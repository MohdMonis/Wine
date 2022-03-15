gsap.set(".logo h2",{opacity:1});
gsap.set(".nmdl-lft a",{opacity:1});
gsap.timeline().from(".logo h2",{
    opacity:0,
    duration:.8,
    y:-20,
}).from(".nmdl-lft a",{
    opacity:0,
    stagger:.6,
    duration:.8,
    y:-20,
},"-=.6").from(".nmdl-rgt i",{
    opacity:0,
    duration:.8,
    y:-20,
}).from(".anipr",{
    opacity:0,
    stagger:.6,
    duration:.8,
},'-=.6').from(".aniinf",{
    opacity:0,
    duration:.8,
    stagger:.6,
    x:-150,
},'-=.6').from(".ind-left",{
    opacity:0,
    duration:.8,
    x:-30,
},'-=.5').from(".anibtmcrc",{
    opacity:0,
    duration:.8,
    x:30,
},"-=.8").from(".anibtmhd",{
    opacity:0,
    duration:.8,
    y:-20,
},"-=.8").from(".anibtmpr",{
    opacity:0,
    duration:.8,
    y:20,
},"-=.8").from(".card",{
    opacity:0,
    duration:.8,
    stagger: .2,
    y:30,
}).from(".bover i",{
    opacity:0,
    duration:.8,
})