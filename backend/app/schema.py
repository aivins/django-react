import graphene
import time
from graphene import relay
from graphene_django import DjangoObjectType, DjangoListField
from graphene_django.filter import DjangoFilterConnectionField
from graphene.types import Field, Int

from app import models

class CountableConnection(relay.Connection):
    class Meta:
        abstract = True

    total_count = Int()

    def resolve_total_count(self, info, **kwargs):
        return self.iterable.count()

class MedalNode(DjangoObjectType):
    class Meta:
        model = models.Medal
        fields = ("id", "medal", "event", "athlete")
        filter_fields = {
            'medal': ['exact', 'icontains', 'istartswith']
        }
        interfaces = (relay.Node, )
        connection_class = CountableConnection


class AthleteNode(DjangoObjectType):
    class Meta:
        model = models.Athlete
        fields = ("id", "name", "country", "gender", "events", "medals")
        filter_fields = {
            'name': ['exact', 'icontains', 'istartswith']
        }
        interfaces = (relay.Node, )
        connection_class = CountableConnection


class CountryNode(DjangoObjectType):
    class Meta:
        model = models.Country
        fields = ("id", "name", "code", "athletes")
        filter_fields = {
            'name': ['exact', 'icontains', 'istartswith']
        }
        interfaces = (relay.Node, )
        connection_class = CountableConnection


class SportNode(DjangoObjectType):
    class Meta:
        model = models.Sport
        fields = ("id", "name")
        filter_fields = {
            'name': ['exact', 'icontains', 'istartswith']
        }
        interfaces = (relay.Node, )
        connection_class = CountableConnection


class EventNode(DjangoObjectType):
    class Meta:
        model = models.Event
        fields = ("id", "sport", "gender")
        filter_fields = {
            'sport__name': ['exact', 'icontains', 'istartswith']
        }
        interfaces = (relay.Node, )
        connection_class = CountableConnection


class Query(graphene.ObjectType):
    country = relay.Node.Field(CountryNode)
    countries = DjangoFilterConnectionField(CountryNode)
 
    medal = relay.Node.Field(MedalNode)
    medals = DjangoFilterConnectionField(MedalNode)
    
    athlete = relay.Node.Field(AthleteNode)
    athletes = DjangoFilterConnectionField(AthleteNode)
    
    sport = relay.Node.Field(SportNode)
    sports = DjangoFilterConnectionField(SportNode)

    event = relay.Node.Field(EventNode)
    events = DjangoFilterConnectionField(EventNode)


    def resolve_country(root, info, id):
        return models.Country.objects.get(id=id)
    
    def resolve_countries(root, info):
        time.sleep(2)
        return models.Country.objects.all()

    def resolve_medal(root, info, id):
        return models.Medal.objects.get(id=id)
    
    def resolve_medals(root, info):
        return models.Medal.objects.all()

    # def resolve_athlete(root, info, id):
    #     return models.Athlete.objects.get(id=id)
    
    # def resolve_athletes(root, info):
    #     return models.Athlete.objects.all()

    # def resolve_sport(root, info, id):
    #     return models.Sport.objects.get(id=id)
    
    # def resolve_sports(root, info):
    #     return models.Sport.objects.all()

    # def resolve_event(root, info, id):
    #     return models.Event.objects.get(id=id)
    
    # def resolve_events(root, info):
    #     return models.Event.objects.all()


schema = graphene.Schema(query=Query)