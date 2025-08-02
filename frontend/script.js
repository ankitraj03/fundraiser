fetch('http://localhost:5000/user')
  .then(res => res.json())
  .then(data => {
    document.getElementById('intern-name').textContent = data.name;
    document.getElementById('code').textContent = data.referralCode;
    document.getElementById('amount').textContent = data.amountRaised;
  })
  .catch(err => {
    console.error('Failed to fetch:', err);
  });
function animateCount(id, endValue, duration = 2000) {
  const element = document.getElementById(id);
  let start = 0;
  const increment = endValue / (duration / 20);

  const counter = setInterval(() => {
    start += increment;
    if (start >= endValue) {
      start = endValue;
      clearInterval(counter);
    }
    element.textContent = Math.floor(start);
  }, 20);
}

fetch('http://localhost:5000/user')
  .then(res => res.json())
  .then(data => {
    document.getElementById('intern-name').textContent = data.name;
    document.getElementById('code').textContent = data.referralCode;
    
    animateCount('amount', data.amountRaised);
  })
  .catch(err => {
    console.error('Failed to fetch:', err);
  });


    function toggleMenu() {
        const nav = document.getElementById("navBtns");
        nav.classList.toggle("active");
    }
