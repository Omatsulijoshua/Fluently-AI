# Fluently AI: Ecosystem Architecture & Technology Blueprint

---

## 1. High-Level System Architecture

Fluently AI is structured as a **distributed micro-services and micro-frontends ecosystem**, backed by a unified NestJS core backend, Python AI pipeline services, real-time WebSockets, PostgreSQL + pgvector, Redis, and multi-tenant portal management.

```
                                  +-------------------------------------------------+
                                  |              FLUENTLY AI CLIENTS                |
                                  +-------------------------------------------------+
                                  |  - Flutter Mobile App (iOS / Android / Tablet)  |
                                  |  - Student Web App (Next.js 15 App Router)      |
                                  |  - Landing & Marketing Site (Next.js SSG/ISR)   |
                                  |  - Teacher, School, Parent, Enterprise Portals  |
                                  |  - Admin & Super Admin Dashboards (React / Vite)|
                                  +-------------------------------------------------+
                                                           |
                                                   HTTPS / WebSockets
                                                           |
                                                           v
                                  +-------------------------------------------------+
                                  |          API GATEWAY & LOAD BALANCER            |
                                  |    (Nginx / Traefik / Cloudflare Edge / WAF)    |
                                  +-------------------------------------------------+
                                                           |
                                           +---------------+---------------+
                                           |                               |
                                           v                               v
+--------------------------------------------------+    +---------------------------------------------------+
|               NESTJS BACKEND CORE                |    |             PYTHON AI ENGINE PIPELINE             |
+--------------------------------------------------+    +---------------------------------------------------+
| - Auth & User Identity Service (OAuth/JWT/2FA)   |    | - Real-time Voice Audio Pipeline (WebRTC/WS)      |
| - Personalization & Memory Graph Service         |    | - Forced Alignment & IPA Pronunciation (Wav2Vec2) |
| - Gamification Engine (XP, Streaks, Leaderboards)|    | - Semantic Memory Vector Search (LangChain/Llama)|
| - Content & Curriculum Generation Service        |    | - Multi-LLM Gateway (OpenAI/Claude/Gemini/DeepSeek)|
| - Institutional Portals & Multi-tenancy Engine   |    | - Speech Synthesis & Voice Cloning (Kokoro/Eleven) |
| - Payments & Billing Service (Stripe/PayPal/Pay) |    +---------------------------------------------------+
+--------------------------------------------------+                              |
                         |                                                        |
                         +------------------------+-------------------------------+
                                                  |
                                                  v
                               +-------------------------------------+
                               |           DATA STORAGE LAYER        |
                               +-------------------------------------+
                               | - PostgreSQL (Relational Data)      |
                               | - pgvector (Vector Embeddings)      |
                               | - Redis (Caching, Pub/Sub, Queues)  |
                               | - OpenSearch (Text Search & Logs)   |
                               | - S3-Compatible Object Storage       |
                               +-------------------------------------+
```

---

## 2. Multi-App Ecosystem Architecture

| Application App | Tech Stack | Role & Features |
| :--- | :--- | :--- |
| **Flutter Mobile App** | Flutter (Dart), BLoC / Riverpod | Cross-platform iOS, Android, and Tablet app with offline voice caching, low-latency audio streaming, interactive Lottie animations, and push notifications. |
| **Student Web App** | Next.js 15 (React 19, TypeScript, Tailwind/Vanilla CSS) | Full web-based learning suite, media player with interactive transcriptions, voice recording, instant reading ingestion, and live audio chat rooms. |
| **Landing & Marketing** | Next.js 15 (SSG, ISR, SEO Optimized) | Fast public marketing pages, blog, pricing matrix, enterprise request demo forms, interactive language preview widgets. |
| **Teacher Portal** | Next.js / React, TanStack Query | Classroom setup, assignment wizard, AI homework evaluation, real-time student audio review, automated grading reports. |
| **School Portal** | Next.js / React | Multi-teacher management, curriculum standardization, district reporting, license seat allocation, compliance controls. |
| **Parent Portal** | Next.js / React | Child activity summary, screen time limits, goal tracking, safety setting controls, achievement rewards. |
| **Enterprise Portal** | Next.js / React | Company organization units, SSO/SAML configuration, custom corporate vocabulary lists, employee compliance certificates. |
| **Admin Dashboard** | React / Vite, Tailwind/Vanilla CSS | Global user management, course editing, live session monitoring, payment transaction logs, customer support tickets. |
| **Super Admin Platform** | React / Vite, Dynamic Config UI | Multi-LLM provider routing, model temperature/prompt tuning, feature flags (LaunchDarkly / Unleash), system audit logs, cluster metrics. |

---

## 3. Modular AI Engine Pipeline

Fluently AI decoupled AI service architecture enables **zero-downtime model switching** and **hybrid provider routing**:

1. **LLM Orchestration Layer**:
   - **Grammar & Explanation**: Anthropic Claude 3.5 Sonnet / DeepSeek-V3
   - **Fast Conversational Dialogue**: OpenAI GPT-4o-mini / Google Gemini 1.5 Flash
   - **Deep Reasoning & Exam Scoring**: OpenAI o3-mini / Claude 3.5 Sonnet

2. **Speech & Audio Pipeline**:
   - **Speech-to-Text (STT)**: OpenAI Whisper Large v3 / Deepgram Nova-2 / Faster-Whisper.
   - **Pronunciation & Acoustic Analysis**: Custom PyTorch / Wav2Vec2 phoneme alignment server + Torchaudio.
   - **Text-to-Speech (TTS)**: ElevenLabs / Kokoro-82M / OpenAI Audio / Azure Neural Speech.

3. **Memory & Retrieval Augmented Generation (RAG)**:
   - **Vector Store**: PostgreSQL with `pgvector` for semantic document chunking and user conversation embeddings.
   - **Spaced Repetition Engine**: SuperMemo SM-2 algorithm combined with Half-Life Regression (HLR) memory decay scoring stored in Redis.
