import { element, by, ElementFinder } from 'protractor';

export default class JobUpdatePage {
  pageTitle: ElementFinder = element(by.id('fieldManagementApp.job.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  jobTitleInput: ElementFinder = element(by.css('input#job-jobTitle'));
  minSalaryInput: ElementFinder = element(by.css('input#job-minSalary'));
  maxSalaryInput: ElementFinder = element(by.css('input#job-maxSalary'));
  employeeSelect: ElementFinder = element(by.css('select#job-employee'));
  taskSelect: ElementFinder = element(by.css('select#job-task'));

  getPageTitle() {
    return this.pageTitle;
  }

  setJobTitleInput(jobTitle) {
    this.jobTitleInput.sendKeys(jobTitle);
  }

  getJobTitleInput() {
    return this.jobTitleInput.getAttribute('value');
  }

  setMinSalaryInput(minSalary) {
    this.minSalaryInput.sendKeys(minSalary);
  }

  getMinSalaryInput() {
    return this.minSalaryInput.getAttribute('value');
  }

  setMaxSalaryInput(maxSalary) {
    this.maxSalaryInput.sendKeys(maxSalary);
  }

  getMaxSalaryInput() {
    return this.maxSalaryInput.getAttribute('value');
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

  taskSelectLastOption() {
    this.taskSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  taskSelectOption(option) {
    this.taskSelect.sendKeys(option);
  }

  getTaskSelect() {
    return this.taskSelect;
  }

  getTaskSelectedOption() {
    return this.taskSelect.element(by.css('option:checked')).getText();
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
