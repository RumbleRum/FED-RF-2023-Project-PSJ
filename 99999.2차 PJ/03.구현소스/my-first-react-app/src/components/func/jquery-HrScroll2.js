// 제이쿼리로 구현한 가로방향 스크롤 JS : jquery-HrScroll2.js

// 전체 마우스휠 이벤트를 정지시킴
// overflow:hidden 설정을 html,body에 했으므로
// 스크롤이 되지 않는다!(휠 이벤트는 발생하지만 작동은 하지않는다!)

// 휠 이동수치 변수
let wNum = 0;

// 화면크기
let winW = $(window).width();

// 마지막 한계값
let limit = winW * 9 - winW;
console.log("이동한계값", limit);

// 이벤트대상 - .wrap
// 이벤트종류 - wheel
$(".wrap").on("wheel", () => {
  // 1. 휠 방향
  let dir = event.wheelDelta;

  // 2. 방향에 따른 값 증감
  if (dir < 0) wNum += 80;
  else wNum -= 80;

  // 3. 한계값 지정
  if (wNum < 0) wNum = 0;
  else if (wNum > limit) wNum = limit;


  // 4. 실제 가로스크롤 이동 애니메이션 주기
  $(".wrap")
    .stop()
    .animate(
      {
        scrollLeft: wNum + "px",
      },
      2500,
      "easeOutQuint"
    );
}); ///////////////////// wheel 이벤트 함수 ///////////////////////////

$(".gnb a").click((e) => {
  let txt = $(e.currentTarget).text();
  console.log(txt);
  if ((txt = "Home")) {
    $(".wrap").stop().animate(
      {
        scrollLeft: "0px",
      },
      2500,
      "easeOutQuint"
    );
    wNum = 0;
  }
});
