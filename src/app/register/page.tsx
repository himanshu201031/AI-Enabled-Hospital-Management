'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import Alert from '../../components/ui/Alert';
import Select from '../../components/ui/Select';
import Card from '../../components/ui/Card';
import { useCreatePatient } from '../../hooks/usePatients';
import { UserPlus, AlertCircle, ShieldCheck, Database, Fingerprint, Activity, Clock } from 'lucide-react';
import FadeIn from '../../components/ui/FadeIn';

const patientSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  dob: z.string().nonempty("Date of birth is required"),
  sex: z.enum(["male", "female", "other"], { message: "Please select a gender" }),
  phone: z.string().min(10, "Valid phone number required").max(15),
  email: z.string().email("Invalid email address"),
  allergies: z.string().optional(),
  conditions: z.string().optional(),
  medications: z.string().optional(),
});

type PatientFormValues = z.infer<typeof patientSchema>;

export default function RegisterPage() {
  const { mutate, isPending, error, isSuccess } = useCreatePatient();
  const [showDuplicate, setShowDuplicate] = useState(false);
  const [duplicateData, setDuplicateData] = useState<any>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<PatientFormValues>({
    resolver: zodResolver(patientSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      dob: '',
      sex: 'male',
      phone: '',
      email: '',
      allergies: '',
      conditions: '',
      medications: '',
    }
  });

  const onSubmit = (data: PatientFormValues) => {
    mutate(data, {
      onError: (err: any) => {
        if (err.details && err.details.isDuplicate) {
          setShowDuplicate(true);
          setDuplicateData(err.details.existingPatient);
        }
      },
      onSuccess: () => {
        reset();
      }
    });
  };

  return (
    <div className="min-h-screen bg-[#f1f6f9]/50 pb-24">
      <FadeIn className="max-w-6xl mx-auto px-4 py-16">

        {/* Registration Header */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-8 mb-16 border-b border-gray-200 pb-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] -z-10" />

          <div className="space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-white border border-gray-100 rounded-full shadow-sm text-primary font-black text-xs uppercase tracking-widest">
              <Fingerprint className="w-4 h-4" /> Identity Protocol Active
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter leading-tight italic">
              Patient <br />
              <span className="text-primary not-italic underline decoration-4 decoration-primary/20">Enrollment.</span>
            </h1>
            <p className="text-gray-500 text-lg font-medium leading-relaxed max-w-sm">
              Creating a secure, decentralized medical identity within the MediAI Hub network.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 bg-white p-6 rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-white">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Data Security</p>
                <p className="font-bold text-gray-900">256-bit AES Encrypted</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white p-6 rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-white">
              <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center">
                <Clock className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Audit Trail</p>
                <p className="font-bold text-gray-900">Compliance Log Active</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Main Form Column */}
          <div className="lg:col-span-8">
            {showDuplicate && duplicateData ? (
              <Card className="p-10 border-warning bg-warning/5 rounded-[3rem] animate-slide-up">
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className="w-16 h-16 rounded-3xl bg-warning/20 flex items-center justify-center shrink-0">
                    <AlertCircle className="w-8 h-8 text-warning" />
                  </div>
                  <div className="space-y-6 w-full">
                    <div>
                      <h3 className="text-3xl font-black text-gray-900 tracking-tighter uppercase italic">Conflict Detected</h3>
                      <p className="text-gray-600 font-medium">A medical record already exists with these identifiers.</p>
                    </div>

                    <div className="bg-white p-8 rounded-[2rem] border border-warning/20 shadow-xl shadow-warning/5 space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center font-black text-gray-400">
                          {duplicateData.firstName?.charAt(0)}
                        </div>
                        <div>
                          <p className="text-xl font-black text-gray-900 tracking-tight">{duplicateData.firstName} {duplicateData.lastName}</p>
                          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{duplicateData.email}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4">
                      <Button variant="secondary" onClick={() => setShowDuplicate(false)} className="px-8 py-4 rounded-2xl font-bold">Discard Changes</Button>
                      <Button variant="primary" className="px-8 py-4 rounded-2xl font-bold bg-warning hover:bg-warning/90 text-white">Merge Record</Button>
                    </div>
                  </div>
                </div>
              </Card>
            ) : (
              <Card className="p-10 border-0 shadow-2xl rounded-[3.5rem] bg-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-bl-[6rem] -mr-12 -mt-12 transition-all group-hover:scale-110 pointer-events-none" />

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-10 relative z-10">
                  <div className="space-y-8">
                    <h3 className="text-sm font-black text-gray-900 uppercase tracking-[0.4em] flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-primary" />
                      Core Demographics
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-2 font-black italic">First Name</label>
                        <Input
                          id="firstName"
                          placeholder="e.g. Asha"
                          {...register('firstName')}
                          className={`rounded-2xl border-2 py-4 px-6 font-bold tracking-tight text-gray-950 placeholder:text-gray-300 transition-all ${errors.firstName ? 'border-danger bg-danger/5' : 'border-gray-50 bg-gray-50 focus:bg-white focus:border-primary'}`}
                        />
                        {errors.firstName && <p className="text-xs text-danger font-bold pl-2">{errors.firstName.message}</p>}
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-2 font-black italic">Last Name</label>
                        <Input
                          id="lastName"
                          placeholder="e.g. Rao"
                          {...register('lastName')}
                          className={`rounded-2xl border-2 py-4 px-6 font-bold tracking-tight text-gray-950 placeholder:text-gray-300 transition-all ${errors.lastName ? 'border-danger bg-danger/5' : 'border-gray-50 bg-gray-50 focus:bg-white focus:border-primary'}`}
                        />
                        {errors.lastName && <p className="text-xs text-danger font-bold pl-2">{errors.lastName.message}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-2 font-black italic">Date of Birth</label>
                        <Input
                          id="dob"
                          type="date"
                          {...register('dob')}
                          className={`rounded-2xl border-2 py-4 px-6 font-bold tracking-tight text-gray-950 transition-all ${errors.dob ? 'border-danger bg-danger/5' : 'border-gray-50 bg-gray-50 focus:bg-white focus:border-primary'}`}
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-2 font-black italic">Legal Sex</label>
                        <Select
                          id="sex"
                          {...register('sex')}
                          className="rounded-2xl border-2 py-4 px-6 font-bold tracking-tight text-gray-950 bg-gray-50 border-gray-50 focus:bg-white focus:border-primary transition-all outline-none"
                        >
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8 pt-6 border-t border-gray-100">
                    <h3 className="text-sm font-black text-gray-900 uppercase tracking-[0.4em] flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-orange-500" />
                      Contact Interop
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-2 font-black italic">Neural ID/Phone</label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+91 9xxxxxxxxx"
                          {...register('phone')}
                          className="rounded-2xl border-2 py-4 px-6 font-bold tracking-tight text-gray-950 bg-gray-50 border-gray-50 focus:bg-white focus:border-primary transition-all shadow-sm"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-2 font-black italic">Encrypted Email</label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="asha.rao@identity.mediai.hub"
                          {...register('email')}
                          className="rounded-2xl border-2 py-4 px-6 font-bold tracking-tight text-gray-950 bg-gray-50 border-gray-50 focus:bg-white focus:border-primary transition-all shadow-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8 pt-6 border-t border-gray-100">
                    <h3 className="text-sm font-black text-gray-900 uppercase tracking-[0.4em] flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-gray-900" />
                      Clinical Context
                    </h3>

                    <div className="grid grid-cols-1 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-2 font-black italic">Documented Allergies</label>
                        <Input
                          id="allergies"
                          placeholder="List any known immunogenicity triggers..."
                          {...register('allergies')}
                          className="rounded-2xl border-2 py-4 px-6 font-bold tracking-tight text-gray-950 bg-gray-50 border-gray-50 focus:bg-white focus:border-primary transition-all"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-2 font-black italic">Chronic Manifestations</label>
                        <Input
                          id="conditions"
                          placeholder="Asthma, Type-2 Diabetes, etc."
                          {...register('conditions')}
                          className="rounded-2xl border-2 py-4 px-6 font-bold tracking-tight text-gray-950 bg-gray-50 border-gray-50 focus:bg-white focus:border-primary transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-8 py-10 px-4 mt-8 bg-gray-50/50 rounded-[3rem] border border-gray-100/50 relative overflow-hidden">
                    <div className="flex items-center gap-4 text-gray-400 group cursor-default">
                      <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                        <Database className="w-6 h-6 text-primary/40 group-hover:text-primary transition-colors" />
                      </div>
                      <p className="text-xs font-bold leading-tight uppercase tracking-widest">Global Master Patient Index (MPI) <br /> Synchronization Active</p>
                    </div>
                    <div className="flex items-center gap-5">
                      <button type="button" onClick={() => reset()} className="text-gray-400 font-black uppercase text-xs tracking-[0.3em] hover:text-gray-900 transition-colors">Abort</button>
                      <Button
                        type="submit"
                        disabled={isPending}
                        className="bg-primary hover:bg-[#05706c] text-white px-12 py-6 rounded-[2rem] font-black italic tracking-tight text-xl transform hover:scale-[1.03] transition-all shadow-2xl shadow-primary/30"
                      >
                        {isPending ? 'Syncing...' : 'Complete Protocol'}
                      </Button>
                    </div>
                  </div>
                </form>
              </Card>
            )}
          </div>

          {/* Sidebar / Guidelines */}
          <div className="lg:col-span-4 space-y-12 h-fit lg:sticky lg:top-24">
            <div className="p-10 bg-gray-900 rounded-[3.5rem] text-white space-y-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[80px]" />
              <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.4em] italic pl-1">Protocol Guidelines</h4>
              <div className="space-y-8">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center shrink-0 border border-primary/20">
                    <Activity className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-black tracking-tight text-sm uppercase italic mb-2 text-white">Validation</p>
                    <p className="text-gray-400 text-xs font-medium leading-relaxed">System automatically cross-references entries against government health databases in real-time.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0 border border-orange-500/20">
                    <ShieldCheck className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="font-black tracking-tight text-sm uppercase italic mb-2 text-white">Privacy</p>
                    <p className="text-gray-400 text-xs font-medium leading-relaxed">All PII is encrypted at the collection point. MediAI Hub zero-knowledge infra ensures absolute privacy.</p>
                  </div>
                </div>
              </div>
              <div className="pt-8 mt-4 border-t border-white/5 space-y-4">
                <p className="text-[9px] font-black text-gray-500 tracking-[0.3em] uppercase">Trusted Clinician Network</p>
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => <div key={i} className="w-10 h-10 rounded-full border-2 border-gray-900 bg-gray-800 flex items-center justify-center font-bold text-xs text-gray-600">P</div>)}
                  <div className="w-10 h-10 rounded-full border-2 border-gray-900 bg-primary flex items-center justify-center font-black text-xs text-white z-10 text-[10px]">+24K</div>
                </div>
              </div>
            </div>

            {/* Success/Error Alerts */}
            <div className="space-y-4">
              {error && !showDuplicate && <Alert type="error" className="rounded-3xl p-6 font-bold shadow-xl">Protocol Error: {error.message || "Identity synchronization failed."}</Alert>}
              {isSuccess && <Alert type="success" className="rounded-3xl p-6 font-bold shadow-xl border-primary bg-primary/5">Protocol Finalized: Patient record successfully committed to MPI.</Alert>}
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
