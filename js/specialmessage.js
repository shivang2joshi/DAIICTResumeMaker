
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        if(user.displayName == "Riddhi Patel" || user.email == "rdpatel@gmail.com"){
            document.getElementById('crush').classList.remove('invisible');
        }
    } 
});

var id = setInterval(() => {
    var crush = document.getElementById('crush');
    crush.getElementsByTagName('img')[0].setAttribute('width', '120px');
    crush.getElementsByTagName('img')[0].setAttribute('height', '120px');
    crush.style.paddingLeft = 0;
    crush.style.paddingTop = 0;
    setTimeout(() => {
      crush.getElementsByTagName('img')[0].setAttribute('width', '100px');
      crush.getElementsByTagName('img')[0].setAttribute('height', '100px');
      crush.style.paddingLeft = '10px';
      crush.style.paddingTop = '10px';
    }, 1000);
  }, 1800);


  crush.onclick = function () {
    clearInterval(id);

    crush.style.top = '45%';
    crush.style.left = '45%';

    setTimeout(() => {
      crush.getElementsByTagName('img')[0].setAttribute('height', '0');
      crush.getElementsByTagName('img')[0].setAttribute('width', '0');

      setTimeout(() => {
        crush.style.left = '-30%';
        crush.style.top = '-100%';
        crush.getElementsByTagName('img')[1].setAttribute('height', '3000px');
        crush.getElementsByTagName('img')[1].setAttribute('width', '3000px');

        setTimeout(() => {
          document.getElementsByTagName('main')[0].classList.add('special-bg');
          /*var cards = document.getElementsByClassName('card');
          for (var i = 0; i < cards.length; i++) {
            cards[i].style.opacity = 0;
          }*/
          crush.style.opacity = 0;
          setTimeout(() => {
            document.getElementById('crush-message').scrollIntoView({
              behavior: "smooth",
            });
            var message = document.getElementsByClassName('special-message');
            setTimeout(() => {
              message[0].innerHTML = "Hi Riddhi! It's been a long time."
              message[0].style.opacity = 1;
              setTimeout(() => {
                message[1].innerHTML = "I really couldn't move on with your rejection!";
                message[1].style.opacity = 1;
                setTimeout(() => {
                  message[2].innerHTML = "because you are awesome, girl you are such a beauty!";
                  message[2].style.opacity = 1;
                  setTimeout(() => {
                    message[3].innerHTML = "I am also sorry for being douche, but people progress and learn.";
                    message[3].style.opacity = 1;
                    setTimeout(() => {
                      message[4].innerHTML = "I'm liking you more now after you've blocked me. Let's be friends, I can be a very good friend Riddhi. Try me."
                      message[4].style.opacity = 1;
                    }, 4000);
                  }, 4000);
                }, 3000);
              }, 5000);
            }, 2000);
          }, 1500);
        }, 500);
      }, 500);
    }, 500);


  };