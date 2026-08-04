-- DDL Schema Visualization and pgvector Vector Index Declarations for Fluently AI

-- Enable pgvector Extension for Semantic AI Memory Search
CREATE EXTENSION IF NOT EXISTS vector;

-- Dynamic Vector Table for Episodic AI Memory Embeddings
CREATE TABLE IF NOT EXISTS episodic_memory_vectors (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    category VARCHAR(50) NOT NULL, -- e.g. PRONUNCIATION, GRAMMAR, VOCABULARY
    context_text TEXT NOT NULL,
    embedding vector(1536), -- Compatible with OpenAI text-embedding-3-small or custom 1536d models
    metadata JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- HNSW Vector Index for Sub-10ms Approximate Nearest Neighbor (ANN) Semantic Retrieval
CREATE INDEX IF NOT EXISTS idx_episodic_memory_hnsw 
ON episodic_memory_vectors 
USING hnsw (embedding vector_cosine_ops)
WITH (m = 16, ef_construction = 64);
