# tensor shape - 2, 3
[[0, 0], [0, 0], [0, 0]]

# tensor shape - 3, 2
[[0, 0, 0], [0, 0, 0]]

# tensor shape - 3, 2, 1
[[[0, 0, 0], [0, 0, 0]]]

# tensor shape - 1, 2, 3
[[[0], [0]], [[0], [0]], [[0], [0]]]



# send in args result (empty to start) and shape in reverse
# if len of shape is 1, do something else (return result for now)
# for each element in result, if its an empty list
# for each num in first shape num
# append in an empty list that many times
# if the next element in result is an empty list, repeat
# edit shape to be shorter, cutting off the first index bc we've already looped it
# call youself function with the new shape and new result

# shape 1, 2, 3
[[[], []], [[], []], [[], []]]


class Tensor():

    # Initializer
    def __init__(self, data, shape):
        self.data = data
        self.shape = shape
        self.tensor = self.shape_data(data, shape)


    # @method shape_data
    # Take in data to transform into a tensor. The shape determines how
    # the data is structured inside the object.
    def shape_data(self, data, shape):

        if len(shape) == 1:
            return data

        main_lst = []
        head = int(shape[0])
        i = 0

        # Iterate through the data list over and over until all data elements
        # have been moved into the main list
        while len(main_lst) < (len(data)/ head):
            
            new_lst = []

            # Only iterate through the data list begining after the last element 
            # added. Only iterate up until the head. 
            for item in data[i:head+i]:
                new_lst.append(item)
            # Track how many indices to start each next iteration
            i += head
            main_lst.append(new_lst)

        data = main_lst
        shape = shape[1:]
        

        return self.shape_data(data, shape)




######### Instantiation & Testing ############

# Test data inputs
data_24 = [8, 6, 3, 5, 9, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 7]
shape4 = [4]
shape13 = [1, 3]
shape23 = [2, 3]
shape123 = [1, 2, 3]
shape234 = [2, 3, 4]
shape226 = [2, 2, 6]

# Create tensor objects
# tensor1 = Tensor(data_none, shape4)
# tensor2 = Tensor(data_none, shape13)
# tensor3 = Tensor(data_none, shape23)
# tensor4 = Tensor(data_none, shape123)
tensor5 = Tensor(data_24, shape226)
# tensor6 = Tensor(data_24, shape226)

# Test function
def run_test(testValue, expectedResult, description):
    print(description)
    if (testValue == expectedResult):
        print('    ✅ Test passed')
    else:
        print('    ❌ Test failed!')

# Tests
# run_test(tensor1.tensor, [0, 0, 0, 0], "4 zeroes")
# run_test(tensor2.tensor, [[0], [0], [0]], "Three sets of zero")
# run_test(tensor3.tensor, [[0, 0], [0, 0], [0, 0]], "Three sets of two zeroes")
# run_test(tensor4.tensor, [[[0], [0]], [[0], [0]], [[0], [0]]], "Three sets of two sets of single zeroes")


print(tensor5.tensor)