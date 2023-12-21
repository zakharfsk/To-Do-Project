"""
URL configuration for to_do_django project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.shortcuts import redirect
from django.urls import include, path
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView

router = [
    path("todo/", include("todo_api.urls")),
    path('docs/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui')
]

urlpatterns = [
    path("", lambda request: redirect("docs")),
    # Admin Urls
    path('admin/', admin.site.urls),
    # API Urls
    path('api/v1/', include(router)),
    # Spectacular Urls
    path('api/schema/', SpectacularAPIView.as_view(), name='schema'),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

