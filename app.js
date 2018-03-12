$(function () {
    // navbar
    $('.toggle').on('click', function () {
        $('.headerList').toggle('.toggle-active');
    });
    //exchange
    $('.exchange-checking').on('click', function () {
        $('.chartContainer-brake').addClass('blabla');
        //variable
        var select1 = $('#tab-one').val();
        var select2 = $('#tab-two').val();


        $.ajax({
            url: 'https://api.fixer.io/latest?base=' + select1,
            type: 'GET',
            dataType: 'JSON',
            success: function (res) {
                //if select1 exist and is not equal select2 give me a today's exchanging rate and and multiply by number put up.
                if (select1 && select1 !== select2) {
                    $('.output').text(res.rates[select2])
                    $('.calculator-sum').text($('.calculator-amount').val() * (res.rates[select2]));
                }
                else {
                    $('.output').text('1');
                    $('.calculator-sum').text('1');
                }
            }
        });
        //Loop has been done in order to avoid a repetition code
        //var j=-1 helps me to go into success function , code doesn't work without var j.
        var j = -1;
        for (var i = 0; i <= 7; i++) {

        //a loop is getting in a days ,then goes to ajax url - getting data for every each day
            var day = (moment().subtract(i, 'days').format('YYYY-MM-DD'))

            //******************************************************DAY0
            $.ajax({
                url: 'https://api.fixer.io/' + day + '?base=' + select1,
                type: 'GET',
                dataType: 'JSON',
                success: function (rata) {
                    j++;
                    var day = (moment().subtract(j, 'days').format('YYYY-MM-DD'));

                    var days = '.day' + j;
                    var klasy = '.g' + j;
                    var klasa = 'g' + j;

           //round to third digit after the decimal point
                    var rateToFloor = (rata.rates[select2]);
                    var floorRate = rateToFloor.toFixed(3);
            //changing the height of columns to avoid a value difference / a height is depend of value.
                    if (rata.rates[select2] < 5) {
                        var styles = {
                            height: rata.rates[select2] * 10 + '%',
                            background: '#e1f7a1'
                        }
                        if ($(klasy)) {
                            $(klasy).remove()
                            $(days).append("<p class=" + klasa + ">" + day + ' ' + '<strong class="textValue">' + floorRate + "</p>");
                            $('.smallBox').css(styles)
                        }
                        else {
                            $(days).append("<p class=" + klasa + ">" + day + ' ' + '<strong class="textValue">' + floorRate + "</p>");
                            $('.smallBox').css(styles)
                        }
                    }
                    else if (rata.rates[select2] > 6 && rata.rates[select2] < 10) {
                        var styles = {
                            height: rata.rates[select2] * 5 + '%',
                            background: '#d2ebf5'
                        }
                        if ($(klasy)) {
                            $(klasy).remove();
                            $(days).append("<p class=" + klasa + ">" + day + ' ' + '<strong class="textValue">' + floorRate + "</p>");
                            $('.smallBox').css(styles)
                        }
                        else {
                            $(days).append("<p class=" + klasa + ">" + day + ' ' + '<strong class="textValue">' + floorRate + "</p>");
                            $('.smallBox').css(styles)
                        }

                    }
                    else if (rata.rates[select2] > 11 && rata.rates[select2] < 100) {
                        var styles = {
                            height: rata.rates[select2] * 1 + '%',
                            background: '#fcf49a'
                        }

                        if ($(klasy)) {
                            $(klasy).remove();
                            $(days).append("<p class=" + klasa + ">" + day + ' ' + '<strong class="textValue">' + floorRate + "</p>");
                            $('.smallBox').css(styles)
                        }
                        else {
                            $(days).append("<p class=" + klasa + ">" + day + ' ' + '<strong class="textValue">' + floorRate + "</p>");
                            $('.smallBox').css(styles)
                        }

                    }
                    else if (rata.rates[select2] > 81 && rata.rates[select2] < 120) {
                        var styles = {
                            height: rata.rates[select2] * 0.5 + '%',
                            background: 'pink'
                        }
                        if ($(klasy)) {
                            $(klasy).remove();
                            $(days).append("<p class=" + klasa + ">" + day + ' ' + '<strong class="textValue">' + floorRate + "</p>");
                            $('.smallBox').css(styles)
                        }
                        else {
                            $(days).append("<p class=" + klasa + ">" + day + ' ' + '<strong class="textValue">' + floorRate + "</p>");
                            $('.smallBox').css(styles)
                        }

                    }
                    else if (rata.rates[select2] > 121 && rata.rates[select2] < 500) {
                        var styles = {
                            height: rata.rates[select2] * 0.2 + '%',
                            background: '#e1aef5'
                        }
                        if ($(klasy)) {
                            $(klasy).remove();
                            $(days).append("<p class=" + klasa + ">" + day + ' ' + '<strong class="textValue">' + floorRate + "</p>");
                            $('.smallBox').css(styles)
                        }
                        else {
                            $(days).append("<p class=" + klasa + ">" + day + ' ' + '<strong class="textValue">' + floorRate + "</p>");
                            $('.smallBox').css(styles)
                        }

                    }
                    else if (rata.rates[select2] > 501 && rata.rates[select2] < 1300) {
                        var styles = {
                            height: rata.rates[select2] * 0.02 + '%',
                            background: '#f5a856'
                        }

                        if ($(klasy)) {
                            $(klasy).remove();
                            $(days).append("<p class=" + klasa + ">" + day + ' ' + '<strong class="textValue">' + floorRate + "</p>");
                            $('.smallBox').css(styles)
                        }
                        else {
                            $(days).append("<p class=" + klasa + ">" + day + ' ' + '<strong class="textValue">' + floorRate + "</p>");
                            $('.smallBox').css(styles)
                        }

                    }
                    else {
                        var styles = {
                            height: rata.rates[select2] * 0.005 + '%',
                            background: '#ff6257'
                        }
                        if ($(klasy)) {
                            $(klasy).remove();
                            $(days).append("<p class=" + klasa + ">" + day + ' ' + '<strong class="textValue">' + floorRate + "</p>");
                            $('.smallBox').css(styles)
                        }
                        else {
                            $(days).append("<p class=" + klasa + ">" + day + ' ' + '<strong class="textValue">' + floorRate + "</p>");
                            $('.smallBox').css(styles)
                        }

                    }
                }

            })
        }

// ***************************************************************next chart

        function getRates(res) {
//it has been modified to up data days by ajax
//to make code works and avoid a repetition I had to close all in one function , then return a value and new tab , updata a last 12 months
            $.ajax({
                url: 'https://api.fixer.io/' + res + '?base=' + $('#tab-one').val(),
                type: 'GET',
                async: false,
                dataType: 'JSON',
                success: function (rata) {
                    x = rata.rates[$('#tab-two').val()]
                }
            });
            return x
        }

        function printRates() {
            var tab = [];
            for (var i = 0; i < 12; i++) {
                tab.push({
                    x: new Date(moment().subtract(i, 'months').format('YYYY-MM-DD')),
                    y: getRates((moment().subtract(i, 'months').format('YYYY-MM-DD')))
                })
            }
            return tab;

        }

        var chart = new CanvasJS.Chart("chartContainer",
            {
                theme: "NOTHING",
                title: {
                    text: "MONTLY CHECKING"
                },
                animationEnabled: true,
                axisX: {
                    valueFormatString: "MMM",
                    interval: 1,
                    intervalType: "month"

                },
                axisY: {
                    includeZero: false

                },
                data: [

                    {
                        type: "line",
                        //lineThickness: 3,
                        dataPoints: printRates()
                    }
                ]
            });

        chart.render();

    })
    //mortgage advisor advert
    $('.formWrap').delay(4000).fadeIn(400)
    //inputs label on click display on
    $('.formLabel').on('click', function () {
        $(this).prev().css('visibility', 'visible')
    });
    //close a advert
    $('.noThanks').on('click', function () {
        $('.formWrap').fadeOut(0)
    });
    // sendMessage
    $('.sendMessage').on('click', function () {
        $('.formWrap').fadeOut(0)
    });
    //business news -ajax-updating the newest BBC & BUSINESS INSIDER news
    // 83a1e31dab93479e94c7aa1a992df14e
    $.ajax({
        url: 'https://newsapi.org/v1/articles?source=business-insider&sortBy=top&apiKey=83a1e31dab93479e94c7aa1a992df14e',
        type: 'GET',
        dataType: 'JSON',
        success: function (news) {
            for (var i = 0; i < 4; i++) {
                $('.topNews').append('<div class="topNewsChild"><div class="topNewsTitle">' + news.articles[i].title + '<div class="topNewsDes">' + news.articles[i].description + '<a href=' + news.articles[i].url + '><img class="topNewsPic" src=' + news.articles[i].urlToImage + '></a></div></div></div>');

            }

        }

    });
    $.ajax({
        url: 'https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=83a1e31dab93479e94c7aa1a992df14e',
        type: 'GET',
        dataType: 'JSON',
        success: function (news2) {

            for (var i = 0; i < 9; i++) {
                $('.sideNews').append('<div class="sideNewsChild"><div class="sideNewsTitle">' + news2.articles[i].title + '<div class="sideNewsDes">' + news2.articles[i].description + '<a href=' + news2.articles[i].url + '><img class="sideNewsPic" src=' + news2.articles[i].urlToImage + '></a></div></div></div>');

            }

        }
    });

    $.ajax({
        url: 'https://newsapi.org/v1/articles?source=business-insider&sortBy=top&apiKey=83a1e31dab93479e94c7aa1a992df14e',
        type: 'GET',
        dataType: 'JSON',
        success: function (news3) {
            for (var i = 4; i < 10; i++) {
                $('.middleNews').append('<div class="topNewsChild3"><div class="topNewsTitle3">' + news3.articles[i].title + '<div class="topNewsDes3">' + news3.articles[i].description + '<a href=' + news3.articles[i].url + '><img class="topNewsPic3" src=' + news3.articles[i].urlToImage + '></a></div></div></div>');

            }

        }

    });
    $.ajax({
        url: 'https://newsapi.org/v2/top-headlines?sources=the-economist&apiKey=83a1e31dab93479e94c7aa1a992df14e',
        type: 'GET',
        // This is the important part
        xhrFields: {
            withCredentials: false
        },
        // This is the important part
        data: 'JSON',
        success: function (response) {
            for (var i = 0; i < 5; i++) {
                $('.market-posts').append('<div class="market-posts-wrapper"><div class="market-title">' + response.articles[i].title + '<div class="market-desc">' + response.articles[i].description + '<a href=' + response.articles[i].url + '><img class="topNewsPic3" src=' + response.articles[i].urlToImage + '></a></div></div></div>');
            }
            for (var i = 5; i < 10; i++) {
                $('.market-posts2').append('<div class="market-posts-wrapper"><div class="market-title">' + response.articles[i].title + '<div class="market-desc">' + response.articles[i].description + '<a href=' + response.articles[i].url + '><img class="topNewsPic3" src=' + response.articles[i].urlToImage + '></a></div></div></div>');
            }
        },
        error: function (xhr, status) {
            // handle errors
        }
    });
    //mortgage
    $('.mortgage-button').click(function () {
        var income = $('.income').val();
        var spending = $('.spending').val();
        var deposite = Number($('.deposite').val());
        var message = $('.message');

        //income percentage --80% of income is larger than spending
        var minspending = income * 0.80;
        //income minus spending
        var distinction = income / spending;
        var totalAmount = 0;
        var procentageSpending = ((100 - (100 / distinction)) / 100).toFixed(2);
        var procentageLeft = ((1 - procentageSpending) * 100).toFixed(2);
        var procentageRight = procentageSpending * 100;
        console.log(procentageLeft);

        if (income && spending && deposite) {

            //if statments
            if (income < 500) {
                message.text("based on the information you've provided we won't be able to offer you a mortgage")
            } else {
                message.text(" ")
            }
            if (minspending < spending) {
                message.text("based on the information you've provided we won't be able to offer you a mortgage")
            } else {
                message.text(" ")
            }
            if (deposite < 1000) {
                message.text("based on the information you've provided we won't be able to offer you a mortgage")
            }
            else {
                depositeToBorrow = Math.round(deposite + (deposite * procentageSpending * 10));
                totalAmount = Math.round(depositeToBorrow + deposite);
                message.text('we can borrow you ' + depositeToBorrow.toLocaleString() + '. Your capital is ' + totalAmount.toLocaleString());

            }
        } else {
            message.text('please to fill up all inputs')
        }
        //mortgage statystic
        $(".yourDeposite").css({"width": procentageLeft + '%'}).text('');
        $(".weOfferYou").css({"width": procentageRight + '%'}).text(' ');
        $("#total").text('total: ' + totalAmount.toLocaleString());
        $('.key-deposite-info').text('your deposite' + deposite.toLocaleString());
        $('.key-mortgage-info').text('our offert ' + depositeToBorrow.toLocaleString());
        //checking the monthly rate
        $("input[name=gender]").change(function () {
            var mortgageRate = 0;
            var yearsRate = 0;
            var years = $("input[name=gender]:checked").val();
            if (years == '15years') {
                mortgageRate = 3.2 / 100;
                yearsRate = 15;

            }
            else if (years == '25years') {
                mortgageRate = 3.5 / 100;
                yearsRate = 25;
            }
            else {
                mortgageRate = 3.9 / 100;
                yearsRate = 35;
            }
            // (kredyt * oprocentowanie * (ilość rat +1) / 2400)
            var sumYearsRate = depositeToBorrow * ((yearsRate * 12) + 1) / 2400;
            var monthPay = (((sumYearsRate / yearsRate) + (depositeToBorrow / yearsRate)) / 12).toFixed(2);
            var totalMortgagePay = sumYearsRate + depositeToBorrow;
            $('.monthPay').text('Your montly payment is ' + monthPay.toLocaleString());
            $('.totalMortgagePay').text('Total mortgage cost is ' + totalMortgagePay.toLocaleString())

        });
    });

    //market economy news
    $.ajax({
        url: 'https://newsapi.org/v2/top-headlines?sources=independent&apiKey=83a1e31dab93479e94c7aa1a992df14e',
        type: 'GET',
        dataType: 'JSON',
        success: function (response) {
            for (var i = 0; i < 10; i++) {
                $('.independet').append('<a class="independent-links" href=' + response.articles[i].url + '>' + response.articles[i].title + '</a>');
            }
        },
        error: function (xhr, status) {
            // handle errors
        }
    });

    if($('.nav').length!==0) {
        var stickyNavTop = $('.nav').offset().top;
        var stickyNavBottom = $('footer').position();
        console.log($('.nav').height() + 'sprawdzamy');
        console.log(stickyNavBottom + 'totutu');

        var stickyNav = function () {
            var scrollTop = $(window).scrollTop();

            if (scrollTop > stickyNavTop && scrollTop<=1400) {
                $('.nav').addClass('sticky');
            } else {
                $('.nav').removeClass('sticky');
            }
        };
        stickyNav();
        // and run it again every time you scroll
        $(window).scroll(function () {
            stickyNav();
        });
    }




});



