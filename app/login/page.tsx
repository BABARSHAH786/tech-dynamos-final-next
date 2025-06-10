"use client";

import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        // "https://backend-only-6264.onrender.com/user/signup",
        "https://backend-only-6264.onrender.com/user/login",
        { email, password },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success(data.message || "User logged in successfully");
      localStorage.setItem("jwt", data.token);
      setEmail("");
      setPassword("");
      router.push("/");
    } catch (error: any) {
      toast.error(error?.response?.data?.errors || "Login failed");
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Login to Tech Dynamos | لاگ ان کریں</h1>
            <p className="text-xl text-blue-100">
              Access your digital dashboard and start managing with power <br />
              اپنے ڈیجیٹل ڈیش بورڈ تک رسائی حاصل کریں اور اختیارات کے ساتھ انتظام شروع کریں۔
            </p>
          </div>
        </div>
      </section>

      {/* Login Card */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-2xl text-blue-900">Login | لاگ ان کریں</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label className="block mb-1 font-semibold text-gray-700">Email | ای میل</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-semibold text-gray-700">Password | پاس ورڈ</label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-900 text-white font-semibold py-2 rounded-lg">
                    Login | لاگ ان کریں
                  </Button>
                  <p className="text-center text-gray-600">
                    New user?{" "}
                    <Link href="/sign-up" className="text-blue-600 hover:underline">
                      Signup | سائن اپ کریں
                    </Link>
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-10 bg-blue-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Let’s build your digital future | آئیں آپ کا ڈیجیٹل مستقبل بنائیں</h2>
        <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
          <a href="mailto:syedbabarali640@gmail.com">Contact Us | رابطہ کریں</a>
        </Button>
      </section>
    </div>
  );
}
