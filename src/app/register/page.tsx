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
import { UserPlus, AlertCircle } from 'lucide-react';

const patientSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  dob: z.string().nonempty("Date of birth is required"),
  sex: z.enum(["male", "female", "other"], { message: "Please select a gender" }),
  phone: z.string().min(10, "Valid phone number required").max(15),
  email: z.string().email("Invalid email address"),
});

type PatientFormValues = z.infer<typeof patientSchema>;

export default function RegisterPage() {
  const { mutate, isPending, error, isSuccess, data } = useCreatePatient();
  const [showDuplicate, setShowDuplicate] = useState(false);
  const [duplicateData, setDuplicateData] = useState<any>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<PatientFormValues>({
    resolver: zodResolver(patientSchema),
  });

  const onSubmit = (data: PatientFormValues) => {
    // In a real app we'd also pass an 'overrideDuplicate: false' flag here
    // For this prototype, we'll check if the backend returned a duplicate error.
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
    <div className="max-w-2xl mx-auto py-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-primary/10 p-3 rounded-xl">
          <UserPlus className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Register Patient</h1>
          <p className="text-gray-500 text-sm">Create a new patient record in the system</p>
        </div>
      </div>

      {showDuplicate && duplicateData ? (
        <Card className="mb-8 border-warning/30 bg-warning/5">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-warning shrink-0" />
            <div className="space-y-4 w-full">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Patient already exists</h3>
                <p className="text-gray-600 text-sm">We found an existing record matching this contact information.</p>
              </div>

              <div className="bg-white p-4 rounded-lg border border-warning/20">
                <p className="font-medium">Name: {duplicateData.firstName} {duplicateData.lastName}</p>
                <p className="text-gray-600 text-sm">Phone: {duplicateData.phone}</p>
                <p className="text-gray-600 text-sm">Email: {duplicateData.email}</p>
              </div>

              <div className="flex gap-3 pt-2">
                <Button variant="secondary" onClick={() => setShowDuplicate(false)}>Cancel</Button>
                <Button variant="primary">View Record</Button>
              </div>
            </div>
          </div>
        </Card>
      ) : (
        <Card>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                <Input
                  id="firstName"
                  placeholder="e.g. Asha"
                  {...register('firstName')}
                  className={errors.firstName ? 'border-danger focus:ring-danger/20' : ''}
                />
                {errors.firstName && <p className="text-sm text-danger">{errors.firstName.message}</p>}
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                <Input
                  id="lastName"
                  placeholder="e.g. Rao"
                  {...register('lastName')}
                  className={errors.lastName ? 'border-danger focus:ring-danger/20' : ''}
                />
                {errors.lastName && <p className="text-sm text-danger">{errors.lastName.message}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
                <Input
                  id="dob"
                  type="date"
                  {...register('dob')}
                  className={errors.dob ? 'border-danger focus:ring-danger/20' : ''}
                />
                {errors.dob && <p className="text-sm text-danger">{errors.dob.message}</p>}
              </div>
              <div className="space-y-2">
                <label htmlFor="sex" className="block text-sm font-medium text-gray-700">Sex</label>
                <Select
                  id="sex"
                  {...register('sex')}
                  className={errors.sex ? 'border-danger focus:ring-danger/20' : ''}
                >
                  <option value="">Select gender...</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </Select>
                {errors.sex && <p className="text-sm text-danger">{errors.sex.message}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-2 border-b border-gray-100"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91 9xxxxxxxxx"
                  {...register('phone')}
                  className={errors.phone ? 'border-danger focus:ring-danger/20' : ''}
                />
                {errors.phone && <p className="text-sm text-danger">{errors.phone.message}</p>}
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="asha.rao@example.com"
                  {...register('email')}
                  className={errors.email ? 'border-danger focus:ring-danger/20' : ''}
                />
                {errors.email && <p className="text-sm text-danger">{errors.email.message}</p>}
              </div>
            </div>

            <div className="pt-4 flex items-center justify-end space-x-4">
              <Button type="button" variant="ghost" onClick={() => reset()}>Clear</Button>
              <Button type="submit" disabled={isPending}>
                {isPending ? 'Registering...' : 'Register Patient'}
              </Button>
            </div>
          </form>
        </Card>
      )}

      <div className="mt-6">
        {error && !showDuplicate && <Alert type="error">{error.message || "Failed to register patient"}</Alert>}
        {isSuccess && <Alert type="success">Patient registered successfully!</Alert>}
      </div>
    </div>
  );
}
