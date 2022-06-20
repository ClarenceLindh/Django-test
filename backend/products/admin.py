from django.contrib import admin

from django.contrib import admin

from .models import Product


class ProductAdmin(admin.ModelAdmin):
  fieldsets = [
    (None, {'fields': ['name', 'price']}), 
  ]


admin.site.register(Product)
