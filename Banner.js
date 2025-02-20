class Banner {
  constructor(id, paragraph1, text, paragraph2, image) {
    this.id = id;
    this.paragraph1 = paragraph1;
    this.text = text;
    this.paragraph2 = paragraph2;
    this.image = image;
  }
}
const banners = [
  new Banner(
    1,
    'Only this week',
    'Quality eggs at an  affordable price',
    'Eat one every day',
    './assets/image/banner-01.png'
  ),
  new Banner(
    2,
    'Only this week',
    'Snacks that nourishes  our mind and body',
    'Shine the mourning',
    './assets/image/banner-02.png'
  ),
  new Banner(
    3,
    'Only this week',
    'Unbeatable quality, unbeatable prices.',
    'Only this week. Dont miss...',
    './assets/image/banner-03.png'
  ),
  new Banner(
    4,
    'Only this week',
    'Provide you experienced  quality products',
    'Feed your family the best',
    './assets/image/banner-04.png'
  ),
  new Banner(
    5,
    'Only this week',
    'Shopping with us for better  quality and the best price ',
    'Only this week. Don’t miss...',
    './assets/image/banner-05.png'
  ),
  new Banner(
    6,
    'Only this week',
    'Get the best quality products at the lowest prices',
    'A different kind of grocery store',
    './assets/image/banner-06.png'
  ),
  new Banner(
    7,
    'Only this week',
    'Where you get your all favorite  brands under one roof ',
    'Only this week. Dont miss...',
    './assets/image/banner-07.png'
  ),
  new Banner(
    8,
    'Only this week',
    'Make your grocery shopping easy with us ',
    'Only this week. Don’t miss...',
    './assets/image/banner-08.png'
  ),
  new Banner(
    9,
    'Only this week',
    'Get your everyday needs here with us ',
    'A different kind of grocery store',
    './assets/image/banner-09.png'
  ),
  new Banner(
    10,
    'Only this week',
    'we are always here to help you with your grocery',
    'Eat one every day',
    './assets/image/banner-10.png'
  ),
  new Banner(
    11,
    'Only this week',
    'With your favorite food, we will make your mood',
    'Only this week. Don’t miss...',
    './assets/image/banner-11.png'
  ),
];
const renderBanner = (banners, bannerIds, containerSelector, columnClass) => {
  const container = document.querySelector(containerSelector);

  bannerIds.forEach((id) => {
    const banner = banners.find((banner) => banner.id === id);
    if (banner) {
      const bannerCard = document.createElement('div');
      bannerCard.classList.add(columnClass);

      bannerCard.innerHTML = `
             
                <div class="banner-body position-absolute m-3 ">
                  <p class="text-danger">${banner.paragraph1}</p>
                  <h4>${banner.text} </h4>
                  <p>${banner.paragraph2}</p>
                  <button class=''>Shop now -></button>
                </div>
                <img class="" src="${banner.image}" alt="${banner.text}" />
             
            `;
      container.appendChild(bannerCard);
    }
  });
};
// Use the renderbanner function
document.addEventListener('DOMContentLoaded', () => {
  //banner ids per location

  renderBanner(banners, [1, 2, 3], '.banner-01', 'col-md-4');
  renderBanner(banners, [4, 5, 6, 7], '.banner-02', 'col-md-3');
  renderBanner(banners, [8, 9], '.banner-03', 'col-md-6');
  renderBanner(banners, [10], '.banner-04', 'col');
  renderBanner(banners, [11], '.banner-05', 'col');
});
