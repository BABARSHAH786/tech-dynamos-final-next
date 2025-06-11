import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-purple-100 to-blue-50 py-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-lg text-gray-600">
            This Privacy Policy explains how we collect, use, and disclose personal information when you use our website and services.
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">1. Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 text-base">
              We may collect personal information such as your name, email address, phone number, and any other information you provide when contacting us or using our services.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">2. How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 text-base">
              We use your information to:
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Provide and maintain our services</li>
                <li>Communicate with you about your inquiries or services</li>
                <li>Improve our website and user experience</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">3. Cookies and Tracking</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 text-base">
              We use cookies and similar technologies to improve your browsing experience, analyze traffic, and personalize content. You can disable cookies via your browser settings.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">4. Google AdSense & Third-Party Ads</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 text-base">
              We use Google AdSense to serve ads on our site. Google may use cookies (including DoubleClick DART cookies) to serve ads based on your visits to our website and others on the internet.
              <br /><br />
              You can opt out of personalized advertising by visiting <a href="https://www.adssettings.google.com" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Ads Settings</a>.
              <br />
              Learn more at <a href="https://policies.google.com/technologies/ads" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Google’s Ad Policies</a>.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">5. Data Sharing</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 text-base">
              We do not sell, trade, or rent your personal information to third parties. We may share data with trusted partners who help us operate our website, so long as they agree to keep it confidential.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">6. Your Rights</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 text-base">
              You may request access to, correction, or deletion of your personal information by contacting us. We will respond within a reasonable timeframe.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">7. Changes to This Policy</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 text-base">
              We may update this policy from time to time. Any changes will be posted on this page with an updated effective date.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">8. Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 text-base">
              If you have questions about this Privacy Policy, please contact us at:
              <br />
              <span className="font-medium">Email:</span> <a href="mailto:support@techdynamos.com" className="text-blue-600 underline">support@techdynamos.com</a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Back to Home or Contact */}
      <section className="py-12 bg-gray-100 text-center">
        <Link href="/" className="text-blue-700 font-semibold hover:underline">← Back to Home</Link>
      </section>
    </div>
  )
}
