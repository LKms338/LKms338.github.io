// 初期値の設定
let username = "不明";
let shopName = "";
let shopLocation = ""; // 変数名を変更

// デフォルトの投稿
const defaultTweets = [
  {
    username: "ユーザーA",
    shopName: "カフェA",
    shopLocation: "八王子駅前",
    tweetText: "コーヒーがとても美味しいです！",
    timestamp: new Date().toLocaleString()
  },
  {
    username: "ユーザーB",
    shopName: "カフェB",
    shopLocation: "京王八王子駅前",
    tweetText: "おしゃれな雰囲気のカフェです。",
    timestamp: new Date().toLocaleString()
  },
  {
    username: "ユーザーC",
    shopName: "カフェC",
    shopLocation: "南大沢駅前",
    tweetText: "ケーキが絶品です！",
    timestamp: new Date().toLocaleString()
  }
];

// ユーザー名と店舗名を設定する
function setUsername() {
  const inputUsername = document.getElementById("username").value.trim();
  const inputShopName = document.getElementById("shopName").value.trim();
  const inputLocation = document.getElementById("location").value.trim();

  if (inputUsername && inputShopName && inputLocation) {
    username = inputUsername;
    shopName = inputShopName;
    shopLocation = inputLocation; // 変数名を変更
    alert(`以下が設定されました。\nユーザー名： ${username}\n店舗名： ${shopName}\n場所： ${shopLocation}`);
  } else {
    alert("ユーザー名、店舗名、場所を空白にしないでください。");
  }
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
      <p>${tweet.tweetText}</p>
      <small>投稿時間: ${tweet.timestamp}</small>
      <button onclick="deleteTweet(this)" class="delete-btn">削除</button>
    `;
    tweetContainer.appendChild(tweetDiv);
  });
}

// ツイートを投稿する
function postTweet() {
  const tweetText = document.getElementById("tweet").value.trim();
  const tweetContainer = document.getElementById("tweets");
  const tweetDiv = document.createElement("div");
  tweetDiv.className = "tweet";
  const now = new Date();
  const timestamp = now.toLocaleString();

  // ツイートのHTML構造
  tweetDiv.innerHTML = `
    <h3>${username}</h3>
    <small>店舗名: ${shopName}</small>
    <small>場所: ${shopLocation}</small> <!-- 変数名を変更 -->
    <p>${tweetText}</p>
    <small>投稿時間: ${timestamp}</small>
    <button onclick="deleteTweet(this)" class="delete-btn">削除</button>
  `;

  // 新しいツイートを先頭に追加
  tweetContainer.prepend(tweetDiv);

  // テキストエリアをクリア
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
