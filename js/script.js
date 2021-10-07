$(document).ready(function () {
    //event delegation implementation for share/like button
    $('.eventButton').on('click', 'img', function () {
        event.preventDefault();
        var target = event.target;
        var eventElement;
        switch (target.className) {
            case 'shareButton':
                eventElement = $(this).parent().siblings('ul.eventInfo').children('li.attendees').children('span.shareNumber');
                break;
            case 'likeButton':
                eventElement = $(this).parent().siblings('ul.eventInfo').children('li.attendees').children('span.likeNumber');
                break;
        }
        var eventNumber = parseInt($(eventElement).text());
        eventNumber++;
        console.log(eventNumber);
        $(eventElement).text(eventNumber);
        var successMsg = $('<p class = "click-success">Click successful</p>');
        // $(this).parent().append(successMsg);
        $(successMsg).appendTo($(this).parent()).fadeOut('slow', function () {
            $(this).remove();
        })

    });
    //the second user interaction use mouseover/mouseout events.
    // add new element of user information in the add_post_page.html
    var userInfo;
    $('.userImage img').mouseover(function () {
        event.preventDefault();
        var target = event.target;
        var eventElement;
        if (target.className == "heartsQueen") {
            userInfo = $('<ul class = "popInfo">\n' +
                '                    <li>Age: 27</li>\n' +
                '                    <li>Gender: Female</li>\n' +
                '                    <li>Interested Group: Bird Watchers</li>\n' +
                '                    <li>Self-Intro: I am Hearts Queen. Nice to meet you</li>\n' +
                '                </ul>')
        } else {
            userInfo = $("<ul class = \"popInfo\">\n" +
                "                    <li>This user choose not to declare their information</li>\n" +
                "                </ul>")
        }
        userInfoElement = $(this).parent().siblings('div.userInfo');
        $(userInfo).appendTo(userInfoElement).show();
    });
    $('.userImage img').mouseout(function () {
        $(userInfo).hide();
    });


    // register and unregister button, the number of attendee will add/minus respectively
       $('button').click(function () {
           attendeeElement = $(this).siblings('ul.eventInfo').children('li.attendees').children('span.attendeesNumber');
           var attendeeNumber = parseInt($(attendeeElement).text());
         console.log($(this).text());
        if ($(this).text() == "Register") {
            $(this).text("Unregister");
            attendeeNumber++;
        } else {
           $(this).text("Register");
           attendeeNumber--;
        }
        $(attendeeElement).text(attendeeNumber);
    });


    checkQueryString();


});

//search bar implementation per Project 3 requirement
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
    } else if (keyword === "bird" || keyword === "bird watcher") {
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
    } else {
        searchResult = $("<h3>There is no available result.</h3>")
    }

    $(searchResult).appendTo($("div#search-result"));

}

