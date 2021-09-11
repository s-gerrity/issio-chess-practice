# tensor shape - 2, 3
[[0, 0], [0, 0], [0, 0]]

# tensor shape - 3, 2
[[0, 0, 0], [0, 0, 0]]

# tensor shape - 3, 2, 1
[[[0, 0, 0], [0, 0, 0]]]

# tensor shape - 1, 2, 3
[[[0], [0]], [[0], [0]], [[0], [0]]]



# make an empty space
# look at the last num in shape
# divide that space into that num and make empty spaces
# now look at the next num
# find the next space inside an empty space
#
#
# go through your cards and add that may cards to the first space
# add that many cards to the next space
# do this until there you are out of cards
# if there are extra spaces, add cards with 0 on them

# shape 1, 2, 3
[[[], []], [[], []], [[], []]]


class Tensor():

    # Initializer
    def __init__(self, data, shape):
        self.data = data
        self.shape = shape
        self.tensor = self.shape_data(data, shape)
        

    def shape_data(self, data, shape):
        
        return self.shaping_data(data, shape, [])


    # @method shape_data
    # Take in data to transform into a tensor. The shape determines how
    # the data is structured inside the object.
    def shaping_data(self, data, shape, result_lst):
        # shape.reverse()
        print(shape, "1 shape")

        if len(shape) == 1:
            return result_lst


        head = int(shape[0])
        print(head, "1 head")

        for i in range(head):
            print(i, "i")

            result_lst.append([])
            print(result_lst, "result lst")
        
        shape = shape[1:]
        print(shape, "2 shape")
        # shape.reverse()

        self.shaping_data(data, shape, result_lst)

        # print(result_lst, "RESULT")
        return result_lst


######### Instantiation & Testing ############

# Test data inputs
data_none = []
shape4 = [4]
shape13 = [1, 3]
shape23 = [2, 3]
shape123 = [1, 2, 3]

# Create tensor objects
# tensor1 = Tensor(data_none, shape4)
# tensor2 = Tensor(data_none, shape13)
# tensor3 = Tensor(data_none, shape23)
tensor4 = Tensor(data_none, shape123)


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


print(tensor4.tensor)