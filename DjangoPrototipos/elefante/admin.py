from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(Paper)

class ProvaLink(admin.ModelAdmin):
    readonly_fields = ['link']


admin.site.register(Prova, ProvaLink)