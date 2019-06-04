
firebase.auth().onAuthStateChanged(function (user) {
    var
        signinbtn = document.getElementById('SignInWithGoogle'),
        userphoto = document.getElementById('user-photo'),
        username = document.getElementById('user-name'),
        logoutbtn = document.getElementById('Logout'),
        dashboard = document.getElementById('dashboard-link');

    if (user) {
        //where user is signed in
        signinbtn.classList.add('invisible');
        username.classList.remove('invisible');
        userphoto.classList.remove('invisible');
        logoutbtn.classList.remove('invisible');
        dashboard.classList.remove('invisible');
    } else {
        signinbtn.classList.remove('invisible');
        username.classList.add('invisible');
        userphoto.classList.add('invisible');
        logoutbtn.classList.add('invisible');
        dashboard.classList.add('invisible');
    }
});

$(document).ready(function () {
    $("a.smooth-link").click(
      function (event) {
        event.preventDefault();
        $("html, body").animate({
          scrollTop: $($(this).attr("href")).offset().top
        }, 500);
      });
  });

var quotes = {
    0: {
        'text': 'Don\'t Worry. You\'re never ready for what you have to do. You just do it. That makes you ready.',
        'author': 'Flora Rheta Schreiber'
    },
    1: {
        'text': 'No, I don\'t ever give up. I\'d have to be dead or completely incapacitated. ',
        'author': 'Elon Musk'
    },
    2: {
        'text': 'A Woman without a man is like a fish without a bicycle. Grab the company with confidence.',
        'author': 'Gloria Steinem'
    },
    3: {
        'text' : 'Try not to become a man of success, but rather try to become a man of value.',
        'author' : 'Albert Einstein'
    },
    4: {
        'text': 'If you are not failing, you are not innovating enough. It\'s ok to fail sometimes.',
        'author': 'Elon Musk'
    },
    5: {
        'text': 'If it feels "I still am not prepared enough" then think once what the bloody company requires. You don\'t have to be a ranker, you have to be CONFIDENT. Be smart, prepare/revise only what requires.',
        'author': 'Shivang Joshi'
    },
    6: {
        'text': 'Jarvis, sometimes you gotta run before you can walk.',
        'author': 'Tony Stark'
    },
    7: {
        'text': 'Good Luck for the interviews mate!',
        'author': ''
    }
}
var quoteslength=8;


var i = (Math.floor(Math.random() * 100)) % quoteslength;
var text = document.getElementById('quote-text'),
    author = document.getElementById('quote-author');
document.body.onload = runRandom;

function runRandom() {
    //quotes renderer

    printf(i);
    text.innerText = quotes[i]['text'];
    author.innerText = quotes[i]['author'];
};

function nextQuote() {
    i = (i + 1) % quoteslength;

    text.style.opacity = 0;
    author.style.opacity = 0;

    setTimeout(() => {
        text.innerText = quotes[i]['text'];
        text.style.opacity = 1;
        author.innerText = quotes[i]['author'];
        author.style.opacity = 1;
    }, 1000);

};



var twitterShare = document.querySelector('[data-js="twitter-share"]');
var sharemessage = "Hey, Checkout this new #CVMaker, It makes beautiful resumes and it's simple and easy and INSPIRING ;)"
twitterShare.onclick = function (e) {
    e.preventDefault();
    var twitterWindow =
        window.open('https://twitter.com/share?url=' + document.URL, 'twitter-popup',
            'height=350,width=600');
    if (twitterWindow.focus) {
        twitterWindow.focus();
    }
    return false;
}

var facebookShare = document.querySelector('[data-js="facebook-share"]');
facebookShare.onclick = function (e) {
    e.preventDefault();
    var facebookWindow = window.open('https://www.facebook.com/sharer/sharer.php?u=' + document.URL,
        'facebook-popup', 'height=350,width=600');
    if (facebookWindow.focus) {
        facebookWindow.focus();
    }
    return false;
}
