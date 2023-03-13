//Create a user/Registration

it('Create a new user', () => {

  cy.visit('https://opencart.abstracta.us')
  cy.contains('My Account').click()
  cy.contains('Register').click()
  cy.get('#input-firstname').type('Noor')
  cy.get('#input-lastname').type('Qadir')
  const emailSuffix = Math.random()
  cy.get('#input-email').type('noorulain1' + emailSuffix + '@demo.com')
  cy.get('#input-telephone').type('123-4567-10')
  cy.get('#input-password').type('1Pmjnti#123456')
  cy.get('#input-confirm').type('1Pmjnti#123456')
  cy.get('[name="agree"]').check();
  cy.window().document().then(function (doc) {
    doc.addEventListener('click', () => {
    setTimeout(function () { doc.location.reload() }, 5000)
    })
    })
  cy.get('[type="submit"]').click()
  cy.wait(5000);
  //cy.visit('https://opencart.abstracta.us/index.php?route=account/success')
  cy.url().should('eq','https://opencart.abstracta.us/index.php?route=account/success');
  cy.contains('Your Account Has Been Created!').should('be.visible')
})
 
  


//Validate Required Fields

it('Create an automated script to test the required fields while registration', () => {
  cy.visit('https://opencart.abstracta.us/index.php?route=account/register');
  cy.get('#input-firstname').type('11111111111111111111111111111111111111111');
  cy.get('#input-lastname').type('2222222222222222222222222222222222222222');
  cy.get('#input-email').type('noor@gmail');
  cy.get('#input-telephone').type('abc1111111111111111111111111111111111111111');
  cy.get('#input-password').type('1Pmjnti#12345611111111111111111111111111111111111');
  cy.get('#input-confirm').type('1Pmjnti#12345611111111111111111111111111111111111');
  cy.get('input[name="agree"]').click();
  cy.get('.pull-right > .btn').click();
  cy.wait(5000);
  })


//Login to the website

it('Should login to the website', () => {
  cy.visit('https://opencart.abstracta.us/')
  cy.contains('My Account').click();
  cy.contains('Login').click();
  cy.get('#input-email').type('noorulain.qadir911@yopmail.com');
  cy.get('#input-password').type('Pmjnti#1234');
  cy.get('input[type="submit"]').click();
  cy.wait(5000);
  cy.url().should ('eq','https://opencart.abstracta.us/index.php?route=account/account');
  cy.contains('Account');
});


