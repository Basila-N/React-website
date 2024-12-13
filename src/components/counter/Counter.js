import React, { useEffect } from 'react';
import './Counter.css'

const Counter = () => {
  // Function to run the counter animation
  const runCounter = (counter) => {
    const target = +counter.getAttribute('data-number');
    const speed = 100;

    const updateCount = () => {
      const current = +counter.innerText;
      const increment = Math.ceil(target / speed);
      if (current < target) {
        counter.innerText = current + increment;
        setTimeout(updateCount, 50); // Controls counting speed
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  };

  useEffect(() => {
    // Observe counters when they come into view
    const counters = document.querySelectorAll('.number');

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          runCounter(entry.target);
          observer.unobserve(entry.target); // Stops after counting once
        }
      });
    });

    counters.forEach(counter => {
      observer.observe(counter);
    });

    return () => {
      // Cleanup observer on component unmount
      if (observer) observer.disconnect();
    };
  }, []); // Empty dependency array to run once when the component mounts

  return (
    <div className="counter-wrapper">
      <div className="container">
        <div className="row d-md-flex">
          <div className="col-md-9">
            <div className="row d-md-flex align-items-center">
              <div className="col-md-3 col-sm-6 mb-4">
                <div className="counter">
                  <strong className="number" data-number="11">0</strong>
                  <span>Years of Experience</span>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 mb-4">
                <div className="counter">
                  <strong className="number" data-number="100">0</strong>
                  <span>Cakes/Variety</span>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 mb-4">
                <div className="counter">
                  <strong className="number" data-number="30">0</strong>
                  <span>Staffs</span>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 mb-4">
                <div className="counter">
                  <strong className="number" data-number="1500">0</strong>
                  <span>Happy Customers</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 text-center count_para">
            <p>The amount of love gained by you people is just pure, and we are continuously improving our services and tastes.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
