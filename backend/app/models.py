from django.db import models


GENDER_CHOICES = [
    ('M', 'Man'),
    ('W', 'Woman')
]

GENDER_CHOICES_PLURAL = [
    ('M', 'Men'),
    ('W', 'Women')
]


class Country(models.Model):
    name = models.CharField(max_length=255)
    code = models.CharField(max_length=2)

    def __str__(self):
        return self.name

    @property
    def athletes(self):
        return self.country_athletes


class Sport(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Event(models.Model):
    sport = models.ForeignKey(Sport, related_name='events', on_delete=models.CASCADE)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES_PLURAL)

    def __str__(self):
        genders = dict(GENDER_CHOICES_PLURAL)
        return f"{genders[self.gender]}'s {self.sport.name}"

class Athlete(models.Model):
    name = models.CharField(max_length=255)
    country = models.ForeignKey(Country, related_name='athletes', on_delete=models.CASCADE)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    events = models.ManyToManyField(Event, related_name='athletes')

    def __str__(self):
        return f'{self.name} ({self.country}) ({self.event_count})'

    @property
    def event_count(self):
        return self.events.count()


class Medal(models.Model):
    MEDAL_CHOICES = [
        ('GOLD', 'Gold'),
        ('SILVER', 'Silver'),
        ('BRONZE', 'Bronze')
    ]

    medal = models.CharField(max_length=6, choices=MEDAL_CHOICES)
    event = models.ForeignKey(Event, related_name='medals', on_delete=models.CASCADE)
    athlete = models.ForeignKey(Athlete, related_name='medals', on_delete=models.CASCADE)
