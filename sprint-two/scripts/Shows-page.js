// SHOWS PAGE

const show = [
  {
    date: "Mon Dec 17 2018",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Jul 18 2019",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Jul 22 2019",
    venue: "View Loungue",
    location: "San Francisco, CA",
  },
  {
    date: "Mon Dec 17 2018",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    date: "Mon Dec 17 2018",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },
  {
    date: "Mon Dec 17 2018",
    venue: "Pres Club",
    location: "San Francisco, CA",
  },
];

// MAKES PARENT CONTAINER FOR

function makeScheduleDiv() {
  const showParent = document.createElement("div");
  showParent.classList.add("show");
  let referenceHero = document.querySelector(".hero");
  referenceHero.parentNode.insertBefore(
    showParent,
    referenceHero.nextElementSibling
  );
}

makeScheduleDiv();

// MAKES HEADER THAT HOLDS SHOW TITLE AND DATE, VENUE AND LOCATION

function makeShowHeader() {
  const referenceParent = document.querySelector(".show");
  const showHeader = document.createElement("div"); // Parent container for title
  showHeader.classList.add("show__header");
  referenceParent.appendChild(showHeader);

  const showTitle = document.createElement("h2"); // Title
  showTitle.classList.add("show__title");
  showHeader.appendChild(showTitle);
  showTitle.innerHTML = "Shows";

  const showInfo = document.createElement("div");
  showInfo.classList.add("show__info");
  showHeader.appendChild(showInfo);

  const showDate = document.createElement("p");
  showDate.classList.add("show__info-date");
  showInfo.appendChild(showDate);
  const showVenue = document.createElement("p");
  showVenue.classList.add("show__info-venue");
  showInfo.appendChild(showVenue);
  const showLocation = document.createElement("p");
  showLocation.classList.add("show__info-location");
  showInfo.appendChild(showLocation);

  showDate.innerText = "DATES";
  showVenue.innerText = "VENUE";
  showLocation.innerText = "LOCATION";

  loadShow();
}

// INVOKES MAKES SHOWS HEADER FUNCTION
makeShowHeader();

//  LOOPS OVER ARRAY TO DISPLAY EVENTS
function loadShow(element) {
  show.forEach((element) => makeShowList(element));
}

// MAKES SHOWS SECTION

function makeShowList(shows) {
  const show = document.querySelector(".show");
  const ShowSchedule = document.createElement("div");
  ShowSchedule.classList.add("show__schedule");
  show.appendChild(ShowSchedule);

  const showDateTitle = document.createElement("h4");
  showDateTitle.classList.add("show__schedule-title");
  ShowSchedule.appendChild(showDateTitle);

  const showDate = document.createElement("p");
  showDate.classList.add("show__schedule-date");
  ShowSchedule.appendChild(showDate);

  const showVenue = document.createElement("h4");
  showVenue.classList.add("show__schedule-venue");
  ShowSchedule.appendChild(showVenue);

  const showVenueName = document.createElement("p");
  showVenueName.classList.add("show__schedule-venue-name");
  ShowSchedule.appendChild(showVenueName);

  const showLocation = document.createElement("h4");
  showLocation.classList.add("show__schedule-location");
  ShowSchedule.appendChild(showLocation);

  const showCity = document.createElement("p");
  showCity.classList.add("show__schedule-city");
  ShowSchedule.appendChild(showCity);

  const showButton = document.createElement("Button");
  showButton.classList.add("show__button");
  ShowSchedule.appendChild(showButton);

  showDateTitle.innerText = "DATE";
  showDate.innerText = shows.date;
  showVenue.innerText = "VENUE";
  showVenueName.innerText = shows.venue;
  showLocation.innerText = "LOCATION";
  showCity.innerText = shows.location;
  showButton.innerText = "BUY TICKETS";
}
