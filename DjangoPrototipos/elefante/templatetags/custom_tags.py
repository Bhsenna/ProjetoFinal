from django import template

register = template.Library()


@register.simple_tag
def update_variable(value):
    return value


register.filter('update_variable', update_variable)