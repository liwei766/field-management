import { element, by, ElementFinder } from 'protractor';

export default class LocationUpdatePage {
  pageTitle: ElementFinder = element(by.id('fieldManagementApp.location.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  streetAddressInput: ElementFinder = element(by.css('input#location-streetAddress'));
  postalCodeInput: ElementFinder = element(by.css('input#location-postalCode'));
  cityInput: ElementFinder = element(by.css('input#location-city'));
  stateProvinceInput: ElementFinder = element(by.css('input#location-stateProvince'));
  countrySelect: ElementFinder = element(by.css('select#location-country'));

  getPageTitle() {
    return this.pageTitle;
  }

  setStreetAddressInput(streetAddress) {
    this.streetAddressInput.sendKeys(streetAddress);
  }

  getStreetAddressInput() {
    return this.streetAddressInput.getAttribute('value');
  }

  setPostalCodeInput(postalCode) {
    this.postalCodeInput.sendKeys(postalCode);
  }

  getPostalCodeInput() {
    return this.postalCodeInput.getAttribute('value');
  }

  setCityInput(city) {
    this.cityInput.sendKeys(city);
  }

  getCityInput() {
    return this.cityInput.getAttribute('value');
  }

  setStateProvinceInput(stateProvince) {
    this.stateProvinceInput.sendKeys(stateProvince);
  }

  getStateProvinceInput() {
    return this.stateProvinceInput.getAttribute('value');
  }

  countrySelectLastOption() {
    this.countrySelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  countrySelectOption(option) {
    this.countrySelect.sendKeys(option);
  }

  getCountrySelect() {
    return this.countrySelect;
  }

  getCountrySelectedOption() {
    return this.countrySelect.element(by.css('option:checked')).getText();
  }

  save() {
    return this.saveButton.click();
  }

  cancel() {
    this.cancelButton.click();
  }

  getSaveButton() {
    return this.saveButton;
  }
}
