'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { AlertTriangle, CheckCircle2, FileText, HeartPulse } from 'lucide-react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Alert from '../../components/ui/Alert';
import Badge from '../../components/ui/Badge';
import { useTriage } from '../../hooks/useTriage';

const triageSchema = z.object({
  symptoms: z.string().min(5, "Please describe the symptoms in more detail (at least 5 characters)."),
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
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      <div className="text-center space-y-2">
        <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
          <HeartPulse className="w-8 h-8 text-primary" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">AI-Assisted Triage</h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Enter the patient's symptoms to receive an AI-generated preliminary assessment, including urgency level and possible conditions.
        </p>
      </div>

      <Card className="p-6 md:p-8 border-t-4 border-t-primary">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Patient Symptoms</label>
            <div className="relative">
              <textarea
                {...register('symptoms')}
                rows={4}
                placeholder="Describe symptoms here... e.g., 'Patient complains of severe chest pain...'"
                className={`w-full px-4 py-3 rounded-lg border bg-gray-50/50 transition-colors duration-200 outline-none
                  ${errors.symptoms
                    ? 'border-danger focus:ring-2 focus:ring-danger/20'
                    : 'border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 hover:border-gray-300'
                  }`}
              />
            </div>
            {errors.symptoms && (
              <p className="text-sm text-danger flex items-center gap-1 mt-1">
                <AlertTriangle className="w-4 h-4" /> {errors.symptoms.message}
              </p>
            )}
          </div>

          <div className="flex justify-end">
            <Button type="submit" disabled={isPending} className="px-8 flex items-center gap-2">
              {isPending && <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />}
              {isPending ? 'Analyzing Symptoms...' : 'Analyze Symptoms'}
            </Button>
          </div>
        </form>
      </Card>

      {error && (
        <Alert type="error">
          There was an error while trying to generate the triage assessment. Please try again.
        </Alert>
      )}

      {triageResult && (
        <div className="space-y-6 animate-slide-up">
          <h2 className="text-xl font-semibold border-b pb-2 flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" /> Assessment Report
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 col-span-1 border-l-4 overflow-hidden relative" style={{ borderLeftColor: `var(--color-${getUrgencyColor(triageResult.urgency)})` }}>
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <AlertTriangle className="w-16 h-16" style={{ color: `var(--color-${getUrgencyColor(triageResult.urgency)})` }} />
              </div>
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2 relative z-10">Urgency Level</h3>
              <div className="flex flex-col gap-2 relative z-10">
                <span className="text-3xl font-bold text-gray-900">{triageResult.urgency}</span>
                <div className="inline-block">
                  <Badge variant={getUrgencyColor(triageResult.urgency)}>
                    {Math.round(triageResult.confidence * 100)}% Confidence
                  </Badge>
                </div>
              </div>
            </Card>

            <Card className="p-6 col-span-1 md:col-span-2">
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Clinical Explanation</h3>
              <p className="text-gray-800 leading-relaxed">{triageResult.explanation}</p>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Possible Conditions</h3>
              <div className="space-y-4">
                {triageResult.conditions?.map((c: any, index: number) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-900">{c.name}</span>
                      <span className="text-sm text-gray-500">{Math.round(c.probability * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ${index === 0 ? 'bg-primary' : 'bg-gray-400'}`}
                        style={{ width: `${c.probability * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-primary/5 border border-primary/10">
              <h3 className="text-sm font-medium text-primary uppercase tracking-wider mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> Recommended Next Steps
              </h3>
              <ul className="space-y-3">
                {triageResult.recommended?.map((step: string, i: number) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-gray-800 leading-relaxed">{step}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
