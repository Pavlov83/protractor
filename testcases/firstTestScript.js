
describe("suite1", function(){
    it("validate app title",function(){
        browser.get('http://localhost:4200');
        browser.sleep(2000);
        browser.manage().window().maximize();
        expect(browser.getTitle()).toBe('DemoApp');

    });

    it("move to form load", function(){
        let formSelect = element(by.name('form-dropdown'));
        browser.actions().mouseMove(formSelect).click().perform();
        browser.sleep(2000);

    })

    it("fill company name",function(){
        element(by.css("input[formcontrolname=company]")).click().sendKeys('ResolverSoft');
        browser.sleep(2000);          
           
    })  

    it("fill first name",function(){
        element(by.css("input[formcontrolname=firstName]")).click().sendKeys('Pavel');
        browser.sleep(2000);          
           
    })  

    it("fill last name",function(){
        element(by.css("input[formcontrolname=lastName]")).click().sendKeys('Pavlov');
        browser.sleep(2000);          
           
    })  







    it("click submit",function(){
        element(by.buttonText("Submit")).click();
        browser.sleep(2000);  
    })


})
