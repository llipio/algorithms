import sys
sys.path.insert(0,'../solutions/')
from sol18 import missing_num
import unittest

class MyTest(unittest.TestCase):
    def test1(self):
        self.assertEqual(missing_num([10,11,12,14,15,16]),13)
    def test2(self):
        self.assertEqual(missing_num([125,126,128,129,130]),127)
    def test3(self):    
        self.assertEqual(missing_num([1125,1127,1128,1129,1130]),1126)

unittest.main()      
