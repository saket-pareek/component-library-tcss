import { API_URL, API_KEY } from './data';

export default function imageSearch(el) {
  const inputEl = el.querySelector('.image-search__input');
  const searchEl = el.querySelector('.image-search__search-btn');
  const searchResultsEl = el.querySelector('.image-search__search-results');
  const showBtnEl = el.querySelector('.image-search__show-btn');
  let imagesArr = [];

  const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  const renderShowBtn = (data) => {
    if (data.total_pages > 0) showBtnEl.classList.add('show');
  };

  const retrievePageNum = () => imagesArr.length / 10 + 1;

  const handleSearch = async (e) => {
    const inputValue = inputEl.value;
    if (!inputValue) {
      searchResultsEl.innerHTML = '';
      showBtnEl.classList.remove('show');
      return;
    }
    const pageNum = e.target.classList.contains('image-search__search-btn')
      ? 1
      : retrievePageNum();
    const data = await fetchData(
      `${API_URL}/?page=${pageNum}&query=${inputValue}&client_id=${API_KEY}`
    );
    const relevantData = data?.results?.map((el) => ({
      img: el?.urls?.regular,
      desc: el?.alt_description,
    }));
    imagesArr =
      imagesArr.length > 0 && pageNum > 1
        ? [...imagesArr, ...relevantData]
        : relevantData;
    renderImages();
    renderShowBtn(data);
  };

  const renderImages = () => {
    const markupArr = imagesArr?.map(
      (el) => `<div
            class="image-search__result-container group relative cursor-pointer overflow-hidden w-full min-[480px]:w-[45%] min-[768px]:w-[30%] rounded-[10px] border border-black"
          >
            <img
              src="${el?.img}"
              class="image-search__img w-full transition duration-300 group-hover:scale-110 h-[300px] object-cover"
              alt=""
            />
            <div
              class="image-search__description transition duration-300 group-hover:bg-gray-200 p-[15px] bg-white absolute w-full bottom-0"
            >
              ${el?.desc}
            </div>
          </div>`
    );
    searchResultsEl.innerHTML = markupArr.join('');
  };

  const handleEnterPress = (e) => {
    if (e.keyCode !== 13) return;
    searchEl.click();
  };

  inputEl.addEventListener('keypress', handleEnterPress);
  searchEl.addEventListener('click', handleSearch);
  showBtnEl.addEventListener('click', handleSearch);
}
