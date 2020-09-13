$(document).ready(function () {
    fetchCardsFromAPI('http://localhost:5000/cards');

    cardsHideOnClick();

    function fetchCardsFromAPI(url) {
        $.ajax({
            url: url,
            dataType: "json",
            success: function (data) {
                const cardsFragment = document.createDocumentFragment();

                data.forEach((cardData, i) => {
                    const card = createCard(cardData, i);
                    cardsFragment.append(card);
                });

                $('.cards-wrapper').append(cardsFragment);
            }
        });

        function createCard({ title, description }, index) {
            const card = document.createElement('div');
            const cardContentWrapper = document.createElement('div');

            cardContentWrapper.className = 'card-box';
            card.className = 'col-lg-3 m-2 card-wrapper';

            // set AOS animation attribute
            cardContentWrapper.setAttribute('data-aos', index % 2 == 0 ? 'fade-down' : 'fade-up');

            cardContentWrapper.innerHTML = `
                <h3>${title}</h3>
                <p>${description}</p>
            `;

            card.append(cardContentWrapper)
            return card;
        }
    }

    function cardsHideOnClick(params) {
        // selecting .card-wrapper directly is impossible because it is added to DOM dynamically
        $('.cards-wrapper').on('click', '.card-wrapper', function () {
            const cardsCollection = [...this.parentElement.children];

            const cardIndex = cardsCollection.indexOf(this);

            if (cardIndex === 0 || cardIndex === cardsCollection.length - 1) {
                $(this).hide();
            }
        });
    }
});