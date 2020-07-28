import { browser, element, by } from 'protractor';

export class Utils {
  navigateToRoot() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  navigateToPath(path: string) {
    const fullUrl = new URL(path, browser.baseUrl);
    return browser.get(fullUrl.href) as Promise<any>;
  }

  async getCurrentResourcePath() {
    const fullUrl = await browser.getCurrentUrl();
    return (new URL(fullUrl)).pathname;
  }

}
