def move_zeros(array):
    # Separate the numeric and non-numeric elements
    numeric_values = [x for x in array if isinstance(x, (int, float))]
    non_numeric_values = [x for x in array if not isinstance(x, (int, float))]
    
    # Sort the numeric values, moving zeros to the end
    numeric_values.sort(key=lambda x: (x == 0, x))
    
    # Concatenate the sorted numeric values with the non-numeric values
    sorted_array = numeric_values + non_numeric_values
    
    return sorted_array

result = move_zeros([False, 1, 0, 1, 2, 0, 1, 3, "a"])
print(result)
