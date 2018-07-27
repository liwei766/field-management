/* tslint:disable no-unused-expression */
import { browser, protractor } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import JobHistoryComponentsPage from './job-history.page-object';
import JobHistoryUpdatePage from './job-history-update.page-object';

const expect = chai.expect;

describe('JobHistory e2e test', () => {
  let navBarPage: NavBarPage;
  let jobHistoryUpdatePage: JobHistoryUpdatePage;
  let jobHistoryComponentsPage: JobHistoryComponentsPage;

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load JobHistories', async () => {
    navBarPage.getEntityPage('job-history');
    jobHistoryComponentsPage = new JobHistoryComponentsPage();
    expect(await jobHistoryComponentsPage.getTitle().getText()).to.match(/Job Histories/);
  });

  it('should load create JobHistory page', async () => {
    jobHistoryComponentsPage.clickOnCreateButton();
    jobHistoryUpdatePage = new JobHistoryUpdatePage();
    expect(await jobHistoryUpdatePage.getPageTitle().getAttribute('id')).to.match(/fieldManagementApp.jobHistory.home.createOrEditLabel/);
  });

  it('should create and save JobHistories', async () => {
    jobHistoryUpdatePage.setStartDateInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await jobHistoryUpdatePage.getStartDateInput()).to.contain('2001-01-01T02:30');
    jobHistoryUpdatePage.setEndDateInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await jobHistoryUpdatePage.getEndDateInput()).to.contain('2001-01-01T02:30');
    jobHistoryUpdatePage.languageSelectLastOption();
    jobHistoryUpdatePage.jobSelectLastOption();
    jobHistoryUpdatePage.departmentSelectLastOption();
    jobHistoryUpdatePage.employeeSelectLastOption();
    await jobHistoryUpdatePage.save();
    expect(await jobHistoryUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
