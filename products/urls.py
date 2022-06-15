from django.contrib import admin
from django.urls import include, path
from .views import ProductViewSet
from rest_framework import routers
from . import views

router = routers.DefaultRouter(trailing_slash=False)
router.register(r'api', ProductViewSet, 'api')


app_name = 'products'
urlpatterns = [
  path('', views.IndexView.as_view(), name='index'),
  path('', include(router.urls)),
  path('products/', include('rest_framework.urls', namespace='rest_framework')),
]
