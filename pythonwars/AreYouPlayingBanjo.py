#https://www.codewars.com/kata/53af2b8861023f1d88000832/train/python

def areYouPlayingBanjo(name):
    if name.startswith('r'):
        return name + " plays banjo" 
    elif name.startswith('R'):
        return name + " plays banjo" 
    else:
        return name + " does not play banjo"
    
    

# if name start with r or R you play the banjo
# if no r or R you do not play banjo

#Characters in strings can be accessed in python with array notation (str[0])
#.lower() == .toLowerCase()