import { MonteprietoPage } from './app.po';

describe('monteprieto App', function() {
  let page: MonteprietoPage;

  beforeEach(() => {
    page = new MonteprietoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
