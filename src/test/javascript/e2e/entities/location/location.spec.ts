/* tslint:disable no-unused-expression */
import { browser } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import LocationComponentsPage from './location.page-object';
import LocationUpdatePage from './location-update.page-object';

const expect = chai.expect;

describe('Location e2e test', () => {
  let navBarPage: NavBarPage;
  let locationUpdatePage: LocationUpdatePage;
  let locationComponentsPage: LocationComponentsPage;

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load Locations', async () => {
    navBarPage.getEntityPage('location');
    locationComponentsPage = new LocationComponentsPage();
    expect(await locationComponentsPage.getTitle().getText()).to.match(/Locations/);
  });

  it('should load create Location page', async () => {
    locationComponentsPage.clickOnCreateButton();
    locationUpdatePage = new LocationUpdatePage();
    expect(await locationUpdatePage.getPageTitle().getAttribute('id')).to.match(/fieldManagementApp.location.home.createOrEditLabel/);
  });

  it('should create and save Locations', async () => {
    locationUpdatePage.setStreetAddressInput('streetAddress');
    expect(await locationUpdatePage.getStreetAddressInput()).to.match(/streetAddress/);
    locationUpdatePage.setPostalCodeInput('postalCode');
    expect(await locationUpdatePage.getPostalCodeInput()).to.match(/postalCode/);
    locationUpdatePage.setCityInput('city');
    expect(await locationUpdatePage.getCityInput()).to.match(/city/);
    locationUpdatePage.setStateProvinceInput('stateProvince');
    expect(await locationUpdatePage.getStateProvinceInput()).to.match(/stateProvince/);
    locationUpdatePage.countrySelectLastOption();
    await locationUpdatePage.save();
    expect(await locationUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
