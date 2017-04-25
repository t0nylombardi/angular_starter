import { Angular4startPage } from './app.po';

describe('angular4start App', () => {
  let page: Angular4startPage;

  beforeEach(() => {
    page = new Angular4startPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
