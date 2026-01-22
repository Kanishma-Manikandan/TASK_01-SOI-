from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from typing import Dict
from .stt import transcribe_audio
import shutil
import os

app = FastAPI()

# Allow CORS for development
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"status": "online", "message": "Conversion Protocol Backend Active"}

from pydantic import BaseModel

class ConversionRequest(BaseModel):
    url: str

@app.post("/convert")
async def convert_action(req: ConversionRequest):
    # Simulate processing with a mock delay or just return data
    print(f"Analyzing URL: {req.url}")
    
    # Return mock audit data
    return {
        "status": "success", 
        "message": "Analysis complete",
        "url": req.url,
        "score": 72,
        "metrics": {
            "performance": 65,
            "accessibility": 80,
            "seo": 90,
            "pwa": 45
        },
        "issues": [
            {"severity": "high", "title": "Large Layout Shifts", "description": "Cumulative Layout Shift (CLS) is above 0.25."},
            {"severity": "medium", "title": "Images Not Optimized", "description": "Serve images in next-gen formats like WebP."},
            {"severity": "low", "title": "Missing Meta Description", "description": "Add a meta description to improve SEO CTR."}
        ]
    }

@app.post("/transcribe")
async def transcribe(file: UploadFile = File(...)):
    try:
        # Save uploaded file temporarily
        temp_file = f"temp_{file.filename}"
        with open(temp_file, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
        
        # Process STT
        text = transcribe_audio(temp_file)
        
        # Cleanup
        os.remove(temp_file)
        
        return {"text": text}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
