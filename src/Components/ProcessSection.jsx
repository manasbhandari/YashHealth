import React from 'react'
import registration from "../Assets/registration.jpeg"
import profile from "../Assets/profile.avif"
import support from "../Assets/support.avif"
import info from "../Assets/info.jpeg"
import consultation from "../Assets/consultation.jpeg"





const ProcessSection = () => {
  return (
    <div>
      <div class="">

      <div className="text-center">
            <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">सेवाओं की आसान प्रक्रिया</h2>
            <p className="mt-4 mr-10 ml-10 text-xl leading-7 text-gray-600 sm:mt-8 font-pj">हमारी सेवा प्रक्रिया आपको आसानी से और सुरक्षित तरीके से हमारी सेवाओं तक पहुंचने में मदद करती है। इस स्थानिकरण में हम सुनिश्चित करते हैं कि आप अपने स्वास्थ्य की देखभाल में सीधे और सरल रूप से शामिल हो सकें।</p>
        </div>



<div class="container mx-auto my-8">
    
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <div class="bg-white p-6 h-42 rounded-lg shadow-lg">
            <img src={registration} alt="Step 1" class="mb-4 rounded-md h-42 w-full object-cover"></img>
            <h3 class="text-xl font-semibold mb-2">कदम 1: संपर्क और पंजीकरण</h3>
            <p class="text-gray-700">सबसे पहले, आप साइट पर आकर हमसे संपर्क करें और अपना पंजीकरण करें।</p>
        </div>

        
        <div class="bg-white p-6 rounded-lg shadow-lg">
            <img src={profile} alt="Step 2" class="mb-4 rounded-md h-42 w-full object-cover"></img>
            <h3 class="text-xl font-semibold mb-2">कदम  2: व्यक्तिगत प्रोफ़ाइल बनाएं</h3>
            <p class="text-gray-700">हमारी सेवाओं का लाभ उठाने के लिए आपको एक व्यक्तिगत प्रोफ़ाइल बनाना होगा, जिसमें आप अपनी जानकारी साझा कर सकते हैं।</p>
        </div>

       
        <div class="bg-white p-6 rounded-lg shadow-lg">
            <img src={consultation} alt="Step 3" class="mb-4 rounded-md h-42 w-full object-cover"></img>
            <h3 class="text-xl font-semibold mb-2">कदम 3:वार्ता और लाभt</h3>
            <p class="text-gray-700">संपर्क और वार्ता के माध्यम से आप हमारे विशेषज्ञों से सीधे सलाह और लाभ प्राप्त कर सकते हैं।.</p>
        </div>

        
        <div class="bg-white p-6 rounded-lg shadow-lg">
            <img src={info} alt="Step 4" class="mb-4 rounded-md h-42 w-full "></img>
            <h3 class="text-xl font-semibold mb-2">कदम 4: जानकारी और समर्थन</h3>
            <p class="text-gray-700">हमारे तकनीकी दल से समर्थन प्राप्त करने के लिए आपके लिए एक सर्वोत्तम सामग्री उपलब्ध है।</p>
        </div>

        
        <div class="bg-white p-6 rounded-lg shadow-lg">
            <img src={support} alt="Step 5" class="mb-4 rounded-md h-42 w-full object-cover"></img>
            <br />
            <br />
            
            <h3 class="text-xl font-semibold mb-2">कदम 5: अंतिम कदम: हम हमेशा आपके साथ रहेंगे, ताकि आप खुशहाल और स्वस्थ जीवन जी सकें।</h3>
          
            <p class="text-gray-700">हम हमेशा आपके साथ रहेंगे और आपके स्वास्थ्य की देखभाल करेंगे, ताकि आप हमेशा खुशहाल और स्वस्थ रहें। हम निरंतर आपके साथ संपर्क में रहेंगे, नए सुझाव और सार्थक जानकारी प्रदान करेंगे और आपकी जीवनशैली को बेहतर बनाए रखने में मदद करेंगे। यह हमारा वचन है कि हम आपके साथ हैं, हमेशा और सदैव।</p>
        </div>
    </div>
</div>

</div>

    </div>
  )
}

export default ProcessSection
