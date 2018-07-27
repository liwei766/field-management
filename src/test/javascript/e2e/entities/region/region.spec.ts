/* tslint:disable no-unused-expression */
import { browser } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import RegionComponentsPage from './region.page-object';
import RegionUpdatePage from './region-update.page-object';

const expect = chai.expect;

describe('Region e2e test', () => {
  let navBarPage: NavBarPage;
  let regionUpdatePage: RegionUpdatePage;
  let regionComponentsPage: RegionComponentsPage;

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load Regions', async () => {
    navBarPage.getEntityPage('region');
    regionComponentsPage = new RegionComponentsPage();
    expect(await regionComponentsPage.getTitle().getText()).to.match(/Regions/);
  });

  it('should load create Region page', async () => {
    regionComponentsPage.clickOnCreateButton();
    regionUpdatePage = new RegionUpdatePage();
    expect(await regionUpdatePage.getPageTitle().getAttribute('id')).to.match(/fieldManagementApp.region.home.createOrEditLabel/);
  });

  it('should create and save Regions', async () => {
    regionUpdatePage.setRegionNameInput('regionName');
    expect(await regionUpdatePage.getRegionNameInput()).to.match(/regionName/);
    await regionUpdatePage.save();
    expect(await regionUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
