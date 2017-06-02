// bio object that has my personal data assigned to it
var bio = {
    // properties
    "name": "Maha Alkhathlan",
    "role": "",
    "welcomeMessage": "I am very ambitious in the field of Information Technology, the web development field in particular. I aim to develop my knowledge further and optimize my code by making it more effective and more efficient.<br> My career objective is to work with a reputed institution that will provide me a good platform  where I can utilize my skills and the knowledge gained from my academic achievements.",
    "biopic": "images/pic.png",
    "contacts": {
        "mobile": "+966539299939",
        /* contacts data will display with a .hover() */
        "email": "Maha.Alkhathlan@gmail.com",
        "gitHub": "Maha-kay",
        "location": "Riyadh, Saudi Arabia"
    },
    "skills": ["UI Technologies: HTML5, CSS3, AJAX.", "Porgramming Languages: Visual Basic, Javascript.", "Frameworks: jQuery, Bootstrap.", "IDE: Sublime Text, Atom.", "Databases: SQL and PLSQL.", "Methodologies: SDLC, UML."]
};

// encapsulated function within bio object
bio.display = function () {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header")
        .append(formattedName);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header")
        .append(formattedRole);
    var formattedWelcomMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header")
        .append(formattedWelcomMsg);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#topContacts")
        .after(formattedBioPic);
    // display contacts
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile).replace("%url%", bio.contacts.mobile);
    $("#topContacts")
        .append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email).replace("%url%", bio.contacts.email);
    $("#topContacts")
        .append(formattedEmail);
    var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.gitHub);
    $("#topContacts")
        .append(formattedGitHub);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#role")
        .after(formattedLocation);
    // href link to wiki/Riyadh using jQuery **additional not required
    $(function () {
        var url = $("#location")
            .find("a.riyadh");
        url.attr("href", "https://en.wikipedia.org/wiki/Riyadh");
        url.attr("target", "_blank");
    });
    // open tel:mobileNumber as new tab using jQuery **additional not required
    $(function () {
        var url = $("#topContacts")
            .find("a.mobileNumber");
        url.attr("target", "_blank");
        var abbr = $("#topContacts")
            .find("a.mobileNumber");
        abbr.attr("title", "Mobile Number");
    });
    // open mailto:myEmail adress as a new tab using jQuery **additional not required
    $(function () {
        var url = $("#topContacts")
            .find("a.emailAddress");
        url.attr("target", "_blank");
        var abbr = $("#topContacts")
            .find("a.emailAddress");
        abbr.attr("title", "Email Address");
    });
    // href link to my github account using jQuery **additional not required
    $(function () {
        var url = $("#topContacts")
            .find("a.githubAccount");
        url.attr("href", "https://github.com/Maha-kay");
        url.attr("target", "_blank");
        var abbr = $("#topContacts")
            .find("a.githubAccount");
        abbr.attr("title", "github");
    });
    // display skills
    if (bio.skills.length > 0) {
        $("#header")
            .append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            var formatteSkills = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills")
                .append(formatteSkills);
        }
    }
    // display footer contacts
    $("#footerContacts")
        .append(formattedMobile);
    $("#footerContacts")
        .append(formattedEmail);
    $("#footerContacts")
        .append(formattedGitHub);
    $("#footerContacts")
        .append(formattedLocation);
        $("#footerContacts .riyadh").addClass("fa-2x");
};

bio.display(); // call the function

// education object that has education data assigned to it
var education = {
    // properties
    "schools": [{
        "name": "Princess Norua University (PNU)",
        "location": "Riyadh, SA",
        "degree": "Bachelor Degree",
        "majors": ["Information Systems"],
        "dates": "May 2016",
        "honor": "With Second Class Honor, and a GPA of (4.47 out of 5).",
        "url": "http://pnu.edu.sa",
        "academicPlan": "Academic plan"
    }],
    "onlineCourses": [{
        "title": "Nanodegree<br><em>Front-End Web Dveloper.<em>",
        "school": "Udacity",
        "dates": "Jun. 2017",
        "url": "https://www.udacity.com",
        "FendDesc": "Visit program description"
    }],
    "featuredCourses": ["Support and decision making systems", "Data Warehousing and Data Mining", "Databases Administration", "Databases Programming", "Project Management", "Information Systems Analysis and Design", "Information Systems Security", "Web Applications Programming", "E-Business Systems Design"]
};

// encapsulated function within education object
education.display = function () {
    for (var e = 0; e < education.schools.length; e++) {
        // output education data
        $("#education")
            .append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[e].name)
            .replace("%url%", education.schools[e].url);
        $(".education-entry")
            .append(formattedSchoolName);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[e].location);
        $(".education-entry")
            .append(formattedSchoolLocation);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[e].degree);
        $(".education-entry")
            .append(formattedDegree);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[e].majors);
        $(".education-entry")
            .append(formattedMajor);
        var formattedGraduationYear = HTMLschoolDates.replace("%data%", education.schools[e].dates);
        $(".education-entry")
            .append(formattedGraduationYear);
        var formattedHonor = HTMLHonor.replace("%data%", education.schools[e].honor);
        $(".education-entry")
            .append(formattedHonor);
        var formattedAcadPlan = HTMLacademicPlanURL.replace("%data%", education.schools[e].academicPlan);
        $(".education-entry")
            .append(formattedAcadPlan);
    }
    // open pnu.edu.sa as a new tab using jQuery **additional not required
    $(function () {
        var url = $("#education")
            .find("a.pnu");
        url.attr("target", "_blank");
    });
    // href link to the academic plan using jQuery **additional not required
    $(function hrefreplace() {
        var url = $("#education")
            .find("a.academicPlan");
        url.attr("href", "http://www.pnu.edu.sa/arr/Faculties/ComputerScience/Information-Systems/Documents/Academic-Levels.pdf");
        url.attr("target", "_blank");
    });

    // display featured courses **Additional property not required
    if (education.featuredCourses.length > 0) {
        $("#education")
            .append(HTMLcourcesStart);
        $("#education")
            .append(HTMLschoolStart); //div
        for (var a = 0; a < education.featuredCourses.length; a++) {
            var formattedCources = HTMLcources.replace("%data%", education.featuredCourses[a]);
            $("#cources")
                .append(formattedCources);
        }
    }
    for (var u = 0; u < education.onlineCourses.length; u++) {
        // output onlineCourses data
        $("#education")
            .append(HTMLonlineClasses);
        $("#education")
            .append(HTMLschoolStart); //div
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[u].title);
        $(".education-entry:last")
            .append(formattedOnlineTitle);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[u].school)
            .replace("%url%", education.onlineCourses[u].url);
        $(".education-entry:last")
            .prepend(formattedOnlineSchool);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[u].dates);
        $(".education-entry:last")
            .append(formattedOnlineDates);
        var formattedProgramUrl = HTMLprogramURL.replace("%data%", education.onlineCourses[u].FendDesc);
        $(".education-entry:last")
            .append(formattedProgramUrl);
    }

    // open udacity.com as a new tab using jQuery **additional not required
    $(function () {
        var url = $("#education")
            .find("a.udacity");
        url.attr("target", "_blank");
    });

    // href link to the program description using jQuery **additional not required
    $(function hrefreplace() {
        var url = $("#education")
            .find("a.udacityFend");
        url.attr("href", "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001");
        url.attr("target", "_blank");
    });
};

education.display(); // call the function

// work object that has jobs data assigned to it
var work = {
    // properties
    "jobs": [{
        "employer": "Freelance",
        "title": "Graphic designer",
        "location": "Riyadh, SA",
        "dates": "2015 - now",
        "description": "Receiving projects briefing and information from clients, and handling all aspects of project production from the early stage of develop solutions for design needs through to final delivery.<li>Designing posters, infographics, Motions Graphics and Video Editing.</li>",
        "url": ""
    }]
};

// encapsulated function within work object
work.display = function () {
    for (var w = 0; w < work.jobs.length; w++) {
        $("#workExperience")
            .append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", (work.jobs[w].url !== null ? HTMLworkEmployer.replace("%data%", work.jobs[w].employer)
            .replace("%url%", work.jobs[w].url) : work.jobs[w].employer));
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[w].title);
        var formattedEmpTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last")
            .append(formattedEmpTitle);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[w].location);
        $(".work-entry:last")
            .append(formattedLocation);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[w].dates);
        $(".work-entry:last")
            .append(formattedDates);
        var formattedDesc = HTMLworkDescription.replace("%data%", work.jobs[w].description);
        $(".work-entry:last")
            .append(formattedDesc);
    }
};

work.display(); // call the function

// projects object that has my projects data assigned to it
var projects = {
    // properties
    "message" : "Click on each of the projects below to reveal more information.",
    "projects": [{
    	"title": "Riyadh Colleges and Universities",
        "dates": "Jun 2017",
        "description": [  "A single-page web application, built using the Knockout framework, that displays a Google Map of an area and various points of interest. Users can search all included landmarks and, when selected, additional information about a landmark is presented from the FourSquare and Wikipedia APIs.<li>This website was build using: JavaScript, HTML, CSS, Knockout, AJAX, JavaScript frameworks</li>"],
        "images": ["images/map.png"],
        "demo": 'https://maha-kay.github.io/Neighborhood-Map-MSK/',
        "url": "https://github.com/Maha-kay/Neighborhood-Map-MSK"
    },
    {
        "title": "Object Oriented Javascript & HTML5 Canvas: Frogger Arcade Game",
        "dates": "2017",
        "description": ["This game was build using HTML5 canvas completely.<li>The game menu was build by overlaying HTML DOM over the canvas.</li> <li>Object-oriented Javascript was used including object inheritance</li> <li>The game has a game engine loop, visual assets and continuously renders the canvas, many framers per second.</li> <li>The game rules and where to play can be found in the Github link to the project.</li>"],
        "images": ["images/game200.png"],
        "demo": 'https://maha-kay.github.io/Arcade-game/',
        "url": "https://github.com/Maha-kay/Arcade-game"
    },
    {
        "title": "Responsive Web Design: Portfolio website",
        "dates": "Mar 2017",
        "description": [  "This website was build using a responsive grid-based layout utilizing Bootstrap. This website works equally well across all screen sizes and devices in a responsive way. <li>The online resume website is generated using data from json so it's very easy to create your own resume by just changing the json.</li><li>Semantic elements have been used throughout the website. The images and fonts used in the website are themselves are responsive.</li><li>Images have been optimized using srcset and compression. Serve different image resolutions and quality according to viewport width and relative width of image in the viewport in a responsive manner.</li><li>A grunt workflow has been incorporated while building the website, utilizing various grunt plugins to optimize the development workflow and performance of the website.</li><li>A consistent set of CSS, HTML style and formatting rules were followed while coding up the website. Seperation of concerns between style and HTML.</li><li>Advanced components of Bootstrap were incorporated into the website like modals and navbar. Optimized website and resource fetching for website to improve Google pagespeed scores.</li>"],
        "images": ["images/responsiveWEB.png"],
        "demo": '#',
        "url": "https://github.com/Maha-kay/Portfolio-Site"
    },
    {
        "title": "Mobile Application",
        "dates": "May 2016",
        "description": ["Design and development of mobile application for providing education and entertainment to kids as a graduation project.<br>The project was awarded an (+A) by the college faculty."],
        "images": ["images/mobileApp.png"],
        "demo": '#',
        "url": "https://github.com/Maha-kay"
    }
    ]
};

// encapsulated function within projects object
projects.display = function () {
    $('#projects-intro').append(this.message);
    var count = 0;
    for (var p = 0; p < projects.projects.length; p++) {
        count = count + 1;
        $("#projects").append(HTMLprojectStart);
        var formattedProjImages = HTMLprojectImage.replace("%num%", count.toString()).replace("%url%", projects.projects[p].images);
        var formattedProjTitle = HTMLprojectTitle.replace("%data%",projects.projects[p].title);
        $("#projects-section").append(formattedProjImages + formattedProjTitle);
        var formattedModalProject = HTMLmodalProject.replace("%num%", count.toString()).replace("%title%",projects.projects[p].title).replace("%projectLink%", projects.projects[p].url).replace("%projectDemo%", projects.projects[p].demo);
        $("#modal-section").append(formattedModalProject);
        var formattedProjectPoint = HTMLprojectPoint.replace("%data%", projects.projects[p].description);
        $(".modal-list:last").append(formattedProjectPoint);
    }
};

projects.display(); // call the function

// I decided to create additional object

var certificates = {
    // properties
    "certification": [{
            "title": "Front-End Web Developer Nanodegree",
            "urlDesc": "certificate of program completion",
            "url": "ciscoCer/nd001.pdf"

        },{
            "title": "CCNA R & S: Introduction to Networks.",
            "urlDesc": "certificate of course completion",
            "url": "ciscoCer/CCNA1.pdf"

        }, {
            "title": "CCNA R & S: Routing and Switching Essentials.",
            "urlDesc": "certificate of course completion",
            "url": "ciscoCer/CCNA2.pdf"

        }, {
            "title": "CCNA R & S: Scaling Networks.",
            "urlDesc": "certificate of course completion",
            "url": "ciscoCer/CCNA3.pdf"

        }, {
            "title": "CCNA R & S: Connecting Networks.",
            "urlDesc": "certificate of course completion",
            "url": "ciscoCer/CCNA4.pdf"

        }

    ]
};

// encapsulated function
certificates.display = function () {
    $("#header")
        .append(HTMLcertStart);
    for (var c = 0; c < certificates.certification.length; c++) {
        var formattedCert = HTMLcert.replace("%data%", certificates.certification[c].title);
        $("#header")
            .append(formattedCert);
        var formattedCertURL = HTMLCertURL.replace("%data%", certificates.certification[c].urlDesc)
            .replace("%url%", certificates.certification[c].url);
        $("#header")
            .append(formattedCertURL);
    }
};

certificates.display(); //call the function

// display nav
var displayNav = function () {
    var formattedWorkNav = HTMLworkNav.replace("%data%", "Work Experience");
    $("#nav")
        .prepend(formattedWorkNav);
    var formattedEduNav = HTMLeducationNav.replace("%data%", "Education");
    $("#nav")
        .prepend(formattedEduNav);
    var formattedProjectNav = HTMLprojectsNav.replace("%data%", "Projects");
    $("#nav")
        .prepend(formattedProjectNav);
    var formattedSkillsNav = HTMLskillsNav.replace("%data%", "Skills");
    $("#nav")
        .prepend(formattedSkillsNav);
};

displayNav(); // call the function

//display google map
//var addMap = function () {
//    $("#mapDiv")
//        .append(googleMap);
//};

//addMap(); //call the function

//Log clicks quiz
$(document)
    .click(function (loc) {
        var x = loc.pagex;
        var y = loc.pagey;
        logClicks(x, y);
    });
// fadein
$(document)
    .ready(function () {
        $(".hidden")
            .fadeIn(3000)
            .removeClass("hidden");
    });

// menue slide down
$("document")
    .ready(function () {
        $("#nav")
            .slideUp(1)
            .delay(100)
            .slideDown('slow');
    });

/* International name quiz
$("#main").append(internationalizeButton);
var inName = function(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[0] = name[0].slice(0,1).toUpperCase()+name[0].slice(1).toLowerCase();
    name[1] = name[1].toUpperCase();
    var result = name.join(" ");
    return result;
    };

    inName(); // call the function */