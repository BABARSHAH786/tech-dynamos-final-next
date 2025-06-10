'use client'
import React, { useState } from "react"
import axios from "axios"
import Link from "next/Link"
// import { useNavigate, Link } from "react-router-dom"
import toast from "react-hot-toast"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { UserPlus } from "lucide-react"
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [username, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigateTo = useRouter()

  const handleRegister = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    try {
      const { data } = await axios.post(
        "https://backend-only-6264.onrender.com/user/signup",
        { username, email, password },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      )

      toast.success(data.message || "User registered successfully")
      localStorage.setItem("jwt", data.token)
      navigateTo.push("/login")

      setUserName("")
      setEmail("")
      setPassword("")
    } catch (error) {
      console.error(error)
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.errors || "User registration failed")
      } else {
        toast.error("User registration failed")
      }
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Create Your Account | اپنا اکاؤنٹ بنائیں
          </h1>
          <p className="text-xl text-blue-100">
            Join Tech Dynamos today and start your digital journey <br />
            آج ہی ٹیک ڈائناموز کا حصہ بنیں اور اپنا ڈیجیٹل سفر شروع کریں۔
          </p>
        </div>
      </section>

      {/* Signup Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <UserPlus className="w-10 h-10 text-blue-600 mx-auto mb-2" />
                <CardTitle className="text-2xl">Signup | سائن اپ کریں</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleRegister} className="space-y-6">
                  {/* Username */}
                  <div>
                    <label className="block mb-1 font-semibold">Username</label>
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUserName(e.target.value)}
                      placeholder="Enter your username"
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  {/* Email */}
                  <div>
                    <label className="block mb-1 font-semibold">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  {/* Password */}
                  <div>
                    <label className="block mb-1 font-semibold">Password</label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-800 text-white font-semibold text-lg py-3 rounded-xl"
                  >
                    Signup
                  </Button>

                  <p className="text-center text-gray-600">
                    Already have an account?{" "}
                    <Link href="/login" className="text-blue-600 hover:underline">
                     Login
                     </Link>
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-blue-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Let’s build your digital future | آئیں آپ کا ڈیجیٹل مستقبل بنائیں
        </h2>
        <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
          <a href="mailto:syedbabarali640@gmail.com">Get In Touch | رابطہ کریں</a>
        </Button>
      </section>
    </div>
  )
}
