# Crochet.ai

The ultimate AI-powered crochet planning app. Generate original patterns, plan projects, track progress, and get AI-guided tutorials for all skill levels.

## Features

- 🎨 **AI Pattern Generator** - Create custom crochet patterns with AI assistance
- 📋 **Project Planner** - Track and manage multiple crochet projects
- 🎓 **Interactive Tutorials** - Learn from beginner to advanced techniques
- 👥 **Community Feed** - Share creations and connect with other crocheters
- 📊 **Progress Tracking** - Monitor your crochet journey
- 💾 **Pattern Export** - Download patterns in multiple formats
- 💳 **Subscription Plans** - Flexible pricing with Stripe integration
- 🔐 **Secure Authentication** - NextAuth with JWT tokens

## Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **NextAuth.js** - Authentication with JWT

### Backend
- **Express.js** - API server
- **Prisma** - ORM for database management
- **PostgreSQL** - Relational database
- **Stripe** - Payment processing

### AI Integration (Placeholders)
- Pattern generation API endpoint
- Image preview generation endpoint

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL database
- (Optional) Stripe account for payments
- (Optional) AI API credentials

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/DarkGemini256/Crochet.ai.git
cd Crochet.ai
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env
```

Edit `.env` with your configuration:
```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/crochet_ai?schema=public"

# NextAuth
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"

# Stripe (optional)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_SECRET_KEY="sk_test_..."

# AI API (optional)
AI_API_KEY="your-ai-api-key"
AI_API_URL="https://api.example.com/v1"

# Express Server
EXPRESS_PORT=3001
```

Generate a secret key:
```bash
openssl rand -base64 32
```

4. **Set up the database**
```bash
# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate dev

# Seed the database with example data
npm run prisma:seed
```

5. **Run the development server**
```bash
# Start Next.js app
npm run dev

# In another terminal, start Express server (optional)
npm run server:dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Default Demo Account

After seeding, you can login with:
- Email: `demo@crochet.ai`
- Password: `demo123`

## Project Structure

```
Crochet.ai/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # Dashboard
│   ├── patterns/          # Pattern pages
│   ├── projects/          # Project management
│   ├── tutorials/         # Tutorial pages
│   ├── community/         # Community feed
│   ├── profile/           # User profile
│   └── pricing/           # Pricing page
├── components/            # React components
├── lib/                   # Utility functions
├── prisma/               # Database schema and migrations
│   ├── schema.prisma     # Prisma schema
│   └── seed.ts           # Database seeder
├── server/               # Express API server
│   └── index.ts          # Server entry point
├── shared/               # Shared types
└── types/                # TypeScript type definitions
```

## Available Scripts

```bash
# Development
npm run dev              # Start Next.js dev server
npm run server:dev       # Start Express server in dev mode

# Database
npm run prisma:generate  # Generate Prisma client
npm run prisma:migrate   # Run database migrations
npm run prisma:seed      # Seed database with example data
npm run prisma:studio    # Open Prisma Studio

# Production
npm run build           # Build for production
npm start              # Start production server
npm run lint           # Run ESLint
```

## Deployment

### Deploy to Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Set environment variables in Vercel dashboard

4. Configure PostgreSQL database (use Vercel Postgres or external provider)

See [Vercel Documentation](https://vercel.com/docs) for more details.

### Deploy to Digital Ocean

See [DEPLOYMENT_DO.md](./DEPLOYMENT_DO.md) for detailed instructions on deploying to Digital Ocean droplets.

## Database Schema

The application uses the following main models:

- **User** - User accounts and profiles
- **Pattern** - Crochet patterns (public and private)
- **Project** - User projects with progress tracking
- **Tutorial** - Educational content
- **CommunityPost** - Community feed posts
- **Comment** - Comments on posts
- **Notification** - User notifications
- **Subscription** - Stripe subscription data

## API Endpoints

### Next.js API Routes

- `POST /api/auth/signup` - User registration
- `POST /api/auth/[...nextauth]` - NextAuth endpoints
- `POST /api/patterns/generate` - AI pattern generation
- `POST /api/onboarding` - Complete user onboarding

### Express API Server

- `GET /api/status` - Server health check
- `POST /api/ai/generate-pattern` - AI pattern generation (placeholder)
- `POST /api/ai/preview-image` - Image preview generation (placeholder)

## AI Integration

The application includes placeholder endpoints for AI integration. To connect your AI service:

1. Update environment variables with your AI API credentials
2. Modify `app/api/patterns/generate/route.ts` to call your AI API
3. Update `server/index.ts` for Express AI endpoints

Example AI providers:
- OpenAI GPT-4 for pattern generation
- Stable Diffusion for image previews
- Custom fine-tuned models

## Stripe Integration

To enable payments:

1. Create a Stripe account
2. Add API keys to `.env`
3. Create products and prices in Stripe Dashboard
4. Update `stripePriceId` values in `app/pricing/page.tsx`
5. Implement webhook handlers for subscription events

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the terms specified in the LICENSE file.

## Support

For support, email support@crochet.ai or open an issue on GitHub.

## Acknowledgments

- Built with Next.js, Prisma, and Tailwind CSS
- Icons from Unicode emoji
- Inspired by the amazing crochet community

