/**
 * Created by eugene on 10.04.17.
 */

export function setCountry(selectedCountryId) {
    return {
        type: 'COUNTRY_CHOSEN', selectedCountryId: selectedCountryId
    }
}

export function toggleMenu() {
    let container = document.querySelector('.dropdown'),
        dropdown  = document.querySelector('.dropdown--items');

    if (container !== null) {
        container.classList.toggle('dropdown-is-opened');
        dropdown.classList.toggle('dropdown--items-opened');
    }
}