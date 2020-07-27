import { browser, logging } from 'protractor';
import { ActionsPage } from './actions-page.po';

describe('Given I navigate to the Actions page', () => {
  let page: ActionsPage;

  beforeEach(() => {
    page = new ActionsPage();
    page.navigateToFeatureRoot();
  });

  it('it should display at least 1 card containing an action', () => {
    const foundActionsCards = page.getActionCards().count();
    expect(foundActionsCards).toBeGreaterThanOrEqual(1);
  });

  it('it should navigate to the question approval view when I click the first card', () => {
    page.clickFirstActionsCard();
    const resourceUrl = page.getCurrentResourcePath();
    expect(resourceUrl).toMatch('/actions/approve');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
