'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Calendar, User, UserCircle, Activity } from 'lucide-react';
import Card from '../../components/ui/Card';
import Input from '../../components/ui/Input';
import Select from '../../components/ui/Select';
import Button from '../../components/ui/Button';
import Alert from '../../components/ui/Alert';
import { useProviders } from '../../hooks/useProviders';
import { usePatients } from '../../hooks/usePatients';
import { useCreateAppointment } from '../../hooks/useAppointments';

const scheduleSchema = z.object({
  patientId: z.string().nonempty("Please select a patient"),
  providerId: z.string().nonempty("Please select a provider"),
  date: z.string().nonempty("Date is required"),
  time: z.string().nonempty("Time is required"),
  reason: z.string().min(5, "Reason must be at least 5 characters"),
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
        setSuccessMessage('Appointment scheduled successfully!');
        reset();
      },
      onError: (error: any) => {
        setErrorMessage(error.message || 'Failed to schedule appointment.');
      },
    });
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Schedule Appointment</h1>
        <p className="text-gray-500 mt-2">Book a new appointment for a patient with a healthcare provider.</p>
      </div>

      {successMessage && <Alert type="success">{successMessage}</Alert>}
      {errorMessage && <Alert type="error">{errorMessage}</Alert>}

      <Card className="p-6 md:p-8 border-t-4 border-t-primary">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <User className="w-4 h-4 text-primary" /> Patient
              </label>
              <Select
                {...register('patientId')}
                className={errors.patientId ? 'border-danger focus:ring-danger' : ''}
                disabled={isLoadingPatients}
              >
                <option value="">Select a patient...</option>
                {patients?.map((p: any) => (
                  <option key={p.id} value={p.firstName + ' ' + p.lastName}>
                    {p.firstName} {p.lastName}
                  </option>
                ))}
              </Select>
              {errors.patientId && <p className="text-sm text-danger">{errors.patientId.message}</p>}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <UserCircle className="w-4 h-4 text-primary" /> Provider
              </label>
              <Select
                {...register('providerId')}
                className={errors.providerId ? 'border-danger focus:ring-danger' : ''}
                disabled={isLoadingProviders}
              >
                <option value="">Select a provider...</option>
                {providers?.map((p: any) => (
                  <option key={p.id} value={p.name}>
                    {p.name} - {p.specialty}
                  </option>
                ))}
              </Select>
              {errors.providerId && <p className="text-sm text-danger">{errors.providerId.message}</p>}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" /> Date
              </label>
              <Input
                type="date"
                {...register('date')}
                className={errors.date ? 'border-danger focus:ring-danger' : ''}
              />
              {errors.date && <p className="text-sm text-danger">{errors.date.message}</p>}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" /> Time
              </label>
              <Input
                type="time"
                {...register('time')}
                className={errors.time ? 'border-danger focus:ring-danger' : ''}
              />
              {errors.time && <p className="text-sm text-danger">{errors.time.message}</p>}
            </div>

            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Activity className="w-4 h-4 text-primary" /> Reason for Visit
              </label>
              <Input
                {...register('reason')}
                placeholder="e.g., Annual checkup, Flu symptoms..."
                className={errors.reason ? 'border-danger focus:ring-danger' : ''}
              />
              {errors.reason && <p className="text-sm text-danger">{errors.reason.message}</p>}
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            <Button type="submit" disabled={isPending || isLoadingPatients || isLoadingProviders} className="w-full md:w-auto">
              {isPending ? 'Scheduling...' : 'Schedule Appointment'}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
