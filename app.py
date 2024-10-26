from sanic import Sanic
from sanic.response import text
from sanic_ext import render

app = Sanic("MyHelloWorldApp")

@app.get("/")
async def hello_world(request):
    return text("Hello, world.")
