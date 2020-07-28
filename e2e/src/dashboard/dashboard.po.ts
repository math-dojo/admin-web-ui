import { browser, by, element } from 'protractor';
import { Utils } from '../utils/utils.po';
require('url');

export class Dashboard extends Utils {

  getTitleText() {
    return element(by.css('app-root app-dashboard #primary h1')).getText() as Promise<string>;
  }
}
