import { element, by, ElementFinder } from 'protractor';

export default class JobHistoryUpdatePage {
  pageTitle: ElementFinder = element(by.id('fieldManagementApp.jobHistory.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  startDateInput: ElementFinder = element(by.css('input#job-history-startDate'));
  endDateInput: ElementFinder = element(by.css('input#job-history-endDate'));
  languageSelect: ElementFinder = element(by.css('select#job-history-language'));
  jobSelect: ElementFinder = element(by.css('select#job-history-job'));
  departmentSelect: ElementFinder = element(by.css('select#job-history-department'));
  employeeSelect: ElementFinder = element(by.css('select#job-history-employee'));

  getPageTitle() {
    return this.pageTitle;
  }

  setStartDateInput(startDate) {
    this.startDateInput.sendKeys(startDate);
  }

  getStartDateInput() {
    return this.startDateInput.getAttribute('value');
  }

  setEndDateInput(endDate) {
    this.endDateInput.sendKeys(endDate);
  }

  getEndDateInput() {
    return this.endDateInput.getAttribute('value');
  }

  setLanguageSelect(language) {
    this.languageSelect.sendKeys(language);
  }

  getLanguageSelect() {
    return this.languageSelect.element(by.css('option:checked')).getText();
  }

  languageSelectLastOption() {
    this.languageSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }
  jobSelectLastOption() {
    this.jobSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  jobSelectOption(option) {
    this.jobSelect.sendKeys(option);
  }

  getJobSelect() {
    return this.jobSelect;
  }

  getJobSelectedOption() {
    return this.jobSelect.element(by.css('option:checked')).getText();
  }

  departmentSelectLastOption() {
    this.departmentSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  departmentSelectOption(option) {
    this.departmentSelect.sendKeys(option);
  }

  getDepartmentSelect() {
    return this.departmentSelect;
  }

  getDepartmentSelectedOption() {
    return this.departmentSelect.element(by.css('option:checked')).getText();
  }

  employeeSelectLastOption() {
    this.employeeSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  employeeSelectOption(option) {
    this.employeeSelect.sendKeys(option);
  }

  getEmployeeSelect() {
    return this.employeeSelect;
  }

  getEmployeeSelectedOption() {
    return this.employeeSelect.element(by.css('option:checked')).getText();
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
