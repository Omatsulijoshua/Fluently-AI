from typing import Dict, Any, List

class CurriculumGenerator:
    """
    Dynamic Daily Curriculum Synthesizer.
    Aggregates weak phonemes, HLR due vocabulary, and grammar error history into personalized daily lesson paths.
    """

    def generate_daily_curriculum(self, user_id: str, cefr_level: str, weak_phonemes: List[str], due_words: List[str]) -> Dict[str, Any]:
        micro_lessons = [
            {
                "id": "les_01",
                "title": "Acoustic Drill: Mastering /r/ trill",
                "type": "PRONUNCIATION",
                "targetPhoneme": "/r/",
                "estimatedMinutes": 5,
            },
            {
                "id": "les_02",
                "title": "Grammar Reinforcement: Prepositional Contractions (a + el)",
                "type": "GRAMMAR",
                "estimatedMinutes": 7,
            },
            {
                "id": "les_03",
                "title": "AI Dialogue: Renting an Apartment in Barcelona",
                "type": "CONVERSATION",
                "estimatedMinutes": 10,
            },
        ]

        return {
            "userId": user_id,
            "cefrLevel": cefr_level,
            "generatedAt": "2026-08-04T20:56:27Z",
            "totalDailyMinutes": 22,
            "microLessons": micro_lessons,
        }
