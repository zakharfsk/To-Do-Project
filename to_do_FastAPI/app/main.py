from fastapi import FastAPI

from config import settings

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World", "app_name": settings.app_name, "admin_email": settings.DEBUG}


@app.get("/hello/{name}")
async def say_hello(name: str):
    return {"message": f"Hello {name}"}
