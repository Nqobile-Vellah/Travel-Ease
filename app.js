// Function to update the counter state based on the input value
document.addEventListener("DOMContentLoaded", function () {
  const guestsButton = document.getElementById("guests");
  const guestsPopup = document.getElementById("guestsPopup");
  const guestsInput = document.getElementById("guests"); 

  guestsButton.addEventListener("click", function () {
    guestsPopup.classList.toggle("show");
  });

  // Array of counters
  const counters = [
    { minusButton: document.getElementById("adultsMinus"), plusButton: document.getElementById("adultsPlus"), countElement: document.getElementById("adultsCount"), maxCount: 30, singularLabel: "Adult", pluralLabel: "Adults" },
    { minusButton: document.getElementById("roomsMinus"), plusButton: document.getElementById("roomsPlus"), countElement: document.getElementById("roomsCount"), maxCount: 30, singularLabel: "Room", pluralLabel: "Rooms" },
    { minusButton: document.getElementById("childrenMinus"), plusButton: document.getElementById("childrenPlus"), countElement: document.getElementById("childrenCount"), maxCount: 10, singularLabel: "Child", pluralLabel: "Children" }
  ];

  counters.forEach(counter => {
    if (counter.countElement.id === "childrenCount") {
      counter.countElement.textContent = "0";
    } else {
      counter.countElement.textContent = "1"; 
    }

    updateCounterState(counter);
    updateGuestsInput(counters, guestsInput);

    counter.minusButton.addEventListener("click", function () {
      let count = parseInt(counter.countElement.textContent);
      if (counter.countElement.id === "childrenCount" && count > 0) { 
        counter.countElement.textContent = count - 1;
        updateCounterState(counter);
        updateGuestsInput(counters, guestsInput);
      } else if (count > 1) { 
        counter.countElement.textContent = count - 1;
        updateCounterState(counter);
        updateGuestsInput(counters, guestsInput);
      }
    });

    counter.plusButton.addEventListener("click", function () {
      let count = parseInt(counter.countElement.textContent);
      if (count < counter.maxCount) {
        counter.countElement.textContent = count + 1;
        updateCounterState(counter);
        updateGuestsInput(counters, guestsInput);
      }
    });
  });

  function updateCounterState(counter) {
    const count = parseInt(counter.countElement.textContent);
    if (count === 0 || count === 1) { 
      counter.minusButton.classList.add("disabled");
    } else if (count === counter.maxCount) {
      counter.plusButton.classList.add("disabled");
    } else {
      counter.minusButton.classList.remove("disabled");
      counter.plusButton.classList.remove("disabled");
    }
  }

  function updateGuestsInput(counters, inputElement) {
  const guestCounts = counters.map(counter => {
    if (counter.countElement.id === "childrenCount" && parseInt(counter.countElement.textContent) === 0) {
      return null;
    }

    if (counter.singularLabel && counter.pluralLabel) {
      return parseInt(counter.countElement.textContent) > 1 ? `${counter.countElement.textContent} ${counter.pluralLabel}` : `${counter.countElement.textContent} ${counter.singularLabel}`;
    } else {
      return `${counter.countElement.textContent} ${counter.pluralLabel}`;
    }
  });

  inputElement.textContent = guestCounts.filter(count => count !== null).join(" • ");
}
  const checkInOutInput = document.getElementById("check-in-out");



  // FAQs Toggle
  const toggles = document.querySelectorAll(".faq-toggle");
  toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentElement.classList.toggle("active");
  });
});


  flatpickr('#check-in-out', {
    mode: 'range',
    dateFormat: "j F, Y",
    minDate: 'today',
    onClose: function(selectedDates, dateStr, instance) {
      checkInOutInput.value = dateStr.replace(" to ", " - ");
    }
  });
});

