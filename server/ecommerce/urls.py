from django.urls import path, include
from .views import (
    store, Signup, Login, logout, CheckOut, OrderView,
)
from django.conf import settings
from django.conf.urls.static import static
import os

urlpatterns = [
    # URLs para la API (React)
    path('api/productos/', store, name='api_productos'),
    path('api/login/', Login.as_view(), name='api_login'),
    
    # URLs originales (Django templates)
    path('', store, name='homepage'),
    path('signup/', Signup.as_view(), name='signup'),
    path('login/', Login.as_view(), name='login'),
    path('logout/', logout, name='logout'),
    path('checkout/', CheckOut.as_view(), name='checkout'),
    path('orders/', OrderView.as_view(), name='orders'),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=os.path.join(settings.BASE_DIR, 'static'))
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)