import  EmailForm  from "@/components/EmailForm"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, Users } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Tech Dynamos </h1>
            <p className="text-xl text-blue-100">
              We’re here to build digital solutions that grow your business <br />
            
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <Users className="w-10 h-10 text-blue-700 mb-2" />
                <CardTitle className="text-2xl">Our Team</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Team Leader:</strong> Syed Babar Ali </li>
                  <li><strong>Member:</strong> Abdul Hannan </li>
                  <li><strong>Member:</strong> Ali</li>
                  <li><strong>Member:</strong> Abu Huzaifa</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Mail className="w-10 h-10 text-green-600 mb-2" />
                <CardTitle className="text-2xl">Contact Info </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  <strong>Email:</strong> <a href="mailto:syedbabarali640@gmail.com" className="text-blue-600 hover:underline">syedbabarali640@gmail.com</a><br />
                </p>
                <p>
                  <strong>Phone:</strong> <a href="tel:03052374486" className="text-blue-600 hover:underline">0305-237486</a><br />
                </p>
              </CardContent>
            </Card>
          </div>
          <main className="min-h-screen flex items-center justify-center bg-gray-900">
      <EmailForm />
    </main>
        </div>
      </section>

      {/* Call to Action */}
  
    </div>
  )
}
