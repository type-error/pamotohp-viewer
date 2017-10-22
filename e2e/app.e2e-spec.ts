import { PamotohpPage } from './app.po';

describe('pamotohp App', function() {
  let page: PamotohpPage;

  beforeEach(() => {
    page = new PamotohpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
