const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movie = document.getElementById('movie');
let ticketPrice = parseInt(movie.value);

function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }
}

populateUI();

function updateSelectedSeat() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
  const seatTotal = selectedSeats.length;
  count.innerText = seatTotal;
  total.innerText = seatTotal * ticketPrice;
}

function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem('selectedMovie', JSON.stringify(movieIndex));
  localStorage.setItem('selectedPrice', JSON.stringify(moviePrice));
}

container.addEventListener('click', e => {
  if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
    e.target.classList.toggle('selected');
    updateSelectedSeat();
  }
});

movie.addEventListener('change', e => {
  ticketPrice = parseInt(e.target.value);
  // setMovieData(e.target)
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedSeat();
});

updateSelectedSeat();
