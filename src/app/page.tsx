// "use client"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Eye, Shield, Leaf, Award, Phone, Mail, Monitor, Zap, Heart, CheckCircle, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { AnimatedSection } from "../components/animated-section"
import { CountdownTimer } from "../components/countdown-timer"
import { FloatingElements } from "../components/floating-elements"
import { CursorAnimation } from "../components/cursor-animation"
import { PageLoader } from "../components/page-loader"
import { ScrollProgress } from "../components/scroll-progress"
import { HeaderButtons, HeroButtons, BenefitsButton, TestimonialsButton, IngredientsButton, PricingButton, ContactButton } from "../components/interactive-sections"
import { InteractiveButton } from "../components/interactive-button"
import { OrderForm } from "../components/orderForm";

// Server-side data fetching
async function getTestimonials() {
  // In a real app, this would fetch from a database
  return [
    {
      name: "राजेश कुमार",
      age: 45,
      rating: 5,
      comment:
        "विजन वेदा का उपयोग करने के सिर्फ 2 महीने बाद मेरी आंखों की थकान पूरी तरह से गायब हो गई है। मैं कंप्यूटर पर घंटों काम कर सकता हूं बिना किसी असुविधा के।",
      image: "/placeholder.svg?height=80&width=80",
      location: "मुंबई",
    },
    {
      name: "प्रिया शर्मा",
      age: 38,
      rating: 5,
      comment:
        "अद्भुत परिणाम! मेरी दृष्टि की स्पष्टता में काफी सुधार हुआ है। अब धुंधली दृष्टि या सूखी आंखें नहीं हैं। अत्यधिक अनुशंसित!",
      image: "/placeholder.svg?height=80&width=80",
      location: "दिल्ली",
    },
    {
      name: "सुरेश पटेल",
      age: 52,
      rating: 5,
      comment:
        "मेरी बढ़ती उम्र की आंखों के लिए प्राकृतिक और प्रभावी समाधान। मेरी रात की दृष्टि में सुधार हुआ है और मैं गाड़ी चलाते समय अधिक आत्मविश्वास महसूस करता हूं।",
      image: "/placeholder.svg?height=80&width=80",
      location: "अहमदाबाद",
    },
    {
      name: "अनीता वर्मा",
      age: 41,
      rating: 5,
      comment: "उत्कृष्ट उत्पाद! मेरे मैक्युला स्वास्थ्य में सुधार हुआ है और मेरे नेत्र चिकित्सक परिणामों से प्रभावित हैं।",
      image: "/placeholder.svg?height=80&width=80",
      location: "बैंगलोर",
    },
    {
      name: "रमेश गुप्ता",
      age: 48,
      rating: 5,
      comment:
        "यह आयुर्वेदिक समाधान महंगे आई ड्रॉप्स से बेहतर काम करता है। मेरी आंखें पूरे दिन ताजा और स्वस्थ महसूस करती हैं।",
      image: "/placeholder.svg?height=80&width=80",
      location: "पुणे",
    },
    {
      name: "कविता सिंह",
      age: 35,
      rating: 5,
      comment:
        "प्राकृतिक सामग्री के साथ बेहतरीन उत्पाद। मेरा कंप्यूटर आई सिंड्रोम पूरी तरह से गायब हो गया है। हर पैसा सार्थक!",
      image: "/placeholder.svg?height=80&width=80",
      location: "चेन्नई",
    },
  ]
}

async function getIngredients() {
  return [
    {
      name: "त्रिफला",
      imageUrl: "https://up.yimg.com/ib/th/id/OIP.0desCUakhIfWaKdHkVs3WwHaFj?pid=Api&rs=1&c=1&qlt=95&w=135&h=101",
      description: "त्रिफला आंखों की स्वास्थ्य को बढ़ाने में मदद करती है और मैक्युला स्वास्थ्य को समर्थन करती है।",
    },
    {
      name: "गिंको बिलोबा",
      imageUrl: "https://images.unsplash.com/photo-1578305342239-a2151c198587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "गिंको बिलोबा आंखों की स्वास्थ्य को बढ़ाने में मदद करती है और मैक्युला स्वास्थ्य को समर्थन करती है।",
    },
    {
      name: "सौंफ के बीज",
      imageUrl: "https://images.unsplash.com/photo-1578305342239-a2151c198587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "सौंफ के बीज आंखों की स्वास्थ्य को बढ़ाने में मदद करती है और मैक्युला स्वास्थ्य को समर्थन करती है।",
    },
    {
      name: "बिलबेरी",
      imageUrl: "https://images.unsplash.com/photo-1578305342239-a2151c198587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "बिलबेरी आंखों की स्वास्थ्य को बढ़ाने में मदद करती है और मैक्युला स्वास्थ्य को समर्थन करती है।",
    },
    {
      name: "कैलेंडुला",
      imageUrl: "https://images.unsplash.com/photo-1578305342239-a2151c198587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "कैलेंडुला आंखों की स्वास्थ्य को बढ़ाने में मदद करती है और मैक्युला स्वास्थ्य को समर्थन करती है।",
    },
  ]
}

export default async function VisionVedaLanding() {
  const testimonials = await getTestimonials()
  const ingredients = await getIngredients()

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Fixed Top Banner */}
      <div className="fixed top-0 w-full bg-blue-600 text-white py-2 text-center z-50">
        <p className="text-sm md:text-base">
          🌟 डॉक्टर द्वारा तैयार • 100% प्राकृतिक
        </p>
      </div>

      <CursorAnimation />
      <PageLoader />
      <ScrollProgress />
      <FloatingElements />

      {/* Header with adjusted margin-top */}
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
              <Link href="#faq" className="text-gray-600 hover:text-blue-600">FAQ</Link>
              <Link href="#contact" className="text-gray-600 hover:text-blue-600">संपर्क</Link>
            </nav>
            <div className="md:hidden">
              <button className="text-gray-600 hover:text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M3 3h18"/><path d="M9 18h12"/><path d="M3 18h18"/><path d="M9 6H3"/><path d="M21 12H3"/></svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20 md:py-32 overflow-hidden mt-10">
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slideInLeft" className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  अपनी दृष्टि को
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                    प्राकृतिक रूप से पुनर्स्थापित करें
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
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <PricingButton>
                  अभी ऑर्डर करें - सिर्फ ₹1,499
                  <ArrowRight className="ml-2 h-6 w-6" />
                </PricingButton>
                <div className="flex-1">
                  <BenefitsButton />
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slideInRight">
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 rounded-3xl blur-3xl"></div>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jul%2011%2C%202025%2C%2011_26_44%20PM-OSrc6hmQcWoCyBuwxaF5nt4XE0O5IK.png"
                  alt="Vision Veda Hero"
                  width={600}
                  height={600}
                  className="relative rounded-2xl"
                />
              </div>
            </AnimatedSection>
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
            <AnimatedSection animation="zoomIn">
              <Card className="hover:shadow-lg transition-shadow border-2 border-blue-100">
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
            </AnimatedSection>
            <AnimatedSection animation="zoomIn">
              <Card className="hover:shadow-lg transition-shadow border-2 border-blue-100">
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
            </AnimatedSection>
            <AnimatedSection animation="zoomIn">
              <Card className="hover:shadow-lg transition-shadow border-2 border-blue-100">
                <CardContent className="p-6 text-center">
                  <Zap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">डिजिटल आई स्ट्रेन</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>• आँखों में तनाव और थकान</li>
                    <li>• फोकस करने में परेशानी</li>
                    <li>• रात में काम करने में दिक्कत</li>
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>
            <AnimatedSection animation="zoomIn">
              <Card className="hover:shadow-lg transition-shadow border-2 border-blue-100">
                <CardContent className="p-6 text-center">
                  <Heart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">सूखी आँखें</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>• आँखों में खुजली और जलन</li>
                    <li>• लाली और असहजता</li>
                    <li>• बार-बार आँखें मलना</li>
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>
            <AnimatedSection animation="zoomIn">
              <Card className="hover:shadow-lg transition-shadow border-2 border-blue-100">
                <CardContent className="p-6 text-center">
                  <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">रतौंधी</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>• रात में देखने में परेशानी</li>
                    <li>• कम रोशनी में अस्पष्ट दृष्टि</li>
                    <li>• ड्राइविंग में समस्या</li>
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>
            <AnimatedSection animation="zoomIn">
              <Card className="hover:shadow-lg transition-shadow border-2 border-blue-100">
                <CardContent className="p-6 text-center">
                  <CheckCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">आँखों की थकान</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>• लगातार काम से थकान</li>
                    <li>• आँखों में भारीपन</li>
                    <li>• तेज रोशनी से परेशानी</li>
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Countdown Timer */}
      <section className="py-8 bg-gradient-to-r from-red-500 to-orange-500 text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeInUp">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">⚡ सीमित समय का ऑफर - 50% OFF!</h3>
              <CountdownTimer />
              <p className="text-lg mt-4">आज ही ऑर्डर करें और अपनी दृष्टि को पुनर्स्थापित करें!</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Customer Reviews */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeInUp">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="bg-blue-100 text-blue-700 mb-4">
                संतुष्ट ग्राहकों की कहानियां
              </Badge>
              <h2 className="text-4xl font-bold mb-4">संतुष्ट ग्राहकों की कहानियां</h2>
              <p className="text-xl text-gray-600">
                देखें कि विजन वेदा ने हजारों लोगों की दृष्टि को कैसे बदल दिया है
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((review, index) => (
              <AnimatedSection key={index} animation="slideInUp" delay={index * 0.1} className="h-full">
                <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
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
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fadeInUp" className="text-center mt-12">
            <TestimonialsButton />
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeInUp">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="bg-green-100 text-green-700 mb-4">
                विजन वेदा के लाभ
              </Badge>
              <h2 className="text-4xl font-bold mb-4">विजन वेदा के लाभ</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                प्राकृतिक तरीके से अपनी दृष्टि को बेहतर बनाएं
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Eye className="w-10 h-10 text-blue-600" />,
                title: "स्पष्ट दृष्टि",
                description: "धुंधली दृष्टि को स्पष्ट करें और रंगों को अधिक जीवंत देखें",
                color: "blue",
              },
              {
                icon: <Monitor className="w-10 h-10 text-teal-600" />,
                title: "आंखों का तनाव कम करता है",
                description: "कंप्यूटर स्क्रीन के लंबे समय तक उपयोग से होने वाली थकान को कम करें",
                color: "teal",
              },
              {
                icon: <Shield className="w-10 h-10 text-green-600" />,
                title: "मैक्युला स्वास्थ्य",
                description: "उम्र से संबंधित मैक्युलर डिजनरेशन के जोखिम को कम करें",
                color: "green",
              },
              {
                icon: <Zap className="w-10 h-10 text-purple-600" />,
                title: "रात की दृष्टि",
                description: "कम रोशनी में बेहतर देखने की क्षमता में सुधार करें",
                color: "purple",
              },
              {
                icon: <Heart className="w-10 h-10 text-red-600" />,
                title: "तेजी से कार्य",
                description: "2-4 सप्ताह के भीतर दिखाई देने वाले परिणाम",
                color: "red",
              },
              {
                icon: <Leaf className="w-10 h-10 text-emerald-600" />,
                title: "100% प्राकृतिक",
                description: "कोई साइड इफेक्ट नहीं, केवल शुद्ध आयुर्वेदिक सामग्री",
                color: "emerald",
              },
              {
                icon: <Award className="w-10 h-10 text-orange-600" />,
                title: "संपूर्ण आंख वेल्फारेस",
                description: "लंबी दृष्टि के लिए आंख की देखभाल",
                color: "orange",
              },
              {
                icon: <CheckCircle className="w-10 h-10 text-indigo-600" />,
                title: "संपूर्ण आंख वेल्फारेस",
                description: "लंबी दृष्टि के लिए आंख की देखभाल",
                color: "indigo",
              },
            ].map((benefit, index) => (
              <AnimatedSection key={index} animation="slideInUp" delay={index * 0.1} className="h-full">
                <Card
                  className={`h-full text-center p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-${benefit.color}-50 to-white`}
                >
                  <CardContent className="p-0">
                      <div
                      className={`w-20 h-20 bg-${benefit.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      {benefit.icon}
                    </div>
                    <h3 className="font-bold text-lg mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fadeInUp" className="text-center mt-12">
            <BenefitsButton />
          </AnimatedSection>
        </div>
      </section>

      {/* Ingredients Section */}
      <section id="ingredients" className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="bg-green-100 text-green-700 mb-4">
              आयुर्वेदिक सामग्री
            </Badge>
            <h2 className="text-3xl font-bold mb-4">प्राकृतिक सामग्री</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              प्रत्येक सामग्री को ध्यान से चुना जाता है और वैज्ञानिक रूप से सिद्ध है
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {ingredients.map((ingredient, index) => (
              <AnimatedSection key={index} animation="fadeIn" delay={index * 0.1}>
                <Card className="hover:shadow-lg transition-all duration-300 group overflow-hidden">
                  <CardContent className="p-4 text-center">
                    <div className="relative w-full aspect-square mb-3 overflow-hidden rounded-lg bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
                      <Leaf className="w-8 h-8 text-green-600" />
                    </div>
                    <p className="text-sm font-medium text-gray-800 mb-1">{ingredient.name}</p>
                    <p className="text-xs text-gray-600 line-clamp-2">{ingredient.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <div className="mt-12 text-center">
            <IngredientsButton />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeInUp">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="bg-white/20 text-white mb-4">
                सर्वोत्तम मूल्य
              </Badge>
              <h2 className="text-4xl font-bold mb-4">सर्वोत्तम मूल्य</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                अपनी दृष्टि में निवेश करें - सीमित समय का ऑफर
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-2xl mx-auto">
            <AnimatedSection animation="zoomIn">
              <Card className="bg-white text-gray-900 p-8 shadow-2xl border-0 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-gradient-to-l from-blue-600 to-green-600 text-white py-2 px-6 rounded-bl-2xl font-bold">
                  बेस्ट वैल्यू
                </div>
                <CardContent className="p-0 text-center">
                  <div className="mb-6 relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-green-200 rounded-2xl transform group-hover:scale-105 transition-transform duration-300 -rotate-3"></div>
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jul%2011%2C%202025%2C%2011_26_44%20PM-OSrc6hmQcWoCyBuwxaF5nt4XE0O5IK.png"
                      alt="Vision Veda Complete Kit"
                      width={300}
                      height={300}
                      className="mx-auto rounded-lg relative transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold">विजन वेदा कम्पलीट किट</h3>
                    <div className="flex items-center justify-center space-x-3">
                      <Badge className="bg-blue-100 text-blue-700 text-lg">30 कैप्सूल</Badge>
                      <Badge className="bg-green-100 text-green-700 text-lg">30 दिन की सप्लाई</Badge>
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
                    <div className="mt-4 space-y-2">
                      <Badge className="bg-red-500 text-white text-lg px-6 py-2">50% की बचत - ₹1,500 ऑफ</Badge>
                      <p className="text-sm text-green-600 font-medium">प्रति दिन सिर्फ ₹50 में बेहतर दृष्टि</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <ul className="text-left space-y-2">
                      <li className="flex items-center text-gray-700">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        30 दिन की सप्लाई
                      </li>
                      <li className="flex items-center text-gray-700">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        मुफ्त शिपिंग
                      </li>
                      <li className="flex items-center text-gray-700">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        30 दिन की मनी बैक गारंटी
                      </li>
                      <li className="flex items-center text-gray-700">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        डॉक्टर की सलाह उपलब्ध
                      </li>
                    </ul>
                  </div>

                  <div className="mt-8">
                    <InteractiveButton
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-lg px-8 py-4 w-full shadow-xl transform hover:scale-105 transition-all duration-300"
                      loadingText="ऑर्डर प्रोसेसिंग..."
                      successText="ऑर्डर पुष्टि!"
                    >
                      अभी ऑर्डर करें
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </InteractiveButton>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeInUp">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="bg-blue-100 text-blue-700 mb-4">
                विजन वेदा क्यों चुनें?
              </Badge>
              <h2 className="text-4xl font-bold mb-4">विजन वेदा क्यों चुनें?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                विजन वेदा को विज्ञान और प्राकृतिक देखभाल के साथ विश्वसनीय बनाने के लिए हजारों संतुष्ट ग्राहकों का अनुभव
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="w-12 h-12 text-blue-600" />,
                title: "डॉक्टर द्वारा तैयार",
                description: "आयुर्वेदिक विशेषज्ञों और आंख देखभाल विशेषज्ञों द्वारा विकसित",
              },
              {
                icon: <Leaf className="w-12 h-12 text-green-600" />,
                title: "100% प्राकृतिक",
                description: "केवल आयुर्वेदिक सामग्री और अवांछित रसायनों के साथ",
              },
              {
                icon: <Award className="w-12 h-12 text-purple-600" />,
                title: "क्लिनिकल परीक्षण",
                description: "वैज्ञानिक रूप से सिद्धांत परिणाम",
              },
              {
                icon: <Heart className="w-12 h-12 text-red-600" />,
                title: "ग्राहक संतुष्टि",
                description: "98% ग्राहक संतुष्टि दर और दृष्टि में दिखने वाले परिणाम",
              },
            ].map((item, index) => (
              <AnimatedSection key={index} animation="slideInUp" delay={index * 0.1} className="h-full">
                <Card className="h-full text-center p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
                  <CardContent className="p-0">
                    <div className="flex justify-center mb-4">{item.icon}</div>
                    <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-blue-500 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slideInLeft">
              <div>
                <Badge variant="secondary" className="bg-white/20 text-white mb-4">
                  क्लिनिकल परिणाम
                </Badge>
                <h2 className="text-4xl font-bold mb-6">
                  प्रमाणित परिणाम
                  <br />
                  30 दिनों में
                </h2>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl font-bold">95%</div>
                    <div>
                      <p className="font-semibold">स्पष्ट दृष्टि</p>
                      <p className="text-sm opacity-90">ग्राहकों ने स्पष्ट दृष्टि का अनुभव किया</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl font-bold">87%</div>
                    <div>
                      <p className="font-semibold">आंखों का तनाव कम हो गया</p>
                      <p className="text-sm opacity-90">कम थकान और असुविधा</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl font-bold">92%</div>
                    <div>
                      <p className="font-semibold">रात की दृष्टि बेहतर हो गई</p>
                      <p className="text-sm opacity-90">कम रोशनी में बेहतर देखने की क्षमता</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideInRight">
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 rounded-3xl blur-3xl"></div>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jul%2011%2C%202025%2C%2011_26_44%20PM-OSrc6hmQcWoCyBuwxaF5nt4XE0O5IK.png"
                  alt="Vision Veda Results"
                  width={500}
                  height={500}
                  className="relative rounded-2xl"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Wellness Journey */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeInUp">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="bg-blue-100 text-blue-700 mb-4">
                आपकी यात्रा
              </Badge>
              <h2 className="text-4xl font-bold mb-4">आपकी दृष्टि पुनर्स्थापना यात्रा</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                हमारे प्राकृतिक फॉर्मूला के साथ आपकी आंख स्वास्थ्य में प्रगतिशील सुधार
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                week: "सप्ताह 1-2",
                title: "आंखों का तनाव कम हो गया",
                description: "आंखों की थकान और सूखताप से तुरंत मदद",
                color: "blue",
              },
              {
                week: "सप्ताह 3-4",
                title: "स्पष्ट दृष्टि",
                description: "दिन के दौरान अधिक ध्यान और बेहतर ध्यान करने की क्षमता",
                color: "teal",
              },
              {
                week: "सप्ताह 5-8",
                title: "बेहतर दृष्टि",
                description: "आंख स्वास्थ्य और रात की दृष्टि में महत्वपूर्ण सुधार",
                color: "green",
              },
            ].map((phase, index) => (
              <AnimatedSection key={index} animation="slideInUp" delay={index * 0.2} className="h-full">
                <Card
                  className={`h-full text-center p-8 bg-gradient-to-br from-${phase.color}-50 to-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg`}
                >
                  <CardContent className="p-0">
                    <div className={`text-2xl font-bold text-${phase.color}-600 mb-4`}>{phase.week}</div>
                    <h3 className="font-bold text-xl mb-4">{phase.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{phase.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeInUp">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="bg-blue-100 text-blue-700 mb-4">
                अक्सर पूछे जाने वाले प्रश्न
              </Badge>
              <h2 className="text-4xl font-bold mb-4">अक्सर पूछे जाने वाले प्रश्न</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                विजन वेदा के बारे में सामान्य प्रश्नों के जवाब
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "विजन वेदा के साथ परिणाम कितने समय में दिखते हैं?",
                answer:
                  "अधिकांश ग्राहक पहले से ही प्रथम सप्ताह में आंखों का तनाव कम हो जाता है। बेहतर दृष्टि के लिए अधिकांश ग्राहक 2-4 सप्ताह की समझ में संगत उपयोग करने पर दिखाई देते हैं।",
              },
              {
                question: "विजन वेदा क्या है?",
                answer:
                  "विजन वेदा एक प्राकृतिक उपयोगिता है जो आयुर्वेदिक ज्ञान और आधुनिक विज्ञान का मिश्रण है। इसमें 28 ध्यानपूर्वक चुनी गई प्राकृतिक सामग्री हैं जो आंख स्वास्थ्य के लिए वैज्ञानिक रूप से सिद्धांत हैं।",
              },
              {
                question: "क्या मैं अपने मौखिक आंख दवाओं के साथ विजन वेदा का उपयोग कर सकता हूं?",
                answer:
                  "विजन वेदा एक प्राकृतिक उपयोगिता है, लेकिन हम आपको अपने आंख चिकित्सक से पहले इसे किसी भी औषधि दवाओं के साथ संयोजित करने पर सलाह देते हैं।",
              },
              {
                question: "विजन वेदा क्या अन्य आंख दवाओं से अलग है?",
                answer:
                  "विजन वेदा आयुर्वेदिक ज्ञान और आधुनिक विज्ञान का मिश्रण है, जो 28 ध्यानपूर्वक चुनी गई प्राकृतिक सामग्री का उपयोग करता है जो आंख स्वास्थ्य के लिए वैज्ञानिक रूप से सिद्धांत हैं।",
              },
              {
                question: "क्या आप पैसे वापस करते हैं?",
                answer:
                  "हाँ, हम 30-दिन की मनी-बैक गारंटी करते हैं। यदि आप परिणाम संतुष्ट नहीं हैं, तो आप उत्पाद लौटा सकते हैं और पूरी राशि वापस कर सकते हैं।",
              },
            ].map((faq, index) => (
              <AnimatedSection key={index} animation="slideInUp" delay={index * 0.1}>
                <Card className="p-6 hover:shadow-lg transition-shadow border-0 shadow-md">
                  <CardContent className="p-0">
                    <h3 className="font-bold text-lg mb-3 text-blue-700">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">विशेषज्ञों की राय</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <AnimatedSection animation="slideInLeft">
              <Card className="p-8 hover:shadow-xl transition-shadow border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-6">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Dr. Rajesh Kumar"
                      width={100}
                      height={100}
                      className="rounded-full border-4 border-blue-200"
                    />
                    <div>
                      <h4 className="font-bold text-xl mb-2">डॉक्टर राजेश कुमार</h4>
                      <p className="text-blue-600 font-medium mb-4">आयुर्वेदिक आंख विशेषज्ञ • 25+ वर्ष अनुभव</p>
                      <p className="text-gray-700 leading-relaxed">
                        "विजन वेदा आयुर्वेदिक ज्ञान और आधुनिक विज्ञान का मिश्रण है। मेरे ग्राहकों की आंख स्वास्थ्य में विशेषज्ञ रूप से बेहतर परिणाम देख रहे हैं।"
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="zoomIn">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                क्या आपको बेहतर आँखों की रोशनी चाहिए?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                हजारों लोगों ने विजन वेदा से अपनी आँखों की रोशनी सुधारी है। 
                आज ही अपनी आँखों की देखभाल शुरू करें!
              </p>

              <div className="bg-white/10 backdrop-blur rounded-2xl p-8 mb-8">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold mb-2">50% OFF</div>
                    <p className="text-sm opacity-90">सीमित समय का ऑफर</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">₹1,499</div>
                    <p className="text-sm opacity-90">₹2,999 के बजाय</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">30 दिन</div>
                    <p className="text-sm opacity-90">मनी-बैक गारंटी</p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <ContactButton>
                  अभी ऑर्डर करें
                  <ArrowRight className="ml-2 h-6 w-6" />
                </ContactButton>
              </div>

              <p className="text-sm mt-6 opacity-80">
                ✓ मुफ्त शिपिंग ✓ सुरक्षित भुगतान ✓ 30-दिन की गारंटी ✓ डॉक्टर सहायता
              </p>
            </div>
          </AnimatedSection>
        </div>

        <OrderForm />

      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <AnimatedSection animation="slideInUp">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center">
                    <Eye className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-xl font-bold">विजन वेदा</span>
                </div>
                <p className="text-gray-400">
                  प्राकृतिक तरीके से आपकी दृष्टि को पुनर्स्थापित करें
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideInUp" delay={0.1}>
              <div>
                <h3 className="font-semibold mb-4">तेज लिंक</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>होम</li>
                  <li>लाभ</li>
                  <li>सामग्री</li>
                  <li>समीक्षाएं</li>
                  <li>FAQ</li>
                  <li>संपर्क</li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideInUp" delay={0.2}>
              <div>
                <h3 className="font-semibold mb-4">समर्थन</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>ग्राहक सेवा</li>
                  <li>शिपिंग जानकारी</li>
                  <li>वापसी</li>
                  <li>गोपनीयता नीति</li>
                  <li>उपयोग की शर्तें</li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideInUp" delay={0.3}>
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
            </AnimatedSection>
          </div>


          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 विजन वेदा. सर्वाधिकार सुरक्षित.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
