import { element, by, ElementFinder } from 'protractor';

export default class CountryUpdatePage {
  pageTitle: ElementFinder = element(by.id('fieldManagementApp.country.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  countryNameInput: ElementFinder = element(by.css('input#country-countryName'));
  regionSelect: ElementFinder = element(by.css('select#country-region'));

  getPageTitle() {
    return this.pageTitle;
  }

  setCountryNameInput(countryName) {
    this.countryNameInput.sendKeys(countryName);
  }

  getCountryNameInput() {
    return this.countryNameInput.getAttribute('value');
  }

  regionSelectLastOption() {
    this.regionSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  regionSelectOption(option) {
    this.regionSelect.sendKeys(option);
  }

  getRegionSelect() {
    return this.regionSelect;
  }

  getRegionSelectedOption() {
    return this.regionSelect.element(by.css('option:checked')).getText();
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
