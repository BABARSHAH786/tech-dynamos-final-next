import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ShoppingCart, CreditCard, Smartphone, BarChart3, Users, Globe, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function EcommercePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Build Your Online Store | Tech Dynamos</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
We craft high-performing websites that grow your business — whether you're selling, teaching, managing, or showcasing.            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className=" bg-yellow-500 hover:bg-yellow-600 text-black">
                <Link href="/contact">Get Free Consultation</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-black hover:bg-white hover:text-blue-900"
              >
                <Link href="/portfolio">View Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Your Business Needs a Website</h2>
        <p className="text-xl text-gray-600">
          Don’t let your competitors dominate online while your business stays invisible
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* WITHOUT A WEBSITE */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-red-600">Without a Website</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-3 flex-shrink-0"></div>
              <span>Limited to local customers and business hours</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-3 flex-shrink-0"></div>
              <span>Missed opportunities in search engines and social media</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-3 flex-shrink-0"></div>
              <span>No centralized place for customers to learn, shop, or engage</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-3 flex-shrink-0"></div>
              <span>Inefficient communication and manual operations</span>
            </li>
          </ul>
        </div>

        {/* WITH A PROFESSIONAL WEBSITE */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-green-600">With a Professional Website</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
              <span>Reach customers 24/7 locally and globally</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
              <span>Build brand trust with a modern, mobile-friendly presence</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
              <span>Offer services, sell products, or provide information effortlessly</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
              <span>Integrate contact forms, booking, payments, and automation</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Key Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful E-commerce Features</h2>
            <p className="text-xl text-gray-600">Everything you need to run a successful online store</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <ShoppingCart className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>Product Catalog Management</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Unlimited products and categories
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    High-quality image galleries
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Product variants and options
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    SEO-optimized product pages
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CreditCard className="w-12 h-12 text-green-600 mb-4" />
                <CardTitle>Secure Payment Gateway</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Multiple payment methods
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    SSL encryption & PCI compliance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Stripe, PayPal, and local gateways
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Automated payment processing
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Smartphone className="w-12 h-12 text-purple-600 mb-4" />
                <CardTitle>Mobile-Responsive Design</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Optimized for all devices
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Touch-friendly interface
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Fast loading speeds
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Progressive Web App features
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BarChart3 className="w-12 h-12 text-orange-600 mb-4" />
                <CardTitle>Inventory Management</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Real-time stock tracking
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Low stock alerts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Bulk product updates
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Supplier management
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="w-12 h-12 text-red-600 mb-4" />
                <CardTitle>Customer Management</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    User accounts & profiles
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Order history tracking
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Wishlist functionality
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Customer support system
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Globe className="w-12 h-12 text-teal-600 mb-4" />
                <CardTitle>SEO & Marketing Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    SEO-friendly URLs
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Email marketing integration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Discount & coupon system
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Social media integration
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits of Our E-commerce Solutions</h2>
            <p className="text-xl text-gray-600">Transform your business with measurable results</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                24/7
              </div>
              <h3 className="text-xl font-bold mb-2">Always Open</h3>
              <p className="text-gray-600">Your store never closes, generating sales around the clock</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                ∞
              </div>
              <h3 className="text-xl font-bold mb-2">Global Reach</h3>
              <p className="text-gray-600">Sell to customers anywhere in the world</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                ↑
              </div>
              <h3 className="text-xl font-bold mb-2">Increased Sales</h3>
              <p className="text-gray-600">Average 40% increase in revenue within first year</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                ⚡
              </div>
              <h3 className="text-xl font-bold mb-2">Automation</h3>
              <p className="text-gray-600">Reduce manual work with automated processes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our E-commerce Development Process</h2>
            <p className="text-xl text-gray-600">From concept to launch in 4-6 weeks</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Requirements Analysis</h3>
                    <p className="text-gray-600">
                      We analyze your business model, target audience, and specific requirements
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Design & Wireframing</h3>
                    <p className="text-gray-600">Create user-friendly designs that maximize conversion rates</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Development & Integration</h3>
                    <p className="text-gray-600">
                      Build your store with secure payment gateways and third-party integrations
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Testing & Quality Assurance</h3>
                    <p className="text-gray-600">Comprehensive testing across all devices and browsers</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    5
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Launch & Training</h3>
                    <p className="text-gray-600">Deploy your store and train your team on management tools</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    6
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Ongoing Support</h3>
                    <p className="text-gray-600">24/7 technical support and regular updates</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">E-commerce Packages</h2>
            <p className="text-xl text-gray-600">Choose the perfect package for your business needs</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <Badge className="w-fit mx-auto mb-4">STARTER</Badge>
                <CardTitle className="text-2xl">Basic Store</CardTitle>
                <div className="text-3xl font-bold text-blue-600">$1,999</div>
                <CardDescription>Perfect for small businesses starting online</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Up to 100 products
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Mobile responsive design
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Payment gateway integration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Basic SEO setup
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />3 months support
                  </li>
                </ul>
                <Button className="w-full">
                  <Link href="/contact">Get Started</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-2 border-blue-600 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-600">MOST POPULAR</Badge>
              </div>
              <CardHeader className="text-center">
                <Badge className="w-fit mx-auto mb-4 bg-blue-600">PROFESSIONAL</Badge>
                <CardTitle className="text-2xl">Advanced Store</CardTitle>
                <div className="text-3xl font-bold text-blue-600">$3,999</div>
                <CardDescription>Ideal for growing businesses</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Unlimited products
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Advanced inventory management
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Multi-payment gateways
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Advanced SEO & analytics
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Email marketing integration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />6 months support
                  </li>
                </ul>
                <Button className="w-full">
                  <Link href="/contact">Get Started</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <Badge className="w-fit mx-auto mb-4 bg-purple-600">ENTERPRISE</Badge>
                <CardTitle className="text-2xl">Custom Solution</CardTitle>
                <div className="text-3xl font-bold text-blue-600">Custom</div>
                <CardDescription>Tailored for large enterprises</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Multi-vendor marketplace
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Custom integrations
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Advanced reporting
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    API development
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Dedicated support team
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    12 months support
                  </li>
                </ul>
                <Button className="w-full">
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">E-commerce Success Stories</h2>
            <p className="text-xl text-gray-600">See how we've helped businesses grow online</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600"></div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Fashion Boutique</h3>
                <p className="text-gray-600 mb-2">Complete fashion e-commerce with size guides and virtual try-on</p>
                <div className="text-sm text-green-600 font-medium mb-4">+200% increase in online sales</div>
                <Button variant="outline" size="sm">
                  <Link href="/portfolio">View Case Study</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-500 to-blue-600"></div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Electronics Store</h3>
                <p className="text-gray-600 mb-2">Multi-vendor marketplace with advanced filtering and comparison</p>
                <div className="text-sm text-green-600 font-medium mb-4">+150% revenue growth</div>
                <Button variant="outline" size="sm">
                  <Link href="/portfolio">View Case Study</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-orange-500 to-red-600"></div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Organic Foods</h3>
                <p className="text-gray-600 mb-2">Subscription-based organic food delivery platform</p>
                <div className="text-sm text-green-600 font-medium mb-4">+300% customer retention</div>
                <Button variant="outline" size="sm">
                  <Link href="/portfolio">View Case Study</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Launch Your Online Store?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful businesses that have transformed their sales with our e-commerce solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
              <Link href="/contact" className="flex items-center">
                Get Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-blue-900">
              <Link href="/portfolio">View E-commerce Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
