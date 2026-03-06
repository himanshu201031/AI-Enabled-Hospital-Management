import Link from 'next/link';
import { ArrowUpRight, Plus, Star, HeartPulse, Brain, Eye, Activity, CheckCircle2, ShieldCheck, Zap, Users, Globe, Terminal, Shield, Workflow } from 'lucide-react';
import FadeIn from '../components/ui/FadeIn';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white overflow-hidden pb-20 selection:bg-primary/20">

      {/* 1. Hero Section - Engineered for Impact */}
      <section className="relative bg-gradient-to-b from-[#f1f6f9] to-white pt-16 pb-48 px-4 sm:px-8 xl:px-0">
        <div className="absolute top-0 left-0 w-full h-[600px] overflow-hidden pointer-events-none opacity-40">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 blur-[140px] rounded-full" />
          <div className="absolute top-48 -right-24 w-80 h-80 bg-orange-400/10 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

          {/* Left Content */}
          <FadeIn direction="right" delay={0.1} className="space-y-10 text-left">
            {/* Recognition Badge */}
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-md rounded-2xl p-2 pr-6 shadow-xl shadow-gray-200/50 border border-white/60">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <img
                    key={i}
                    src={`https://images.unsplash.com/photo-${i === 1 ? '1534528741775-53994a69daeb' : i === 2 ? '1506794778202-cad84cf45f1d' : '1544005313-94ddf0286df2'}?w=100&h=100&fit=crop&auto=format`}
                    alt="Clinician"
                    className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm bg-gray-100"
                  />
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex text-yellow-500 gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                </div>
                <span className="text-[11px] font-black text-gray-900 uppercase tracking-tight">Deploying at 140+ Global Hospitals</span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-[3.5rem] leading-[1] md:text-[5.5rem] font-black text-gray-900 tracking-tighter">
              Intelligent <br />
              <span className="text-primary italic">Clinical Flow.</span>
            </h1>

            {/* Description */}
            <p className="text-gray-600 max-w-lg leading-relaxed text-xl font-medium">
              Pearl Thoughts is the architecture of modern medicine. We merge <span className="text-primary font-bold">Neural Triage</span> with automated registration to eliminate clinician burnout.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-5">
              <Link href="/register">
                <button className="bg-primary hover:bg-[#05706c] text-white px-10 py-5 rounded-2xl font-bold transition-all transform hover:scale-[1.03] shadow-2xl shadow-primary/30 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 opacity-70" />
                  Register Now
                </button>
              </Link>
              <Link href="/triage">
                <button className="bg-gray-900 hover:bg-black text-white px-10 py-5 rounded-2xl font-bold transition-all transform hover:scale-[1.03] shadow-2xl shadow-black/20 group">
                  Start AI Assessment
                  <ArrowUpRight className="w-5 h-5 inline ml-2 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </button>
              </Link>
            </div>
          </FadeIn>

          {/* Right Content - Visual Narrative */}
          <FadeIn direction="left" delay={0.2} className="relative hidden lg:flex justify-end pr-8">
            <div className="relative w-full max-w-[440px] aspect-[4/5] rounded-[4rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] z-10 border-[12px] border-white ring-1 ring-gray-100">
              <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop" alt="The Future of Medicine" className="w-full h-full object-cover scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            </div>

            {/* Floating Intelligence Card */}
            <div className="absolute -left-16 bottom-24 bg-white/95 backdrop-blur-xl p-8 rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] z-20 flex flex-col gap-4 w-64 border border-white/60">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Activity className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Real-time</p>
                  <p className="font-bold text-gray-900">Vitals Analysis</p>
                </div>
              </div>
              <div className="h-[2px] w-full bg-gray-50" />
              <div className="flex items-baseline justify-between">
                <span className="text-4xl font-black text-gray-900 tracking-tighter">99.9%</span>
                <span className="text-[10px] text-primary font-black mb-1 uppercase tracking-widest">Confidence</span>
              </div>
            </div>

            {/* Accreditation Stamp */}
            <div className="absolute -top-6 -right-12 z-20 w-44 h-44 bg-primary rotate-12 rounded-[3.5rem] flex flex-col items-center justify-center shadow-2xl border-8 border-white p-6 text-center transform hover:rotate-0 transition-transform cursor-pointer group">
              <ShieldCheck className="w-10 h-10 text-white mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-[11px] font-black text-white leading-tight uppercase tracking-widest">Validated by <br /> Global Health Org</span>
            </div>
          </FadeIn>
        </div>

        {/* Marquee Ticker */}
        <div className="absolute -bottom-8 left-0 w-full overflow-hidden z-30 pointer-events-none">
          <div className="bg-primary/95 backdrop-blur-sm py-5 -rotate-2 scale-110 shadow-2xl border-y border-white/10">
            <div className="flex whitespace-nowrap animate-marquee">
              {[...Array(12)].map((_, i) => (
                <span key={i} className="text-white font-black text-2xl px-12 flex items-center gap-6 italic tracking-tighter uppercase">
                  <Terminal className="w-6 h-6 text-white/40 not-italic" />
                  Neural Triage v4.0 Active • HIPAA Compliant Infrastructure • End-to-End Encryption • Biofeedback Integration
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Precision Capabilities Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mt-64 space-y-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <FadeIn direction="right" delay={0.1} className="relative">
            <div className="rounded-[4rem] overflow-hidden h-[650px] shadow-[0_50px_80px_-20px_rgba(0,0,0,0.2)] border-[16px] border-gray-50 relative group">
              <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop" alt="Clinical Precision" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="absolute -bottom-16 -right-12 bg-[#0b1f2e] p-12 rounded-[3.5rem] shadow-2xl hidden md:block max-w-sm border border-white/10">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center ring-1 ring-primary/50">
                  <Brain className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-black text-primary/80 uppercase tracking-widest mb-1">Processing Speed</p>
                  <p className="text-xl font-bold text-white tracking-tight">0.14s Avg Latency</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed font-medium">Our proprietary NeuralEngine™ optimizes triage workflows by prioritizing critical cases automatically, reducing wait times by 68%.</p>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.2} className="space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="w-12 h-[3px] bg-primary rounded-full"></span>
                <span className="text-primary font-black text-sm uppercase tracking-[0.4em]">Engineered for Excellence</span>
              </div>
              <h2 className="text-5xl lg:text-7xl font-black text-gray-900 leading-[1] tracking-tighter">
                Precision <br />
                <span className="text-primary italic">At Scale.</span>
              </h2>
              <p className="text-gray-600 text-xl leading-relaxed font-medium max-w-xl">
                Pearl Thoughts isn&apos;t just a management system; it&apos;s a cognitive layer for your hospital. We empower clinicians to focus on care while our AI handles the orchestration of data and urgency.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 py-8 border-y border-gray-100">
              {[
                { val: '25k+', label: 'Monthly Triage' },
                { val: '140ms', label: 'Avg API Speed' },
                { val: 'Zero', label: 'Data Leakage' },
                { val: '99.8%', label: 'Uptime SLA' }
              ].map((stat, i) => (
                <div key={i} className="space-y-2">
                  <h3 className="text-4xl font-black text-gray-900 tracking-tighter">{stat.val}</h3>
                  <p className="text-gray-400 font-bold text-[11px] uppercase tracking-[0.2em]">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-6">
              <Link href="/clinician" className="group">
                <button className="flex items-center gap-4 bg-gray-900 text-white px-10 py-5 rounded-[2rem] font-bold hover:bg-primary transition-all shadow-xl shadow-black/10">
                  Dashboard Demo
                  <Workflow className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
                </button>
              </Link>
              <Link href="/schedule" className="text-gray-900 font-bold hover:text-primary transition-colors flex items-center gap-2 group">
                Schedule Audit
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 3. The Core Ecosystem */}
      <section className="bg-gray-950 py-48 mt-48 px-4 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/3" />

        <div className="max-w-7xl mx-auto space-y-24 relative z-10">
          <FadeIn direction="up" className="text-center max-w-3xl mx-auto space-y-6">
            <span className="text-primary font-black text-sm uppercase tracking-[0.4em]">The Core Ecosystem</span>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
              Integrated Clinical <br /> Intelligence.
            </h2>
            <p className="text-gray-400 text-xl font-medium">Modular systems designed to work in perfect harmony across departments.</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: Shield,
                title: 'Data Sovereignty',
                desc: 'Military-grade encryption for patient records with decentralized storage options for maximum resilience.',
                color: 'bg-blue-500/10 text-blue-400'
              },
              {
                icon: Brain,
                title: 'Decision Engine',
                desc: 'AI-assisted diagnosis pathways that provide evidence-based suggestions to medical staff in real-time.',
                color: 'bg-primary/10 text-primary'
              },
              {
                icon: Users,
                title: 'Patient Portal',
                desc: 'Frictionless registration and history management that puts the patient in control of their medical identity.',
                color: 'bg-orange-500/10 text-orange-400'
              }
            ].map((svc, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.1} className="bg-white/5 backdrop-blur-sm p-12 rounded-[4rem] border border-white/10 hover:border-primary/50 transition-all group flex flex-col justify-between aspect-square">
                <div className="space-y-8">
                  <div className={`w-20 h-20 rounded-[2rem] ${svc.color} flex items-center justify-center`}>
                    <svc.icon className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-white mb-6 group-hover:text-primary transition-colors">{svc.title}</h3>
                    <p className="text-gray-400 text-lg leading-relaxed font-medium">{svc.desc}</p>
                  </div>
                </div>
                <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-primary group-hover:border-primary transition-all">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Global Footprint - Expanded Content */}
      <section className="py-48 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <FadeIn direction="right" className="space-y-12">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-8xl font-black text-gray-900 leading-[0.9] tracking-tighter">
                Smarter <span className="text-primary italic">Future</span> <br /> Global Care.
              </h2>
              <p className="text-gray-500 text-xl leading-relaxed font-medium max-w-xl">
                Our infrastructure unites the world&apos;s leading clinicians under a singular, secure AI framework. We are standardizing excellence in 14 countries and counting.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: Globe, val: '14 Nations', label: 'Active Deployment' },
                { icon: Users, val: '1.2M+', label: 'Patient Interactions' },
                { icon: Zap, val: '85%', label: 'Efficiency Gain' },
                { icon: Star, val: '4.9/5', label: 'Clinician Rating' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 p-8 rounded-[2.5rem] bg-gray-50 border border-gray-100 group hover:bg-white hover:shadow-2xl hover:-translate-y-1 transition-all">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center ring-1 ring-gray-100 group-hover:ring-primary/30">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-3xl font-black text-gray-900 tracking-tighter">{item.val}</h4>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn direction="left" className="relative group">
            <div className="bg-gray-900 rounded-[5rem] p-16 aspect-[9/10] flex flex-col justify-center items-center text-center shadow-[0_60px_100px_-20px_rgba(0,0,0,0.4)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/20 blur-[120px]" />
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-orange-500/10 blur-[100px]" />

              <div className="relative z-10 space-y-10">
                <div className="flex justify-center flex-col items-center gap-4">
                  <div className="w-24 h-24 rounded-full border-4 border-primary p-1">
                    <img src="https://images.unsplash.com/photo-1559839734-2b71f1536783?w=200&h=200&fit=crop" alt="Dr Scott" className="rounded-full w-full h-full object-cover" />
                  </div>
                  <div className="flex text-primary gap-1">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
                  </div>
                </div>
                <h3 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tighter italic">
                  &quot;The most significant shift in clinical workflow I&apos;ve seen in my 20-year career.&quot;
                </h3>
                <div className="space-y-1">
                  <p className="text-primary font-black text-xl tracking-tight">Dr. Jonathan Vance</p>
                  <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Director of Innovation, St. Pierre General</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Final Tactical CTA */}
      <section className="max-w-7xl mx-auto px-4 mb-20 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 blur-[150px] -z-10" />
        <FadeIn direction="up" className="bg-gray-950 p-16 md:p-32 rounded-[5rem] text-center space-y-12 relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/5">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[150px] -translate-y-1/3 translate-x-1/3" />

          <div className="space-y-6 relative z-10">
            <span className="text-primary font-black text-sm uppercase tracking-[0.5em]">Join the Future</span>
            <h2 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter italic">
              Ready to <span className="text-primary">Evolve</span> <br /> Your Practice?
            </h2>
          </div>

          <p className="text-gray-400 text-xl font-medium max-w-2xl mx-auto relative z-10 leading-relaxed">
            Deployment takes less than 48 hours for standard clinical environments. Secure your spot in the Pearl Thoughts network today.
          </p>

          <div className="flex flex-wrap justify-center gap-6 relative z-10 pt-4">
            <Link href="/register">
              <button className="bg-primary text-white px-12 py-6 rounded-3xl font-black text-lg hover:bg-[#05706c] hover:scale-105 transition-all shadow-2xl shadow-primary/20 italic">
                Get Started
              </button>
            </Link>
            <Link href="/schedule">
              <button className="bg-white/10 backdrop-blur-md text-white px-12 py-6 rounded-3xl font-black text-lg border border-white/20 hover:bg-white/20 hover:scale-105 transition-all shadow-2xl shadow-black/20">
                Request Audit
              </button>
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
