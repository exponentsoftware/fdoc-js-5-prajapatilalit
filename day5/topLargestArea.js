//using asyn await and try catch block for fetching the api
const getAreaData = async () => {
  try {
    const res = await fetch("https://restcountries.com/v3/all");
    if (res.ok) {
      console.log("Fetch data successful");
    } else {
      console.log("error");
    }
    const countryData = await res.json();
    // console.log(countryData);

    let countriesArea = [];

    //here we can do loop over trough entire countries api
    countryData.map((country) => {
      countriesArea.push({ country: country.name, area: country.area });
    });

    // console.log(countriesArea);

    const top10MostAreaCountries = [];
    const sortedArray = countriesArea.sort((a, b) => b.area - a.area);
    for (let i = 0; i < 10; i++) {
      top10MostAreaCountries.push(sortedArray[i]);
    }
    //Print on console top 10 country having large area
    console.log(top10MostAreaCountries);
  } catch (error) {
    console.log("error");
  }
};

getAreaData();
