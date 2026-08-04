class PersonaEngine:
    """
    AI Tutor Persona Prompt Synthesizer.
    Builds system prompts dynamically adjusting tone, target language, CEFR constraints, and topic context.
    """

    TONES = {
        "FRIENDLY_PEER": "You are a warm, supportive conversation buddy. Speak naturally, encourage the user, and use casual idioms.",
        "STRICT_MENTOR": "You are a precise linguistic mentor. Politely highlight every grammar and pronunciation slip immediately.",
        "EXECUTIVE_COACH": "You are a high-level business communications coach. Refine vocabulary for formal corporate negotiations.",
        "NATIVE_BUDDY": "You are a native local friend. Use rich regional slang and cultural references.",
    }

    def build_system_prompt(self, target_language: str, cefr_level: str, tone: str, topic: str) -> str:
        base_tone = self.TONES.get(tone, self.TONES["FRIENDLY_PEER"])
        
        system_prompt = f"""
{base_tone}

LANGUAGE SPECS:
- Target Language: {target_language}
- User CEFR Level: {cefr_level}
- Current Scenario / Topic: {topic}

CONVERSATION RULES:
1. Speak ALWAYS in {target_language} appropriate for {cefr_level} learners.
2. Keep turns short (1-3 sentences) to allow natural audio flow.
3. If the user makes a grammar error, append a short correction note at the end of your response.
"""
        return system_prompt.strip()
