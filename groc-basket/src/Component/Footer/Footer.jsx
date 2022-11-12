import "./Footer.Module.css"
const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="bigbasketfooter"><h1 className="footbig">bigbasket</h1> <br />
                    <p className="footgreen">About Us</p>
                    <p className="footgreen">In News</p>  
                    <p className="footgreen">Green bigbasket</p> 
                    <p className="footgreen">Privacy Policy</p>  
                    <p className="footgreen">Affiliate</p>  
                    <p className="footgreen">Terms and Conditions</p> 
                    <p className="footgreen">Careers At bigbasket</p>
                    <p className="footgreen">bb Instant</p>
                    <p className="footgreen">bb Daily</p> 
                    <p className="footgreen">bb Blog</p>
                    <p className="footgreen">bbnow</p> 
                </div>

                <div className="help"><h1 className="footbig">Help</h1> <br />
                    <p className="footgreen">FAQs</p> 
                    <p className="footgreen">Contact Us</p> 
                    <p className="footgreen">bb Wallet FAQs</p> 
                    <p className="footgreen">bb Wallet T&Cs</p> 
                    <p className="footgreen">Vendor Connect</p> 
                




                </div>
                <div className="ourapp"><h1 className="footbig">Download Our App</h1> <br />
                    <div><img src="https://www.bbassets.com/static/v2608/custPage/build/content/img/Google-App-store-icon.png" alt="" /></div> <br />
                    <div><img src="https://www.bbassets.com/static/v2608/custPage/build/content/img/Apple-App-store-icon.png" alt="" /></div>
                </div>
               
                <div className="social">
                <h1 className="footbig">Get Social With Us</h1>
                    <div className="socialimg">
                    <div><img src="https://cdn4.iconfinder.com/data/icons/various-icons-2/476/Facebook.png" alt="" /></div>
                    <div><img src="https://i.pinimg.com/736x/41/b8/1e/41b81ec9aa7588ec5950c73ceb548954.jpg" alt="" /></div>
                    <div><img src="https://www.freeiconspng.com/thumbs/logo-twitter-png/logo-twitter-icon-symbol-0.png" alt="" /></div>
                    <div><img src="https://img.freepik.com/free-vector/instagram-vector-social-media-icon-7-june-2021-bangkok-thailand_53876-136728.jpg?w=360" alt="" /></div>
                    </div>    
                </div>
            </div>
            <hr className="foothr" />
            <div className="footer2">
                <div className="category">
                    <h1>POPULAR CATEGORIES:</h1>
                    <p>
Fruits & Vegetables, Basmati Rice, Green Tea, OTC, Cheese, Dry Fruits, Chocolates & Sweets, Soft Drinks, Energy Drinks, Bakery, Cakes & Dairy, <br /> Olive Oils, Foodgrains, Oil & Masala, Sunflower Oils, Liquid Soaps & Bars,</p>
                </div>
                <div className="brand">
                    <h1>POPULAR BRANDS:</h1>
                    <p>
                    Amul, Haldirams , Tropicana, Kelloggs, Dettol, MTR, Bru , McCain, Ariel, Britannia, Nescafe , Colgate, Horlicks, Galaxy, Complan,</p>
                </div>
                <div className="serve">
                    <h1>CITIES WE SERVE:</h1>
                    <p>

                    Bangalore, Hyderabad, Mumbai, Pune, Chennai, Delhi, Mysore, Madurai, Coimbatore, Vijayawada-Guntur, Kolkata, Ahmedabad-Gandhinagar, <br /> Nashik Business, Lucknow-Kanpur, Gurgaon, Vadodara, Visakhapatnam, Surat, Nagpur, Patna, Indore, Chandigarh Tricity, Jaipur, Bhopal, <br /> Noida-Ghaziabad, Kochi, Krishna District, Bhubaneshwar-Cuttack, Guwahati, Renigunta, Hubli, Davanagere, Trichy, Amravati, Raipur, Rajkot, <br /> Gwalior, Bareilly, Allahabad, Hyderabad Rural, Bangalore Rural, Chennai Rural, Vizag Rural, Lucknow Rural, Noida Rural, Ahmedabad Rural,<br /> Bhopal Rural, Bhubaneswar Rural, Coimbatore Rural, Chandigarh Rural, Gurugram Rural, Guwahati Rural, Indore Rural, Kochi Rural, Kolkata Rural,<br /> Mumbai Rural, Mysore Rural, Nagpur Rural, Patna Rural, Pune Rural, Surat Rural, Vadodara Rural, Jaipur Rural, Ranchi, Nashik, Agra, Kozhikode, </p>
                </div>

                <div className="paymentfooter">
                    <h1>PAYMENT OPTIONS:</h1>
                    <div className="paymentimg">
                    <div><img src="https://w7.pngwing.com/pngs/703/625/png-transparent-cash-on-delivery-money-price-cheque-service-cash-on-delivery.png" alt="" /></div>
                    <div><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="" /></div>
                    <div><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png" alt="" /></div>
                    <div><img src="https://upload.wikimedia.org/wikipedia/commons/4/42/Paytm_logo.png" alt="" /></div>
                    <div><img src="data:image/png;base64,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" alt="" /></div>
                    <div><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/RuPay.svg/2560px-RuPay.svg.png" alt="" /></div>
                    <div><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1200px-American_Express_logo_%282018%29.svg.png" alt="" /></div>
                    </div>
                    
                </div>
                
            </div>
            <div className="foot3">
                <p>Copyright © 2021-2023 Supermarket Grocery Supplies Pvt Ltd</p>
            </div>
            
           
        </>
    )
}

export default Footer