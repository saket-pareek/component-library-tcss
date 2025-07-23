import { fetchData } from '../../js/utils';
import { API_URL } from './const';

export default function recipeBook(el) {
  const recipeList = el.querySelector('.recipe-book__list');

  async function renderRecipes(url) {
    const { recipes } = await fetchData(url);
    const markupArr = recipes.map(
      ({ image, title, extendedIngredients, sourceUrl }) => `<li
      class="recipe-book__card flex items-center gap-x-[30px] rounded-[15px] shadow-md">
      <img
        class="recipe-book__card-img w-[300px] rounded-l-[inherit]"
        src="${image}"
        alt="" />
      <h3 class="recipe-book__card-title min-w-[17.5%] text-[20px]">
        ${title}
      </h3>
      <p class="recipe-book__card-ing">
        <b>Ingredients:</b> ${extendedIngredients.map(({ original }) => original)}
      </p>
      <a href="${sourceUrl}"
        class="cursor-pointer no-underline bg-blue-900 px-[10px] py-[10px] pr-[60px] text-nowrap text-white uppercase hover:bg-blue-800">
        View reipe
      </a>
    </li>`,
    );
    recipeList.innerHTML = markupArr.join('');
  }

  renderRecipes(API_URL);
}
