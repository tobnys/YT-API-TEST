(function(){
    const YT_API = "https://www.googleapis.com/youtube/v3/search";


    $(".js-submit-form").submit(function(e){
        e.preventDefault();
        var searchValue = $(".js-form-value").val();
        initiateAPI(searchValue);
    });



    function initiateAPI(searchTerm)
    {
        $.getJSON(YT_API, {
            part: "snippet",
            q: searchTerm,
            key: "AIzaSyDnqSQm4qoZ_8FpWxyGcCylBH4SZp3FzBY",
        })
        .done(function(e)
        {
            console.log("Done");
            renderHTML(e);
        });
    }

    function renderHTML(result)
    {
        for(var i = 0; i < result.items.length; i++)
        {
            console.log(result.items[i].snippet.thumbnails.default.url);
            var imgSrc = result.items[i].snippet.thumbnails.default.url;
            $(".js-results").append(`<img src="${imgSrc}">`)
        }
    }

    /*
    function initiateAPI(searchTerm)
    {
        const settings = {
        method: "GET",
        url: YT_API,
        data: {
            part: "snippet",
            q: searchTerm,
            key: "AIzaSyDnqSQm4qoZ_8FpWxyGcCylBH4SZp3FzBY",
        },
        dataType: "json"
        };

        var result = $.ajax(settings).done(function(e){
            console.log("Ajax call complete");
        });
        console.log(result);
        console.log(result)
    }
    */

}())