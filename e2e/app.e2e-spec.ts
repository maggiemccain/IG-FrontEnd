import { IGFrontEndTestPage } from './app.po';

describe('igfront-end-test App', function() {
  let page: IGFrontEndTestPage;

  beforeEach(() => {
    page = new IGFrontEndTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
