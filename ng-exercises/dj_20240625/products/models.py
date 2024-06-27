from django.db import models

class Product(models.Model):
    productName = models.CharField(max_length=100)
    productPhotoUrl = models.CharField(max_length=1000)

    def __str__(self):
        return self.name
