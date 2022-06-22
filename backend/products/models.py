from django.db import models

class Product(models.Model):
  id = models.AutoField(primary_key=True)
  name = models.CharField(max_length=200)
  price = models.FloatField(max_length=200)

  def __str__(self):
    return self.name

