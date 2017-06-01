/*

This file contains all of the code running in the background that makes resumeBuilder.js possible. We call these helper functions because they support your code in this course.

Don't worry, you'll learn what's going on in this file throughout the course. You won't need to make any changes to it until you start experimenting with inserting a Google Map in Problem Set 3.

Cameron Pittman
*/
/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/
var HTMLworkNav = '<li class=myNav"><a class="myNav" href="#workExperience" abbr title="work experience section">%data%</a></li>';
var HTMLeducationNav = '<li class=myNav"><a class="myNav" href="#education" abbr title="education section">%data%</a></li>';
var HTMLprojectsNav = '<li class=myNav"><a class="myNav" href="#projects" abbr title="projects section">%data%</a></li>';
var HTMLskillsNav = '<li class=myNav"><a class="myNav" href="#skills-h2" abbr title="Skills">%data%</a></li>';

var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<i id="role">%data%</i>';

var HTMLcontactGeneric = '<li class="noBullets flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="hidden noBullets flex-item"><span class="orange-text"><a href="tel:%url%" class="mobileNumber fa fa-phone-square fa-2x" aria-hidden="true"></a></span><span class="topInfo">%data%</span></li>';
var HTMLemail = '<li class="hidden noBullets flex-item"><span class="orange-text"><a href="mailto:%url%" class="emailAddress fa fa-envelope-o fa-2x" aria-hidden="true"></a></span><span class="topInfo">%data%</span></li>';
var HTMLtwitter = '<li class="hidden noBullets flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="hidden noBullets flex-item"><span class="orange-text"><a href"%url%" class="githubAccount fa fa-github fa-2x" aria-hidden="true"></a></span><span class="topInfo">%data%</span></li>';
var HTMLblog = '<li class="hidden noBullets flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li id="location" class="hidden noBullets flex-item"><span class="orange-text"><a class="riyadh fa fa-map-marker" aria-hidden="true"></a></span><i>%data%</i></li>';

var HTMLbioPic = '<img src="%data%" class="biopic"<abbr title="welcome to my online resume :)"</abbr>';
var HTMLwelcomeMsg = '<div><hr class="hidden"><span class="welcome-message">%data%</span><hr class="hidden"></div>';

var HTMLskillsStart = '<h2 id="skills-h2"><i class="fa fa-cogs" aria-hidden="true"></i> Skills at a Glance:</h2><ul id="skills"></ul>';
var HTMLskills = '<li class="mySkills">%data%</li>';
var HTMLcourcesStart = '<h3 id="keyCources"><i class="fa fa-book" aria-hidden="true"></i> Relevant courses include:</h3><ul id="cources"></ul>';
var HTMLcources = '<li class="myCource">%data%</li>';
var HTMLcertStart = '<h2 id="certificate-h2"><i class="fa fa-certificate" aria-hidden="true"></i> Certificates:</h2><ul id="certificate"></ul>';
var HTMLcert = '<br><li class="noBullets certificates"><i class="fa fa-star-o" aria-hidden="true"></i> %data%</li>';
var HTMLCertURL = '<i><a id="CerLink" href="%url%" target="_blank">%data%</a></i>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="%url%">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<br><li>%data%</li>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectImage = '<article class="col-md-4 col-sm-6">' +
                       '<a data-toggle="modal" data-target="#project%num%">'+
                       '<img class="projectImg center-block image-project" src="%url%" alt="">'+
                       '</a>';
var HTMLprojectTitle = '<h3 class="title-project">%data%</h3></article>';
var HTMLmodalProject = '<div class="modal fade" id="project%num%" tabindex="-1" role="dialog" aria-hidden="true"' +
                       '<div class="modal-dialog modal-sm">' +
                       '<div class="modal-content">' +
                       '<div class="modal-header orange">' +
                       '<h3 class="modal-title center-text">%title%</h3>' +
                       '</div>' +
                       '<div class="modal-body">' +
                       '<h3 class="github-header">' +
                       '<a href="%projectDemo%" target="_blank" class="flex-box abutton center-text">Demo</a>' +
                       '<a href="%projectLink%" target="_blank" class="flex-box abutton center-text">GitHub</a>' +
                       '</h3>' +
                       '<ul id="modalLi" class="modal-list center-text">' +
                       '</ul>' +
                       '</div>' +
                       '<div class="modal-footer">' +
                       '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div>';
var HTMLprojectPoint = '<li>%data%</li>';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a class="pnu" href="%url%">%data%</a>';
var HTMLschoolDegree = '<i class="fa fa-star-o" aria-hidden="true"></i> %data%</a>';
var HTMLschoolDates = '<div class="schoolInfo location-text">%data%</div>';
var HTMLschoolLocation = '<div class="schoolInfo location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';
var HTMLHonor = '<br><em class"degree">%data%</em>';
var HTMLacademicPlanURL = '<a class="academicPlan" href="%url%"><i class="fa fa-eye" aria-hidden="true"></i> %data%</a>';

var HTMLonlineClasses = '<br><h3 id="onlinecources"><i class="fa fa-headphones" aria-hidden="true"></i> Online Classes:</h3>';
var HTMLonlineTitle = '<i class="fa fa-star-o" aria-hidden="true"></i> %data% </a>';
var HTMLonlineSchool = '<a class="udacity" href="%url%"> %data%</a>';
var HTMLonlineDates = '<div class="location-text">%data%</div>';
var HTMLprogramURL = '<a class="udacityFend" href="%url%"><i class="fa fa-eye" aria-hidden="true"></i> %data%</a>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';



// makes the height of all selected elements exactly equal.
$(function () {
    $('.item')
        .matchHeight();
});
/*
The Internationalize Names challenge found in the lesson Flow Control from JavaScript Basics requires you to create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document)
    .ready(function () {
        $('button')
            .click(function () {
                var $name = $('#name');
                var iName = inName($name.text()) || function () {};
                $name.html(iName);
            });
    });

/*
The next few lines about clicks are for the Collecting Click Locations quiz in the lesson Flow Control from JavaScript Basics.
*/
var clickLocations = [];

function logClicks(x, y) {
    clickLocations.push({
        x: x,
        y: y
    });
    console.log('x location: ' + x + '; y location: ' + y);
}

$(document)
    .click(function (loc) {
        // your code goes here!
    });



/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map; // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

    var locations;

    var mapOptions = {
        disableDefaultUI: true
    };

    /*
    For the map to be displayed, the googleMap var must be
    appended to #mapDiv in resumeBuilder.js.
    */
    map = new google.maps.Map(document.querySelector('#map'), mapOptions);


    /*
    locationFinder() returns an array of every location string from the JSONs
    written for bio, education, and work.
    */
    function locationFinder() {

        // initializes an empty array
        var locations = [];

        // adds the single location property from bio to the locations array
        locations.push(bio.contacts.location);

        // iterates through school locations and appends each location to
        // the locations array. Note that forEach is used for array iteration
        // as described in the Udacity FEND Style Guide:
        // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
        education.schools.forEach(function (school) {
            locations.push(school.location);
        });

        // iterates through work locations and appends each location to
        // the locations array. Note that forEach is used for array iteration
        // as described in the Udacity FEND Style Guide:
        // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
        work.jobs.forEach(function (job) {
            locations.push(job.location);
        });

        return locations;
    }

    /*
    createMapMarker(placeData) reads Google Places search results to create map pins.
    placeData is the object returned from search results containing information
    about a single location.
    */
    function createMapMarker(placeData) {

        // The next lines save location data from the search result object to local variables
        var lat = placeData.geometry.location.lat(); // latitude from the place service
        var lon = placeData.geometry.location.lng(); // longitude from the place service
        var name = placeData.formatted_address; // name of the place from the place service
        var bounds = window.mapBounds; // current boundaries of the map window

        // marker is an object with additional data about the pin for a single location
        var marker = new google.maps.Marker({
            map: map,
            position: placeData.geometry.location,
            title: name
        });

        // infoWindows are the little helper windows that open when you click
        // or hover over a pin on a map. They usually contain more information
        // about a location.
        var infoWindow = new google.maps.InfoWindow({
            content: name
        });

        // hmmmm, I wonder what this is about...
        google.maps.event.addListener(marker, 'click', function () {
            // your code goes here!
        });

        // this is where the pin actually gets added to the map.
        // bounds.extend() takes in a map location object
        bounds.extend(new google.maps.LatLng(lat, lon));
        // fit the map to the new marker
        map.fitBounds(bounds);
        // center the map
        map.setCenter(bounds.getCenter());
    }

    /*
    callback(results, status) makes sure the search returned results for a location.
    If so, it creates a new map marker for that location.
    */
    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            createMapMarker(results[0]);
        }
    }

    /*
    pinPoster(locations) takes in the array of locations created by locationFinder()
    and fires off Google place searches for each location
    */
    function pinPoster(locations) {

        // creates a Google place search service object. PlacesService does the work of
        // actually searching for location data.
        var service = new google.maps.places.PlacesService(map);

        // Iterates through the array of locations, creates a search object for each location
        locations.forEach(function (place) {
            // the search request object
            var request = {
                query: place
            };

            // Actually searches the Google Maps API for location data and runs the callback
            // function with the search results after each search.
            service.textSearch(request, callback);
        });
    }

    // Sets the boundaries of the map based on pin locations
    window.mapBounds = new google.maps.LatLngBounds();

    // locations is an array of location strings returned from locationFinder()
    locations = locationFinder();

    // pinPoster(locations) creates pins on the map for each location in
    // the locations array
    pinPoster(locations);

}

// Calls the initializeMap() function when the page loads
//window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
//and adjust map bounds
//window.addEventListener('resize', function(e) {
//Make sure the map bounds get updated on page resize
//map.fitBounds(mapBounds);
//});