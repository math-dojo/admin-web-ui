import { Dashboard } from './dashboard.po';
import { browser, logging } from 'protractor';

describe('LandingPage', () => {
  let page: Dashboard;

  beforeEach(() => {
    page = new Dashboard();
  });

  it('should display dashboard if user navigates to rootpath', () => {
    page.navigateToRoot();
    expect(page.getTitleText()).toEqual('Math Dojo Admin UI.');
  });

  it('should display dashboard if user navigates to /home', () => {
    page.navigateToPath('/home');
    expect(page.getTitleText()).toEqual('Math Dojo Admin UI.');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
