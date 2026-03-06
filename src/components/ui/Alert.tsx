import { ReactNode } from 'react';
import { CheckCircle2, AlertCircle, Info, AlertTriangle } from 'lucide-react';

interface AlertProps {
  children: ReactNode;
  type?: 'success' | 'error' | 'warning' | 'info';
}

export default function Alert({ children, type = 'info' }: AlertProps) {
  const styles = {
    success: {
      bg: 'bg-success/10 text-success-800 border-success/20',
      icon: <CheckCircle2 className="w-5 h-5 text-success mt-0.5 shrink-0" />
    },
    error: {
      bg: 'bg-danger/10 text-danger-800 border-danger/20',
      icon: <AlertCircle className="w-5 h-5 text-danger mt-0.5 shrink-0" />
    },
    warning: {
      bg: 'bg-warning/10 text-warning-800 border-warning/20',
      icon: <AlertTriangle className="w-5 h-5 text-warning mt-0.5 shrink-0" />
    },
    info: {
      bg: 'bg-primary/10 text-primary-800 border-primary/20',
      icon: <Info className="w-5 h-5 text-primary mt-0.5 shrink-0" />
    },
  }[type];

  return (
    <div className={`p-4 rounded-xl border flex items-start gap-3 ${styles.bg}`}>
      {styles.icon}
      <div className="text-sm font-medium">{children}</div>
    </div>
  );
}
