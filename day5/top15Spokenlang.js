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

    //here we can do loop over trough entire countries api
    countryData.forEach((country) => {
      languages = country.languages;
      //here we can also loop over each country languages
      for (const lang in languages) {
        totalLanguage.push({ language: languages[lang] });
      }
    });

    let output = Object.values(
      totalLanguage.reduce((obj, { language }) => {
        if (obj[language] === undefined)
          obj[language] = { language: language, country: 1 };
        else obj[language].country++;
        return obj;
      }, {})
    );

    const top15MostSpokeLang = [];
    const sortedArray = output.sort((a, b) => b.country - a.country);
    for (let i = 0; i < 15; i++) {
      top15MostSpokeLang.push(sortedArray[i]);
    }
    console.log(top15MostSpokeLang);
  } catch (error) {
    console.log("error");
  }
};

getLanguageData();
