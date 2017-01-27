import { BandManagerPage } from './app.po';

describe('band-manager App', function() {
  let page: BandManagerPage;

  beforeEach(() => {
    page = new BandManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
