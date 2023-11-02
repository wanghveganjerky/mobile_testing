async function fetchWeatherData() {
    const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=40.74256%2C%20-73.986415';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd445c97b8cmsha3e99f0eaab65f1p1a7e98jsn5ea5a03645dc',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        console.log("Location: " + result.location.name);
        console.log("cloud: " + result.current.cloud);
        console.log("temp_c: " + result.current.temp_c);
      
        const myValue = result.current.temp_c;
        console.log("My Value: " + myValue);
         
        const myValue2 = result.current.cloud;
        console.log("My Value 2: " + myValue2);
      
        const fontWeight = result.current.temp_c * 50;
        console.log("Font Weight: " + fontWeight); 

        const windSpeed = result.current.cloud * 50;
        console.log("windspeed: " + windSpeed); 

        const styleSheetContent = `
        h1 {
            font-variation-settings: "wght" 100;
            animation: breathe 60000ms infinite forwards;
        }
        @keyframes breathe {
            0% {
                font-variation-settings: "wght" 100;
            }
            60% {
                font-variation-settings: "wght" ${fontWeight}; /* adjust the duration based on wind speed */
            }
            100% {
                font-variation-settings: "wght" 100;
            }
        }
    `;
        

        const styleSheetContent2 = `
        .sunContainer {
        animation-duration: ${100000 / fontWeight}s;  /* adjust the duration based on wind speed */
        }
        `;
        const styleSheet2 = document.createElement("style");
        styleSheet2.type = "text/css";
        styleSheet2.innerText = styleSheetContent2;
        document.head.appendChild(styleSheet2);

        const styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerText = styleSheetContent;
        document.head.appendChild(styleSheet);

    } catch (error) {
        console.error(error);
    }
}

fetchWeatherData();




window.addEventListener('wheel', function(e) {
    e.preventDefault();
  }, { passive: false });
  
  // Allow scrolling with arrow keys
  window.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowUp') {
      window.scrollBy(0, -50); // Adjust the value as needed
    } else if (e.key === 'ArrowDown') {
      window.scrollBy(0, 50); // Adjust the value as needed
    }
  });
  
  let startY;
  
  window.addEventListener('touchstart', function(e) {
    startY = e.touches[0].clientY;
  });
  
  window.addEventListener('touchmove', function(e) {
    const currentY = e.touches[0].clientY;
    const diffY = startY - currentY;
  
    e.preventDefault();
    const scrollAmount = 200; // Adjust the value as needed
  
    if (diffY > 0) {
      // Scrolling down
      window.scrollBy(0, scrollAmount);
    } else {
      // Scrolling up
      window.scrollBy(0, -scrollAmount);
    }
  }, { passive: false });
  

  
  