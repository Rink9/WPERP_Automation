Feature('HRM_Payroll');

Scenario('Add calendar on Payroll', ({ I }) => {
    /*   Log in   */
     I.amOnPage('/wp-admin');
     I.fillField('Username or Email Address','mehedi')
     I.fillField('Password','hoe)6ULjBvW8*C2P#T')
     I.checkOption('Remember Me')
     I.click('Log In')
     
    
});
