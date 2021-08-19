from django.urls import path
from django.views.decorators.csrf import csrf_exempt
from graphene_django.views import GraphQLView

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path("graphql", csrf_exempt(GraphQLView.as_view(graphiql=True)))
]