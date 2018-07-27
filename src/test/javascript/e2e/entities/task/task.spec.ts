/* tslint:disable no-unused-expression */
import { browser } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import TaskComponentsPage from './task.page-object';
import TaskUpdatePage from './task-update.page-object';

const expect = chai.expect;

describe('Task e2e test', () => {
  let navBarPage: NavBarPage;
  let taskUpdatePage: TaskUpdatePage;
  let taskComponentsPage: TaskComponentsPage;

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load Tasks', async () => {
    navBarPage.getEntityPage('task');
    taskComponentsPage = new TaskComponentsPage();
    expect(await taskComponentsPage.getTitle().getText()).to.match(/Tasks/);
  });

  it('should load create Task page', async () => {
    taskComponentsPage.clickOnCreateButton();
    taskUpdatePage = new TaskUpdatePage();
    expect(await taskUpdatePage.getPageTitle().getAttribute('id')).to.match(/fieldManagementApp.task.home.createOrEditLabel/);
  });

  it('should create and save Tasks', async () => {
    taskUpdatePage.setTitleInput('title');
    expect(await taskUpdatePage.getTitleInput()).to.match(/title/);
    taskUpdatePage.setDescriptionInput('description');
    expect(await taskUpdatePage.getDescriptionInput()).to.match(/description/);
    await taskUpdatePage.save();
    expect(await taskUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
