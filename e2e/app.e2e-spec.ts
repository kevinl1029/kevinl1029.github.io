import { LabAssistPage } from './app.po';

describe('lab-assist App', function() {
  let page: LabAssistPage;

  beforeEach(() => {
    page = new LabAssistPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('LA works!');
  });
});
