from django.contrib import admin

from .models import ToDo


@admin.register(ToDo)
class ToDoAdmin(admin.ModelAdmin):
    list_display = ('title', 'completed', 'created_at')
    list_display_links = ('title', 'completed')
    list_filter = ('completed',)
    search_fields = ('title',)
    list_per_page = 25
