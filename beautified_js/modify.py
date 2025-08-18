import os
from tqdm import tqdm

upd = [
    ("大交路", "全程"),
    ("小交路", "区间"),
    ("快车", "大站快车"),
    ("贯通快车", "贯通快车"),
]

import os

for file in tqdm(os.listdir('.')):
    if file.endswith('.js'):
        s = open(file, encoding="utf-8").read()
        for (a, b) in upd:
            s = s.replace(a, b)
        with open(file, "w", encoding="utf-8") as f:
            f.write(s)