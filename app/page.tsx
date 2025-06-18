// new
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight,
  CheckCircle,
  Globe,
  GraduationCap,
  ShoppingCart,
  Users,
  Zap,
  Badge,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-blue-800 to-secondary text-primary-foreground py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Tech Dynamos: Your Partner for <span className="text-accent">Digital Transformation</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              We Create Every Kind of Website You Need — Designed, Developed, Delivered
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                <Link href="/services" className="flex items-center">
                  Explore Our Solutions <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Link href="/contact">Get a Free Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Solving Digital Challenges for Modern Businesses</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From outdated systems to missed opportunities, we transform your digital obstacles into competitive
                advantages
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-primary">Common Challenges</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></div>
                    <span>Outdated websites that don't convert visitors to customers</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></div>
                    <span>Manual processes that waste time and resources</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></div>
                    <span>Disconnected systems that create data silos</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></div>
                    <span>Lack of digital presence in competitive markets</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></div>
                    <span>Low-performing e-commerce stores with poor UX</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></div>
                    <span>Inaccessible or outdated educational platforms</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></div>
                    <span>Inefficient booking systems causing missed opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></div>
                    <span>Generic websites that fail to reflect your brand identity</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></div>
                    <span>Security concerns with outdated web technologies</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></div>
                    <span>Limited scalability as your business grows</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-secondary">Our Solutions</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-accent mt-1 mr-3 flex-shrink-0" />
                    <span>High-converting e-commerce platforms that drive sales</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-accent mt-1 mr-3 flex-shrink-0" />
                    <span>Automated management systems that streamline operations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-accent mt-1 mr-3 flex-shrink-0" />
                    <span>Integrated solutions that unify your digital ecosystem</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-accent mt-1 mr-3 flex-shrink-0" />
                    <span>Custom digital strategies that outpace competition</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-accent mt-1 mr-3 flex-shrink-0" />
                    <span>Dynamic portfolio websites that showcase your brand</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-accent mt-1 mr-3 flex-shrink-0" />
                    <span>Educational platforms for schools, colleges, and madrasas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-accent mt-1 mr-3 flex-shrink-0" />
                    <span>Booking and appointment systems for service providers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-accent mt-1 mr-3 flex-shrink-0" />
                    <span>Business websites for startups, SMEs, and enterprises</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-accent mt-1 mr-3 flex-shrink-0" />
                    <span>Blog and news platforms with SEO-optimized structures</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-accent mt-1 mr-3 flex-shrink-0" />
                    <span>Custom web applications tailored to unique business needs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Core Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to your industry needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow border border-border">
              <CardHeader>
                <ShoppingCart className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-card-foreground">E-commerce Websites</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Complete online stores with payment integration, inventory management, and mobile optimization
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-accent hover:text-primary-foreground">
                  <Link href="https://react-e-commerce-store-black.vercel.app/">View Project</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border border-border">
              <CardHeader>
                <GraduationCap className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-card-foreground">School Website</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Comprehensive systems for student enrollment, attendance, grades, and parent communication
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-accent hover:text-primary-foreground">
                  <Link href="https://school-websitebabarali.vercel.app">View Project</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border border-border">
              <CardHeader>
                <Users className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-card-foreground">Booking Systems</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Automated booking and scheduling platforms for service-based businesses.                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-accent hover:text-primary-foreground">
                  <Link href="https://nextjs-hotel-booking-five.vercel.app/">View Project</Link>
                </Button>
              </CardContent>
            </Card>

            {/* <Card className="hover:shadow-lg transition-shadow border border-border">
              <CardHeader>
                <Globe className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-card-foreground">Madrasa Management</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Specialized systems designed for Islamic educational institutions with cultural considerations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-accent hover:text-primary-foreground">
                  <Link href="/education">Learn More</Link>
                </Button>
              </CardContent>
            </Card> */}
           

         

          </div>
      
        </div>
         <div className="flex items-center justify-center mt-4">
            <Card className=" hover:shadow-lg transition-shadow lg:col-span-2 border border-border">
              <CardHeader>
                <Zap className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-card-foreground">Custom Solutions</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Tailored digital solutions that perfectly match your unique business requirements and workflows
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-accent hover:text-primary-foreground">
                  <Link href="/services">View More Projects</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
      
      </section>

      {/* Website Packages Section */}
      <section className="py-16 bg-secondary/10"> {/* Using a lighter shade of secondary */}
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Website Packages</h2>
            <p className="text-xl text-muted-foreground">Choose the perfect package for your business needs</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-xl transition-shadow border border-primary">
              <CardHeader className="text-center">
                <Badge className="w-fit mx-auto mb-4 bg-secondary text-secondary-foreground">STARTER</Badge>
                <CardTitle className="text-2xl text-primary">Basic Store</CardTitle>
                <div className="text-3xl font-bold text-primary">1,999 Rs</div>
                <CardDescription className="text-muted-foreground">Perfect for small businesses starting online</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6 text-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-accent mr-2" />
                    Up to 100 products
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-accent mr-2" />
                    Mobile responsive design
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-accent mr-2" />
                    Payment gateway integration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-accent mr-2" />
                    Basic SEO setup
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-accent mr-2" />3 months support
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/contact">Order on whatsapp</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-2 border-primary relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground">MOST POPULAR</Badge>
              </div>
              <CardHeader className="text-center">
                <Badge className="w-fit mx-auto mb-4 bg-primary text-primary-foreground">PROFESSIONAL</Badge>
                <CardTitle className="text-2xl text-primary">Advanced Store</CardTitle>
                <div className="text-3xl font-bold text-primary">3,999 Rs</div>
                <CardDescription className="text-muted-foreground">Ideal for growing businesses</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6 text-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-accent mr-2" />
                    Unlimited products
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-accent mr-2" />
                    Advanced inventory management
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-accent mr-2" />
                    Multi-payment gateways
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-accent mr-2" />
                    Advanced SEO & analytics
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-accent mr-2" />
                    Email marketing integration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-accent mr-2" />6 months support
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/contact">Order on whatsapp</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border border-secondary">
              <CardHeader className="text-center">
                <Badge className="w-fit mx-auto mb-4 bg-secondary text-secondary-foreground">ENTERPRISE</Badge>
                <CardTitle className="text-2xl text-primary">Custom Solution</CardTitle>
                <div className="text-3xl font-bold text-primary">Custom</div>
                <CardDescription className="text-muted-foreground">Tailored for large enterprises</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6 text-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-accent mr-2" />
                    Multi-vendor marketplace
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-accent mr-2" />
                    Custom integrations
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-accent mr-2" />
                    Advanced reporting
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-accent mr-2" />
                    API development
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-accent mr-2" />
                    Dedicated support team
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-accent mr-2" />
                    12 months support
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}