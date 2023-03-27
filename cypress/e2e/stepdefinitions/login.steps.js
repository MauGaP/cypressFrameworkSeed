import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import {
  clickElement,
  navigateTo,
  type,
  validateElementContainsText,
  validateElementIsVisible,
} from "../pageobjects/basepage";
import { DASHBOARD_TITLE, HOME_LOGO } from "../pageobjects/home.page";
import {
  LOGIN_BTN,
  PASSWORD_INPUT,
  USERNAME_INPUT,
} from "../pageobjects/login.page";

Given("the user is on login page", () => {
  navigateTo("/");
});

When("the user logs into the application", () => {
  type(USERNAME_INPUT, "<username>");
  type(PASSWORD_INPUT, "<password>");
  clickElement(LOGIN_BTN);
});

Then("the dashboard is displayed in the application", () => {
  validateElementIsVisible(HOME_LOGO);
  validateElementContainsText(DASHBOARD_TITLE, "Manager Dashboard");
});
