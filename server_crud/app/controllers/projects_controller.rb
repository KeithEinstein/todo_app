class ProjectsController < ApplicationController
  def index
    p "in projects.index"
    projects = Project.all
    render json: projects
  end

  def show
    p "in projects.show"
    project = Project.find(params[:id])
    render json: project
  end

  def create
    p "in projects.create"
    project = Project.create!(project_params)
    render json: project
  end

  def update
    p "in projects.update"
    project = Project.find(params[:id])
    project.update!(project_params)
    render json: project
  end

  def destroy
    p "in projects.destroy"
    project = Project.find(params[:id])
    project.destroy!
    render plain: "project DESTROYED"
  end

  def project_params
    params.require(:project).permit(:name, :description)
  end
end
