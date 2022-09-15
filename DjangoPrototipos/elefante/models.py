from django.db import models

# Create your models here.
class Paper(models.Model):
    title = models.CharField(max_length=255)


class Question(models.Model):
    descrition = models.TextField()
    answer = models.TextField()
    papers = models.ManyToManyField(Paper, through='PaperQuestion')


class PaperQuestion(models.Model):
    question = models.ForeignKey(Question, on_delete=models.PROTECT)
    paper = models.ForeignKey(Paper, on_delete=models.PROTECT)
    active = models.BooleanField()
    order = models.IntegerField()

    class Meta():
        ordering = ['order',]