import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Users, Target, Heart, Shield, Lightbulb } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story | Tech Dynamos</h1>
            <p className="text-xl text-gray-600 mb-8">
              Empowering businesses and educational institutions through innovative digital solutions since 2024
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <Target className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To democratize digital transformation by providing affordable, high-quality website solutions and
                  management systems that empower businesses and educational institutions to thrive in the digital age.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-600">
              <CardHeader>
                <Lightbulb className="w-12 h-12 text-purple-600 mb-4" />
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To become the leading provider of digital solutions in our region, known for innovation, reliability,
                  and exceptional customer service, while helping organizations achieve their full potential through
                  technology.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How Tech Dynamos Started</h2>
            <div className="prose prose-lg max-w-none">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <p className="text-gray-600 mb-6">
                  Tech Dynamos was born from a simple observation: too many businesses and educational institutions were
                  struggling with outdated systems and missing out on digital opportunities. In 2019, our founders
                  recognized the gap between the rapid pace of technological advancement and the slow adoption of
                  digital solutions in traditional sectors.
                </p>
                <p className="text-gray-600 mb-6">
                  Starting as a small team of passionate developers and designers, we began by helping local schools
                  digitize their administrative processes. Our first project was a simple student management system for
                  a neighborhood school that was still using paper records. The transformation was remarkable – what
                  used to take hours now took minutes, and parents could finally stay connected with their children's
                  progress in real-time.
                </p>
                <p className="text-gray-600 mb-6">
                  Word spread quickly, and soon we were working with colleges, universities, and even specialized
                  institutions like madrasas. Each project taught us something new about the unique challenges different
                  organizations face, and we continuously evolved our solutions to meet these diverse needs.
                </p>
                <p className="text-gray-600">
                  Today, Tech Dynamos has grown into a comprehensive digital solutions provider, but our core mission
                  remains the same: making powerful technology accessible and affordable for everyone. We've helped
                  hundreds of organizations transform their operations, and we're just getting started.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <Heart className="w-16 h-16 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Customer First</h3>
              <p className="text-gray-600">
                Every decision we make is guided by what's best for our clients and their success.
              </p>
            </div>
            <div className="text-center">
              <Shield className="w-16 h-16 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Quality & Reliability</h3>
              <p className="text-gray-600">
                We deliver robust, secure solutions that our clients can depend on for years to come.
              </p>
            </div>
            <div className="text-center">
              <Lightbulb className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-600">We stay ahead of technology trends to provide cutting-edge solutions.</p>
            </div>
            <div className="text-center">
              <Users className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Collaboration</h3>
              <p className="text-gray-600">
                We work closely with our clients as partners in their digital transformation journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The talented individuals behind Tech Dynamos</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold mb-2">Syed Babar Ali</h3>
                <p className="text-blue-600 font-medium mb-2">Team Leader</p>
                <p className="text-gray-600 text-sm">
                  10+ years in software development with a passion for educational technology. Sarah leads our vision
                  and strategy.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-blue-600 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold mb-2">Abdul hannan</h3>
                <p className="text-green-600 font-medium mb-2">Co-Founder</p>
                <p className="text-gray-600 text-sm">
                  Expert in full-stack development and system architecture. Michael ensures our technical excellence and
                  innovation.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold mb-2">Ali</h3>
                <p className="text-purple-600 font-medium mb-2">Lead Designer</p>
                <p className="text-gray-600 text-sm">
                  Creative director with expertise in UX/UI design. Fatima ensures our solutions are both beautiful and
                  functional.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-600 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold mb-2">Abu Huzaifa</h3>
                <p className="text-orange-600 font-medium mb-2">Marketing </p>
                <p className="text-gray-600 text-sm">
                  Specialist in e-commerce platforms and payment integrations. Abu Huzaifa brings complex projects to life.
                </p>
              </CardContent>
            </Card>

            
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Tech Dynamos?</h2>
            <p className="text-xl text-gray-600">Our unique strengths that set us apart</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-6">Our Unique Selling Propositions</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Industry Specialization</h4>
                    <p className="text-gray-600">
                      Deep expertise in education and e-commerce sectors with tailored solutions
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Rapid Development</h4>
                    <p className="text-gray-600">
                      Agile methodology ensures faster time-to-market without compromising quality
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Comprehensive Support</h4>
                    <p className="text-gray-600">
                      24/7 technical support and ongoing maintenance for all our solutions
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Scalable Architecture</h4>
                    <p className="text-gray-600">Future-proof solutions that grow with your organization</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Competitive Pricing</h4>
                    <p className="text-gray-600">
                      Premium quality solutions at affordable prices with flexible payment options
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Our Technology Stack</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold mb-2">Frontend</h4>
                  <p className="text-sm text-gray-600">HTML,CSS ,React, Next.js </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold mb-2">Backend</h4>
                  <p className="text-sm text-gray-600">Node.js, Python</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold mb-2">Database</h4>
                  <p className="text-sm text-gray-600">MongoDB</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold mb-2">Cloud</h4>
                  <p className="text-sm text-gray-600">Google Cloud,</p>
                </div>
              </div>
              <div className="mt-6">
                <h4 className="font-semibold mb-3">Key Statistics</h4>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">10+</div>
                    <div className="text-sm text-gray-600">Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">98%</div>
                    <div className="text-sm text-gray-600">Client Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">24/7</div>
                    <div className="text-sm text-gray-600">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Work with Us?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join the hundreds of satisfied clients who have transformed their operations with Tech Dynamos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-blue-900">
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
