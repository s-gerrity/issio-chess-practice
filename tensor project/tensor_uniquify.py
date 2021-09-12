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
        

    def shape_data(self, data, shape):
        # have the tensor work from the 'outside in'
        shape.reverse()
        result = []
        
        return self.shaping_data(data, shape, result)


    # @method shape_data
    # Take in data to transform into a tensor. The shape determines how
    # the data is structured inside the object.
    def shaping_data(self, data, shape, result_lst):

        # # TODO: if the len of shape is 1, then adding data in will have to happen
        if len(shape) == 1:
            return result_lst
        
        head = shape[0]


        for i in range(head):
            result_lst.append([])
        
        result_lst = result_lst[0]
        shape = shape[1:]

        self.shaping_data(data, shape, result_lst) 


        return result_lst

        # # TODO: if the len of shape is 1, then adding data in will have to happen
        # if len(shape) == 1:
        #     return result_lst

        # head = shape[0]

        # new_lst = []
        # for i in range(head):
        #     new_lst.append([])
        # result_lst.append(new_lst)

        # shape = shape[1:]
        # self.shaping_data(data, shape, result_lst)  

        # return result_lst




######### Instantiation & Testing ############

# Test data inputs
data_none = []
shape4 = [4]
shape13 = [1, 3]
shape23 = [2, 3]
shape123 = [1, 2, 3]
shape234 = [2, 3, 4]

# Create tensor objects
# tensor1 = Tensor(data_none, shape4)
# tensor2 = Tensor(data_none, shape13)
# tensor3 = Tensor(data_none, shape23)
# tensor4 = Tensor(data_none, shape123)
tensor5 = Tensor(data_none, shape234)

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