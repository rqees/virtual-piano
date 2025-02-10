function whiteKeys() {
  let wkpattern = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  let wksounds = [c3, d3, e3, f3, g3, a3, b3, c4, d4, e4, f4, g4, a4, b4, c5];

  strokeWeight(2);
  stroke(0);

  for (let i = 0; i < 15; i++) {
    fill(wkc);
    rect(wkx + wkw * wkpattern[i], wky, wkw, wkh);

    if (
      mouseX > wkx + wkw * wkpattern[i] &&
      mouseX < wkx + wkw + wkw * wkpattern[i] &&
      mouseY > wky &&
      mouseY < wky + wkh &&
      dhwkabk == true
    ) {
      fill(wkhc);
      rect(wkx + wkw * wkpattern[i], wky, wkw, wkh);
      if (rcmr) {
        fill(255, 0, 0);
        ellipse(wkx + wkw * wkpattern[i] + wkw / 2, wky + 400 / 2, 60 / 2);
        if (wksoundplay) {
          wksounds[i].play();
        }
      }

      if (mouseReleased) {
        wksoundplay = false;
      }
    }
  }
}
