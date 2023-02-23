const submit_btn = document.getElementById("submit_btn");
const city_name = document.getElementById("city_name");
const output = document.getElementById("output");
const temp_real_val = document.getElementById("temp_real_val");
const temp_status = document.getElementById("temp_status");
const data_hide = document.getElementById("data_hide");
const search_btn = document.getElementById("search_btn");

const getInfo = async (event) => {
  event.preventDefault();
  let cityVal = city_name.value;
  if (cityVal == "") {
    output.innerText = `First Enter The City Name Before Search`;
    data_hide.classList.add("data_hide");
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=493bb0a5d78209715449e258b3dfb9e2`;
      const response = await fetch(url);
      const data = await response.json();
      const arrData = [data];
      output.innerText = `${arrData[0].name} ${arrData[0].sys.country}`;
      temp_real_val.innerText = arrData[0].main.temp;
      temp_status.innerText = arrData[0].weather[0].main;
      let weather = arrData[0].weather[0].main;
      if (weather == "Clear") {
        temp_status.innerHTML =
          '<i class="fas fa-sun" style="color:#eccc68"></i>';
      } else if (weather == "Clouds") {
        temp_status.innerHTML =
          '<i class="fas fa-cloud" style="color:#f1f2f6"></i>';
      } else if (weather == "Rain") {
        temp_status.innerHTML =
          '<i class="fas fa-cloud-rain" style="color:#a4b0be"></i>';
      } else {
        temp_status.innerHTML =
          '<i class="fas fa-cloud" style="color:#f1f2f6"></i>';
      }
      data_hide.classList.remove("data_hide");
    } catch (error) {
      output.innerText = `Please Enter the City Name Properly`;
      data_hide.classList.add("data_hide");
    }
  }
};
submit_btn.addEventListener("click", getInfo);
submit_btn.addEventListener("keypress", getInfo);
search_btn.addEventListener("click", getInfo);
search_btn.addEventListener("keypress", getInfo);
