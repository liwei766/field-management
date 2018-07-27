import { element, by, ElementFinder } from 'protractor';

export default class EmployeeUpdatePage {
  pageTitle: ElementFinder = element(by.id('fieldManagementApp.employee.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  firstNameInput: ElementFinder = element(by.css('input#employee-firstName'));
  lastNameInput: ElementFinder = element(by.css('input#employee-lastName'));
  emailInput: ElementFinder = element(by.css('input#employee-email'));
  phoneNumberInput: ElementFinder = element(by.css('input#employee-phoneNumber'));
  hireDateInput: ElementFinder = element(by.css('input#employee-hireDate'));
  salaryInput: ElementFinder = element(by.css('input#employee-salary'));
  commissionPctInput: ElementFinder = element(by.css('input#employee-commissionPct'));
  departmentSelect: ElementFinder = element(by.css('select#employee-department'));
  managerSelect: ElementFinder = element(by.css('select#employee-manager'));

  getPageTitle() {
    return this.pageTitle;
  }

  setFirstNameInput(firstName) {
    this.firstNameInput.sendKeys(firstName);
  }

  getFirstNameInput() {
    return this.firstNameInput.getAttribute('value');
  }

  setLastNameInput(lastName) {
    this.lastNameInput.sendKeys(lastName);
  }

  getLastNameInput() {
    return this.lastNameInput.getAttribute('value');
  }

  setEmailInput(email) {
    this.emailInput.sendKeys(email);
  }

  getEmailInput() {
    return this.emailInput.getAttribute('value');
  }

  setPhoneNumberInput(phoneNumber) {
    this.phoneNumberInput.sendKeys(phoneNumber);
  }

  getPhoneNumberInput() {
    return this.phoneNumberInput.getAttribute('value');
  }

  setHireDateInput(hireDate) {
    this.hireDateInput.sendKeys(hireDate);
  }

  getHireDateInput() {
    return this.hireDateInput.getAttribute('value');
  }

  setSalaryInput(salary) {
    this.salaryInput.sendKeys(salary);
  }

  getSalaryInput() {
    return this.salaryInput.getAttribute('value');
  }

  setCommissionPctInput(commissionPct) {
    this.commissionPctInput.sendKeys(commissionPct);
  }

  getCommissionPctInput() {
    return this.commissionPctInput.getAttribute('value');
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

  managerSelectLastOption() {
    this.managerSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  managerSelectOption(option) {
    this.managerSelect.sendKeys(option);
  }

  getManagerSelect() {
    return this.managerSelect;
  }

  getManagerSelectedOption() {
    return this.managerSelect.element(by.css('option:checked')).getText();
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
