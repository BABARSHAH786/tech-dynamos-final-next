 <section className="py-16">
  <div className="container mx-auto px-4">
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      
      {/* Existing Cards (E-commerce, School, College, University, Madrasa, Custom) */}
      {/* ... [Your existing 6 cards here] ... */}

      {/* Portfolio Websites */}
      <Card className="hover:shadow-xl transition-shadow border-t-4 border-t-pink-600">
        <CardHeader>
          <Users className="w-12 h-12 text-pink-600 mb-4" />
          <CardTitle className="text-2xl">Portfolio Websites</CardTitle>
          <CardDescription className="text-base">
            Personal websites to showcase your work, skills, and projects.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center text-sm">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Project gallery with filtering
            </li>
            <li className="flex items-center text-sm">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Resume & contact integration
            </li>
            <li className="flex items-center text-sm">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Responsive and dark-mode ready
            </li>
            <li className="flex items-center text-sm">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              SEO & performance optimized
            </li>
          </ul>
          <Button className="w-full">
            <Link href="/portfolio" className="flex items-center">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>

      {/* Corporate Websites */}
      <Card className="hover:shadow-xl transition-shadow border-t-4 border-t-purple-700">
        <CardHeader>
          <Globe className="w-12 h-12 text-purple-700 mb-4" />
          <CardTitle className="text-2xl">Corporate Websites</CardTitle>
          <CardDescription className="text-base">
            Build credibility with a professional online presence for your business.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center text-sm">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              About, services, and contact pages
            </li>
            <li className="flex items-center text-sm">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Lead capture and inquiry forms
            </li>
            <li className="flex items-center text-sm">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Secure & fast hosting integration
            </li>
            <li className="flex items-center text-sm">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              SEO & Google indexing setup
            </li>
          </ul>
          <Button className="w-full">
            <Link href="/corporate" className="flex items-center">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>

      {/* Booking Systems */}
      <Card className="hover:shadow-xl transition-shadow border-t-4 border-t-yellow-500">
        <CardHeader>
          <Calendar className="w-12 h-12 text-yellow-500 mb-4" />
          <CardTitle className="text-2xl">Booking Systems</CardTitle>
          <CardDescription className="text-base">
            Automated booking and scheduling platforms for service-based businesses.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center text-sm">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Real-time calendar integration
            </li>
            <li className="flex items-center text-sm">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Online payment support
            </li>
            <li className="flex items-center text-sm">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Email/SMS reminders
            </li>
            <li className="flex items-center text-sm">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Staff and service management
            </li>
          </ul>
          <Button className="w-full">
            <Link href="/booking" className="flex items-center">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>

    </div>
  </div>
</section>

      </section>

      {/* How We Work */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
              <p className="text-xl text-gray-600">
                Our proven development process ensures successful project delivery
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-lg font-bold mb-2">Discovery</h3>
                <p className="text-gray-600">We analyze your requirements and understand your business goals</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-lg font-bold mb-2">Planning</h3>
                <p className="text-gray-600">We create detailed project plans and technical specifications</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-lg font-bold mb-2">Development</h3>
                <p className="text-gray-600">Our team builds your solution using agile development practices</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-lg font-bold mb-2">Launch & Support</h3>
                <p className="text-gray-600">We deploy your solution and provide ongoing support and maintenance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Makes Our Services Special</h2>
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

      {/*  */}
       <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits of Solutions</h2>
            <p className="text-xl text-gray-600">Transform your idea and business with measurable results</p>
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

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and create a solution that drives your success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
              <Link href="/contact">Get Free Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
              <Link href="/portfolio">View Our Portfolio</Link>
            </Button>
          </div>
        </div>