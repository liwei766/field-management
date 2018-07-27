/* tslint:disable no-unused-expression */
import { browser } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import CountryComponentsPage from './country.page-object';
import CountryUpdatePage from './country-update.page-object';

const expect = chai.expect;

describe('Country e2e test', () => {
  let navBarPage: NavBarPage;
  let countryUpdatePage: CountryUpdatePage;
  let countryComponentsPage: CountryComponentsPage;

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load Countries', async () => {
    navBarPage.getEntityPage('country');
    countryComponentsPage = new CountryComponentsPage();
    expect(await countryComponentsPage.getTitle().getText()).to.match(/Countries/);
  });

  it('should load create Country page', async () => {
    countryComponentsPage.clickOnCreateButton();
    countryUpdatePage = new CountryUpdatePage();
    expect(await countryUpdatePage.getPageTitle().getAttribute('id')).to.match(/fieldManagementApp.country.home.createOrEditLabel/);
  });

  it('should create and save Countries', async () => {
    countryUpdatePage.setCountryNameInput('countryName');
    expect(await countryUpdatePage.getCountryNameInput()).to.match(/countryName/);
    countryUpdatePage.regionSelectLastOption();
    await countryUpdatePage.save();
    expect(await countryUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
