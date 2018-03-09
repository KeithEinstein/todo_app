# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Project.create!({name: 'Project 4', description: 'Making Servd App for Dine-In Ordering.'})
Task.create!([
	{name: 'Server Set Up', difficulty_level: 8, status: 'incomplete',project_id: 1}, 
	{name: 'React Set Up', difficulty_level: 2, status: 'incomplete', project_id: 1}, 
	{name: 'API Integration', difficulty_level: 8, status: 'incomplete',project_id: 1},
	{name: 'API Integration 2', difficulty_level: 8, status: 'incomplete',project_id: 1},
	{name: 'API Integration 3', difficulty_level: 8, status: 'incomplete',project_id: 1},
	{name: 'API Integration 4', difficulty_level: 8, status: 'incomplete',project_id: 1},
	{name: 'API Integration 5', difficulty_level: 8, status: 'incomplete',project_id: 1},
	{name: 'API Integration 6', difficulty_level: 8, status: 'incomplete',project_id: 1},
	{name: 'API Integration 7', difficulty_level: 8, status: 'incomplete',project_id: 1}
	])
