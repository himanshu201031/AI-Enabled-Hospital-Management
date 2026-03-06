'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { AlertTriangle, CheckCircle2, FileText, HeartPulse, Brain, Zap, Shield, Sparkles, Activity } from 'lucide-react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Alert from '../../components/ui/Alert';
import Badge from '../../components/ui/Badge';
import { useTriage } from '../../hooks/useTriage';
import FadeIn from '../../components/ui/FadeIn';

const triageSchema = z.object({
  symptoms: z.string().min(5, "Please describe the symptoms in more detail (at least 5 characters)."),
  temperature: z.string().optional(),
  heartRate: z.string().optional(),
  bloodPressure: z.string().optional(),
  spo2: z.string().optional(),
  onsetDays: z.string().optional(),
  painScale: z.number().min(0).max(10),
});

type TriageFormValues = z.infer<typeof triageSchema>;

export default function TriagePage() {
  const { mutate: runTriage, data: triageResult, isPending, error } = useTriage();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TriageFormValues>({
    resolver: zodResolver(triageSchema),
    defaultValues: {
      symptoms: '',
      temperature: '',
      heartRate: '',
      bloodPressure: '',
      spo2: '',
      onsetDays: '',
      painScale: 0,
    }
  });

  const onSubmit = (data: TriageFormValues) => {
    runTriage({ symptoms: data.symptoms });
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency?.toLowerCase()) {
      case 'high': return 'danger';
      case 'medium': return 'warning';
      case 'low': return 'success';
      default: return 'primary';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50/50 pb-20 font-sans">
      <FadeIn className="max-w-5xl mx-auto px-4 pt-12 space-y-12">
        {/* Header Section */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-2xl border border-primary/20 text-primary font-black text-xs uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-4 h-4" />
            MediAI Core v4.2
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-gray-900 leading-tight">
            High-Fidelity <br />
            <span className="text-primary italic">Clinical Assessment.</span>
          </h1>
          <p className="text-gray-500 text-lg font-medium leading-relaxed">
            Our proprietary <span className="text-gray-900 font-bold">MediAI Triage™</span> algorithm uses advanced neural orchestration to provide high-precision assessments for modern healthcare providers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form Column */}
          <div className="lg:col-span-7 space-y-8">
            <Card className="p-8 md:p-10 border-0 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] rounded-[3rem] bg-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary group-hover:bg-[#05706c] transition-colors rounded-bl-[5rem] -mr-8 -mt-8 flex items-center justify-center p-6 text-white opacity-10 group-hover:opacity-20">
                <Zap className="w-12 h-12" />
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 relative z-10">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-black text-gray-900 uppercase tracking-widest flex items-center gap-2">
                      <Brain className="w-4 h-4 text-primary" />
                      Clinical Observations
                    </label>
                    <span className="text-[10px] font-bold text-gray-400">ENCRYPTED INPUT</span>
                  </div>
                  <textarea
                    {...register('symptoms')}
                    rows={6}
                    placeholder="Describe clinical presentation... (e.g., 'Patient presents with acute respiratory distress and elevated systemic markers...')"
                    className={`w-full px-6 py-5 rounded-[2rem] border-2 bg-gray-50/50 transition-all duration-300 outline-none text-gray-900 placeholder:text-gray-400 font-medium
                      ${errors.symptoms
                        ? 'border-danger focus:ring-4 focus:ring-danger/5'
                        : 'border-gray-100 focus:border-primary focus:ring-4 focus:ring-primary/5 hover:border-gray-200'
                      }`}
                  />
                  {errors.symptoms && (
                    <p className="text-sm text-danger font-bold flex items-center gap-2 px-4 italic">
                      <AlertTriangle className="w-4 h-4" /> {errors.symptoms.message}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { label: 'Temp', id: 'temperature', placeholder: '37.5', icon: '°C' },
                    { label: 'Heart Rate', id: 'heartRate', placeholder: '72', icon: 'BPM' },
                    { label: 'BP', id: 'bloodPressure', placeholder: '120/80', icon: 'mmHg' },
                    { label: 'SpO2', id: 'spo2', placeholder: '98', icon: '%' }
                  ].map((field) => (
                    <div key={field.id} className="space-y-2">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-2">{field.label}</label>
                      <div className="relative">
                        <input
                          type="text"
                          {...register(field.id as any)}
                          placeholder={field.placeholder}
                          className="w-full pl-4 pr-10 py-3 rounded-2xl border-2 border-gray-100 bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-bold text-gray-900"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-black text-gray-300">{field.icon}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-2">Onset Duration</label>
                    <input
                      type="text"
                      {...register('onsetDays')}
                      placeholder="e.g. 3 days"
                      className="w-full px-5 py-3 rounded-2xl border-2 border-gray-100 bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-bold text-gray-900"
                    />
                  </div>
                  <div className="space-y-4 pt-4">
                    <div className="flex justify-between items-center pl-2">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Pain Intensity</label>
                      <span className="text-xl font-black text-primary italic">5/10</span>
                    </div>
                    <input
                      type="range"
                      {...register('painScale', { valueAsNumber: true })}
                      min="0" max="10"
                      className="w-full h-2 bg-gray-100 rounded-full appearance-none cursor-pointer accent-primary"
                    />
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-3 text-gray-400 text-xs font-bold leading-tight">
                    <Shield className="w-5 h-5 text-green-500" />
                    <span>Bio-Metric Encryption Active <br /> MediAI Hub Compliance Certified</span>
                  </div>
                  <Button
                    type="submit"
                    disabled={isPending}
                    className="w-full sm:w-auto px-12 py-5 rounded-[2rem] flex items-center justify-center gap-3 font-black text-lg transition-all transform hover:scale-105 shadow-2xl shadow-primary/20 bg-primary"
                  >
                    {isPending ? (
                      <>
                        <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                        Synchronizing Logic...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-5 h-5" />
                        Commit Assessment
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </Card>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-5 h-full">
            {!triageResult && !isPending && (
              <div className="h-full min-h-[500px] border-4 border-dashed border-gray-200 rounded-[3rem] flex flex-col items-center justify-center p-12 text-center space-y-6">
                <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center text-gray-300">
                  <Activity className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-gray-900 tracking-tight">System Primary Ready</h3>
                  <p className="text-gray-400 font-medium">Initialize input stream on the left to activate MediAI assessment.</p>
                </div>
              </div>
            )}

            {isPending && (
              <div className="h-full min-h-[500px] bg-white rounded-[3rem] shadow-xl border border-gray-100 p-12 flex flex-col items-center justify-center text-center space-y-8">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full border-8 border-primary/10 border-t-primary animate-spin" />
                  <Brain className="w-10 h-10 text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-gray-900 tracking-tighter italic uppercase animate-pulse">Running Neural Models...</h3>
                  <p className="text-gray-400 font-medium">Accessing global clinical dataset v4.2</p>
                </div>
              </div>
            )}

            {triageResult && (
              <FadeIn className="space-y-8">
                <Card className="p-10 rounded-[3rem] border-0 shadow-2xl bg-slate-900 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-primary/20 blur-[100px]" />

                  <div className="space-y-10 relative z-10">
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">Urgency Matrix</span>
                        <h2 className="text-5xl font-black tracking-tighter italic uppercase text-white">
                          {triageResult.urgency}
                        </h2>
                      </div>
                      <Badge variant={getUrgencyColor(triageResult.urgency)} className="py-2 px-6 rounded-2xl font-black italic">
                        {Math.round(triageResult.confidence * 100)}% Match
                      </Badge>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]">AI Summary</h4>
                      <p className="text-gray-300 text-lg leading-relaxed font-medium line-clamp-6 italic">&quot;{triageResult.explanation}&quot;</p>
                    </div>

                    <div className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-6">
                      <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.3em] flex items-center gap-2">
                        <Activity className="w-4 h-4" /> Recommended Protocol
                      </h4>
                      <ul className="space-y-4">
                        {triageResult.recommended?.map((step: string, i: number) => (
                          <li key={i} className="flex items-start gap-4">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span className="text-sm font-bold text-gray-200 tracking-tight leading-snug">{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 rounded-[3rem] bg-white border border-gray-100 shadow-xl space-y-8">
                  <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Potential Conditions</h4>
                  <div className="space-y-6">
                    {triageResult.conditions?.map((c: any, index: number) => (
                      <div key={index} className="space-y-2 group cursor-default">
                        <div className="flex justify-between items-end pl-1">
                          <span className="font-black text-gray-900 tracking-tight group-hover:text-primary transition-colors">{c.name}</span>
                          <span className="text-xs font-black text-gray-400 italic">{Math.round(c.probability * 100)}% Match</span>
                        </div>
                        <div className="w-full bg-gray-50 rounded-full h-3 overflow-hidden p-0.5 border border-gray-100">
                          <div
                            className={`h-full rounded-full transition-all duration-1000 shadow-lg ${index === 0 ? 'bg-primary' : 'bg-gray-400'}`}
                            style={{ width: `${c.probability * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </FadeIn>
            )}
          </div>
        </div>

        {error && (
          <Alert type="error" className="rounded-3xl p-6 font-bold shadow-xl">
            Protocol Error: Failed to synchronize with MediAI Hub. Please check data stream integrity.
          </Alert>
        )}
      </FadeIn>
    </div>
  );
}
