from django.db import models
from pickle import TRUE

from django.forms import EmailField

class users(models.Model):
    name = models.CharField(max_length=50)
    city= models.CharField(max_length=250)
    EmailField= models.EmailField()

# Create your models here.
