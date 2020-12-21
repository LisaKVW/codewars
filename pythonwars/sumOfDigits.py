# https: // www.codewars.com/kata/541c8630095125aba6000c00/train/python

def digital_root(n):
  loop = False
  while loop != True: # continues till condition is met - so when no more numbers are left
    if (len(str(n))) > 1: #this is looking at the number of digits in the string
      #we want to continue this process untill there is only 1 digit
      num_list = [int(num) for num in str(n)]  # takes the numerals in the string and adds them
      total = sum(num_list) #gives the sum  of the string
      n = total # sets the input, this to update string/length/value digit count
    else: # the else activates once the digit lenght is 1
      # we do everything again this for loop
      num_list = [int(num) for num in str(n)]
      total = sum(num_list)
      loop = True
      return total

  print((digital_root(16))


#while loop sample
  #i = 1
#while i < 6:
#print(i)
  #i += 1

#below test 1 passes rest does not
#The map() function executes a specified function for each item in an iterable. The item is sent to the function as a parameter.
#def digital_root(n):
#    num = sum(map(int, str(n)))
#    return num

#print((digital_root(16))  

# below returns on test 12 SHOULD be 7
# def digital_root(n):
#    newNum = [int(i) for i in str(n)]
#    for n in range(0, len(newNum)):
#        calc = newNum[n] + newNum[n]
#    return calc

# print((digital_root(16))

# create a list of single numbers:
# as we now have a list with individual numbers - we need to loop through them
# as we loop through them and get them 1 by 1
# we need to sum them up to each other until only single digit left
# def digital_root(n):
#    newNum = [int(i) for i in str(n)]
#    return newNum

# calc sum of each single n
# calcu untill there is only one n left