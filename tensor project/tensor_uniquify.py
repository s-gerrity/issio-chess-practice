# tensor shape - 2, 3

# check if multiplication identity is met with len of current data
# if its not, take the diff and append 0's one by one (range)
# if it is equal length send to func
# if its too long XXXX



class Tensor():

    # Initializer
    def __init__(self, data, shape):
        self.data = data
        self.shape = shape
        accumulated_total = self.multiply_list(shape)
        new_data = self.confirm_data_length(data, accumulated_total)
        self.tensor = self.shape_data(new_data, shape)


    def confirm_data_length(self, data, accumulated_total):

        data_length = len(data)

        if data_length == accumulated_total:
            return data

        elif data_length < accumulated_total:
            amount_of_data_needed = accumulated_total - data_length
            for i in range(amount_of_data_needed):
                data.append(0)
        else:
            amount_of_data_over =  data_length - accumulated_total
            data = data[:-amount_of_data_over]
    
        return data


    def multiply_list_recursively(self, current_nums, accumulated_total):
        # Base case
        # Return the final state
        if len(current_nums) == 0:
            return accumulated_total

        # Recursive case
        # Thread the state through the recursive call
        else:
            current_number = current_nums[0]
            current_nums = current_nums[1:]
            return self.multiply_list_recursively(current_nums, accumulated_total * current_number)

    def multiply_list(self, numbers):
        # Use our recursive method to multiply each number in this list together.
        # We pass 1 as the `accumulated_total` since that is the multiplicative
        # identity.
        # print("this is working")
        return self.multiply_list_recursively(numbers, 1)


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
data4 = [55, 66, 34, 98]
data3 = [678, 333, 909]
data6 = [0, 89, 0.4, 37, 988887, 2]
data5 = [44, 59, 383, 6]


shape4 = [4]
shape13 = [1, 3]
shape23 = [2, 3]
shape123 = [1, 2, 3]
shape234 = [2, 3, 4]
shape226 = [2, 2, 6]

# Create tensor objects
tensor1 = Tensor(data4, shape4)
tensor2 = Tensor(data3, shape13)
tensor3 = Tensor(data6, shape23)
tensor4 = Tensor(data6, shape123)
tensor5 = Tensor(data_24, shape234)
tensor6 = Tensor(data_24, shape226)

# Test function
def run_test(testValue, expectedResult, description):
    print(description)
    if (testValue == expectedResult):
        print('    ✅ Test passed')
    else:
        print('    ❌ Test failed!')

# Tests
run_test(tensor1.tensor, [55, 66, 34, 98], "4 data: [0, 0, 0, 0]")
run_test(tensor2.tensor, [[678], [333], [909]], "Three sets of data: [[0], [0], [0]]")
run_test(tensor3.tensor, [[0, 89], [0.4, 37], [988887, 2]], "Three sets of two data: [[0, 0], [0, 0], [0, 0]]")
run_test(tensor4.tensor, [[[0], [89]], [[0.4], [37]], [[988887], [2]]], "Three sets of two sets of single data: [[[0], [0]], [[0], [0]], [[0], [0]]]")
run_test(tensor5.tensor, [[[8, 6], [3, 5], [9, 1]], 
                          [[0, 0], [0, 0], [0, 0]], 
                          [[0, 0], [0, 0], [0, 0]], 
                          [[0, 0], [0, 0], [2, 7]]], """Four sets of three sets of two data: [[[0, 0], [0, 0], [0, 0]], 
                                                                                              [[0, 0], [0, 0], [0, 0]], 
                                                                                              [[0, 0], [0, 0], [0, 0]], 
                                                                                              [[0, 0], [0, 0], [0, 0]]]""")
run_test(tensor6.tensor, [[[8, 6], [3, 5]], [[9, 1], [0, 0]], [[0, 0], [0, 0]], 
                         [[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [2, 7]]], """Six sets of two sets of two data: [[[0, 0], [0, 0]], [[0, 0], [0, 0]], 
                                                                                                                      [[0, 0], [0, 0]], [[0, 0], [0, 0]], 
                                                                                                                      [[0, 0], [0, 0]], [[0, 0], [0, 0]]]""")


