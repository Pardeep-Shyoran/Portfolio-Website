var tl = gsap.timeline()

tl.from(".nav-bar .logo h2",{
    y:-30,
    opacity:0,
    duration:1,
    delay:0.5
})

tl.from(".nav-bar .essential h4",{
    y:-30,
    opacity:0,
    duration:1,
    stagger:0.3
})

tl.from(".page1 .text h2",{
    opacity:0,
    scale:0.5,
    duration:1
})

tl.from(".page1 .text h4",{
    opacity:0,
    scale:0.5,
    duration:1
})

tl.from(".page1 .text h1",{
    opacity:0,
    scale:0.5,
    duration:1
})

tl.from(".page1 .text h3",{
    opacity:0,
    scale:0.5,
    duration:1
})