/* tslint:disable no-unused-expression */
import { browser, protractor } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import EmployeeComponentsPage from './employee.page-object';
import EmployeeUpdatePage from './employee-update.page-object';

const expect = chai.expect;

describe('Employee e2e test', () => {
  let navBarPage: NavBarPage;
  let employeeUpdatePage: EmployeeUpdatePage;
  let employeeComponentsPage: EmployeeComponentsPage;

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load Employees', async () => {
    navBarPage.getEntityPage('employee');
    employeeComponentsPage = new EmployeeComponentsPage();
    expect(await employeeComponentsPage.getTitle().getText()).to.match(/Employees/);
  });

  it('should load create Employee page', async () => {
    employeeComponentsPage.clickOnCreateButton();
    employeeUpdatePage = new EmployeeUpdatePage();
    expect(await employeeUpdatePage.getPageTitle().getAttribute('id')).to.match(/fieldManagementApp.employee.home.createOrEditLabel/);
  });

  it('should create and save Employees', async () => {
    employeeUpdatePage.setFirstNameInput('firstName');
    expect(await employeeUpdatePage.getFirstNameInput()).to.match(/firstName/);
    employeeUpdatePage.setLastNameInput('lastName');
    expect(await employeeUpdatePage.getLastNameInput()).to.match(/lastName/);
    employeeUpdatePage.setEmailInput('email');
    expect(await employeeUpdatePage.getEmailInput()).to.match(/email/);
    employeeUpdatePage.setPhoneNumberInput('phoneNumber');
    expect(await employeeUpdatePage.getPhoneNumberInput()).to.match(/phoneNumber/);
    employeeUpdatePage.setHireDateInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await employeeUpdatePage.getHireDateInput()).to.contain('2001-01-01T02:30');
    employeeUpdatePage.setSalaryInput('5');
    expect(await employeeUpdatePage.getSalaryInput()).to.eq('5');
    employeeUpdatePage.setCommissionPctInput('5');
    expect(await employeeUpdatePage.getCommissionPctInput()).to.eq('5');
    employeeUpdatePage.departmentSelectLastOption();
    employeeUpdatePage.managerSelectLastOption();
    await employeeUpdatePage.save();
    expect(await employeeUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
