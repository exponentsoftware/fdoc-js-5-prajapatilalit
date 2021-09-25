//using asyn await and try catch block for fetching the api
const getLanguageData = async () => {
  try {
    const res = await fetch("https://restcountries.com/v3/all");
    if (res.ok) {
      console.log("Fetch data successful");
    } else {
      console.log("error");
    }
    const countryData = await res.json();
    let totalLanguage = [];

    countryData.forEach((country) => {
      let CountriesLanguage = [];
      let languages = country.languages;
      CountriesLanguage.push(languages);

      // CountriesLanguage.forEach((languageName) => {
      //   totalLanguage.push(languageName);
      // });
    });

    // console.log(totalLanguage);
    let output = totalLanguage.map(function (obj) {
      return Object.keys(obj)
        .sort()
        .map(function (key) {
          return obj[key];
        });
    });
    console.log(output);

    // const languageCount = totalLanguage.reduce((acc, curr) => {
    //   if (acc.indexOf(curr) === -1) {
    //     acc.push(curr);
    //   }
    //   return acc;
    // }, []);

    // console.log(
    //   "Total Language spoke by all countries is ",
    //   languageCount.length
    // );
  } catch (error) {
    console.log("error");
  }
};

getLanguageData();
