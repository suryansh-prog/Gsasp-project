const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});
gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    // ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});
Shery.makeMagnet(".nav" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});
gsap.from(".lef",{
    y:-130,
    duration:2,
    opacity:0,
    stagger:.5,
})
gsap.from(".mid h3",{
    y:-130,
    duration:.5,
    opacity:0,
    stagger:.5,
})
gsap.from(".nav button",{
    y:-130,
    duration:2,
    opacity:0,
    stagger:.5,
})
gsap.from(".carin",{
    x:-530,
    duration:3,
    delay:2,
    opacity:0,
    stagger:.5,
    
})
gsap.from(".card",{
    x:530,
    duration:2,
    delay:4,
    rotate:360,
    scale:0,
    stagger:.5,
    
})
gsap.from(".head .x h3",{
    x:-200,
    duration:3,
    // scale:1,
    delay:1,
    opacity:0,
    scrollTrigger:{
                trigger:'.x h3',
                scroller:'.main',
                // markers:true,
                start:'top 70%',
                end: 'top 30%',
                scrub:2
        
            }
    
})
gsap.from(".y h2",{
    x:230,
    duration:2,
    delay:1,
    // rotate:360,
    opacity:0,
    stagger:.5,
    scrollTrigger:{
        trigger:'.y h2',
        scroller:'.main',
        // markers:true,
        start:'top 70%',
        end: 'top 30%',
        scrub:2

    }

})
gsap.from(".y button",{
    x:230,
    duration:2,
    delay:2,
    // rotate:360,
    opacity:0,
    stagger:.5,
    scrollTrigger:{
        trigger:'.y button',
        scroller:'.main',
        // markers:true,
        start:'top 40%',
        end: 'top 30%',
        scrub:2

    }
})
gsap.from(".look h3",{
    x:230,
    duration:2,
    delay:2,
    // rotate:360,
    opacity:0,
    stagger:.5,
    scrollTrigger:{
        trigger:'.look h3',
        scroller:'.main',
        // markers:true,
        start:'top 90%',
        end: 'top 30%',
        scrub:2

    }
})
gsap.from(".look h2",{
    x:230,
    duration:2,
    delay:2,
    // rotate:360,
    opacity:0,
    stagger:.5,
    scrollTrigger:{
        trigger:'.look h2',
        scroller:'.main',
        // markers:true,
        start:'top 90%',
        end: 'top 30%',
        scrub:2

    }
})
gsap.from(".ice .ima",{
    x:-230,
    duration:2,
    delay:2,
    // rotate:360,
    opacity:0,
    stagger:.5,
    scrollTrigger:{
        trigger:'.ice .ima',
        scroller:'.main',
        // markers:true,
        start:'top 70%',
        end: 'top 30%',
        scrub:2

    }
},'p')
gsap.from(".samples h3",{
    x:-230,
    duration:5,
    delay:3,
    // rotate:360,
    opacity:0,
    stagger:.5,
    scrollTrigger:{
        trigger:'.ice .ima',
        scroller:'.main',
        // markers:true,
        start:'top 0%',
        end: 'top 30%',
        scrub:2

    }
})
gsap.from(".samples h2",{
    x:-230,
    duration:5,
    delay:3,
    // rotate:360,
    opacity:0,
    stagger:.5,
    scrollTrigger:{
        trigger:'.ice .ima',
        scroller:'.main',
        // markers:true,
        start:'top 10%',
        end: 'top 30%',
        scrub:2

    }
})
gsap.from(".car .imaa",{
    x:230,
    duration:2,
    delay:2,
    // rotate:360,
    opacity:0,
    stagger:.5,
    scrollTrigger:{
        trigger:'.ice .ima',
        scroller:'.main',
        // markers:true,
        start:'top 70%',
        end: 'top 30%',
        scrub:2

    }
},'p')
gsap.from(".sampless h2",{
    x:-230,
    duration:5,
    delay:3,
    // rotate:360,
    opacity:0,
    stagger:.5,
    scrollTrigger:{
        trigger:'.sampless h2',
        scroller:'.main',
        // markers:true,
        start:'top 90%',
        end: 'top 30%',
        scrub:2

    }
})
gsap.from(".sampless h3",{
    x:-230,
    duration:2,
    delay:1,
    // rotate:360,
    opacity:0,
    stagger:.5,
    scrollTrigger:{
        trigger:'.sampless h3',
        scroller:'.main',
        // markers:true,
        start:'top 60%',
        end: 'top 30%',
        scrub:2

    }
})
gsap.from(".imaaa",{
    x:-230,
    duration:2,
    delay:1,
    // rotate:360,
    opacity:0,
    stagger:.5,
    scrollTrigger:{
        trigger:'.imaaa',
        scroller:'.main',
        // markers:true,
        start:'top 60%',
        end: 'top 30%',
        scrub:2

    }
})
gsap.from(".imaaaa ",{
    x:230,
    duration:2,
    delay:1,
    // rotate:360,
    opacity:0,
    stagger:.5,
    scrollTrigger:{
        trigger:'.imaaaa',
        scroller:'.main',
        // markers:true,
        start:'top 60%',
        end: 'top 30%',
        scrub:2

    }
})
gsap.from(".samplesss h3",{
    x:-230,
    duration:2,
    delay:1,
    // rotate:360,
    opacity:0,
    stagger:.5,
    scrollTrigger:{
        trigger:'.sampless h3',
        scroller:'.main',
        // markers:true,
        start:'top 70%',
        end: 'top 30%',
        scrub:2

    }
})
gsap.from(".samplesss h2",{
    x:-230,
    duration:2,
    delay:1,
    // rotate:360,
    opacity:0,
    stagger:.5,
    scrollTrigger:{
        trigger:'.sampless h2',
        scroller:'.main',
        // markers:true,
        start:'top 40%',
        end: 'top 30%',
        scrub:2

    }
})




