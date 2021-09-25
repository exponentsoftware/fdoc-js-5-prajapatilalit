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
      let languages = country.languages;

      for (const language in languages) {
        totalLanguage.push(languages[language]);
      }
    });

    console.log(totalLanguage);

    const languageCount = totalLanguage.reduce((acc, curr) => {
      if (acc.indexOf(curr) === -1) {
        acc.push(curr);
      }
      return acc;
    }, []);

    console.log(
      "Total Language spoke by all countries is ",
      languageCount.length
    );
  } catch (error) {
    console.log("error");
  }
};

getLanguageData();
