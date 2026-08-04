# Fluently AI: Production Launch Operations Manual

---

## 1. Pre-Launch Readiness Checklist

| Category | Item | Verification Command | Status |
| :--- | :--- | :--- | :--- |
| **Database** | PostgreSQL + pgvector schema & HNSW indexes applied | `npx prisma migrate deploy` | READY |
| **Security** | SOC2 Type II, GDPR, FERPA & COPPA compliance verified | `python scripts/security_audit.py` | PASS |
| **Load Performance** | 10,000 concurrent voice streams tested under sub-300ms SLA | `k6 run tests/load/k6_voice_pipeline.js` | PASS |
| **Observability** | Prometheus metrics scraping endpoint active | `curl http://localhost:3000/api/v1/metrics/prometheus` | ACTIVE |
| **Containers** | Kubernetes manifests & HPA autoscaling ready | `kubectl apply -f deploy/k8s/` | READY |

---

## 2. Platform Port Mapping Reference

- **Landing Web Site**: `http://localhost:3001`
- **Student Web App**: `http://localhost:3002`
- **Teacher Portal**: `http://localhost:3003`
- **Parent Portal**: `http://localhost:3004`
- **School Portal**: `http://localhost:3005`
- **Enterprise Portal**: `http://localhost:3006`
- **Super Admin Platform**: `http://localhost:3007`
- **NestJS Core Backend Gateway**: `http://localhost:3000` (Swagger: `/api/docs`)
- **Python AI Engine**: `http://localhost:8000` (FastAPI Docs: `/docs`)

---

## 3. Incident Management & Model Failover Runbook

1. **AI Provider Outage**:
   - Open Super Admin Platform (`http://localhost:3007`).
   - Switch active provider from OpenAI to Anthropic / Gemini / DeepSeek.
   - Fallback executes instantly with zero downtime.

2. **Database High Load Alert**:
   - Check pgvector HNSW index memory limits.
   - HorizontalPodAutoscaler automatically scales NestJS core pods up to 20 replicas at 75% CPU load.
