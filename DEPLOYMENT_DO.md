# Crochet.ai - Deployment Configuration for Digital Ocean

## Prerequisites
- Node.js 18+ installed
- PostgreSQL database
- Domain name (optional)

## Environment Setup

1. Create a PostgreSQL database on Digital Ocean Managed Databases or install PostgreSQL on your droplet

2. Set environment variables in your droplet:
```bash
export DATABASE_URL="postgresql://user:password@host:5432/crochet_ai"
export NEXTAUTH_SECRET="your-secret-key-here"
export NEXTAUTH_URL="https://yourdomain.com"
export AI_API_KEY="your-ai-api-key"
export AI_API_URL="https://api.example.com/v1"
export NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_live_..."
export STRIPE_SECRET_KEY="sk_live_..."
```

## Deployment Steps

### Option 1: Using Docker (Recommended)

1. Create Dockerfile in project root:
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

RUN npx prisma generate
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

2. Build and run:
```bash
docker build -t crochet-ai .
docker run -p 3000:3000 --env-file .env crochet-ai
```

### Option 2: Direct Deployment

1. Clone repository:
```bash
git clone https://github.com/DarkGemini256/Crochet.ai.git
cd Crochet.ai
```

2. Install dependencies:
```bash
npm install
```

3. Set up database:
```bash
npx prisma generate
npx prisma migrate deploy
npx prisma db seed
```

4. Build application:
```bash
npm run build
```

5. Start with PM2:
```bash
npm install -g pm2
pm2 start npm --name "crochet-ai" -- start
pm2 save
pm2 startup
```

### Nginx Configuration

Create `/etc/nginx/sites-available/crochet-ai`:
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable site:
```bash
ln -s /etc/nginx/sites-available/crochet-ai /etc/nginx/sites-enabled/
nginx -t
systemctl reload nginx
```

### SSL with Certbot
```bash
sudo certbot --nginx -d yourdomain.com
```

## Monitoring

View logs:
```bash
pm2 logs crochet-ai
```

Check status:
```bash
pm2 status
```

## Updates

```bash
git pull
npm install
npx prisma generate
npx prisma migrate deploy
npm run build
pm2 restart crochet-ai
```
