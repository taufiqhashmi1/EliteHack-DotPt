# Lumière: Deterministic AI Travel Architecture

**Submission for ELITE HACK (Web Problem Statement)** | **Team:** DotPt

## The Paradigm Shift in Travel Curation

Lumière is not a generic wrapper around a Large Language Model. It is a highly secure, deterministic travel curation engine powered by the proprietary **Gati-Agent Workflow**. By marrying PostGIS spatial database queries with the cognitive reasoning of Gemini 2.5 Flash, Lumière eradicates AI hallucination, delivering mathematically vetted, budget-constrained itineraries in real-time.

## Architectural Supremacy

### 1. The Anti-Hallucination "Sieve"

Traditional AI travel planners fabricate non-existent hotels and impossible flight routes. Lumière employs a strict **Database-First Sieve**.

* **Spatial Filtering:** Utilizes PostgreSQL + PostGIS (`ST_DWithin`, `ST_Distance`) to calculate exact geographic proximities between transit nodes, hotels, and tourist destinations.
* **Ground Truth Injection:** The LLM is strictly constrained to reasoning over verified database records (IDs, exact prices, verified distances) injected via structured prompts. It cannot hallucinate a reality that does not exist in the database.

### 2. XAI (Explainable AI) Engine

Every generated itinerary includes a deterministic reasoning layer. The engine explicitly justifies *why* a specific hotel or transit route was selected based on the user's micro-budget and spatial proximity to requested activities.

## Enterprise-Grade Security

Lumière operates on a zero-trust architecture, ensuring data integrity and user privacy at every layer.

* **Row Level Security (RLS):** Cryptographically enforces at the PostgreSQL database level that authenticated users can only read, mutate, or access their specific `Trip_Bundles` and profile data.
* **Strict Payload Validation:** Every API mutation is aggressively sanitized and type-checked using **Zod** schema validation, neutralizing injection attacks, bypassing logical flaws (e.g., negative budgets, temporal paradoxes in dates), and dropping malformed requests before they reach the execution layer.
* **Session Auth & Bot Mitigation:** Leverages Supabase Authentication with hardened session management, fortified against automated bot attacks and API quota abuse via integrated CAPTCHA verification at critical entry points.
* **Secret Isolation:** All LLM API keys and privileged database service roles are strictly isolated within Next.js Server Components and Edge environments. There is zero credential exposure to the client bundle.

## Technical Matrix

* **Client & Server Framework:** Next.js (App Router, Server Actions)
* **Database & Auth:** Supabase, PostgreSQL, PostGIS (Geospatial routing)
* **Generative Reasoning:** Google Gemini 2.5 Flash (Forced JSON-schema generation)
* **Data Validation:** Zod
* **Styling & UI:** Tailwind CSS, Custom Glassmorphism, Lucide React

## Execution Protocol (Local Setup)

1. Initialize the repository:
```bash
git clone <repository_url>
cd <repository_directory>
npm install

```


2. Configure environment variables in `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL="your_supabase_url"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your_supabase_anon_key"
GEMINI_API_KEY="your_gemini_2.5_api_key"

```


3. Execute the PostGIS extension and DDL initialization scripts in the Supabase SQL editor to establish the database schema and RLS policies.
4. Launch the application:
```bash
npm run dev

```