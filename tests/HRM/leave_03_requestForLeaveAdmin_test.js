Feature('RequestforLeave');

Scenario('RequestforLeave', (I) => {
I.amOnPage('/test4/wp-admin/');
I.fillField('Username or Email Address','admin')
I.fillField('Password','admin')
I.checkOption('Remember Me')
I.click('Log In')
I.click('WP ERP')
I.click('HR')
I.click('/html/body/div[1]/div[2]/div[2]/div[1]/div[2]/ul/li[6]/a')
I.click('New Request')
I.click('- Select Employee -')
I.click('/html/body/span/span/span[2]/ul/li[2]')
I.click('Leave Type ')
I.click('//*[@id="erp-hr-leave-req-leave-policy"]/option[2]')
I.fillField('From','2020-07-21')
I.fillField('To', '2020-07-21')
I.fillField('Reason','Sending Leave request for an employee for HR')
I.click('Submit Request')





});
