# https://www.codewars.com/kata/554b4ac871d6813a03000035/train/python

def high_and_low(numbers):
    list_num = list(map(int, numbers.split()))
    maxi = max(list_num)
    mini = min(list_num)
    maxStr = str(maxi)
    minStr = str(mini)
    combo = maxStr + ' ' + minStr
    return combo


print(high_and_low("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"))


#def high_and_low(numbers):
#    list_num = list(map(int, numbers.split()))
#    maxi = max(list_num)
#    mini = min(list_num)
#    return maxi, mini
#print(high_and_low("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"))


#numbers = []
# for num in numbers:
#    return max(num) and min(num)

#    maxi = max(numbers)
#    mini = min(numbers)
#    combo = maxi and mini
#    return mini

#    list_num = list(map(int, numbers.split()))
#    return max(list_num), min(list_num)
# this almost right- this return (542, -214)

#number = max(numbers) and min(numbers)
# print(number)

# return max and min in string
# output must return space between numbers ""
# return high number first
