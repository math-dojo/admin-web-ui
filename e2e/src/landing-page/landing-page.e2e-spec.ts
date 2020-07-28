import { LandingPage } from './landing-page.po';
import { browser, logging } from 'protractor';

describe('LandingPage', () => {
  let page: LandingPage;

  beforeEach(() => {
    page = new LandingPage();
  });



  it('should display landing page if user navigates to /login', () => {
    page.navigateToPath('/login');
    expect(page.getTitleText()).toEqual('Welcome to');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
