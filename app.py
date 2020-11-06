import uvicorn
from starlette.applications import Starlette
from starlette.responses import Response
from starlette.routing import Route
from starlette.middleware.cors import CORSMiddleware


with open('./data/data.json') as f:
  data = f.read()

async def datasample(request):
  return Response(data, media_type="application/json")

app = Starlette(debug=True, routes=[
  Route('/data', datasample),
])

app.add_middleware(
    CORSMiddleware, allow_origins=["*"], allow_headers=["*"], allow_methods=["*"]
)

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=3001)