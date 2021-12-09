describe("Payment Test", function(){
    beforeEach(function(){
        billAmtInput.value = 5;
        tipAmtInput.value = 1;
    });

    it('should create new table with bill amount, tip amount and tip percent', function(){
        submitPaymentInfo();
        let row = paymentTbody.querySelectorAll('tr');
        let paymentInfo = paymentTbody.querySelectorAll('td');

        expect(Object.keys(allPayments).length).toEqual(1);
        expect(Object.keys(allPayments.payment1).length).toEqual(3);
        expect(paymentId).toEqual(1);
        expect(row.length).toEqual(1);
        expect(paymentInfo[0].innerText).toEqual('$5');
        expect(paymentInfo[1].innerText).toEqual('$1');
        expect(paymentInfo[2].innerText).toEqual('20%');
        expect(summaryTds[0].innerText).toEqual('$5');
        expect(summaryTds[1].innerText).toEqual('$1');
        expect(summaryTds[2].innerText).toEqual('20%');
    });

    
    afterEach(function(){
        allPayments = {};
        paymentId = 0;
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
    });
    
});
