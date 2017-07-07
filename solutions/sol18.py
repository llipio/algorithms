#Himanshu Nachane (@Himanshu1495)
'''return missing number in an input array of consecutively increasing numbers.

i: [5,6,8,9]
o: 7
'''

def missing_num(arr):
	first_element = arr[0]
	last_element = arr[-1]
	new_sum = 0
	for x in range(first_element,last_element+1):
		new_sum += x
	return new_sum - sum(arr)



