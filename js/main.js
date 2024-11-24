function showTopBar() {
    const country = "France";
    const vat = 20;
    const message = `<p>Orders to <b>${country}</b> are subject to <b>${vat}%</b> VAT</p>`;

    requestAnimationFrame(() => {
        const countryBar = document.querySelector("section.country-bar");
        if (countryBar) {
            countryBar.innerHTML = message;
            countryBar.classList.remove('hidden');
        }
    });
}

document.addEventListener('DOMContentLoaded', showTopBar);