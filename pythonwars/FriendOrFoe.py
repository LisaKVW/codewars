#https://www.codewars.com/kata/55b42574ff091733d900002f/train/python

def friend(x):
    fr = []
    for i in x:
        if len(i) == 4:
            fr.append(i)
    return fr


#    x = []
#    for name in x:
#        if name.len < x[4]:
#            return True
#        else:
#            return False

#             x = []
#    counter = 0
#    for name in x:
#        counter +=1
#        if counter < 4:
#            return True
#        else:
#            return False

    #filter a list of strings and return a list with only friends name
    # name is 4 letters == it is friend
    # name not 4 letters == not friend
    # filter()
    # len() max 4
    # i have a list of strings
