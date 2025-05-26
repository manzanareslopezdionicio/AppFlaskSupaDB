import os
from dotenv import load_dotenv # type: ignore

load_dotenv()

class Config:
    SUPABASE_URL = os.getenv('SUPABASE_URL')
    SUPABASE_KEY = os.getenv('SUPABASE_KEY')
    SECRET_KEY = os.getenv('SECRET_KEY') or 'una-clave-secreta-muy-segura'