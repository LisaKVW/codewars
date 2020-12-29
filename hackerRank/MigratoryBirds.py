#https: // www.hackerrank.com/challenges/migratory-birds/problem

# somehow only gives back 1 with test
def migratoryBirds(arr):
  new_arr = []
  if len(set(arr)) == len(arr):
    new_arr = len(arr).del(len(set(arr)))
    pass


print(migratoryBirds([1, 1, 2, 3, 4, 4, 4,2, 8]))

# # somehow only gives back 1 with test
# def migratoryBirds(arr):
#   size_list = len(arr)
#   new_list_dupe = []
#   for i in range(size_list):
#     i2 = i + 1
#     for j in range(i2, size_list):
#       if arr[i] == arr[j] and arr[i] not in new_list_dupe:
#         new_list_dupe.append(arr[i])
#         return new_list_dupe

# print(migratoryBirds([1, 1, 2, 3, 4,4,4]))

# this gets unique with set() but can not do math on set() - list
# def migratoryBirds(arr):
#     size_list = len(arr)
#     new_list_unique = []
#     new_list_unique= set(arr) 
#     dupes = (size_list - new_list_unique)
#     return dupes

# print(migratoryBirds([1,1,2,3,4]))
    # take out the unique - we want the dupes
    # to find unique int use set()
    # print the most seen bird/number
    # so check for number duplicates - find them
    # onces found dupes, go through dupes, and check which one is smallest
    # print bird with the smallest id number
