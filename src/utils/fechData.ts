export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "914581cf34msh172a527d1623623p1b4a62jsnb5f201debaf8",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com"
  }
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "914581cf34msh172a527d1623623p1b4a62jsnb5f201debaf8",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com"
  }
};

export const fechData = async (
  url: string,
  options: {
    method: string;
    headers: {
      "X-RapidAPI-Key": string;
      "X-RapidAPI-Host": string;
    };
  }
) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
