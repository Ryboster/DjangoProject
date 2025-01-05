import json
from django import template
from django.utils.html import escape

register = template.Library()


@register.filter
def json_script(value):
    json_data = json.dumps(value)
    #return f'<script id="{id_}" type="application/json">{escape(json_data)}</script>'
    return json_data
