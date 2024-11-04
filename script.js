var tl=gsap.timeline({scrollTrigger:{
    trigger:".two",
    start:"0% 90%",
    end:"50% 60%",
    scrub:true,
    // markers:true
}})

tl.to("#fanta-main",{
    top:"110%",
    left:"-2%"
},'top-animation')

.to("#orange-slice",{
    top:"145%",
    left:"20%"
},'top-animation')

.to("#orange-grp",{
    top:"165%",
    left:"75%",
},'top-animation')

.to("#leaf",{
    top:"107%",
    left:"80%",
    rotate:"120deg"
},'top-animation')

.to("#leaf2",{
    top:"105%",
    left:"0%",
    rotate:"-5deg"
},'top-animation')

var tl2=gsap.timeline({scrollTrigger:{
    trigger:".three",
    start:"30% 90%",
    end:"50% 60%",
    scrub:true,
    // markers:true
}})
tl2.to("#fanta-main",{
    height:"60%",
    width:"40%",
    top: "207%",
    left: "30%",
}, 'ca')