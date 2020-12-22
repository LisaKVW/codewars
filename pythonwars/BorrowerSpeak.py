# https://www.codewars.com/kata/57d2ba8095497e484e00002e/train/python


def borrow(s):
    punctuation = "!@#$%^&*()_+<>?:.,;"
    no_punct = " "  # create empty string - this to push new string into - the result
    for c in s:  # checking each character in string
        # if character is not a punctuation then we create no_punct and add no_punct to characters (c)
        if c not in punctuation:
            no_punct = no_punct + c
            lower = no_punct.lower()  # then we set our new string all to lowercase
            # finally we remove the space between the words and return ONE string
            space = lower.replace(' ', '')
    return (space)


print(borrow('WhAt! FiCK! DaMn CAke?'))


# trial 2 - almost!! just need to delete the space
# def borrow(s):
#    punctuation = "!@#$%^&*()_+<>?:.,;"
#    no_punct = " "
#    for c in s:
#        if c not in punctuation:
#            no_punct = no_punct + c
#            lower = no_punct.lower()
#    return (lower)

# trial 1 - delete all upperCase
# def borrow(s):
#    new = s.lowercase
#    return new

# delete capitals
# delete punctuations
# return one string - no space
# string.lower() - converts string to lowercase
