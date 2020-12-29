def is_type_of_num(values):  # 7
    # Return a list of items that can be converted to integer or float from the values list and convert it to
    # it's proper type, either integer or float, you may want to use try/pass here.
    # int() -  returns an integer object from any number or string.
    my_list = [i for i in values if i.int()]
    return my_list
