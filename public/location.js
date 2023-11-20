function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("ok");
    }
  }
  
  function showPosition(position) {
    console.log(position);
  }

  getLocation();