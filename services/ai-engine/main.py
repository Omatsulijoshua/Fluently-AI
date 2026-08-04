import os
import time
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Dict, Any, Optional
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(
    title="Fluently AI Engine Service",
    description="High-performance Python microservice for speech analysis, phoneme alignment, and LLM orchestration",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class HealthResponse(BaseModel):
    status: str
    service: str
    uptime: float
    timestamp: str

class AIModelStatus(BaseModel):
    provider: str
    active: bool
    latency_ms: Optional[float] = None

start_time = time.time()

@app.get("/health", response_model=HealthResponse)
async def health_check():
    return HealthResponse(
        status="ok",
        service="fluently-ai-engine",
        uptime=time.time() - start_time,
        timestamp=time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime())
    )

@app.get("/api/v1/models/status")
async def get_models_status() -> Dict[str, Any]:
    return {
        "providers": [
            {"provider": "OpenAI", "active": bool(os.getenv("OPENAI_API_KEY"))},
            {"provider": "Anthropic", "active": bool(os.getenv("ANTHROPIC_API_KEY"))},
            {"provider": "Google Gemini", "active": bool(os.getenv("GEMINI_API_KEY"))},
            {"provider": "DeepSeek", "active": bool(os.getenv("DEEPSEEK_API_KEY"))},
            {"provider": "ElevenLabs", "active": bool(os.getenv("ELEVENLABS_API_KEY"))},
        ]
    }

if __name__ == "__main__":
    import uvicorn
    port = int(os.getenv("PORT", 8000))
    uvicorn.run("main:app", host="0.0.0.0", port=port, reload=True)
