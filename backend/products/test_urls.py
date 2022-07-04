from django.test import TestCase

class URLTests(TestCase):
  def test_productspage(self):
    response = self.client.get('/products/')
    self.assertEqual(response.status_code, 200)

  # def test_productsapipage(self):
  #   response = self.client.get('/products/api/')
  #   self.assertEqual(response.status_code, 200)

  def test_adminloginpage(self):
    response = self.client.get('/admin/login/?next=/admin/')
    self.assertEqual(response.status_code, 200)
    