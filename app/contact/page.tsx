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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Tech Dynamos | ٹیک ڈائناموز سے رابطہ کریں</h1>
            <p className="text-xl text-blue-100">
              We’re here to build digital solutions that grow your business <br />
              ہم آپ کے کاروبار کو بڑھانے کے لیے ڈیجیٹل حل فراہم کرنے کے لیے حاضر ہیں۔
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
                <CardTitle className="text-2xl">Our Team | ہماری ٹیم</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Team Leader:</strong> Syed Babar Ali | سید بابر علی</li>
                  <li><strong>Member:</strong> Abdul Hannan | عبدالحَنّان</li>
                  <li><strong>Member:</strong> Ali | علی</li>
                  <li><strong>Member:</strong> Abu Huzaifa | ابو حذیفہ</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Mail className="w-10 h-10 text-green-600 mb-2" />
                <CardTitle className="text-2xl">Contact Info | رابطہ کی معلومات</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  <strong>Email:</strong> <a href="mailto:syedbabarali640@gmail.com" className="text-blue-600 hover:underline">syedbabarali640@gmail.com</a><br />
                  <span className="text-sm text-gray-500">ای میل</span>
                </p>
                <p>
                  <strong>Phone:</strong> <a href="tel:0305237486" className="text-blue-600 hover:underline">0305-237486</a><br />
                  <span className="text-sm text-gray-500">فون نمبر</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-10 bg-blue-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Let’s build your digital future | آئیں آپ کا ڈیجیٹل مستقبل بنائیں</h2>
        <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
          <a href="mailto:syedbabarali640@gmail.com">Contact on Email | رابطہ کریں</a>
        </Button>
      </section>
    </div>
  )
}
