var previewisON = false;

document.getElementById('prev-resume-daiict').onclick =
    function () {
        previewisON = true;
        console.log(1);
        document.getElementById('preview-frame').src = "img/resumes/daiict.png";
        document.getElementById('preview-div').style.opacity = 1;
        document.getElementById('prev-cover').style.opacity = 1;
        document.getElementById('preview-div').style.zIndex = 1000;
        document.getElementById('prev-cover').style.zIndex = 1000;
        document.getElementById('close-preview').style.opacity = 1;
        document.getElementById('close-preview').style.zIndex = 1000;
    };

document.getElementById('prev-resume-daiict-classic').onclick =
    function () {
        previewisON = true;
        console.log(1);
        document.getElementById('preview-frame').src = "img/resumes/daiict_classic.png";
        document.getElementById('preview-div').style.opacity = 1;
        document.getElementById('prev-cover').style.opacity = 1;
        document.getElementById('preview-div').style.zIndex = 1000;
        document.getElementById('prev-cover').style.zIndex = 1000;
        document.getElementById('close-preview').style.opacity = 1;
        document.getElementById('close-preview').style.zIndex = 1000;
    };
document.getElementById('prev-resume-elon-musk').onclick =
    function () {
        previewisON = true;
        console.log(1);
        document.getElementById('preview-frame').src = "img/resumes/elon-musk-one-page-resume.png";
        document.getElementById('preview-div').style.opacity = 1;
        document.getElementById('prev-cover').style.opacity = 1;
        document.getElementById('preview-div').style.zIndex = 1000;
        document.getElementById('prev-cover').style.zIndex = 1000;
        document.getElementById('close-preview').style.opacity = 1;
        document.getElementById('close-preview').style.zIndex = 1000;
    };
document.getElementById('close-preview').onclick =
    function () {
        if (previewisON) {
            document.getElementById('preview-frame').src = "";
            document.getElementById('preview-div').style.opacity = 0;
            document.getElementById('prev-cover').style.opacity = 0;
            document.getElementById('preview-div').style.zIndex = -1;
            document.getElementById('prev-cover').style.zIndex = -1;
            document.getElementById('close-preview').style.opacity = 0;
            document.getElementById('close-preview').style.zIndex = -1;
            previewisON = false;
        }
    };


$(document).ready(function () {
    $("crush").click(
        function (event) {
            event.preventDefault();
            $("html, body").animate({
                scrollTop: $($(this).attr("href")).offset().top
            }, 500);
        });
});

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

var LinkedShare = document.querySelector('[data-js="linkedin-share"]');
LinkedShare.onclick = function (e) {
    e.preventDefault();
    var Window = window.open('https://www.linkedin.com/shareArticle?mini=true&url=' + document.URL +'&title=CVMaker',
        'linkedin-popup', 'height=350,width=600');
    if (Window.focus) {
        Window.focus();
    }
    return false;
}