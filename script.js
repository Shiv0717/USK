const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

function myFunction() {
    // Get the text field
    var copyText = document.getElementById("myInput");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    copyText.style.outline="none";
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
  }
  
document.getElementById("btn").addEventListener("click",function()
{
    btn.textContent="Copied!";
})
gsap.from(".main-content h1",{
        y:200,
        ease: "power4.out",
        delay: 1,
        duration:2,
        skewY: 7,
        stagger: {
        amount: 0.3
        }
},"nan")
gsap.to(".main-content button",{
      opacity:1,
      delay: 1,
      duration:2,
      ease: "power4.out",
      scale:1,
},"nan")
gsap.to(".main-content img",{
   opacity:1,
   delay: 1,
   duration:2,
   ease: "power4.out",
   scale:1.1,
},"nan")
gsap.to(".main-content .name",{
   scale:1,
   opacity:1,
   delay: 1,
   duration:2,
   ease: "power4.out",
},"nan")
gsap.from(".header",{
       y:-300,
       duration:3,
       stagger: {
        amount: 0.7
        }
},"nan")

gsap.to("#page3,.line1",{
  opacity:1,
  duration:2,
  ease: "power4.out",
  scale:1,
  scrollTrigger:{
     trigger:"#page3",
     scroller:"body",
     start:"5% 50%",
  }
})
gsap.to("#page3,.box",{
  opacity:1,
  duration:2,
  ease: "power4.out",
  scale:1,
  scrollTrigger:{
     trigger:"#page3",
     scroller:"body",
     start:"5% 50%",
  }
})
gsap.to("#page3,.box1",{
  opacity:1,
  duration:2,
  ease: "power4.out",
  scale:1,
  scrollTrigger:{
     trigger:"#page3",
     scroller:"body",
     start:"5% 50%",
  }
})
gsap.from(".nav-right-1,.px",{
   y:300,
   duration:2,
   scrollTrigger:{
    trigger:"#page4",
    scroller:"body",
    start:"5% 50%",
 } 
},"nan")

gsap.to("#page4,.hand",{
  opacity:1,
  duration:2,
  ease: "power4.out",
  scale:1,
  scrollTrigger:{
     trigger:"#page4",
     scroller:"body",
     start:"10% 50%",
  }
})
gsap.to("#page4,h1",{
  opacity:1,
  duration:2,
  ease: "power4.out",
  scale:1,
  scrollTrigger:{
     trigger:"#page4",
     scroller:"body",
     start:"10% 50%",
  }
},"x")
gsap.to("#page4,#Email-2  button",{
  opacity:1,
  duration:2,
  ease: "power4.out",
  scale:1,
  scrollTrigger:{
     trigger:"#page4",
     scroller:"body",
     start:"10% 50%",
     end:"95% 70%",
  }
},"x")