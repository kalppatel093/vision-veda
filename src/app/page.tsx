"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Eye, Monitor, ArrowRight } from "lucide-react"
import Image from "next/image"
import { CountdownTimer } from "../components/countdown-timer"
import { OrderForm } from "../components/orderForm";
import Link from "next/link"
import { Phone, Mail } from "lucide-react"

// Add scroll helper function
const scrollToForm = () => {
  const formSection = document.querySelector('#order-form')
  if (formSection) {
    formSection.scrollIntoView({ behavior: 'smooth' })
  }
}


// Server-side data fetching
function getTestimonials() {
  // In a real app, this would fetch from a database
  return [
    {
      name: "राजेश कुमार",
      age: 45,
      rating: 5,
      comment:
        "विजन वेदा का उपयोग करने के सिर्फ 2 महीने बाद मेरी आंखों की थकान पूरी तरह से गायब हो गई है। मैं कंप्यूटर पर घंटों काम कर सकता हूं बिना किसी असुविधा के।",
      image: "https://i.pinimg.com/736x/5d/a8/76/5da8768c07eb3db7dbf5f394ab4444a6.jpg",
      location: "मुंबई",
    },
    {
      name: "प्रिया शर्मा",
      age: 38,
      rating: 5,
      comment:
        "अद्भुत परिणाम! मेरी दृष्टि की स्पष्टता में काफी सुधार हुआ है। अब धुंधली दृष्टि या सूखी आंखें नहीं हैं। अत्यधिक अनुशंसित!",
      image: "https://as2.ftcdn.net/v2/jpg/03/09/15/37/1000_F_309153706_OQHdIyZp9gixDkTOFow3Xa6w5wWkqil4.jpg",
      location: "दिल्ली",
    },
    {
      name: "सुरेश पटेल",
      age: 52,
      rating: 5,
      comment:
        "मेरी बढ़ती उम्र की आंखों के लिए प्राकृतिक और प्रभावी समाधान। मेरी रात की दृष्टि में सुधार हुआ है और मैं गाड़ी चलाते समय अधिक आत्मविश्वास महसूस करता हूं।",
      image: "https://tse2.mm.bing.net/th/id/OIP.ERaFVrp1xzzX0zCupKHZhAHaN_?pid=Api&P=0&h=180",
      location: "अहमदाबाद",
    },
    {
      name: "अनीता वर्मा",
      age: 41,
      rating: 5,
      comment: "उत्कृष्ट उत्पाद! मेरे मैक्युला स्वास्थ्य में सुधार हुआ है और मेरे नेत्र चिकित्सक परिणामों से प्रभावित हैं।",
      image: "https://tse3.mm.bing.net/th/id/OIP.uBfTbGAc72Gep3td25ZhdQHaLE?pid=Api&P=0&h=180",
      location: "बैंगलोर",
    },
    {
      name: "रमेश गुप्ता",
      age: 48,
      rating: 5,
      comment:
        "यह आयुर्वेदिक समाधान महंगे आई ड्रॉप्स से बेहतर काम करता है। मेरी आंखें पूरे दिन ताजा और स्वस्थ महसूस करती हैं।",
      image: "https://tse3.mm.bing.net/th/id/OIP.3Rlz7dClT3o9_oz3JHBMAAAAAA?pid=Api&P=0&h=180",
      location: "पुणे",
    },
    {
      name: "कविता सिंह",
      age: 35,
      rating: 5,
      comment:
        "प्राकृतिक सामग्री के साथ बेहतरीन उत्पाद। मेरा कंप्यूटर आई सिंड्रोम पूरी तरह से गायब हो गया है। हर पैसा सार्थक!",
      image: "https://i.pinimg.com/736x/2d/45/ab/2d45ab6ccecab0c54b1662d44befcc5c.jpg",
      location: "चेन्नई",
    },
  ]
}

function getIngredients() {
  return [
    {
      name: "त्रिफला",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Phyllanthus_officinalis.jpg/500px-Phyllanthus_officinalis.jpg",
      description: "त्रिफला आंखों की स्वास्थ्य को बढ़ाने में मदद करती है और मैक्युला स्वास्थ्य को समर्थन करती है।",
    },
    {
      name: "गिंको बिलोबा",
      imageUrl: "https://tse3.mm.bing.net/th/id/OIP.qNq2XLUyasRW_kijEti0BQHaEK?pid=Api&P=0&h=180",
      description: "गिंको बिलोबा आंखों की स्वास्थ्य को बढ़ाने में मदद करती है और मैक्युला स्वास्थ्य को समर्थन करती है।",
    },
    {
      name: "सौंफ के बीज",
      imageUrl: "https://tse3.mm.bing.net/th/id/OIP.CsFS9QMgIvI3I5GcLN6dXgHaEK?pid=Api&P=0&h=180",
      description: "सौंफ के बीज आंखों की स्वास्थ्य को बढ़ाने में मदद करती है और मैक्युला स्वास्थ्य को समर्थन करती है।",
    },
    {
      name: "बिलबेरी",
      imageUrl: "https://tse3.mm.bing.net/th/id/OIP.WQVXSJWmQpgOuDzQwLIDKAAAAA?pid=Api&P=0&h=180",
      description: "बिलबेरी आंखों की स्वास्थ्य को बढ़ाने में मदद करती है और मैक्युला स्वास्थ्य को समर्थन करती है।",
    },
    {
      name: "कैलेंडुलाअनीता",
      imageUrl: "https://tse4.mm.bing.net/th/id/OIP.AIuI6JTQ9ACIC6OjTmIUVAHaE8?pid=Api&P=0&h=180",
      description: "कैलेंडुला आंखों की स्वास्थ्य को बढ़ाने में मदद करती है और मैक्युला स्वास्थ्य को समर्थन करती है।",
    },
  ]
}

export default function VisionVedaLanding() {
  const testimonials = getTestimonials()
  const ingredients = getIngredients()

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Top Banner */}
      <div className="fixed top-0 w-full bg-blue-600 text-white py-2 text-center z-50">
        <p className="text-sm md:text-base">
          🌟 डॉक्टर द्वारा तैयार • 100% प्राकृतिक
        </p>
      </div>

      {/* Header/Navbar */}
      <header className="sticky top-10 z-40 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2">
              <Eye className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold">विजन वेदा</span>
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="#benefits" className="text-gray-600 hover:text-blue-600">लाभ</Link>
              <Link href="#testimonials" className="text-gray-600 hover:text-blue-600">समीक्षाएं</Link>
              <Link href="#ingredients" className="text-gray-600 hover:text-blue-600">सामग्री</Link>
              <Link href="#pricing" className="text-gray-600 hover:text-blue-600">मूल्य</Link>
              <Link href="#contact" className="text-gray-600 hover:text-blue-600">संपर्क</Link>
            </nav>
            <div className="md:hidden">
              <button className="text-gray-600 hover:text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M3 12h18"/><path d="M3 6h18"/><path d="M3 18h18"/></svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-white py-20 md:py-32 mt-10">
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  अपनी आंखों की रोशनी
                  <br />
                  <span className="text-blue-600">
                    वापस लाएं
                  </span>
                </h1>
                <ul className="text-xl text-gray-600 max-w-2xl leading-relaxed space-y-2">
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">✦</span>
                    आयुर्वेदिक विशेषज्ञों द्वारा विकसित प्राकृतिक नेत्र देखभाल
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">✦</span>
                    थकी हुई आँखों को आराम और मैक्युला स्वास्थ्य में सुधार
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">✦</span>
                    डिजिटल स्क्रीन से होने वाले तनाव से राहत
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">✦</span>
                    वैज्ञानिक रूप से सिद्ध शुद्ध जड़ी बूटियों का मिश्रण
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">✦</span>
                    दृष्टि की स्पष्टता और आँखों की रोशनी में वृद्धि
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">✦</span>
                    मोतियाबिंद की समस्या से निजात
                  </li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToForm}
                  className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center"
                >
                  अभी ऑर्डर करें - सिर्फ ₹1,499
                  <ArrowRight className="ml-2 h-6 w-6" />
                </button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jul%2011%2C%202025%2C%2011_26_44%20PM-OSrc6hmQcWoCyBuwxaF5nt4XE0O5IK.png"
                alt="Vision Veda Hero"
                width={600}
                height={600}
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Eye Problems Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            सामान्य आँखों की समस्याएं
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border border-gray-200">
              <CardContent className="p-6 text-center">
                <Monitor className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">कंप्यूटर विजन सिंड्रोम</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• लंबे समय तक स्क्रीन देखने से आँखों में थकान</li>
                  <li>• आँखों में जलन और सूखापन</li>
                  <li>• धुंधली दृष्टि और सिरदर्द</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-200">
              <CardContent className="p-6 text-center">
                <Eye className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">आयु संबंधित समस्याएं</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• पढ़ने में कठिनाई</li>
                  <li>• मैक्युला का स्वास्थ्य</li>
                  <li>• दृष्टि की स्पष्टता में कमी</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-200">
              <CardContent className="p-6 text-center">
                <Eye className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">मोतियाबिंद की समस्या</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• आंखों में दर्द और जलन</li>
                  <li>• आंखों में सूजन</li>
                  <li>• धुंधली दृष्टि</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Add Before/After Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Add a heading emphasizing Vision Veda's unique benefits */}
          <div className="text-center mb-8">
            <p className="text-xl text-blue-600 font-bold">
              केवल विजन वेदा से संभव
            </p>
            <p className="text-gray-600">
              हमारे आयुर्वेदिक फॉर्मूला से दिखने वाले चमत्कारी परिणाम
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* White Cataract */}
            <Card className="border border-gray-200 interactive">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-center">सफेद मोतियाबिंद</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="relative aspect-square">
                        <Image
                          src="https://cdn.hexahealth.com/Image/webp/480x480/61b9f95b-7b6e-40ac-b0f8-fa10725479d5.webp"
                          alt="White Cataract Before"
                          width={400}
                          height={500}
                          className="rounded-lg object-cover border-2 border-red-200 h-full"
                        />
                      </div>
                      <p className="text-center text-red-500 font-medium">पहले</p>
                      <ul className="text-sm text-gray-700 space-y-1 mt-2 pl-4">
                        <li>• धुंधली दृष्टि</li>
                        <li>• रोशनी के प्रति संवेदनशीलता</li>
                        <li>• रंगों का धुंधलापन</li>
                        <li>• रात में देखने में परेशानी</li>
                        <li className="font-bold">• आंखों में दर्द और जलन</li>
                        <li className="font-bold">• पढ़ने में कठिनाई</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <div className="relative aspect-square">
                        <Image
                          src="https://tse2.mm.bing.net/th/id/OIP.dULvtdQ7PE8dFMAb0n_9SQHaEK?pid=Api&P=0&h=180"
                          alt="White Cataract After"
                          width={400}
                          height={400}
                          className="rounded-lg object-cover border-2 border-green-200 h-full"
                        />
                      </div>
                      <p className="text-center text-green-500 font-medium">विजन वेदा के बाद</p>
                      <ul className="text-sm text-gray-700 space-y-1 mt-2 pl-4">
                        <li>• स्पष्ट और साफ दृष्टि</li>
                        <li>• रंगों की बेहतर पहचान</li>
                        <li>• रोशनी के प्रति कम संवेदनशीलता</li>
                        <li>• बिना चश्मे के पढ़ने की क्षमता</li>
                        <li className="font-bold">• <span className="text-green-600">विजन वेदा के उपयोग से</span> आंखों का दर्द गायब</li>
                        <li className="font-bold">• <span className="text-green-600">विजन वेदा से</span> पढ़ने की क्षमता में सुधार</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Black Cataract */}
            <Card className="border border-gray-200 interactive">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-center">काला मोतियाबिंद</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="relative aspect-square">
                        <Image
                          src="https://tse2.mm.bing.net/th/id/OIP.UYAWdOmdg-5zm0Mm3l88QgHaHa?pid=Api&P=0&h=180"
                          alt="Black Cataract Before"
                          width={400}
                          height={400}
                          className="rounded-lg object-cover border-2 border-red-200"
                        />
                      </div>
                      <p className="text-center text-red-500 font-medium">पहले</p>
                      <ul className="text-sm text-gray-700 space-y-1 mt-2 pl-4">
                        <li>• गंभीर दृष्टि हानि</li>
                        <li>• आंखों में दर्द और जलन</li>
                        <li>• दोहरी दृष्टि</li>
                        <li>• आंखों में सूजन</li>
                        <li className="font-bold">• रात में ड्राइविंग में समस्या</li>
                        <li className="font-bold">• चश्मे पर अत्यधिक निर्भरता</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <div className="relative aspect-square">
                        <Image
                          src="https://tse2.mm.bing.net/th/id/OIP.IA87Pzz5VUdGTX2bsF0IagHaD4?pid=Api&P=0&h=180"
                          alt="Black Cataract After"
                          width={400}
                          height={400}
                          className="rounded-lg object-cover border-2 h-full border-green-200"
                        />
                      </div>
                      <p className="text-center text-green-500 font-medium">विजन वेदा के बाद</p>
                      <ul className="text-sm text-gray-700 space-y-1 mt-2 pl-4">
                        <li>• बेहतर दृष्टि क्षमता</li>
                        <li>• आंखों की सूजन में कमी</li>
                        <li>• आंखों का दर्द दूर</li>
                        <li>• स्पष्ट एकल दृष्टि</li>
                        <li className="font-bold">• <span className="text-green-600">विजन वेदा के उपयोग से</span> रात में ड्राइविंग में आत्मविश्वास</li>
                        <li className="font-bold">• <span className="text-green-600">प्राकृतिक उपचार से</span> चश्मे की निर्भरता में कमी</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Near/Far Sightedness */}
            <Card className="border border-gray-200 interactive">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-center">दूर/नजदीक की दृष्टि</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="relative aspect-square">
                        <Image
                          src="https://tse2.mm.bing.net/th/id/OIP.7WLBr-nMCyvi-lSd6VABjAHaIV?pid=Api&P=0&h=180"
                          alt="Vision Problem Before"
                          width={400}
                          height={400}
                          className="rounded-lg object-cover border-2 border-red-200"
                        />
                      </div>
                      <p className="text-center text-red-500 font-medium">पहले</p>
                      <ul className="text-sm text-gray-700 space-y-1 mt-2 pl-4">
                        <li>• पढ़ने में कठिनाई</li>
                        <li>• दूर की वस्तुओं को देखने में समस्या</li>
                        <li>• आंखों का तनाव और सिरदर्द</li>
                        <li>• चश्मे पर निर्भरता</li>
                        <li className="font-bold">• मोबाइल/कंप्यूटर पर काम करने में परेशानी</li>
                        <li className="font-bold">• लगातार चश्मे के नंबर में बदलाव</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <div className="relative aspect-square">
                        <Image
                          src="https://tse3.mm.bing.net/th/id/OIP.EPtZ4eigPunTTIX-H7aoawHaE8?pid=Api&P=0&h=180"
                          alt="Vision Problem After"
                          width={400}
                          height={400}
                          className="rounded-lg object-cover h-full border-2 border-green-200"
                        />
                      </div>
                      <p className="text-center text-green-500 font-medium">विजन वेदा के बाद</p>
                      <ul className="text-sm text-gray-700 space-y-1 mt-2 pl-4">
                        <li>• स्पष्ट दूर और नजदीक की दृष्टि</li>
                        <li>• बिना चश्मे के पढ़ने की क्षमता</li>
                        <li>• आंखों के तनाव में कमी</li>
                        <li>• बेहतर जीवन की गुणवत्ता</li>
                        <li className="font-bold">• <span className="text-green-600">विजन वेदा के सेवन से</span> डिजिटल स्क्रीन पर लंबे समय तक काम करने की क्षमता</li>
                        <li className="font-bold">• <span className="text-green-600">आयुर्वेदिक फॉर्मूला के कारण</span> चश्मे के नंबर में स्थिरता</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Eye Strain */}
            <Card className="border border-gray-200 interactive">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-center">आंखों का तनाव</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="relative aspect-square">
                        <Image
                          src="https://tse4.mm.bing.net/th/id/OIP.EqhFdXLYw-dHPTuCdlgTdAHaJ3?pid=Api&P=0&h=180"
                          alt="Eye Strain Before"
                          width={400}
                          height={400}
                          className="rounded-lg object-cover border-2 border-red-200"
                        />
                      </div>
                      <p className="text-center text-red-500 font-medium">पहले</p>
                      <ul className="text-sm text-gray-700 space-y-1 mt-2 pl-4">
                        <li>• सूखी, थकी और लाल आंखें</li>
                        <li>• सिरदर्द और आंखों में दर्द</li>
                        <li>• लंबे समय तक काम करने में असमर्थता</li>
                        <li>• स्क्रीन पर फोकस करने में कठिनाई</li>
                        <li className="font-bold">• आंखों में पानी आना और जलन</li>
                        <li className="font-bold">• रात में नींद में कमी</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <div className="relative aspect-square">
                        <Image
                          src="https://tse3.mm.bing.net/th/id/OIP.YFVHKv4su1Is8y0ElvydugHaGN?pid=Api&P=0&h=180"
                          alt="Eye Strain After"
                          width={400}
                          height={800}
                          className="rounded-lg object-cover border-2 h-full border-green-200"
                        />
                      </div>
                      <p className="text-center text-green-500 font-medium">विजन वेदा के बाद</p>
                      <ul className="text-sm text-gray-700 space-y-1 mt-2 pl-4">
                        <li>• स्वस्थ और आरामदायक आंखें</li>
                        <li>• बिना थकान के लंबे समय तक काम</li>
                        <li>• आंखों की लालिमा से राहत</li>
                        <li>• बेहतर फोकस और उत्पादकता</li>
                        <li className="font-bold">• <span className="text-green-600">विजन वेदा के उपयोग से</span> आंखों की जलन से पूर्ण मुक्ति</li>
                        <li className="font-bold">• <span className="text-green-600">प्राकृतिक तत्वों के कारण</span> गहरी और आरामदायक नींद</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Countdown Timer */}
      <section className="py-8 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">⚡ सीमित समय का ऑफर - 50% OFF!</h3>
            <CountdownTimer />
            <p className="text-lg mt-4">आज ही ऑर्डर करें और अपनी दृष्टि को पुनर्स्थापित करें!</p>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">संतुष्ट ग्राहकों की कहानियां</h2>
            <p className="text-xl text-gray-600">
              देखें कि विजन वेदा ने हजारों लोगों की दृष्टि को कैसे बदल दिया है
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((review, index) => (
              <Card key={index} className="border border-gray-200 interactive">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Image
                      src={review.image || "/placeholder.svg"}
                      alt={review.name}
                      width={60}
                      height={60}
                      className="rounded-full border-2 border-blue-200"
                    />
                    <div>
                      <h4 className="font-semibold text-lg">{review.name}</h4>
                      <p className="text-sm text-gray-500">
                        उम्र: {review.age} • {review.location}
                      </p>
                      <div className="flex space-x-1 mt-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{review.comment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section id="ingredients" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">प्राकृतिक सामग्री</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              प्रत्येक सामग्री को ध्यान से चुना जाता है और वैज्ञानिक रूप से सिद्ध है
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {ingredients.map((ingredient, index) => (
              <Card key={index} className="border border-gray-200 interactive">
                <CardContent className="p-4 text-center">
                  <div className="relative w-full aspect-square mb-3 overflow-hidden rounded-lg">
                    <Image
                      src={ingredient.imageUrl}
                      alt={ingredient.name}
                      width={200}
                      height={200}
                      className="object-cover w-full h-full"
                      priority
                    />
                  </div>
                  <p className="text-sm font-medium text-gray-800 mb-1">{ingredient.name}</p>
                  <p className="text-xs text-gray-600 line-clamp-2">{ingredient.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">सर्वोत्तम मूल्य</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              अपनी दृष्टि में निवेश करें - सीमित समय का ऑफर
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="bg-white text-gray-900 p-8 border border-gray-200 interactive">
              <CardContent className="p-0 text-center">
                <div className="mb-6">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jul%2011%2C%202025%2C%2011_26_44%20PM-OSrc6hmQcWoCyBuwxaF5nt4XE0O5IK.png"
                    alt="Vision Veda Complete Kit"
                    width={300}
                    height={300}
                    className="mx-auto rounded-lg"
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="text-3xl font-bold">विजन वेदा कम्पलीट किट</h3>
                  <div className="flex items-center justify-center space-x-3">
                    <Badge className="bg-blue-100 text-blue-700 text-lg">30 कैप्सूल</Badge>
                    {/* <Badge className="bg-green-100 text-green-700 text-lg">30 दिन की सप्लाई</Badge> */}
                  </div>
                  <p className="text-gray-600">प्रीमियम आयुर्वेदिक कैप्सूल + आई ड्रॉप्स</p>
                </div>

                <div className="my-8">
                  <div className="flex items-center justify-center space-x-4">
                    <div className="text-center">
                      <span className="text-4xl font-bold text-red-500 line-through block">₹2,999</span>
                      <span className="text-sm text-gray-500">रेगुलर प्राइस</span>
                    </div>
                    <div className="text-center">
                      <span className="text-5xl font-bold text-green-600 block">₹1,499</span>
                      <span className="text-sm text-gray-500">स्पेशल ऑफर</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    onClick={scrollToForm}
                    className="bg-blue-600 text-white px-8 py-4 w-full rounded-md font-semibold hover:bg-blue-700 transition-all duration-300"
                  >
                    अभी ऑर्डर करें
                    <ArrowRight className="ml-2 h-5 w-5 inline" />
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section with Order Form */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              क्या आपको बेहतर आँखों की रोशनी चाहिए?
            </h2>
            <p className="text-xl mb-8 text-gray-600">
              हजारों लोगों ने विजन वेदा से अपनी आँखों की रोशनी सुधारी है। 
              आज ही अपनी आँखों की देखभाल शुरू करें!
            </p>

            <div className="mt-6">
              <button
                onClick={scrollToForm}
                className="bg-blue-600 text-white px-8 py-4 rounded-md font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center mx-auto"
              >
                अभी ऑर्डर करें
                <ArrowRight className="ml-2 h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        <div id="order-form" className="mt-12">
          <OrderForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <Eye className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">विजन वेदा</span>
              </div>
              <p className="text-gray-400">
              अपनी आंखों की रोशनी वापस लाएं
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">तेज लिंक</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white">होम</Link></li>
                <li><Link href="#benefits" className="hover:text-white">लाभ</Link></li>
                <li><Link href="#ingredients" className="hover:text-white">सामग्री</Link></li>
                <li><Link href="#testimonials" className="hover:text-white">समीक्षाएं</Link></li>
                <li><Link href="#pricing" className="hover:text-white">मूल्य</Link></li>
                <li><Link href="#contact" className="hover:text-white">संपर्क</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">समर्थन</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white">ग्राहक सेवा</Link></li>
                <li><Link href="#" className="hover:text-white">शिपिंग जानकारी</Link></li>
                <li><Link href="#" className="hover:text-white">वापसी</Link></li>
                <li><Link href="#" className="hover:text-white">गोपनीयता नीति</Link></li>
                <li><Link href="#" className="hover:text-white">उपयोग की शर्तें</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">संपर्क जानकारी</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-400">+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-400">support@visionveda.com</span>
                </div>
                <div className="pt-4">
                  <p className="text-sm text-gray-500">ग्राहक समर्थन 24/7 है</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 विजन वेदा. सर्वाधिकार सुरक्षित.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
