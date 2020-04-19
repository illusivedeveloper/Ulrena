from flask import Flask, escape, request, render_template, redirect, url_for

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/error")
def error():
    return render_template("error.html")

@app.route("/ip")
def ip():
    return render_template("ip.html")
