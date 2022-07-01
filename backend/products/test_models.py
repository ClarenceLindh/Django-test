from django.test import TestCase
from models import Product

class ProductTestCase(TestCase):
  def setUp(self):
    Product.objects.create(id=1, name="Test product 1", price=10)
    Product.objects.create(id=2, name="Test product 2", price=20)
  
  def test_product_names(self):
    testProduct1 = Product.object.get(id=1)
    testProduct2 = Product.object.get(id=2)
    self.assertEqual(testProduct1.speak(), 'This is 1')
    self.assertEqual(testProduct2.speak(), 'This is 2')