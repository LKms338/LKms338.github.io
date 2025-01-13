// 初期値の設定
let username = "不明";
let shopName = "";
let shopLocation = ""; // 変数名を変更

const defaultTweets = [
  {
    username: "ユーザーA",
    shopName: "カフェA",
    shopLocation: "八王子駅前",
    address: "東京都八王子市〇〇町1-1-1", // 住所を追加
    tweetText: "コーヒーがとても美味しいです！",
    timestamp: new Date().toLocaleString()
  },
  {
    username: "ユーザーB",
    shopName: "カフェB",
    shopLocation: "京王八王子駅前",
    address: "東京都八王子市〇〇町2-2-2", // 住所を追加
    tweetText: "おしゃれな雰囲気のカフェです。",
    timestamp: new Date().toLocaleString()
  },
  {
    username: "ユーザーC",
    shopName: "カフェC",
    shopLocation: "南大沢駅前",
    address: "東京都八王子市〇〇町3-3-3", // 住所を追加
    tweetText: "ケーキが絶品です！",
    timestamp: new Date().toLocaleString()
  }
];

function setUsername() {
  const inputUsername = document.getElementById("username").value.trim();
  const inputShopName = document.getElementById("shopName").value.trim();
  const inputLocation = document.getElementById("location").value.trim();
  const inputAddress = document.getElementById("address").value.trim(); // 住所を取得

  // 必須項目が空の場合はエラーメッセージを表示
  if (!inputUsername || !inputShopName || !inputLocation) {
    alert("ユーザー名、店舗名、場所は必須項目です。すべて入力してください。");
    return;
  }

  // 必須項目を設定
  username = inputUsername;
  shopName = inputShopName;
  shopLocation = inputLocation;
  shopAddress = inputAddress; // 住所をグローバル変数に保存

  // アラートで設定内容を表示
  alert(`以下が設定されました。\nユーザー名：${username}\n店舗名：${shopName}\n場所：${shopLocation}\n住所：${shopAddress || "未入力"}`);
}

// 初期投稿を追加する
function addDefaultTweets() {
  const tweetContainer = document.getElementById("tweets");
  defaultTweets.forEach(tweet => {
    const tweetDiv = document.createElement("div");
    tweetDiv.className = "tweet";
    tweetDiv.innerHTML = `
      <h3>${tweet.username}</h3>
      <small>店舗名: ${tweet.shopName}</small>
      <small>場所: ${tweet.shopLocation}</small>
      <small>住所: ${tweet.address || "未登録"}</small> <!-- 住所を表示 -->
      <p>${tweet.tweetText}</p>
      <small>投稿時間: ${tweet.timestamp}</small>
      <button onclick="deleteTweet(this)" class="delete-btn">削除</button>
    `;
    tweetContainer.appendChild(tweetDiv);
  });
}


function postTweet() {
  const tweetText = document.getElementById("tweet").value.trim(); // コメントを取得
  const tweetContainer = document.getElementById("tweets");
  const now = new Date();
  const timestamp = now.toLocaleString();

  // 必須項目が空の場合は投稿を拒否
  if (!username || !shopName || !shopLocation) {
    alert("ユーザー名、店舗名、場所が設定されていません。保存ボタンを押して設定してください。");
    return;
  }

  // 新しいツイートのHTML構造
  const tweetDiv = document.createElement("div");
  tweetDiv.className = "tweet";
  tweetDiv.innerHTML = `
    <h3>${username}</h3>
    <small>店舗名: ${shopName}</small>
    <small>場所: ${shopLocation}</small>
    <small>住所: ${shopAddress || ""}</small> <!-- 住所を表示 -->
    <p>${tweetText || ""}</p>
    <small>投稿時間: ${timestamp}</small>
    <button onclick="deleteTweet(this)" class="delete-btn">削除</button>
  `;

  // 新しいツイートを先頭に追加
  tweetContainer.prepend(tweetDiv);

  // コメント欄をクリア
  document.getElementById("tweet").value = "";
}

// ツイートを削除する
function deleteTweet(button) {
  const tweetDiv = button.parentElement;

  // 削除前にフェードアウトのようなエフェクトを追加
  tweetDiv.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  tweetDiv.style.opacity = "0";
  tweetDiv.style.transform = "translateX(50px)";

  // フェードアウト完了後に削除
  setTimeout(() => {
    tweetDiv.remove();
  }, 500);
}

// 背景色を変更する
function changeBackgroundColor() {
  const bgColor = document.getElementById("bgColor").value;
  document.body.style.backgroundColor = bgColor;
}

// イベントリスナーを追加
document.getElementById("saveButton").addEventListener("click", setUsername);
document.getElementById("postButton").addEventListener("click", postTweet);
document.getElementById("bgColor").addEventListener("input", changeBackgroundColor);

// 初期投稿を追加するためのイベントリスナーを追加
document.addEventListener("DOMContentLoaded", addDefaultTweets);
