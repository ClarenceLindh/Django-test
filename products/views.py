from unicodedata import name
from django.shortcuts import render
from django.views import generic
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import ProductSerializer

from .models import Product

class IndexView(generic.ListView):
  template_name = 'products/index.html'
  context_object_name = 'latest_product_list'

  def get_queryset(self):
    return Product.objects.all()

class ProductViewSet(viewsets.ModelViewSet):
  """
  API endpoint that allows products to be viewd or edited.
  """
  queryset = Product.objects.all().order_by('-name')
  serializer_class = ProductSerializer
  permission_classes = [permissions.IsAuthenticated]

