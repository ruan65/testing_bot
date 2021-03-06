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
//   user: user_k,
//   key: key_k
	user:'108b15de03d86b941c9a62d3933a86d4',
	key: '8ec4c1088850337fb20631ea12a47ec5'
};

(async () => {
  const onboardingNextButtonFinder = byValueKey('onboardingNextButtonKey');

  const driver = await wdio.remote(opts);

  await driver.elementClick(onboardingNextButtonFinder);
  await driver.touchAction({
    action: 'tap',
    element: { elementId: onboardingNextButtonFinder }
  });
  await driver.elementClick(onboardingNextButtonFinder);
  await driver.elementClick(onboardingNextButtonFinder);

	const goalChoiceFinder = byValueKey('questionnaireGoalButtonKey0');
	await driver.touchAction({
		action: 'tap',
		element: { elementId: goalChoiceFinder }
	});

	const skipQuestionnaireFinder = byValueKey('skipQuestionnaireKey');
	await driver.elementClick(skipQuestionnaireFinder);

  driver.deleteSession();
})();
