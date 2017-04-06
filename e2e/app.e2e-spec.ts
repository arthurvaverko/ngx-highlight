import { NgxHilightPage } from './app.po';

describe('ngx-hilight App', () => {
  let page: NgxHilightPage;

  beforeEach(() => {
    page = new NgxHilightPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
