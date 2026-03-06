'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Calendar,
  User,
  UserCircle,
  Activity,
  Clock,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Stethoscope,
  HeartPulse,
  ChevronRight
} from 'lucide-react';
import Card from '../../components/ui/Card';
import Input from '../../components/ui/Input';
import Select from '../../components/ui/Select';
import Button from '../../components/ui/Button';
import Alert from '../../components/ui/Alert';
import { useProviders } from '../../hooks/useProviders';
import { usePatients } from '../../hooks/usePatients';
import { useCreateAppointment } from '../../hooks/useAppointments';
import FadeIn from '../../components/ui/FadeIn';

const scheduleSchema = z.object({
  patientId: z.string().nonempty("Please select a patient identity"),
  providerId: z.string().nonempty("Please select a clinical provider"),
  date: z.string().nonempty("Protocol date is required"),
  time: z.string().nonempty("Temporal allocation is required"),
  reason: z.string().min(5, "Clinical justification must be detailed (min 5 chars)"),
});

type ScheduleFormValues = z.infer<typeof scheduleSchema>;

export default function SchedulePage() {
  const { data: providers, isLoading: isLoadingProviders } = useProviders();
  const { data: patients, isLoading: isLoadingPatients } = usePatients();
  const { mutate: createAppointment, isPending } = useCreateAppointment();
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ScheduleFormValues>({
    resolver: zodResolver(scheduleSchema),
  });

  const onSubmit = (data: ScheduleFormValues) => {
    setSuccessMessage('');
    setErrorMessage('');
    createAppointment(data, {
      onSuccess: () => {
        setSuccessMessage('Appointment Synchronized Successfully.');
        reset();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
      onError: (error: any) => {
        setErrorMessage(error.message || 'Synchronization Conflict. Please verify node availability.');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
    });
  };

  return (
    <FadeIn className="max-w-4xl mx-auto space-y-10 px-4 py-8">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-xs font-bold tracking-widest uppercase border border-primary/20">
          <Sparkles className="w-3 h-3" />
          Protocol • Sched-X
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900">
          Temporal Allocation <span className="text-primary italic">Protocol</span>
        </h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
          Initialize a new clinical encounter by synchronizing patient biometric data with provider availability buffers.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 space-y-6">
          {successMessage && (
            <Alert type="success" className="animate-in fade-in slide-in-from-top-4 duration-500">
              {successMessage}
            </Alert>
          )}

          {errorMessage && (
            <Alert type="error" className="animate-in fade-in slide-in-from-top-4 duration-500">
              {errorMessage}
            </Alert>
          )}

          <Card className="p-8 md:p-10 border-slate-200 shadow-2xl shadow-slate-200/50 bg-white/80 backdrop-blur-md relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary via-indigo-500 to-purple-500"></div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Patient Selection */}
                <div className="space-y-3">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <User className="w-3.5 h-3.5 text-primary" /> Patient Identity
                  </label>
                  <div className="relative group/field">
                    <Select
                      {...register('patientId')}
                      className={`h-14 pl-4 rounded-2xl border-2 transition-all duration-300 ${errors.patientId
                        ? 'border-rose-200 bg-rose-50/30'
                        : 'border-slate-100 bg-slate-50/50 hover:bg-white hover:border-primary/30 focus:border-primary focus:ring-4 focus:ring-primary/10'
                        }`}
                      disabled={isLoadingPatients}
                    >
                      <option value="">Link Identity...</option>
                      {patients?.map((p: any) => (
                        <option key={p.id} value={p.firstName + ' ' + p.lastName}>
                          {p.firstName} {p.lastName} — PID-{p.id.slice(-4)}
                        </option>
                      ))}
                    </Select>
                  </div>
                  {errors.patientId && <p className="text-[10px] font-bold text-rose-500 uppercase tracking-tight pl-1">{errors.patientId.message}</p>}
                </div>

                {/* Provider Selection */}
                <div className="space-y-3">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <Stethoscope className="w-3.5 h-3.5 text-indigo-500" /> Care Provider
                  </label>
                  <Select
                    {...register('providerId')}
                    className={`h-14 pl-4 rounded-2xl border-2 transition-all duration-300 ${errors.providerId
                      ? 'border-rose-200 bg-rose-50/30'
                      : 'border-slate-100 bg-slate-50/50 hover:bg-white hover:border-indigo-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10'
                      }`}
                    disabled={isLoadingProviders}
                  >
                    <option value="">Request Provider...</option>
                    {providers?.map((p: any) => (
                      <option key={p.id} value={p.name}>
                        {p.name} • {p.specialty}
                      </option>
                    ))}
                  </Select>
                  {errors.providerId && <p className="text-[10px] font-bold text-rose-500 uppercase tracking-tight pl-1">{errors.providerId.message}</p>}
                </div>

                {/* Date Selection */}
                <div className="space-y-3">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-primary" /> Temporal Date
                  </label>
                  <Input
                    type="date"
                    {...register('date')}
                    className={`h-14 rounded-2xl border-2 transition-all duration-300 ${errors.date
                      ? 'border-rose-200 bg-rose-50/30'
                      : 'border-slate-100 bg-slate-50/50 hover:bg-white hover:border-primary/30 focus:border-primary focus:ring-4 focus:ring-primary/10'
                      }`}
                  />
                  {errors.date && <p className="text-[10px] font-bold text-rose-500 uppercase tracking-tight pl-1">{errors.date.message}</p>}
                </div>

                {/* Time Selection */}
                <div className="space-y-3">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-primary" /> Time Window
                  </label>
                  <Input
                    type="time"
                    {...register('time')}
                    className={`h-14 rounded-2xl border-2 transition-all duration-300 ${errors.time
                      ? 'border-rose-200 bg-rose-50/30'
                      : 'border-slate-100 bg-slate-50/50 hover:bg-white hover:border-primary/30 focus:border-primary focus:ring-4 focus:ring-primary/10'
                      }`}
                  />
                  {errors.time && <p className="text-[10px] font-bold text-rose-500 uppercase tracking-tight pl-1">{errors.time.message}</p>}
                </div>

                {/* Reason Selection */}
                <div className="md:col-span-2 space-y-3">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <Activity className="w-3.5 h-3.5 text-rose-500" /> Encounter Description
                  </label>
                  <Input
                    {...register('reason')}
                    placeholder="Enter clinical justification for visit..."
                    className={`h-14 rounded-2xl border-2 transition-all duration-300 ${errors.reason
                      ? 'border-rose-200 bg-rose-50/30'
                      : 'border-slate-100 bg-slate-50/50 hover:bg-white hover:border-slate-300 focus:border-slate-900 focus:ring-4 focus:ring-slate-900/10'
                      }`}
                  />
                  {errors.reason && <p className="text-[10px] font-bold text-rose-500 uppercase tracking-tight pl-1">{errors.reason.message}</p>}
                </div>
              </div>

              <div className="pt-6">
                <Button
                  type="submit"
                  disabled={isPending || isLoadingPatients || isLoadingProviders}
                  className="w-full h-16 rounded-2xl text-lg font-bold bg-slate-900 hover:bg-primary shadow-xl hover:shadow-primary/30 transition-all duration-500 flex items-center justify-center gap-3 overflow-hidden group"
                >
                  {isPending ? (
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Committing Protocol...
                    </div>
                  ) : (
                    <>
                      Execute Sync Protocol
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </Card>
        </div>

        {/* Sidebar Info */}
        <div className="lg:col-span-4 space-y-6">
          <Card className="p-6 bg-slate-900 text-white border-0 rounded-3xl relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 opacity-10">
              <HeartPulse className="w-48 h-48" />
            </div>
            <div className="relative z-10 space-y-6">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Encrypted Protocol</h3>
                <p className="text-slate-400 text-sm mt-1">All temporal allocations are end-to-end encrypted with HIPAA-compliant neural hashes.</p>
              </div>
              <div className="pt-4 border-t border-white/10 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                  <span className="text-xs font-medium text-slate-300">Live Provider Sync Active</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                  <span className="text-xs font-medium text-slate-300">Patient Registry Link verified</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                  <span className="text-xs font-medium text-slate-300">Temporal conflicts monitored</span>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-indigo-600 text-white border-0 rounded-3xl transition-transform hover:-rotate-1 cursor-default">
            <h4 className="font-bold flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4" />
              AI Suggestion
            </h4>
            <p className="text-indigo-100 text-sm leading-relaxed">
              Dr. Sarah Chen has high availability in the morning block. Consider shifting non-urgent encounters to 09:00 AM UTC.
            </p>
          </Card>
        </div>
      </div>
    </FadeIn>
  );
}
