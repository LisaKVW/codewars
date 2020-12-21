# https: // www.codewars.com/kata/5208f99aee097e6552000148/train/python

# BELOW works!

def solution(s):
    r = []  # create empty list
    f = False  # create variable f - as we use isupper() which gives back true or false
    for c in s:  # checking each character in s
        if f and c.isupper():  # if false and character is uppercase
            # then to our empty list we append empty space (because we have capital letter)
            r.append(' ')
        f = not c.isupper()  # if it is not uppercase basically make it one word
        r.append(c)  # join each letter to each other
    return ''.join(r)  # join each letter to create string


print(solution("helloWorld"))

# from other dev in code wars


def solutionTwo(s):
    return ''.join(' ' + c if c.isupper() else c for c in s)


print(solutionTwo("helloWorld"))

# TRIAL gave back - helloworld
# def solution(s):
#    for i in s:
#        if (i.isupper()):  #isupper is boelean - returns true
#            i.split(i.upper())
#            return s

# print(solution("helloWorld"))

# trial - only got back first letter
# def solution(s):
#  for element in range(0, len(s)):
#    return(s[element])

# print(solution("helloWorld"))


# def solution(s):
#  for element in range(0, len(s)):
#    print(s[element])

# print(solution("helloWorld"))

# def solution(s):
#    for i in s:
#        if (i.upper()):
#            i == i.split()
#        else:
#            return s.join(" ").s

# print(solution("helloWorld"))

# def solution(s):
#    for i in s:
#        if (i.isupper()):
#            i == (" ")
#        else:
#                return s

# solution("helloWorld")

# [A - Z]  - does this mean all capital letters in alpha?
# break up camel casint - use split() ?
# need to return 1 string - str() ?
# upper() ?
# pass?
# pass is a null statement. The interpreter does not ignore a pass statement, but nothing happens and the statement results into no operation.
# The pass statement is useful when you don’t write the implementation of a function but you want to implement it in the future.

# original from codewars
# def solution(s):
#    pass
