# https: // www.hackerrank.com/challenges/mini-max-sum/problem

import math
import os
import random
import re
import sys

# Complete the miniMaxSum function below.
def miniMaxSum(arr):
  mini = arr.remove(min(arr))
  maxi =  arr.remove(max(arr))
  sumMini = sum(mini)
  # sumMaxi = sum(int(maxi))
  # return sumMini, sumMaxi
  print(sumMini)

print(miniMaxSum([1,2,3,7,9]))

    # input 5 integers
    # output sum of max 4
    # outout2 sum of min 4
    # return as two int.
