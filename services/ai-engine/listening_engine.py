from typing import Dict, Any, List

class ListeningEngine:
    """
    Listening Practice & Audio Shadowing Exercise Generator.
    """

    def generate_shadowing_session(self, text: str) -> Dict[str, Any]:
        timestamps = [
            {"startMs": 0, "endMs": 2400, "text": "El descubrimiento de la penicilina"},
            {"startMs": 2400, "endMs": 4800, "text": "cambió el rumbo de la medicina moderna."},
        ]

        questions = [
            {
                "question": "¿Qué efecto tuvo el descubrimiento de la penicilina?",
                "options": ["Cambió la medicina moderna", "No tuvo impacto", "Fue prohibido"],
                "correctIndex": 0,
            }
        ]

        return {
            "transcriptText": text,
            "timestampSegments": timestamps,
            "comprehensionQuestions": questions,
            "recommendedTempo": 1.0,
        }
