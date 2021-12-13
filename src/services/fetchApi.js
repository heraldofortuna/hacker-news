const fetchApiService = () => {
  const BASE_URL =
    "https://hn.algolia.com/api/v1/search_by_date?query=angular&page=0";

  fetch(BASE_URL)
    .then((res) => res.json())
    .then((data) => console.log(data));
};

export default fetchApiService;
