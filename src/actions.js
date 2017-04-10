/**
 * Created by eugene on 10.04.17.
 */

export function setCountry(selectedCountryId) {
    return {
        type: 'COUNTRY_CHOSEN', selectedCountryId: selectedCountryId
    }
}