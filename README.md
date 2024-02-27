## Getting Started

### Install packages
```bash
npm install
```

### Setup Environment variables(.env) file
```bash
DATABASE_URL=
DIRECT_URL=

AUTH_SECRET=

GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

RESEND_API_KEY=
```

### Setup Prisma
```bash
npx prisma migrate reset    # resets/deletes all the data in db
npx prisma generate
npx prisma db push
npx prisma studio
```

### Start the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
