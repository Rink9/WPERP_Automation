Feature('LeaveEntitlements');

Scenario('LeaveEntitlements', (I) => {
I.amOnPage('/test4/wp-admin/');
I.fillField('Username or Email Address','admin')
I.fillField('Password','admin')
I.checkOption('Remember Me')
I.click('Log In')
I.click('WP ERP')
I.click('HR')
I.moveCursorTo('/html/body/div[1]/div[2]/div[2]/div[1]/div[2]/ul/li[6]/a')
I.click('/html/body/div[1]/div[2]/div[2]/div[1]/div[2]/ul/li[6]/ul/li[2]/a')
pause();


});
