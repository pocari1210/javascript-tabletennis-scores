// オブジェクトを作成
const p1 = {
  score: 0,
  button: document.querySelector('#p1Button'),
  display: document.querySelector('#p1Display')
}

const p2 = {
  score: 0,
  button: document.querySelector('#p2Button'),
  display: document.querySelector('#p2Display')
}

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#winningScore');

// 初期値の設定
let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent) {

  // isGameOverがfalseだった場合の処理
  if (!isGameOver) {

    // プレイヤーのスコアを一つ足す
    player.score += 1;

    player.display.textContent = player.score;

    // どちらかのプレイヤーがwinningScoreと同じ値になった時の処理
    if (player.score === winningScore) {

      isGameOver = true;

      // 勝利したプレイヤーの点数の色を変更
      player.display.classList.add('has-text-success');

      // 敗北したプレイヤーの点数の色を変更
      opponent.display.classList.add('has-text-danger');

      // ボタンの操作を無効化する
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
  }
} //updateScoresメソッド:ここまで

p1.button.addEventListener('click', function () {
  updateScores(p1, p2);
});

p2.button.addEventListener('click', function () {
  updateScores(p2, p1);
});

// changeで値が変わった時にイベントが発火される
winningScoreSelect.addEventListener('change', function () {

  // parseInt(winningScoreSelect.value)でもOK
  // this = winningScoreSelect
  // thisを使うことで、コールバック関数の設定した要素を取得できる
  winningScore = parseInt(this.value);
  reset();
});

// リセットボタンを押したら、reset関数を実行する
resetButton.addEventListener('click', reset);

function reset() {
  isGameOver = false;
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove('has-text-success', 'has-text-danger');
    p.button.disabled = false;
  }
}


/*****************************************************************************
 * 
 * ★メソッドメモ★
 * 
 * parseInt()
 * String型をInt型に変換するメソッド
 * 
 * disabled()
 * trueとすることでボタン等の操作を無効化することができる
 * 
 *****************************************************************************/

