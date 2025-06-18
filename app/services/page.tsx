import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight,
  ShoppingCart,
  GraduationCap,
  Users,
  Globe,
  Zap,
  CheckCircle,
  Calendar,
  BarChart3,
  Smartphone,
  CreditCard,
  Headphones,
  Shield,
  Clock
} from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Solutions | Tech Dynamos</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive digital solutions designed to transform your business operations and drive growth
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* E-commerce */}
            <Card className="hover:shadow-xl transition-shadow border-t-4 border-t-primary">
              <CardHeader>
                <ShoppingCart className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-2xl">E-commerce Websites</CardTitle>
                <CardDescription className="text-base">
                  Complete online stores with advanced features for maximum sales conversion
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-success mr-2" />
                    Product catalog management
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-success mr-2" />
                    Secure payment integration
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-success mr-2" />
                    Inventory management
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-success mr-2" />
                    Mobile-responsive design
                  </li>
                </ul>
                {/* <Button className="w-full">
                  <Link href="/ecommerce" className="flex items-center">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button> */}
              </CardContent>
            </Card>

            {/* School Management */}
            <Card className="hover:shadow-xl transition-shadow border-t-4 border-t-success">
              <CardHeader>
                <GraduationCap className="w-12 h-12 text-success mb-4" />
                <CardTitle className="text-2xl">School Management</CardTitle>
                <CardDescription className="text-base">
                  Streamline school operations with comprehensive management systems
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-success mr-2" />
                    Student enrollment & records
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-success mr-2" />
                    Attendance tracking
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-success mr-2" />
                    Grade management
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-success mr-2" />
                    Parent communication portal
                  </li>
                </ul>
                {/* <Button className="w-full">
                  <Link href="/education" className="flex items-center">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button> */}
              </CardContent>
            </Card>

            {/* College Management */}
            <Card className="hover:shadow-xl transition-shadow border-t-4 border-t-secondary">
              <CardHeader>
                <Users className="w-12 h-12 text-secondary mb-4" />
                <CardTitle className="text-2xl">College Management</CardTitle>
                <CardDescription className="text-base">
                  Advanced systems for higher education institutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-success mr-2" />
                    Course & curriculum management
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-success mr-2" />
                    Faculty management
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-success mr-2" />
                    Examination system
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-success mr-2" />
                    Library management
                  </li>
                </ul>
                {/* <Button className="w-full">
                  <Link href="/education" className="flex items-center">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button> */}
              </CardContent>
            </Card>

            {/* University Management */}
            <Card className="hover:shadow-xl transition-shadow border-t-4 border-t-accent">
              <CardHeader>
                <Globe className="w-12 h-12 text-accent mb-4" />
                <CardTitle className="text-2xl">University Systems</CardTitle>
                <CardDescription className="text-base">
                  Enterprise-level platforms for large educational institutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-success mr-2" />
                    Multi-campus management
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-success mr-2" />
                    Research project tracking
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-success mr-2" />
                    Hostel management
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-success mr-2" />
                    Alumni network
                  </li>
                </ul>
                {/* <Button className="w-full">
                  <Link href="/education" className="flex items-center">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button> */}
              </CardContent>
            </Card>

            {/* Madrasa Management */}
            <Card className="hover:shadow-xl transition-shadow border-t-4 border-t-info">
              <CardHeader>
                <Globe className="w-12 h-12 text-info mb-4" />
                <CardTitle className="text-2xl">Madrasa Management</CardTitle>
                <CardDescription className="text-base">
                  Specialized systems for Islamic educational institutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-success mr-2" />
                    Islamic curriculum tracking
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-success mr-2" />
                    Prayer time integration
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-success mr-2" />
                    Hafiz progress tracking
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-success mr-2" />
                    Donation management
                  </li>
                </ul>
                {/* <Button className="w-full">
                  <Link href="/education" className="flex items-center">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button> */}
              </CardContent>
            </Card>

            {/* Custom Solutions */}
            <Card className="hover:shadow-xl transition-shadow border-t-4 border-t-destructive">
              <CardHeader>
                <Zap className="w-12 h-12 text-destructive mb-4" />
                <CardTitle className="text-2xl">Custom Solutions</CardTitle>
                <CardDescription className="text-base">
                  Tailored digital solutions for unique business requirements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-success mr-2" />
                    Requirement analysis
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-success mr-2" />
                    Custom development
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-success mr-2" />
                    System integration
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-success mr-2" />
                    Ongoing support
                  </li>
                </ul>
                {/* <Button className="w-full">
                  <Link href="/contact" className="flex items-center">
                    Discuss Your Needs <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button> */}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* add theme */}
      <section className="py-16">
  <div className="container mx-auto px-4">
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

      {/* Portfolio Websites */}
      <Card className="hover:shadow-xl transition-shadow border-t-4 border-t-primary">
        <CardHeader>
          <Users className="w-12 h-12 text-primary mb-4" />
          <CardTitle className="text-2xl">Portfolio Websites</CardTitle>
          <CardDescription className="text-base">
            Personal websites to showcase your work, skills, and projects.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center text-sm">
              <CheckCircle className="w-4 h-4 text-secondary mr-2" />
              Project gallery with filtering
            </li>
            <li className="flex items-center text-sm">
              <CheckCircle className="w-4 h-4 text-secondary mr-2" />
              Resume & contact integration
            </li>
            <li className="flex items-center text-sm">
              <CheckCircle className="w-4 h-4 text-secondary mr-2" />
              Responsive and dark-mode ready
            </li>
            <li className="flex items-center text-sm">
              <CheckCircle className="w-4 h-4 text-secondary mr-2" />
              SEO & performance optimized
            </li>
          </ul>
          <Button className="w-full bg-primary text-white hover:bg-primary/90">
            <Link href="https://babar-portfolio-eight.vercel.app" className="flex items-center">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>

      {/* Corporate Websites */}
      <Card className="hover:shadow-xl transition-shadow border-t-4 border-t-primary">
        <CardHeader>
          <Globe className="w-12 h-12 text-primary mb-4" />
          <CardTitle className="text-2xl">Corporate Websites</CardTitle>
          <CardDescription className="text-base">
            Build credibility with a professional online presence for your business.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center text-sm">
              <CheckCircle className="w-4 h-4 text-secondary mr-2" />
              About, services, and contact pages
            </li>
            <li className="flex items-center text-sm">
              <CheckCircle className="w-4 h-4 text-secondary mr-2" />
              Lead capture and inquiry forms
            </li>
            <li className="flex items-center text-sm">
              <CheckCircle className="w-4 h-4 text-secondary mr-2" />
              Secure & fast hosting integration
            </li>
            <li className="flex items-center text-sm">
              <CheckCircle className="w-4 h-4 text-secondary mr-2" />
              SEO & Google indexing setup
            </li>
          </ul>
          <Button className="w-full bg-primary text-white hover:bg-primary/90">
            <Link href="https://malikamansentinel.com" className="flex items-center">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>

      {/* Booking Systems */}
      <Card className="hover:shadow-xl transition-shadow border-t-4 border-t-primary">
        <CardHeader>
          <Calendar className="w-12 h-12 text-primary mb-4" />
          <CardTitle className="text-2xl">Booking Systems</CardTitle>
          <CardDescription className="text-base">
            Automated booking and scheduling platforms for service-based businesses.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center text-sm">
              <CheckCircle className="w-4 h-4 text-secondary mr-2" />
              Real-time calendar integration
            </li>
            <li className="flex items-center text-sm">
              <CheckCircle className="w-4 h-4 text-secondary mr-2" />
              Online payment support
            </li>
            <li className="flex items-center text-sm">
              <CheckCircle className="w-4 h-4 text-secondary mr-2" />
              Email/SMS reminders
            </li>
            <li className="flex items-center text-sm">
              <CheckCircle className="w-4 h-4 text-secondary mr-2" />
              Staff and service management
            </li>
          </ul>
          <Button className="w-full bg-primary text-white hover:bg-primary/90">
            <Link href="https://nextjs-hotel-booking-five.vercel.app" className="flex items-center">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>

    </div>
  </div>
</section>

{/* more work */}
<section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Why Your Business Needs a Website</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Establish your online presence and boost customer engagement with a professionally designed website tailored to your needs.
        </p>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="hover:shadow-lg transition-shadow border-t-4 border-primary">
          <CardHeader>
            <ShoppingCart className="w-12 h-12 text-primary mb-4" />
            <CardTitle>Product Catalog Management</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center"><CheckCircle className="w-4 h-4 text-success mr-2" /> Unlimited products and categories</li>
              <li className="flex items-center"><CheckCircle className="w-4 h-4 text-success mr-2" /> Custom attributes (size, color, etc.)</li>
              <li className="flex items-center"><CheckCircle className="w-4 h-4 text-success mr-2" /> Inventory tracking</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow border-t-4 border-secondary">
          <CardHeader>
            <CreditCard className="w-12 h-12 text-secondary mb-4" />
            <CardTitle>Secure Payments</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center"><CheckCircle className="w-4 h-4 text-success mr-2" /> Multiple payment gateways</li>
              <li className="flex items-center"><CheckCircle className="w-4 h-4 text-success mr-2" /> SSL encryption</li>
              <li className="flex items-center"><CheckCircle className="w-4 h-4 text-success mr-2" /> Payment tracking</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow border-t-4 border-accent">
          <CardHeader>
            <Smartphone className="w-12 h-12 text-accent mb-4" />
            <CardTitle>Mobile Optimization</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center"><CheckCircle className="w-4 h-4 text-success mr-2" /> Responsive design</li>
              <li className="flex items-center"><CheckCircle className="w-4 h-4 text-success mr-2" /> Fast loading</li>
              <li className="flex items-center"><CheckCircle className="w-4 h-4 text-success mr-2" /> Mobile-friendly navigation</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow border-t-4 border-success">
          <CardHeader>
            <BarChart3 className="w-12 h-12 text-success mb-4" />
            <CardTitle>Analytics and Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center"><CheckCircle className="w-4 h-4 text-success mr-2" /> Sales & traffic reports</li>
              <li className="flex items-center"><CheckCircle className="w-4 h-4 text-success mr-2" /> Customer behavior insights</li>
              <li className="flex items-center"><CheckCircle className="w-4 h-4 text-success mr-2" /> Conversion tracking</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow border-t-4 border-destructive">
          <CardHeader>
            <Users className="w-12 h-12 text-destructive mb-4" />
            <CardTitle>Customer Management</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center"><CheckCircle className="w-4 h-4 text-success mr-2" /> User registration and login</li>
              <li className="flex items-center"><CheckCircle className="w-4 h-4 text-success mr-2" /> Order history</li>
              <li className="flex items-center"><CheckCircle className="w-4 h-4 text-success mr-2" /> Profile management</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow border-t-4 border-secondary">
          <CardHeader>
            <Globe className="w-12 h-12 text-secondary mb-4" />
            <CardTitle>SEO & Marketing</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center"><CheckCircle className="w-4 h-4 text-success mr-2" /> Search engine optimized</li>
              <li className="flex items-center"><CheckCircle className="w-4 h-4 text-success mr-2" /> Social media integration</li>
              <li className="flex items-center"><CheckCircle className="w-4 h-4 text-success mr-2" /> Newsletter & email tools</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Benefits */}
<div className="text-center mb-12 mt-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Benefits of Solutions</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
Transform your online presence with measurable results        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
        
        <div className="text-center">
          <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">24/7</div>
          <p className="text-muted-foreground">Availability</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-success text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">∞</div>
          <p className="text-muted-foreground">Scalability</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">↑</div>
          <p className="text-muted-foreground">Revenue Boost</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">⚡</div>
          <p className="text-muted-foreground">Efficiency</p>
        </div>
      </div>

      {/* Process Steps */}
    
    </div>
  </div>
</section>

{/* service success */}
<section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">What Makes Our Services Special</h2>
            <p className="text-xl text-gray-600">Key features that set our solutions apart</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <Clock className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick turnaround times without compromising on quality</p>
            </div>
            <div className="text-center">
              <Shield className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Secure & Reliable</h3>
              <p className="text-gray-600">Enterprise-grade security and 99.9% uptime guarantee</p>
            </div>
            <div className="text-center">
              <Zap className="w-16 h-16 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Scalable Solutions</h3>
              <p className="text-gray-600">Built to grow with your business needs</p>
            </div>
            <div className="text-center">
              <Headphones className="w-16 h-16 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock technical support and maintenance</p>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}
