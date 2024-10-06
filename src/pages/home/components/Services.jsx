import { Link } from "react-router-dom";

function Services(){
    return(
        <section class="py-8 px-16">
            <h1 class="text-4xl font-semibold">Services To Help You Shop </h1>
            <div class="border mt-4"></div>
            <div class="py-8 grid grid-cols-3 gap-x-8">
                <div class="bg-[#f4f8f9] rounded-lg">
                    
                    <div class="h-48">
                        <img src="/assets/services/faq.jpg" alt class="rounded-lg rounded-b-none h-full w-full object-cover"/>
                    </div>
                    <div class="p-4">
                        <h2 class="text-2xl font-medium"><Link to="FAQ">Frequently Asked Questions</Link></h2>
                        <p class="text-sm">Updates on safe shopping in our store</p>
                    </div>
                 
                </div>
                <div class="bg-[#f4f8f9] rounded-lg">
                    
                    <div class="h-48">
                        <img src="/assets/services/online-pay.jpg" alt class="rounded-lg rounded-b-none h-full w-full object-cover"/>
                    </div>
                    <div class="p-4">
                        <h2 class="text-2xl font-medium"><Link to="OPP">Online Payment Process</Link></h2>
                        <p class="text-sm">Updates on safe shopping in our store</p>
                    </div>
                
                </div>
                <div class="bg-[#f4f8f9] rounded-lg">
                    
                    <div class="h-48">
                        <img src="/assets/services/delivery.jpg" alt class="rounded-lg rounded-b-none h-full w-full object-cover"/>
                    </div>
                    <div class="p-4">
                        <h2 class="text-2xl font-medium"><Link to="Delivery">Home delivery options</Link></h2>
                        <p class="text-sm">Updates on safe shopping in our store</p>
                    </div>
                   
                </div>
            </div>
        </section>
    )
}
export default Services;