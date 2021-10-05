$(document).ready(function () {
    //event handle for like button
    $('div.eventButton img.likeButton').click(function () {
        var likeDiv = $(this).parent().siblings('ul.eventInfo').children('li.attendees').children('div.likeLine').children('div.likeNumber');
        var likeNumber = parseInt($(likeDiv).text());
        likeNumber++;
        console.log(likeNumber);
        $(likeDiv).text(likeNumber);
        var successMsg = $('<p class = "like-success">Like successful</p>');
        // $(this).parent().append(successMsg);
        $(successMsg).appendTo($(this).parent()).fadeOut('slow', function () {
            $(this).remove();
        })
    });
    checkQueryString();
});

function checkQueryString() {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    if (urlParams.has('search-topics'))
        var keyword = urlParams.get("search-topics");
    $("#search-page-title").append(keyword)
    var searchResult;
    if (keyword === 'event' || keyword === 'events') {
        searchResult = $("<ul id=\"eventBoxes\">\n" +
            "            <li class=\"eventBlock\">\n" +
            "                <div class=\"eventImage\">\n" +
            "                    <a href=\"item_details_page.html\">\n" +
            "                        <img alt=\"bird watchers\"\n" +
            "                             src=\"img/events/bird-watchers.jpg\">\n" +
            "                    </a>\n" +
            "                </div>\n" +
            "                <ul class=\"eventInfo\">\n" +
            "                    <li class=\"eventTitle\">Bird Watchers</li>\n" +
            "                    <li class=\"eventLocation\">Location: Trail A</li>\n" +
            "                    <li class=\"eventTime\">09/01/2021 10:00 AM</li>\n" +
            "                    <li class=\"attendees\">3 attendees</li>\n" +
            "                </ul>\n" +
            "                <div class=\"eventButton\">\n" +
            "                    <a href=\"item_details_page.html\">\n" +
            "                        <img alt=\"add icon\"\n" +
            "                             src=\"img/events/add-event-button.png\">\n" +
            "                    </a>\n" +
            "                    <a href=\"#\">\n" +
            "                        <img alt=\"share-con\"\n" +
            "                             src=\"img/site/share-icon.png\">\n" +
            "                    </a>\n" +
            "                </div>\n" +
            "            </li>\n" +
            "\n" +
            "            <li class=\"eventBlock\">\n" +
            "                <div class=\"eventImage\">\n" +
            "                    <a href=\"#\">\n" +
            "                        <img alt=\"music in the woods\"\n" +
            "                             src=\"img/events/music-in-the-woods.jpg\">\n" +
            "                    </a>\n" +
            "                </div>\n" +
            "                <ul class=\"eventInfo\">\n" +
            "                    <li class=\"eventTitle\">Music in the Woods</li>\n" +
            "                    <li class=\"eventLocation\">Location: Trail B</li>\n" +
            "                    <li class=\"eventTime\">09/11/2021 10:00 AM</li>\n" +
            "                    <li class=\"attendees\">13 attendees</li>\n" +
            "                </ul>\n" +
            "                <div class=\"eventButton\">\n" +
            "                    <a href=\"#\">\n" +
            "                        <img alt=\"add icon\"\n" +
            "                             src=\"img/events/add-event-button.png\">\n" +
            "                    </a>\n" +
            "                    <a href=\"#\">\n" +
            "                        <img alt=\"share-con\"\n" +
            "                             src=\"img/site/share-icon.png\">\n" +
            "                    </a>\n" +
            "                </div>\n" +
            "            </li>\n" +
            "\n" +
            "            <li class=\"eventBlock\">\n" +
            "                <div class=\"eventImage\">\n" +
            "                    <a href=\"#\">\n" +
            "                        <img alt=\"deer patrol\"\n" +
            "                             src=\"img/events/deer-patrol.jpeg\">\n" +
            "                    </a>\n" +
            "                </div>\n" +
            "                <ul class=\"eventInfo\">\n" +
            "                    <li class=\"eventTitle\">Deer-patrol</li>\n" +
            "                    <li class=\"eventLocation\">Location: Trail C</li>\n" +
            "                    <li class=\"eventTime\">09/21/2021 10:00 AM</li>\n" +
            "                    <li class=\"attendees\">23 attendees</li>\n" +
            "                </ul>\n" +
            "                <div class=\"eventButton\">\n" +
            "                    <a href=\"#\">\n" +
            "                        <img alt=\"add icon\"\n" +
            "                             src=\"img/events/add-event-button.png\">\n" +
            "                    </a>\n" +
            "                    <a href=\"#\">\n" +
            "                        <img alt=\"share-con\"\n" +
            "                             src=\"img/site/share-icon.png\">\n" +
            "                    </a>\n" +
            "                </div>\n" +
            "            </li>\n" +
            "        </ul>")
    }
    else if (keyword === "bird" || keyword === "bird watcher"){
        searchResult = $("<div id=\"homeBoxes\">\n" +
            "                <div id=\"homePageImage\">\n" +
            "                    <a href=\"#\">\n" +
            "                        <img alt=\"bird watchers\"\n" +
            "                             src=\"img/events/bird-watchers.jpg\">\n" +
            "                    </a>\n" +
            "                </div>\n" +
            "                <div id=\"eventInfoAndButton\">\n" +
            "                    <ul class=\"eventInfo\">\n" +
            "                        <li class=\"eventTitle\">Bird Watchers</li>\n" +
            "                        <li class=\"eventLocation\">Location: Trail A</li>\n" +
            "                        <li class=\"eventTime\">09/01/2021 10:00 AM</li>\n" +
            "                        <li class=\"attendees\">3 attendees\n" +
            "                            <div class=\"likeNumber\">22 likes</div>\n" +
            "                        <li>\n" +
            "                    </ul>\n" +
            "                    <button>Click to Register</button>\n" +
            "                    <div class=\"eventButton\">\n" +
            "                        <a href=\"#\">\n" +
            "                            <img alt=\"add icon\"\n" +
            "                                 src=\"img/events/add-event-button.png\">\n" +
            "                        </a>\n" +
            "                        <a href=\"#\">\n" +
            "                            <img alt=\"share-icon\"\n" +
            "                                 src=\"img/site/share-icon.png\">\n" +
            "                        </a>\n" +
            "                        <a class=\"likeButton\" href=\"#\">\n" +
            "                            <img class=\"likeButton\" alt=\"like-icon\"\n" +
            "                                 src=\"img/site/like-icon.png\">\n" +
            "                        </a>\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "            </div>")
    }

    else {
        searchResult = $("<h3>There is no available result.</h3>")
    }

    $(searchResult).appendTo($("div#search-result"));

}

