import graphene
import time
from graphene_django import DjangoObjectType, DjangoListField
from graphene.types import Field

from app import models


class MedalType(DjangoObjectType):
    class Meta:
        model = models.Medal
        fields = ("id", "medal", "event", "athlete")


class AthleteType(DjangoObjectType):
    class Meta:
        model = models.Athlete
        fields = ("id", "name", "country", "gender", "events", "medals")


class CountryType(DjangoObjectType):
    class Meta:
        model = models.Country
        fields = ("id", "name", "code", "athletes")


class SportType(DjangoObjectType):
    class Meta:
        model = models.Sport
        fields = ("id", "name")


class EventType(DjangoObjectType):
    class Meta:
        model = models.Event
        fields = ("id", "sport", "gender")


class Query(graphene.ObjectType):
    country = graphene.Field(CountryType, id=graphene.Int(required=True))
    countries = graphene.List(CountryType)
    
    medal = graphene.Field(MedalType, id=graphene.Int(required=True))
    medals = graphene.List(MedalType)
    
    athlete = graphene.Field(AthleteType, id=graphene.Int(required=True))
    athletes = graphene.List(AthleteType)
    
    sport = graphene.Field(SportType, id=graphene.Int(required=True))
    sports = graphene.List(SportType)

    event = graphene.Field(EventType, id=graphene.Int(required=True))
    events = graphene.List(EventType)


    def resolve_country(root, info, id):
        time.sleep(2)
        return models.Country.objects.get(id=id)
    
    def resolve_countries(root, info):
        time.sleep(2)
        return models.Country.objects.all()

    def resolve_medal(root, info, id):
        time.sleep(2)
        return models.Medal.objects.get(id=id)
    
    def resolve_medals(root, info):
        time.sleep(2)
        return models.Medal.objects.all()

    def resolve_athlete(root, info, id):
        time.sleep(2)
        return models.Athlete.objects.get(id=id)
    
    def resolve_athletes(root, info):
        time.sleep(2)
        return models.Athlete.objects.all()

    def resolve_sport(root, info, id):
        time.sleep(2)
        return models.Sport.objects.get(id=id)
    
    def resolve_sports(root, info):
        time.sleep(2)
        return models.Sport.objects.all()

    def resolve_event(root, info, id):
        time.sleep(2)
        return models.Event.objects.get(id=id)
    
    def resolve_events(root, info):
        time.sleep(2)
        return models.Event.objects.all()


schema = graphene.Schema(query=Query)