from dis import Instruction
from flask import Flask, render_template
import json

app = Flask(__name__,template_folder='./templates')

@app.route('/')
def home():
    with open('./datas/blog_posts.json', 'r',encoding='utf-8') as file:
        blog_posts = json.load(file)
    return render_template('home.html',blog_posts=blog_posts)

@app.route('/calculator')
def calculator():
    with open('./datas/dosage_names.json', 'r',encoding='utf-8') as file:
        dosage_names = json.load(file)
    with open('./datas/dose_frequencies.json', 'r',encoding='utf-8') as file:
        dose_frequencies = json.load(file)
    with open('./datas/additional_instructions.json', 'r',encoding='utf-8') as file:
        additional_instructions = json.load(file)
    return render_template('calculator.html', dosage_names=dosage_names,dose_frequencies=dose_frequencies,additional_instructions=additional_instructions)


@app.route('/ilac-rejimi-indeksi-nedir')
def articles():
    with open('./datas/articles.json', 'r', encoding='utf-8') as file:
        articles = json.load(file)
    return render_template('articles.html',articles=articles)


@app.route('/rehber')
def guidebook():
    with open('./datas/guide_book.json','r', encoding='utf=8') as file:
        guide_book = json.load(file)
    return render_template('guidebook.html',guidebook=guidebook)

if __name__ == '__main__':
    app.run(debug=True, port=8080)
