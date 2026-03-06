'use client';

import { useAppointments } from '../../hooks/useAppointments';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/Table';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import {
  Calendar,
  Clock,
  LayoutDashboard,
  ChevronRight,
  CheckCircle2,
  Activity,
  Brain,
  Zap,
  Shield,
  Search,
  ArrowUpRight,
  TrendingUp,
  UserCheck
} from 'lucide-react';
import Button from '../../components/ui/Button';
import FadeIn from '../../components/ui/FadeIn';

export default function ClinicianPage() {
  const { data: appointments, isLoading, error } = useAppointments();

  const getStatusBadge = (status: string) => {
    switch (status?.toLowerCase()) {
      case 'completed': return 'success';
      case 'scheduled': return 'primary';
      case 'cancelled': return 'danger';
      default: return 'gray';
    }
  };

  return (
    <FadeIn className="space-y-10 max-w-7xl mx-auto px-4 py-6">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-primary font-bold text-sm tracking-wider uppercase mb-2">
            <Zap className="w-4 h-4" />
            MediAI Hub • Clinical Intelligence
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 flex items-center gap-3">
            Physician Command Hub
          </h1>
          <p className="text-slate-500 mt-2 text-lg max-w-2xl">
            Real-time visual intelligence for patient flow and clinical decision support.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="secondary" className="bg-white hover:bg-slate-50 border-slate-200">
            <Search className="w-4 h-4 mr-2" />
            Global Registry
          </Button>
          <Button className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
            <UserCheck className="w-4 h-4 mr-2" />
            Patient Enrollment
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6 bg-gradient-to-br from-indigo-50 to-white border-indigo-100 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
          <div className="absolute -right-4 -top-4 opacity-5 transition-transform group-hover:scale-125 duration-500">
            <Calendar className="w-32 h-32 text-indigo-900" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-white p-2 rounded-lg shadow-sm">
                <Calendar className="w-5 h-5 text-indigo-600" />
              </div>
              <Badge variant="primary" className="bg-indigo-100 text-indigo-700 border-indigo-200">Today</Badge>
            </div>
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-tight">Active Load</h3>
            <p className="text-4xl font-bold text-slate-900 mt-1">{appointments?.length || 0}</p>
            <div className="flex items-center gap-1 text-xs text-indigo-600 mt-2 font-medium">
              <TrendingUp className="w-3 h-3" />
              +12% from yesterday
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-amber-50 to-white border-amber-100 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
          <div className="absolute -right-4 -top-4 opacity-5 transition-transform group-hover:scale-125 duration-500">
            <Activity className="w-32 h-32 text-amber-900" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-white p-2 rounded-lg shadow-sm">
                <Brain className="w-5 h-5 text-amber-600" />
              </div>
              <Badge variant="warning" className="bg-amber-100 text-amber-700 border-amber-200">Critical</Badge>
            </div>
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-tight">Neural Triage</h3>
            <p className="text-4xl font-bold text-slate-900 mt-1">4</p>
            <div className="flex items-center gap-1 text-xs text-amber-600 mt-2 font-medium">
              Avg complexity: 8.4/10
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-emerald-50 to-white border-emerald-100 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
          <div className="absolute -right-4 -top-4 opacity-5 transition-transform group-hover:scale-125 duration-500">
            <CheckCircle2 className="w-32 h-32 text-emerald-900" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-white p-2 rounded-lg shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              </div>
              <Badge variant="success" className="bg-emerald-100 text-emerald-700 border-emerald-200">Done</Badge>
            </div>
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-tight">Discharge Goal</h3>
            <p className="text-4xl font-bold text-slate-900 mt-1">
              {appointments?.filter((a: any) => a.status === 'completed').length || 0}
            </p>
            <div className="flex items-center gap-1 text-xs text-emerald-600 mt-2 font-medium">
              92% completion rate
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-slate-100 to-white border-slate-200 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
          <div className="absolute -right-4 -top-4 opacity-5 transition-transform group-hover:scale-125 duration-500">
            <Shield className="w-32 h-32 text-slate-900" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-white p-2 rounded-lg shadow-sm">
                <Shield className="w-5 h-5 text-slate-600" />
              </div>
              <Badge className="bg-slate-100 text-slate-700 border-slate-200">HIPAA</Badge>
            </div>
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-tight">Security Protocol</h3>
            <p className="text-2xl font-bold text-slate-900 mt-1">Active</p>
            <div className="text-xs text-slate-500 mt-2 font-medium">
              All nodes synchronized
            </div>
          </div>
        </Card>
      </div>

      {/* Main Queue Section */}
      <Card className="p-0 overflow-hidden border-slate-200 shadow-2xl mt-8 bg-white/70 backdrop-blur-xl">
        <div className="p-8 border-b border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <LayoutDashboard className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Neural Triage Queue</h2>
              <p className="text-slate-500 text-sm mt-1">AI-prioritized patient flow based on clinical urgency indices.</p>
            </div>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full border border-slate-100 text-sm font-medium text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer group">
            Analysis Timeline <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>

        {isLoading && (
          <div className="py-24 flex flex-col justify-center items-center gap-6">
            <div className="relative">
              <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
              <Brain className="w-5 h-5 text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
            </div>
            <p className="text-sm text-slate-500 font-medium tracking-wide">Synchronizing Clinical Data Infrastructure...</p>
          </div>
        )}

        {error && (
          <div className="p-8">
            <div className="bg-rose-50 border border-rose-100 p-6 rounded-2xl flex items-center gap-4">
              <div className="bg-rose-500 text-white p-2 rounded-lg">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-rose-900">Communication Protocol Error</h3>
                <p className="text-rose-700 text-sm">Synchronous data fetching failed. Please check network integrity or authorization token.</p>
              </div>
            </div>
          </div>
        )}

        {!isLoading && appointments && appointments.length > 0 && (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-slate-50/50 hover:bg-slate-50/50">
                  <TableHead className="py-5 font-bold text-slate-800 tracking-wide uppercase text-xs">Patient & Bio-ID</TableHead>
                  <TableHead className="py-5 font-bold text-slate-800 tracking-wide uppercase text-xs">Primary Care</TableHead>
                  <TableHead className="py-5 font-bold text-slate-800 tracking-wide uppercase text-xs">Schedule Metric</TableHead>
                  <TableHead className="py-5 font-bold text-slate-800 tracking-wide uppercase text-xs">Status</TableHead>
                  <TableHead className="py-5 font-bold text-slate-800 tracking-wide uppercase text-xs text-center">Neural Priority</TableHead>
                  <TableHead className="py-5 text-right font-bold text-slate-800 tracking-wide uppercase text-xs">Protocol</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {appointments.map((appt: any, idx: number) => {
                  const date = new Date(appt.time || appt.date);
                  const patientName = appt.patient || appt.patientId || 'Unknown Patient';
                  const providerName = appt.provider || appt.providerId || 'Unknown Provider';

                  // Defensive coding for charAt
                  const providerInitial = (providerName && typeof providerName === 'string' && providerName !== 'Unknown Provider')
                    ? providerName.charAt(0).toUpperCase()
                    : '?';

                  return (
                    <TableRow key={idx} className="group hover:bg-slate-50/80 transition-colors border-slate-100">
                      <TableCell className="py-5">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center font-bold text-slate-500 border border-slate-200">
                            ID
                          </div>
                          <div>
                            <div className="font-bold text-slate-900 text-base">{patientName}</div>
                            <div className="text-xs text-slate-400 font-medium">REF-0923{idx}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="py-5">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold border border-primary/20 shadow-inner">
                            {providerInitial}
                          </div>
                          <span className="font-semibold text-slate-700">{providerName}</span>
                        </div>
                      </TableCell>
                      <TableCell className="py-5">
                        <div className="flex flex-col gap-1.5">
                          <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                            <Clock className="w-4 h-4 text-primary" />
                            {appt.time ? date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '09:00 AM'}
                          </div>
                          <div className="text-xs text-slate-400 font-medium flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {date.toLocaleDateString()}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="py-5 text-center">
                        <Badge variant={getStatusBadge(appt.status)} className="capitalize px-3 py-1 font-bold rounded-lg border-2">
                          {appt.status || 'Active'}
                        </Badge>
                      </TableCell>
                      <TableCell className="py-5 text-center">
                        <Badge
                          variant={appt.urgency?.toLowerCase() === 'high' ? 'danger' : appt.urgency?.toLowerCase() === 'medium' ? 'warning' : 'success'}
                          className="px-4 py-1.5 font-black uppercase text-[10px] tracking-widest shadow-sm"
                        >
                          {appt.urgency || 'Normal'}
                        </Badge>
                      </TableCell>
                      <TableCell className="py-5 text-right flex justify-end">
                        <Button
                          variant="secondary"
                          size="sm"
                          className="bg-slate-50 hover:bg-primary hover:text-white border-slate-200 transition-all group-hover:shadow-md"
                        >
                          Review Bio-Log
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        )}

        {!isLoading && appointments && appointments.length === 0 && (
          <div className="py-24 text-center">
            <div className="bg-slate-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-xl">
              <Calendar className="w-10 h-10 text-slate-200" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Queue Synchronized</h3>
            <p className="text-slate-500 mt-2 max-w-sm mx-auto">No pending appointments detected on the current clinical node. New triage pulses will appear here automatically.</p>
            <Button className="mt-8 bg-white text-slate-900 border border-slate-200 hover:bg-slate-50">Manual Node Sync</Button>
          </div>
        )}
      </Card>
    </FadeIn>
  );
}
