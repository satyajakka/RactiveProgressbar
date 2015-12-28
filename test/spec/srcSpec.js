describe('Sample Test', function () {
    it('to check', function () {
        expect("Ractive_Task").toEqual("Ractive_Task");
    });
});
describe('Ractive_Task', function () {
    it('Should be Empty', function () {
        expect(Ractive_Task.onReady()).toEqual([]);
    
    });
it('Should load ractive', function () {

        	var ractive =	Ractive_Task.onReady(function(){
        	 this.Ractive_Task.onReady();
        }); 
    	   
    });


});
 
