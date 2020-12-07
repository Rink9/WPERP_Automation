Feature('RequestForLeaveEmployee');

Scenario('RequestForLeaveEmployee', (I) => {
I.amOnPage('/test4/wp-admin/');
I.fillField('Username or Email Address','rinky@yahoo.com')
I.fillField('Password','admin')
I.checkOption('Remember Me')
I.click('Log In')
I.click('WP ERP')
I.click('Take a Leave')
I.click('/html/body/div[5]/form/div/div/div/div[1]/select')
I.click('/html/body/div[5]/form/div/div/div/div[1]/select/option[2]')
I.fillField('From','2020-07-02')
I.fillField('To','2020-07-02')
I.fillField('Reason','demo')
I.click('Send Leave Request')
I.moveCursorTo('/html/body/div[1]/div[2]/div[2]/div[1]/div[2]/ul/li[6]/a')
I.click('/html/body/div[1]/div[2]/div[2]/div[1]/div[2]/ul/li[6]/ul/li[2]/a')

//pause();

});
