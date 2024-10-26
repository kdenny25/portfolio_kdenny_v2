from sanic import Sanic
from sanic.response import text
from sanic_ext import render

app = Sanic("KevinPortfolio")

app.static('/static/', 'static')
@app.get("/")
async def hello_world(request):
    return await render('index.html')
