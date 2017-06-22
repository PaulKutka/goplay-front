import { GoplayFrontPage } from './app.po';

describe('goplay-front App', () => {
  let page: GoplayFrontPage;

  beforeEach(() => {
    page = new GoplayFrontPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
