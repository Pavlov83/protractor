
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

    it("fills company name",function(){
        element(by.css("input[formcontrolname=company]")).click().sendKeys('ResolverSoft');
        browser.sleep(2000);          
           
    })  

    it("fills first name",function(){
        element(by.css("input[formcontrolname=firstName]")).click().sendKeys('Pavel');
        browser.sleep(2000);          
           
    })  

    it("fills last name",function(){
        element(by.css("input[formcontrolname=lastName]")).click().sendKeys('Pavlov');
        browser.sleep(2000);          
           
    })

    it("fills address",function(){
        element(by.css("textarea[formcontrolname=address]")).click().sendKeys('Bulgaria,test,adress,1');
        browser.sleep(2000);          
           
    })

    it("clicks on +Add",function(){
        element(by.xpath("//*[contains(text(),' + Add C/O, Apt, Suite, Unit ')]")).click();
        browser.sleep(2000); 
    })

    it("fills city",function(){
        element(by.css("input[formcontrolname=city]")).click().sendKeys('Bulgaria,test,adress,1');
        browser.sleep(2000);          
           
    })
    
    it("Clicks on State",function(){
        element(by.xpath('//*[@class="mat-select-placeholder mat-select-min-line ng-tns-c95-7 ng-star-inserted"]')).click();
        browser.sleep(2000); 
                 
           
    })

    it("fills city",function(){
        element(by.css("input[formcontrolname=city]")).click().sendKeys('Sofia');
        browser.sleep(2000);          
           
    })

    it("click submit",function(){
        element(by.buttonText("Submit")).click();
        browser.sleep(2000);  
    })
})
