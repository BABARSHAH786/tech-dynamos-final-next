import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowRight,
  CheckCircle,
  Globe,
  GraduationCap,
  ShoppingCart,
  Users,
  Star,
  Zap,
  Shield,
  Clock,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
    // const token = localStorage.getItem("jwt");

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Tech Dynamos: Your Partner for <span className="text-yellow-400">Digital Transformation</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Innovate Your Digital Presence with Custom E-commerce Solutions and Comprehensive Management Systems
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                <Link href="/services" className="flex items-center">
                  Explore Our Solutions <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-black hover:bg-white hover:text-blue-900"
              >
                <Link href="/contact">Get a Free </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Solving Digital Challenges for Modern Businesses</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From outdated systems to missed opportunities, we transform your digital obstacles into competitive
                advantages
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-red-600">Common Challenges</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                    <span>Outdated websites that don't convert visitors to customers</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                    <span>Manual processes that waste time and resources</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                    <span>Disconnected systems that create data silos</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                    <span>Lack of digital presence in competitive markets</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6 text-green-600">Our Solutions</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span>High-converting e-commerce platforms that drive sales</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span>Automated management systems that streamline operations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span>Integrated solutions that unify your digital ecosystem</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span>Custom digital strategies that outpace competition</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to your industry needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <ShoppingCart className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>E-commerce Websites</CardTitle>
                <CardDescription>
                  Complete online stores with payment integration, inventory management, and mobile optimization
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  <Link href="https://react-e-commerce-store-black.vercel.app/">View Project</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <GraduationCap className="w-12 h-12 text-green-600 mb-4" />
                <CardTitle>School Management</CardTitle>
                <CardDescription>
                  Comprehensive systems for student enrollment, attendance, grades, and parent communication
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  <Link href="/education">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="w-12 h-12 text-purple-600 mb-4" />
                <CardTitle>College & University Systems</CardTitle>
                <CardDescription>
                  Advanced management platforms for higher education with research and hostel management
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  <Link href="/education">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Globe className="w-12 h-12 text-orange-600 mb-4" />
                <CardTitle>Madrasa Management</CardTitle>
                <CardDescription>
                  Specialized systems designed for Islamic educational institutions with cultural considerations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  <Link href="/education">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow lg:col-span-2">
              <CardHeader>
                <Zap className="w-12 h-12 text-red-600 mb-4" />
                <CardTitle>Custom Solutions</CardTitle>
                <CardDescription>
                  Tailored digital solutions that perfectly match your unique business requirements and workflows
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  <Link href="/contact">Discuss Your Needs</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Tech Dynamos?</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Shield className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Proven Expertise</h3>
                <p className="text-gray-600">5+ years of experience delivering successful digital solutions</p>
              </div>
              <div className="text-center">
                <Clock className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
                <p className="text-gray-600">Quick turnaround times without compromising on quality</p>
              </div>
              <div className="text-center">
                <Users className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
                <p className="text-gray-600">Ongoing support and maintenance for all our solutions</p>
              </div>
            </div>

            {/* Client Testimonials */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "Tech Dynamos transformed our school's operations completely. The management system they built has
                    saved us countless hours and improved our communication with parents significantly."
                  </p>
                  <div className="font-semibold">- Sarah Johnson, Principal</div>
                  <div className="text-sm text-gray-500">Greenwood Elementary School</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "Our e-commerce sales increased by 150% within the first quarter after launching our new website.
                    The team's attention to detail and ongoing support has been exceptional."
                  </p>
                  <div className="font-semibold">- Michael Chen, CEO</div>
                  <div className="text-sm text-gray-500">TechGear Solutions</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Projects Showcase */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Success Stories</h2>
            <p className="text-xl text-gray-600">See how we've helped businesses transform digitally</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600"></div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">University Portal System</h3>
                <p className="text-gray-600 mb-4">Complete student management system with 10,000+ active users</p>
                <Button variant="outline" size="sm">
                  <Link href="/portfolio">View Details</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-500 to-blue-600"></div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">E-commerce Platform</h3>
                <p className="text-gray-600 mb-4">Multi-vendor marketplace with advanced analytics dashboard</p>
                <Button variant="outline" size="sm">
                  <Link href="https://react-e-commerce-store-black.vercel.app">View Details</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-orange-500 to-red-600"></div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">School Management App</h3>
                <p className="text-gray-600 mb-4">Mobile-first solution for modern educational institutions</p>
                <Button variant="outline" size="sm">
                  <Link href="/portfolio">View Details</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button size="lg">
              <Link href="/portfolio">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Contact Form */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
              <p className="text-xl text-blue-100">Get a free consultation and discover how we can help you succeed</p>
            </div>
            <Card className="bg-white text-black">
              <CardContent className="p-8">
                <form className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <Input placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address</label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <Input placeholder="Your phone number" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Service Interest</label>
                    <select className="w-full p-2 border rounded-md">
                      <option>Select a service</option>
                      <option>E-commerce Website</option>
                      <option>School Management System</option>
                      <option>College Management System</option>
                      <option>University Management System</option>
                      <option>Madrasa Management System</option>
                      <option>Custom Solution</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">Project Details</label>
                    <Textarea placeholder="Tell us about your project requirements..." rows={4} />
                  </div>
                  <div className="md:col-span-2">
                    <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                      Get Free Consultation
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
