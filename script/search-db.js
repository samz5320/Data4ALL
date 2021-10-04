document.querySelector('#db-search').addEventListener('keyup', function () {
    console.log('FIRED');
    const searchInput = document.querySelector('#db-search').value.trim().toLowerCase();
    const cards = document.querySelectorAll('.card');
    console.log(cards);
    for (let i = 0; i < cards.length; i++) {
        let res = cards[i].children[1].children[0].innerText.toLowerCase().includes(searchInput);
        !res?cards[i].classList.add('hide'):cards[i].classList.remove('hide');
    }
})