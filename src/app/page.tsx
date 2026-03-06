import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Link from 'next/link';
import { UserPlus, Calendar, Activity, Zap, Clock, Brain } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto space-y-12 pb-12">
      {/* Hero Section */}
      <section className="text-center space-y-6 py-12 px-4 rounded-3xl bg-gradient-to-b from-primary/5 to-transparent border border-primary/10 mt-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-900/[0.04] dark:border-b dark:border-slate-100/5 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
        <div className="relative z-10">
          <Badge>AI-Powered Prototype</Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mt-6 mb-4">
            AI-Enabled Hospital <span className="text-primary">Management</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Register patients, schedule appointments, and leverage our advanced AI triage assistance to optimize healthcare delivery.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/register">
              <Button className="w-full sm:w-auto flex items-center gap-2 text-lg px-8 py-3">
                <UserPlus className="w-5 h-5" />
                Register Patient
              </Button>
            </Link>
            <Link href="/schedule">
              <Button variant="secondary" className="w-full sm:w-auto flex items-center gap-2 text-lg px-8 py-3">
                <Calendar className="w-5 h-5" />
                Schedule
              </Button>
            </Link>
            <Link href="/triage">
              <Button variant="secondary" className="w-full sm:w-auto flex items-center gap-2 text-lg px-8 py-3">
                <Activity className="w-5 h-5 text-primary" />
                AI Triage
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="space-y-6 px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Key Features</h2>
          <p className="text-gray-500 mt-2">Designed for simple, fast, and smart hospital workflows.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Card className="flex flex-col items-center text-center space-y-4 hover:shadow-md transition-shadow group">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
              <Zap className="w-8 h-8 text-primary group-hover:text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Fast Registration</h3>
            <p className="text-gray-600 leading-relaxed">
              Quickly onboard new patients with intelligent duplicate detection and minimal clicks.
            </p>
          </Card>

          <Card className="flex flex-col items-center text-center space-y-4 hover:shadow-md transition-shadow group">
            <div className="w-16 h-16 rounded-2xl bg-success/10 flex items-center justify-center group-hover:bg-success group-hover:text-white transition-colors">
              <Clock className="w-8 h-8 text-success group-hover:text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Smart Scheduling</h3>
            <p className="text-gray-600 leading-relaxed">
              Find the right provider and available time slots instantly based on medical specialty.
            </p>
          </Card>

          <Card className="flex flex-col items-center text-center space-y-4 hover:shadow-md transition-shadow group">
            <div className="w-16 h-16 rounded-2xl bg-warning/10 flex items-center justify-center group-hover:bg-warning group-hover:text-white transition-colors">
              <Brain className="w-8 h-8 text-warning group-hover:text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">AI-Assisted Triage</h3>
            <p className="text-gray-600 leading-relaxed">
              Evaluate symptoms, predict urgency levels, and surface differential diagnoses rapidly.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
}

// Temporary inline Badge for Hero until exported properly
function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
      {children}
    </span>
  );
}
