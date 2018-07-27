import { element, by, ElementFinder } from 'protractor';

export default class DepartmentUpdatePage {
  pageTitle: ElementFinder = element(by.id('fieldManagementApp.department.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  departmentNameInput: ElementFinder = element(by.css('input#department-departmentName'));
  locationSelect: ElementFinder = element(by.css('select#department-location'));

  getPageTitle() {
    return this.pageTitle;
  }

  setDepartmentNameInput(departmentName) {
    this.departmentNameInput.sendKeys(departmentName);
  }

  getDepartmentNameInput() {
    return this.departmentNameInput.getAttribute('value');
  }

  locationSelectLastOption() {
    this.locationSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  locationSelectOption(option) {
    this.locationSelect.sendKeys(option);
  }

  getLocationSelect() {
    return this.locationSelect;
  }

  getLocationSelectedOption() {
    return this.locationSelect.element(by.css('option:checked')).getText();
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
