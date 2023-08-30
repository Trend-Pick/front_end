export default function publishedAtCalc(n, title) {
  let current = new Date();
  let prev = new Date(n);
  let time = (current.getTime() - prev.getTime()) / 1000;
  console.log(current, prev, title);
  console.log(time);
  // 60초 = 1분 1분보다 작다면 초전으로 표기
  if (time < 60) {
    return `${time}초전`;
  }
  // 360초  = 60분 = 1시간 1시간보다 작다면 분전으로 표기
  else if (time < 360) {
    return `${time / 60}분전`;
  }
  // 86,400초 = 1440분 = 24시간 = 1일 1일보다 작다면 시간전으로 표기
  else if (time < 86400) {
    return `${Math.floor(time / (60 * 60))}시간전`;
  }
  //  = 28일보다 작다면 개월전으로 표기
  else if (time < 2419200 / 4) {
    return `${Math.floor(time / (60 * 60 * 24))}일전`;
  } else if (time < 2419200) {
    return `${Math.floor(time / (60 * 60 * 24 * 7))}주전`;
  } else {
    return `${Math.floor(time / (60 * 60 * 24 * 28))}개월전`;
  }
}
