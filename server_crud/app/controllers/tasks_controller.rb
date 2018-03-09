class TasksController < ApplicationController
  def index
    p "in tasks.index"
    tasks = Task.all
    render json: tasks
  end

  def show
    p "in task.show"
    task = Task.find(params[:id])
    render json: task
  end

  def create
    p "in task.create"
    task = Task.create!(task_params)
    render json: task
  end

  def update
    p "in task.update"
    task = Task.find(params[:id])
    task.update!(task_params)
    render json: task
  end

  def destroy
    p "in task.destroy"
    task = Task.find(params[:id])
    task.destroy!
    render plain: "task DESTROYED"
  end

  def task_params
    params.require(:task).permit(:name, :difficulty_level, :status, :project_id)
  end
end
