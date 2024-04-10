window.BENCHMARK_DATA = {
  "lastUpdate": 1712721137377,
  "repoUrl": "https://github.com/LuxDL/Lux.jl",
  "entries": {
    "Benchmark Results": [
      {
        "commit": {
          "author": {
            "email": "avikpal@mit.edu",
            "name": "Avik Pal",
            "username": "avik-pal"
          },
          "committer": {
            "email": "avikpal@mit.edu",
            "name": "Avik Pal",
            "username": "avik-pal"
          },
          "distinct": true,
          "id": "b7a0b633edc658a34fe60235b5ad321da659cd2f",
          "message": "Link the benchmarks",
          "timestamp": "2024-04-04T15:41:21-04:00",
          "tree_id": "205d7db2db6cdbb8634a45a3ad6b619968490ab9",
          "url": "https://github.com/LuxDL/Lux.jl/commit/b7a0b633edc658a34fe60235b5ad321da659cd2f"
        },
        "date": 1712260048861,
        "tool": "julia",
        "benches": [
          {
            "name": "Dense(2 => 2)/cpu/forward/NamedTuple/(2, 128)",
            "value": 1999.7,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2176\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":10,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/forward/ComponentArray/(2, 128)",
            "value": 1566.2631578947369,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2176\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":152,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/forward/NamedTuple/(20, 128)",
            "value": 4977.857142857143,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20736\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":7,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/forward/ComponentArray/(20, 128)",
            "value": 4790.285714285715,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20736\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":7,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/forward/NamedTuple/(64, 64, 3, 128)",
            "value": 10265756,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12227408\nallocs=43\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/forward/ComponentArray/(64, 64, 3, 128)",
            "value": 10274883,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12227424\nallocs=41\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/NamedTuple/(32, 32, 3, 1)",
            "value": 22632895,
            "unit": "ns",
            "extra": "gctime=0\nmemory=11504192\nallocs=1202\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/NamedTuple/(32, 32, 3, 16)",
            "value": 245920571.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=81699072\nallocs=1225\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/NamedTuple/(32, 32, 3, 64)",
            "value": 972877624,
            "unit": "ns",
            "extra": "gctime=642623\nmemory=306327616\nallocs=1225\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/ComponentArray/(32, 32, 3, 1)",
            "value": 22501168.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=11501072\nallocs=1124\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/ComponentArray/(32, 32, 3, 16)",
            "value": 247109687.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=81695952\nallocs=1147\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/ComponentArray/(32, 32, 3, 64)",
            "value": 987921217,
            "unit": "ns",
            "extra": "gctime=621043\nmemory=306324496\nallocs=1147\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/forward/NamedTuple/(64, 64, 64, 128)",
            "value": 373013391,
            "unit": "ns",
            "extra": "gctime=0\nmemory=260780432\nallocs=43\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/forward/ComponentArray/(64, 64, 64, 128)",
            "value": 369428453,
            "unit": "ns",
            "extra": "gctime=0\nmemory=260780448\nallocs=41\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/forward/NamedTuple/(64, 64, 1, 128)",
            "value": 3929480,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4078160\nallocs=43\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/forward/ComponentArray/(64, 64, 1, 128)",
            "value": 3921774,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4078176\nallocs=41\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/forward/NamedTuple/(200, 128)",
            "value": 88845,
            "unit": "ns",
            "extra": "gctime=0\nmemory=204896\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/forward/ComponentArray/(200, 128)",
            "value": 88585,
            "unit": "ns",
            "extra": "gctime=0\nmemory=204896\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/forward/NamedTuple/(64, 64, 16, 128)",
            "value": 56548766,
            "unit": "ns",
            "extra": "gctime=0\nmemory=65197712\nallocs=43\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/forward/ComponentArray/(64, 64, 16, 128)",
            "value": 56536433,
            "unit": "ns",
            "extra": "gctime=0\nmemory=65197728\nallocs=41\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/forward/NamedTuple/(2000, 128)",
            "value": 6485167,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2048096\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/forward/ComponentArray/(2000, 128)",
            "value": 6489996.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2048096\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "avikpal@mit.edu",
            "name": "Avik Pal",
            "username": "avik-pal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "849ec40bd359fc35856b7935dc5332ff7af81c62",
          "message": "Merge pull request #571 from LuxDL/ap/stable_docs\n\nTry fixing the hydration error",
          "timestamp": "2024-04-05T00:21:08-04:00",
          "tree_id": "162bf398a6fe704ecab8c196f54e8048295eabfe",
          "url": "https://github.com/LuxDL/Lux.jl/commit/849ec40bd359fc35856b7935dc5332ff7af81c62"
        },
        "date": 1712291240908,
        "tool": "julia",
        "benches": [
          {
            "name": "Dense(2 => 2)/cpu/forward/NamedTuple/(2, 128)",
            "value": 2001.7,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2176\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":10,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/forward/ComponentArray/(2, 128)",
            "value": 1590.4709677419355,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2176\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":155,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/forward/NamedTuple/(20, 128)",
            "value": 4869.142857142857,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20736\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":7,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/forward/ComponentArray/(20, 128)",
            "value": 4718.857142857143,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20736\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":7,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/forward/NamedTuple/(64, 64, 3, 128)",
            "value": 10357033,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12227408\nallocs=43\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/forward/ComponentArray/(64, 64, 3, 128)",
            "value": 10383988.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12227424\nallocs=41\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/NamedTuple/(32, 32, 3, 1)",
            "value": 22706894,
            "unit": "ns",
            "extra": "gctime=0\nmemory=11504192\nallocs=1202\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/NamedTuple/(32, 32, 3, 16)",
            "value": 251415835,
            "unit": "ns",
            "extra": "gctime=0\nmemory=81699072\nallocs=1225\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/NamedTuple/(32, 32, 3, 64)",
            "value": 990621987,
            "unit": "ns",
            "extra": "gctime=319119.5\nmemory=306327616\nallocs=1225\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/ComponentArray/(32, 32, 3, 1)",
            "value": 22766979.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=11501072\nallocs=1124\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/ComponentArray/(32, 32, 3, 16)",
            "value": 249637390,
            "unit": "ns",
            "extra": "gctime=0\nmemory=81695952\nallocs=1147\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/ComponentArray/(32, 32, 3, 64)",
            "value": 991675056.5,
            "unit": "ns",
            "extra": "gctime=288992\nmemory=306324496\nallocs=1147\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/forward/NamedTuple/(64, 64, 64, 128)",
            "value": 371776615,
            "unit": "ns",
            "extra": "gctime=0\nmemory=260780432\nallocs=43\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/forward/ComponentArray/(64, 64, 64, 128)",
            "value": 372349398,
            "unit": "ns",
            "extra": "gctime=0\nmemory=260780448\nallocs=41\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/forward/NamedTuple/(64, 64, 1, 128)",
            "value": 3900400,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4078160\nallocs=43\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/forward/ComponentArray/(64, 64, 1, 128)",
            "value": 3899295,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4078176\nallocs=41\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/forward/NamedTuple/(200, 128)",
            "value": 87314,
            "unit": "ns",
            "extra": "gctime=0\nmemory=204896\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/forward/ComponentArray/(200, 128)",
            "value": 87424,
            "unit": "ns",
            "extra": "gctime=0\nmemory=204896\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/forward/NamedTuple/(64, 64, 16, 128)",
            "value": 56912462,
            "unit": "ns",
            "extra": "gctime=0\nmemory=65197712\nallocs=43\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/forward/ComponentArray/(64, 64, 16, 128)",
            "value": 56953662,
            "unit": "ns",
            "extra": "gctime=0\nmemory=65197728\nallocs=41\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/forward/NamedTuple/(2000, 128)",
            "value": 6515785,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2048096\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/forward/ComponentArray/(2000, 128)",
            "value": 6560088,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2048096\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "avikpal@mit.edu",
            "name": "Avik Pal",
            "username": "avik-pal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "80e3475b00bcbd6a8e84c9d34d44d4ebbaf8691b",
          "message": "Merge pull request #575 from LuxDL/ap/ad_benchmarks\n\nMore Continuous Benchmarks",
          "timestamp": "2024-04-06T02:10:58-04:00",
          "tree_id": "049f6b6654ed971cfc28337c007130f6e9f1543e",
          "url": "https://github.com/LuxDL/Lux.jl/commit/80e3475b00bcbd6a8e84c9d34d44d4ebbaf8691b"
        },
        "date": 1712385013944,
        "tool": "julia",
        "benches": [
          {
            "name": "Dense(2 => 2)/cpu/reverse/ReverseDiff (compiled)/(2, 128)",
            "value": 3267.375,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1312\nallocs=8\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":8,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/Zygote/(2, 128)",
            "value": 9518,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10544\nallocs=73\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/Tracker/(2, 128)",
            "value": 16922,
            "unit": "ns",
            "extra": "gctime=0\nmemory=15592\nallocs=155\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/ReverseDiff/(2, 128)",
            "value": 4762.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8976\nallocs=36\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":7,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/Flux/(2, 128)",
            "value": 7057.2,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5488\nallocs=29\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":5,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/SimpleChains/(2, 128)",
            "value": 1712.7,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3104\nallocs=20\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":10,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/forward/NamedTuple/(2, 128)",
            "value": 1091,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2176\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":10,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/forward/ComponentArray/(2, 128)",
            "value": 701.922077922078,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2256\nallocs=5\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":154,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/forward/Flux/(2, 128)",
            "value": 1308.4,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2176\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":10,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/forward/SimpleChains/(2, 128)",
            "value": 179.44851904090268,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":709,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/ReverseDiff (compiled)/(20, 128)",
            "value": 17643,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10592\nallocs=8\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/Zygote/(20, 128)",
            "value": 25061.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=58112\nallocs=73\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/Tracker/(20, 128)",
            "value": 37245,
            "unit": "ns",
            "extra": "gctime=0\nmemory=111368\nallocs=155\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/ReverseDiff/(20, 128)",
            "value": 23073,
            "unit": "ns",
            "extra": "gctime=0\nmemory=80848\nallocs=36\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/Flux/(20, 128)",
            "value": 21485,
            "unit": "ns",
            "extra": "gctime=0\nmemory=44416\nallocs=29\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/SimpleChains/(20, 128)",
            "value": 13360,
            "unit": "ns",
            "extra": "gctime=0\nmemory=15936\nallocs=20\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/forward/NamedTuple/(20, 128)",
            "value": 5101.714285714286,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20736\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":7,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/forward/ComponentArray/(20, 128)",
            "value": 5107.428571428572,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20816\nallocs=5\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":7,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/forward/Flux/(20, 128)",
            "value": 5200.428571428571,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20736\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":7,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/forward/SimpleChains/(20, 128)",
            "value": 1682.65,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":10,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/ReverseDiff (compiled)/(64, 64, 3, 128)",
            "value": 39284500.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12647216\nallocs=82\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/Zygote/(64, 64, 3, 128)",
            "value": 91429963.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=25285040\nallocs=198\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/Tracker/(64, 64, 3, 128)",
            "value": 92389439.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=54790344\nallocs=278\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/ReverseDiff/(64, 64, 3, 128)",
            "value": 39691452,
            "unit": "ns",
            "extra": "gctime=0\nmemory=36654816\nallocs=115\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/Flux/(64, 64, 3, 128)",
            "value": 89786916.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=25259952\nallocs=125\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/SimpleChains/(64, 64, 3, 128)",
            "value": 12259593,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5907184\nallocs=22\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/forward/NamedTuple/(64, 64, 3, 128)",
            "value": 10225995,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12227408\nallocs=43\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/forward/ComponentArray/(64, 64, 3, 128)",
            "value": 10142638,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12227584\nallocs=44\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/forward/Flux/(64, 64, 3, 128)",
            "value": 10137133.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12227536\nallocs=45\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/forward/SimpleChains/(64, 64, 3, 128)",
            "value": 6423977,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Zygote/(32, 32, 3, 1)",
            "value": 4365894701,
            "unit": "ns",
            "extra": "gctime=3197114863\nmemory=12020576016\nallocs=22544\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Zygote/(32, 32, 3, 16)",
            "value": 5118048782,
            "unit": "ns",
            "extra": "gctime=3268861487\nmemory=12310972160\nallocs=22660\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Zygote/(32, 32, 3, 64)",
            "value": 15719820981,
            "unit": "ns",
            "extra": "gctime=11694155634\nmemory=13240147664\nallocs=22675\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Tracker/(32, 32, 3, 1)",
            "value": 1394532184,
            "unit": "ns",
            "extra": "gctime=385400651\nmemory=5078547456\nallocs=11363\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Tracker/(32, 32, 3, 16)",
            "value": 2737271241,
            "unit": "ns",
            "extra": "gctime=766867491\nmemory=5368947072\nallocs=11472\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Tracker/(32, 32, 3, 64)",
            "value": 5392134495,
            "unit": "ns",
            "extra": "gctime=748850547\nmemory=6298132096\nallocs=11472\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Flux/(32, 32, 3, 1)",
            "value": 86035309,
            "unit": "ns",
            "extra": "gctime=3170849\nmemory=169718704\nallocs=10476\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Flux/(32, 32, 3, 16)",
            "value": 750690104,
            "unit": "ns",
            "extra": "gctime=0\nmemory=376680048\nallocs=10550\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Flux/(32, 32, 3, 64)",
            "value": 3106551216,
            "unit": "ns",
            "extra": "gctime=341743746\nmemory=1038861648\nallocs=10550\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/NamedTuple/(32, 32, 3, 1)",
            "value": 23365059.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=11506240\nallocs=1204\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/NamedTuple/(32, 32, 3, 16)",
            "value": 248196871,
            "unit": "ns",
            "extra": "gctime=0\nmemory=81701120\nallocs=1227\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/NamedTuple/(32, 32, 3, 64)",
            "value": 1003838362,
            "unit": "ns",
            "extra": "gctime=0\nmemory=306329664\nallocs=1227\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/ComponentArray/(32, 32, 3, 1)",
            "value": 23649034,
            "unit": "ns",
            "extra": "gctime=0\nmemory=11503120\nallocs=1126\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/ComponentArray/(32, 32, 3, 16)",
            "value": 248954800,
            "unit": "ns",
            "extra": "gctime=0\nmemory=81698000\nallocs=1149\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/ComponentArray/(32, 32, 3, 64)",
            "value": 1074000658,
            "unit": "ns",
            "extra": "gctime=3136885\nmemory=306326544\nallocs=1149\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/Flux/(32, 32, 3, 1)",
            "value": 22160375,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10299552\nallocs=887\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/Flux/(32, 32, 3, 16)",
            "value": 247762136,
            "unit": "ns",
            "extra": "gctime=0\nmemory=62923104\nallocs=903\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/Flux/(32, 32, 3, 64)",
            "value": 895437036,
            "unit": "ns",
            "extra": "gctime=1573388\nmemory=231321760\nallocs=903\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/ReverseDiff (compiled)/(64, 64, 64, 128)",
            "value": 1052351659,
            "unit": "ns",
            "extra": "gctime=0\nmemory=269788768\nallocs=83\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/Zygote/(64, 64, 64, 128)",
            "value": 2300391794,
            "unit": "ns",
            "extra": "gctime=0\nmemory=539587120\nallocs=204\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/Tracker/(64, 64, 64, 128)",
            "value": 2730677981,
            "unit": "ns",
            "extra": "gctime=342365464\nmemory=1169665928\nallocs=286\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/ReverseDiff/(64, 64, 64, 128)",
            "value": 1401783862,
            "unit": "ns",
            "extra": "gctime=289554363\nmemory=782332144\nallocs=119\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/Flux/(64, 64, 64, 128)",
            "value": 2328019747,
            "unit": "ns",
            "extra": "gctime=0\nmemory=538825232\nallocs=126\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/forward/NamedTuple/(64, 64, 64, 128)",
            "value": 375448343,
            "unit": "ns",
            "extra": "gctime=3658744\nmemory=260780432\nallocs=43\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/forward/ComponentArray/(64, 64, 64, 128)",
            "value": 374614390,
            "unit": "ns",
            "extra": "gctime=3618028\nmemory=260780608\nallocs=44\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/forward/Flux/(64, 64, 64, 128)",
            "value": 375734589,
            "unit": "ns",
            "extra": "gctime=3507401\nmemory=260780560\nallocs=45\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/ReverseDiff (compiled)/(64, 64, 1, 128)",
            "value": 13597474,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4220944\nallocs=82\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/Zygote/(64, 64, 1, 128)",
            "value": 30506392,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8449936\nallocs=198\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/Tracker/(64, 64, 1, 128)",
            "value": 31258806,
            "unit": "ns",
            "extra": "gctime=0\nmemory=18273336\nallocs=278\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/ReverseDiff/(64, 64, 1, 128)",
            "value": 13877995,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12224560\nallocs=115\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/Flux/(64, 64, 1, 128)",
            "value": 30495395,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8426368\nallocs=125\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/SimpleChains/(64, 64, 1, 128)",
            "value": 1149994,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1970288\nallocs=22\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/forward/NamedTuple/(64, 64, 1, 128)",
            "value": 3880661,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4078160\nallocs=43\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/forward/ComponentArray/(64, 64, 1, 128)",
            "value": 3880529,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4078336\nallocs=44\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/forward/Flux/(64, 64, 1, 128)",
            "value": 3876882,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4078288\nallocs=45\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/forward/SimpleChains/(64, 64, 1, 128)",
            "value": 195006,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/ReverseDiff (compiled)/(200, 128)",
            "value": 297678,
            "unit": "ns",
            "extra": "gctime=0\nmemory=102672\nallocs=9\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/Zygote/(200, 128)",
            "value": 315185.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1380784\nallocs=83\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/Tracker/(200, 128)",
            "value": 397685,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2053432\nallocs=171\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/ReverseDiff/(200, 128)",
            "value": 344595.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1360864\nallocs=47\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/Flux/(200, 128)",
            "value": 471604,
            "unit": "ns",
            "extra": "gctime=0\nmemory=571728\nallocs=34\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/SimpleChains/(200, 128)",
            "value": 395982,
            "unit": "ns",
            "extra": "gctime=0\nmemory=587088\nallocs=22\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/forward/NamedTuple/(200, 128)",
            "value": 91626.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=204896\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/forward/ComponentArray/(200, 128)",
            "value": 95404,
            "unit": "ns",
            "extra": "gctime=0\nmemory=204976\nallocs=7\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/forward/Flux/(200, 128)",
            "value": 87344,
            "unit": "ns",
            "extra": "gctime=0\nmemory=204896\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/forward/SimpleChains/(200, 128)",
            "value": 104776.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/ReverseDiff (compiled)/(64, 64, 16, 128)",
            "value": 191759064,
            "unit": "ns",
            "extra": "gctime=0\nmemory=67425440\nallocs=82\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/Zygote/(64, 64, 16, 128)",
            "value": 511408215,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134755968\nallocs=198\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/Tracker/(64, 64, 16, 128)",
            "value": 523965339,
            "unit": "ns",
            "extra": "gctime=1831863\nmemory=292207528\nallocs=278\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/ReverseDiff/(64, 64, 16, 128)",
            "value": 212766749,
            "unit": "ns",
            "extra": "gctime=1740652\nmemory=195480032\nallocs=115\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/Flux/(64, 64, 16, 128)",
            "value": 486845887,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134685840\nallocs=125\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/SimpleChains/(64, 64, 16, 128)",
            "value": 320740323,
            "unit": "ns",
            "extra": "gctime=0\nmemory=31510800\nallocs=22\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/forward/NamedTuple/(64, 64, 16, 128)",
            "value": 64118671,
            "unit": "ns",
            "extra": "gctime=0\nmemory=65197712\nallocs=43\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/forward/ComponentArray/(64, 64, 16, 128)",
            "value": 64797793,
            "unit": "ns",
            "extra": "gctime=0\nmemory=65197888\nallocs=44\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/forward/Flux/(64, 64, 16, 128)",
            "value": 64228406,
            "unit": "ns",
            "extra": "gctime=0\nmemory=65197840\nallocs=45\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/forward/SimpleChains/(64, 64, 16, 128)",
            "value": 29516170.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/ReverseDiff (compiled)/(2000, 128)",
            "value": 19828112,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1024272\nallocs=9\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/Zygote/(2000, 128)",
            "value": 25262569,
            "unit": "ns",
            "extra": "gctime=0\nmemory=100150256\nallocs=83\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/Tracker/(2000, 128)",
            "value": 34145184,
            "unit": "ns",
            "extra": "gctime=1412317\nmemory=121278136\nallocs=171\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/ReverseDiff/(2000, 128)",
            "value": 22848976.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=71193568\nallocs=47\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/Flux/(2000, 128)",
            "value": 19974956,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20105360\nallocs=34\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/forward/NamedTuple/(2000, 128)",
            "value": 6640955,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2048096\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/forward/ComponentArray/(2000, 128)",
            "value": 6637819,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2048176\nallocs=7\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/forward/Flux/(2000, 128)",
            "value": 6568209,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2048096\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "avikpal@mit.edu",
            "name": "Avik Pal",
            "username": "avik-pal"
          },
          "committer": {
            "email": "avikpal@mit.edu",
            "name": "Avik Pal",
            "username": "avik-pal"
          },
          "distinct": true,
          "id": "d95c3c2a0690ace255785d0532c2fea5a19e2c88",
          "message": "Add a deploydocs workflow",
          "timestamp": "2024-04-06T10:52:21-04:00",
          "tree_id": "22cc78dba82f7bf8a85ce0549b4a1e874091bc21",
          "url": "https://github.com/LuxDL/Lux.jl/commit/d95c3c2a0690ace255785d0532c2fea5a19e2c88"
        },
        "date": 1712416246411,
        "tool": "julia",
        "benches": [
          {
            "name": "Dense(2 => 2)/cpu/reverse/ReverseDiff (compiled)/(2, 128)",
            "value": 3268.5625,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1312\nallocs=8\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":8,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/Zygote/(2, 128)",
            "value": 9162,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10544\nallocs=73\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/Tracker/(2, 128)",
            "value": 15679,
            "unit": "ns",
            "extra": "gctime=0\nmemory=15592\nallocs=155\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/ReverseDiff/(2, 128)",
            "value": 4670.785714285714,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8976\nallocs=36\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":7,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/Flux/(2, 128)",
            "value": 6859.700000000001,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5488\nallocs=29\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":5,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/SimpleChains/(2, 128)",
            "value": 1555.9,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3104\nallocs=20\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":10,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/forward/NamedTuple/(2, 128)",
            "value": 2005.2,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2176\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":10,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/forward/ComponentArray/(2, 128)",
            "value": 733.5105633802817,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2256\nallocs=5\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":142,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/forward/Flux/(2, 128)",
            "value": 1821.1090909090908,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2176\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":55,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/forward/SimpleChains/(2, 128)",
            "value": 179.0541069100391,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":767,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/ReverseDiff (compiled)/(20, 128)",
            "value": 19341.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10592\nallocs=8\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/Zygote/(20, 128)",
            "value": 27806.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=58112\nallocs=73\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/Tracker/(20, 128)",
            "value": 41507,
            "unit": "ns",
            "extra": "gctime=0\nmemory=111368\nallocs=155\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/ReverseDiff/(20, 128)",
            "value": 25833,
            "unit": "ns",
            "extra": "gctime=0\nmemory=80848\nallocs=36\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/Flux/(20, 128)",
            "value": 21400,
            "unit": "ns",
            "extra": "gctime=0\nmemory=44416\nallocs=29\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/SimpleChains/(20, 128)",
            "value": 14612,
            "unit": "ns",
            "extra": "gctime=0\nmemory=15936\nallocs=20\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/forward/NamedTuple/(20, 128)",
            "value": 5028.571428571429,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20736\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":7,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/forward/ComponentArray/(20, 128)",
            "value": 4958.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20816\nallocs=5\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":7,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/forward/Flux/(20, 128)",
            "value": 5024.285714285714,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20736\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":7,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/forward/SimpleChains/(20, 128)",
            "value": 1668.1,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":10,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/ReverseDiff (compiled)/(64, 64, 3, 128)",
            "value": 38179956.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12647216\nallocs=82\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/Zygote/(64, 64, 3, 128)",
            "value": 89430081,
            "unit": "ns",
            "extra": "gctime=0\nmemory=25285040\nallocs=198\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/Tracker/(64, 64, 3, 128)",
            "value": 90888270.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=54790344\nallocs=278\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/ReverseDiff/(64, 64, 3, 128)",
            "value": 39238669,
            "unit": "ns",
            "extra": "gctime=0\nmemory=36654816\nallocs=115\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/Flux/(64, 64, 3, 128)",
            "value": 88713557.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=25259952\nallocs=125\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/SimpleChains/(64, 64, 3, 128)",
            "value": 11908460,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5907184\nallocs=22\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/forward/NamedTuple/(64, 64, 3, 128)",
            "value": 10134443.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12227408\nallocs=43\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/forward/ComponentArray/(64, 64, 3, 128)",
            "value": 10138838,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12227584\nallocs=44\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/forward/Flux/(64, 64, 3, 128)",
            "value": 10136702.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12227536\nallocs=45\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/forward/SimpleChains/(64, 64, 3, 128)",
            "value": 6378500.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Zygote/(32, 32, 3, 1)",
            "value": 3889000731,
            "unit": "ns",
            "extra": "gctime=2806031063\nmemory=12020576016\nallocs=22544\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Zygote/(32, 32, 3, 16)",
            "value": 11395646423,
            "unit": "ns",
            "extra": "gctime=9624553123\nmemory=12310972160\nallocs=22660\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Zygote/(32, 32, 3, 64)",
            "value": 14444344178,
            "unit": "ns",
            "extra": "gctime=10512133568\nmemory=13240147664\nallocs=22675\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Tracker/(32, 32, 3, 1)",
            "value": 1319342553,
            "unit": "ns",
            "extra": "gctime=351277107\nmemory=5078547456\nallocs=11363\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Tracker/(32, 32, 3, 16)",
            "value": 2546305778,
            "unit": "ns",
            "extra": "gctime=670372325\nmemory=5368947072\nallocs=11472\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Tracker/(32, 32, 3, 64)",
            "value": 5095503782,
            "unit": "ns",
            "extra": "gctime=661217260\nmemory=6298132096\nallocs=11472\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Flux/(32, 32, 3, 1)",
            "value": 86578805,
            "unit": "ns",
            "extra": "gctime=2600716\nmemory=169718704\nallocs=10476\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Flux/(32, 32, 3, 16)",
            "value": 750939038,
            "unit": "ns",
            "extra": "gctime=0\nmemory=376680048\nallocs=10550\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Flux/(32, 32, 3, 64)",
            "value": 3071010714,
            "unit": "ns",
            "extra": "gctime=315604066\nmemory=1038861648\nallocs=10550\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/NamedTuple/(32, 32, 3, 1)",
            "value": 23160300.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=11506240\nallocs=1204\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/NamedTuple/(32, 32, 3, 16)",
            "value": 245239837,
            "unit": "ns",
            "extra": "gctime=0\nmemory=81701120\nallocs=1227\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/NamedTuple/(32, 32, 3, 64)",
            "value": 1007072276,
            "unit": "ns",
            "extra": "gctime=0\nmemory=306329664\nallocs=1227\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/ComponentArray/(32, 32, 3, 1)",
            "value": 22808532,
            "unit": "ns",
            "extra": "gctime=0\nmemory=11503120\nallocs=1126\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/ComponentArray/(32, 32, 3, 16)",
            "value": 250193614,
            "unit": "ns",
            "extra": "gctime=0\nmemory=81698000\nallocs=1149\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/ComponentArray/(32, 32, 3, 64)",
            "value": 992461922,
            "unit": "ns",
            "extra": "gctime=3180302\nmemory=306326544\nallocs=1149\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/Flux/(32, 32, 3, 1)",
            "value": 21518998,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10299552\nallocs=887\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/Flux/(32, 32, 3, 16)",
            "value": 226942597,
            "unit": "ns",
            "extra": "gctime=0\nmemory=62923104\nallocs=903\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/Flux/(32, 32, 3, 64)",
            "value": 905430868,
            "unit": "ns",
            "extra": "gctime=2328992\nmemory=231321760\nallocs=903\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/ReverseDiff (compiled)/(64, 64, 64, 128)",
            "value": 1050037361,
            "unit": "ns",
            "extra": "gctime=0\nmemory=269788768\nallocs=83\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/Zygote/(64, 64, 64, 128)",
            "value": 2294923901,
            "unit": "ns",
            "extra": "gctime=0\nmemory=539587120\nallocs=204\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/Tracker/(64, 64, 64, 128)",
            "value": 2711648088,
            "unit": "ns",
            "extra": "gctime=324428611\nmemory=1169665928\nallocs=286\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/ReverseDiff/(64, 64, 64, 128)",
            "value": 1376715391,
            "unit": "ns",
            "extra": "gctime=288301092\nmemory=782332144\nallocs=119\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/Flux/(64, 64, 64, 128)",
            "value": 2284142846,
            "unit": "ns",
            "extra": "gctime=0\nmemory=538825232\nallocs=126\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/forward/NamedTuple/(64, 64, 64, 128)",
            "value": 373009296,
            "unit": "ns",
            "extra": "gctime=3341221\nmemory=260780432\nallocs=43\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/forward/ComponentArray/(64, 64, 64, 128)",
            "value": 373277495,
            "unit": "ns",
            "extra": "gctime=3312167\nmemory=260780608\nallocs=44\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/forward/Flux/(64, 64, 64, 128)",
            "value": 374725980,
            "unit": "ns",
            "extra": "gctime=3331051\nmemory=260780560\nallocs=45\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/ReverseDiff (compiled)/(64, 64, 1, 128)",
            "value": 13795006.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4220944\nallocs=82\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/Zygote/(64, 64, 1, 128)",
            "value": 30504090,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8449936\nallocs=198\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/Tracker/(64, 64, 1, 128)",
            "value": 31196065,
            "unit": "ns",
            "extra": "gctime=0\nmemory=18273336\nallocs=278\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/ReverseDiff/(64, 64, 1, 128)",
            "value": 13880386,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12224560\nallocs=115\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/Flux/(64, 64, 1, 128)",
            "value": 30371317,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8426368\nallocs=125\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/SimpleChains/(64, 64, 1, 128)",
            "value": 1151402.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1970288\nallocs=22\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/forward/NamedTuple/(64, 64, 1, 128)",
            "value": 3889828,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4078160\nallocs=43\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/forward/ComponentArray/(64, 64, 1, 128)",
            "value": 3891843,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4078336\nallocs=44\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/forward/Flux/(64, 64, 1, 128)",
            "value": 3888351.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4078288\nallocs=45\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/forward/SimpleChains/(64, 64, 1, 128)",
            "value": 196369,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/ReverseDiff (compiled)/(200, 128)",
            "value": 298699.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=102672\nallocs=9\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/Zygote/(200, 128)",
            "value": 307225,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1380784\nallocs=83\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/Tracker/(200, 128)",
            "value": 380596.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2053432\nallocs=171\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/ReverseDiff/(200, 128)",
            "value": 336965.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1360864\nallocs=47\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/Flux/(200, 128)",
            "value": 274174,
            "unit": "ns",
            "extra": "gctime=0\nmemory=571728\nallocs=34\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/SimpleChains/(200, 128)",
            "value": 399782,
            "unit": "ns",
            "extra": "gctime=0\nmemory=587088\nallocs=22\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/forward/NamedTuple/(200, 128)",
            "value": 87548,
            "unit": "ns",
            "extra": "gctime=0\nmemory=204896\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/forward/ComponentArray/(200, 128)",
            "value": 87923.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=204976\nallocs=7\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/forward/Flux/(200, 128)",
            "value": 86140,
            "unit": "ns",
            "extra": "gctime=0\nmemory=204896\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/forward/SimpleChains/(200, 128)",
            "value": 104484,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/ReverseDiff (compiled)/(64, 64, 16, 128)",
            "value": 191036799,
            "unit": "ns",
            "extra": "gctime=0\nmemory=67425440\nallocs=82\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/Zygote/(64, 64, 16, 128)",
            "value": 493413269,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134755968\nallocs=198\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/Tracker/(64, 64, 16, 128)",
            "value": 489003899,
            "unit": "ns",
            "extra": "gctime=1863679\nmemory=292207528\nallocs=278\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/ReverseDiff/(64, 64, 16, 128)",
            "value": 211324170,
            "unit": "ns",
            "extra": "gctime=1767800\nmemory=195480032\nallocs=115\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/Flux/(64, 64, 16, 128)",
            "value": 496762204,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134685840\nallocs=125\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/SimpleChains/(64, 64, 16, 128)",
            "value": 321029156,
            "unit": "ns",
            "extra": "gctime=0\nmemory=31510800\nallocs=22\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/forward/NamedTuple/(64, 64, 16, 128)",
            "value": 64080968,
            "unit": "ns",
            "extra": "gctime=0\nmemory=65197712\nallocs=43\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/forward/ComponentArray/(64, 64, 16, 128)",
            "value": 64337804,
            "unit": "ns",
            "extra": "gctime=0\nmemory=65197888\nallocs=44\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/forward/Flux/(64, 64, 16, 128)",
            "value": 63632970,
            "unit": "ns",
            "extra": "gctime=0\nmemory=65197840\nallocs=45\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/forward/SimpleChains/(64, 64, 16, 128)",
            "value": 28560436.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/ReverseDiff (compiled)/(2000, 128)",
            "value": 21422844.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1024272\nallocs=9\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/Zygote/(2000, 128)",
            "value": 24663525.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=100150256\nallocs=83\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/Tracker/(2000, 128)",
            "value": 33010303,
            "unit": "ns",
            "extra": "gctime=1258556\nmemory=121278136\nallocs=171\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/ReverseDiff/(2000, 128)",
            "value": 23149563.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=71193568\nallocs=47\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/Flux/(2000, 128)",
            "value": 19552062,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20105360\nallocs=34\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/forward/NamedTuple/(2000, 128)",
            "value": 6561783,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2048096\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/forward/ComponentArray/(2000, 128)",
            "value": 6521774.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2048176\nallocs=7\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/forward/Flux/(2000, 128)",
            "value": 6527806,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2048096\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "avikpal@mit.edu",
            "name": "Avik Pal",
            "username": "avik-pal"
          },
          "committer": {
            "email": "avikpal@mit.edu",
            "name": "Avik Pal",
            "username": "avik-pal"
          },
          "distinct": true,
          "id": "511124f7c7c2ece78ad8814248839fb785d174a0",
          "message": "Add a deploydocs workflow",
          "timestamp": "2024-04-06T11:05:12-04:00",
          "tree_id": "2bf3c8be1795b274560694023b6a45a1a114853f",
          "url": "https://github.com/LuxDL/Lux.jl/commit/511124f7c7c2ece78ad8814248839fb785d174a0"
        },
        "date": 1712417383737,
        "tool": "julia",
        "benches": [
          {
            "name": "Dense(2 => 2)/cpu/reverse/ReverseDiff (compiled)/(2, 128)",
            "value": 3273.625,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1312\nallocs=8\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":8,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/Zygote/(2, 128)",
            "value": 9428,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10544\nallocs=73\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/Tracker/(2, 128)",
            "value": 15374,
            "unit": "ns",
            "extra": "gctime=0\nmemory=15592\nallocs=155\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/ReverseDiff/(2, 128)",
            "value": 4723.857142857143,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8976\nallocs=36\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":7,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/Flux/(2, 128)",
            "value": 6870.8,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5488\nallocs=29\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":5,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/SimpleChains/(2, 128)",
            "value": 1561.95,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3104\nallocs=20\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":10,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/forward/NamedTuple/(2, 128)",
            "value": 1068.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2176\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":10,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/forward/ComponentArray/(2, 128)",
            "value": 730.6496598639455,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2256\nallocs=5\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":147,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/forward/Flux/(2, 128)",
            "value": 878.6375,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2176\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":40,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/forward/SimpleChains/(2, 128)",
            "value": 181.4322268326418,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":723,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/ReverseDiff (compiled)/(20, 128)",
            "value": 17764,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10592\nallocs=8\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/Zygote/(20, 128)",
            "value": 23263.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=58112\nallocs=73\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/Tracker/(20, 128)",
            "value": 36112.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=111368\nallocs=155\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/ReverseDiff/(20, 128)",
            "value": 22797,
            "unit": "ns",
            "extra": "gctime=0\nmemory=80848\nallocs=36\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/Flux/(20, 128)",
            "value": 20158,
            "unit": "ns",
            "extra": "gctime=0\nmemory=44416\nallocs=29\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/SimpleChains/(20, 128)",
            "value": 13280,
            "unit": "ns",
            "extra": "gctime=0\nmemory=15936\nallocs=20\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/forward/NamedTuple/(20, 128)",
            "value": 5017.285714285714,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20736\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":7,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/forward/ComponentArray/(20, 128)",
            "value": 5040.857142857143,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20816\nallocs=5\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":7,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/forward/Flux/(20, 128)",
            "value": 5067.285714285714,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20736\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":7,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/forward/SimpleChains/(20, 128)",
            "value": 1654.15,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":10,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/ReverseDiff (compiled)/(64, 64, 3, 128)",
            "value": 39856713.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12647216\nallocs=82\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/Zygote/(64, 64, 3, 128)",
            "value": 88874409,
            "unit": "ns",
            "extra": "gctime=0\nmemory=25285040\nallocs=198\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/Tracker/(64, 64, 3, 128)",
            "value": 91219358.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=54790344\nallocs=278\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/ReverseDiff/(64, 64, 3, 128)",
            "value": 40054163,
            "unit": "ns",
            "extra": "gctime=0\nmemory=36654816\nallocs=115\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/Flux/(64, 64, 3, 128)",
            "value": 89570982.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=25259952\nallocs=125\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/SimpleChains/(64, 64, 3, 128)",
            "value": 12006162.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5907184\nallocs=22\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/forward/NamedTuple/(64, 64, 3, 128)",
            "value": 10430029.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12227408\nallocs=43\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/forward/ComponentArray/(64, 64, 3, 128)",
            "value": 10388718,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12227584\nallocs=44\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/forward/Flux/(64, 64, 3, 128)",
            "value": 10416294,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12227536\nallocs=45\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/forward/SimpleChains/(64, 64, 3, 128)",
            "value": 6384850,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Zygote/(32, 32, 3, 1)",
            "value": 4050555002,
            "unit": "ns",
            "extra": "gctime=2935777606\nmemory=12020576016\nallocs=22544\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Zygote/(32, 32, 3, 16)",
            "value": 11845025229,
            "unit": "ns",
            "extra": "gctime=10069174326\nmemory=12310972160\nallocs=22660\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Zygote/(32, 32, 3, 64)",
            "value": 14642559624,
            "unit": "ns",
            "extra": "gctime=10752722468\nmemory=13240147664\nallocs=22675\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Tracker/(32, 32, 3, 1)",
            "value": 1310357778,
            "unit": "ns",
            "extra": "gctime=349030119\nmemory=5078547456\nallocs=11363\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Tracker/(32, 32, 3, 16)",
            "value": 2554370698,
            "unit": "ns",
            "extra": "gctime=719325018\nmemory=5368947072\nallocs=11472\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Tracker/(32, 32, 3, 64)",
            "value": 5150022093,
            "unit": "ns",
            "extra": "gctime=667278352\nmemory=6298132096\nallocs=11472\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Flux/(32, 32, 3, 1)",
            "value": 82741221.5,
            "unit": "ns",
            "extra": "gctime=2465130\nmemory=169718704\nallocs=10476\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Flux/(32, 32, 3, 16)",
            "value": 721704540,
            "unit": "ns",
            "extra": "gctime=0\nmemory=376680048\nallocs=10550\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Flux/(32, 32, 3, 64)",
            "value": 3103589313,
            "unit": "ns",
            "extra": "gctime=326406550\nmemory=1038861648\nallocs=10550\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/NamedTuple/(32, 32, 3, 1)",
            "value": 22978520,
            "unit": "ns",
            "extra": "gctime=0\nmemory=11506240\nallocs=1204\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/NamedTuple/(32, 32, 3, 16)",
            "value": 248832889,
            "unit": "ns",
            "extra": "gctime=0\nmemory=81701120\nallocs=1227\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/NamedTuple/(32, 32, 3, 64)",
            "value": 971964557,
            "unit": "ns",
            "extra": "gctime=0\nmemory=306329664\nallocs=1227\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/ComponentArray/(32, 32, 3, 1)",
            "value": 23283540,
            "unit": "ns",
            "extra": "gctime=0\nmemory=11503120\nallocs=1126\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/ComponentArray/(32, 32, 3, 16)",
            "value": 250700567,
            "unit": "ns",
            "extra": "gctime=0\nmemory=81698000\nallocs=1149\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/ComponentArray/(32, 32, 3, 64)",
            "value": 1008257920,
            "unit": "ns",
            "extra": "gctime=8962029\nmemory=306326544\nallocs=1149\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/Flux/(32, 32, 3, 1)",
            "value": 21851192,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10299552\nallocs=887\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/Flux/(32, 32, 3, 16)",
            "value": 228354617,
            "unit": "ns",
            "extra": "gctime=0\nmemory=62923104\nallocs=903\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/Flux/(32, 32, 3, 64)",
            "value": 899166188,
            "unit": "ns",
            "extra": "gctime=1381403\nmemory=231321760\nallocs=903\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/ReverseDiff (compiled)/(64, 64, 64, 128)",
            "value": 1058654120,
            "unit": "ns",
            "extra": "gctime=0\nmemory=269788768\nallocs=83\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/Zygote/(64, 64, 64, 128)",
            "value": 2281700374,
            "unit": "ns",
            "extra": "gctime=0\nmemory=539587120\nallocs=204\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/Tracker/(64, 64, 64, 128)",
            "value": 2721254280,
            "unit": "ns",
            "extra": "gctime=338456556\nmemory=1169665928\nallocs=286\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/ReverseDiff/(64, 64, 64, 128)",
            "value": 1391892534,
            "unit": "ns",
            "extra": "gctime=283109778\nmemory=782332144\nallocs=119\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/Flux/(64, 64, 64, 128)",
            "value": 2289222642,
            "unit": "ns",
            "extra": "gctime=0\nmemory=538825232\nallocs=126\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/forward/NamedTuple/(64, 64, 64, 128)",
            "value": 420598513,
            "unit": "ns",
            "extra": "gctime=3084318\nmemory=260780432\nallocs=43\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/forward/ComponentArray/(64, 64, 64, 128)",
            "value": 379451628,
            "unit": "ns",
            "extra": "gctime=3116348\nmemory=260780608\nallocs=44\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/forward/Flux/(64, 64, 64, 128)",
            "value": 374559142,
            "unit": "ns",
            "extra": "gctime=3114243\nmemory=260780560\nallocs=45\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/ReverseDiff (compiled)/(64, 64, 1, 128)",
            "value": 13734378.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4220944\nallocs=82\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/Zygote/(64, 64, 1, 128)",
            "value": 30329777,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8449936\nallocs=198\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/Tracker/(64, 64, 1, 128)",
            "value": 30965175,
            "unit": "ns",
            "extra": "gctime=0\nmemory=18273336\nallocs=278\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/ReverseDiff/(64, 64, 1, 128)",
            "value": 13958803.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12224560\nallocs=115\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/Flux/(64, 64, 1, 128)",
            "value": 30285054,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8426368\nallocs=125\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/SimpleChains/(64, 64, 1, 128)",
            "value": 1144445.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1970288\nallocs=22\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/forward/NamedTuple/(64, 64, 1, 128)",
            "value": 3875266,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4078160\nallocs=43\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/forward/ComponentArray/(64, 64, 1, 128)",
            "value": 3880046,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4078336\nallocs=44\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/forward/Flux/(64, 64, 1, 128)",
            "value": 3869727,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4078288\nallocs=45\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/forward/SimpleChains/(64, 64, 1, 128)",
            "value": 196087,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/ReverseDiff (compiled)/(200, 128)",
            "value": 298408.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=102672\nallocs=9\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/Zygote/(200, 128)",
            "value": 310816.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1380784\nallocs=83\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/Tracker/(200, 128)",
            "value": 385070,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2053432\nallocs=171\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/ReverseDiff/(200, 128)",
            "value": 342020,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1360864\nallocs=47\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/Flux/(200, 128)",
            "value": 271152.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=571728\nallocs=34\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/SimpleChains/(200, 128)",
            "value": 392869.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=587088\nallocs=22\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/forward/NamedTuple/(200, 128)",
            "value": 88610.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=204896\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/forward/ComponentArray/(200, 128)",
            "value": 151819,
            "unit": "ns",
            "extra": "gctime=0\nmemory=204976\nallocs=7\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/forward/Flux/(200, 128)",
            "value": 101539.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=204896\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/forward/SimpleChains/(200, 128)",
            "value": 104695.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/ReverseDiff (compiled)/(64, 64, 16, 128)",
            "value": 194024540,
            "unit": "ns",
            "extra": "gctime=0\nmemory=67425440\nallocs=82\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/Zygote/(64, 64, 16, 128)",
            "value": 496954312,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134755968\nallocs=198\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/Tracker/(64, 64, 16, 128)",
            "value": 508130610,
            "unit": "ns",
            "extra": "gctime=1620651\nmemory=292207528\nallocs=278\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/ReverseDiff/(64, 64, 16, 128)",
            "value": 212742805,
            "unit": "ns",
            "extra": "gctime=1329597\nmemory=195480032\nallocs=115\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/Flux/(64, 64, 16, 128)",
            "value": 492574779,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134685840\nallocs=125\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/SimpleChains/(64, 64, 16, 128)",
            "value": 325916511,
            "unit": "ns",
            "extra": "gctime=0\nmemory=31510800\nallocs=22\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/forward/NamedTuple/(64, 64, 16, 128)",
            "value": 65136200,
            "unit": "ns",
            "extra": "gctime=0\nmemory=65197712\nallocs=43\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/forward/ComponentArray/(64, 64, 16, 128)",
            "value": 65021622,
            "unit": "ns",
            "extra": "gctime=0\nmemory=65197888\nallocs=44\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/forward/Flux/(64, 64, 16, 128)",
            "value": 64742190,
            "unit": "ns",
            "extra": "gctime=0\nmemory=65197840\nallocs=45\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/forward/SimpleChains/(64, 64, 16, 128)",
            "value": 28694129,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/ReverseDiff (compiled)/(2000, 128)",
            "value": 21052450,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1024272\nallocs=9\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/Zygote/(2000, 128)",
            "value": 27228319,
            "unit": "ns",
            "extra": "gctime=0\nmemory=100150256\nallocs=83\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/Tracker/(2000, 128)",
            "value": 34295382,
            "unit": "ns",
            "extra": "gctime=1257722\nmemory=121278136\nallocs=171\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/ReverseDiff/(2000, 128)",
            "value": 23823816.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=71193568\nallocs=47\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/Flux/(2000, 128)",
            "value": 19554953,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20105360\nallocs=34\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/forward/NamedTuple/(2000, 128)",
            "value": 6630340,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2048096\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/forward/ComponentArray/(2000, 128)",
            "value": 6617981,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2048176\nallocs=7\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/forward/Flux/(2000, 128)",
            "value": 6531890,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2048096\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "avikpal@mit.edu",
            "name": "Avik Pal",
            "username": "avik-pal"
          },
          "committer": {
            "email": "avikpal@mit.edu",
            "name": "Avik Pal",
            "username": "avik-pal"
          },
          "distinct": true,
          "id": "661793f2ff30a5954255425a1bff3ff450d867d9",
          "message": "Add a deploydocs workflow",
          "timestamp": "2024-04-06T11:20:21-04:00",
          "tree_id": "4fdc7c949c30cec454aa4ce661e16ddf0c91bde6",
          "url": "https://github.com/LuxDL/Lux.jl/commit/661793f2ff30a5954255425a1bff3ff450d867d9"
        },
        "date": 1712418528916,
        "tool": "julia",
        "benches": [
          {
            "name": "Dense(2 => 2)/cpu/reverse/ReverseDiff (compiled)/(2, 128)",
            "value": 3531,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1312\nallocs=8\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":8,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/Zygote/(2, 128)",
            "value": 9051.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10544\nallocs=73\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/Tracker/(2, 128)",
            "value": 15468,
            "unit": "ns",
            "extra": "gctime=0\nmemory=15592\nallocs=155\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/ReverseDiff/(2, 128)",
            "value": 7936.285714285714,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8976\nallocs=36\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":7,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/Flux/(2, 128)",
            "value": 8712.2,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5488\nallocs=29\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":5,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/SimpleChains/(2, 128)",
            "value": 1608,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3104\nallocs=20\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":10,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/forward/NamedTuple/(2, 128)",
            "value": 1879.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2176\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":10,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/forward/ComponentArray/(2, 128)",
            "value": 1685.0805369127515,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2256\nallocs=5\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":149,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/forward/Flux/(2, 128)",
            "value": 1787.878787878788,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2176\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":33,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/forward/SimpleChains/(2, 128)",
            "value": 179.53571428571428,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":714,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/ReverseDiff (compiled)/(20, 128)",
            "value": 18048,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10592\nallocs=8\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/Zygote/(20, 128)",
            "value": 28052.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=58112\nallocs=73\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/Tracker/(20, 128)",
            "value": 41422,
            "unit": "ns",
            "extra": "gctime=0\nmemory=111368\nallocs=155\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/ReverseDiff/(20, 128)",
            "value": 25753,
            "unit": "ns",
            "extra": "gctime=0\nmemory=80848\nallocs=36\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/Flux/(20, 128)",
            "value": 22176,
            "unit": "ns",
            "extra": "gctime=0\nmemory=44416\nallocs=29\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/SimpleChains/(20, 128)",
            "value": 14632,
            "unit": "ns",
            "extra": "gctime=0\nmemory=15936\nallocs=20\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/forward/NamedTuple/(20, 128)",
            "value": 5040.857142857143,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20736\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":7,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/forward/ComponentArray/(20, 128)",
            "value": 5000,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20816\nallocs=5\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":7,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/forward/Flux/(20, 128)",
            "value": 5056.571428571429,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20736\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":7,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/forward/SimpleChains/(20, 128)",
            "value": 1666.1,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":10,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/ReverseDiff (compiled)/(64, 64, 3, 128)",
            "value": 38432170,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12647216\nallocs=82\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/Zygote/(64, 64, 3, 128)",
            "value": 88615339,
            "unit": "ns",
            "extra": "gctime=0\nmemory=25285040\nallocs=198\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/Tracker/(64, 64, 3, 128)",
            "value": 91032603,
            "unit": "ns",
            "extra": "gctime=0\nmemory=54790344\nallocs=278\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/ReverseDiff/(64, 64, 3, 128)",
            "value": 39671060,
            "unit": "ns",
            "extra": "gctime=0\nmemory=36654816\nallocs=115\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/Flux/(64, 64, 3, 128)",
            "value": 88693574.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=25259952\nallocs=125\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/SimpleChains/(64, 64, 3, 128)",
            "value": 12221725,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5907184\nallocs=22\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/forward/NamedTuple/(64, 64, 3, 128)",
            "value": 10382181,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12227408\nallocs=43\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/forward/ComponentArray/(64, 64, 3, 128)",
            "value": 10405385.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12227584\nallocs=44\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/forward/Flux/(64, 64, 3, 128)",
            "value": 10432451.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12227536\nallocs=45\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/forward/SimpleChains/(64, 64, 3, 128)",
            "value": 6379490,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Zygote/(32, 32, 3, 1)",
            "value": 4101171589,
            "unit": "ns",
            "extra": "gctime=2998826697\nmemory=12020576016\nallocs=22544\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Zygote/(32, 32, 3, 16)",
            "value": 12046427216,
            "unit": "ns",
            "extra": "gctime=10260784728\nmemory=12310972160\nallocs=22660\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Zygote/(32, 32, 3, 64)",
            "value": 15087275918,
            "unit": "ns",
            "extra": "gctime=10970803338\nmemory=13240147664\nallocs=22675\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Tracker/(32, 32, 3, 1)",
            "value": 1347886426,
            "unit": "ns",
            "extra": "gctime=365700257\nmemory=5078547456\nallocs=11363\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Tracker/(32, 32, 3, 16)",
            "value": 2575529429,
            "unit": "ns",
            "extra": "gctime=726487173\nmemory=5368947072\nallocs=11472\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Tracker/(32, 32, 3, 64)",
            "value": 5196280293,
            "unit": "ns",
            "extra": "gctime=702100926\nmemory=6298132096\nallocs=11472\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Flux/(32, 32, 3, 1)",
            "value": 88164894,
            "unit": "ns",
            "extra": "gctime=2656899\nmemory=169718704\nallocs=10476\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Flux/(32, 32, 3, 16)",
            "value": 728789605,
            "unit": "ns",
            "extra": "gctime=0\nmemory=376680048\nallocs=10550\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Flux/(32, 32, 3, 64)",
            "value": 3122110692,
            "unit": "ns",
            "extra": "gctime=342528654\nmemory=1038861648\nallocs=10550\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/NamedTuple/(32, 32, 3, 1)",
            "value": 24417553.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=11506240\nallocs=1204\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/NamedTuple/(32, 32, 3, 16)",
            "value": 248157487,
            "unit": "ns",
            "extra": "gctime=0\nmemory=81701120\nallocs=1227\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/NamedTuple/(32, 32, 3, 64)",
            "value": 968511036,
            "unit": "ns",
            "extra": "gctime=0\nmemory=306329664\nallocs=1227\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/ComponentArray/(32, 32, 3, 1)",
            "value": 23665780,
            "unit": "ns",
            "extra": "gctime=0\nmemory=11503120\nallocs=1126\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/ComponentArray/(32, 32, 3, 16)",
            "value": 249578357,
            "unit": "ns",
            "extra": "gctime=0\nmemory=81698000\nallocs=1149\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/ComponentArray/(32, 32, 3, 64)",
            "value": 1108630061,
            "unit": "ns",
            "extra": "gctime=2820491\nmemory=306326544\nallocs=1149\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/Flux/(32, 32, 3, 1)",
            "value": 21688531,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10299552\nallocs=887\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/Flux/(32, 32, 3, 16)",
            "value": 227076915,
            "unit": "ns",
            "extra": "gctime=0\nmemory=62923104\nallocs=903\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/Flux/(32, 32, 3, 64)",
            "value": 912029872,
            "unit": "ns",
            "extra": "gctime=1361654\nmemory=231321760\nallocs=903\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/ReverseDiff (compiled)/(64, 64, 64, 128)",
            "value": 1039657570,
            "unit": "ns",
            "extra": "gctime=0\nmemory=269788768\nallocs=83\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/Zygote/(64, 64, 64, 128)",
            "value": 2279658112,
            "unit": "ns",
            "extra": "gctime=0\nmemory=539587120\nallocs=204\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/Tracker/(64, 64, 64, 128)",
            "value": 2712161377,
            "unit": "ns",
            "extra": "gctime=337745688\nmemory=1169665928\nallocs=286\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/ReverseDiff/(64, 64, 64, 128)",
            "value": 1378796078,
            "unit": "ns",
            "extra": "gctime=300701891\nmemory=782332144\nallocs=119\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/Flux/(64, 64, 64, 128)",
            "value": 2284644115,
            "unit": "ns",
            "extra": "gctime=0\nmemory=538825232\nallocs=126\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/forward/NamedTuple/(64, 64, 64, 128)",
            "value": 379645799,
            "unit": "ns",
            "extra": "gctime=3408155\nmemory=260780432\nallocs=43\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/forward/ComponentArray/(64, 64, 64, 128)",
            "value": 382802012,
            "unit": "ns",
            "extra": "gctime=6480575\nmemory=260780608\nallocs=44\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/forward/Flux/(64, 64, 64, 128)",
            "value": 373885904,
            "unit": "ns",
            "extra": "gctime=3567800\nmemory=260780560\nallocs=45\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/ReverseDiff (compiled)/(64, 64, 1, 128)",
            "value": 13537207,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4220944\nallocs=82\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/Zygote/(64, 64, 1, 128)",
            "value": 30390016,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8449936\nallocs=198\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/Tracker/(64, 64, 1, 128)",
            "value": 30989761,
            "unit": "ns",
            "extra": "gctime=0\nmemory=18273336\nallocs=278\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/ReverseDiff/(64, 64, 1, 128)",
            "value": 13668621.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12224560\nallocs=115\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/Flux/(64, 64, 1, 128)",
            "value": 30247720,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8426368\nallocs=125\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/SimpleChains/(64, 64, 1, 128)",
            "value": 1140212.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1970288\nallocs=22\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/forward/NamedTuple/(64, 64, 1, 128)",
            "value": 3884691,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4078160\nallocs=43\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/forward/ComponentArray/(64, 64, 1, 128)",
            "value": 3898727.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4078336\nallocs=44\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/forward/Flux/(64, 64, 1, 128)",
            "value": 3891946,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4078288\nallocs=45\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/forward/SimpleChains/(64, 64, 1, 128)",
            "value": 198274,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/ReverseDiff (compiled)/(200, 128)",
            "value": 299863.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=102672\nallocs=9\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/Zygote/(200, 128)",
            "value": 308715,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1380784\nallocs=83\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/Tracker/(200, 128)",
            "value": 379972.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2053432\nallocs=171\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/ReverseDiff/(200, 128)",
            "value": 343013.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1360864\nallocs=47\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/Flux/(200, 128)",
            "value": 273429,
            "unit": "ns",
            "extra": "gctime=0\nmemory=571728\nallocs=34\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/SimpleChains/(200, 128)",
            "value": 390938,
            "unit": "ns",
            "extra": "gctime=0\nmemory=587088\nallocs=22\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/forward/NamedTuple/(200, 128)",
            "value": 88620,
            "unit": "ns",
            "extra": "gctime=0\nmemory=204896\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/forward/ComponentArray/(200, 128)",
            "value": 152849.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=204976\nallocs=7\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/forward/Flux/(200, 128)",
            "value": 89055.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=204896\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/forward/SimpleChains/(200, 128)",
            "value": 104555,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/ReverseDiff (compiled)/(64, 64, 16, 128)",
            "value": 198222020,
            "unit": "ns",
            "extra": "gctime=0\nmemory=67425440\nallocs=82\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/Zygote/(64, 64, 16, 128)",
            "value": 554659275,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134755968\nallocs=198\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/Tracker/(64, 64, 16, 128)",
            "value": 524098585,
            "unit": "ns",
            "extra": "gctime=1501675\nmemory=292207528\nallocs=278\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/ReverseDiff/(64, 64, 16, 128)",
            "value": 210581294,
            "unit": "ns",
            "extra": "gctime=1453206\nmemory=195480032\nallocs=115\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/Flux/(64, 64, 16, 128)",
            "value": 485365452,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134685840\nallocs=125\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/SimpleChains/(64, 64, 16, 128)",
            "value": 331208856,
            "unit": "ns",
            "extra": "gctime=0\nmemory=31510800\nallocs=22\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/forward/NamedTuple/(64, 64, 16, 128)",
            "value": 64348662,
            "unit": "ns",
            "extra": "gctime=0\nmemory=65197712\nallocs=43\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/forward/ComponentArray/(64, 64, 16, 128)",
            "value": 64664239,
            "unit": "ns",
            "extra": "gctime=0\nmemory=65197888\nallocs=44\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/forward/Flux/(64, 64, 16, 128)",
            "value": 64733368.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=65197840\nallocs=45\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/forward/SimpleChains/(64, 64, 16, 128)",
            "value": 28868790,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/ReverseDiff (compiled)/(2000, 128)",
            "value": 21194764,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1024272\nallocs=9\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/Zygote/(2000, 128)",
            "value": 25643706.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=100150256\nallocs=83\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/Tracker/(2000, 128)",
            "value": 33107099,
            "unit": "ns",
            "extra": "gctime=1191329\nmemory=121278136\nallocs=171\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/ReverseDiff/(2000, 128)",
            "value": 23246963.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=71193568\nallocs=47\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/Flux/(2000, 128)",
            "value": 21567250,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20105360\nallocs=34\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/forward/NamedTuple/(2000, 128)",
            "value": 6676549,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2048096\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/forward/ComponentArray/(2000, 128)",
            "value": 6578517.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2048176\nallocs=7\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/forward/Flux/(2000, 128)",
            "value": 6526370,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2048096\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "avikpal@mit.edu",
            "name": "Avik Pal",
            "username": "avik-pal"
          },
          "committer": {
            "email": "avikpal@mit.edu",
            "name": "Avik Pal",
            "username": "avik-pal"
          },
          "distinct": true,
          "id": "30fb4db0dc645bd6607daab2b1b590fd68c3df8d",
          "message": "Add a deploydocs workflow",
          "timestamp": "2024-04-06T11:48:26-04:00",
          "tree_id": "38e732f54b09d8519639a0d5079223e067b33ced",
          "url": "https://github.com/LuxDL/Lux.jl/commit/30fb4db0dc645bd6607daab2b1b590fd68c3df8d"
        },
        "date": 1712419688924,
        "tool": "julia",
        "benches": [
          {
            "name": "Dense(2 => 2)/cpu/reverse/ReverseDiff (compiled)/(2, 128)",
            "value": 3309.9375,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1312\nallocs=8\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":8,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/Zygote/(2, 128)",
            "value": 9969,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10544\nallocs=73\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/Tracker/(2, 128)",
            "value": 17428,
            "unit": "ns",
            "extra": "gctime=0\nmemory=15592\nallocs=155\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/ReverseDiff/(2, 128)",
            "value": 5572.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8976\nallocs=36\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":7,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/Flux/(2, 128)",
            "value": 10720,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5488\nallocs=29\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/SimpleChains/(2, 128)",
            "value": 1747.8,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3104\nallocs=20\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":10,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/forward/NamedTuple/(2, 128)",
            "value": 2168.05,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2176\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":10,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/forward/ComponentArray/(2, 128)",
            "value": 859.3112582781457,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2256\nallocs=5\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":151,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/forward/Flux/(2, 128)",
            "value": 2222.6499999999996,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2176\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":10,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/forward/SimpleChains/(2, 128)",
            "value": 180.3361344537815,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":714,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/ReverseDiff (compiled)/(20, 128)",
            "value": 20594,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10592\nallocs=8\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/Zygote/(20, 128)",
            "value": 29630,
            "unit": "ns",
            "extra": "gctime=0\nmemory=58112\nallocs=73\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/Tracker/(20, 128)",
            "value": 45950.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=111368\nallocs=155\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/ReverseDiff/(20, 128)",
            "value": 27837,
            "unit": "ns",
            "extra": "gctime=0\nmemory=80848\nallocs=36\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/Flux/(20, 128)",
            "value": 23845,
            "unit": "ns",
            "extra": "gctime=0\nmemory=44416\nallocs=29\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/SimpleChains/(20, 128)",
            "value": 16841.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=15936\nallocs=20\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/forward/NamedTuple/(20, 128)",
            "value": 5090.142857142857,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20736\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":7,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/forward/ComponentArray/(20, 128)",
            "value": 5113.857142857143,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20816\nallocs=5\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":7,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/forward/Flux/(20, 128)",
            "value": 5183.214285714286,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20736\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":7,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/forward/SimpleChains/(20, 128)",
            "value": 1665.6,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":10,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/ReverseDiff (compiled)/(64, 64, 3, 128)",
            "value": 39171220,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12647216\nallocs=82\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/Zygote/(64, 64, 3, 128)",
            "value": 92516317.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=25285040\nallocs=198\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/Tracker/(64, 64, 3, 128)",
            "value": 91544564,
            "unit": "ns",
            "extra": "gctime=0\nmemory=54790344\nallocs=278\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/ReverseDiff/(64, 64, 3, 128)",
            "value": 40944220,
            "unit": "ns",
            "extra": "gctime=0\nmemory=36654816\nallocs=115\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/Flux/(64, 64, 3, 128)",
            "value": 92219746,
            "unit": "ns",
            "extra": "gctime=0\nmemory=25259952\nallocs=125\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/SimpleChains/(64, 64, 3, 128)",
            "value": 12171963,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5907184\nallocs=22\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/forward/NamedTuple/(64, 64, 3, 128)",
            "value": 10709459,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12227408\nallocs=43\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/forward/ComponentArray/(64, 64, 3, 128)",
            "value": 10640511,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12227584\nallocs=44\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/forward/Flux/(64, 64, 3, 128)",
            "value": 10639573.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12227536\nallocs=45\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/forward/SimpleChains/(64, 64, 3, 128)",
            "value": 6388840.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Zygote/(32, 32, 3, 1)",
            "value": 4337945355,
            "unit": "ns",
            "extra": "gctime=3174077284\nmemory=12020576016\nallocs=22544\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Zygote/(32, 32, 3, 16)",
            "value": 12489074553,
            "unit": "ns",
            "extra": "gctime=10585974589\nmemory=12310972160\nallocs=22660\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Zygote/(32, 32, 3, 64)",
            "value": 15431530272,
            "unit": "ns",
            "extra": "gctime=11240508854\nmemory=13240147664\nallocs=22675\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Tracker/(32, 32, 3, 1)",
            "value": 1340294275,
            "unit": "ns",
            "extra": "gctime=359888622\nmemory=5078547456\nallocs=11363\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Tracker/(32, 32, 3, 16)",
            "value": 2563570764,
            "unit": "ns",
            "extra": "gctime=718622616\nmemory=5368947072\nallocs=11472\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Tracker/(32, 32, 3, 64)",
            "value": 5277288718,
            "unit": "ns",
            "extra": "gctime=719831534\nmemory=6298132096\nallocs=11472\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Flux/(32, 32, 3, 1)",
            "value": 89297089,
            "unit": "ns",
            "extra": "gctime=2760342\nmemory=169718704\nallocs=10476\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Flux/(32, 32, 3, 16)",
            "value": 755915071,
            "unit": "ns",
            "extra": "gctime=0\nmemory=376680048\nallocs=10550\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Flux/(32, 32, 3, 64)",
            "value": 3135303265,
            "unit": "ns",
            "extra": "gctime=347486779\nmemory=1038861648\nallocs=10550\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/NamedTuple/(32, 32, 3, 1)",
            "value": 37603926.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=11506240\nallocs=1204\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/NamedTuple/(32, 32, 3, 16)",
            "value": 253064226,
            "unit": "ns",
            "extra": "gctime=0\nmemory=81701120\nallocs=1227\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/NamedTuple/(32, 32, 3, 64)",
            "value": 1024339986,
            "unit": "ns",
            "extra": "gctime=0\nmemory=306329664\nallocs=1227\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/ComponentArray/(32, 32, 3, 1)",
            "value": 24795295,
            "unit": "ns",
            "extra": "gctime=0\nmemory=11503120\nallocs=1126\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/ComponentArray/(32, 32, 3, 16)",
            "value": 261801863,
            "unit": "ns",
            "extra": "gctime=0\nmemory=81698000\nallocs=1149\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/ComponentArray/(32, 32, 3, 64)",
            "value": 1018920553,
            "unit": "ns",
            "extra": "gctime=3046234\nmemory=306326544\nallocs=1149\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/Flux/(32, 32, 3, 1)",
            "value": 22346586,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10299552\nallocs=887\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/Flux/(32, 32, 3, 16)",
            "value": 229851001,
            "unit": "ns",
            "extra": "gctime=0\nmemory=62923104\nallocs=903\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/Flux/(32, 32, 3, 64)",
            "value": 918892173,
            "unit": "ns",
            "extra": "gctime=2425288\nmemory=231321760\nallocs=903\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/ReverseDiff (compiled)/(64, 64, 64, 128)",
            "value": 1063361884,
            "unit": "ns",
            "extra": "gctime=0\nmemory=269788768\nallocs=83\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/Zygote/(64, 64, 64, 128)",
            "value": 2345438684,
            "unit": "ns",
            "extra": "gctime=0\nmemory=539587120\nallocs=204\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/Tracker/(64, 64, 64, 128)",
            "value": 2781536599,
            "unit": "ns",
            "extra": "gctime=347574599\nmemory=1169665928\nallocs=286\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/ReverseDiff/(64, 64, 64, 128)",
            "value": 1425872877,
            "unit": "ns",
            "extra": "gctime=316662601\nmemory=782332144\nallocs=119\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/Flux/(64, 64, 64, 128)",
            "value": 2321669161,
            "unit": "ns",
            "extra": "gctime=0\nmemory=538825232\nallocs=126\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/forward/NamedTuple/(64, 64, 64, 128)",
            "value": 379773557,
            "unit": "ns",
            "extra": "gctime=3202315\nmemory=260780432\nallocs=43\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/forward/ComponentArray/(64, 64, 64, 128)",
            "value": 379722574,
            "unit": "ns",
            "extra": "gctime=3206383\nmemory=260780608\nallocs=44\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/forward/Flux/(64, 64, 64, 128)",
            "value": 394178096,
            "unit": "ns",
            "extra": "gctime=4403283\nmemory=260780560\nallocs=45\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/ReverseDiff (compiled)/(64, 64, 1, 128)",
            "value": 14047794.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4220944\nallocs=82\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/Zygote/(64, 64, 1, 128)",
            "value": 31252359,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8449936\nallocs=198\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/Tracker/(64, 64, 1, 128)",
            "value": 31998310,
            "unit": "ns",
            "extra": "gctime=0\nmemory=18273336\nallocs=278\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/ReverseDiff/(64, 64, 1, 128)",
            "value": 14223396,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12224560\nallocs=115\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/Flux/(64, 64, 1, 128)",
            "value": 31378284,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8426368\nallocs=125\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/SimpleChains/(64, 64, 1, 128)",
            "value": 1145634,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1970288\nallocs=22\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/forward/NamedTuple/(64, 64, 1, 128)",
            "value": 3967058,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4078160\nallocs=43\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/forward/ComponentArray/(64, 64, 1, 128)",
            "value": 3980144,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4078336\nallocs=44\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/forward/Flux/(64, 64, 1, 128)",
            "value": 4010781,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4078288\nallocs=45\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/forward/SimpleChains/(64, 64, 1, 128)",
            "value": 205758.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/ReverseDiff (compiled)/(200, 128)",
            "value": 349440,
            "unit": "ns",
            "extra": "gctime=0\nmemory=102672\nallocs=9\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/Zygote/(200, 128)",
            "value": 342057.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1380784\nallocs=83\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/Tracker/(200, 128)",
            "value": 427887.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2053432\nallocs=171\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/ReverseDiff/(200, 128)",
            "value": 388398.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1360864\nallocs=47\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/Flux/(200, 128)",
            "value": 275408,
            "unit": "ns",
            "extra": "gctime=0\nmemory=571728\nallocs=34\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/SimpleChains/(200, 128)",
            "value": 400380.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=587088\nallocs=22\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/forward/NamedTuple/(200, 128)",
            "value": 115941.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=204896\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/forward/ComponentArray/(200, 128)",
            "value": 125063,
            "unit": "ns",
            "extra": "gctime=0\nmemory=204976\nallocs=7\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/forward/Flux/(200, 128)",
            "value": 115495,
            "unit": "ns",
            "extra": "gctime=0\nmemory=204896\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/forward/SimpleChains/(200, 128)",
            "value": 106759,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/ReverseDiff (compiled)/(64, 64, 16, 128)",
            "value": 219442012,
            "unit": "ns",
            "extra": "gctime=0\nmemory=67425440\nallocs=82\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/Zygote/(64, 64, 16, 128)",
            "value": 509899532,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134755968\nallocs=198\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/Tracker/(64, 64, 16, 128)",
            "value": 508777926,
            "unit": "ns",
            "extra": "gctime=1754017\nmemory=292207528\nallocs=278\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/ReverseDiff/(64, 64, 16, 128)",
            "value": 224484951,
            "unit": "ns",
            "extra": "gctime=1756041\nmemory=195480032\nallocs=115\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/Flux/(64, 64, 16, 128)",
            "value": 522882439,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134685840\nallocs=125\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/SimpleChains/(64, 64, 16, 128)",
            "value": 346324408,
            "unit": "ns",
            "extra": "gctime=0\nmemory=31510800\nallocs=22\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/forward/NamedTuple/(64, 64, 16, 128)",
            "value": 78871825,
            "unit": "ns",
            "extra": "gctime=0\nmemory=65197712\nallocs=43\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/forward/ComponentArray/(64, 64, 16, 128)",
            "value": 68946254.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=65197888\nallocs=44\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/forward/Flux/(64, 64, 16, 128)",
            "value": 68791084,
            "unit": "ns",
            "extra": "gctime=0\nmemory=65197840\nallocs=45\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/forward/SimpleChains/(64, 64, 16, 128)",
            "value": 29756766,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/ReverseDiff (compiled)/(2000, 128)",
            "value": 20131300.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1024272\nallocs=9\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/Zygote/(2000, 128)",
            "value": 29233127,
            "unit": "ns",
            "extra": "gctime=0\nmemory=100150256\nallocs=83\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/Tracker/(2000, 128)",
            "value": 33607073,
            "unit": "ns",
            "extra": "gctime=1348762\nmemory=121278136\nallocs=171\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/ReverseDiff/(2000, 128)",
            "value": 21732188,
            "unit": "ns",
            "extra": "gctime=0\nmemory=71193568\nallocs=47\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/Flux/(2000, 128)",
            "value": 21867976,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20105360\nallocs=34\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/forward/NamedTuple/(2000, 128)",
            "value": 6782043,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2048096\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/forward/ComponentArray/(2000, 128)",
            "value": 6647637.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2048176\nallocs=7\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/forward/Flux/(2000, 128)",
            "value": 6619264.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2048096\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "avikpal@mit.edu",
            "name": "Avik Pal",
            "username": "avik-pal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "daf571ac359fe602ba9ef773c444298c66bb1378",
          "message": "Update DeployDocs.yml",
          "timestamp": "2024-04-06T14:05:38-04:00",
          "tree_id": "4b613d9e9ceffa055a69c6a0b4e265cdfbd66619",
          "url": "https://github.com/LuxDL/Lux.jl/commit/daf571ac359fe602ba9ef773c444298c66bb1378"
        },
        "date": 1712427875397,
        "tool": "julia",
        "benches": [
          {
            "name": "Dense(2 => 2)/cpu/reverse/ReverseDiff (compiled)/(2, 128)",
            "value": 3656.8125,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1312\nallocs=8\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":8,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/Zygote/(2, 128)",
            "value": 9151.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10544\nallocs=73\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/Tracker/(2, 128)",
            "value": 16080,
            "unit": "ns",
            "extra": "gctime=0\nmemory=15592\nallocs=155\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/ReverseDiff/(2, 128)",
            "value": 7878.700000000001,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8976\nallocs=36\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":5,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/Flux/(2, 128)",
            "value": 7574,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5488\nallocs=29\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":3,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/SimpleChains/(2, 128)",
            "value": 1619.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3104\nallocs=20\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":10,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/forward/NamedTuple/(2, 128)",
            "value": 1976.7,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2176\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":10,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/forward/ComponentArray/(2, 128)",
            "value": 1682.517006802721,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2256\nallocs=5\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":147,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/forward/Flux/(2, 128)",
            "value": 1799.3854166666665,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2176\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":48,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/forward/SimpleChains/(2, 128)",
            "value": 179.46453407510432,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":719,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/ReverseDiff (compiled)/(20, 128)",
            "value": 18965,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10592\nallocs=8\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/Zygote/(20, 128)",
            "value": 31143,
            "unit": "ns",
            "extra": "gctime=0\nmemory=58112\nallocs=73\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/Tracker/(20, 128)",
            "value": 42349,
            "unit": "ns",
            "extra": "gctime=0\nmemory=111368\nallocs=155\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/ReverseDiff/(20, 128)",
            "value": 25913,
            "unit": "ns",
            "extra": "gctime=0\nmemory=80848\nallocs=36\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/Flux/(20, 128)",
            "value": 21104.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=44416\nallocs=29\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/SimpleChains/(20, 128)",
            "value": 14532,
            "unit": "ns",
            "extra": "gctime=0\nmemory=15936\nallocs=20\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/forward/NamedTuple/(20, 128)",
            "value": 5013.571428571428,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20736\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":7,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/forward/ComponentArray/(20, 128)",
            "value": 5018.642857142857,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20816\nallocs=5\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":7,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/forward/Flux/(20, 128)",
            "value": 4980.714285714285,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20736\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":7,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/forward/SimpleChains/(20, 128)",
            "value": 1668.1,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":10,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/ReverseDiff (compiled)/(64, 64, 3, 128)",
            "value": 38595384,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12647216\nallocs=82\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/Zygote/(64, 64, 3, 128)",
            "value": 89443055.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=25285040\nallocs=198\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/Tracker/(64, 64, 3, 128)",
            "value": 94529597,
            "unit": "ns",
            "extra": "gctime=0\nmemory=54790344\nallocs=278\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/ReverseDiff/(64, 64, 3, 128)",
            "value": 39223416,
            "unit": "ns",
            "extra": "gctime=0\nmemory=36654816\nallocs=115\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/Flux/(64, 64, 3, 128)",
            "value": 89496204.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=25259952\nallocs=125\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/SimpleChains/(64, 64, 3, 128)",
            "value": 11928251,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5907184\nallocs=22\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/forward/NamedTuple/(64, 64, 3, 128)",
            "value": 10238675.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12227408\nallocs=43\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/forward/ComponentArray/(64, 64, 3, 128)",
            "value": 10230412,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12227584\nallocs=44\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/forward/Flux/(64, 64, 3, 128)",
            "value": 10154952,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12227536\nallocs=45\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/forward/SimpleChains/(64, 64, 3, 128)",
            "value": 6384575,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Zygote/(32, 32, 3, 1)",
            "value": 4030279327,
            "unit": "ns",
            "extra": "gctime=2923142172\nmemory=12020576016\nallocs=22544\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Zygote/(32, 32, 3, 16)",
            "value": 12046503846,
            "unit": "ns",
            "extra": "gctime=10228559035\nmemory=12310972160\nallocs=22660\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Zygote/(32, 32, 3, 64)",
            "value": 15794965424,
            "unit": "ns",
            "extra": "gctime=11823065063\nmemory=13240147664\nallocs=22675\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Tracker/(32, 32, 3, 1)",
            "value": 1400101067,
            "unit": "ns",
            "extra": "gctime=411944667\nmemory=5078547456\nallocs=11363\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Tracker/(32, 32, 3, 16)",
            "value": 2516984321,
            "unit": "ns",
            "extra": "gctime=702457081\nmemory=5368947072\nallocs=11472\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Tracker/(32, 32, 3, 64)",
            "value": 5214787522,
            "unit": "ns",
            "extra": "gctime=692684864\nmemory=6298132096\nallocs=11472\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Flux/(32, 32, 3, 1)",
            "value": 100618767,
            "unit": "ns",
            "extra": "gctime=2930287\nmemory=169718704\nallocs=10476\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Flux/(32, 32, 3, 16)",
            "value": 746986599,
            "unit": "ns",
            "extra": "gctime=0\nmemory=376680048\nallocs=10550\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Flux/(32, 32, 3, 64)",
            "value": 3121637734,
            "unit": "ns",
            "extra": "gctime=344111605\nmemory=1038861648\nallocs=10550\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/NamedTuple/(32, 32, 3, 1)",
            "value": 23381773.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=11506240\nallocs=1204\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/NamedTuple/(32, 32, 3, 16)",
            "value": 246937230,
            "unit": "ns",
            "extra": "gctime=0\nmemory=81701120\nallocs=1227\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/NamedTuple/(32, 32, 3, 64)",
            "value": 998891121,
            "unit": "ns",
            "extra": "gctime=0\nmemory=306329664\nallocs=1227\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/ComponentArray/(32, 32, 3, 1)",
            "value": 23284570,
            "unit": "ns",
            "extra": "gctime=0\nmemory=11503120\nallocs=1126\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/ComponentArray/(32, 32, 3, 16)",
            "value": 248809828,
            "unit": "ns",
            "extra": "gctime=0\nmemory=81698000\nallocs=1149\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/ComponentArray/(32, 32, 3, 64)",
            "value": 1011337082,
            "unit": "ns",
            "extra": "gctime=3209115\nmemory=306326544\nallocs=1149\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/Flux/(32, 32, 3, 1)",
            "value": 21676843,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10299552\nallocs=887\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/Flux/(32, 32, 3, 16)",
            "value": 226319613,
            "unit": "ns",
            "extra": "gctime=0\nmemory=62923104\nallocs=903\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/Flux/(32, 32, 3, 64)",
            "value": 902372950,
            "unit": "ns",
            "extra": "gctime=1397267\nmemory=231321760\nallocs=903\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/ReverseDiff (compiled)/(64, 64, 64, 128)",
            "value": 1053268496,
            "unit": "ns",
            "extra": "gctime=0\nmemory=269788768\nallocs=83\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/Zygote/(64, 64, 64, 128)",
            "value": 2296090890,
            "unit": "ns",
            "extra": "gctime=0\nmemory=539587120\nallocs=204\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/Tracker/(64, 64, 64, 128)",
            "value": 2720469489,
            "unit": "ns",
            "extra": "gctime=330099713\nmemory=1169665928\nallocs=286\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/ReverseDiff/(64, 64, 64, 128)",
            "value": 1395277941,
            "unit": "ns",
            "extra": "gctime=293339822\nmemory=782332144\nallocs=119\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/Flux/(64, 64, 64, 128)",
            "value": 2298983732,
            "unit": "ns",
            "extra": "gctime=0\nmemory=538825232\nallocs=126\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/forward/NamedTuple/(64, 64, 64, 128)",
            "value": 374687081,
            "unit": "ns",
            "extra": "gctime=3333800\nmemory=260780432\nallocs=43\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/forward/ComponentArray/(64, 64, 64, 128)",
            "value": 375545762,
            "unit": "ns",
            "extra": "gctime=3298741\nmemory=260780608\nallocs=44\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/forward/Flux/(64, 64, 64, 128)",
            "value": 375406485,
            "unit": "ns",
            "extra": "gctime=3339939\nmemory=260780560\nallocs=45\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/ReverseDiff (compiled)/(64, 64, 1, 128)",
            "value": 13637906,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4220944\nallocs=82\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/Zygote/(64, 64, 1, 128)",
            "value": 30583358,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8449936\nallocs=198\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/Tracker/(64, 64, 1, 128)",
            "value": 31186939,
            "unit": "ns",
            "extra": "gctime=0\nmemory=18273336\nallocs=278\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/ReverseDiff/(64, 64, 1, 128)",
            "value": 13924959,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12224560\nallocs=115\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/Flux/(64, 64, 1, 128)",
            "value": 30518040,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8426368\nallocs=125\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/SimpleChains/(64, 64, 1, 128)",
            "value": 1141086,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1970288\nallocs=22\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/forward/NamedTuple/(64, 64, 1, 128)",
            "value": 3886734,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4078160\nallocs=43\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/forward/ComponentArray/(64, 64, 1, 128)",
            "value": 3889741,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4078336\nallocs=44\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/forward/Flux/(64, 64, 1, 128)",
            "value": 5281408,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4078288\nallocs=45\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/forward/SimpleChains/(64, 64, 1, 128)",
            "value": 193354.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/ReverseDiff (compiled)/(200, 128)",
            "value": 297558,
            "unit": "ns",
            "extra": "gctime=0\nmemory=102672\nallocs=9\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/Zygote/(200, 128)",
            "value": 315967.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1380784\nallocs=83\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/Tracker/(200, 128)",
            "value": 394634,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2053432\nallocs=171\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/ReverseDiff/(200, 128)",
            "value": 339206,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1360864\nallocs=47\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/Flux/(200, 128)",
            "value": 273894,
            "unit": "ns",
            "extra": "gctime=0\nmemory=571728\nallocs=34\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/SimpleChains/(200, 128)",
            "value": 395149.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=587088\nallocs=22\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/forward/NamedTuple/(200, 128)",
            "value": 89255.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=204896\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/forward/ComponentArray/(200, 128)",
            "value": 89566.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=204976\nallocs=7\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/forward/Flux/(200, 128)",
            "value": 87172,
            "unit": "ns",
            "extra": "gctime=0\nmemory=204896\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/forward/SimpleChains/(200, 128)",
            "value": 104564,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/ReverseDiff (compiled)/(64, 64, 16, 128)",
            "value": 191953064,
            "unit": "ns",
            "extra": "gctime=0\nmemory=67425440\nallocs=82\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/Zygote/(64, 64, 16, 128)",
            "value": 503147667,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134755968\nallocs=198\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/Tracker/(64, 64, 16, 128)",
            "value": 500497397,
            "unit": "ns",
            "extra": "gctime=1683128\nmemory=292207528\nallocs=278\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/ReverseDiff/(64, 64, 16, 128)",
            "value": 222057740,
            "unit": "ns",
            "extra": "gctime=2562033\nmemory=195480032\nallocs=115\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/Flux/(64, 64, 16, 128)",
            "value": 486292535,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134685840\nallocs=125\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/SimpleChains/(64, 64, 16, 128)",
            "value": 325096326,
            "unit": "ns",
            "extra": "gctime=0\nmemory=31510800\nallocs=22\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/forward/NamedTuple/(64, 64, 16, 128)",
            "value": 64548566,
            "unit": "ns",
            "extra": "gctime=0\nmemory=65197712\nallocs=43\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/forward/ComponentArray/(64, 64, 16, 128)",
            "value": 69277371,
            "unit": "ns",
            "extra": "gctime=0\nmemory=65197888\nallocs=44\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/forward/Flux/(64, 64, 16, 128)",
            "value": 64726210,
            "unit": "ns",
            "extra": "gctime=0\nmemory=65197840\nallocs=45\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/forward/SimpleChains/(64, 64, 16, 128)",
            "value": 29276202,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/ReverseDiff (compiled)/(2000, 128)",
            "value": 20534056.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1024272\nallocs=9\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/Zygote/(2000, 128)",
            "value": 24537479,
            "unit": "ns",
            "extra": "gctime=0\nmemory=100150256\nallocs=83\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/Tracker/(2000, 128)",
            "value": 31077993,
            "unit": "ns",
            "extra": "gctime=708552\nmemory=121278136\nallocs=171\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/ReverseDiff/(2000, 128)",
            "value": 21868158,
            "unit": "ns",
            "extra": "gctime=0\nmemory=71193568\nallocs=47\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/Flux/(2000, 128)",
            "value": 19924317.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20105360\nallocs=34\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/forward/NamedTuple/(2000, 128)",
            "value": 6605281,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2048096\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/forward/ComponentArray/(2000, 128)",
            "value": 6601993,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2048176\nallocs=7\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/forward/Flux/(2000, 128)",
            "value": 6564612,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2048096\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "avikpal@mit.edu",
            "name": "Avik Pal",
            "username": "avik-pal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2151446525f848290c5f68b946196364b82a34fb",
          "message": "Update DeployDocs.yml",
          "timestamp": "2024-04-06T15:50:16-04:00",
          "tree_id": "62e48bb56bbaa9c1698dd8d7e27ed117d85c06f2",
          "url": "https://github.com/LuxDL/Lux.jl/commit/2151446525f848290c5f68b946196364b82a34fb"
        },
        "date": 1712434153796,
        "tool": "julia",
        "benches": [
          {
            "name": "Dense(2 => 2)/cpu/reverse/ReverseDiff (compiled)/(2, 128)",
            "value": 3278,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1312\nallocs=8\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":8,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/Zygote/(2, 128)",
            "value": 9398,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10544\nallocs=73\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/Tracker/(2, 128)",
            "value": 15734,
            "unit": "ns",
            "extra": "gctime=0\nmemory=15592\nallocs=155\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/ReverseDiff/(2, 128)",
            "value": 4760.285714285714,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8976\nallocs=36\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":7,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/Flux/(2, 128)",
            "value": 7069.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5488\nallocs=29\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":4,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/SimpleChains/(2, 128)",
            "value": 1568.45,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3104\nallocs=20\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":10,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/forward/NamedTuple/(2, 128)",
            "value": 1077.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2176\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":10,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/forward/ComponentArray/(2, 128)",
            "value": 728.6503267973856,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2256\nallocs=5\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":153,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/forward/Flux/(2, 128)",
            "value": 1828.878787878788,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2176\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":33,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/forward/SimpleChains/(2, 128)",
            "value": 179.69817927170868,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":714,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/ReverseDiff (compiled)/(20, 128)",
            "value": 17993.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10592\nallocs=8\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/Zygote/(20, 128)",
            "value": 28242.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=58112\nallocs=73\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/Tracker/(20, 128)",
            "value": 41652,
            "unit": "ns",
            "extra": "gctime=0\nmemory=111368\nallocs=155\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/ReverseDiff/(20, 128)",
            "value": 26018.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=80848\nallocs=36\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/Flux/(20, 128)",
            "value": 21325,
            "unit": "ns",
            "extra": "gctime=0\nmemory=44416\nallocs=29\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/SimpleChains/(20, 128)",
            "value": 14502.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=15936\nallocs=20\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/forward/NamedTuple/(20, 128)",
            "value": 5060.142857142857,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20736\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":7,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/forward/ComponentArray/(20, 128)",
            "value": 5035.142857142857,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20816\nallocs=5\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":7,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/forward/Flux/(20, 128)",
            "value": 5080.928571428572,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20736\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":7,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/forward/SimpleChains/(20, 128)",
            "value": 1658.65,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":10,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/ReverseDiff (compiled)/(64, 64, 3, 128)",
            "value": 39735863,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12647216\nallocs=82\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/Zygote/(64, 64, 3, 128)",
            "value": 88714766.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=25285040\nallocs=198\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/Tracker/(64, 64, 3, 128)",
            "value": 90703691.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=54790344\nallocs=278\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/ReverseDiff/(64, 64, 3, 128)",
            "value": 39846740,
            "unit": "ns",
            "extra": "gctime=0\nmemory=36654816\nallocs=115\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/Flux/(64, 64, 3, 128)",
            "value": 88694760.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=25259952\nallocs=125\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/SimpleChains/(64, 64, 3, 128)",
            "value": 12030666.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5907184\nallocs=22\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/forward/NamedTuple/(64, 64, 3, 128)",
            "value": 10326705.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12227408\nallocs=43\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/forward/ComponentArray/(64, 64, 3, 128)",
            "value": 10333506,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12227584\nallocs=44\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/forward/Flux/(64, 64, 3, 128)",
            "value": 10321454,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12227536\nallocs=45\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/forward/SimpleChains/(64, 64, 3, 128)",
            "value": 6384684,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Zygote/(32, 32, 3, 1)",
            "value": 4115843588,
            "unit": "ns",
            "extra": "gctime=3005416156\nmemory=12020576016\nallocs=22544\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Zygote/(32, 32, 3, 16)",
            "value": 12113211889,
            "unit": "ns",
            "extra": "gctime=10292441339\nmemory=12310972160\nallocs=22660\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Zygote/(32, 32, 3, 64)",
            "value": 14761197451,
            "unit": "ns",
            "extra": "gctime=10800092864\nmemory=13240147664\nallocs=22675\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Tracker/(32, 32, 3, 1)",
            "value": 1340590052,
            "unit": "ns",
            "extra": "gctime=364977443\nmemory=5078547456\nallocs=11363\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Tracker/(32, 32, 3, 16)",
            "value": 2523751678,
            "unit": "ns",
            "extra": "gctime=694152269\nmemory=5368947072\nallocs=11472\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Tracker/(32, 32, 3, 64)",
            "value": 5193147452,
            "unit": "ns",
            "extra": "gctime=689951162\nmemory=6298132096\nallocs=11472\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Flux/(32, 32, 3, 1)",
            "value": 84376158.5,
            "unit": "ns",
            "extra": "gctime=2444518.5\nmemory=169718704\nallocs=10476\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Flux/(32, 32, 3, 16)",
            "value": 730416368,
            "unit": "ns",
            "extra": "gctime=0\nmemory=376680048\nallocs=10550\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Flux/(32, 32, 3, 64)",
            "value": 3096781875,
            "unit": "ns",
            "extra": "gctime=332333287\nmemory=1038861648\nallocs=10550\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/NamedTuple/(32, 32, 3, 1)",
            "value": 23262245.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=11506240\nallocs=1204\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/NamedTuple/(32, 32, 3, 16)",
            "value": 268235661,
            "unit": "ns",
            "extra": "gctime=0\nmemory=81701120\nallocs=1227\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/NamedTuple/(32, 32, 3, 64)",
            "value": 1009004192,
            "unit": "ns",
            "extra": "gctime=0\nmemory=306329664\nallocs=1227\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/ComponentArray/(32, 32, 3, 1)",
            "value": 22975137,
            "unit": "ns",
            "extra": "gctime=0\nmemory=11503120\nallocs=1126\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/ComponentArray/(32, 32, 3, 16)",
            "value": 250850401,
            "unit": "ns",
            "extra": "gctime=0\nmemory=81698000\nallocs=1149\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/ComponentArray/(32, 32, 3, 64)",
            "value": 1014877276,
            "unit": "ns",
            "extra": "gctime=3371758\nmemory=306326544\nallocs=1149\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/Flux/(32, 32, 3, 1)",
            "value": 21898432,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10299552\nallocs=887\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/Flux/(32, 32, 3, 16)",
            "value": 234578322,
            "unit": "ns",
            "extra": "gctime=0\nmemory=62923104\nallocs=903\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/Flux/(32, 32, 3, 64)",
            "value": 892834945,
            "unit": "ns",
            "extra": "gctime=1302059\nmemory=231321760\nallocs=903\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/ReverseDiff (compiled)/(64, 64, 64, 128)",
            "value": 1052794177,
            "unit": "ns",
            "extra": "gctime=0\nmemory=269788768\nallocs=83\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/Zygote/(64, 64, 64, 128)",
            "value": 2279137035,
            "unit": "ns",
            "extra": "gctime=0\nmemory=539587120\nallocs=204\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/Tracker/(64, 64, 64, 128)",
            "value": 2710583498,
            "unit": "ns",
            "extra": "gctime=336138494\nmemory=1169665928\nallocs=286\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/ReverseDiff/(64, 64, 64, 128)",
            "value": 1389132927,
            "unit": "ns",
            "extra": "gctime=291941354\nmemory=782332144\nallocs=119\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/Flux/(64, 64, 64, 128)",
            "value": 2275548584,
            "unit": "ns",
            "extra": "gctime=0\nmemory=538825232\nallocs=126\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/forward/NamedTuple/(64, 64, 64, 128)",
            "value": 377442224,
            "unit": "ns",
            "extra": "gctime=3373020\nmemory=260780432\nallocs=43\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/forward/ComponentArray/(64, 64, 64, 128)",
            "value": 379888130,
            "unit": "ns",
            "extra": "gctime=3521737\nmemory=260780608\nallocs=44\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/forward/Flux/(64, 64, 64, 128)",
            "value": 373961269,
            "unit": "ns",
            "extra": "gctime=3455022\nmemory=260780560\nallocs=45\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/ReverseDiff (compiled)/(64, 64, 1, 128)",
            "value": 13875587.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4220944\nallocs=82\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/Zygote/(64, 64, 1, 128)",
            "value": 30368575,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8449936\nallocs=198\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/Tracker/(64, 64, 1, 128)",
            "value": 31102004,
            "unit": "ns",
            "extra": "gctime=0\nmemory=18273336\nallocs=278\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/ReverseDiff/(64, 64, 1, 128)",
            "value": 14281059,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12224560\nallocs=115\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/Flux/(64, 64, 1, 128)",
            "value": 30311820,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8426368\nallocs=125\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/SimpleChains/(64, 64, 1, 128)",
            "value": 1150590.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1970288\nallocs=22\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/forward/NamedTuple/(64, 64, 1, 128)",
            "value": 3882291,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4078160\nallocs=43\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/forward/ComponentArray/(64, 64, 1, 128)",
            "value": 3888932,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4078336\nallocs=44\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/forward/Flux/(64, 64, 1, 128)",
            "value": 3883953,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4078288\nallocs=45\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/forward/SimpleChains/(64, 64, 1, 128)",
            "value": 200209,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/ReverseDiff (compiled)/(200, 128)",
            "value": 304297.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=102672\nallocs=9\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/Zygote/(200, 128)",
            "value": 312863.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1380784\nallocs=83\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/Tracker/(200, 128)",
            "value": 386035,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2053432\nallocs=171\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/ReverseDiff/(200, 128)",
            "value": 343646.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1360864\nallocs=47\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/Flux/(200, 128)",
            "value": 282617.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=571728\nallocs=34\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/SimpleChains/(200, 128)",
            "value": 405982,
            "unit": "ns",
            "extra": "gctime=0\nmemory=587088\nallocs=22\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/forward/NamedTuple/(200, 128)",
            "value": 152639.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=204896\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/forward/ComponentArray/(200, 128)",
            "value": 90333.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=204976\nallocs=7\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/forward/Flux/(200, 128)",
            "value": 87037,
            "unit": "ns",
            "extra": "gctime=0\nmemory=204896\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/forward/SimpleChains/(200, 128)",
            "value": 104891,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/ReverseDiff (compiled)/(64, 64, 16, 128)",
            "value": 200256102,
            "unit": "ns",
            "extra": "gctime=0\nmemory=67425440\nallocs=82\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/Zygote/(64, 64, 16, 128)",
            "value": 516867287,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134755968\nallocs=198\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/Tracker/(64, 64, 16, 128)",
            "value": 522952751,
            "unit": "ns",
            "extra": "gctime=1584034\nmemory=292207528\nallocs=278\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/ReverseDiff/(64, 64, 16, 128)",
            "value": 214100875,
            "unit": "ns",
            "extra": "gctime=1366558\nmemory=195480032\nallocs=115\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/Flux/(64, 64, 16, 128)",
            "value": 497918904,
            "unit": "ns",
            "extra": "gctime=0\nmemory=134685840\nallocs=125\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/SimpleChains/(64, 64, 16, 128)",
            "value": 332721927,
            "unit": "ns",
            "extra": "gctime=0\nmemory=31510800\nallocs=22\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/forward/NamedTuple/(64, 64, 16, 128)",
            "value": 61648795,
            "unit": "ns",
            "extra": "gctime=0\nmemory=65197712\nallocs=43\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/forward/ComponentArray/(64, 64, 16, 128)",
            "value": 64574671,
            "unit": "ns",
            "extra": "gctime=0\nmemory=65197888\nallocs=44\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/forward/Flux/(64, 64, 16, 128)",
            "value": 64655762,
            "unit": "ns",
            "extra": "gctime=0\nmemory=65197840\nallocs=45\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/forward/SimpleChains/(64, 64, 16, 128)",
            "value": 29164747,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/ReverseDiff (compiled)/(2000, 128)",
            "value": 19354164,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1024272\nallocs=9\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/Zygote/(2000, 128)",
            "value": 25773860,
            "unit": "ns",
            "extra": "gctime=0\nmemory=100150256\nallocs=83\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/Tracker/(2000, 128)",
            "value": 32132352,
            "unit": "ns",
            "extra": "gctime=1264938\nmemory=121278136\nallocs=171\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/ReverseDiff/(2000, 128)",
            "value": 21717931,
            "unit": "ns",
            "extra": "gctime=0\nmemory=71193568\nallocs=47\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/Flux/(2000, 128)",
            "value": 19637230.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20105360\nallocs=34\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/forward/NamedTuple/(2000, 128)",
            "value": 6593993,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2048096\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/forward/ComponentArray/(2000, 128)",
            "value": 6611906,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2048176\nallocs=7\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/forward/Flux/(2000, 128)",
            "value": 6559783.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2048096\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":100,\"evals\":1,\"gcsample\":false,\"seconds\":0.25,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "avikpal@mit.edu",
            "name": "Avik Pal",
            "username": "avik-pal"
          },
          "committer": {
            "email": "avikpal@mit.edu",
            "name": "Avik Pal",
            "username": "avik-pal"
          },
          "distinct": true,
          "id": "0212cd85f15298db4dce1bafa94c2038db303730",
          "message": "Adapt to documenter vitepress",
          "timestamp": "2024-04-06T16:08:51-04:00",
          "tree_id": "95c2d67b5103452bc0661cbc14dfba66cf6e21f5",
          "url": "https://github.com/LuxDL/Lux.jl/commit/0212cd85f15298db4dce1bafa94c2038db303730"
        },
        "date": 1712435928339,
        "tool": "julia",
        "benches": [
          {
            "name": "Dense(2 => 2)/cpu/reverse/ReverseDiff (compiled)/(2, 128)",
            "value": 3649.375,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1312\nallocs=8\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":8,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/Zygote/(2, 128)",
            "value": 8218.666666666666,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6608\nallocs=39\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":6,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/Tracker/(2, 128)",
            "value": 14316,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16824\nallocs=126\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/ReverseDiff/(2, 128)",
            "value": 9760.1,
            "unit": "ns",
            "extra": "gctime=0\nmemory=9776\nallocs=54\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":5,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/Flux/(2, 128)",
            "value": 8646,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5472\nallocs=28\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/SimpleChains/(2, 128)",
            "value": 4130,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2880\nallocs=26\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":9,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/forward/NamedTuple/(2, 128)",
            "value": 1964.7,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2176\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":10,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/forward/ComponentArray/(2, 128)",
            "value": 1638.0244755244755,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2256\nallocs=5\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":143,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/forward/Flux/(2, 128)",
            "value": 1816.8695652173913,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2176\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":46,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/forward/SimpleChains/(2, 128)",
            "value": 179.08683473389357,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":714,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/ReverseDiff (compiled)/(20, 128)",
            "value": 17382,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10592\nallocs=8\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/Zygote/(20, 128)",
            "value": 18264,
            "unit": "ns",
            "extra": "gctime=0\nmemory=45536\nallocs=39\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/Tracker/(20, 128)",
            "value": 35547,
            "unit": "ns",
            "extra": "gctime=0\nmemory=124296\nallocs=124\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/ReverseDiff/(20, 128)",
            "value": 28303,
            "unit": "ns",
            "extra": "gctime=0\nmemory=78240\nallocs=52\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/Flux/(20, 128)",
            "value": 19347,
            "unit": "ns",
            "extra": "gctime=0\nmemory=44400\nallocs=28\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/SimpleChains/(20, 128)",
            "value": 16240,
            "unit": "ns",
            "extra": "gctime=0\nmemory=15648\nallocs=26\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/forward/NamedTuple/(20, 128)",
            "value": 4877.714285714285,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20736\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":7,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/forward/ComponentArray/(20, 128)",
            "value": 4838.142857142857,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20816\nallocs=5\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":7,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/forward/Flux/(20, 128)",
            "value": 4914.857142857143,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20736\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":7,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/forward/SimpleChains/(20, 128)",
            "value": 1655,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":10,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/ReverseDiff (compiled)/(64, 64, 3, 128)",
            "value": 38289389,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13063408\nallocs=87\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/Zygote/(64, 64, 3, 128)",
            "value": 72372867,
            "unit": "ns",
            "extra": "gctime=0\nmemory=26092000\nallocs=130\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/Tracker/(64, 64, 3, 128)",
            "value": 75890750.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=68203528\nallocs=270\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/ReverseDiff/(64, 64, 3, 128)",
            "value": 87487111,
            "unit": "ns",
            "extra": "gctime=0\nmemory=44196944\nallocs=187\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/Flux/(64, 64, 3, 128)",
            "value": 72444479,
            "unit": "ns",
            "extra": "gctime=0\nmemory=26099056\nallocs=157\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/SimpleChains/(64, 64, 3, 128)",
            "value": 12019617,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5906928\nallocs=28\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/forward/NamedTuple/(64, 64, 3, 128)",
            "value": 10014569,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12643552\nallocs=48\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/forward/ComponentArray/(64, 64, 3, 128)",
            "value": 9947336.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12643776\nallocs=49\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/forward/Flux/(64, 64, 3, 128)",
            "value": 9965330,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12643680\nallocs=50\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/forward/SimpleChains/(64, 64, 3, 128)",
            "value": 6385975,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Zygote/(32, 32, 3, 1)",
            "value": 99271198,
            "unit": "ns",
            "extra": "gctime=1816248\nmemory=191953904\nallocs=45666\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Zygote/(32, 32, 3, 16)",
            "value": 762933820,
            "unit": "ns",
            "extra": "gctime=2549807\nmemory=482375424\nallocs=45912\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Zygote/(32, 32, 3, 64)",
            "value": 2556853410,
            "unit": "ns",
            "extra": "gctime=47293334\nmemory=1411550928\nallocs=45927\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Tracker/(32, 32, 3, 1)",
            "value": 163260913,
            "unit": "ns",
            "extra": "gctime=5164275\nmemory=457197696\nallocs=11107\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Tracker/(32, 32, 3, 16)",
            "value": 1044550757.5,
            "unit": "ns",
            "extra": "gctime=157046750.5\nmemory=747993376\nallocs=11349\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Tracker/(32, 32, 3, 64)",
            "value": 3454231379,
            "unit": "ns",
            "extra": "gctime=315702751\nmemory=1678355872\nallocs=11348\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Flux/(32, 32, 3, 1)",
            "value": 79956809.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=183068240\nallocs=10474\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Flux/(32, 32, 3, 16)",
            "value": 679542357,
            "unit": "ns",
            "extra": "gctime=1227880\nmemory=390054960\nallocs=10678\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Flux/(32, 32, 3, 64)",
            "value": 2770402964,
            "unit": "ns",
            "extra": "gctime=326671242\nmemory=1052236560\nallocs=10678\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/NamedTuple/(32, 32, 3, 1)",
            "value": 25300936,
            "unit": "ns",
            "extra": "gctime=0\nmemory=18178624\nallocs=1204\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/NamedTuple/(32, 32, 3, 16)",
            "value": 206830028,
            "unit": "ns",
            "extra": "gctime=0\nmemory=88386192\nallocs=1292\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/NamedTuple/(32, 32, 3, 64)",
            "value": 833493197,
            "unit": "ns",
            "extra": "gctime=2024972\nmemory=313014736\nallocs=1292\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/ComponentArray/(32, 32, 3, 1)",
            "value": 26579990,
            "unit": "ns",
            "extra": "gctime=0\nmemory=18175504\nallocs=1126\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/ComponentArray/(32, 32, 3, 16)",
            "value": 207498700,
            "unit": "ns",
            "extra": "gctime=0\nmemory=88383696\nallocs=1214\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/ComponentArray/(32, 32, 3, 64)",
            "value": 901326510.5,
            "unit": "ns",
            "extra": "gctime=1687297\nmemory=313012240\nallocs=1214\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/Flux/(32, 32, 3, 1)",
            "value": 29748583.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16971936\nallocs=887\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/Flux/(32, 32, 3, 16)",
            "value": 212889104,
            "unit": "ns",
            "extra": "gctime=0\nmemory=69608176\nallocs=968\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/Flux/(32, 32, 3, 64)",
            "value": 758327877,
            "unit": "ns",
            "extra": "gctime=1490595\nmemory=238006832\nallocs=968\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/ReverseDiff (compiled)/(64, 64, 64, 128)",
            "value": 1109415474,
            "unit": "ns",
            "extra": "gctime=0\nmemory=278646368\nallocs=88\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/Zygote/(64, 64, 64, 128)",
            "value": 1957855366,
            "unit": "ns",
            "extra": "gctime=5007403.5\nmemory=556540096\nallocs=131\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/Tracker/(64, 64, 64, 128)",
            "value": 2210817834.5,
            "unit": "ns",
            "extra": "gctime=164136175.5\nmemory=1455077896\nallocs=271\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/ReverseDiff/(64, 64, 64, 128)",
            "value": 2500541632,
            "unit": "ns",
            "extra": "gctime=274516503\nmemory=942830016\nallocs=187\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/Flux/(64, 64, 64, 128)",
            "value": 1902719869.5,
            "unit": "ns",
            "extra": "gctime=7255336\nmemory=556547152\nallocs=158\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/forward/NamedTuple/(64, 64, 64, 128)",
            "value": 469608309,
            "unit": "ns",
            "extra": "gctime=0\nmemory=269637984\nallocs=48\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/forward/ComponentArray/(64, 64, 64, 128)",
            "value": 475628291.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=269638208\nallocs=49\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/forward/Flux/(64, 64, 64, 128)",
            "value": 362223570,
            "unit": "ns",
            "extra": "gctime=0\nmemory=269638112\nallocs=50\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/ReverseDiff (compiled)/(64, 64, 1, 128)",
            "value": 11823253,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4360336\nallocs=87\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/Zygote/(64, 64, 1, 128)",
            "value": 17954806.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8704816\nallocs=130\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/Tracker/(64, 64, 1, 128)",
            "value": 19243485.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=22745816\nallocs=268\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/ReverseDiff/(64, 64, 1, 128)",
            "value": 23867369,
            "unit": "ns",
            "extra": "gctime=0\nmemory=14742624\nallocs=185\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/Flux/(64, 64, 1, 128)",
            "value": 17985401.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8711872\nallocs=157\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/SimpleChains/(64, 64, 1, 128)",
            "value": 1148274,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1970080\nallocs=28\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/forward/NamedTuple/(64, 64, 1, 128)",
            "value": 2069976,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4217504\nallocs=48\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/forward/ComponentArray/(64, 64, 1, 128)",
            "value": 2087834,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4217728\nallocs=49\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/forward/Flux/(64, 64, 1, 128)",
            "value": 2067591,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4217632\nallocs=50\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/forward/SimpleChains/(64, 64, 1, 128)",
            "value": 199642,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/ReverseDiff (compiled)/(200, 128)",
            "value": 298828,
            "unit": "ns",
            "extra": "gctime=0\nmemory=102672\nallocs=9\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/Zygote/(200, 128)",
            "value": 274493,
            "unit": "ns",
            "extra": "gctime=0\nmemory=572848\nallocs=44\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/Tracker/(200, 128)",
            "value": 363394,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1614152\nallocs=138\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/ReverseDiff/(200, 128)",
            "value": 412821,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1040032\nallocs=61\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/Flux/(200, 128)",
            "value": 275875,
            "unit": "ns",
            "extra": "gctime=0\nmemory=571712\nallocs=33\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/SimpleChains/(200, 128)",
            "value": 395599,
            "unit": "ns",
            "extra": "gctime=0\nmemory=586800\nallocs=28\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/forward/NamedTuple/(200, 128)",
            "value": 89738,
            "unit": "ns",
            "extra": "gctime=0\nmemory=204896\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/forward/ComponentArray/(200, 128)",
            "value": 90238,
            "unit": "ns",
            "extra": "gctime=0\nmemory=204976\nallocs=7\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/forward/Flux/(200, 128)",
            "value": 87423.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=204896\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/forward/SimpleChains/(200, 128)",
            "value": 104736,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/ReverseDiff (compiled)/(64, 64, 16, 128)",
            "value": 200618391,
            "unit": "ns",
            "extra": "gctime=0\nmemory=69640608\nallocs=87\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/Zygote/(64, 64, 16, 128)",
            "value": 394238160,
            "unit": "ns",
            "extra": "gctime=0\nmemory=139115840\nallocs=130\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/Tracker/(64, 64, 16, 128)",
            "value": 434790239,
            "unit": "ns",
            "extra": "gctime=1756368\nmemory=363699592\nallocs=268\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/ReverseDiff/(64, 64, 16, 128)",
            "value": 502250277,
            "unit": "ns",
            "extra": "gctime=0\nmemory=235664000\nallocs=185\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/Flux/(64, 64, 16, 128)",
            "value": 383367099,
            "unit": "ns",
            "extra": "gctime=0\nmemory=139122896\nallocs=157\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/SimpleChains/(64, 64, 16, 128)",
            "value": 341629037,
            "unit": "ns",
            "extra": "gctime=0\nmemory=31510640\nallocs=28\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/forward/NamedTuple/(64, 64, 16, 128)",
            "value": 62244811,
            "unit": "ns",
            "extra": "gctime=0\nmemory=67412832\nallocs=48\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/forward/ComponentArray/(64, 64, 16, 128)",
            "value": 62350191,
            "unit": "ns",
            "extra": "gctime=0\nmemory=67413056\nallocs=49\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/forward/Flux/(64, 64, 16, 128)",
            "value": 61714668,
            "unit": "ns",
            "extra": "gctime=0\nmemory=67412960\nallocs=50\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/forward/SimpleChains/(64, 64, 16, 128)",
            "value": 28767615,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/ReverseDiff (compiled)/(2000, 128)",
            "value": 19712522,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1024272\nallocs=9\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/Zygote/(2000, 128)",
            "value": 19793285,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20106480\nallocs=44\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/Tracker/(2000, 128)",
            "value": 23399793,
            "unit": "ns",
            "extra": "gctime=0\nmemory=59293448\nallocs=138\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/ReverseDiff/(2000, 128)",
            "value": 24110014,
            "unit": "ns",
            "extra": "gctime=0\nmemory=39178464\nallocs=61\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/Flux/(2000, 128)",
            "value": 19676421,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20105344\nallocs=33\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/forward/NamedTuple/(2000, 128)",
            "value": 6601184,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2048096\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/forward/ComponentArray/(2000, 128)",
            "value": 6568989,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2048176\nallocs=7\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/forward/Flux/(2000, 128)",
            "value": 6479608,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2048096\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "avikpal@mit.edu",
            "name": "Avik Pal",
            "username": "avik-pal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "992c4481f90c68a2f36f2e85407076da39702b8e",
          "message": "Delete .github/workflows/DeployDocs.yml",
          "timestamp": "2024-04-06T16:18:32-04:00",
          "tree_id": "d9031f654efedd72d097c19d1dec9a25e221d4b9",
          "url": "https://github.com/LuxDL/Lux.jl/commit/992c4481f90c68a2f36f2e85407076da39702b8e"
        },
        "date": 1712437715523,
        "tool": "julia",
        "benches": [
          {
            "name": "Dense(2 => 2)/cpu/reverse/ReverseDiff (compiled)/(2, 128)",
            "value": 3209.75,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1312\nallocs=8\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":8,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/Zygote/(2, 128)",
            "value": 7926.700000000001,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6608\nallocs=39\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":5,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/Tracker/(2, 128)",
            "value": 19366,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16824\nallocs=126\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/ReverseDiff/(2, 128)",
            "value": 9810.2,
            "unit": "ns",
            "extra": "gctime=0\nmemory=9776\nallocs=54\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":5,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/Flux/(2, 128)",
            "value": 8866.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5472\nallocs=28\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":4,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/SimpleChains/(2, 128)",
            "value": 4243.444444444444,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2880\nallocs=26\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":9,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/forward/NamedTuple/(2, 128)",
            "value": 1990.7,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2176\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":10,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/forward/ComponentArray/(2, 128)",
            "value": 1652.1608391608393,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2256\nallocs=5\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":143,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/forward/Flux/(2, 128)",
            "value": 1795.509090909091,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2176\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":55,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/forward/SimpleChains/(2, 128)",
            "value": 180.27871148459383,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":714,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/ReverseDiff (compiled)/(20, 128)",
            "value": 17533,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10592\nallocs=8\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/Zygote/(20, 128)",
            "value": 18454,
            "unit": "ns",
            "extra": "gctime=0\nmemory=45536\nallocs=39\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/Tracker/(20, 128)",
            "value": 35486,
            "unit": "ns",
            "extra": "gctime=0\nmemory=124296\nallocs=124\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/ReverseDiff/(20, 128)",
            "value": 28794,
            "unit": "ns",
            "extra": "gctime=0\nmemory=78240\nallocs=52\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/Flux/(20, 128)",
            "value": 19636,
            "unit": "ns",
            "extra": "gctime=0\nmemory=44400\nallocs=28\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/SimpleChains/(20, 128)",
            "value": 16290,
            "unit": "ns",
            "extra": "gctime=0\nmemory=15648\nallocs=26\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/forward/NamedTuple/(20, 128)",
            "value": 4879.142857142857,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20736\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":7,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/forward/ComponentArray/(20, 128)",
            "value": 4920.571428571428,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20816\nallocs=5\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":7,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/forward/Flux/(20, 128)",
            "value": 4869,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20736\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":7,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/forward/SimpleChains/(20, 128)",
            "value": 1667.1,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":10,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/ReverseDiff (compiled)/(64, 64, 3, 128)",
            "value": 40481995,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13063408\nallocs=87\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/Zygote/(64, 64, 3, 128)",
            "value": 74749324,
            "unit": "ns",
            "extra": "gctime=0\nmemory=26092000\nallocs=130\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/Tracker/(64, 64, 3, 128)",
            "value": 81624105.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=68203528\nallocs=270\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/ReverseDiff/(64, 64, 3, 128)",
            "value": 92663753.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=44196944\nallocs=187\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/Flux/(64, 64, 3, 128)",
            "value": 78428882,
            "unit": "ns",
            "extra": "gctime=0\nmemory=26099056\nallocs=157\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/SimpleChains/(64, 64, 3, 128)",
            "value": 11787949,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5906928\nallocs=28\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/forward/NamedTuple/(64, 64, 3, 128)",
            "value": 11402177,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12643552\nallocs=48\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/forward/ComponentArray/(64, 64, 3, 128)",
            "value": 11738847.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12643776\nallocs=49\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/forward/Flux/(64, 64, 3, 128)",
            "value": 11450503,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12643680\nallocs=50\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/forward/SimpleChains/(64, 64, 3, 128)",
            "value": 6435044,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Zygote/(32, 32, 3, 1)",
            "value": 103518139,
            "unit": "ns",
            "extra": "gctime=877390\nmemory=191953904\nallocs=45666\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Zygote/(32, 32, 3, 16)",
            "value": 745269744,
            "unit": "ns",
            "extra": "gctime=2547804\nmemory=482375424\nallocs=45912\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Zygote/(32, 32, 3, 64)",
            "value": 3135411455,
            "unit": "ns",
            "extra": "gctime=44499570\nmemory=1411550928\nallocs=45927\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Tracker/(32, 32, 3, 1)",
            "value": 154961766,
            "unit": "ns",
            "extra": "gctime=1469440\nmemory=457197696\nallocs=11107\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Tracker/(32, 32, 3, 16)",
            "value": 1170393896.5,
            "unit": "ns",
            "extra": "gctime=162532844.5\nmemory=747991200\nallocs=11348\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Tracker/(32, 32, 3, 64)",
            "value": 3517146717,
            "unit": "ns",
            "extra": "gctime=324529807\nmemory=1678358048\nallocs=11349\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Flux/(32, 32, 3, 1)",
            "value": 85073249,
            "unit": "ns",
            "extra": "gctime=0\nmemory=183068240\nallocs=10474\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Flux/(32, 32, 3, 16)",
            "value": 674594478.5,
            "unit": "ns",
            "extra": "gctime=1566895.5\nmemory=390054960\nallocs=10678\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Flux/(32, 32, 3, 64)",
            "value": 2973836453,
            "unit": "ns",
            "extra": "gctime=338077096\nmemory=1052236560\nallocs=10678\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/NamedTuple/(32, 32, 3, 1)",
            "value": 25306347,
            "unit": "ns",
            "extra": "gctime=0\nmemory=18178624\nallocs=1204\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/NamedTuple/(32, 32, 3, 16)",
            "value": 213635745,
            "unit": "ns",
            "extra": "gctime=0\nmemory=88386192\nallocs=1292\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/NamedTuple/(32, 32, 3, 64)",
            "value": 948216426,
            "unit": "ns",
            "extra": "gctime=21301070.5\nmemory=313014736\nallocs=1292\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/ComponentArray/(32, 32, 3, 1)",
            "value": 27397376,
            "unit": "ns",
            "extra": "gctime=0\nmemory=18175504\nallocs=1126\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/ComponentArray/(32, 32, 3, 16)",
            "value": 236254961,
            "unit": "ns",
            "extra": "gctime=0\nmemory=88383696\nallocs=1214\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/ComponentArray/(32, 32, 3, 64)",
            "value": 865698401,
            "unit": "ns",
            "extra": "gctime=1307544.5\nmemory=313012240\nallocs=1214\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/Flux/(32, 32, 3, 1)",
            "value": 23453859.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16971936\nallocs=887\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/Flux/(32, 32, 3, 16)",
            "value": 199823887,
            "unit": "ns",
            "extra": "gctime=0\nmemory=69608176\nallocs=968\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/Flux/(32, 32, 3, 64)",
            "value": 710083361,
            "unit": "ns",
            "extra": "gctime=1311837.5\nmemory=238006832\nallocs=968\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/ReverseDiff (compiled)/(64, 64, 64, 128)",
            "value": 1035420079,
            "unit": "ns",
            "extra": "gctime=0\nmemory=278646368\nallocs=88\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/Zygote/(64, 64, 64, 128)",
            "value": 1867349244,
            "unit": "ns",
            "extra": "gctime=4787299\nmemory=556540096\nallocs=131\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/Tracker/(64, 64, 64, 128)",
            "value": 2228923342.5,
            "unit": "ns",
            "extra": "gctime=189460428\nmemory=1455077896\nallocs=271\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/ReverseDiff/(64, 64, 64, 128)",
            "value": 2547118079,
            "unit": "ns",
            "extra": "gctime=315640973\nmemory=942830016\nallocs=187\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/Flux/(64, 64, 64, 128)",
            "value": 1864452179,
            "unit": "ns",
            "extra": "gctime=3666010.5\nmemory=556547152\nallocs=158\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/forward/NamedTuple/(64, 64, 64, 128)",
            "value": 371021402.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=269637984\nallocs=48\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/forward/ComponentArray/(64, 64, 64, 128)",
            "value": 383674219,
            "unit": "ns",
            "extra": "gctime=0\nmemory=269638208\nallocs=49\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/forward/Flux/(64, 64, 64, 128)",
            "value": 457325522,
            "unit": "ns",
            "extra": "gctime=0\nmemory=269638112\nallocs=50\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/ReverseDiff (compiled)/(64, 64, 1, 128)",
            "value": 12002780,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4360336\nallocs=87\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/Zygote/(64, 64, 1, 128)",
            "value": 18115906,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8704816\nallocs=130\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/Tracker/(64, 64, 1, 128)",
            "value": 19350790.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=22745816\nallocs=268\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/ReverseDiff/(64, 64, 1, 128)",
            "value": 23961969,
            "unit": "ns",
            "extra": "gctime=0\nmemory=14742624\nallocs=185\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/Flux/(64, 64, 1, 128)",
            "value": 18121673,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8711872\nallocs=157\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/SimpleChains/(64, 64, 1, 128)",
            "value": 1162830,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1970080\nallocs=28\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/forward/NamedTuple/(64, 64, 1, 128)",
            "value": 2086677,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4217504\nallocs=48\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/forward/ComponentArray/(64, 64, 1, 128)",
            "value": 2117214,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4217728\nallocs=49\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/forward/Flux/(64, 64, 1, 128)",
            "value": 2080675.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4217632\nallocs=50\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/forward/SimpleChains/(64, 64, 1, 128)",
            "value": 219999,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/ReverseDiff (compiled)/(200, 128)",
            "value": 299366,
            "unit": "ns",
            "extra": "gctime=0\nmemory=102672\nallocs=9\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/Zygote/(200, 128)",
            "value": 274841,
            "unit": "ns",
            "extra": "gctime=0\nmemory=572848\nallocs=44\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/Tracker/(200, 128)",
            "value": 361647,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1614152\nallocs=138\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/ReverseDiff/(200, 128)",
            "value": 411114,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1040032\nallocs=61\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/Flux/(200, 128)",
            "value": 273298,
            "unit": "ns",
            "extra": "gctime=0\nmemory=571712\nallocs=33\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/SimpleChains/(200, 128)",
            "value": 396156,
            "unit": "ns",
            "extra": "gctime=0\nmemory=586800\nallocs=28\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/forward/NamedTuple/(200, 128)",
            "value": 89937,
            "unit": "ns",
            "extra": "gctime=0\nmemory=204896\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/forward/ComponentArray/(200, 128)",
            "value": 89126,
            "unit": "ns",
            "extra": "gctime=0\nmemory=204976\nallocs=7\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/forward/Flux/(200, 128)",
            "value": 87172,
            "unit": "ns",
            "extra": "gctime=0\nmemory=204896\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/forward/SimpleChains/(200, 128)",
            "value": 104404,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/ReverseDiff (compiled)/(64, 64, 16, 128)",
            "value": 191817225,
            "unit": "ns",
            "extra": "gctime=0\nmemory=69640608\nallocs=87\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/Zygote/(64, 64, 16, 128)",
            "value": 373766933.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=139115840\nallocs=130\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/Tracker/(64, 64, 16, 128)",
            "value": 398777811,
            "unit": "ns",
            "extra": "gctime=1625234\nmemory=363699592\nallocs=268\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/ReverseDiff/(64, 64, 16, 128)",
            "value": 461407979,
            "unit": "ns",
            "extra": "gctime=580684\nmemory=235664000\nallocs=185\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/Flux/(64, 64, 16, 128)",
            "value": 371779027,
            "unit": "ns",
            "extra": "gctime=0\nmemory=139122896\nallocs=157\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/SimpleChains/(64, 64, 16, 128)",
            "value": 357643985,
            "unit": "ns",
            "extra": "gctime=0\nmemory=31510640\nallocs=28\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/forward/NamedTuple/(64, 64, 16, 128)",
            "value": 49838086.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=67412832\nallocs=48\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/forward/ComponentArray/(64, 64, 16, 128)",
            "value": 52974011,
            "unit": "ns",
            "extra": "gctime=0\nmemory=67413056\nallocs=49\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/forward/Flux/(64, 64, 16, 128)",
            "value": 58869319,
            "unit": "ns",
            "extra": "gctime=0\nmemory=67412960\nallocs=50\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/forward/SimpleChains/(64, 64, 16, 128)",
            "value": 28370869,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/ReverseDiff (compiled)/(2000, 128)",
            "value": 19711465.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1024272\nallocs=9\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/Zygote/(2000, 128)",
            "value": 19683784,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20106480\nallocs=44\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/Tracker/(2000, 128)",
            "value": 23236285,
            "unit": "ns",
            "extra": "gctime=0\nmemory=59293448\nallocs=138\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/ReverseDiff/(2000, 128)",
            "value": 24064172.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=39178464\nallocs=61\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/Flux/(2000, 128)",
            "value": 19579572,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20105344\nallocs=33\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/forward/NamedTuple/(2000, 128)",
            "value": 6567220,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2048096\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/forward/ComponentArray/(2000, 128)",
            "value": 6568408,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2048176\nallocs=7\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/forward/Flux/(2000, 128)",
            "value": 6518469,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2048096\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "avikpal@mit.edu",
            "name": "Avik Pal",
            "username": "avik-pal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "60947c616b6dd8fd3bd994b66488040349fa3e24",
          "message": "Merge pull request #500 from LuxDL/ap/nccl\n\nInbuilt-Distributed Setup",
          "timestamp": "2024-04-07T17:12:14-04:00",
          "tree_id": "9962e0aed8f0b43ba6ebb4aa5d92ae65534f9ec2",
          "url": "https://github.com/LuxDL/Lux.jl/commit/60947c616b6dd8fd3bd994b66488040349fa3e24"
        },
        "date": 1712526111192,
        "tool": "julia",
        "benches": [
          {
            "name": "Dense(2 => 2)/cpu/reverse/ReverseDiff (compiled)/(2, 128)",
            "value": 3264.875,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1312\nallocs=8\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":8,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/Zygote/(2, 128)",
            "value": 8032.375,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6608\nallocs=39\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":4,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/Tracker/(2, 128)",
            "value": 19507,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16824\nallocs=126\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/ReverseDiff/(2, 128)",
            "value": 9503.6,
            "unit": "ns",
            "extra": "gctime=0\nmemory=9776\nallocs=54\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":5,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/Flux/(2, 128)",
            "value": 8756,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5472\nallocs=28\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/SimpleChains/(2, 128)",
            "value": 4150,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2880\nallocs=26\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":9,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/forward/NamedTuple/(2, 128)",
            "value": 1984.7,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2176\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":10,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/forward/ComponentArray/(2, 128)",
            "value": 1632.2687074829932,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2256\nallocs=5\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":147,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/forward/Flux/(2, 128)",
            "value": 1812.5217391304348,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2176\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":46,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/forward/SimpleChains/(2, 128)",
            "value": 179.9579831932773,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":714,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/ReverseDiff (compiled)/(20, 128)",
            "value": 17443,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10592\nallocs=8\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/Zygote/(20, 128)",
            "value": 18284,
            "unit": "ns",
            "extra": "gctime=0\nmemory=45536\nallocs=39\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/Tracker/(20, 128)",
            "value": 35055,
            "unit": "ns",
            "extra": "gctime=0\nmemory=124296\nallocs=124\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/ReverseDiff/(20, 128)",
            "value": 28322,
            "unit": "ns",
            "extra": "gctime=0\nmemory=78240\nallocs=52\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/Flux/(20, 128)",
            "value": 19626,
            "unit": "ns",
            "extra": "gctime=0\nmemory=44400\nallocs=28\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/SimpleChains/(20, 128)",
            "value": 16070,
            "unit": "ns",
            "extra": "gctime=0\nmemory=15648\nallocs=26\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/forward/NamedTuple/(20, 128)",
            "value": 4866.285714285715,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20736\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":7,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/forward/ComponentArray/(20, 128)",
            "value": 4748.857142857143,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20816\nallocs=5\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":7,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/forward/Flux/(20, 128)",
            "value": 4834.714285714285,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20736\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":7,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/forward/SimpleChains/(20, 128)",
            "value": 1666.2,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":10,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/ReverseDiff (compiled)/(64, 64, 3, 128)",
            "value": 49763726,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13063408\nallocs=87\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/Zygote/(64, 64, 3, 128)",
            "value": 90623911.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=26092000\nallocs=130\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/Tracker/(64, 64, 3, 128)",
            "value": 109120767,
            "unit": "ns",
            "extra": "gctime=0\nmemory=68203528\nallocs=270\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/ReverseDiff/(64, 64, 3, 128)",
            "value": 105499855,
            "unit": "ns",
            "extra": "gctime=0\nmemory=44196944\nallocs=187\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/Flux/(64, 64, 3, 128)",
            "value": 99606493.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=26099056\nallocs=157\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/SimpleChains/(64, 64, 3, 128)",
            "value": 11583731,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5906928\nallocs=28\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/forward/NamedTuple/(64, 64, 3, 128)",
            "value": 18310063,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12643552\nallocs=48\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/forward/ComponentArray/(64, 64, 3, 128)",
            "value": 17953045.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12643776\nallocs=49\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/forward/Flux/(64, 64, 3, 128)",
            "value": 17905366,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12643680\nallocs=50\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/forward/SimpleChains/(64, 64, 3, 128)",
            "value": 6383416,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Zygote/(32, 32, 3, 1)",
            "value": 104376684.5,
            "unit": "ns",
            "extra": "gctime=1053794\nmemory=191953904\nallocs=45666\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Zygote/(32, 32, 3, 16)",
            "value": 738546171,
            "unit": "ns",
            "extra": "gctime=6299802\nmemory=482375424\nallocs=45912\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Zygote/(32, 32, 3, 64)",
            "value": 3317178222,
            "unit": "ns",
            "extra": "gctime=40886909\nmemory=1411550928\nallocs=45927\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Tracker/(32, 32, 3, 1)",
            "value": 169591326.5,
            "unit": "ns",
            "extra": "gctime=2983953\nmemory=457197696\nallocs=11107\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Tracker/(32, 32, 3, 16)",
            "value": 1159999260.5,
            "unit": "ns",
            "extra": "gctime=158592703\nmemory=747991200\nallocs=11348\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Tracker/(32, 32, 3, 64)",
            "value": 3862556989,
            "unit": "ns",
            "extra": "gctime=327417356\nmemory=1678358048\nallocs=11349\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Flux/(32, 32, 3, 1)",
            "value": 86331044,
            "unit": "ns",
            "extra": "gctime=0\nmemory=183068240\nallocs=10474\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Flux/(32, 32, 3, 16)",
            "value": 806476453.5,
            "unit": "ns",
            "extra": "gctime=2056683.5\nmemory=390054960\nallocs=10678\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Flux/(32, 32, 3, 64)",
            "value": 3122689673,
            "unit": "ns",
            "extra": "gctime=314789006\nmemory=1052236560\nallocs=10678\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/NamedTuple/(32, 32, 3, 1)",
            "value": 25160862,
            "unit": "ns",
            "extra": "gctime=0\nmemory=18178624\nallocs=1204\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/NamedTuple/(32, 32, 3, 16)",
            "value": 244716036.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=88386192\nallocs=1292\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/NamedTuple/(32, 32, 3, 64)",
            "value": 897704305,
            "unit": "ns",
            "extra": "gctime=19746448.5\nmemory=313014736\nallocs=1292\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/ComponentArray/(32, 32, 3, 1)",
            "value": 26583957.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=18175504\nallocs=1126\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/ComponentArray/(32, 32, 3, 16)",
            "value": 246859837,
            "unit": "ns",
            "extra": "gctime=0\nmemory=88383696\nallocs=1214\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/ComponentArray/(32, 32, 3, 64)",
            "value": 974120357,
            "unit": "ns",
            "extra": "gctime=1614850.5\nmemory=313012240\nallocs=1214\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/Flux/(32, 32, 3, 1)",
            "value": 30327873,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16971936\nallocs=887\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/Flux/(32, 32, 3, 16)",
            "value": 211983120,
            "unit": "ns",
            "extra": "gctime=0\nmemory=69608176\nallocs=968\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/Flux/(32, 32, 3, 64)",
            "value": 802213036,
            "unit": "ns",
            "extra": "gctime=1278289\nmemory=238006832\nallocs=968\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/ReverseDiff (compiled)/(64, 64, 64, 128)",
            "value": 1080727642,
            "unit": "ns",
            "extra": "gctime=0\nmemory=278646368\nallocs=88\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/Zygote/(64, 64, 64, 128)",
            "value": 1839949622,
            "unit": "ns",
            "extra": "gctime=5030730.5\nmemory=556540096\nallocs=131\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/Tracker/(64, 64, 64, 128)",
            "value": 2108383466.5,
            "unit": "ns",
            "extra": "gctime=159259670\nmemory=1455077896\nallocs=271\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/ReverseDiff/(64, 64, 64, 128)",
            "value": 2325889625.5,
            "unit": "ns",
            "extra": "gctime=137416804\nmemory=942830016\nallocs=187\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/Flux/(64, 64, 64, 128)",
            "value": 1810048998,
            "unit": "ns",
            "extra": "gctime=4705643\nmemory=556547152\nallocs=158\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/forward/NamedTuple/(64, 64, 64, 128)",
            "value": 348631236,
            "unit": "ns",
            "extra": "gctime=0\nmemory=269637984\nallocs=48\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/forward/ComponentArray/(64, 64, 64, 128)",
            "value": 386557344.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=269638208\nallocs=49\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/forward/Flux/(64, 64, 64, 128)",
            "value": 348137260,
            "unit": "ns",
            "extra": "gctime=0\nmemory=269638112\nallocs=50\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/ReverseDiff (compiled)/(64, 64, 1, 128)",
            "value": 11833360.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4360336\nallocs=87\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/Zygote/(64, 64, 1, 128)",
            "value": 17907431,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8704816\nallocs=130\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/Tracker/(64, 64, 1, 128)",
            "value": 19042924,
            "unit": "ns",
            "extra": "gctime=0\nmemory=22745816\nallocs=268\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/ReverseDiff/(64, 64, 1, 128)",
            "value": 23857701,
            "unit": "ns",
            "extra": "gctime=0\nmemory=14742624\nallocs=185\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/Flux/(64, 64, 1, 128)",
            "value": 17934296,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8711872\nallocs=157\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/SimpleChains/(64, 64, 1, 128)",
            "value": 1156160.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1970080\nallocs=28\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/forward/NamedTuple/(64, 64, 1, 128)",
            "value": 2075518.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4217504\nallocs=48\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/forward/ComponentArray/(64, 64, 1, 128)",
            "value": 2095636,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4217728\nallocs=49\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/forward/Flux/(64, 64, 1, 128)",
            "value": 2075724,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4217632\nallocs=50\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/forward/SimpleChains/(64, 64, 1, 128)",
            "value": 202643.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/ReverseDiff (compiled)/(200, 128)",
            "value": 305901,
            "unit": "ns",
            "extra": "gctime=0\nmemory=102672\nallocs=9\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/Zygote/(200, 128)",
            "value": 275570,
            "unit": "ns",
            "extra": "gctime=0\nmemory=572848\nallocs=44\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/Tracker/(200, 128)",
            "value": 363850,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1614152\nallocs=138\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/ReverseDiff/(200, 128)",
            "value": 416759,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1040032\nallocs=61\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/Flux/(200, 128)",
            "value": 276407,
            "unit": "ns",
            "extra": "gctime=0\nmemory=571712\nallocs=33\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/SimpleChains/(200, 128)",
            "value": 400724.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=586800\nallocs=28\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/forward/NamedTuple/(200, 128)",
            "value": 89818,
            "unit": "ns",
            "extra": "gctime=0\nmemory=204896\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/forward/ComponentArray/(200, 128)",
            "value": 92323,
            "unit": "ns",
            "extra": "gctime=0\nmemory=204976\nallocs=7\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/forward/Flux/(200, 128)",
            "value": 87593.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=204896\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/forward/SimpleChains/(200, 128)",
            "value": 104685,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/ReverseDiff (compiled)/(64, 64, 16, 128)",
            "value": 198734679.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=69640608\nallocs=87\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/Zygote/(64, 64, 16, 128)",
            "value": 377883151.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=139115840\nallocs=130\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/Tracker/(64, 64, 16, 128)",
            "value": 367881851,
            "unit": "ns",
            "extra": "gctime=1664973\nmemory=363699592\nallocs=268\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/ReverseDiff/(64, 64, 16, 128)",
            "value": 429406163.5,
            "unit": "ns",
            "extra": "gctime=612094\nmemory=235664000\nallocs=185\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/Flux/(64, 64, 16, 128)",
            "value": 369682219,
            "unit": "ns",
            "extra": "gctime=0\nmemory=139122896\nallocs=157\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/SimpleChains/(64, 64, 16, 128)",
            "value": 321686607,
            "unit": "ns",
            "extra": "gctime=0\nmemory=31510640\nallocs=28\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/forward/NamedTuple/(64, 64, 16, 128)",
            "value": 49840639.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=67412832\nallocs=48\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/forward/ComponentArray/(64, 64, 16, 128)",
            "value": 49776720,
            "unit": "ns",
            "extra": "gctime=0\nmemory=67413056\nallocs=49\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/forward/Flux/(64, 64, 16, 128)",
            "value": 50180104,
            "unit": "ns",
            "extra": "gctime=0\nmemory=67412960\nallocs=50\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/forward/SimpleChains/(64, 64, 16, 128)",
            "value": 28030313.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/ReverseDiff (compiled)/(2000, 128)",
            "value": 19457102.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1024272\nallocs=9\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/Zygote/(2000, 128)",
            "value": 19641330,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20106480\nallocs=44\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/Tracker/(2000, 128)",
            "value": 23425126,
            "unit": "ns",
            "extra": "gctime=0\nmemory=59293448\nallocs=138\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/ReverseDiff/(2000, 128)",
            "value": 24103886,
            "unit": "ns",
            "extra": "gctime=0\nmemory=39178464\nallocs=61\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/Flux/(2000, 128)",
            "value": 19601687,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20105344\nallocs=33\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/forward/NamedTuple/(2000, 128)",
            "value": 6588311,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2048096\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/forward/ComponentArray/(2000, 128)",
            "value": 6573637,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2048176\nallocs=7\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/forward/Flux/(2000, 128)",
            "value": 6499208,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2048096\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "avikpal@mit.edu",
            "name": "Avik Pal",
            "username": "avik-pal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a22199e77b6023b640806bb67d45fbc0d7126bbf",
          "message": "Merge pull request #577 from LuxDL/dependabot/github_actions/julia-actions/setup-julia-2\n\nBump julia-actions/setup-julia from 1 to 2",
          "timestamp": "2024-04-07T23:58:18-04:00",
          "tree_id": "45787a3e558006369058afc9a38a79c41b220628",
          "url": "https://github.com/LuxDL/Lux.jl/commit/a22199e77b6023b640806bb67d45fbc0d7126bbf"
        },
        "date": 1712550505518,
        "tool": "julia",
        "benches": [
          {
            "name": "Dense(2 => 2)/cpu/reverse/ReverseDiff (compiled)/(2, 128)",
            "value": 3291.125,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1312\nallocs=8\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":8,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/Zygote/(2, 128)",
            "value": 7594.333333333333,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6608\nallocs=39\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":6,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/Tracker/(2, 128)",
            "value": 14357,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16824\nallocs=126\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/ReverseDiff/(2, 128)",
            "value": 9856.6,
            "unit": "ns",
            "extra": "gctime=0\nmemory=9776\nallocs=54\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":5,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/Flux/(2, 128)",
            "value": 8706,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5472\nallocs=28\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/SimpleChains/(2, 128)",
            "value": 4151.111111111111,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2880\nallocs=26\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":9,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/forward/NamedTuple/(2, 128)",
            "value": 2038.8,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2176\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":10,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/forward/ComponentArray/(2, 128)",
            "value": 1652.5448275862068,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2256\nallocs=5\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":145,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/forward/Flux/(2, 128)",
            "value": 1800.2586206896551,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2176\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":58,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/forward/SimpleChains/(2, 128)",
            "value": 179.61335187760778,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":719,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/ReverseDiff (compiled)/(20, 128)",
            "value": 17353,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10592\nallocs=8\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/Zygote/(20, 128)",
            "value": 18605,
            "unit": "ns",
            "extra": "gctime=0\nmemory=45536\nallocs=39\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/Tracker/(20, 128)",
            "value": 35346,
            "unit": "ns",
            "extra": "gctime=0\nmemory=124296\nallocs=124\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/ReverseDiff/(20, 128)",
            "value": 28643,
            "unit": "ns",
            "extra": "gctime=0\nmemory=78240\nallocs=52\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/Flux/(20, 128)",
            "value": 19647,
            "unit": "ns",
            "extra": "gctime=0\nmemory=44400\nallocs=28\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/SimpleChains/(20, 128)",
            "value": 16050,
            "unit": "ns",
            "extra": "gctime=0\nmemory=15648\nallocs=26\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/forward/NamedTuple/(20, 128)",
            "value": 4761.857142857143,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20736\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":7,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/forward/ComponentArray/(20, 128)",
            "value": 4787.571428571428,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20816\nallocs=5\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":7,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/forward/Flux/(20, 128)",
            "value": 4819,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20736\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":7,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/forward/SimpleChains/(20, 128)",
            "value": 1663.1,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":10,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/ReverseDiff (compiled)/(64, 64, 3, 128)",
            "value": 47826882,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13063408\nallocs=87\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/Zygote/(64, 64, 3, 128)",
            "value": 107846874,
            "unit": "ns",
            "extra": "gctime=0\nmemory=26092000\nallocs=130\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/Tracker/(64, 64, 3, 128)",
            "value": 111447729,
            "unit": "ns",
            "extra": "gctime=0\nmemory=68203528\nallocs=270\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/ReverseDiff/(64, 64, 3, 128)",
            "value": 107598984,
            "unit": "ns",
            "extra": "gctime=0\nmemory=44196944\nallocs=187\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/Flux/(64, 64, 3, 128)",
            "value": 107543357,
            "unit": "ns",
            "extra": "gctime=0\nmemory=26099056\nallocs=157\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/SimpleChains/(64, 64, 3, 128)",
            "value": 12081138,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5906928\nallocs=28\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/forward/NamedTuple/(64, 64, 3, 128)",
            "value": 18396029,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12643552\nallocs=48\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/forward/ComponentArray/(64, 64, 3, 128)",
            "value": 18335367,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12643776\nallocs=49\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/forward/Flux/(64, 64, 3, 128)",
            "value": 18282107.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12643680\nallocs=50\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/forward/SimpleChains/(64, 64, 3, 128)",
            "value": 6393940.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Zygote/(32, 32, 3, 1)",
            "value": 104037238.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=191953904\nallocs=45666\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Zygote/(32, 32, 3, 16)",
            "value": 745853053,
            "unit": "ns",
            "extra": "gctime=2863911\nmemory=482375424\nallocs=45912\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Zygote/(32, 32, 3, 64)",
            "value": 2862501835,
            "unit": "ns",
            "extra": "gctime=40764284\nmemory=1411550928\nallocs=45927\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Tracker/(32, 32, 3, 1)",
            "value": 160006855,
            "unit": "ns",
            "extra": "gctime=1533767\nmemory=457197696\nallocs=11107\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Tracker/(32, 32, 3, 16)",
            "value": 1149640042,
            "unit": "ns",
            "extra": "gctime=155695605.5\nmemory=747991200\nallocs=11348\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Tracker/(32, 32, 3, 64)",
            "value": 4328457284,
            "unit": "ns",
            "extra": "gctime=315233685\nmemory=1678358048\nallocs=11349\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Flux/(32, 32, 3, 1)",
            "value": 89766870,
            "unit": "ns",
            "extra": "gctime=0\nmemory=183068240\nallocs=10474\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Flux/(32, 32, 3, 16)",
            "value": 706555892,
            "unit": "ns",
            "extra": "gctime=1509200\nmemory=390054960\nallocs=10678\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Flux/(32, 32, 3, 64)",
            "value": 3162713324,
            "unit": "ns",
            "extra": "gctime=319486627\nmemory=1052236560\nallocs=10678\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/NamedTuple/(32, 32, 3, 1)",
            "value": 24988726,
            "unit": "ns",
            "extra": "gctime=0\nmemory=18178624\nallocs=1204\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/NamedTuple/(32, 32, 3, 16)",
            "value": 248321851.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=88386192\nallocs=1292\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/NamedTuple/(32, 32, 3, 64)",
            "value": 984732186,
            "unit": "ns",
            "extra": "gctime=20848538\nmemory=313014736\nallocs=1292\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/ComponentArray/(32, 32, 3, 1)",
            "value": 26635110,
            "unit": "ns",
            "extra": "gctime=0\nmemory=18175504\nallocs=1126\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/ComponentArray/(32, 32, 3, 16)",
            "value": 252240083,
            "unit": "ns",
            "extra": "gctime=0\nmemory=88383696\nallocs=1214\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/ComponentArray/(32, 32, 3, 64)",
            "value": 889103407,
            "unit": "ns",
            "extra": "gctime=1521537.5\nmemory=313012240\nallocs=1214\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/Flux/(32, 32, 3, 1)",
            "value": 30345424,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16971936\nallocs=887\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/Flux/(32, 32, 3, 16)",
            "value": 233111808,
            "unit": "ns",
            "extra": "gctime=0\nmemory=69608176\nallocs=968\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/Flux/(32, 32, 3, 64)",
            "value": 889458306,
            "unit": "ns",
            "extra": "gctime=1322820\nmemory=238006832\nallocs=968\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/ReverseDiff (compiled)/(64, 64, 64, 128)",
            "value": 1035434449.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=278646368\nallocs=88\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/Zygote/(64, 64, 64, 128)",
            "value": 1862385198.5,
            "unit": "ns",
            "extra": "gctime=4588662\nmemory=556540096\nallocs=131\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/Tracker/(64, 64, 64, 128)",
            "value": 2246770805,
            "unit": "ns",
            "extra": "gctime=170370214.5\nmemory=1455077896\nallocs=271\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/ReverseDiff/(64, 64, 64, 128)",
            "value": 2397483572.5,
            "unit": "ns",
            "extra": "gctime=143288215\nmemory=942830016\nallocs=187\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/Flux/(64, 64, 64, 128)",
            "value": 1923770490.5,
            "unit": "ns",
            "extra": "gctime=4022666.5\nmemory=556547152\nallocs=158\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/forward/NamedTuple/(64, 64, 64, 128)",
            "value": 375137750.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=269637984\nallocs=48\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/forward/ComponentArray/(64, 64, 64, 128)",
            "value": 392101451.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=269638208\nallocs=49\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/forward/Flux/(64, 64, 64, 128)",
            "value": 379737329.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=269638112\nallocs=50\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/ReverseDiff (compiled)/(64, 64, 1, 128)",
            "value": 11869505,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4360336\nallocs=87\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/Zygote/(64, 64, 1, 128)",
            "value": 17927171,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8704816\nallocs=130\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/Tracker/(64, 64, 1, 128)",
            "value": 19152475.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=22745816\nallocs=268\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/ReverseDiff/(64, 64, 1, 128)",
            "value": 23886574,
            "unit": "ns",
            "extra": "gctime=0\nmemory=14742624\nallocs=185\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/Flux/(64, 64, 1, 128)",
            "value": 18004082,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8711872\nallocs=157\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/SimpleChains/(64, 64, 1, 128)",
            "value": 1160001,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1970080\nallocs=28\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/forward/NamedTuple/(64, 64, 1, 128)",
            "value": 2065263,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4217504\nallocs=48\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/forward/ComponentArray/(64, 64, 1, 128)",
            "value": 2074119,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4217728\nallocs=49\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/forward/Flux/(64, 64, 1, 128)",
            "value": 2062288,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4217632\nallocs=50\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/forward/SimpleChains/(64, 64, 1, 128)",
            "value": 204473,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/ReverseDiff (compiled)/(200, 128)",
            "value": 297618,
            "unit": "ns",
            "extra": "gctime=0\nmemory=102672\nallocs=9\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/Zygote/(200, 128)",
            "value": 274229.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=572848\nallocs=44\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/Tracker/(200, 128)",
            "value": 362660,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1614152\nallocs=138\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/ReverseDiff/(200, 128)",
            "value": 410510,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1040032\nallocs=61\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/Flux/(200, 128)",
            "value": 274355,
            "unit": "ns",
            "extra": "gctime=0\nmemory=571712\nallocs=33\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/SimpleChains/(200, 128)",
            "value": 396274,
            "unit": "ns",
            "extra": "gctime=0\nmemory=586800\nallocs=28\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/forward/NamedTuple/(200, 128)",
            "value": 88927,
            "unit": "ns",
            "extra": "gctime=0\nmemory=204896\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/forward/ComponentArray/(200, 128)",
            "value": 89829,
            "unit": "ns",
            "extra": "gctime=0\nmemory=204976\nallocs=7\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/forward/Flux/(200, 128)",
            "value": 87194,
            "unit": "ns",
            "extra": "gctime=0\nmemory=204896\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/forward/SimpleChains/(200, 128)",
            "value": 104937,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/ReverseDiff (compiled)/(64, 64, 16, 128)",
            "value": 207730596,
            "unit": "ns",
            "extra": "gctime=0\nmemory=69640608\nallocs=87\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/Zygote/(64, 64, 16, 128)",
            "value": 417547431,
            "unit": "ns",
            "extra": "gctime=0\nmemory=139115840\nallocs=130\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/Tracker/(64, 64, 16, 128)",
            "value": 446864478.5,
            "unit": "ns",
            "extra": "gctime=1352948\nmemory=363699592\nallocs=268\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/ReverseDiff/(64, 64, 16, 128)",
            "value": 476380395,
            "unit": "ns",
            "extra": "gctime=619827.5\nmemory=235664000\nallocs=185\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/Flux/(64, 64, 16, 128)",
            "value": 412031574,
            "unit": "ns",
            "extra": "gctime=0\nmemory=139122896\nallocs=157\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/SimpleChains/(64, 64, 16, 128)",
            "value": 348975577,
            "unit": "ns",
            "extra": "gctime=0\nmemory=31510640\nallocs=28\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/forward/NamedTuple/(64, 64, 16, 128)",
            "value": 65585813,
            "unit": "ns",
            "extra": "gctime=0\nmemory=67412832\nallocs=48\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/forward/ComponentArray/(64, 64, 16, 128)",
            "value": 71096377,
            "unit": "ns",
            "extra": "gctime=0\nmemory=67413056\nallocs=49\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/forward/Flux/(64, 64, 16, 128)",
            "value": 71135179,
            "unit": "ns",
            "extra": "gctime=0\nmemory=67412960\nallocs=50\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/forward/SimpleChains/(64, 64, 16, 128)",
            "value": 28355509,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/ReverseDiff (compiled)/(2000, 128)",
            "value": 19456862,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1024272\nallocs=9\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/Zygote/(2000, 128)",
            "value": 19787020,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20106480\nallocs=44\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/Tracker/(2000, 128)",
            "value": 23607252,
            "unit": "ns",
            "extra": "gctime=0\nmemory=59293448\nallocs=138\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/ReverseDiff/(2000, 128)",
            "value": 24257374,
            "unit": "ns",
            "extra": "gctime=0\nmemory=39178464\nallocs=61\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/Flux/(2000, 128)",
            "value": 19779678.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20105344\nallocs=33\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/forward/NamedTuple/(2000, 128)",
            "value": 6627207,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2048096\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/forward/ComponentArray/(2000, 128)",
            "value": 6596001,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2048176\nallocs=7\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/forward/Flux/(2000, 128)",
            "value": 6574174.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2048096\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "avikpal@mit.edu",
            "name": "Avik Pal",
            "username": "avik-pal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "abdbf4b7f78e597925bad0a2da5b50844ffb3b91",
          "message": "Merge pull request #578 from LuxDL/ap/docs\n\nFix numbering in the docs",
          "timestamp": "2024-04-08T21:30:02-04:00",
          "tree_id": "c4d344244c08d9e6b676dd1bdcfc8c7644fb4839",
          "url": "https://github.com/LuxDL/Lux.jl/commit/abdbf4b7f78e597925bad0a2da5b50844ffb3b91"
        },
        "date": 1712627995677,
        "tool": "julia",
        "benches": [
          {
            "name": "Dense(2 => 2)/cpu/reverse/ReverseDiff (compiled)/(2, 128)",
            "value": 3256,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1312\nallocs=8\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":8,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/Zygote/(2, 128)",
            "value": 7608.416666666667,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6608\nallocs=39\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":6,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/Tracker/(2, 128)",
            "value": 14687,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16824\nallocs=126\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/ReverseDiff/(2, 128)",
            "value": 9830.4,
            "unit": "ns",
            "extra": "gctime=0\nmemory=9776\nallocs=54\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":5,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/Flux/(2, 128)",
            "value": 8746.333333333334,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5472\nallocs=28\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":3,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/SimpleChains/(2, 128)",
            "value": 4170,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2880\nallocs=26\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":9,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/forward/NamedTuple/(2, 128)",
            "value": 2007.8,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2176\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":10,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/forward/ComponentArray/(2, 128)",
            "value": 1660.3197278911564,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2256\nallocs=5\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":147,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/forward/Flux/(2, 128)",
            "value": 1839.8048780487804,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2176\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":41,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/forward/SimpleChains/(2, 128)",
            "value": 179.2422969187675,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":714,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/ReverseDiff (compiled)/(20, 128)",
            "value": 17402,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10592\nallocs=8\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/Zygote/(20, 128)",
            "value": 18545,
            "unit": "ns",
            "extra": "gctime=0\nmemory=45536\nallocs=39\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/Tracker/(20, 128)",
            "value": 35837,
            "unit": "ns",
            "extra": "gctime=0\nmemory=124296\nallocs=124\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/ReverseDiff/(20, 128)",
            "value": 28814,
            "unit": "ns",
            "extra": "gctime=0\nmemory=78240\nallocs=52\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/Flux/(20, 128)",
            "value": 19641.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=44400\nallocs=28\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/SimpleChains/(20, 128)",
            "value": 16220,
            "unit": "ns",
            "extra": "gctime=0\nmemory=15648\nallocs=26\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/forward/NamedTuple/(20, 128)",
            "value": 4826.285714285715,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20736\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":7,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/forward/ComponentArray/(20, 128)",
            "value": 4874.857142857143,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20816\nallocs=5\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":7,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/forward/Flux/(20, 128)",
            "value": 4870.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20736\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":7,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/forward/SimpleChains/(20, 128)",
            "value": 1659.1,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":10,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/ReverseDiff (compiled)/(64, 64, 3, 128)",
            "value": 40919886,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13063408\nallocs=87\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/Zygote/(64, 64, 3, 128)",
            "value": 105438282.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=26092000\nallocs=130\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/Tracker/(64, 64, 3, 128)",
            "value": 82547287,
            "unit": "ns",
            "extra": "gctime=0\nmemory=68203528\nallocs=270\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/ReverseDiff/(64, 64, 3, 128)",
            "value": 105389107,
            "unit": "ns",
            "extra": "gctime=0\nmemory=44196944\nallocs=187\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/Flux/(64, 64, 3, 128)",
            "value": 101432513,
            "unit": "ns",
            "extra": "gctime=0\nmemory=26099056\nallocs=157\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/SimpleChains/(64, 64, 3, 128)",
            "value": 12101555.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5906928\nallocs=28\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/forward/NamedTuple/(64, 64, 3, 128)",
            "value": 12139914.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12643552\nallocs=48\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/forward/ComponentArray/(64, 64, 3, 128)",
            "value": 18273296.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12643776\nallocs=49\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/forward/Flux/(64, 64, 3, 128)",
            "value": 17955192,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12643680\nallocs=50\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/forward/SimpleChains/(64, 64, 3, 128)",
            "value": 6406788,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Zygote/(32, 32, 3, 1)",
            "value": 103984169.5,
            "unit": "ns",
            "extra": "gctime=2187027\nmemory=191953904\nallocs=45666\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Zygote/(32, 32, 3, 16)",
            "value": 842558211,
            "unit": "ns",
            "extra": "gctime=3025475\nmemory=482375424\nallocs=45912\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Zygote/(32, 32, 3, 64)",
            "value": 3036962183,
            "unit": "ns",
            "extra": "gctime=47260592\nmemory=1411550928\nallocs=45927\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Tracker/(32, 32, 3, 1)",
            "value": 158105613,
            "unit": "ns",
            "extra": "gctime=1337008\nmemory=457197696\nallocs=11107\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Tracker/(32, 32, 3, 16)",
            "value": 1091539870.5,
            "unit": "ns",
            "extra": "gctime=162669170.5\nmemory=747991200\nallocs=11348\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Tracker/(32, 32, 3, 64)",
            "value": 4156720070,
            "unit": "ns",
            "extra": "gctime=312072660\nmemory=1678358048\nallocs=11349\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Flux/(32, 32, 3, 1)",
            "value": 87153400,
            "unit": "ns",
            "extra": "gctime=0\nmemory=183068240\nallocs=10474\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Flux/(32, 32, 3, 16)",
            "value": 677891576.5,
            "unit": "ns",
            "extra": "gctime=1690800.5\nmemory=390054960\nallocs=10678\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Flux/(32, 32, 3, 64)",
            "value": 3087144996,
            "unit": "ns",
            "extra": "gctime=330837452\nmemory=1052236560\nallocs=10678\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/NamedTuple/(32, 32, 3, 1)",
            "value": 25057694,
            "unit": "ns",
            "extra": "gctime=0\nmemory=18178624\nallocs=1204\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/NamedTuple/(32, 32, 3, 16)",
            "value": 235060201.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=88386192\nallocs=1292\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/NamedTuple/(32, 32, 3, 64)",
            "value": 850027203,
            "unit": "ns",
            "extra": "gctime=1923817\nmemory=313014736\nallocs=1292\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/ComponentArray/(32, 32, 3, 1)",
            "value": 26539452,
            "unit": "ns",
            "extra": "gctime=0\nmemory=18175504\nallocs=1126\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/ComponentArray/(32, 32, 3, 16)",
            "value": 222485100,
            "unit": "ns",
            "extra": "gctime=0\nmemory=88383696\nallocs=1214\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/ComponentArray/(32, 32, 3, 64)",
            "value": 843941878,
            "unit": "ns",
            "extra": "gctime=1693644\nmemory=313012240\nallocs=1214\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/Flux/(32, 32, 3, 1)",
            "value": 23351068,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16971936\nallocs=887\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/Flux/(32, 32, 3, 16)",
            "value": 185662518,
            "unit": "ns",
            "extra": "gctime=0\nmemory=69608176\nallocs=968\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/Flux/(32, 32, 3, 64)",
            "value": 816281223,
            "unit": "ns",
            "extra": "gctime=1378314.5\nmemory=238006832\nallocs=968\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/ReverseDiff (compiled)/(64, 64, 64, 128)",
            "value": 1134116904.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=278646368\nallocs=88\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/Zygote/(64, 64, 64, 128)",
            "value": 1821706018,
            "unit": "ns",
            "extra": "gctime=4189058\nmemory=556540096\nallocs=131\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/Tracker/(64, 64, 64, 128)",
            "value": 2165104540,
            "unit": "ns",
            "extra": "gctime=165520463.5\nmemory=1455077896\nallocs=271\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/ReverseDiff/(64, 64, 64, 128)",
            "value": 2350684531,
            "unit": "ns",
            "extra": "gctime=145312017.5\nmemory=942830016\nallocs=187\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/Flux/(64, 64, 64, 128)",
            "value": 1833091167,
            "unit": "ns",
            "extra": "gctime=4249525.5\nmemory=556547152\nallocs=158\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/forward/NamedTuple/(64, 64, 64, 128)",
            "value": 359054624,
            "unit": "ns",
            "extra": "gctime=0\nmemory=269637984\nallocs=48\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/forward/ComponentArray/(64, 64, 64, 128)",
            "value": 458776503,
            "unit": "ns",
            "extra": "gctime=0\nmemory=269638208\nallocs=49\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/forward/Flux/(64, 64, 64, 128)",
            "value": 353291618,
            "unit": "ns",
            "extra": "gctime=0\nmemory=269638112\nallocs=50\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/ReverseDiff (compiled)/(64, 64, 1, 128)",
            "value": 11907971,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4360336\nallocs=87\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/Zygote/(64, 64, 1, 128)",
            "value": 18075976.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8704816\nallocs=130\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/Tracker/(64, 64, 1, 128)",
            "value": 19244630,
            "unit": "ns",
            "extra": "gctime=0\nmemory=22745816\nallocs=268\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/ReverseDiff/(64, 64, 1, 128)",
            "value": 23929082,
            "unit": "ns",
            "extra": "gctime=0\nmemory=14742624\nallocs=185\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/Flux/(64, 64, 1, 128)",
            "value": 18071045,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8711872\nallocs=157\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/SimpleChains/(64, 64, 1, 128)",
            "value": 1162609,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1970080\nallocs=28\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/forward/NamedTuple/(64, 64, 1, 128)",
            "value": 2078115,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4217504\nallocs=48\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/forward/ComponentArray/(64, 64, 1, 128)",
            "value": 2088017.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4217728\nallocs=49\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/forward/Flux/(64, 64, 1, 128)",
            "value": 2077539,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4217632\nallocs=50\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/forward/SimpleChains/(64, 64, 1, 128)",
            "value": 197480,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/ReverseDiff (compiled)/(200, 128)",
            "value": 299121,
            "unit": "ns",
            "extra": "gctime=0\nmemory=102672\nallocs=9\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/Zygote/(200, 128)",
            "value": 274264,
            "unit": "ns",
            "extra": "gctime=0\nmemory=572848\nallocs=44\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/Tracker/(200, 128)",
            "value": 366778,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1614152\nallocs=138\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/ReverseDiff/(200, 128)",
            "value": 413700.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1040032\nallocs=61\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/Flux/(200, 128)",
            "value": 275296,
            "unit": "ns",
            "extra": "gctime=0\nmemory=571712\nallocs=33\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/SimpleChains/(200, 128)",
            "value": 395864,
            "unit": "ns",
            "extra": "gctime=0\nmemory=586800\nallocs=28\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/forward/NamedTuple/(200, 128)",
            "value": 88767,
            "unit": "ns",
            "extra": "gctime=0\nmemory=204896\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/forward/ComponentArray/(200, 128)",
            "value": 89553,
            "unit": "ns",
            "extra": "gctime=0\nmemory=204976\nallocs=7\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/forward/Flux/(200, 128)",
            "value": 87284,
            "unit": "ns",
            "extra": "gctime=0\nmemory=204896\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/forward/SimpleChains/(200, 128)",
            "value": 104536,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/ReverseDiff (compiled)/(64, 64, 16, 128)",
            "value": 197678304,
            "unit": "ns",
            "extra": "gctime=0\nmemory=69640608\nallocs=87\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/Zygote/(64, 64, 16, 128)",
            "value": 349707282,
            "unit": "ns",
            "extra": "gctime=0\nmemory=139115840\nallocs=130\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/Tracker/(64, 64, 16, 128)",
            "value": 394767610,
            "unit": "ns",
            "extra": "gctime=1353301\nmemory=363699592\nallocs=268\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/ReverseDiff/(64, 64, 16, 128)",
            "value": 477350913,
            "unit": "ns",
            "extra": "gctime=0\nmemory=235664000\nallocs=185\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/Flux/(64, 64, 16, 128)",
            "value": 371954865,
            "unit": "ns",
            "extra": "gctime=0\nmemory=139122896\nallocs=157\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/SimpleChains/(64, 64, 16, 128)",
            "value": 335078971.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=31510640\nallocs=28\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/forward/NamedTuple/(64, 64, 16, 128)",
            "value": 53540565,
            "unit": "ns",
            "extra": "gctime=0\nmemory=67412832\nallocs=48\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/forward/ComponentArray/(64, 64, 16, 128)",
            "value": 49765921.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=67413056\nallocs=49\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/forward/Flux/(64, 64, 16, 128)",
            "value": 49896033.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=67412960\nallocs=50\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/forward/SimpleChains/(64, 64, 16, 128)",
            "value": 28103680,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/ReverseDiff (compiled)/(2000, 128)",
            "value": 19642944.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1024272\nallocs=9\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/Zygote/(2000, 128)",
            "value": 19748348.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20106480\nallocs=44\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/Tracker/(2000, 128)",
            "value": 23593738,
            "unit": "ns",
            "extra": "gctime=0\nmemory=59293448\nallocs=138\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/ReverseDiff/(2000, 128)",
            "value": 24233000.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=39178464\nallocs=61\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/Flux/(2000, 128)",
            "value": 19740162,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20105344\nallocs=33\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/forward/NamedTuple/(2000, 128)",
            "value": 6615632.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2048096\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/forward/ComponentArray/(2000, 128)",
            "value": 6593397.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2048176\nallocs=7\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/forward/Flux/(2000, 128)",
            "value": 6506655,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2048096\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "avikpal@mit.edu",
            "name": "Avik Pal",
            "username": "avik-pal"
          },
          "committer": {
            "email": "avikpal@mit.edu",
            "name": "Avik Pal",
            "username": "avik-pal"
          },
          "distinct": true,
          "id": "2a20c5a39b973334e797203ac0318dd32b23b8c3",
          "message": "Revert \"Test if ChainRules problem is resolved\"\n\nThis reverts commit 1daeb5956d026dd4b1a5790ff35385d39a6a5860.",
          "timestamp": "2024-04-09T12:29:51-04:00",
          "tree_id": "c4d344244c08d9e6b676dd1bdcfc8c7644fb4839",
          "url": "https://github.com/LuxDL/Lux.jl/commit/2a20c5a39b973334e797203ac0318dd32b23b8c3"
        },
        "date": 1712682056593,
        "tool": "julia",
        "benches": [
          {
            "name": "Dense(2 => 2)/cpu/reverse/ReverseDiff (compiled)/(2, 128)",
            "value": 3655.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1312\nallocs=8\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":8,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/Zygote/(2, 128)",
            "value": 8373.8,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6608\nallocs=39\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":5,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/Tracker/(2, 128)",
            "value": 18875,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16824\nallocs=126\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/ReverseDiff/(2, 128)",
            "value": 9946.6,
            "unit": "ns",
            "extra": "gctime=0\nmemory=9776\nallocs=54\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":5,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/Flux/(2, 128)",
            "value": 8994.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5472\nallocs=28\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":4,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/SimpleChains/(2, 128)",
            "value": 4253.555555555556,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2880\nallocs=26\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":9,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/forward/NamedTuple/(2, 128)",
            "value": 1996.7,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2176\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":10,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/forward/ComponentArray/(2, 128)",
            "value": 1654.0845070422536,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2256\nallocs=5\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":142,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/forward/Flux/(2, 128)",
            "value": 1806.6203703703704,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2176\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":54,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/forward/SimpleChains/(2, 128)",
            "value": 202.8326241134752,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":705,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/ReverseDiff (compiled)/(20, 128)",
            "value": 17643,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10592\nallocs=8\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/Zygote/(20, 128)",
            "value": 18695,
            "unit": "ns",
            "extra": "gctime=0\nmemory=45536\nallocs=39\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/Tracker/(20, 128)",
            "value": 36698,
            "unit": "ns",
            "extra": "gctime=0\nmemory=124296\nallocs=124\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/ReverseDiff/(20, 128)",
            "value": 29145,
            "unit": "ns",
            "extra": "gctime=0\nmemory=78240\nallocs=52\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/Flux/(20, 128)",
            "value": 19827,
            "unit": "ns",
            "extra": "gctime=0\nmemory=44400\nallocs=28\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/SimpleChains/(20, 128)",
            "value": 16170,
            "unit": "ns",
            "extra": "gctime=0\nmemory=15648\nallocs=26\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/forward/NamedTuple/(20, 128)",
            "value": 4955,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20736\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":7,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/forward/ComponentArray/(20, 128)",
            "value": 5005.142857142857,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20816\nallocs=5\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":7,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/forward/Flux/(20, 128)",
            "value": 5036.714285714285,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20736\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":7,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/forward/SimpleChains/(20, 128)",
            "value": 1651.1,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":10,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/ReverseDiff (compiled)/(64, 64, 3, 128)",
            "value": 50939380,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13063408\nallocs=87\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/Zygote/(64, 64, 3, 128)",
            "value": 79931782,
            "unit": "ns",
            "extra": "gctime=0\nmemory=26092000\nallocs=130\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/Tracker/(64, 64, 3, 128)",
            "value": 78661421,
            "unit": "ns",
            "extra": "gctime=0\nmemory=68203528\nallocs=270\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/ReverseDiff/(64, 64, 3, 128)",
            "value": 91272190.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=44196944\nallocs=187\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/Flux/(64, 64, 3, 128)",
            "value": 93377866.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=26099056\nallocs=157\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/SimpleChains/(64, 64, 3, 128)",
            "value": 11991869,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5906928\nallocs=28\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/forward/NamedTuple/(64, 64, 3, 128)",
            "value": 18984863.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12643552\nallocs=48\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/forward/ComponentArray/(64, 64, 3, 128)",
            "value": 18867999,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12643776\nallocs=49\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/forward/Flux/(64, 64, 3, 128)",
            "value": 18628681,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12643680\nallocs=50\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/forward/SimpleChains/(64, 64, 3, 128)",
            "value": 6427121,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Zygote/(32, 32, 3, 1)",
            "value": 109345995,
            "unit": "ns",
            "extra": "gctime=0\nmemory=191953904\nallocs=45666\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Zygote/(32, 32, 3, 16)",
            "value": 753707936,
            "unit": "ns",
            "extra": "gctime=2970050\nmemory=482375424\nallocs=45912\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Zygote/(32, 32, 3, 64)",
            "value": 2956953751,
            "unit": "ns",
            "extra": "gctime=50261396\nmemory=1411550928\nallocs=45927\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Tracker/(32, 32, 3, 1)",
            "value": 182122386,
            "unit": "ns",
            "extra": "gctime=1627086\nmemory=457197696\nallocs=11107\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Tracker/(32, 32, 3, 16)",
            "value": 1136980410,
            "unit": "ns",
            "extra": "gctime=174866325.5\nmemory=747993376\nallocs=11349\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Tracker/(32, 32, 3, 64)",
            "value": 3683425574,
            "unit": "ns",
            "extra": "gctime=361107094\nmemory=1678358048\nallocs=11349\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Flux/(32, 32, 3, 1)",
            "value": 85689271,
            "unit": "ns",
            "extra": "gctime=0\nmemory=183068240\nallocs=10474\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Flux/(32, 32, 3, 16)",
            "value": 736530234.5,
            "unit": "ns",
            "extra": "gctime=1757452\nmemory=390054960\nallocs=10678\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Flux/(32, 32, 3, 64)",
            "value": 2815110663,
            "unit": "ns",
            "extra": "gctime=339195375\nmemory=1052236560\nallocs=10678\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/NamedTuple/(32, 32, 3, 1)",
            "value": 25737587,
            "unit": "ns",
            "extra": "gctime=0\nmemory=18178624\nallocs=1204\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/NamedTuple/(32, 32, 3, 16)",
            "value": 212298522,
            "unit": "ns",
            "extra": "gctime=0\nmemory=88386192\nallocs=1292\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/NamedTuple/(32, 32, 3, 64)",
            "value": 932573050.5,
            "unit": "ns",
            "extra": "gctime=27420012.5\nmemory=313014736\nallocs=1292\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/ComponentArray/(32, 32, 3, 1)",
            "value": 26360056,
            "unit": "ns",
            "extra": "gctime=0\nmemory=18175504\nallocs=1126\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/ComponentArray/(32, 32, 3, 16)",
            "value": 212978713,
            "unit": "ns",
            "extra": "gctime=0\nmemory=88383696\nallocs=1214\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/ComponentArray/(32, 32, 3, 64)",
            "value": 845080145.5,
            "unit": "ns",
            "extra": "gctime=1741649\nmemory=313012240\nallocs=1214\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/Flux/(32, 32, 3, 1)",
            "value": 23696110,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16971936\nallocs=887\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/Flux/(32, 32, 3, 16)",
            "value": 188727204,
            "unit": "ns",
            "extra": "gctime=0\nmemory=69608176\nallocs=968\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/Flux/(32, 32, 3, 64)",
            "value": 716121501,
            "unit": "ns",
            "extra": "gctime=1485457\nmemory=238006832\nallocs=968\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/ReverseDiff (compiled)/(64, 64, 64, 128)",
            "value": 1108752997,
            "unit": "ns",
            "extra": "gctime=0\nmemory=278646368\nallocs=88\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/Zygote/(64, 64, 64, 128)",
            "value": 1867146644,
            "unit": "ns",
            "extra": "gctime=4342878\nmemory=556540096\nallocs=131\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/Tracker/(64, 64, 64, 128)",
            "value": 2187251601.5,
            "unit": "ns",
            "extra": "gctime=183449452\nmemory=1455077896\nallocs=271\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/ReverseDiff/(64, 64, 64, 128)",
            "value": 2374190547,
            "unit": "ns",
            "extra": "gctime=153406944\nmemory=942830016\nallocs=187\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/Flux/(64, 64, 64, 128)",
            "value": 1864310613.5,
            "unit": "ns",
            "extra": "gctime=4088058.5\nmemory=556547152\nallocs=158\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/forward/NamedTuple/(64, 64, 64, 128)",
            "value": 362695061,
            "unit": "ns",
            "extra": "gctime=0\nmemory=269637984\nallocs=48\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/forward/ComponentArray/(64, 64, 64, 128)",
            "value": 370586681.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=269638208\nallocs=49\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/forward/Flux/(64, 64, 64, 128)",
            "value": 371425922.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=269638112\nallocs=50\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/ReverseDiff (compiled)/(64, 64, 1, 128)",
            "value": 12052047,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4360336\nallocs=87\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/Zygote/(64, 64, 1, 128)",
            "value": 18235365.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8704816\nallocs=130\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/Tracker/(64, 64, 1, 128)",
            "value": 19603792,
            "unit": "ns",
            "extra": "gctime=0\nmemory=22745816\nallocs=268\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/ReverseDiff/(64, 64, 1, 128)",
            "value": 24195903,
            "unit": "ns",
            "extra": "gctime=0\nmemory=14742624\nallocs=185\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/Flux/(64, 64, 1, 128)",
            "value": 18334453,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8711872\nallocs=157\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/SimpleChains/(64, 64, 1, 128)",
            "value": 1154292,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1970080\nallocs=28\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/forward/NamedTuple/(64, 64, 1, 128)",
            "value": 2110196,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4217504\nallocs=48\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/forward/ComponentArray/(64, 64, 1, 128)",
            "value": 2170153,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4217728\nallocs=49\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/forward/Flux/(64, 64, 1, 128)",
            "value": 2134836,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4217632\nallocs=50\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/forward/SimpleChains/(64, 64, 1, 128)",
            "value": 202419,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/ReverseDiff (compiled)/(200, 128)",
            "value": 306714,
            "unit": "ns",
            "extra": "gctime=0\nmemory=102672\nallocs=9\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/Zygote/(200, 128)",
            "value": 277821,
            "unit": "ns",
            "extra": "gctime=0\nmemory=572848\nallocs=44\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/Tracker/(200, 128)",
            "value": 372783,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1614152\nallocs=138\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/ReverseDiff/(200, 128)",
            "value": 418944,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1040032\nallocs=61\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/Flux/(200, 128)",
            "value": 279253.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=571712\nallocs=33\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/SimpleChains/(200, 128)",
            "value": 400691,
            "unit": "ns",
            "extra": "gctime=0\nmemory=586800\nallocs=28\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/forward/NamedTuple/(200, 128)",
            "value": 93004,
            "unit": "ns",
            "extra": "gctime=0\nmemory=204896\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/forward/ComponentArray/(200, 128)",
            "value": 96280,
            "unit": "ns",
            "extra": "gctime=0\nmemory=204976\nallocs=7\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/forward/Flux/(200, 128)",
            "value": 89628,
            "unit": "ns",
            "extra": "gctime=0\nmemory=204896\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/forward/SimpleChains/(200, 128)",
            "value": 105237,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/ReverseDiff (compiled)/(64, 64, 16, 128)",
            "value": 200438157,
            "unit": "ns",
            "extra": "gctime=0\nmemory=69640608\nallocs=87\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/Zygote/(64, 64, 16, 128)",
            "value": 352793790,
            "unit": "ns",
            "extra": "gctime=0\nmemory=139115840\nallocs=130\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/Tracker/(64, 64, 16, 128)",
            "value": 408772280,
            "unit": "ns",
            "extra": "gctime=1821991\nmemory=363699592\nallocs=268\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/ReverseDiff/(64, 64, 16, 128)",
            "value": 490040365,
            "unit": "ns",
            "extra": "gctime=0\nmemory=235664000\nallocs=185\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/Flux/(64, 64, 16, 128)",
            "value": 383463253.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=139122896\nallocs=157\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/SimpleChains/(64, 64, 16, 128)",
            "value": 368210985,
            "unit": "ns",
            "extra": "gctime=0\nmemory=31510640\nallocs=28\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/forward/NamedTuple/(64, 64, 16, 128)",
            "value": 53892602.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=67412832\nallocs=48\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/forward/ComponentArray/(64, 64, 16, 128)",
            "value": 53194010,
            "unit": "ns",
            "extra": "gctime=0\nmemory=67413056\nallocs=49\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/forward/Flux/(64, 64, 16, 128)",
            "value": 60542610,
            "unit": "ns",
            "extra": "gctime=0\nmemory=67412960\nallocs=50\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/forward/SimpleChains/(64, 64, 16, 128)",
            "value": 29155185,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/ReverseDiff (compiled)/(2000, 128)",
            "value": 19965939.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1024272\nallocs=9\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/Zygote/(2000, 128)",
            "value": 20208135,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20106480\nallocs=44\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/Tracker/(2000, 128)",
            "value": 24305621.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=59293448\nallocs=138\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/ReverseDiff/(2000, 128)",
            "value": 24684238,
            "unit": "ns",
            "extra": "gctime=0\nmemory=39178464\nallocs=61\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/Flux/(2000, 128)",
            "value": 20154517,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20105344\nallocs=33\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/forward/NamedTuple/(2000, 128)",
            "value": 6741537.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2048096\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/forward/ComponentArray/(2000, 128)",
            "value": 6772766,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2048176\nallocs=7\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/forward/Flux/(2000, 128)",
            "value": 6680651,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2048096\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "avikpal@mit.edu",
            "name": "Avik Pal",
            "username": "avik-pal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "132b99add7daf074b8f6b8412d67a12a33b174a8",
          "message": "Merge pull request #580 from LuxDL/ap/ad_handling\n\nAD Housekeeping",
          "timestamp": "2024-04-09T16:38:48-04:00",
          "tree_id": "87389343af3693e3d1f0f1b0f77c94dd61e7b3af",
          "url": "https://github.com/LuxDL/Lux.jl/commit/132b99add7daf074b8f6b8412d67a12a33b174a8"
        },
        "date": 1712696907155,
        "tool": "julia",
        "benches": [
          {
            "name": "Dense(2 => 2)/cpu/reverse/ReverseDiff (compiled)/(2, 128)",
            "value": 3633,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1312\nallocs=8\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":8,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/Zygote/(2, 128)",
            "value": 7944.8,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6608\nallocs=39\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":5,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/Tracker/(2, 128)",
            "value": 19621.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16824\nallocs=126\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/ReverseDiff/(2, 128)",
            "value": 9859.625,
            "unit": "ns",
            "extra": "gctime=0\nmemory=9776\nallocs=54\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":4,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/Flux/(2, 128)",
            "value": 7615.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5472\nallocs=28\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":4,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/SimpleChains/(2, 128)",
            "value": 4458.375,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3088\nallocs=28\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":8,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/forward/NamedTuple/(2, 128)",
            "value": 2008.7,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2176\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":10,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/forward/ComponentArray/(2, 128)",
            "value": 1648.645390070922,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2256\nallocs=5\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":141,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/forward/Flux/(2, 128)",
            "value": 1832.5116279069769,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2176\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":43,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/forward/SimpleChains/(2, 128)",
            "value": 179.59383753501402,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":714,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/ReverseDiff (compiled)/(20, 128)",
            "value": 17503,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10592\nallocs=8\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/Zygote/(20, 128)",
            "value": 18404,
            "unit": "ns",
            "extra": "gctime=0\nmemory=45536\nallocs=39\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/Tracker/(20, 128)",
            "value": 35206,
            "unit": "ns",
            "extra": "gctime=0\nmemory=124296\nallocs=124\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/ReverseDiff/(20, 128)",
            "value": 28513,
            "unit": "ns",
            "extra": "gctime=0\nmemory=78240\nallocs=52\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/Flux/(20, 128)",
            "value": 19797,
            "unit": "ns",
            "extra": "gctime=0\nmemory=44400\nallocs=28\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/SimpleChains/(20, 128)",
            "value": 17733,
            "unit": "ns",
            "extra": "gctime=0\nmemory=17600\nallocs=28\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/forward/NamedTuple/(20, 128)",
            "value": 4867.571428571428,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20736\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":7,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/forward/ComponentArray/(20, 128)",
            "value": 4902,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20816\nallocs=5\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":7,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/forward/Flux/(20, 128)",
            "value": 4955,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20736\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":7,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/forward/SimpleChains/(20, 128)",
            "value": 1660.1,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":10,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/ReverseDiff (compiled)/(64, 64, 3, 128)",
            "value": 46080813,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13063408\nallocs=87\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/Zygote/(64, 64, 3, 128)",
            "value": 105961685.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=26092000\nallocs=130\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/Tracker/(64, 64, 3, 128)",
            "value": 110135838.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=68203528\nallocs=270\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/ReverseDiff/(64, 64, 3, 128)",
            "value": 106710393.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=44196944\nallocs=187\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/Flux/(64, 64, 3, 128)",
            "value": 105840243,
            "unit": "ns",
            "extra": "gctime=0\nmemory=26099056\nallocs=157\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/SimpleChains/(64, 64, 3, 128)",
            "value": 11945825,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5907440\nallocs=30\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/forward/NamedTuple/(64, 64, 3, 128)",
            "value": 18436873,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12643552\nallocs=48\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/forward/ComponentArray/(64, 64, 3, 128)",
            "value": 18567580,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12643776\nallocs=49\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/forward/Flux/(64, 64, 3, 128)",
            "value": 18111746,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12643680\nallocs=50\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/forward/SimpleChains/(64, 64, 3, 128)",
            "value": 6381482,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Zygote/(32, 32, 3, 1)",
            "value": 101214043,
            "unit": "ns",
            "extra": "gctime=0\nmemory=191953904\nallocs=45666\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Zygote/(32, 32, 3, 16)",
            "value": 745763279,
            "unit": "ns",
            "extra": "gctime=2549974\nmemory=482375424\nallocs=45912\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Zygote/(32, 32, 3, 64)",
            "value": 2918099796,
            "unit": "ns",
            "extra": "gctime=41953979\nmemory=1411550928\nallocs=45927\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Tracker/(32, 32, 3, 1)",
            "value": 158128244,
            "unit": "ns",
            "extra": "gctime=1539606\nmemory=457197696\nallocs=11107\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Tracker/(32, 32, 3, 16)",
            "value": 1205444948.5,
            "unit": "ns",
            "extra": "gctime=156461391.5\nmemory=747991200\nallocs=11348\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Tracker/(32, 32, 3, 64)",
            "value": 3740074948,
            "unit": "ns",
            "extra": "gctime=313901665\nmemory=1678358048\nallocs=11349\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Flux/(32, 32, 3, 1)",
            "value": 86951378,
            "unit": "ns",
            "extra": "gctime=0\nmemory=183068240\nallocs=10474\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Flux/(32, 32, 3, 16)",
            "value": 767273504.5,
            "unit": "ns",
            "extra": "gctime=1479027.5\nmemory=390054960\nallocs=10678\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Flux/(32, 32, 3, 64)",
            "value": 3116165356,
            "unit": "ns",
            "extra": "gctime=311442445\nmemory=1052236560\nallocs=10678\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/NamedTuple/(32, 32, 3, 1)",
            "value": 25923949,
            "unit": "ns",
            "extra": "gctime=0\nmemory=18178624\nallocs=1204\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/NamedTuple/(32, 32, 3, 16)",
            "value": 234109684.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=88386192\nallocs=1292\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/NamedTuple/(32, 32, 3, 64)",
            "value": 956527947,
            "unit": "ns",
            "extra": "gctime=21695652.5\nmemory=313014736\nallocs=1292\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/ComponentArray/(32, 32, 3, 1)",
            "value": 26230540,
            "unit": "ns",
            "extra": "gctime=0\nmemory=18175504\nallocs=1126\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/ComponentArray/(32, 32, 3, 16)",
            "value": 211444026.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=88383696\nallocs=1214\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/ComponentArray/(32, 32, 3, 64)",
            "value": 900202260.5,
            "unit": "ns",
            "extra": "gctime=1343913.5\nmemory=313012240\nallocs=1214\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/Flux/(32, 32, 3, 1)",
            "value": 24101389,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16971936\nallocs=887\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/Flux/(32, 32, 3, 16)",
            "value": 232113400,
            "unit": "ns",
            "extra": "gctime=0\nmemory=69608176\nallocs=968\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/Flux/(32, 32, 3, 64)",
            "value": 910530186,
            "unit": "ns",
            "extra": "gctime=1279029\nmemory=238006832\nallocs=968\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/ReverseDiff (compiled)/(64, 64, 64, 128)",
            "value": 1125081561,
            "unit": "ns",
            "extra": "gctime=0\nmemory=278646368\nallocs=88\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/Zygote/(64, 64, 64, 128)",
            "value": 1907101205.5,
            "unit": "ns",
            "extra": "gctime=3400706.5\nmemory=556540096\nallocs=131\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/Tracker/(64, 64, 64, 128)",
            "value": 2144184023.5,
            "unit": "ns",
            "extra": "gctime=166973357\nmemory=1455077896\nallocs=271\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/ReverseDiff/(64, 64, 64, 128)",
            "value": 2586542318,
            "unit": "ns",
            "extra": "gctime=273282450\nmemory=942830016\nallocs=187\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/Flux/(64, 64, 64, 128)",
            "value": 1881422422.5,
            "unit": "ns",
            "extra": "gctime=3693053\nmemory=556547152\nallocs=158\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/forward/NamedTuple/(64, 64, 64, 128)",
            "value": 448550801,
            "unit": "ns",
            "extra": "gctime=0\nmemory=269637984\nallocs=48\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/forward/ComponentArray/(64, 64, 64, 128)",
            "value": 374186092,
            "unit": "ns",
            "extra": "gctime=0\nmemory=269638208\nallocs=49\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/forward/Flux/(64, 64, 64, 128)",
            "value": 381447995.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=269638112\nallocs=50\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/ReverseDiff (compiled)/(64, 64, 1, 128)",
            "value": 11717725,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4360336\nallocs=87\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/Zygote/(64, 64, 1, 128)",
            "value": 17972964,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8704816\nallocs=130\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/Tracker/(64, 64, 1, 128)",
            "value": 19169238,
            "unit": "ns",
            "extra": "gctime=0\nmemory=22745816\nallocs=268\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/ReverseDiff/(64, 64, 1, 128)",
            "value": 23860052,
            "unit": "ns",
            "extra": "gctime=0\nmemory=14742624\nallocs=185\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/Flux/(64, 64, 1, 128)",
            "value": 18009240,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8711872\nallocs=157\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/SimpleChains/(64, 64, 1, 128)",
            "value": 1161680,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1970304\nallocs=30\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/forward/NamedTuple/(64, 64, 1, 128)",
            "value": 2078904,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4217504\nallocs=48\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/forward/ComponentArray/(64, 64, 1, 128)",
            "value": 2086788,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4217728\nallocs=49\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/forward/Flux/(64, 64, 1, 128)",
            "value": 2074965,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4217632\nallocs=50\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/forward/SimpleChains/(64, 64, 1, 128)",
            "value": 197078.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/ReverseDiff (compiled)/(200, 128)",
            "value": 297686,
            "unit": "ns",
            "extra": "gctime=0\nmemory=102672\nallocs=9\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/Zygote/(200, 128)",
            "value": 275324,
            "unit": "ns",
            "extra": "gctime=0\nmemory=572848\nallocs=44\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/Tracker/(200, 128)",
            "value": 364651,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1614152\nallocs=138\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/ReverseDiff/(200, 128)",
            "value": 412480,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1040032\nallocs=61\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/Flux/(200, 128)",
            "value": 275574.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=571712\nallocs=33\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/SimpleChains/(200, 128)",
            "value": 408572.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=747840\nallocs=30\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/forward/NamedTuple/(200, 128)",
            "value": 90178,
            "unit": "ns",
            "extra": "gctime=0\nmemory=204896\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/forward/ComponentArray/(200, 128)",
            "value": 91450,
            "unit": "ns",
            "extra": "gctime=0\nmemory=204976\nallocs=7\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/forward/Flux/(200, 128)",
            "value": 87083,
            "unit": "ns",
            "extra": "gctime=0\nmemory=204896\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/forward/SimpleChains/(200, 128)",
            "value": 104465,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/ReverseDiff (compiled)/(64, 64, 16, 128)",
            "value": 195492342.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=69640608\nallocs=87\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/Zygote/(64, 64, 16, 128)",
            "value": 384125691,
            "unit": "ns",
            "extra": "gctime=0\nmemory=139115840\nallocs=130\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/Tracker/(64, 64, 16, 128)",
            "value": 409435991,
            "unit": "ns",
            "extra": "gctime=1291942\nmemory=363699592\nallocs=268\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/ReverseDiff/(64, 64, 16, 128)",
            "value": 446038411,
            "unit": "ns",
            "extra": "gctime=631785\nmemory=235664000\nallocs=185\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/Flux/(64, 64, 16, 128)",
            "value": 398289262,
            "unit": "ns",
            "extra": "gctime=0\nmemory=139122896\nallocs=157\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/SimpleChains/(64, 64, 16, 128)",
            "value": 345487654,
            "unit": "ns",
            "extra": "gctime=0\nmemory=31520192\nallocs=30\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/forward/NamedTuple/(64, 64, 16, 128)",
            "value": 57154304,
            "unit": "ns",
            "extra": "gctime=0\nmemory=67412832\nallocs=48\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/forward/ComponentArray/(64, 64, 16, 128)",
            "value": 58110245,
            "unit": "ns",
            "extra": "gctime=0\nmemory=67413056\nallocs=49\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/forward/Flux/(64, 64, 16, 128)",
            "value": 55966814,
            "unit": "ns",
            "extra": "gctime=0\nmemory=67412960\nallocs=50\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/forward/SimpleChains/(64, 64, 16, 128)",
            "value": 27905339.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/ReverseDiff (compiled)/(2000, 128)",
            "value": 19416447,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1024272\nallocs=9\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/Zygote/(2000, 128)",
            "value": 19639429,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20106480\nallocs=44\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/Tracker/(2000, 128)",
            "value": 23419695,
            "unit": "ns",
            "extra": "gctime=0\nmemory=59293448\nallocs=138\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/ReverseDiff/(2000, 128)",
            "value": 24218219,
            "unit": "ns",
            "extra": "gctime=0\nmemory=39178464\nallocs=61\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/Flux/(2000, 128)",
            "value": 19691151,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20105344\nallocs=33\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/forward/NamedTuple/(2000, 128)",
            "value": 6619723,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2048096\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/forward/ComponentArray/(2000, 128)",
            "value": 6616265,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2048176\nallocs=7\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/forward/Flux/(2000, 128)",
            "value": 6556345,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2048096\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "avikpal@mit.edu",
            "name": "Avik Pal",
            "username": "avik-pal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "53b761ffa1daa343395a127a8dddcc55247ee8e7",
          "message": "Merge pull request #579 from LuxDL/ap/agg_tutorials\n\nAdd a gallery component",
          "timestamp": "2024-04-09T23:22:24-04:00",
          "tree_id": "fcce515f7b399d7dc0bc10d78119681ce77fdd5f",
          "url": "https://github.com/LuxDL/Lux.jl/commit/53b761ffa1daa343395a127a8dddcc55247ee8e7"
        },
        "date": 1712721133760,
        "tool": "julia",
        "benches": [
          {
            "name": "Dense(2 => 2)/cpu/reverse/ReverseDiff (compiled)/(2, 128)",
            "value": 3674.375,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1312\nallocs=8\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":8,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/Zygote/(2, 128)",
            "value": 8120,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6608\nallocs=39\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":6,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/Tracker/(2, 128)",
            "value": 14758,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16824\nallocs=126\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/ReverseDiff/(2, 128)",
            "value": 9956.6,
            "unit": "ns",
            "extra": "gctime=0\nmemory=9776\nallocs=54\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":5,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/Flux/(2, 128)",
            "value": 9099.25,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5472\nallocs=28\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":4,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/reverse/SimpleChains/(2, 128)",
            "value": 4552.25,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3088\nallocs=28\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":8,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/forward/NamedTuple/(2, 128)",
            "value": 1946.6,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2176\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":10,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/forward/ComponentArray/(2, 128)",
            "value": 1652.8661971830986,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2256\nallocs=5\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":142,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/forward/Flux/(2, 128)",
            "value": 1809.8431372549019,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2176\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":51,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2 => 2)/cpu/forward/SimpleChains/(2, 128)",
            "value": 179.78851540616247,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":714,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/ReverseDiff (compiled)/(20, 128)",
            "value": 17672,
            "unit": "ns",
            "extra": "gctime=0\nmemory=10592\nallocs=8\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/Zygote/(20, 128)",
            "value": 18465,
            "unit": "ns",
            "extra": "gctime=0\nmemory=45536\nallocs=39\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/Tracker/(20, 128)",
            "value": 35817,
            "unit": "ns",
            "extra": "gctime=0\nmemory=124296\nallocs=124\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/ReverseDiff/(20, 128)",
            "value": 28573,
            "unit": "ns",
            "extra": "gctime=0\nmemory=78240\nallocs=52\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/Flux/(20, 128)",
            "value": 19737,
            "unit": "ns",
            "extra": "gctime=0\nmemory=44400\nallocs=28\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/reverse/SimpleChains/(20, 128)",
            "value": 17162,
            "unit": "ns",
            "extra": "gctime=0\nmemory=17600\nallocs=28\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/forward/NamedTuple/(20, 128)",
            "value": 4893.428571428572,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20736\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":7,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/forward/ComponentArray/(20, 128)",
            "value": 4952.142857142857,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20816\nallocs=5\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":7,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/forward/Flux/(20, 128)",
            "value": 4907.714285714285,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20736\nallocs=2\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":7,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(20 => 20)/cpu/forward/SimpleChains/(20, 128)",
            "value": 1652.1,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":10,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/ReverseDiff (compiled)/(64, 64, 3, 128)",
            "value": 39556217,
            "unit": "ns",
            "extra": "gctime=0\nmemory=13063408\nallocs=87\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/Zygote/(64, 64, 3, 128)",
            "value": 65510599,
            "unit": "ns",
            "extra": "gctime=0\nmemory=26092000\nallocs=130\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/Tracker/(64, 64, 3, 128)",
            "value": 76064407,
            "unit": "ns",
            "extra": "gctime=0\nmemory=68203528\nallocs=270\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/ReverseDiff/(64, 64, 3, 128)",
            "value": 88871403.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=44196944\nallocs=187\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/Flux/(64, 64, 3, 128)",
            "value": 72809658,
            "unit": "ns",
            "extra": "gctime=0\nmemory=26099056\nallocs=157\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/reverse/SimpleChains/(64, 64, 3, 128)",
            "value": 12100554,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5907440\nallocs=30\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/forward/NamedTuple/(64, 64, 3, 128)",
            "value": 9991109.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12643552\nallocs=48\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/forward/ComponentArray/(64, 64, 3, 128)",
            "value": 10432405.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12643776\nallocs=49\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/forward/Flux/(64, 64, 3, 128)",
            "value": 10016491,
            "unit": "ns",
            "extra": "gctime=0\nmemory=12643680\nallocs=50\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 3 => 3)/cpu/forward/SimpleChains/(64, 64, 3, 128)",
            "value": 6390966,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Zygote/(32, 32, 3, 1)",
            "value": 98848326.5,
            "unit": "ns",
            "extra": "gctime=884452.5\nmemory=191953904\nallocs=45666\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Zygote/(32, 32, 3, 16)",
            "value": 764292345.5,
            "unit": "ns",
            "extra": "gctime=42901785.5\nmemory=482375424\nallocs=45912\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Zygote/(32, 32, 3, 64)",
            "value": 2515730554,
            "unit": "ns",
            "extra": "gctime=41124658\nmemory=1411550928\nallocs=45927\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Tracker/(32, 32, 3, 1)",
            "value": 156025821,
            "unit": "ns",
            "extra": "gctime=1420907\nmemory=457197696\nallocs=11107\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Tracker/(32, 32, 3, 16)",
            "value": 1024851862.5,
            "unit": "ns",
            "extra": "gctime=156818644\nmemory=747991200\nallocs=11348\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Tracker/(32, 32, 3, 64)",
            "value": 3539702577,
            "unit": "ns",
            "extra": "gctime=314044414\nmemory=1678358048\nallocs=11349\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Flux/(32, 32, 3, 1)",
            "value": 82469855,
            "unit": "ns",
            "extra": "gctime=0\nmemory=183068240\nallocs=10474\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Flux/(32, 32, 3, 16)",
            "value": 710005717.5,
            "unit": "ns",
            "extra": "gctime=1430655\nmemory=390054960\nallocs=10678\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/reverse/Flux/(32, 32, 3, 64)",
            "value": 2858023873,
            "unit": "ns",
            "extra": "gctime=323096754\nmemory=1052236560\nallocs=10678\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/NamedTuple/(32, 32, 3, 1)",
            "value": 25939820,
            "unit": "ns",
            "extra": "gctime=0\nmemory=18178624\nallocs=1204\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/NamedTuple/(32, 32, 3, 16)",
            "value": 207642246.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=88386192\nallocs=1292\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/NamedTuple/(32, 32, 3, 64)",
            "value": 842419380,
            "unit": "ns",
            "extra": "gctime=1670972\nmemory=313014736\nallocs=1292\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/ComponentArray/(32, 32, 3, 1)",
            "value": 26103135,
            "unit": "ns",
            "extra": "gctime=0\nmemory=18175504\nallocs=1126\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/ComponentArray/(32, 32, 3, 16)",
            "value": 233006946,
            "unit": "ns",
            "extra": "gctime=0\nmemory=88383696\nallocs=1214\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/ComponentArray/(32, 32, 3, 64)",
            "value": 809485246.5,
            "unit": "ns",
            "extra": "gctime=1251310.5\nmemory=313012240\nallocs=1214\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/Flux/(32, 32, 3, 1)",
            "value": 30921860,
            "unit": "ns",
            "extra": "gctime=0\nmemory=16971936\nallocs=887\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/Flux/(32, 32, 3, 16)",
            "value": 203061153,
            "unit": "ns",
            "extra": "gctime=0\nmemory=69608176\nallocs=968\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "vgg16/cpu/forward/Flux/(32, 32, 3, 64)",
            "value": 882871730,
            "unit": "ns",
            "extra": "gctime=1202450\nmemory=238006832\nallocs=968\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/ReverseDiff (compiled)/(64, 64, 64, 128)",
            "value": 1075834254,
            "unit": "ns",
            "extra": "gctime=0\nmemory=278646368\nallocs=88\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/Zygote/(64, 64, 64, 128)",
            "value": 1918214947.5,
            "unit": "ns",
            "extra": "gctime=3915739.5\nmemory=556540096\nallocs=131\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/Tracker/(64, 64, 64, 128)",
            "value": 2215726277.5,
            "unit": "ns",
            "extra": "gctime=164713451\nmemory=1455077896\nallocs=271\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/ReverseDiff/(64, 64, 64, 128)",
            "value": 2358848457,
            "unit": "ns",
            "extra": "gctime=143894374\nmemory=942830016\nallocs=187\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/reverse/Flux/(64, 64, 64, 128)",
            "value": 1926331223,
            "unit": "ns",
            "extra": "gctime=3399407.5\nmemory=556547152\nallocs=158\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/forward/NamedTuple/(64, 64, 64, 128)",
            "value": 365007811.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=269637984\nallocs=48\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/forward/ComponentArray/(64, 64, 64, 128)",
            "value": 435227716,
            "unit": "ns",
            "extra": "gctime=0\nmemory=269638208\nallocs=49\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 64 => 64)/cpu/forward/Flux/(64, 64, 64, 128)",
            "value": 376326451.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=269638112\nallocs=50\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/ReverseDiff (compiled)/(64, 64, 1, 128)",
            "value": 12040318,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4360336\nallocs=87\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/Zygote/(64, 64, 1, 128)",
            "value": 18052787,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8704816\nallocs=130\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/Tracker/(64, 64, 1, 128)",
            "value": 19200702,
            "unit": "ns",
            "extra": "gctime=0\nmemory=22745816\nallocs=268\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/ReverseDiff/(64, 64, 1, 128)",
            "value": 23895482,
            "unit": "ns",
            "extra": "gctime=0\nmemory=14742624\nallocs=185\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/Flux/(64, 64, 1, 128)",
            "value": 17998985,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8711872\nallocs=157\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/reverse/SimpleChains/(64, 64, 1, 128)",
            "value": 1162245,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1970304\nallocs=30\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/forward/NamedTuple/(64, 64, 1, 128)",
            "value": 2074705,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4217504\nallocs=48\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/forward/ComponentArray/(64, 64, 1, 128)",
            "value": 2088735.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4217728\nallocs=49\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/forward/Flux/(64, 64, 1, 128)",
            "value": 2079959,
            "unit": "ns",
            "extra": "gctime=0\nmemory=4217632\nallocs=50\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 1 => 1)/cpu/forward/SimpleChains/(64, 64, 1, 128)",
            "value": 203118,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/ReverseDiff (compiled)/(200, 128)",
            "value": 303455.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=102672\nallocs=9\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/Zygote/(200, 128)",
            "value": 274336,
            "unit": "ns",
            "extra": "gctime=0\nmemory=572848\nallocs=44\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/Tracker/(200, 128)",
            "value": 363268,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1614152\nallocs=138\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/ReverseDiff/(200, 128)",
            "value": 413520,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1040032\nallocs=61\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/Flux/(200, 128)",
            "value": 275854,
            "unit": "ns",
            "extra": "gctime=0\nmemory=571712\nallocs=33\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/reverse/SimpleChains/(200, 128)",
            "value": 406938,
            "unit": "ns",
            "extra": "gctime=0\nmemory=747840\nallocs=30\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/forward/NamedTuple/(200, 128)",
            "value": 89587,
            "unit": "ns",
            "extra": "gctime=0\nmemory=204896\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/forward/ComponentArray/(200, 128)",
            "value": 89717,
            "unit": "ns",
            "extra": "gctime=0\nmemory=204976\nallocs=7\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/forward/Flux/(200, 128)",
            "value": 86892,
            "unit": "ns",
            "extra": "gctime=0\nmemory=204896\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(200 => 200)/cpu/forward/SimpleChains/(200, 128)",
            "value": 104365,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/ReverseDiff (compiled)/(64, 64, 16, 128)",
            "value": 200351480,
            "unit": "ns",
            "extra": "gctime=0\nmemory=69640608\nallocs=87\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/Zygote/(64, 64, 16, 128)",
            "value": 408642932,
            "unit": "ns",
            "extra": "gctime=0\nmemory=139115840\nallocs=130\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/Tracker/(64, 64, 16, 128)",
            "value": 440103689,
            "unit": "ns",
            "extra": "gctime=1538015\nmemory=363699592\nallocs=268\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/ReverseDiff/(64, 64, 16, 128)",
            "value": 456029536.5,
            "unit": "ns",
            "extra": "gctime=610347\nmemory=235664000\nallocs=185\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/Flux/(64, 64, 16, 128)",
            "value": 408071183,
            "unit": "ns",
            "extra": "gctime=0\nmemory=139122896\nallocs=157\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/reverse/SimpleChains/(64, 64, 16, 128)",
            "value": 335433443,
            "unit": "ns",
            "extra": "gctime=0\nmemory=31520192\nallocs=30\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/forward/NamedTuple/(64, 64, 16, 128)",
            "value": 60980045,
            "unit": "ns",
            "extra": "gctime=0\nmemory=67412832\nallocs=48\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/forward/ComponentArray/(64, 64, 16, 128)",
            "value": 57470482,
            "unit": "ns",
            "extra": "gctime=0\nmemory=67413056\nallocs=49\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/forward/Flux/(64, 64, 16, 128)",
            "value": 57093732,
            "unit": "ns",
            "extra": "gctime=0\nmemory=67412960\nallocs=50\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Conv((3, 3), 16 => 16)/cpu/forward/SimpleChains/(64, 64, 16, 128)",
            "value": 28329442,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/ReverseDiff (compiled)/(2000, 128)",
            "value": 19434661,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1024272\nallocs=9\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/Zygote/(2000, 128)",
            "value": 19731528,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20106480\nallocs=44\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/Tracker/(2000, 128)",
            "value": 23382597,
            "unit": "ns",
            "extra": "gctime=0\nmemory=59293448\nallocs=138\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/ReverseDiff/(2000, 128)",
            "value": 24160799,
            "unit": "ns",
            "extra": "gctime=0\nmemory=39178464\nallocs=61\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/reverse/Flux/(2000, 128)",
            "value": 19746006.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=20105344\nallocs=33\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/forward/NamedTuple/(2000, 128)",
            "value": 6626390.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2048096\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/forward/ComponentArray/(2000, 128)",
            "value": 6615541,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2048176\nallocs=7\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Dense(2000 => 2000)/cpu/forward/Flux/(2000, 128)",
            "value": 6561480,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2048096\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      }
    ]
  }
}