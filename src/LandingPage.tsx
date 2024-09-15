'use client'

import { useState } from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card'
import { Progress } from './ui/progress'
import { ArrowRight, Home, Shield, CreditCard, Users, TrendingUp, Clock } from 'lucide-react'
import Lottie from 'lottie-react'
import property from './lottie/Property-Management.json'

export default function LandingPage() {
  const [activeCard, setActiveCard] = useState(0)

  const benefits = [
    {
      title: 'Time Savings',
      description: 'Automate tedious tasks and save up to 15 hours per week.',
      icon: Clock,
      stat: 15,
      statLabel: 'hours saved weekly',
    },
    {
      title: 'Increased ROI',
      description: "Boost your property's return on investment by up to 20%.",
      icon: TrendingUp,
      stat: 20,
      statLabel: 'increase in ROI',
    },
    {
      title: 'Enhanced Security',
      description: 'Reduce risks with our advanced verification system.',
      icon: Shield,
      stat: 98,
      statLabel: 'risk reduction',
    },
    {
      title: 'Community Building',
      description: 'Foster a sense of belonging among tenants.',
      icon: Users,
      stat: 85,
      statLabel: 'tenant satisfaction',
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="flex justify-center text-left w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-[#5C5A51] to-[#7A7869]">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4 text-white">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Revolutionize Property Management
                </h1>
                <p className="max-w-[600px] text-gray-200 md:text-xl">
                  Stepin: The innovative platform designed for property owners, tenants, and managers to streamline every aspect of rental management.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-white text-[#5C5A51] hover:bg-gray-100">
                  <a href="/signup">Join Stepin Now</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
                  <a href="#features">Learn More</a>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
                <Lottie animationData={property} height={310} width={550}/>
              {/* <Image
                alt="Stepin App Interface"
                className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                height="310"
                width="550"
                src="/placeholder.svg?height=310&width=550"
              /> */}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="flex justify-center bg-[#FFFFFF] text-black w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How It Works</h2>
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            {[
              {
                title: 'List & Search',
                description: 'Automated listing and real-time updates for property owners and seekers.',
                icon: Home,
              },
              {
                title: 'Verify',
                description: 'Credibility scoring based on rental history, income stability, and more.',
                icon: Shield,
              },
              {
                title: 'Manage',
                description: 'Digital agreements, rent payment options, and real-time updates.',
                icon: CreditCard,
              },
            ].map((item, index) => (
              <Card key={index} className="flex flex-col items-center text-center">
                <CardHeader>
                  <div className="p-2 flex justify-center items-center text-center rounded-full mb-4">
                    <item.icon className="w-6 h-6 text-[#5C5A51]" />
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="flex justify-center text-black w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 text-left">
            {[
              {
                title: 'Manage Rentals and Tenants',
                description: 'Effortlessly oversee properties and tenants with our intuitive management tools.',
              },
              {
                title: 'Automated Listing Management',
                description: 'Reflect real-time occupancy and streamline property listings.',
              },
              {
                title: 'Credibility Scoring',
                description: 'Trusted tenant and owner verification for peace of mind.',
              },
              {
                title: 'E-Agreements & Rent Collection',
                description: 'Digital, secure, and easy management of rental agreements and payments.',
              },
              {
                title: 'Community Building (Coming Soon)',
                description: 'Connect tenants through shared interests and build a thriving community.',
              },
              {
                title: 'REIT Investment (Coming Soon)',
                description: 'Provide real estate investment opportunities for property owners.',
              },
            ].map((feature, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Stepin Section */}
      <section id="why-stepin" className="flex justify-center text-black w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-100">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Why Stepin?</h2>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 text-left">
            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <Card 
                  key={index}
                  className={`cursor-pointer transition-all duration-300 ${activeCard === index ? 'border-[#5C5A51] shadow-lg' : 'hover:border-[#5C5A51]/60'}`}
                  onClick={() => setActiveCard(index)}
                >
                  <CardHeader className="flex flex-row items-left space-x-4">
                    <div className="p-2 bg-[#5C5A51]/10 rounded-full">
                      <benefit.icon className="w-6 h-6 text-[#5C5A51]" />
                    </div>
                    <div>
                      <CardTitle>{benefit.title}</CardTitle>
                      <CardDescription>{benefit.description}</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
            <div className="lg:top-24 space-y-8 relative h-auto">
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle>Impact of Stepin</CardTitle>
                  <CardDescription>See how Stepin transforms property management</CardDescription>
                </CardHeader>
                <CardContent>
                  <motion.div
                    key={activeCard}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                  >
                    <div className="text-4xl font-bold text-[#5C5A51]">
                      {benefits[activeCard].stat}%
                    </div>
                    <Progress value={benefits[activeCard].stat} className="w-full bg-[#5C5A51]/20" />
                    <p className="text-sm text-gray-500">{benefits[activeCard].statLabel}</p>
                  </motion.div>
                </CardContent>
              </Card>
              
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className='bg-[#5C5A51] text-white'>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-6">Ready to Transform Your Property Management?</h2>
          <p className="max-w-[600px] mx-auto mb-8 text-gray-200 md:text-xl">
            Join Stepin today and discover a new way to manage your properties or find your perfect rental.
          </p>
          <Button asChild size="lg" className="bg-white text-[#5C5A51] hover:bg-gray-100">
            <a href="/signup">Join the Revolution <ArrowRight className="ml-2 w-5 h-5" /></a>
          </Button>
        </div>
        
      </section>
        <footer className='text-left px-6'>
            email: hellostepin@gmail.com
        </footer>
      </div>
    </div>
  )
}