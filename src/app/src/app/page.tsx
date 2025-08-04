"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Instagram, Music, Users, TrendingUp, Shield, Star, ArrowRight, MessageCircle, Calculator } from "lucide-react"

export default function Home() {
  const [email, setEmail] = useState("")
  const [instagramHandle, setInstagramHandle] = useState("")
  const [tiktokHandle, setTiktokHandle] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  // Pricing calculator state
  const [followerCount, setFollowerCount] = useState(1000)
  const [selectedPlatform, setSelectedPlatform] = useState("instagram")
  const PRICE_PER_1000 = 4

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          instagramHandle,
          tiktokHandle
        })
      })

      const data = await response.json()

      if (response.ok) {
        alert("Thank you for signing up! We'll contact you soon.")
        setEmail("")
        setInstagramHandle("")
        setTiktokHandle("")
      } else {
        alert(data.error || "Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const calculatePrice = (count: number) => {
    return Math.ceil(count / 1000) * PRICE_PER_1000
  }

  const handleWhatsAppContact = () => {
    const message = `مرحباً، أرغب في زيادة متابعين على ${selectedPlatform === 'instagram' ? 'انستغرام' : 'تيك توك'}\nعدد المتابعين المطلوب: ${followerCount}\nالسعر الإجمالي: $${calculatePrice(followerCount)}\n\nيرجى مساعدتي في عملية الدفع والتفاصيل.`
    const whatsappUrl = `https://wa.me/9647814593445?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const features = [
    {
      icon: <Users className="w-8 h-8 text-pink-600" />,
      title: "Real Followers",
      description: "Get genuine, engaged followers who interact with your content"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
      title: "Rapid Growth",
      description: "See significant increase in followers within days"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "Safe & Secure",
      description: "100% safe methods that comply with platform guidelines"
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-600" />,
      title: "Premium Quality",
      description: "High-quality followers that boost your social proof"
    }
  ]

  const testimonials = [
    {
      name: "Sarah M.",
      platform: "Instagram",
      text: "Gained 10K followers in just 2 weeks! My engagement rate skyrocketed.",
      rating: 5
    },
    {
      name: "Mike R.",
      platform: "TikTok",
      text: "Best investment for my social media growth. Highly recommended!",
      rating: 5
    },
    {
      name: "Emma L.",
      platform: "Instagram",
      text: "Professional service with real results. My business is booming now.",
      rating: 5
    }
  ]

  const pricingPackages = [
    {
      name: "Starter",
      followers: 1000,
      price: 4,
      popular: false,
      features: ["Real followers", "Fast delivery", "24/7 support"]
    },
    {
      name: "Popular",
      followers: 5000,
      price: 20,
      popular: true,
      features: ["Real followers", "Fast delivery", "24/7 support", "Priority processing"]
    },
    {
      name: "Premium",
      followers: 10000,
      price: 40,
      popular: false,
      features: ["Real followers", "Fast delivery", "24/7 support", "Priority processing", "Dedicated manager"]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                SocialBoost
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">Testimonials</a>
            </nav>
            <Button 
              onClick={handleWhatsAppContact}
              className="bg-green-600 hover:bg-green-700 flex items-center space-x-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-gradient-to-r from-pink-600 to-purple-600 text-white">
                🚀 #1 Social Growth Service
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
                Boost Your Instagram & TikTok Followers
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Get real, engaged followers and grow your social media presence fast. 
                Starting at only $4 per 1000 followers!
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <Instagram className="w-6 h-6 text-pink-600" />
                <span className="font-semibold">Instagram Growth</span>
              </div>
              <div className="flex items-center space-x-2">
                <Music className="w-6 h-6 text-purple-600" />
                <span className="font-semibold">TikTok Growth</span>
              </div>
            </div>

            {/* Pricing Calculator */}
            <Card className="bg-white/90 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center space-x-2">
                  <Calculator className="w-6 h-6" />
                  <span>Calculate Your Price</span>
                </CardTitle>
                <CardDescription>
                  Choose platform and follower count to see your price
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Platform</Label>
                    <div className="flex space-x-4">
                      <Button
                        variant={selectedPlatform === "instagram" ? "default" : "outline"}
                        onClick={() => setSelectedPlatform("instagram")}
                        className="flex-1"
                      >
                        <Instagram className="w-4 h-4 mr-2" />
                        Instagram
                      </Button>
                      <Button
                        variant={selectedPlatform === "tiktok" ? "default" : "outline"}
                        onClick={() => setSelectedPlatform("tiktok")}
                        className="flex-1"
                      >
                        <Music className="w-4 h-4 mr-2" />
                        TikTok
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Number of Followers: {followerCount.toLocaleString()}</Label>
                    <Input
                      type="range"
                      min="1000"
                      max="50000"
                      step="1000"
                      value={followerCount}
                      onChange={(e) => setFollowerCount(parseInt(e.target.value))}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>1K</span>
                      <span>10K</span>
                      <span>25K</span>
                      <span>50K</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-4 rounded-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-pink-600">
                        ${calculatePrice(followerCount)}
                      </div>
                      <div className="text-sm text-gray-600">
                        Total Price (${PRICE_PER_1000} per 1000 followers)
                      </div>
                    </div>
                  </div>

                  <Button 
                    onClick={handleWhatsAppContact}
                    size="lg"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>زيادة المتابعين</span>
                  </Button>
                </div>

                {/* Testimonial Messages for Credibility */}
                <div className="mt-6 space-y-3">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 rounded-lg border-l-4 border-green-500">
                    <div className="flex items-start space-x-2">
                      <Star className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-700 font-medium">"خدمة ممتازة! زاد متابعيني من 5K إلى 50K في شهر واحد"</p>
                        <p className="text-xs text-gray-500">- أحمد محمد، العراق</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-3 rounded-lg border-l-4 border-blue-500">
                    <div className="flex items-start space-x-2">
                      <Star className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-700 font-medium">"أفضل خدمة زيادة متابعين، تعاملت معهم أكثر من مرة وأنصح بشدة"</p>
                        <p className="text-xs text-gray-500">- فاطمة علي، السعودية</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-3 rounded-lg border-l-4 border-purple-500">
                    <div className="flex items-start space-x-2">
                      <Star className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-700 font-medium">"متابعين حقيقيين ونشيطين، أصبحت صفحتي مهنية جداً"</p>
                        <p className="text-xs text-gray-500">- محمد خالد، الإمارات</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-3 rounded-lg border-l-4 border-amber-500">
                    <div className="flex items-start space-x-2">
                      <Star className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-700 font-medium">"سرعة في التنفيذ ودعم فني ممتاز، شكراً لكم"</p>
                        <p className="text-xs text-gray-500">- سارة أحمد، مصر</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-3 rounded-lg border-l-4 border-teal-500">
                    <div className="flex items-start space-x-2">
                      <Star className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-700 font-medium">"الأسعار مناسبة جداً مقارنة بالجودة المقدمة، أنصح الجميع"</p>
                        <p className="text-xs text-gray-500">- عمر حسن، الأردن</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="text-center space-y-4">
                  <div className="flex justify-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full flex items-center justify-center">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold">Real Results, Fast</h3>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="space-y-2">
                      <div className="text-3xl font-bold text-pink-600">50K+</div>
                      <div className="text-gray-600">Happy Clients</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-3xl font-bold text-purple-600">2M+</div>
                      <div className="text-gray-600">Followers Delivered</div>
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="text-green-800 font-semibold">
                      💰 Starting at $4 per 1000 followers
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Package</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Flexible pricing plans to fit your needs. All packages include real, engaged followers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {pricingPackages.map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.popular ? 'ring-2 ring-purple-600' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-purple-600 text-white">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-purple-600">${pkg.price}</div>
                    <div className="text-gray-600">{pkg.followers.toLocaleString()} Followers</div>
                    <div className="text-sm text-gray-500">
                      ${(pkg.price / pkg.followers * 1000).toFixed(2)} per 1000
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={handleWhatsAppContact}
                    className={`w-full ${pkg.popular ? 'bg-purple-600 hover:bg-purple-700' : 'bg-gray-600 hover:bg-gray-700'}`}
                  >
                    Order via WhatsApp
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose SocialBoost?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide the most effective and safe social media growth solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have grown their social media presence
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.platform}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">SocialBoost</span>
              </div>
              <p className="text-gray-400">
                Professional social media growth services for Instagram and TikTok.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Instagram Growth</a></li>
                <li><a href="#" className="hover:text-white transition-colors">TikTok Growth</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Social Media Management</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp: +9647814593445</span>
                </li>
                <li>Email: info@socialboost.com</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SocialBoost. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
