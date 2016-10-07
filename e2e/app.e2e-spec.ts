import { ProfileAnalysisPage } from './app.po';

describe('profile-analysis App', function() {
  let page: ProfileAnalysisPage;

  beforeEach(() => {
    page = new ProfileAnalysisPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
