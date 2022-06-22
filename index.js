const wdio = require('webdriverio');
const assert = require('assert');
const { byValueKey } = require('appium-flutter-finder');

const {user_k, key_k} = require("./config")

const caps = {
  platformName: 'Android',
  deviceName: 'Pixel 6',
  version: '12.0',
  realDevice: true,
  app: 'https://github.com/ruan65/testing_bot/raw/master/android/app-qa-profile.apk' // or tb://[yourapp]'
};

const opts = {
  capabilities: {
    ...caps,
    automationName: 'Flutter',
    retryBackoffTime: 500,
    hostname: 'hub.testingbot.com'
  },
  user: user_k,
  key: key_k
};

(async () => {
  const onboardingNextButtonFinder = byValueKey('onboardingNextButtonKey');

  const driver = await wdio.remote(opts);

//   assert.strictEqual(await driver.getElementText(counterTextFinder), '0');

  await driver.elementClick(onboardingNextButtonFinder);
  await driver.touchAction({
    action: 'tap',
    element: { elementId: onboardingNextButtonFinder }
  });
  await driver.elementClick(onboardingNextButtonFinder);
  await driver.elementClick(onboardingNextButtonFinder);

	const goalChoiceFinder = byValueKey('questionnaireGoalButtonKey1');
	await driver.elementClick(goalChoiceFinder);

	const skipQuestionnaireFinder = byValueKey('skipQuestionnaireKey');
	await driver.elementClick(skipQuestionnaireFinder);

//   assert.strictEqual(await driver.getElementText(counterTextFinder), '2');

  driver.deleteSession();
})();
