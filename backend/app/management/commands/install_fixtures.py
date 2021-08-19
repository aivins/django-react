from django.core.management.base import BaseCommand, CommandError
from app.fixtures import install_fixtures

class Command(BaseCommand):
    help = 'Install factory boy fixtures'

    def handle(self, *args, **options):
        install_fixtures()