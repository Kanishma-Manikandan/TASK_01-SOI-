import speech_recognition as sr
import os

def transcribe_audio(file_path: str) -> str:
    """
    Transcribes audio file to text using Google Web Speech API.
    """
    recognizer = sr.Recognizer()
    
    # Check if file exists
    if not os.path.exists(file_path):
        return "Error: File not found"

    try:
        # Load audio file
        with sr.AudioFile(file_path) as source:
            audio_data = recognizer.record(source)
            
        # Transcribe
        # Note: default key is for testing only. PROD needs a real key or offline model.
        text = recognizer.recognize_google(audio_data)
        return text
        
    except sr.UnknownValueError:
        return "" # Audio not understood
    except sr.RequestError as e:
        return f"API Error: {e}"
    except Exception as e:
        return f"Error: {str(e)}"
