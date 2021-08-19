
import random
from functools import reduce
from django.core.management import call_command
import factory
from faker import Faker
from faker.providers.date_time import Provider as DateTimeProvider
from factory.django import DjangoModelFactory
from app import models
from app.data import SPORTS


faker = Faker()

country_codes = reduce(
    lambda result,item: {**result, item['name']: item.get('alpha-2-code')},
    DateTimeProvider.countries,
    {}
)

class CountryFactory(DjangoModelFactory):
    class Meta:
        model = models.Country

    name = factory.Iterator(country_codes.keys())
    
    @factory.lazy_attribute
    def code(self):
        return country_codes[self.name]


class SportFactory(DjangoModelFactory):
    class Meta:
        model = models.Sport

    name = factory.Iterator(SPORTS)

    @factory.post_generation
    def sports(self, create, extracted, **kwargs):
        if create:
            for gender in ('M', 'W'):
                EventFactory.create(sport=self, gender=gender)


class EventFactory(DjangoModelFactory):
    class Meta:
        model = models.Event


class AthleteFactory(DjangoModelFactory):
    class Meta:
        model = models.Athlete

    country = factory.Iterator(models.Country.objects.all())

    @factory.lazy_attribute
    def gender(self):
        return models.GENDER_CHOICES[round(random.random())][0]

    @factory.lazy_attribute
    def name(self):
        return faker.name_male() if self.gender[0] == 'M' else faker.name_female()

    @factory.post_generation
    def events(self, create, extracted, **kwargs):
        if create and extracted:
            seed = round(random.random() * 10)
            if seed > 9:
                count = 3
            elif seed > 7:
                count = 2
            else:
                count = 1
            for i in range(1, count+1):
                event = random.choice(extracted)
                self.events.add(event)


class MedalFactory(DjangoModelFactory):
    class Meta:
        model = models.Medal



def install_fixtures():
    call_command('reset_db', interactive = False)
    call_command('migrate', interactive = False)

    countries = CountryFactory.create_batch(30)
    sports = SportFactory.create_batch(len(SPORTS))
    events = models.Event.objects.all()
    male_athletes = AthleteFactory.create_batch(300, gender='M', events=events.filter(gender='M'))
    female_athletes = AthleteFactory.create_batch(300, gender='W', events=events.filter(gender='W'))

    def get_athlete(event):
        athletes = event.athletes.all()
        return random.choice(list(athletes))

    for event in events:
        gold = get_athlete(event)
        silver = get_athlete(event)
        bronze = get_athlete(event)

        MedalFactory.create(medal='GOLD', event=event, athlete=gold)
        MedalFactory.create(medal='SILVER', event=event, athlete=silver)
        MedalFactory.create(medal='BRONZE', event=event, athlete=bronze)

        print(f'{event}')
        print(f'  GOLD: {gold.name}, {gold.country}')
        print(f'  SILVER: {silver.name}, {silver.country}')
        print(f'  BRONZE: {bronze.name}, {bronze.country}')




