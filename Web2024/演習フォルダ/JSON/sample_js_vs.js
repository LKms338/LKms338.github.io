fetch("https://morimorihoge.github.io/teu2024f/tweets.json").then(
    function(response) {
      return response.text();
    }
).then(
    function(text) {
      let json = JSON.parse(text);
      json.forEach(
          (tweet) => {
            document.querySelector("#answer").innerHTML += `${tweet.name}<br >`;
          }
      )

      // HTML側に <div id="inner_data"></div> を追加しておく
      let innerDataElement = document.querySelector('#inner_data');
      innerDataElement.style.display = "none";
      innerDataElement.innerHTML = text;
    }
);