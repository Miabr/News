$(document).ready(function() {



    $('.list-news').slimScroll({
        height: "630px"
    });
    $('.curent-news').slimScroll({
        height: "630px"
    });

    $.get(
        'https://newsapi.org/v1/sources', {
            apiKey: "0067881b05e24f70a05ef148c3e08530",
            language: "en"
        },
        function(data) {
            var dat = data.sources;

            var arraySub = []

            for (var i = 0; i < dat.length; i++) {
                arraySub.push(dat[i]["id"])
            }

            for (var i = 1; i < dat.length; i++) {

                $('.selects-section__source-select').append($("<option value ='" + dat[i]["id"] +"'>" + dat[i]["name"] + "</option>"));

            };

            var dat = data.sources;

            var unSortArray = [];

            for (var i = 0; i < dat.length; i++) {

                unSortArray.push(dat[i]["category"]);

            };

            function unique(arr) {
                var result = [];

                nextInput:
                    for (var i = 0; i < arr.length; i++) {
                        var str = arr[i];
                        for (var j = 0; j < result.length; j++) {
                            if (result[j] == str) continue nextInput;
                        }
                        result.push(str);
                    }

                return result;
            }

            var sortArray = unique(unSortArray);

            for (var i = 1; i < sortArray.length; i++) {

                $('.selects-section__category-select').append($("<option value ='" + sortArray[i] +"'>" + sortArray[i] + "</option>"));
            };

        }
    );

    $.get(

        'https://newsapi.org/v1/articles', {
            source: "abc-news-au",
            apiKey: "0067881b05e24f70a05ef148c3e08530"
        },
        function(data) {

            araySor = data.articles;

            var arrayAtrr = []

            for (var i = 0; i < araySor.length; i++) {

                $('.list-news').append($("<div class = 'news_wrap'><div class='news_label'>'" + araySor[i]['title'] + "'</div><div class='news_op'>'" + araySor[i]['description'] +"'</div></div>"));


                $('.news_wrap').eq(0).addClass('active');

            };

            $('.curent-news').empty();


            $('.curent-news').append($("<div class='title'>'" + araySor[0]['title'] +"'</div>"))
                             .append($("<div class='description'>'" + araySor[0]['description'] + "'</div>"))
                             .append($("<a href = '" + araySor[0]['url'] + "' class='url'>'" + araySor[0]['url'] + "'</a>"))
                             .append($("<div class = 'news_img'></div>"));

            $('.news_img').css('background-image','url(' + araySor[0]['urlToImage'] + ')');

            $('.curent-news').slimScroll({
                height: "630px"
            });

            $('.title').click(function(){
                    document.location.href=$('.url').attr('href');
            });
            $('.news_img').click(function(){
                    document.location.href=$('.url').attr('href');
            });

            $('.news_wrap').click(function() {

                $('.curent-news').empty();

                $(this).addClass('active').siblings('.news_wrap').removeClass('active');

                $('.curent-news').append($("<div class='title'>'" + araySor[$(this).index('.news_wrap')]['title'] +"'</div>"))
                                 .append($("<div class='description'>'" + araySor[$(this).index('.news_wrap')]['description'] + "'</div>"))
                                 .append($("<a href = '" + araySor[$(this).index('.news_wrap')]['url'] + "' class='url'>'" + araySor[$(this).index('.news_wrap')]['url'] + "'</a>"))
                                 .append($("<div class = 'news_img'></div>"));

                $('.news_img').css('background-image','url(' + araySor[$(this).index('.news_wrap')]['urlToImage'] + ')');

                $('.title').click(function(){
                        document.location.href=$('.url').attr('href');
                });
                $('.news_img').click(function(){
                        document.location.href=$('.url').attr('href');
                });

                $('.curent-news').slimScroll({
                    height: "630px"
                });


            });

        }
    );

   $('.selects-section__source-select').selectmenu({change: function( event, ui ) {

        $('.selects-section__options-source-defoult').attr('disabled', 'disabled');

        $('.list-news').empty();

        $('.curent-news').empty();

        $.get(
            'https://newsapi.org/v1/articles', {
                source: $('.selects-section__source-select').val(),
                apiKey: "0067881b05e24f70a05ef148c3e08530"
            },
            function(data) {

                araySor = data.articles;

                var arrayAtrr = []

                for (var i = 0; i < araySor.length; i++) {

                    $('.list-news').append($("<div class = 'news_wrap'><div class='news_label'>'" + araySor[i]['title'] + "'</div><div class='news_op'>'" + araySor[i]['description'] +"'</div></div>"));

                    $('.news_wrap').eq(0).addClass('active');

                };

                $('.curent-news').empty();


                $('.curent-news').append($("<div class='title'>'" + araySor[0]['title'] +"'</div>"))
                                 .append($("<div class='description'>'" + araySor[0]['description'] + "'</div>"))
                                 .append($("<a href = '" + araySor[0]['url'] + "' class='url'>'" + araySor[0]['url'] + "'</a>"))
                                 .append($("<div class = 'news_img'></div>"));

                $('.news_img').css('background-image','url(' + araySor[0]['urlToImage'] + ')');

                $('.title').click(function(){
                        document.location.href=$('.url').attr('href');
                });
                $('.news_img').click(function(){
                        document.location.href=$('.url').attr('href');
                });

                $('.news_wrap').click(function() {

                    $('.curent-news').empty();

                    $(this).addClass('active').siblings('.news_wrap').removeClass('active');

                    $('.curent-news').append($("<div class='title'>'" + araySor[$(this).index('.news_wrap')]['title'] +"'</div>"))
                                     .append($("<div class='description'>'" + araySor[$(this).index('.news_wrap')]['description'] + "'</div>"))
                                     .append($("<a href = '" + araySor[$(this).index('.news_wrap')]['url'] + "' class='url'>'" + araySor[$(this).index('.news_wrap')]['url'] + "'</a>"))
                                     .append($("<div class = 'news_img'></div>"));

                    $('.news_img').css('background-image','url(' + araySor[$(this).index('.news_wrap')]['urlToImage'] + ')');

                    $('.title').click(function(){
                            document.location.href=$('.url').attr('href');
                    });
                    $('.news_img').click(function(){
                            document.location.href=$('.url').attr('href');
                    });

                    $('.curent-news').slimScroll({
                        height: "630px"
                    });

                });


            }
        )

    }});

    $('.selects-section__category-select').selectmenu({change: function( event, ui ) {


        $('.selects-section__options-category-defoult').attr('disabled', 'disabled');

        $( ".selects-section__source-select" ).selectmenu( "destroy" );

        $('.selects-section__source-select').empty();

        $('.list-news').empty();

        $('.curent-news').empty();



        $.get(
            'https://newsapi.org/v1/sources', {
                apiKey: "0067881b05e24f70a05ef148c3e08530",
                language: "en",
                category: $('.selects-section__category-select').val()
            },
            function(data) {
                var dat = data.sources;

                for (var i = 0; i < dat.length; i++) {

                    $('.selects-section__source-select').append($("<option value ='" + dat[i]["id"] + "'>" + dat[i]["name"] +"</option>"));

                };


                $.get(
                    'https://newsapi.org/v1/articles', {
                        source: dat[0]["id"],
                        apiKey: "0067881b05e24f70a05ef148c3e08530"
                    },
                    function(data) {

                         araySor = data.articles;

                         $('.curent-news').empty();

                         $('.curent-news').append($("<div class='title'>'" + araySor[0]['title'] +"'</div>"))
                                          .append($("<div class='description'>'" + araySor[0]['description'] + "'</div>"))
                                          .append($("<a href = '" + araySor[0]['url'] + "' class='url'>'" + araySor[0]['url'] + "'</a>"))
                                          .append($("<div class = 'news_img'></div>"));

                         $('.news_img').css('background-image','url(' + araySor[0]['urlToImage'] + ')');

                         $('.title').click(function(){
                                 document.location.href=$('.url').attr('href');
                         });
                         $('.news_img').click(function(){
                                 document.location.href=$('.url').attr('href');
                         });


                         $('.curent-news').slimScroll({
                             height: "630px"
                         });

                    })



                $('.selects-section__source-select').selectmenu({change: function( event, ui ) {

                     $('.selects-section__options-source-defoult').attr(
                         'disabled', 'disabled');

                     $('.list-news').empty();

                     $('.curent-news').empty();

                     $.get(
                         'https://newsapi.org/v1/articles', {
                             source: $('.selects-section__source-select')
                                 .val(),
                             apiKey: "0067881b05e24f70a05ef148c3e08530"
                         },
                         function(data) {

                             araySor = data.articles;

                             var arrayAtrr = []

                             for (var i = 0; i < araySor.length; i++) {

                                 $('.list-news').append($("<div class = 'news_wrap'><div class='news_label'>'" + araySor[i]['title'] + "'</div><div class='news_op'>'" + araySor[i]['description'] +"'</div></div>"));

                                 $('.news_wrap').eq(0).addClass('active');

                             };

                             $('.curent-news').empty();


                             $('.curent-news').append($("<div class='title'>'" + araySor[0]['title'] +"'</div>"))
                                              .append($("<div class='description'>'" + araySor[0]['description'] + "'</div>"))
                                              .append($("<a href = '" + araySor[0]['url'] + "' class='url'>'" + araySor[0]['url'] + "'</a>"))
                                              .append($("<div class = 'news_img'></div>"));

                             $('.news_img').css('background-image','url(' + araySor[0]['urlToImage'] + ')');

                             $('.title').click(function(){
                                     document.location.href=$('.url').attr('href');
                             });
                             $('.news_img').click(function(){
                                     document.location.href=$('.url').attr('href');
                             });



                             $('.news_wrap').click(function() {

                                 $('.curent-news').empty();

                                 $(this).addClass('active').siblings('.news_wrap').removeClass('active');

                                 $('.curent-news').append($("<div class='title'>'" + araySor[$(this).index('.news_wrap')]['title'] +"'</div>"))
                                                  .append($("<div class='description'>'" + araySor[$(this).index('.news_wrap')]['description'] + "'</div>"))
                                                  .append($("<a href = '" + araySor[$(this).index('.news_wrap')]['url'] + "' class='url'>'" + araySor[$(this).index('.news_wrap')]['url'] + "'</a>"))
                                                  .append($("<div class = 'news_img'></div>"));

                                 $('.news_img').css('background-image','url(' + araySor[$(this).index('.news_wrap')]['urlToImage'] + ')');

                                 $('.title').click(function(){
                                         document.location.href=$('.url').attr('href');
                                 });
                                 $('.news_img').click(function(){
                                         document.location.href=$('.url').attr('href');
                                 });

                                 $('.curent-news').slimScroll({
                                     height: "630px"
                                 });


                             });
                         }
                     )

                 }});





                $.get(
                    'https://newsapi.org/v1/articles', {
                        source: dat[0]["id"],
                        apiKey: "0067881b05e24f70a05ef148c3e08530"
                    },
                    function(data) {
                        arraySorr = data.articles

                        for (var i = 0; i < arraySorr.length; i++) {

                            $('.list-news').append($("<div class = 'news_wrap'><div class='news_label'>'" + araySor[i]['title'] + "'</div><div class='news_op'>'" + araySor[i]['description'] +"'</div></div>"));

                            $('.news_wrap').eq(0).addClass('active');

                        }

                        $('.news_wrap').click(function() {

                            $('.curent-news').empty();

                            $(this).addClass('active').siblings('.news_wrap').removeClass('active');

                            $('.curent-news').append($("<div class='title'>'" + araySor[$(this).index('.news_wrap')]['title'] +"'</div>"))
                                             .append($("<div class='description'>'" + araySor[$(this).index('.news_wrap')]['description'] + "'</div>"))
                                             .append($("<a href = '" + araySor[$(this).index('.news_wrap')]['url'] + "' class='url'>'" + araySor[$(this).index('.news_wrap')]['url'] + "'</a>"))
                                             .append($("<div class = 'news_img'></div>"));

                            $('.news_img').css('background-image','url(' + araySor[$(this).index('.news_wrap')]['urlToImage'] + ')');

                            $('.title').click(function(){
                                    document.location.href=$('.url').attr('href');
                            });
                            $('.news_img').click(function(){
                                    document.location.href=$('.url').attr('href');
                            });

                            $('.curent-news').slimScroll({
                                height: "630px"
                            });


                        });

                    }
                )
            }
        )

    }});



});
