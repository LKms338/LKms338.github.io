function startAnimation(){
  anime({
    targets: '#animation-box',//点滅
    keyframes: [
      {opacity: 0},
      {opacity: 1}
    ],
    easing: "linear",
    duration: 500,
    loop: true
  });
}