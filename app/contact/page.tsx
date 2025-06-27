// import EmailForm from "@/components/EmailForm";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Mail, Phone, Users } from "lucide-react";

// export default function ContactPage() {
//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-primary via-indigo-600 to-secondary text-white py-20">
//         <div className="container mx-auto px-4">
//           <div className="max-w-3xl mx-auto text-center">
//             <h1 className="text-4xl md:text-5xl font-bold mb-4">
//               Contact Tech Dynamos
//             </h1>
//             <p className="text-xl text-indigo-100">
//               We’re here to build digital solutions that grow your business.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Contact Info Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
//             {/* Team Card */}
//             <Card className="border-t-4 border-primary shadow-sm">
//               <CardHeader>
//                 <Users className="w-10 h-10 text-primary mb-2" />
//                 <CardTitle className="text-2xl">Our Team</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <ul className="space-y-2 text-gray-700">
//                   <li><strong>Team Leader:</strong> Syed Babar Ali</li>
//                   <li><strong>Member:</strong> Abdul Hannan</li>
//                   <li><strong>Member:</strong> Ali</li>
//                   <li><strong>Member:</strong> Abu Huzaifa</li>
//                 </ul>
//               </CardContent>
//             </Card>

//             {/* Contact Info Card */}
//             <Card className="border-t-4 border-secondary shadow-sm">
//               <CardHeader>
//                 <Mail className="w-10 h-10 text-secondary mb-2" />
//                 <CardTitle className="text-2xl">Contact Info</CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-4 text-gray-700">
//                 <p>
//                   <strong>Email:</strong>{" "}
//                   <a
//                     href="mailto:syedbabarali640@gmail.com"
//                     className="text-primary hover:underline"
//                   >
//                     syedbabarali640@gmail.com
//                   </a>
//                 </p>
//                 <p>
//                   <strong>Phone:</strong>{" "}
//                   <a
//                     href="tel:03052374486"
//                     className="text-primary hover:underline"
//                   >
//                     0305-237486
//                   </a>
//                 </p>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Contact Form */}
//           <div className="mt-16 bg-white shadow-lg rounded-2xl p-8 max-w-3xl mx-auto">
//             <h2 className="text-3xl font-bold text-center text-primary mb-6">
//               Send Us a Message
//             </h2>
//             <EmailForm />
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


import EmailForm from "@/components/EmailForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Users } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-indigo-600 to-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Tech Dynamos</h1>
            <p className="text-xl text-indigo-100">
              We’re here to build digital solutions that grow your business.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Our Team</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {/* Card 1 */}
            <Card className="border-t-4 border-primary shadow-md">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Syed Babar Ali</CardTitle>
                <p className="text-md font-bold">Team Leader</p>
              </CardHeader>
              <CardContent className="text-gray-700 space-y-2">
                <p><strong>Expertise:</strong> Frontend & Backend Support</p>
                <p>Assist in frontend and backend development with complete technical guidance.</p>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="border-t-4 border-secondary shadow-md">
              <CardHeader>
                <CardTitle className="text-xl text-secondary">Abdul Hannan</CardTitle>
                <p className=" text-md font-bold">Frontend Lead</p>
              </CardHeader>
              <CardContent className="text-gray-700 space-y-2">
                <p><strong>Expertise:</strong> React & Tailwind CSS</p>
                <p>Leads clean UI and smooth UX implementation using modern frontend technologies.</p>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="border-t-4 border-green-500 shadow-md">
              <CardHeader>
                <CardTitle className="text-xl text-green-600">Ali</CardTitle>
                <p className="text-sm font-bold">Social Media and marketing with frontend assistance</p>
              </CardHeader>
              <CardContent className="text-gray-700 space-y-2">
                <p><strong>Expertise:</strong> Manage Server logic API s and ensure server security</p>
                <p>Manages database and server-side tasks to ensure fast and secure performance.</p>
              </CardContent>
            </Card>

            {/* Card 4 */}
            <Card className="border-t-4 border-blue-500 shadow-md">
              <CardHeader>
                <CardTitle className="text-xl text-blue-600">Abu Huzaifa</CardTitle>
                <p className="text-md font-bold">Frontend and marketing</p>
              </CardHeader>
              <CardContent className="text-gray-700 space-y-2">
                <p><strong>Role:</strong> Support frontend development and handle development,optimization and market flow</p>
                <p>Supports in improving responsiveness and cross-device layout consistency.</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="mt-16 bg-white shadow-lg rounded-2xl p-8 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-primary mb-6">
              Send Us a Message
            </h2>
            <EmailForm />
          </div>
        </div>
      </section>
    </div>
  );
}
