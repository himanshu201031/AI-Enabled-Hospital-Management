
# 1. High Level Architecture

The application follows a **modern frontend architecture** using **component-driven UI + API routes + mock services**.

```
Client (Browser)
      │
      │
React UI Layer
(Next.js Pages + Components)
      │
      │
State & Data Layer
(TanStack Query)
      │
      │
Service Layer
(API Clients)
      │
      │
Mock Backend Layer
(Next.js API Routes)
      │
      │
Mock Data Storage
(JSON / In-Memory)
```

Technology foundation:

* Next.js
* TypeScript
* Tailwind CSS
* React Hook Form
* Zod
* TanStack Query

---

# 2. System Architecture Layers

## 1. Presentation Layer (UI)

This layer handles:

* UI rendering
* Forms
* User interaction
* Accessibility
* Responsiveness

Components:

```
Pages
Layouts
Reusable UI Components
Feature Components
Forms
Tables
Cards
```

Example UI structure:

```
UI
 ├── Layout
 │   ├── Navbar
 │   ├── Sidebar
 │   └── Footer
 │
 ├── Patient Module
 │   └── Registration Form
 │
 ├── Appointment Module
 │   └── Scheduling UI
 │
 ├── AI Triage Module
 │   └── Triage Form + Results
 │
 └── Clinician Dashboard
```

---

# 3. Application Layer

This layer handles:

* Business logic
* Validation
* Form processing
* API calls

Modules:

```
Services
Hooks
Validation
State management
Utilities
```

Example:

```
Create patient
Check duplicates
Schedule appointment
Cancel appointment
Run triage AI
```

---

# 4. Data Layer

Handles:

* API requests
* caching
* server state
* mutations

Uses:

TanStack Query

Example flow:

```
UI
  ↓
React Query Hook
  ↓
Service Layer
  ↓
API Route
  ↓
Mock Data
```

Example hook:

```
useCreatePatient()
useProviders()
useAppointments()
useTriageAI()
```

Benefits:

* caching
* automatic refetch
* loading states
* error states

---

# 5. API Layer (Mock Backend)

Implemented using **Next.js API routes**.

```
/app/api
```

Structure:

```
api
 ├── patients
 │    └── route.ts
 │
 ├── providers
 │    └── route.ts
 │
 ├── appointments
 │    └── route.ts
 │
 ├── ai
 │    ├── triage
 │    │     └── route.ts
 │    └── diagnostics
 │          └── route.ts
```

Responsibilities:

* Accept requests
* Validate payload
* Return deterministic response
* Read/write mock data

---

# 6. Mock Data Storage

Since the assignment requires **synthetic demo data**, storage can be:

```
JSON files
or
In-memory arrays
```

Example structure:

```
mock-data
 ├── patients.json
 ├── providers.json
 ├── appointments.json
```

Example provider data:

```
[
 {
  "id": "prov_102",
  "name": "Dr Arjun K",
  "specialty": "General Medicine",
  "locations": ["Bengaluru"],
  "slots": [
   "2026-03-05T06:00:00Z",
   "2026-03-05T06:30:00Z"
  ]
 }
]
```

---

# 7. Feature Architecture

## Patient Module

Responsibilities

```
Register patient
Validate form
Check duplicates
Save patient
```

Flow:

```
Registration Form
    ↓
React Hook Form
    ↓
Zod Validation
    ↓
POST /api/patients
    ↓
Save in patients.json
```

---

# Scheduling Module

Responsibilities:

```
Search provider
Select time slot
Book appointment
Cancel/reschedule
```

Flow:

```
Select specialty
   ↓
GET /api/providers
   ↓
Select slot
   ↓
POST /api/appointments
```

---

# AI Triage Module

Purpose:

Simulate **AI triage diagnostic assistant**.

Flow:

```
User enters symptoms
      ↓
Submit form
      ↓
POST /api/ai/triage
      ↓
Mock AI response
      ↓
Show triage result
```

Example output:

```
Urgency: Medium
Confidence: 0.74

Differentials
- Viral pharyngitis
- Streptococcal pharyngitis
```

---

# Clinician Dashboard

Displays:

```
Today's appointments
Triage results
Patient information
```

Data source:

```
GET /api/appointments
GET /api/patients
```

UI:

```
Dashboard Table

Patient | Provider | Time | Status | AI Urgency
```

---

# 8. Component Architecture

Component hierarchy:

```
App Layout
   │
   ├── Navbar
   │
   ├── Pages
   │    ├── Register
   │    │     └── PatientForm
   │    │
   │    ├── Schedule
   │    │     └── AppointmentForm
   │    │
   │    ├── Triage
   │    │     ├── TriageForm
   │    │     └── TriageResult
   │    │
   │    └── Dashboard
   │          └── AppointmentTable
   │
   └── Shared Components
        ├── Button
        ├── Card
        ├── Input
        ├── Modal
        └── Badge
```

---

# 9. Folder Architecture

Recommended production structure:

```
src
 │
 ├── app
 │   ├── layout.tsx
 │   ├── page.tsx
 │   │
 │   ├── register
 │   ├── schedule
 │   ├── triage
 │   └── dashboard
 │
 ├── components
 │   ├── ui
 │   ├── forms
 │   └── tables
 │
 ├── hooks
 │   ├── usePatients.ts
 │   ├── useAppointments.ts
 │   └── useTriage.ts
 │
 ├── services
 │   ├── patientService.ts
 │   ├── appointmentService.ts
 │   └── triageService.ts
 │
 ├── validation
 │   ├── patientSchema.ts
 │   └── triageSchema.ts
 │
 ├── lib
 │   ├── apiClient.ts
 │   └── constants.ts
 │
 └── mock
     ├── patients.json
     ├── providers.json
     └── appointments.json
```

---

# 10. State Management Strategy

Two types of state:

### Server State

Handled by

TanStack Query

Examples

```
patients
providers
appointments
triage results
```

---

### UI State

Handled by:

```
React state
useState
useReducer
```

Examples

```
modal open
form state
selected provider
selected slot
```

---

# 11. Security Architecture

Important frontend protections:

### Input Validation

Using:

Zod

---

### File Upload Validation

Check:

```
file size
file type
max size
```

Example:

```
image/png
image/jpeg
max 5MB
```

---

### Privacy Rules

Do NOT:

```
log patient data
store secrets
send real patient data
```

---

# 12. Accessibility Architecture

Follow **WCAG guidelines**.

Key elements:

```
labels
aria attributes
keyboard navigation
focus indicators
semantic HTML
```

Example:

```
<label for="phone">Phone</label>
<input id="phone"/>
```

---

# 13. Performance Architecture

Techniques:

### Code Splitting

```
dynamic imports
lazy loading
```

### Caching

Using:

```
React Query cache
```

### Optimization

```
minified JS
image optimization
lazy components
```

Goal:

```
Lighthouse score > 85
```

---

# 14. Deployment Architecture

Hosting platform:

Vercel

Deployment flow:

```
Developer
   ↓
GitHub Repo
   ↓
Vercel CI/CD
   ↓
Production URL
```



# 15. Data Flow Example

Patient registration flow:

```
User submits form
      ↓
React Hook Form
      ↓
Zod validation
      ↓
POST /api/patients
      ↓
API route saves patient
      ↓
Return patient ID
      ↓
UI success message
```

---

# 16. Testing Architecture

Testing types:

### Unit Tests

Test:

```
validation functions
services
utilities
```

Using:

Jest

---

### Component Tests

Test:

```
forms
buttons
tables
```

Using:

React Testing Library

---

# 17. Final System Diagram

```
                 Browser
                     │
                     │
             Next.js React UI
                     │
                     │
          React Query Data Layer
                     │
                     │
               Service Layer
                     │
                     │
             Next.js API Routes
                     │
                     │
               Mock Data Store
                (JSON Files)
```

---
