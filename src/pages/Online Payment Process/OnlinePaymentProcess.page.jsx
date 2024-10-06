function OnelinePaymentProcessPage(){
    return(
        <div className="py-8 px-16">
             <h1 className="text-4xl font-semibold">OnelinePaymentProcess</h1>
             <div className="border mt-4"></div>
             <h3 class="text-lg font-semibold mt-5"> 1.1 What payment methods do you accept?</h3>
             <p>
                 We accept major credit and debit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and other popular digital wallets. You can select your preferred payment method during checkout.
             </p>
             <h3 class="text-lg font-semibold mt-5"> 1.2  Is my payment information secure?</h3>
             <p>
                Yes, we use advanced encryption technology (SSL) to protect your payment information. We do not store your credit card details, and all transactions are securely processed through our payment gateway partners.
             </p>
             <h3 class="text-lg font-semibold mt-5"> 1.3 Can I pay in installments?</h3>
             <p>
                Yes, we offer installment plans through third-party financing partners. Eligible products can be paid over several months. You can select this option during checkout if your purchase qualifies for financing.
             </p>
             <h3 class="text-lg font-semibold mt-5"> 1.4 How can I apply a discount or promo code?</h3>
             <p>
                You can enter your discount or promo code in the designated box during checkout. The discount will be automatically applied to your total before payment.
             </p>
             <h3 class="text-lg font-semibold mt-5"> 1.5  What should I do if my payment is declined?</h3>
             <p>
                If your payment is declined, first ensure that your card details are entered correctly. If the issue persists, try a different payment method or contact your bank. You can also reach out to our customer service for further assistance.
             </p>
             <h3 class="text-lg font-semibold mt-5"> 1.6 Do you charge additional fees for international payments?</h3>
             <p>
                We do not charge additional fees for international payments, but your bank may apply currency conversion or international transaction fees. Check with your bank for details.
             </p>
             

        </div>
    )
};

export default OnelinePaymentProcessPage;