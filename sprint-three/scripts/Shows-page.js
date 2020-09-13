// SHOWS PAGE

const urlShow =
  "https://project-1-api.herokuapp.com/showdates/?api_key=`c726f312-dedb-4aeb-83d4-cabd1a93db40";

axios
  .get(urlShow)
  .then((res) => {
    res.data.forEach((item) => {
      // console.log(res); TODO:
      let showData = {
        date: JSON.stringify(item.date).replace(/"/g, ""),
        venue: JSON.stringify(item.place).replace(/"/g, ""),
        location: JSON.stringify(item.location).replace(/"/g, ""),
      };
      show.push(showData);
    });
    loadShow();
  })
  .catch((err) => {
    console.log(err);
    // console.log(showData);
  });

const show = [];

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

  loadShow();
}

makeShowHeader();

function makeShowHolder() {
  const referenceParent = document.querySelector(".show");
  const showHolder = document.createElement("div");
  showHolder.classList.add("show__holder");
  referenceParent.appendChild(showHolder);

  const referenceHolder = document.querySelector(".show__holder");

  const showInfo = document.createElement("div");
  showInfo.classList.add("show__info");
  referenceHolder.appendChild(showInfo);

  const showDate = document.createElement("p");
  showDate.classList.add("show__info-date");
  showInfo.appendChild(showDate);

  const showVenue = document.createElement("p");
  showVenue.classList.add("show__info-venue");
  showInfo.appendChild(showVenue);

  const showLocation = document.createElement("p");
  showLocation.classList.add("show__info-location");
  showInfo.appendChild(showLocation);

  const emptyInfo = document.createElement("p");
  emptyInfo.classList.add("show__info__empty");
  showInfo.appendChild(emptyInfo);

  showDate.innerText = "DATES";
  showVenue.innerText = "VENUE";
  showLocation.innerText = "LOCATION";
}
makeShowHolder();

// INVOKES MAKES SHOWS HEADER FUNCTION

// function makeShowInfo() {
//   const referenceHolder = document.querySelector(".show__holder");

//   const showInfo = document.createElement("div");
//   showInfo.classList.add("show__info");
//   referenceParent.appendChild(showInfo);

//   const showDate = document.createElement("p");
//   showDate.classList.add("show__info-date");
//   showInfo.appendChild(showDate);

//   const showVenue = document.createElement("p");
//   showVenue.classList.add("show__info-venue");
//   showInfo.appendChild(showVenue);

//   const showLocation = document.createElement("p");
//   showLocation.classList.add("show__info-location");
//   showInfo.appendChild(showLocation);

//   const emptyInfo = document.createElement("p");
//   emptyInfo.classList.add("show__info__empty");
//   showInfo.appendChild(emptyInfo);

//   showDate.innerText = "DATES";
//   showVenue.innerText = "VENUE";
//   showLocation.innerText = "LOCATION";
// }

// makeShowInfo();

//  LOOPS OVER ARRAY TO DISPLAY EVENTS
function loadShow(element) {
  show.forEach((element) => makeShowList(element));
}

// MAKES SHOWS SECTION

function makeShowList(shows) {
  const referenceHolder = document.querySelector(".show__holder");
  // const show = document.querySelector(".show");
  const ShowSchedule = document.createElement("div");
  ShowSchedule.classList.add("show__schedule");
  referenceHolder.appendChild(ShowSchedule);

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
  showDate.innerText = shows.date.toLowerCase();
  showVenue.innerText = "VENUE";
  showVenueName.innerText = shows.venue;
  showLocation.innerText = "LOCATION";
  showCity.innerText = shows.location;
  showButton.innerText = "BUY TICKETS";
}
