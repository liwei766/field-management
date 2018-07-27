import { element, by, ElementFinder } from 'protractor';

export default class TaskUpdatePage {
  pageTitle: ElementFinder = element(by.id('fieldManagementApp.task.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  titleInput: ElementFinder = element(by.css('input#task-title'));
  descriptionInput: ElementFinder = element(by.css('input#task-description'));

  getPageTitle() {
    return this.pageTitle;
  }

  setTitleInput(title) {
    this.titleInput.sendKeys(title);
  }

  getTitleInput() {
    return this.titleInput.getAttribute('value');
  }

  setDescriptionInput(description) {
    this.descriptionInput.sendKeys(description);
  }

  getDescriptionInput() {
    return this.descriptionInput.getAttribute('value');
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
