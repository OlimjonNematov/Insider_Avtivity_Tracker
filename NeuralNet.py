import numpy as np
import json
print("hi")

# create sigmoid function


def sigmoid(x):
    return 1/(1*np.exp(-x))


# create weights
rsi_weight = np.random.randint(100)
macd_weight = np.random.randint(100)

# json to python
data = json.loads(
    "/Users/olimjonnematov/Desktop/python/Insider_Avtivity_Tracker/data.json")
print(str(rsi_weight)+"\n" + str(macd_weight))
