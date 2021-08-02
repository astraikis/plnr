from django.db import models

from django.contrib.auth.models import User

class Board(models.Model):
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE
    )
    title = models.CharField(max_length=40)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

class ClassName(models.Model):
    board = models.ForeignKey(
        Board,
        on_delete=models.CASCADE
    )
    title = models.CharField(max_length=25)

    def __str__(self):
        return self.title

class Week(models.Model):
    board = models.ForeignKey(
        Board,
        on_delete=models.CASCADE
    )
    day = models.IntegerField()
    month = models.IntegerField()
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.month) + '/' + str(self.day)

class Task(models.Model):
    week = models.ForeignKey(
        Week,
        on_delete=models.CASCADE
    )
    title = models.CharField(max_length=40)
    note = models.CharField(
        max_length=100,
        blank=True,
        null=True
    )
    class_name = models.ForeignKey(
        ClassName,
        on_delete=models.CASCADE
    )
    type = models.CharField(max_length=40)
    day = models.IntegerField()
    time_hour = models.IntegerField(
        blank=True,
        null=True
    )
    time_minute = models.IntegerField(
        blank=True,
        null=True
    )
    am = models.BooleanField(
        default=True,
        blank=True,
        null=True
    )
    completed = models.BooleanField(default=False)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title