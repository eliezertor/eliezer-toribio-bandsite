// SHOWS PAGE

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

function makeShowHeader() {
  const referenceParent = document.querySelector(".show");
  const showHeader = document.createElement("div"); // Parent container for title
  showHeader.classList.add("show__header");
  referenceParent.appendChild(showHeader);
  const showTitle = document.createElement("h2"); // Title
  showTitle.classList.add("show__title");
  showHeader.appendChild(showTitle);
  showTitle.innerHTML = "Shows";
}

makeShowHeader();

function makeShowList() {
  const show = document.querySelector(".show");
  const ShowSchedule = document.createElement("div"); // Parent container for schedule
  ShowSchedule.classList.add("show__schedule");
  show.parentNode.insertBefore(ShowSchedule, show.nextElementSibling);

  const showDateTitle = document.createElement("div"); // Date heading
  showDateTitle.classList.add("show__schedule-title");
  show.appendChild(showDateTitle);

  const showDate = document.createElement("time"); // Date
  showDate.classList.add("show__schedule-date");
  show.appendChild(showDate);

  const showVenue = document.createElement("div"); // Venue heading
  showVenue.classList.add("show__schedule-venue");
  show.appendChild(showVenue);

  const showVenueName = document.createElement("p"); // Venue name
  showVenueName.classList.add("show__schedule-venue-name");
  show.appendChild(showVenueName);

  const showLocation = document.createElement("div"); // Location
  showLocation.classList.add("show__schedule-location");
  show.appendChild(showLocation);

  const showCity = document.createElement("p"); // City
  showCity.classList.add("show__schedule-city");
  show.appendChild(showCity);

  const showButton = document.createElement("Button"); // Button
  showButton.classList.add("show__button");
  show.appendChild(showButton);

  showDateTitle.innerText = "DATE";
  showDate.innerText = "Mon Dec 17 2018";
  showVenue.innerText = "VENUE";
  showVenueName.innerText = "Ronald Lane";
  showLocation.innerText = "LOCATION";
  showCity.innerText = "San Francisco, Ca";
  showButton.innerText = "BUT TICKETS";
}

makeShowList();
