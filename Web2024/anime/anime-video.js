function startAnimation(){
  // anime({
  //   targets: '#animation-box',
  //   translateX: 400
  // });
  anime({
    targets: '#start-button',
    rotate: '360deg',
    easing: 'linear',
  });
  anime({
    targets: '#video-tag',//ローテーション
    rotate: '360deg',
    easing: 'linear',
  });
}