# Fluently AI: Cloud Production Deployment Guide

This guide provides step-by-step instructions for deploying **Fluently AI** across cloud providers (Vercel, Railway, Render, AWS EKS/RDS).

---

## 1. Web Frontends Deployment (Vercel)

Deploy the 6 Next.js web applications to Vercel:

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```
2. Deploy Landing Page:
   ```bash
   cd apps/landing-web
   vercel --prod
   ```
3. Deploy Student Web Workspace:
   ```bash
   cd apps/student-web
   vercel --prod
   ```
4. Deploy Teacher, Parent, School & Enterprise Portals similarly.

---

## 2. Backend Microservices Deployment (Railway / Render / Docker)

### Option A: Render (Zero Infrastructure Overhead)
1. Link your Git repository to Render.com.
2. Select **Blueprint** and point to [`deploy/cloud/render.yaml`](file:///c:/Users/Joshua/Desktop/My%20Projects/apps/Fluently%20AI/deploy/cloud/render.yaml).
3. Render automatically provisions PostgreSQL + `pgvector`, Redis, NestJS Core Backend, and Python AI Engine.

### Option B: AWS EKS + RDS PostgreSQL (Enterprise Production)
1. Initialize Terraform infrastructure:
   ```bash
   cd deploy/cloud/terraform
   terraform init
   terraform apply -var="db_password=YOUR_SECURE_PASSWORD"
   ```
2. Apply Kubernetes manifests to EKS cluster:
   ```bash
   aws eks update-kubeconfig --region us-east-1 --name fluently-ai-cluster
   kubectl apply -f deploy/k8s/
   ```

---

## 3. Database Migration & Vector Indexes

Run Prisma migration against production PostgreSQL database:
```bash
cd services/core-backend
DATABASE_URL="postgresql://fluently_admin:SECURE_PASS@PROD_HOST:5432/fluently_db" npx prisma migrate deploy
DATABASE_URL="postgresql://fluently_admin:SECURE_PASS@PROD_HOST:5432/fluently_db" npx prisma db seed
```

---

## 4. Verification

Execute Master Verification against production endpoints:
```bash
node scripts/verify_all_phases.js
```
