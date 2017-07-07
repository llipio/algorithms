#Himanshu Nachane (@Himanshu1495)
'''
Input: An array, a number
Output: number of times the number shows up in the array.

Input: [1,2,2,3], 3
Output: 1
'''

def repeating_element(array,number):
    return array.count(number)

print repeating_element([2,3,4,5,3],3)