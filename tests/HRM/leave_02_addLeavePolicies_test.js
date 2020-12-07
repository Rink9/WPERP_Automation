Feature('Leave Policies');

Scenario('test something', (I) => {
I.amOnPage('/test4/wp-admin/');
I.fillField('Username or Email Address','admin')
I.fillField('Password','admin')
I.checkOption('Remember Me')
I.click('Log In')
I.click('WP ERP')
I.click('HR')
pause();
// I.moveCursorTo('/html/body/div[1]/div[2]/div[2]/div[1]/div[2]/ul/li[6]/a')
// I.click('/html/body/div[1]/div[2]/div[2]/div[1]/div[2]/ul/li[6]/ul/li[4]/a')
// I.click('#erp-leave-name-new')
// I.fillField('Leave Type','Annual Leave')
// I.fillField('Description','For All departments')
// I.click('Save')
// I.click('#erp-leave-policy-new')
// I.click('#erp-leave-policy-new')
// I.click('#leave-id')
// I.click('/html/body/div[1]/div[2]/div[2]/div[1]/div[3]/form/div[1]/div[2]/select/option[3]')
// I.fillField('Description','Testing automation')
// I.fillField('Days','20')
// I.checkOption('Entitle New Employees')
// I.checkOption('Apply for existing employees')
// I.click('Save')


});
