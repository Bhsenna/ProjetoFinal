# Generated by Django 4.1 on 2022-10-21 17:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('elefante', '0002_alter_prova_link'),
    ]

    operations = [
        migrations.AlterField(
            model_name='prova',
            name='link',
            field=models.CharField(default='E4WZ6pQvw9eOWDJa', max_length=20, unique=True),
        ),
    ]
