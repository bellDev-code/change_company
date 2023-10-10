function solution(quiz) {
  return quiz.map((item) => {
    const items = item.split("=");

    if (eval(items[0]) === eval(items[1])) {
      return "O";
    } else {
      return "X";
    }
  });
}
