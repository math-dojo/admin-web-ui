import { browser, by, element } from 'protractor';
import { Utils } from '../utils/utils.po';
require('url');

export class LandingPage extends Utils {

  getTitleText() {
    return element(by.css('.login-wrapper .title .welcome')).getText() as Promise<string>;
  }
}
