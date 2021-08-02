from django.contrib import admin
from django.urls import path
from base import views
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='index.html')),
    path('api/users/login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/users/register/', views.register_user),

    path('api/boards/create-board/', views.create_board),
    path('api/boards/get-all-boards/', views.get_all_boards),
    path('api/boards/get-board/<int:pk>/', views.get_board),
    path('api/boards/get-classes/<int:pk>/', views.get_classes),
    path('api/boards/delete-class/<int:pk>/', views.delete_class),
    path('api/boards/update-board/', views.update_board),
    path('api/boards/delete-board/<int:pk>/', views.delete_board),

    path('api/weeks/get-all-weeks/<int:pk>/', views.get_all_weeks),
    path('api/weeks/add-week/', views.add_week),
    path('api/weeks/get-week/<int:pk>/', views.get_week),
    path('api/weeks/delete-week/<int:pk>/', views.delete_week),
    path('api/weeks/update-week/', views.update_week),
    path('api/weeks/get-board-from-week/<int:pk>/', views.get_board_from_week),
    path('api/weeks/get-week/<int:pk>/', views.get_week),
    path('api/weeks/get-classes-from-week/<int:pk>/', views.get_classes_from_week),

    path('api/tasks/get-tasks/<int:pk>/', views.get_tasks),
    path('api/tasks/get-monday-tasks/<int:pk>/', views.get_monday_tasks),
    path('api/tasks/get-tuesday-tasks/<int:pk>/', views.get_tuesday_tasks),
    path('api/tasks/get-wednesday-tasks/<int:pk>/', views.get_wednesday_tasks),
    path('api/tasks/get-thursday-tasks/<int:pk>/', views.get_thursday_tasks),
    path('api/tasks/get-friday-tasks/<int:pk>/', views.get_friday_tasks),
    path('api/tasks/get-saturday-tasks/<int:pk>/', views.get_saturday_tasks),
    path('api/tasks/get-sunday-tasks/<int:pk>/', views.get_sunday_tasks),
    path('api/tasks/create-task/', views.create_task),
    path('api/tasks/delete-task/<int:pk>/', views.delete_task),
    path('api/tasks/get-task/<int:pk>/', views.get_task),
    path('api/tasks/update-task/', views.update_task),
    path('api/tasks/complete-task/', views.complete_task),
]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)