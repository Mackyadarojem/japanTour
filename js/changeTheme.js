$(document).ready(function(){

    changeIframeSrc();
    changebackground()

    $('.carousel-control-next').click(function() {
        changeIframeSrc();
        changebackground()
    });

    $('.carousel-control-prev').click(function() {
        changeIframeSrc();
        changebackground()
    });

});

function changeIframeSrc() {
    var iframe = document.getElementById('myIframe');

    if ($('#tokyoCard').hasClass('active')){
        iframe.src = 'tokyoSearchMap.html';
    }else if ($('#nagoyaCard').hasClass('active')) {
        iframe.src = 'nagoyaSearchMap.html';
    }else if ($('#sapporoCard').hasClass('active')) {
        iframe.src = 'sapporoSearchMap.html';
    }else if ($('#kyotoCard').hasClass('active')) {
        iframe.src = 'kyotoSearchMap.html';
    }else if ($('#yokohamaCard').hasClass('active')) {
        iframe.src = 'yokohamaSearchMap.html';
    }else if ($('#osakaCard').hasClass('active')) {
        iframe.src = 'osakaSearchMap.html';
    }
}

function changebackground() {
    if ($('#tokyoCard').hasClass('active')){
        document.body.style.backgroundImage = `url(image/tokyoBackground.jpg)`;
    }else if ($('#nagoyaCard').hasClass('active')) {
        document.body.style.backgroundImage = `url(image/nagoyaBackground.jpg)`;
    }else if ($('#sapporoCard').hasClass('active')) {
        document.body.style.backgroundImage = `url(image/sapporoBackground.jpg)`;
    }else if ($('#kyotoCard').hasClass('active')) {
        document.body.style.backgroundImage = `url(image/kyotoBackground.jpg)`;
    }else if ($('#yokohamaCard').hasClass('active')) {
        document.body.style.backgroundImage = `url(image/yokohamaBackground.jpg)`;
    }else if ($('#osakaCard').hasClass('active')) {
        document.body.style.backgroundImage = `url(image/osakaBackground.jpg)`;
    }
}