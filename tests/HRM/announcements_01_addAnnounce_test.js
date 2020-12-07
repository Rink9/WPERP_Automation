Feature('AddAnnouncement');

Scenario('AddAnnouncement', (I) => {
I.amOnPage('/test4/wp-admin/');
I.fillField('Username or Email Address','admin')
I.fillField('Password','admin')
I.checkOption('Remember Me')
I.click('Log In')
I.click('WP ERP')
I.click('HR')
I.click('//*[@id="wpbody-content"]/div[2]/ul/li[5]/a')
I.click('//*[@id="wpbody-content"]/div[3]/a')
I.click('//*[@id="title"]')
I.fillField('Add title','Test55')
I.click('/html/body')
I.type('Rinky')
I.click('//*[@id="hr_announcement_assign_type"]')
I.click('//*[@id="hr_announcement_assign_type"]/option[2]')
I.forceClick('Publish')
//pause();

});
