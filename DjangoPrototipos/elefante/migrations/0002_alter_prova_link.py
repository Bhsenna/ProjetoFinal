# Generated by Django 4.1.2 on 2022-10-21 01:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('elefante', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='prova',
            name='link',
            field=models.CharField(default='o4nXz1yYOYpZOBg8', max_length=20, unique=True),
        ),
    ]
