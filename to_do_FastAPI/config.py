from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    app_name: str = "To Do FastAPI API"
    app_description: str = "API on FastAPI for React"
    DEBUG: bool

    # Database
    DATABASE_NAME: str
    DATABASE_USER: str
    DATABASE_PASSWORD: str
    DATABASE_HOST: str
    DATABASE_PORT: str

    model_config = SettingsConfigDict(env_file=".env")


settings = Settings()
