import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-purple-100 to-blue-50 py-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms and Conditions</h1>
          <p className="text-lg text-gray-600">
            Please read these Terms and Conditions carefully before using our website.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">1. Welcome to TechDynamos</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 text-base">
              These Terms and Conditions govern your use of our website, <strong>codewithspeed.com</strong>. By accessing or using the site, you agree to be bound by these Terms. If you disagree with any part, please do not use the site.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">2. Use of the Site</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 text-base">
              You may only use this site for lawful purposes and in accordance with these Terms. You agree not to:
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Violate any applicable law or regulation</li>
                <li>Impersonate or misrepresent your affiliation with any person or entity</li>
                <li>Disrupt the operation of the site or related networks</li>
                <li>Attempt to gain unauthorized access to any part of the site or its systems</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">3. Content Ownership</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 text-base">
              All content on this site — including text, graphics, logos, images, and software — is the property of Code With Speed and is protected by copyright and intellectual property laws. You may not reproduce or use it without written permission.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">4. Disclaimer</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 text-base">
              The site is provided "as is" without warranties of any kind. We do not guarantee that the site will be error-free, uninterrupted, or that issues will be corrected.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">5. Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 text-base">
              To the fullest extent allowed by law, we are not liable for any damages arising from your use of the site, including direct, indirect, incidental, or consequential damages.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">6. Governing Law</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 text-base">
              These Terms are governed by and interpreted in accordance with the laws of <strong>Your Jurisdiction</strong>, without regard to conflict of law principles.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">7. Changes to These Terms</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 text-base">
              We may update these Terms from time to time. Any changes will be posted on this page. Continued use of the site after changes implies acceptance of the new terms.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">8. Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 text-base">
              If you have any questions about these Terms, feel free to reach out to us:
              <br />
              <span className="font-medium">Email:</span> <a href="mailto:syedbabarali640@gmail.com" className="text-blue-600 underline">syedbabarali640@gmail.com</a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Back to Home or Footer */}
      <section className="py-12 bg-gray-100 text-center">
        <Link href="/" className="text-blue-700 font-semibold hover:underline">← Back to Home</Link>
      </section>
    </div>
  )
}
