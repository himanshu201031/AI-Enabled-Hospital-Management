import Link from 'next/link';
import { ArrowUpRight, Plus, Star, HeartPulse, Brain, Eye, Activity, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import FadeIn from '../components/ui/FadeIn';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white overflow-hidden pb-20">

      {/* 1. Hero Section */}
      <section className="relative bg-[#f1f6f9] pt-12 pb-48 px-4 sm:px-8 xl:px-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

          {/* Left Content */}
          <FadeIn direction="right" delay={0.1} className="space-y-8">
            {/* Reviews Badge */}
            <div className="bg-white rounded-full p-1.5 pr-4 flex items-center gap-3 w-fit shadow-sm border border-gray-100">
              <div className="flex -space-x-2">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&auto=format" alt="User" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&auto=format" alt="User" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&auto=format" alt="User" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                <div className="w-8 h-8 rounded-full border-2 border-white bg-[#068783] flex items-center justify-center text-white text-xs z-10">
                  <Plus className="w-4 h-4" />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex text-yellow-500 text-[10px]">
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                </div>
                <span className="text-[10px] font-semibold text-gray-800">Based on 20K+ Reviews</span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-[3.5rem] leading-[1.1] md:text-[4.5rem] font-bold text-gray-900 tracking-tight">
              AI-Enabled <br />
              Hospital <br />
              <span className="text-[#068783]">Management.</span>
            </h1>

            {/* Description */}
            <p className="text-gray-600 max-w-lg leading-relaxed text-lg">
              Register patients, schedule appointments, and use <span className="font-semibold text-[#068783]">AI triage assistance</span> in a safe, trusted environment.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link href="/register" className="inline-block">
                <button className="bg-[#068783] hover:bg-[#05706c] text-white px-8 py-3.5 rounded-xl font-medium transition-colors shadow-lg shadow-[#068783]/20">
                  Register Patient
                </button>
              </Link>
              <Link href="/schedule" className="inline-block">
                <button className="bg-white border border-[#068783] text-[#068783] hover:bg-[#f1f6f9] px-8 py-3.5 rounded-xl font-medium transition-colors shadow-sm">
                  Schedule Appointment
                </button>
              </Link>
              <Link href="/triage" className="inline-block">
                <button className="bg-[#0b1f2e] hover:bg-[#1a364d] text-white px-8 py-3.5 rounded-xl font-medium transition-colors shadow-lg">
                  AI Triage
                </button>
              </Link>
            </div>
          </FadeIn>

          {/* Right Content / Images */}
          <FadeIn direction="left" delay={0.2} className="relative flex justify-center lg:justify-end">

            {/* Main Doctor Image Placeholder */}
            {/* The image in the design has a cut-out doctor. Using a clean portrait of a doctor on transparent bg if possible, or a nice styled image */}
            <div className="relative w-full max-w-md aspect-[4/5] object-cover rounded-3xl overflow-hidden shadow-2xl z-10 border-[6px] border-white">
              <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop" alt="Doctor" className="w-full h-full object-cover" />
            </div>

            {/* Cured Patients Floating Card */}
            <div className="absolute -left-12 top-1/2 -translate-y-1/2 bg-white p-4 rounded-2xl shadow-xl z-20 flex flex-col gap-2 w-48 border border-gray-100">
              <span className="text-xs text-gray-500">
                <span className="text-[#068783]">•</span> Cured Satisfied Patients Around the Globe
              </span>
              <div className="flex -space-x-2 mt-1">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&h=50&fit=crop" alt="Pat 1" className="w-8 h-8 rounded-full border-2 border-white" />
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=50&h=50&fit=crop" alt="Pat 2" className="w-8 h-8 rounded-full border-2 border-white" />
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50&h=50&fit=crop" alt="Pat 3" className="w-8 h-8 rounded-full border-2 border-white" />
              </div>
              <div className="flex items-end justify-between mt-1">
                <span className="text-2xl font-bold text-gray-900">20K+</span>
                <div className="bg-[#068783] w-8 h-8 rounded-full flex items-center justify-center text-white">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Circular Stamp */}
            <div className="absolute top-12 -right-8 z-20 w-32 h-32 bg-white/70 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-100 shadow-lg">
              {/* Note: In a real app we'd use SVG to put text on a circle, using simple icon here for prototyping */}
              <div className="text-center flex flex-col items-center">
                <div className="border border-orange-400 p-2 rounded-full mb-1">
                  <Plus className="w-6 h-6 text-[#068783] stroke-[3px]" />
                </div>
                <span className="text-[9px] uppercase tracking-widest font-bold text-gray-800 text-center w-24">Best Medical & Health Service</span>
              </div>
            </div>

          </FadeIn>
        </div>

        {/* Slanted Wavy Banner */}
        <div className="absolute -bottom-12 -left-[5%] w-[110%] h-24 bg-[#068783] -rotate-3 z-30 shadow-xl overflow-hidden flex items-center">
          <div className="flex text-white font-medium text-xl md:text-2xl whitespace-nowrap gap-6 px-12 tracking-wide w-full justify-between opacity-90">
            <span>Passionate • Trusted • Experienced • Caring • Reliable • Skilled • Friend • Support</span>
          </div>
        </div>
      </section>

      {/* 2. Who We Are Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Image */}
        <FadeIn direction="up" delay={0.1} className="relative rounded-3xl overflow-hidden h-[500px] bg-gray-100 shadow-md border-8 border-gray-50">
          <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop" alt="Doctor and Patient" className="w-full h-full object-cover" />

          {/* Badge overlays on the image */}
          <div className="absolute bottom-6 left-6 bg-[#068783] text-white p-4 pr-12 rounded-full flex items-center gap-3">
            <div className="bg-white/20 p-2 border border-white/50 rounded-full">
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
            </div>
            <span className="font-semibold">Best Medical & Health Care</span>
          </div>
        </FadeIn>

        {/* Right Side: Content */}
        <FadeIn direction="up" delay={0.2} className="space-y-8">
          <div>
            <span className="text-orange-500 font-medium text-sm flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
              Who We Are — Nurexa
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 leading-tight">
              Our team Has Only One Mission <span className="text-[#068783]">that is to Provide</span> the Best Care
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-8 py-4 border-b border-gray-100 pb-8">
            <div>
              <h3 className="text-5xl font-bold text-gray-900 mb-2">140<span className="text-[#068783]">+</span></h3>
              <p className="text-gray-500 font-medium">Clients Awards Worldwide</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-gray-900 mb-2">8K</h3>
              <p className="text-gray-500 font-medium">Project Completed</p>
            </div>
          </div>

          <div className="bg-[#f9fbfd] border border-gray-100 rounded-3xl p-8 space-y-4 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#068783]/5 rounded-bl-full -z-10"></div>
            <h4 className="text-orange-500 font-medium flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
              Our Mission
            </h4>
            <p className="text-gray-600 leading-relaxed text-sm">
              We are committed to delivering exceptional healthcare with compassion, integrity, and expertise. Our team of experienced medical works tirelessly to provide Personalize plans using the latest technology in a safe.
            </p>
            <button className="bg-[#0b1f2e] text-white px-6 py-2.5 rounded-xl font-medium text-sm hover:bg-[#1a364d] transition-colors mt-2">
              Explore More
            </button>
          </div>
        </FadeIn>
      </section>

      {/* 3. Services Section */}
      <section className="bg-[#fcfdfd] py-24 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <FadeIn direction="up" className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <span className="text-orange-500 font-medium text-sm flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                Key Features
              </span>
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                Expert Care, Effortlessly Delivered
              </h2>
            </div>
            <Link href="/triage">
              <button className="bg-[#068783] text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-[#05706c] transition-colors whitespace-nowrap">
                See All Services
              </button>
            </Link>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Service Card 1 */}
            <FadeIn direction="up" delay={0.1} className="bg-white p-4 pb-6 rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-50 group hover:-translate-y-1 transition-transform cursor-pointer">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-gray-100 relative items-center justify-center flex">
                <Activity className="w-16 h-16 text-[#068783] group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="px-2 flex justify-between items-center">
                <span className="font-bold text-lg text-gray-900">Fast Patient Registration</span>
                <div className="w-8 h-8 rounded-full bg-[#e8f3f2] flex items-center justify-center text-[#068783] group-hover:bg-[#068783] group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </FadeIn>

            {/* Service Card 2 */}
            <FadeIn direction="up" delay={0.2} className="bg-white p-4 pb-6 rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-50 group hover:-translate-y-1 transition-transform cursor-pointer">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-gray-100 relative items-center justify-center flex">
                <img src="https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?q=80&w=600&auto=format&fit=crop" alt="Neurology" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 absolute inset-0 opacity-20" />
                <Star className="w-16 h-16 text-[#068783] group-hover:scale-110 transition-transform duration-500 relative z-10" />
              </div>
              <div className="px-2">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Smart Scheduling</h3>
                <p className="text-gray-500 text-sm mb-4">Book and manage appointments easily.</p>
                <div className="flex justify-between items-center mt-2">
                  <div className="w-8 h-8 rounded-full bg-[#068783] flex items-center justify-center text-white">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Service Card 3 */}
            <FadeIn direction="up" delay={0.3} className="bg-white p-4 pb-6 rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-50 group hover:-translate-y-1 transition-transform cursor-pointer">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-gray-100 relative items-center justify-center flex">
                <Brain className="w-16 h-16 text-[#068783] group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="px-2 flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="font-bold text-lg text-gray-900">AI-Assisted Triage</span>
                  <span className="text-gray-500 text-sm">— Smart Diagnosis</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#e8f3f2] flex items-center justify-center text-[#068783] group-hover:bg-[#068783] group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 4. Areas of Expertise (Tabbed Section) */}
      <section className="py-24 max-w-5xl mx-auto px-4 text-center">
        <span className="text-orange-500 font-medium text-sm inline-flex items-center gap-2 mb-4 justify-center">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
          Our Expertise
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Areas of Expertise</h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-10 text-sm leading-relaxed">
          Our team of highly skilled specialists brings years of experience across a wide range of medical fields. From diagnostics to advanced treatment.
        </p>
        <button className="bg-[#0b1f2e] text-white px-6 py-2.5 rounded-xl font-medium text-sm hover:bg-[#1a364d] transition-colors mb-16">
          More Expertise
        </button>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button className="px-6 py-2 rounded-full text-sm font-medium text-gray-500 hover:bg-gray-100 transition-colors">Cardiology</button>
          <button className="px-6 py-2 rounded-full text-sm font-medium bg-[#068783] text-white shadow-md">Orthopedics</button>
          <button className="px-6 py-2 rounded-full text-sm font-medium text-gray-500 hover:bg-gray-100 transition-colors">Dermatology</button>
          <button className="px-6 py-2 rounded-full text-sm font-medium text-gray-500 hover:bg-gray-100 transition-colors">Urology</button>
          <button className="px-6 py-2 rounded-full text-sm font-medium text-gray-500 hover:bg-gray-100 transition-colors">Gastroenterology</button>
        </div>

        {/* Doctor Profile Card inside Tab */}
        <div className="max-w-3xl mx-auto bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-gray-100 text-left flex flex-col md:flex-row gap-10 items-center">
          <div className="w-48 h-48 rounded-full overflow-hidden bg-[#f1f6f9] border-[6px] border-[#e8f3f2] flex-shrink-0">
            <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop" alt="Dr. Emily Haden" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col flex-1 pl-4 md:pl-0 border-l border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-2xl font-bold text-gray-900">Emily Haden</h3>
              <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-3 h-3 text-white" />
              </div>
            </div>
            <p className="text-[#068783] font-medium text-sm mb-4">Surgery Expert</p>

            <div className="flex items-center gap-1.5 text-xs text-yellow-500 mb-6">
              <Star className="w-3 h-3 fill-current" />
              <span className="font-semibold text-gray-800">5.0</span>
              <span className="text-gray-400">· 2021 reviews</span>
            </div>

            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              <span className="font-bold text-gray-800">Dr. Jay to Save the Day!</span> Hello, I&apos;m Jay, I am a Surgery Expert and I&apos;ve been teaching English for years. I help students become confident speaking and using English in front. <span className="text-gray-800 font-semibold cursor-pointer">See More</span>
            </p>

            <div className="mb-8">
              <p className="font-semibold text-gray-900 text-xs mb-3">Highlights</p>
              <div className="flex gap-4">
                <span className="bg-gray-50 px-3 py-1.5 border border-gray-100 rounded-md text-xs text-gray-600 flex items-center gap-1.5">
                  <Activity className="w-3 h-3 text-gray-400" />
                  1000+ Chats
                </span>
                <span className="bg-gray-50 px-3 py-1.5 border border-gray-100 rounded-md text-xs text-gray-600 flex items-center gap-1.5">
                  <Star className="w-3 h-3 text-gray-400" />
                  Certified Doctors
                </span>
              </div>
            </div>

            <div className="flex gap-4">
              <Link href="/schedule">
                <button className="bg-[#068783] text-white px-6 py-2.5 rounded-xl font-medium text-sm hover:bg-[#05706c] transition-colors">
                  Appointment
                </button>
              </Link>
              <button className="bg-white border border-gray-200 text-gray-700 px-6 py-2.5 rounded-xl font-medium text-sm hover:bg-gray-50 transition-colors">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us Section */}
      <section className="bg-[#fcfdfd] py-24 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-orange-500 font-medium text-sm flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
              Why Choose Us
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              We&apos;re Here for One Reason: To Keep You Healthy and Safe
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-lg pb-4">
              Our team of highly skilled specialists brings years of experience across a wide range of medical fields. From diagnostics to advanced treatment,
            </p>
            <button className="bg-[#0b1f2e] text-white px-6 py-2.5 rounded-xl font-medium text-sm hover:bg-[#1a364d] transition-colors">
              Explore More
            </button>
          </div>

          <div className="relative">
            <div className="bg-[#eaf4f9] rounded-3xl overflow-hidden h-[450px] flex items-center justify-center p-8">
              <img src="https://images.unsplash.com/photo-1550831107-1553da8c8464?w=600&h=600&fit=crop" alt="Smiling Doctor" className="w-full h-full object-cover rounded-2xl shadow-sm" />
            </div>
          </div>
        </div>

        {/* Stats Section below */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#f1f6f9] rounded-3xl p-8 flex flex-col justify-between">
            <span className="text-gray-500 text-xs font-semibold mb-6 block leading-relaxed max-w-[150px]"><span className="text-[#068783]">Patient Satisfaction</span> Rate Base on Follow-Up Surveys</span>
            <div>
              <h3 className="text-5xl font-bold text-gray-900 mb-2">120k+</h3>
              <p className="text-gray-400 text-xs leading-relaxed max-w-[200px]">Designed to help you track and understand your health in real time. Whether it&apos;s monitoring vital signs, activity levels.</p>
            </div>
          </div>

          <div className="bg-[#068783] rounded-3xl p-8 flex flex-col justify-between shadow-xl">
            <span className="text-white/80 text-xs font-semibold mb-6 block leading-relaxed max-w-[150px]"><span className="text-white">Patient Satisfaction</span> Rate Base on Follow-Up Surveys</span>
            <div>
              <h3 className="text-5xl font-bold text-white mb-2">94%</h3>
              <p className="text-white/70 text-xs leading-relaxed max-w-[200px]">Designed to help you track and understand your health in real time. Whether it&apos;s monitoring vital signs, activity levels.</p>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-3xl p-8 flex flex-col justify-between shadow-sm">
            <span className="text-gray-500 text-xs font-semibold mb-6 block leading-relaxed max-w-[150px]"><span className="text-[#068783]">Patient Satisfaction</span> Rate Base on Follow-Up Surveys</span>
            <div>
              <h3 className="text-5xl font-bold text-gray-900 mb-2">25k+</h3>
              <p className="text-gray-400 text-xs leading-relaxed max-w-[200px]">Designed to help you track and understand your health in real time. Whether it&apos;s monitoring vital signs, activity levels.</p>
            </div>
          </div>
        </div>

        {/* Testimonial Section Bottom */}
        <div className="max-w-4xl mx-auto text-center mt-32 px-4 shadow-sm border border-gray-100 rounded-3xl p-12 bg-white mb-12">
          <span className="text-orange-500 font-medium text-xs tracking-widest uppercase inline-block mb-4">Testimonial</span>
          <h2 className="text-3xl font-bold text-gray-900">What Our Patients Say About<br />their Care Experience</h2>
        </div>
      </section>
    </div>
  );
}
