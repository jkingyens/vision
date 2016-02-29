# Server-side Google Cloud Vision sample 

Server-side cloud vision for detecting a dog in image

1. From the Google Cloud Platform console, select "API Manager".
2. Tap "create credentials" and choose "server account key"
3. Select JSON format (preferred)
4. Save the JSON file as "auth.json" in the project directory.

type:

```
node sample.js
```

output:

```
[
  {
    "labelAnnotations": [
      {
        "mid": "/m/0bt9lr",
        "description": "dog",
        "score": 0.97321004
      },
      {
        "mid": "/m/0k0pj",
        "description": "nose",
        "score": 0.96900332
      },
      {
        "mid": "/m/01t032",
        "description": "golden retriever",
        "score": 0.93123311
      },
      {
        "mid": "/m/09686",
        "description": "vertebrate",
        "score": 0.85705227
      },
      {
        "mid": "/m/04rky",
        "description": "mammal",
        "score": 0.84754276
      },
      {
        "mid": "/m/02cqfm",
        "description": "close up",
        "score": 0.81905395
      },
      {
        "mid": "/m/05mqq3",
        "description": "snout",
        "score": 0.78449845
      },
      {
        "mid": "/m/05nnm",
        "description": "organism",
        "score": 0.77502412
      },
      {
        "mid": "/m/0km3f",
        "description": "labrador retriever",
        "score": 0.77143818
      },
      {
        "mid": "/m/01z5f",
        "description": "canidae",
        "score": 0.70934463
      }
    ]
  }
]
```
