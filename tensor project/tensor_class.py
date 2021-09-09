class Tensor():

    def __init__(self, data, shape):
        self.data = data
        self.shape = shape
        # not sure what to put for the tensor, but they had this field in the sample
        self.tensor = "aloha"



    def transform_tensor_single_digit(self, data, shape):

        if data == []:
            if len(shape) > 1:
                append_zeroes = shape[0]
                iterate_lst = shape[1:]
                iterate_lst.reverse()
                zeroes = []
                result = []
                data = 0
                for i in range(append_zeroes):
                    zeroes.append(data)
                
                for k in iterate_lst:
                    for j in range(k):
                        result.append(zeroes)
                return result

            else:
                result = []
                data = 0

                for i in shape:
                    j = 0
                    while j < i:
                        result.append(data)
                        j += 1
                return result


######### Instantiation & Testing ############

data_none = []
shape4 = [4]
shape13 = [1, 3]
shape23 = [2, 3]
shape123 = [1, 2, 3]

tensor1 = Tensor(data_none, shape4)
tensor2 = Tensor(data_none, shape13)
tensor3 = Tensor(data_none, shape23)
tensor4 = Tensor(data_none, shape123)


def run_test(testValue, expectedResult, description):
    print(description)
    if (testValue == expectedResult):
        print('    ✅ Test passed')
    else:
        print('    ❌ Test failed!')


run_test(tensor1.transform_tensor_single_digit([], [4]), [0, 0, 0, 0], "4 zeroes")
run_test(tensor2.transform_tensor_single_digit(data_none, shape13), [[0], [0], [0]], "Three sets of zero")
run_test(tensor3.transform_tensor_single_digit(data_none, shape23), [[0, 0], [0, 0], [0, 0]], "Three sets of two zeroes")
run_test(tensor4.transform_tensor_single_digit(data_none, shape123), [[[0], [0]], [[0], [0]], [[0], [0]]], "Three sets of two sets of single zeroes")