# tensor shape - 2, 3
[[0, 0], [0, 0], [0, 0]]

# tensor shape - 3, 2
[[0, 0, 0], [0, 0, 0]]

# tensor shape - 1, 2, 3
[[[0], [0]], [[0], [0]], [[0], [0]]]

# tensor shape - 3, 2, 1
[[[0, 0, 0], [0, 0, 0]]]


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

        # TODO: This method only handles an empty data list; need to make it work for
        # data with nums
        if data == []:
            # If the shape is more than one digit, it has nested loops
            if len(shape) > 1:
                # The amount of zeroes per list
                append_zeroes = shape[0]
                iterate_shape = shape[1:]
                # Start with the outer list and work inward
                iterate_shape.reverse()
                zeroes_per_list = []
                tensor_list_result = []
                # Assign the data as a 0 when none is given
                data = 0

                # Make a list for the innermost list
                for i in range(append_zeroes):
                    zeroes_per_list.append(data)
                
                # Each shape argument is iterated over and adds the data
                for num in iterate_shape:
                    for j in range(num):
                        tensor_list_result.append(zeroes_per_list)
                return tensor_list_result

            # For one-dimensional list only 
            else:
                tensor_list_result = []
                data = 0

                for num in shape:
                    j = 0
                    while j < num:
                        tensor_list_result.append(data)
                        j += 1
                return tensor_list_result


######### Instantiation & Testing ############

# Test data inputs
data_none = []
shape4 = [4]
shape13 = [1, 3]
shape23 = [2, 3]
shape123 = [1, 2, 3]

# Create tensor objects
tensor1 = Tensor(data_none, shape4)
tensor2 = Tensor(data_none, shape13)
tensor3 = Tensor(data_none, shape23)
tensor4 = Tensor(data_none, shape123)


# Test function
def run_test(testValue, expectedResult, description):
    print(description)
    if (testValue == expectedResult):
        print('    ✅ Test passed')
    else:
        print('    ❌ Test failed!')

# Tests
run_test(tensor1.tensor, [0, 0, 0, 0], "4 zeroes")
run_test(tensor2.tensor, [[0], [0], [0]], "Three sets of zero")
run_test(tensor3.tensor, [[0, 0], [0, 0], [0, 0]], "Three sets of two zeroes")
run_test(tensor4.tensor, [[[0], [0]], [[0], [0]], [[0], [0]]], "Three sets of two sets of single zeroes")