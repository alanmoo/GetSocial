from flask import Flask
from app import app

@app.route('/')
@app.route('/index')
def index():
    return "This is the base route"

@app.errorhandler(404)
def page_not_found(e):
    error = 'This page does not exist'
    return 'path does not exist'
@app.errorhandler(500)
def internal_server_error(error):
    return error
