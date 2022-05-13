/* eslint-env detox/detox, mocha, jest */

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have "Step One" section', async () => {
    await expect(element(by.text('Step One'))).toBeVisible();
  });

  it('should have "See Your Changes" section', async () => {
    await expect(element(by.text('See Your Changes'))).toBeVisible();
  });

  it('should have the debug section', async () => {
    await expect(element(by.text('Debug'))).toBeVisible();
  });
  it('should show a text box', async () => {
    await expect(element(by.id('MyUniqueId123'))).toBeVisible();
    // await element(by.id('MyUniqueId123')).scrollToInde;
    await element(by.id('MyUniqueId123')).clearText();
    await element(by.id('MyUniqueId123')).typeText('Hello');
    // await expect(element(by.text('World!!!'))).toBeVisible();
  });

  it('should swipe to the bottom of the app', async () => {
    // await waitFor(element(by.id('MyUniqueId123')).scroll(100, 'down')
    await element(by.text('Step One')).swipe('up', 'fast');
  });
});
