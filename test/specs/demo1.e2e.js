describe('demo1 e2e',()=>{
     it('demo1 e2e test',()=>{
         browser.url('https://the-internet.herokuapp.com/')
         .getTitle().then(function(title) {
            console.log(title);
        });
    });
});