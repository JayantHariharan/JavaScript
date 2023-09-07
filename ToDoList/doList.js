const listbtn = document.getElementById("list");
const infobtn = document.getElementById("info");
const addbtn = document.getElementById("add");
const container = document.getElementById("container");
const addreminder = document.getElementById("addreminder");
const savebtn = document.getElementById("save");
const deletebtn = document.getElementById("delete");
const notification = document.getElementById("notification");
let showToday = false;
const currentDate = new Date();
currentDate.setHours(0, 0, 0, 0); 
let doList = [];

listbtn.addEventListener("click", displayList);
infobtn.addEventListener("click", support);
addbtn.addEventListener("click", addReminder);
savebtn.addEventListener("click", saveReminder);
deletebtn.addEventListener("click", () => {
  todayList();
});

function todayList() {
  container.innerHTML = "";
  console.log("todayList");

  const title = document.createElement("h2");
  title.textContent = "TODAY'S LIST";
  container.appendChild(title);

  const currentDateFormatted = currentDate.toISOString().slice(0, 10); 

  doList = doList.filter((re) => {
    const reminderDateFormatted = new Date(re.date).toISOString().slice(0, 10);
    return reminderDateFormatted >= currentDateFormatted;
  });

  for (const re of doList) {
    const reminderDate = new Date(re.date);

    if (
      reminderDate.getFullYear() === currentDate.getFullYear() &&
      reminderDate.getMonth() === currentDate.getMonth() &&
      reminderDate.getDate() === currentDate.getDate()
    ) {
      const reminderItem = document.createElement("div");
      reminderItem.className = "reminder-item";
      reminderItem.textContent = re.title;
      container.appendChild(reminderItem);
      reminderItem.addEventListener("click", () => showReminderDetails(re));
    }
  }
  showToday = true;
}


function displayList() {
  addreminder.classList.remove("active");
  container.classList.remove("active");
  container.innerHTML = "";
  const title = document.createElement("h2");
  title.textContent = "ALL REMINDERS";
  container.appendChild(title);

  const currentDateTimestamp = new Date(
    currentDate.toISOString().slice(0, 10)
  ).getTime();

  const futureReminders = doList.filter((re) => {
    const reminderDateTimestamp = new Date(re.date).getTime();
    return currentDateTimestamp <= reminderDateTimestamp;
  });

  const dateMap = new Map();

  for (const re of futureReminders) {
    const reminderDateFormatted = new Date(re.date)
      .toISOString()
      .slice(0, 10);

    if (!dateMap.has(reminderDateFormatted)) {
      dateMap.set(reminderDateFormatted, []);
    }

    dateMap.get(reminderDateFormatted).push(re);
  }

  for (const [date, reminders] of dateMap) {
    const dateElement = document.createElement("p");
    dateElement.className = "date-group";
    dateElement.textContent = `Date: ${date}`;
    container.appendChild(dateElement);

    dateElement.addEventListener("click", () => {
      container.innerHTML = "";
      title.textContent = `Reminders for Date: ${date}`;
      container.appendChild(title);

      for (const re of reminders) {
        const reminderItem = document.createElement("div");
        reminderItem.className = "reminder-item";
        reminderItem.textContent = re.title;
        container.appendChild(reminderItem);
        reminderItem.addEventListener("click", () => showReminderDetails(re));
      }
    });
  }
  showToday = !showToday;
  if (showToday) {
    todayList();
  }
}

function support() {
  const container = document.getElementById("container");
  container.innerHTML = "";

  const githubButton = document.createElement("button");
  githubButton.textContent = "GitHub";
  githubButton.id = "github";
  githubButton.classList.add("social-button", "github");
  container.appendChild(githubButton);

  const twitterButton = document.createElement("button");
  twitterButton.textContent = "Twitter";
  twitterButton.id = "twitter";
  twitterButton.classList.add("social-button", "twitter");
  container.appendChild(twitterButton);

  const instagramButton = document.createElement("button");
  instagramButton.textContent = "Instagram";
  instagramButton.id = "instagram";
  instagramButton.classList.add("social-button", "instagram");
  container.appendChild(instagramButton);

  const emailButton = document.createElement("button");
  emailButton.textContent = "Email";
  emailButton.id = "email";
  emailButton.classList.add("social-button", "email");
  container.appendChild(emailButton);

  githubButton.addEventListener("click", () => {
    window.open("https://github.com/JayantHariharan", "_blank");
  });
  twitterButton.addEventListener("click", () => {
    window.open("https://twitter.com/Mark17417423", "_blank");
  });
  instagramButton.addEventListener("click", () => {
    window.open("https://www.instagram.com/jayanthariharan/", "_blank");
  });
  emailButton.addEventListener("click", () => {
    window.open("mailto:jayanthariharan98@gmail.com");
  });
}

function addReminder() {
  addreminder.classList.toggle("active");
  container.classList.toggle("active");
}

window.addEventListener("load", todayList);

function saveReminder() {
  const titleInput = document.getElementById("title");
  const dateInput = document.getElementById("date");
  const timeInput = document.getElementById("time");
  const descriptionInput = document.getElementById("description");

  const title = titleInput.value;
  const date = dateInput.value;
  const time = timeInput.value;
  const description = descriptionInput.value;

  const currentDateFormatted = currentDate.toISOString().slice(0, 10);
  const reminderDateTime = new Date(`${date}T${time}`);

  if (reminderDateTime <= currentDate) {
    alert("Please select a current or future date and time for the reminder.");
    return; // Don't save the reminder for past dates
  }

  if (title && date && time && description) {
    const reminder = {
      title: title,
      date: date,
      time: time,
      description: description,
    };

    // Find the index to insert the reminder based on its time
    let insertIndex = 0;
    while (
      insertIndex < doList.length &&
      new Date(doList[insertIndex].date + "T" + doList[insertIndex].time) <= reminderDateTime
    ) {
      insertIndex++;
    }

    doList.splice(insertIndex, 0, reminder);
    titleInput.value = "";
    dateInput.value = "";
    timeInput.value = "";
    descriptionInput.value = "";
    addreminder.classList.remove("active");
    container.classList.remove("active");
    container.innerHTML = "";
    todayList();
  } else {
    alert("Please fill in all fields before saving.");
  }
}




function showReminderDetails(reminder) {
  container.innerHTML = "";

  const contentContainer = document.createElement("div");
  contentContainer.className = "content-container";

  const titleElement = document.createElement("h2");
  titleElement.textContent = reminder.title;

  const dateElement = document.createElement("p");
  dateElement.textContent = `Date: ${reminder.date}`;

  const timeElement = document.createElement("p");
  timeElement.textContent = `Time: ${reminder.time}`;

  const descriptionElement = document.createElement("p");
  descriptionElement.textContent = `Description: ${reminder.description}`;

  contentContainer.appendChild(titleElement);
  contentContainer.appendChild(dateElement);
  contentContainer.appendChild(timeElement);
  contentContainer.appendChild(descriptionElement);

  const btn = document.createElement("div");
  btn.className = "addbtn";
  const backbtn = document.createElement("button");
  backbtn.textContent = "BACK";
  backbtn.id = "back";
  const adddelete = document.createElement("button");
  adddelete.id = "adddelete";
  adddelete.textContent = "DISCARD";

  btn.appendChild(backbtn);
  btn.appendChild(adddelete);

  container.appendChild(contentContainer);
  container.appendChild(btn);
  backbtn.addEventListener("click", () => todayList());
  adddelete.addEventListener("click", () => {
    const index = doList.findIndex((item) => item === reminder);
    if (index !== -1) {
      doList.splice(index, 1);
      displayList();
    }
  });
}

function scheduleNotifications() {
  setInterval(checkReminders, 1000); // Check every second
}

function checkReminders() {
  const currentTime = new Date();

  for (const re of doList) {
    const reminderDateTime = new Date(`${re.date}T${re.time}`);

    if (currentTime >= reminderDateTime) {
      // Skip past reminders
      continue;
    }

    const timeDifference = reminderDateTime - currentTime;

    // Display notification only if the reminder is within 1 second
    if (timeDifference <= 1000) {
      container.classList.add("active");
      displayNotification(re);
      const index = doList.findIndex((item) => item === re);
      if (index !== -1) {
        doList.splice(index, 1);
      }
    }
  }
}

scheduleNotifications()
function displayNotification(reminder) {
  const notification = document.getElementById("notification");
  notification.innerHTML = `<div class="notification-content">
    <p>Reminder: ${reminder.title}</p>
    <button class="btn" id="okButton">OK</button>
  </div>`;

  notification.style.display = "block";

  const okButton = document.getElementById("okButton");
  okButton.addEventListener("click", () => {
    // Remove the reminder from the doList array
    const index = doList.findIndex((item) => item === reminder);
    if (index !== -1) {
      doList.splice(index, 1);
    }
    
    // Hide the notification and update the list
    container.classList.remove("active");
    notification.style.display = "none";
    container.classList.remove("blur-background");
    displayList(); // Refresh the list to reflect the removal
  });

  container.classList.add("blur-background");
}




