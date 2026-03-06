'use client';

import { useAppointments } from '../../hooks/useAppointments';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/Table';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import { Calendar, Clock, LayoutDashboard, ChevronRight, CheckCircle2 } from 'lucide-react';
import Button from '../../components/ui/Button';

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
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 flex items-center gap-3">
            <LayoutDashboard className="w-8 h-8 text-primary" />
            Clinician Dashboard
          </h1>
          <p className="text-gray-500 mt-2">Overview of today&apos;s appointments and clinic metrics.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="secondary">Download Report</Button>
          <Button>View All Patients</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent border-primary/20 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-20 transition-transform group-hover:scale-110">
            <Calendar className="w-16 h-16 text-primary" />
          </div>
          <h3 className="text-sm font-medium text-gray-500 mb-2 relative z-10">Today&apos;s Appointments</h3>
          <p className="text-4xl font-bold text-gray-900 relative z-10">{appointments?.length || 0}</p>
        </Card>
        <Card className="p-6 bg-gradient-to-br from-warning/10 to-transparent border-warning/20 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-20 transition-transform group-hover:scale-110">
            <Clock className="w-16 h-16 text-warning" />
          </div>
          <h3 className="text-sm font-medium text-gray-500 mb-2 relative z-10">Pending Triage</h3>
          <p className="text-4xl font-bold text-gray-900 relative z-10">4</p>
        </Card>
        <Card className="p-6 bg-gradient-to-br from-success/10 to-transparent border-success/20 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-20 transition-transform group-hover:scale-110">
            <CheckCircle2 className="w-16 h-16 text-success" />
          </div>
          <h3 className="text-sm font-medium text-gray-500 mb-2 relative z-10">Completed</h3>
          <p className="text-4xl font-bold text-gray-900 relative z-10">
            {appointments?.filter((a: any) => a.status === 'completed').length || 0}
          </p>
        </Card>
      </div>

      <Card className="p-0 overflow-hidden border-gray-200/60 shadow-sm mt-8">
        <div className="p-6 border-b flex flex-col md:flex-row items-center justify-between gap-4 bg-gray-50/30">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Recent Appointments</h2>
            <p className="text-sm text-gray-500 mt-1">Manage and view details of upcoming scheduled patients.</p>
          </div>
          <div className="text-sm text-primary font-medium cursor-pointer hover:text-primary-600 transition-colors flex items-center gap-1 group">
            View full calendar <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>

        {isLoading && (
          <div className="py-16 flex flex-col justify-center items-center gap-4">
            <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
            <p className="text-sm text-gray-500">Loading appointments data...</p>
          </div>
        )}

        {error && (
          <div className="p-6">
            <p className="text-danger bg-danger/10 p-4 rounded-lg border border-danger/20 font-medium">Failed to load appointments from server. Please try again later.</p>
          </div>
        )}

        {appointments && appointments.length > 0 && (
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50 hover:bg-gray-50">
                <TableHead className="font-semibold text-gray-600">Patient Name</TableHead>
                <TableHead className="font-semibold text-gray-600">Provider</TableHead>
                <TableHead className="font-semibold text-gray-600">Date & Time</TableHead>
                <TableHead className="font-semibold text-gray-600">Status</TableHead>
                <TableHead className="text-right font-semibold text-gray-600">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {appointments.map((appt: any, idx: number) => {
                const date = new Date(appt.time);
                return (
                  <TableRow key={idx} className="group">
                    <TableCell className="font-medium text-gray-900">{appt.patient}</TableCell>
                    <TableCell className="text-gray-600">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold shrink-0">
                          {appt.provider ? appt.provider.charAt(3) : '?'}
                        </div>
                        {appt.provider || 'Unknown Provider'}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <span className="flex items-center gap-1.5 bg-gray-100 px-2 py-1 rounded-md">
                          <Calendar className="w-3.5 h-3.5 text-gray-400" />
                          {date.toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1.5 bg-gray-100 px-2 py-1 rounded-md">
                          <Clock className="w-3.5 h-3.5 text-gray-400" />
                          {date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={getStatusBadge(appt.status)} className="capitalize">
                        {appt.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" className="text-sm opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0">
                        Details
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        )}

        {appointments && appointments.length === 0 && (
          <div className="py-16 text-center text-gray-500">
            <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-lg font-medium text-gray-900">No appointments found</p>
            <p className="mt-1">There are no appointments scheduled for today.</p>
          </div>
        )}
      </Card>
    </div>
  );
}
