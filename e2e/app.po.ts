import { browser, element, by } from 'protractor';

export class LabAssistPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('LA-root h1')).getText();
  }
}
