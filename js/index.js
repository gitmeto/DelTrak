function geoFindMe() {
  const status = document.querySelector("#status");

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const location = [{ Time: Date.now(), Latitude: latitude, Longitude: longitude }]

    function loadTableData(items) {
      const table = document.getElementById("coordsRecordBody");
      items.forEach(item => {
        let row = table.insertRow();
        let Time = row.insertCell(0);
        Time.innerHTML = item.Time;
        let Latitude = row.insertCell(1);
        Latitude.innerHTML = item.Latitude;
        let Longitude = row.insertCell(2);
        Longitude.innerHTML = item.Longitude;
      });
    }
    loadTableData(location);
  }

  function error() {
    status.textContent = "Unable to retrieve your location";
  }

  if (!navigator.geolocation) {
    status.textContent = "Geolocation is not supported by your browser";
  } else {
    status.textContent = "Status: Recording…";
    navigator.geolocation.watchPosition(success, error);
  }


}
