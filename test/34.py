'''
Input: An array, a number
Output: number of times the number shows up in the array.

Input: [1,2,2,3], 3
Output: 1
'''
import sys
sys.path.insert(0,'../solutions/')
from sol34 import repeating_element
import unittest


class MyTest(unittest.TestCase):
    def test1(self):
        self.assertEqual(repeating_element([10,1,12,4,16,16],16),2)
    def test2(self):
        self.assertEqual(repeating_element([-164,170,61,-164,152,44,16,-164],-164),3)
    def test3(self):    
        self.assertEqual(repeating_element([1340,1456,1452,4546,1667,1237],1667),1)

unittest.main()      
