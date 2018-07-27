import { element, by, ElementFinder } from 'protractor';

export default class RegionUpdatePage {
  pageTitle: ElementFinder = element(by.id('fieldManagementApp.region.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  regionNameInput: ElementFinder = element(by.css('input#region-regionName'));

  getPageTitle() {
    return this.pageTitle;
  }

  setRegionNameInput(regionName) {
    this.regionNameInput.sendKeys(regionName);
  }

  getRegionNameInput() {
    return this.regionNameInput.getAttribute('value');
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
