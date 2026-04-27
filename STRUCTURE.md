# Job Portal Website

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui
- Prisma
- PostgreSQL (Neon/Supabase)
- NextAuth
- Cloudinary

---

## Project Structure

```bash
job-portal/
│
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── register/
│   │   │   └── page.tsx
│
│   ├── (candidate)/
│   │   ├── jobs/
│   │   │   ├── page.tsx
│   │   │   ├── [id]/
│   │   │   │   └── page.tsx
│   │   ├── saved-jobs/
│   │   │   └── page.tsx
│   │   ├── applications/
│   │   │   └── page.tsx
│   │   └── profile/
│   │       └── page.tsx
│
│   ├── (recruiter)/
│   │   ├── dashboard/
│   │   │   └── page.tsx
│   │   ├── post-job/
│   │   │   └── page.tsx
│   │   ├── manage-jobs/
│   │   │   └── page.tsx
│   │   └── applicants/
│   │       └── page.tsx
│
│   ├── api/
│   │   ├── auth/
│   │   ├── jobs/
│   │   ├── applications/
│   │   └── upload/
│
│   ├── layout.tsx
│   ├── page.tsx
│   └── not-found.tsx
│
├── components/
│   ├── ui/
│   ├── shared/
│   ├── jobs/
│   ├── recruiter/
│   └── forms/
│
├── lib/
│   ├── prisma.ts
│   ├── auth.ts
│   ├── utils.ts
│   └── validations.ts
│
├── services/
│   ├── job.service.ts
│   ├── auth.service.ts
│   └── application.service.ts
│
├── hooks/
│   ├── useAuth.ts
│   └── useDebounce.ts
│
├── types/
│   ├── job.ts
│   ├── user.ts
│   └── application.ts
│
├── prisma/
│   └── schema.prisma
│
├── public/
├── .env
├── package.json
└── middleware.ts
```

---

## Development Order (Important)

### Phase 1: Initial Setup

- Create Next.js project
- Install Prisma
- Setup PostgreSQL (Neon/Supabase)
- Setup shadcn/ui

### Phase 2: Authentication

- Register UI
- Login UI
- NextAuth setup
- Role-based authentication

### Phase 3: Database

- User model
- Job model
- Application model
- Saved job model

### Phase 4: Candidate Features

- Job listing
- Job detail
- Search/filter jobs
- Apply job
- Save jobs

### Phase 5: Recruiter Features

- Post job
- Manage jobs
- View applicants

### Phase 6: Extra Features

- Upload CV
- Profile page
- Notifications

### Phase 7: Deployment

- Push GitHub
- Deploy Vercel

---

## Main Features

- User authentication
- Role-based access (Candidate / Recruiter)
- Job listing
- Job details
- Apply job
- Save jobs
- Recruiter dashboard
- Upload CV

---

## Development Flow

1. Setup authentication
2. Create database schema
3. Build job CRUD
4. Build apply feature
5. Recruiter dashboard
6. Upload CV
7. Deploy to Vercel
