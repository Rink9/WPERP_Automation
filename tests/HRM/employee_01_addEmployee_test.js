Feature('AddEmployee');

Scenario('AddEmployee', (I) => {
	I.amOnPage('/test6/wp-admin/');
	I.fillField('Username or Email Address','admin')
	I.fillField('Password','admin')
	I.checkOption('Remember Me')
	I.click('Log In')
	I.click('WP ERP')
	I.click('HR')
	I.click('//*[@id="wpbody-content"]/div[2]/ul/li[2]/a')
	I.click('//*[@id="erp-employee-new"]')
	I.fillField('First Name','Lutfun')
	I.fillField('Middle Name','Naher')
	I.fillField('Last Name','Rinky')
	I.fillField('Employee ID','1551')
	I.fillField('Email','lutfun@yahoo.com')
	I.fillField('Employee End Date','2019-06-01')
	I.fillField('Date of Hire','2020-12-30')
	I.click('//*[@id="select2-worktype-container"]')
	I.click('//span[2]/ul/li[2]')
	I.click('//*[@id="select2-workstatus-container"]')
	I.click('//span[2]/ul/li[2]')
	I.click('Create Employee')

	pause();

});
