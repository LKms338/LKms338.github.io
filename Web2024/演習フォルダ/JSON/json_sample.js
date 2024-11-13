fetch("https://morimorihoge.github.io/teu2024f/tweets.json").then(
    function(response) {
      console.log(typeof response);
      console.log(response);
      return response.json();
    }
).then(
    function(json){
      console.log(typeof json);
      console.log(json);
      json.forEach(
          (tweet) => {
            document.querySelector("#answer").innerHTML += `${tweet.name}<br >`;
          }
      )
    }
);