from django.shortcuts import render
from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import make_password
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from .serializers import (
    UserSerializerWithToken,
    BoardSerializer,
    ClassNameSerializer,
    WeekSerializer,
    TaskSerializer
)

from .models import (
    Board,
    ClassName,
    Week,
    Task,
)

User = get_user_model()

@api_view(['POST'])
def register_user(request):
    data = request.data
    try:
        user = User.objects.create(
            username=data['username'],
            password=make_password(data['password'])
        )
    except:
        message = {'detail': 'user with this username already exists'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

    serializer = UserSerializerWithToken(user, many=False)
    return Response(serializer.data)

@permission_classes(['IsAuthenticated'])
@api_view(['POST'])
def create_board(request):
    data = request.data
    classes = data['classes']

    try:
        board = Board.objects.create(
            user=request.user,
            title=data['title']
        )

        if classes:
            for class_name in classes:
                new_class = ClassName.objects.create(
                    board=board,
                    title=class_name
                )
    except:
        message = {'detail': 'unable to create this board! please try again'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

    serializer = BoardSerializer(board, many=False)
    return Response(serializer.data)

@permission_classes(['IsAuthenticated'])
@api_view(['GET'])
def get_all_boards(request):
    boards = Board.objects.filter(user=request.user).order_by('-updated')

    serializer = BoardSerializer(boards, many=True)
    return Response(serializer.data)

@permission_classes(['IsAuthenticated'])
@api_view(['GET'])
def get_board(request, pk):
    board = Board.objects.filter(user=request.user).get(id=pk)

    serializer = BoardSerializer(board, many=False)
    return Response(serializer.data)

@permission_classes(['IsAuthenticated'])
@api_view(['GET'])
def get_classes(request, pk):
    board = Board.objects.get(id=pk)
    classes = ClassName.objects.filter(board_id=board.id)

    serializer = ClassNameSerializer(classes, many=True)
    return Response(serializer.data)

@permission_classes(['IsAuthenticated'])
@api_view(['DELETE'])
def delete_class(request, pk):
    try:
        className = ClassName.objects.get(id=pk)
        if className.board.user == request.user:
            className.delete()
        
    except:
        message = {'detail': 'unable to deleted this class! please try again'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

    return Response(pk)

@permission_classes(['IsAuthenticated'])
@api_view(['PUT'])
def update_board(request):
    data = request.data
    board = Board.objects.get(id=data['id'])
    classes = data['classes']

    try:
        if board.user == request.user:
            board.title = data['title']
            board.save()

            if classes:
                for class_name in classes:
                    new_class = ClassName.objects.create(
                        board=board,
                        title=class_name
                    )

    except:
        message = {'detail': 'unable to edit this board! please try again'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

    serializer = BoardSerializer(board, many=False)
    return Response(serializer.data)

@permission_classes(['IsAuthenticated'])
@api_view(['DELETE'])
def delete_board(request, pk):
    try:
        board = Board.objects.get(id=pk)
        if board.user == request.user:
            board.delete()
        
    except:
        message = {'detail': 'unable to deleted this board! please try again'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

    return Response(pk)

@permission_classes(['IsAuthenticated'])
@api_view(['GET'])
def get_all_weeks(request, pk):
    try:
        weeks = Week.objects.filter(board_id=pk).order_by('-updated')
    except:
        message = {'detail': 'unable to load weeks! please try again'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

    serializer = WeekSerializer(weeks, many=True)
    return Response(serializer.data)

@permission_classes(['IsAuthenticated'])
@api_view(['POST'])
def add_week(request):
    data = request.data
    board = Board.objects.get(id=data['board'])

    try:
        week = Week.objects.create(
            board=board,
            month=data['month'],
            day=data['day']
        )
    except:
        message = {'detail': 'unable to add this week! please try again'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

    serializer = WeekSerializer(week, many=False)
    return Response(serializer.data)

@permission_classes(['IsAuthenticated'])
@api_view(['GET'])
def get_week(request, pk):
    week = Week.objects.get(id=pk)

    serializer = WeekSerializer(week, many=False)
    return Response(serializer.data)

@permission_classes(['IsAuthenticated'])
@api_view(['DELETE'])
def delete_week(request, pk):
    try:
        week = Week.objects.get(id=pk)
        if week.board.user == request.user:
            week.delete()
        
    except:
        message = {'detail': 'unable to delete this week! please try again'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

    return Response(pk)

@permission_classes(['IsAuthenticated'])
@api_view(['PUT'])
def update_week(request):
    data = request.data
    week = Week.objects.get(id=data['id'])

    try:
        if week.board.user == request.user:
            week.month = data['month']
            week.day = data['day']
            week.save()

    except:
        message = {'detail': 'unable to edit this week! please try again'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

    serializer = WeekSerializer(week, many=False)
    return Response(serializer.data)

@permission_classes(['IsAuthenticated'])
@api_view(['GET'])
def get_board_from_week(request, pk):
    week = Week.objects.get(id=pk)
    board = week.board

    if board.user != request.user:
        message = {'detail': 'unable to get this board! please try again'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

    serializer = BoardSerializer(board, many=False)
    return Response(serializer.data)

@permission_classes(['IsAuthenticated'])
@api_view(['GET'])
def get_week(request, pk):
    week = Week.objects.get(id=pk)

    if week.board.user != request.user:
        message = {'detail': 'unable to get this week! please try again'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

    serializer = WeekSerializer(week, many=False)
    return Response(serializer.data)

@permission_classes(['IsAuthenticated'])
@api_view(['GET'])
def get_tasks(request, pk):
    week = Week.objects.get(id=pk)

    if week.board.user != request.user:
        message = {'detail': 'unable to get this week! please try again'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

    tasks = Task.objects.filter(week=week)

    serializer = TaskSerializer(tasks, many=True)
    return Response(serializer.data)

@permission_classes(['IsAuthenticated'])
@api_view(['GET'])
def get_monday_tasks(request, pk):
    week = Week.objects.get(id=pk)

    if week.board.user != request.user:
        message = {'detail': 'unable to get this week! please try again'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

    tasks = Task.objects.filter(week=week, day=0).order_by('-updated')

    serializer = TaskSerializer(tasks, many=True)
    return Response(serializer.data)

@permission_classes(['IsAuthenticated'])
@api_view(['GET'])
def get_tuesday_tasks(request, pk):
    week = Week.objects.get(id=pk)

    if week.board.user != request.user:
        message = {'detail': 'unable to get this week! please try again'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

    tasks = Task.objects.filter(week=week, day=1).order_by('-updated')

    serializer = TaskSerializer(tasks, many=True)
    return Response(serializer.data)

@permission_classes(['IsAuthenticated'])
@api_view(['GET'])
def get_wednesday_tasks(request, pk):
    week = Week.objects.get(id=pk)

    if week.board.user != request.user:
        message = {'detail': 'unable to get this week! please try again'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

    tasks = Task.objects.filter(week=week, day=2).order_by('-updated')

    serializer = TaskSerializer(tasks, many=True)
    return Response(serializer.data)

@permission_classes(['IsAuthenticated'])
@api_view(['GET'])
def get_thursday_tasks(request, pk):
    week = Week.objects.get(id=pk)

    if week.board.user != request.user:
        message = {'detail': 'unable to get this week! please try again'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

    tasks = Task.objects.filter(week=week, day=3).order_by('-updated')

    serializer = TaskSerializer(tasks, many=True)
    return Response(serializer.data)

@permission_classes(['IsAuthenticated'])
@api_view(['GET'])
def get_friday_tasks(request, pk):
    week = Week.objects.get(id=pk)

    if week.board.user != request.user:
        message = {'detail': 'unable to get this week! please try again'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

    tasks = Task.objects.filter(week=week, day=4).order_by('-updated')

    serializer = TaskSerializer(tasks, many=True)
    return Response(serializer.data)

@permission_classes(['IsAuthenticated'])
@api_view(['GET'])
def get_saturday_tasks(request, pk):
    week = Week.objects.get(id=pk)

    if week.board.user != request.user:
        message = {'detail': 'unable to get this week! please try again'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

    tasks = Task.objects.filter(week=week, day=5).order_by('-updated')

    serializer = TaskSerializer(tasks, many=True)
    return Response(serializer.data)

@permission_classes(['IsAuthenticated'])
@api_view(['GET'])
def get_sunday_tasks(request, pk):
    week = Week.objects.get(id=pk)

    if week.board.user != request.user:
        message = {'detail': 'unable to get this week! please try again'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

    tasks = Task.objects.filter(week=week, day=6).order_by('-updated')

    serializer = TaskSerializer(tasks, many=True)
    return Response(serializer.data)

@permission_classes(['IsAuthenticated'])
@api_view(['GET'])
def get_classes_from_week(request, pk):
    week = Week.objects.get(id=pk)
    board = week.board
    classes = ClassName.objects.filter(board=board)

    if week.board.user != request.user:
        message = {'detail': 'unable to get classes! please try again'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

    serializer = ClassNameSerializer(classes, many=True)
    return Response(serializer.data)

@permission_classes(['IsAuthenticated'])
@api_view(['POST'])
def create_task(request):
    data = request.data
    week = Week.objects.get(id=int(data['weekId']))
    class_name = ClassName.objects.get(id=int(data['classId']))

    try:
        task = Task.objects.create(
            week=week,
            title=data['title'],
            class_name=class_name,
            type=data['taskType'],
            day=int(data['day']),
            time_hour=int(data['hour']),
            time_minute=int(data['minute']),
            am=False,
            completed=False,
        )

        if data['am'] == 'true':
            task.am=True
            task.save()

    except:
        message = {'detail': 'unable to create this task! please try again'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

    serializer = TaskSerializer(task, many=False)
    return Response(serializer.data)

@permission_classes(['IsAuthenticated'])
@api_view(['DELETE'])
def delete_task(request, pk):
    try:
        task = Task.objects.get(id=pk)
        if task.week.board.user == request.user:
            task.delete()
        
    except:
        message = {'detail': 'unable to delete this task! please try again'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

    return Response(pk)

@permission_classes(['IsAuthenticated'])
@api_view(['GET'])
def get_task(request, pk):
    task = Task.objects.get(id=pk)

    serializer = TaskSerializer(task, many=False)
    return Response(serializer.data)

@permission_classes(['IsAuthenticated'])
@api_view(['PUT'])
def update_task(request):
    data = request.data
    week = Week.objects.get(id=int(data['weekId']))
    new_class_name = ClassName.objects.get(id=int(data['classId']))
    task = Task.objects.get(id=data['taskId'])

    try:
        if week.board.user == request.user:
            task.title=data['title']
            task.class_name=new_class_name
            task.type=data['taskType']
            task.day=int(data['day'])
            task.time_hour=int(data['hour'])
            task.time_minute=int(data['minute'])
            task.am=False

            if data['am'] == 'true':
                task.am=True
            task.save()

    except:
        message = {'detail': 'unable to update this task! please try again'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

    serializer = TaskSerializer(task, many=False)
    return Response(serializer.data)

@permission_classes(['IsAuthenticated'])
@api_view(['PUT'])
def complete_task(request):
    data = request.data
    task = Task.objects.get(id=data['id'])

    try:
        if task.week.board.user == request.user:
            if task.completed == False:
                task.completed=True
            else:
                task.completed=False
            task.save()

    except:
        message = {'detail': 'unable to update this task! please try again'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

    serializer = TaskSerializer(task, many=False)
    return Response(serializer.data)

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        data['username'] = self.user.username

        return data

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer