// 初期値の設定
let username = "不明";
let shopName = "";
let shopLocation = "";
let shopAddress = ""; // 住所を追加

const defaultTweets = [
  {
    username: "ユーザーA",
    shopName: "カフェA",
    shopLocation: "八王子駅前",
    address: "東京都八王子市〇〇町1-1-1",
    tweetText: "コーヒーがとても美味しいです！",
    timestamp: new Date().toLocaleString()
  },
  {
    username: "ユーザーB",
    shopName: "カフェB",
    shopLocation: "京王八王子駅前",
    address: "東京都八王子市〇〇町2-2-2",
    tweetText: "おしゃれな雰囲気のカフェです。",
    timestamp: new Date().toLocaleString()
  },
  {
    username: "ユーザーC",
    shopName: "カフェC",
    shopLocation: "南大沢駅前",
    address: "東京都八王子市〇〇町3-3-3",
    tweetText: "ケーキが絶品です！",
    timestamp: new Date().toLocaleString()
  }
];

function setUsername() {
  const inputUsername = document.getElementById("username").value.trim();
  const inputShopName = document.getElementById("shopName").value.trim();
  const inputLocation = document.getElementById("location").value.trim();
  const inputAddress = document.getElementById("address").value.trim();

  if (!inputUsername || !inputShopName || !inputLocation) {
    alert("ユーザー名、店舗名、場所は必須項目です。すべて入力してください。");
    return;
  }

  username = inputUsername;
  shopName = inputShopName;
  shopLocation = inputLocation;
  shopAddress = inputAddress;

  localStorage.setItem("username", username);
  localStorage.setItem("shopName", shopName);
  localStorage.setItem("shopLocation", shopLocation);
  localStorage.setItem("shopAddress", shopAddress);

  alert(`以下が設定されました。\nユーザー名：${username}\n店舗名：${shopName}\n場所：${shopLocation}\n住所：${shopAddress || "未入力"}`);
}

function addDefaultTweets() {
  const tweetContainer = document.getElementById("tweets");
  let tweets = JSON.parse(localStorage.getItem("tweets"));

  if (!tweets) {
    tweets = defaultTweets;
    localStorage.setItem("tweets", JSON.stringify(tweets));
  }

  tweets.forEach(tweet => {
    const tweetDiv = document.createElement("div");
    tweetDiv.className = "tweet";
    tweetDiv.innerHTML = `
      <h3>${tweet.username}</h3>
      <small>店舗名: ${tweet.shopName}</small>
      <small>場所: ${tweet.shopLocation}</small>
      <small>住所: ${tweet.address || "未登録"}</small>
      <p>${tweet.tweetText}</p>
      <small>投稿時間: ${tweet.timestamp}</small>
      <button onclick="deleteTweet(this)" class="delete-btn">削除</button>
    `;
    tweetContainer.appendChild(tweetDiv);
  });
}

function postTweet() {
  const tweetText = document.getElementById("tweet").value.trim();
  const tweetContainer = document.getElementById("tweets");
  const now = new Date();
  const timestamp = now.toLocaleString();


  if (!username || !shopName || !shopLocation) {
    alert("ユーザー名、店舗名、場所が設定されていません。保存ボタンを押して設定してください。");
    return;
  }

  const newTweet = {
    username,
    shopName,
    shopLocation,
    address: shopAddress,
    tweetText,
    timestamp
  };

  let tweets = JSON.parse(localStorage.getItem("tweets")) || [];
  tweets.unshift(newTweet);
  localStorage.setItem("tweets", JSON.stringify(tweets));

  const tweetDiv = document.createElement("div");
  tweetDiv.className = "tweet";
  tweetDiv.innerHTML = `
    <h3>${username}</h3>
    <small>店舗名: ${shopName}</small>
    <small>場所: ${shopLocation}</small>
    <small>住所: ${shopAddress || ""}</small>
    <p>${tweetText || ""}</p>
    <small>投稿時間: ${timestamp}</small>
    <button onclick="deleteTweet(this)" class="delete-btn">削除</button>
  `;

  tweetContainer.prepend(tweetDiv);
  document.getElementById("tweet").value = "";

  //アラートの設定：投稿時
  alert("投稿されました。");
}

function deleteTweet(button) {
  const tweetDiv = button.parentElement;
  const tweetIndex = Array.from(tweetDiv.parentElement.children).indexOf(tweetDiv);

  tweetDiv.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  tweetDiv.style.opacity = "0";
  tweetDiv.style.transform = "translateX(50px)";

  setTimeout(() => {
    tweetDiv.remove();
    let tweets = JSON.parse(localStorage.getItem("tweets"));
    tweets.splice(tweetIndex, 1);
    localStorage.setItem("tweets", JSON.stringify(tweets));
  }, 500);
}

function changeBackgroundColor() {
  const bgColor = document.getElementById("bgColor").value;
  document.body.style.backgroundColor = bgColor;
  localStorage.setItem("bgColor", bgColor);
}

function loadSettings() {
  username = localStorage.getItem("username") || "不明";
  shopName = localStorage.getItem("shopName") || "";
  shopLocation = localStorage.getItem("shopLocation") || "";
  shopAddress = localStorage.getItem("shopAddress") || "";

  const bgColor = localStorage.getItem("bgColor");
  if (bgColor) {
    document.body.style.backgroundColor = bgColor;
  }
}

document.getElementById("saveButton").addEventListener("click", setUsername);
document.getElementById("postButton").addEventListener("click", postTweet);
document.getElementById("bgColor").addEventListener("input", changeBackgroundColor);
document.addEventListener("DOMContentLoaded", () => {
  loadSettings();
  addDefaultTweets();
});
