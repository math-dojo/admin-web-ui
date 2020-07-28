import { browser, by, element, ElementFinder, ElementArrayFinder } from 'protractor';
import { Utils } from '../utils/utils.po';

export class ActionsPage extends Utils {

  getActionCards() {
    return element.all(by.css('.mtdj__actionspage_display .mtdj__actionspage_card '));
  }

  getNumberOfQuestionCards() {
    return this.getActionCards().count();
  }

  getFirstActionCard() {
    return this.getActionCards().first();
  }
  clickFirstActionsCard() {
    return this.getFirstActionCard().click();
  }
  navigateToFeatureRoot() {
    this.navigateToPath('/actions');
  }
}
