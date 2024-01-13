import React, { useState } from 'react';
import patienthistory from "../Assets/patienthistory.png"
import icon from "../Assets/icon.png"


const Features = () => {        
    return (
        <section className="py-12 bg-white sm:py-16 lg:py-20">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
            <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">हमारी मुख्य विशेषताएँ</h2>
            <p className="mt-4  text-xl leading-7 text-gray-600 sm:mt-8 font-pj">हम सभी के लिए स्वास्थ्य को सुलभ और व्यक्तिगत बनाने में यह मानते हैं। हमारे समुदाय में शामिल हों और एक स्वस्थतम, खुशहाल जीवन की ओर एक सफल यात्रा शुरू करें!</p>
        </div>

        <div className="grid grid-cols-1 mt-10 text-center  sm:mt-16  sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
            <div className="flex flex-col justify-center items-center md:p-8 lg:p-14">
            <br />
                <br />
                <img className='h-46 w-46' src={icon} alt="" />
                <br />
               
                <br />
                <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj"> रोगनिवारण और बचाव</h3>
                <p className="mt-5 text-base text-gray-600 font-pj">हमारे चयनित स्रोतों और सुझावों की खोज करें जो रोगनिवारण की दिशा में हैं, जो सभी के लिए अनुकूल जानकारी और व्यावहारिक सुझाव प्रदान करते हैं।.</p>
            </div>


            <div className="flex flex-col justify-center items-center md:p-8 lg:p-14 md:border-l md:border-gray-200">
                <img className='h-42 w-42' src="https://img.freepik.com/free-vector/healthy-lifestyle-concept-illustration_114360-5659.jpg?ga=GA1.1.433319940.1703746023&semt=ais" alt="" />
                
                <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">जीवनशैली सुझाव और सलाह</h3>
                <p className="mt-5 text-base text-gray-600 font-pj">विविध दर्शकों को ध्यान में रखते हुए, एक स्वस्थतम और चमकीले जीवन को खोलें जो विभिन्न लोगों के लिए अनुकूल है। तंतु प्रबंधन से लेकर फिटनेस सिफारिशों तक, हम यहां हैं आपके वेलबीइंग यात्रा का समर्थन करने के लिए।</p>
            </div>

            <div className="flex flex-col justify-center items-center md:p-8 lg:p-14 md:border-l md:border-gray-200">
            <br />
            <br />
            <br />

                <img className='h-36 w-36' src={patienthistory} alt="" />
               
               
                <br />
                <br />
                <br />
                <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">रोगी इतिहास को ट्रैक करना</h3>
                <p className="mt-5 text-base text-gray-600 font-pj">हमारे प्रगतिशील ट्रैकिंग सिस्टम के साथ अपने स्वास्थ्य पर नियंत्रण पाएं। चाहे आप स्वास्थ्य-सचेत व्यक्ति हों या किसी विशिष्ट स्थिति का संचालन कर रहे हों, एक विस्तृत रोगी इतिहास बनाएं ताकि सटीक निदान और व्यक्तिगत स्वास्थ्य समाधान के लिए।</p>
            </div>

            <div className="flex flex-col justify-center items-center md:p-8 lg:p-14 md:border-l md:border-gray-200">
                <img className='h-42 w-42' src="https://img.freepik.com/free-vector/online-doctor-concept-illustration_114360-1831.jpg?w=1380&t=st=1703761282~exp=1703761882~hmac=30161676c2d7fa825a533fb2a0eb16a170d0e3c3ea273eb6b5e71f16d1e64874" alt="" />
                
                <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">नियमित स्वास्थ्य जाँचें</h3>
                <p className="mt-5 text-base text-gray-600 font-pj">अपने स्वास्थ्य को प्राथमिकता दें निर्धारित जाँच और याद दिलाने के साथ, सुनिश्चित करें कि आप अपने वेल-बीइंग के लक्ष्यों के साथ में रहें। हमारी उपयोगकर्ता-सहायक प्रणाली सभी के लिए सुलभ है, स्वास्थ्य के प्रति सक्रिय दृष्टिकोण को प्रोत्साहित करती है।</p>
            </div>

            <div className="flex flex-col justify-center items-center md:p-8 lg:p-14 md:border-l md:border-gray-200">
                <br />
                <br />
                <img className='h-42 w-42' src="https://img.freepik.com/free-photo/flexitarian-diet-food-arrangement_23-2148955483.jpg?w=2000&t=st=1703761812~exp=1703762412~hmac=dd70d9a7d1277f953a2d1361ece09c01ea1c824c8e12e8333737c9610a215ecb4" alt="" />
                <br />
                <br />
               
                
                <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">प्रत्येक जीवनशैली के लिए पाचन और पोषण सुझाव</h3>
                <p className="mt-5 text-base text-gray-600 font-pj">अपनी विशेष आवश्यकताओं के लिए अनुकूलित आहार सिफारिशें और पोषण की दृष्टिकोण प्राप्त करें। क्या आप पाचन सुधारना चाह रहे हैं या कुल में पोषण को बढ़ावा देना चाहते हैं, हमारा प्लेटफ़ॉर्म सभी जीवन के रास्तों से जुड़े व्यक्तियों के लिए है।</p>
            </div>

            <div className="flex flex-col justify-center items-center md:p-8 lg:p-14 md:border-l md:border-gray-200">
                
            <br />
                <br />
                <br />
                <br />
                <br />

                <img className='h-36 w-36' src="https://img.freepik.com/free-vector/customer-support-illustration_23-2148903319.jpg?ga=GA1.1.433319940.1703746023&semt=ais4" alt="" />
                <br />
                <br />
                <br />
                
                <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">हर कदम पर हमारा स्वास्थ्य समर्थन और सहायता</h3>
                <p className="mt-5 text-base text-gray-600 font-pj">हम पूरी तरह से आपके स्वास्थ्य की देखभाल में सहायक बनेंगे और हर कदम पर आपके साथ होंगे। कोई भी हमारे स्वास्थ्य विशेषज्ञों से कभी भी सीधे संपर्क कर सकता है और हमारी समर्थन और सहायता प्राप्त कर सकता है। यह सुनिश्चित करने के लिए है कि आपको हर समय सही मार्गदर्शन और समर्थन मिले, चाहे आप किसी भी स्थिति में क्यों ना हों।।</p>
            </div>

            

            
        </div>
    </div>
</section>

    )
}
export default Features;