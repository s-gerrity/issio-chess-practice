
class Tensor():

    # Initializer
    def __init__(self, data, shape):
        self.data = data
        self.shape = shape
        # Grab the total data elements required for tensor
        accumulated_total = self.multiply_list(shape)
        # Confirm data length and edit as needed
        new_data = self.confirm_data_length(data, accumulated_total)
        # Create tensor
        self.tensor = self.shape_data(new_data, shape)

    # @method: confirm_data_length
    # Takes in self, list, integer
    # Returns: list
    # Counts elements in data list, compares to length needed for tensor. Fills 
    # with zeros to meet length when short, cuts off at needed limit if too long. 
    # Returns as is if equal.
    def confirm_data_length(self, data, data_length_needed):
        data_length = len(data)

        # Returns as is if equal
        if data_length == data_length_needed:
            return data

        # Fills with zeros to meet length when short
        elif data_length < data_length_needed:
            amount_of_data_needed = data_length_needed - data_length
            for i in range(amount_of_data_needed):
                data.append(0)

        # Cuts off at needed limit if too long
        else:
            amount_of_data_over =  data_length - data_length_needed
            data = data[:-amount_of_data_over]
    
        return data

    # @method: multiply_list_recursively
    # Takes in self, list, and integer
    # Returns: integer
    # Multiplies each num in shape to get total length of data list needed to make tensor.
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

    # @method: multiply_list
    # Takes in self and list
    # Returns recursive call to multiply_list_recursively with list and hard-coded 1 int
    # To start using our recursive method to multiply each number in the list together,
    # pass 1 as the 'accumulated_total' since that is the multiplicative identity.
    def multiply_list(self, numbers):

        return self.multiply_list_recursively(numbers, 1)


    # @method shape_data
    # Take in data to transform into a tensor. The shape determines how
    # the data is structured inside the object.
    def shape_data(self, data, shape):

        # Return empty list if there is no shape
        if len(shape) == 0:
            return []

        # Base case
        # Return the final state
        if len(shape) == 1:
            return data

        main_lst = []
        head = int(shape[0])
        i = 0

        # Recursive case
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


# Test inputs
data0 = [0]
data24 = [8, 6, 3, 5, 9, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 7]
data4 = [55, 66, 34, 98]
data3 = [678, 333, 909]
data6 = [0, 89, 0.4, 37, 988887, 2]
data5 = [44, 59, 383, 6, 0.6]

shape0 = []
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
tensor5 = Tensor(data24, shape234)
tensor6 = Tensor(data24, shape226)
tensor7 = Tensor(data5, shape123)
tensor8 = Tensor(data24, shape123)
tensor9 = Tensor(data24, shape0)
tensor10 = Tensor(data0, shape13)


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
                          [[0, 0], [0, 0], [2, 7]]], "Four sets of three sets of two data: \n[[[0, 0], [0, 0], [0, 0]], \n[[0, 0], [0, 0], [0, 0]], \n[[0, 0], [0, 0], [0, 0]], \n[[0, 0], [0, 0], [0, 0]]]")
run_test(tensor6.tensor, [[[8, 6], [3, 5]], [[9, 1], [0, 0]], [[0, 0], [0, 0]], 
                         [[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [2, 7]]], "Six sets of two sets of two data: \n[[[0, 0], [0, 0]], [[0, 0], [0, 0]], \n[[0, 0], [0, 0]], [[0, 0], [0, 0]], \n[[0, 0], [0, 0]], [[0, 0], [0, 0]]]")
run_test(tensor7.tensor, [[[44], [59]], [[383], [6]], [[0.6], [0]]], "Data is short 1 element, add a 0")
run_test(tensor8.tensor, [[[8], [6]], [[3], [5]], [[9], [1]]], "Data has extra elements, cut off at shape limit of 6 elements")
run_test(tensor9.tensor, [], "Shape is empty, return empty list: []")
run_test(tensor10.tensor, [[0], [0], [0]], "Data is empty, return three sets of single zeroes: [[0], [0], [0]]")
